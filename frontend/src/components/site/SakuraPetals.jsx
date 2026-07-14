import React, { useMemo } from "react";

const PETAL_COUNT = 18;
const PETAL_TINTS = ["#F7B7C9", "#F9C9D6", "#F4A9BE", "#FBD7E1"];

/**
 * Ambient falling cherry-blossom petals. Mounted once at the app root so the
 * motion frame drifts behind the content of every page. Fixed + pointer-events
 * none so it never blocks interaction; hidden under prefers-reduced-motion.
 */
export default function SakuraPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => {
        const size = 10 + Math.random() * 14;
        return {
          id: i,
          left: Math.random() * 100,
          size,
          dropDur: 9 + Math.random() * 9,
          swayDur: 3 + Math.random() * 3,
          delay: -Math.random() * 18,
          opacity: 0.35 + Math.random() * 0.4,
          tint: PETAL_TINTS[i % PETAL_TINTS.length],
        };
      }),
    []
  );

  return (
    <div className="sakura-layer" aria-hidden="true" data-testid="sakura-layer">
      {petals.map((p) => (
        <span
          key={p.id}
          className="sakura-drop"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.dropDur}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <span className="sakura-sway" style={{ animationDuration: `${p.swayDur}s` }}>
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 20 20"
              style={{ opacity: p.opacity }}
            >
              <path
                d="M10 1C13 5 17 8 12.5 16.5 11.6 18 8.4 18 7.5 16.5 3 8 7 5 10 1Z"
                fill={p.tint}
              />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
