import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PresentationControls, Float, ContactShadows, Html } from "@react-three/drei";

const FLAME = "#E14A21";
const STEEL = "#1c1c1e";
const LIGHTSTEEL = "#3a3a3d";

function Hotspot({ position, label, value }) {
  return (
    <Html position={position} distanceFactor={9} center>
      <div className="flex items-center gap-2 whitespace-nowrap select-none" data-testid={`crane-hotspot-${label.toLowerCase().replace(/\s/g, "-")}`}>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E14A21] opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FF4500]" />
        </span>
        <div className="glass rounded-sm px-2.5 py-1">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">{label}</p>
          <p className="font-mono text-[11px] font-medium text-white">{value}</p>
        </div>
      </div>
    </Html>
  );
}

function CraneModel() {
  const hook = useRef();
  const boom = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (hook.current) hook.current.position.y = -2.6 + Math.sin(t * 1.2) * 0.08;
    if (boom.current) boom.current.rotation.z = 0.72 + Math.sin(t * 0.4) * 0.04;
  });

  return (
    <group position={[0, -1.3, 0]} scale={0.74}>
      {/* Chassis */}
      <mesh position={[0, 0.55, 0]} castShadow>
        <boxGeometry args={[3.4, 0.7, 1.2]} />
        <meshStandardMaterial color={STEEL} metalness={0.7} roughness={0.35} />
      </mesh>
      {/* Deck accent stripe */}
      <mesh position={[0, 0.92, 0]}>
        <boxGeometry args={[3.42, 0.06, 1.22]} />
        <meshStandardMaterial color={FLAME} metalness={0.4} roughness={0.4} emissive={FLAME} emissiveIntensity={0.25} />
      </mesh>
      {/* Wheels */}
      {[-1.2, -0.4, 0.4, 1.2].map((x) => (
        <group key={x}>
          {[-0.62, 0.62].map((z) => (
            <mesh key={z} position={[x, 0.2, z]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.28, 0.28, 0.22, 20]} />
              <meshStandardMaterial color="#0d0d0e" metalness={0.2} roughness={0.9} />
            </mesh>
          ))}
        </group>
      ))}
      {/* Cab */}
      <mesh position={[-1.25, 1.35, 0]} castShadow>
        <boxGeometry args={[0.9, 0.85, 1.1]} />
        <meshStandardMaterial color={LIGHTSTEEL} metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[-1.05, 1.4, 0]}>
        <boxGeometry args={[0.55, 0.4, 1.12]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Turntable */}
      <mesh position={[0.4, 1.15, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.8, 0.5, 24]} />
        <meshStandardMaterial color={FLAME} metalness={0.4} roughness={0.35} emissive={FLAME} emissiveIntensity={0.12} />
      </mesh>
      {/* Counterweight */}
      <mesh position={[0.05, 1.5, 0]} castShadow>
        <boxGeometry args={[0.5, 0.7, 0.9]} />
        <meshStandardMaterial color={STEEL} metalness={0.6} roughness={0.5} />
      </mesh>

      {/* Boom assembly (pivots) */}
      <group ref={boom} position={[0.4, 1.5, 0]} rotation={[0, 0, 0.72]}>
        <mesh position={[2.4, 0, 0]} castShadow>
          <boxGeometry args={[5.2, 0.34, 0.34]} />
          <meshStandardMaterial color={FLAME} metalness={0.45} roughness={0.35} emissive={FLAME} emissiveIntensity={0.15} />
        </mesh>
        {/* lattice ticks */}
        {Array.from({ length: 9 }).map((_, i) => (
          <mesh key={i} position={[0.4 + i * 0.55, 0, 0]}>
            <boxGeometry args={[0.05, 0.42, 0.42]} />
            <meshStandardMaterial color="#7a2500" metalness={0.5} roughness={0.4} />
          </mesh>
        ))}
        {/* boom tip sheave */}
        <mesh position={[5.0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.4, 16]} />
          <meshStandardMaterial color={LIGHTSTEEL} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* cable + hook hang vertically (counter-rotate the boom tilt) */}
        <group position={[5.0, 0, 0]} rotation={[0, 0, -0.72]}>
          <mesh position={[0, -1.3, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 2.6, 6]} />
            <meshStandardMaterial color="#555" metalness={0.9} roughness={0.3} />
          </mesh>
          <mesh ref={hook} position={[0, -2.6, 0]} castShadow>
            <boxGeometry args={[0.22, 0.4, 0.22]} />
            <meshStandardMaterial color={LIGHTSTEEL} metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      </group>

      <Hotspot position={[3.0, 3.6, 0]} label="Slew range" value="50–250 t" />
      <Hotspot position={[-1.6, 1.9, 0]} label="Coverage" value="VIC · QLD · SA" />
    </group>
  );
}

export default function Crane3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [6, 3.2, 8], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      data-testid="crane-3d-canvas"
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 5]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
      <spotLight position={[-6, 6, -2]} angle={0.5} penumbra={0.8} intensity={40} color={FLAME} />
      <spotLight position={[0, 9, 6]} angle={0.6} penumbra={1} intensity={30} color="#ffffff" />
      <Suspense fallback={null}>
        <PresentationControls
          global
          polar={[-0.25, 0.35]}
          azimuth={[-0.9, 0.9]}
          config={{ mass: 2, tension: 300 }}
          snap={{ mass: 3, tension: 200 }}
        >
          <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
            <CraneModel />
          </Float>
        </PresentationControls>
        <ContactShadows position={[0, -1.75, 0]} opacity={0.55} scale={16} blur={2.6} far={5} color="#000000" />
      </Suspense>
    </Canvas>
  );
}
