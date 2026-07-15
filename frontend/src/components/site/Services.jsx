import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site-data";

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32" data-testid="services-section">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-flame/15 blur-3xl" />
        <div className="absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-flamedeep/12 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Services — 5 divisions</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
                What we <span className="text-stroke-flame">lift.</span>
              </h2>
            </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink/70">
              From a single Franna shift to engineered 250T lifts and helicopter operations — every service backed by planning, crews and haulage under one roof.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <Link
                to={`/${s.slug}`}
                className="glass-light glass-sheen glass-hover group flex h-full flex-col justify-between rounded-3xl p-7"
                data-testid={`service-card-${s.slug}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs text-flame">CH. {s.chapter}</p>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink transition-colors group-hover:bg-flame group-hover:text-cream">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-2xl font-black leading-tight text-ink sm:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
