import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FLEET } from "@/lib/site-data";

const featured = FLEET.filter((f) => ["AT-100", "TWR-65", "HELI"].includes(f.code));

export default function Fleet() {
  return (
    <section className="border-y-[3px] border-ink bg-obsidian py-24 sm:py-32" data-testid="fleet-section">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">The machinery</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
                The <span className="text-flame">fleet.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-cream/50">
              Full spec sheets live on each service page — capacity, boom length, tip height and more.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((f, i) => (
            <Reveal key={f.code} delay={i * 0.1}>
              <Link
                to={`/${f.serviceSlug}`}
                className="glass-panel glass-hover glass-sheen group block overflow-hidden rounded-3xl"
                data-testid={`fleet-feature-${f.code}`}
              >
                <div className="overflow-hidden bg-black">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-flame">{f.code}</p>
                    <h3 className="mt-1 font-display text-xl font-black text-cream">{f.name}</h3>
                  </div>
                  <ArrowRight size={18} className="text-flame transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
