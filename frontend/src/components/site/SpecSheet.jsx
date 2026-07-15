import React from "react";
import { Link } from "react-router-dom";
import { Anchor, Ruler, ArrowUpToLine, Target, MoveDiagonal, Cog, Weight, Timer, Mountain, RadioTower } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const ICONS = {
  hook: Anchor,
  boom: Ruler,
  height: ArrowUpToLine,
  radius: Target,
  jib: MoveDiagonal,
  axle: Cog,
  weight: Weight,
  timer: Timer,
  grade: Mountain,
  remote: RadioTower,
};

export default function SpecSheet({ machine, index = 0, linkService = false }) {
  return (
    <Reveal>
      <div className="glass-panel glass-sheen rounded-[2rem] p-6 sm:p-10" data-testid={`fleet-sheet-${machine.code}`}>
        <div className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className={`relative overflow-hidden rounded-3xl ${machine.vector ? "bg-gradient-to-br from-white/[0.06] to-black" : "bg-black"}`}>
            <img
              src={machine.image}
              alt={machine.name}
              className={`w-full ${
                machine.vector
                  ? "aspect-[3/2] object-contain p-6"
                  : machine.portrait
                  ? "max-h-[540px] object-cover object-top"
                  : "aspect-[3/2] object-cover"
              }`}
              loading="lazy"
            />
            <span className="absolute left-4 top-4 rounded-full border border-flame/50 bg-black/60 px-4 py-1.5 font-wide text-xs text-flame backdrop-blur">
              {machine.code}
            </span>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">{machine.tagline}</p>
            <h3 className="mt-3 font-display text-3xl font-black text-cream sm:text-4xl">{machine.name}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60">{machine.blurb}</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {machine.specs.map((sp) => {
                const Icon = ICONS[sp.icon] || Anchor;
                return (
                  <div key={sp.label} className="spec-card rounded-xl p-4">
                    <Icon size={16} className="text-flame" />
                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-cream/50">{sp.label}</p>
                    <p className="mt-1 font-display text-lg font-black text-cream">
                      {sp.value} <span className="text-[11px] font-bold text-flame">{sp.unit}</span>
                    </p>
                  </div>
                );
              })}
            </div>
            {linkService && (
              <Link
                to={`/${machine.serviceSlug}`}
                className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-flame transition-colors hover:text-cream"
                data-testid={`fleet-service-link-${machine.code}`}
              >
                View service →
              </Link>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
