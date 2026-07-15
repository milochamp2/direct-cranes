import React from "react";
import { Reveal } from "@/components/site/Reveal";
import { INDUSTRIES } from "@/lib/site-data";

export default function Industries() {
  return (
    <section className="border-y-[3px] border-ink bg-flame py-12 sm:py-14" data-testid="industries-section">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink">Who we lift for</p>
          <h2 className="mt-3 font-display text-4xl font-black leading-[0.95] text-cream sm:text-5xl">
            Every industry that builds.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="sticker-sm rounded-full bg-cream px-5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink"
                data-testid={`industry-chip-${ind.toLowerCase().replace(/[\s&]+/g, "-")}`}
              >
                {ind}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
