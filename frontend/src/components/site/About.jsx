import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BRAND, IMG } from "@/lib/site-data";

export default function About() {
  return (
    <section className="bg-cream py-24 sm:py-32" data-testid="about-section">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">About Direct Cranes</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
              One company. <br />
              <span className="text-stroke-flame">Complete lift.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/75 sm:text-base">
              Direct Cranes Hire delivers complete crane hire and lifting solutions across Melbourne, Brisbane and South Australia. Cranes, operators, riggers, heavy haulage and coordination under one roof — your project never waits on a subcontractor.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/75 sm:text-base">
              From tight-access Franna shifts to engineered 250T slew lifts and helicopter operations, safety and reliability lead every job.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={BRAND.phoneHref}
                className="sticker sticker-hover inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream"
                data-testid="about-call-btn"
              >
                <Phone size={14} /> {BRAND.phone}
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-flame transition-colors hover:text-ink"
                data-testid="about-more-link"
              >
                More about us <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative" data-testid="about-photo-card">
              <div className="sticker sticker-hover -rotate-1 overflow-hidden rounded-[2rem]">
                <img
                  src={IMG.iconic}
                  alt="Direct Cranes operator giving a thumbs up beside a 25T Franna"
                  className="aspect-[4/5] w-full object-cover sm:aspect-square"
                  loading="lazy"
                />
              </div>
              <span className="sticker-sm absolute -bottom-4 left-6 rotate-2 rounded-full bg-flame px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-cream">
                The Direct thumbs-up ✓
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
