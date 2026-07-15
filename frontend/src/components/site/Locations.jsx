import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICE_AREAS } from "@/lib/site-data";

export default function Locations() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32" data-testid="locations-section">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-flame/12 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Coverage</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
                Three states, <span className="text-stroke-flame">one call.</span>
              </h2>
            </div>
            <Link
              to="/locations"
              className="sticker-hover flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
              data-testid="locations-view-all-btn"
            >
              All locations <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((loc, i) => (
            <Reveal key={loc.code} delay={i * 0.1}>
              <div className="glass-light glass-sheen glass-hover h-full rounded-3xl p-8" data-testid={`location-card-${loc.code}`}>
                <p className="font-display text-6xl font-black text-stroke-flame">{loc.code}</p>
                <h3 className="mt-5 font-display text-2xl font-black text-ink">{loc.state}</h3>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-flame">
                  <MapPin size={12} /> {loc.depot}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{loc.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
