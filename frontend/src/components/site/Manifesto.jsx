import React from "react";
import { Reveal } from "@/components/site/Reveal";
import { VALUES } from "@/lib/site-data";

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32" data-testid="manifesto-section">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-flame/20 blur-3xl" />
        <div className="absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-flamedeep/15 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">The Direct way</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
            Heavy lifting, done <span className="text-stroke-flame">properly.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.12}>
              <div className="glass-light glass-sheen glass-hover h-full rounded-3xl p-8" data-testid={`manifesto-card-${v.n}`}>
                <p className="font-display text-6xl font-black text-flame">{v.n}</p>
                <h3 className="mt-6 font-display text-2xl font-black leading-tight text-ink">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
