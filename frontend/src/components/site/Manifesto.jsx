import React from "react";
import { Reveal } from "@/components/site/Reveal";
import { VALUES } from "@/lib/site-data";

export default function Manifesto() {
  return (
    <section className="bg-cream py-24 sm:py-32" data-testid="manifesto-section">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">The Direct way</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
            Heavy lifting, done <span className="text-stroke-flame">properly.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.12}>
              <div className="sticker sticker-hover h-full rounded-3xl bg-cream p-8" data-testid={`manifesto-card-${v.n}`}>
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
