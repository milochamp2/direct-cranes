import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Phone, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, MaskedLines } from "@/components/site/Reveal";
import Seo from "@/components/site/Seo";
import SpecSheet from "@/components/site/SpecSheet";
import { BRAND, SERVICES, FLEET } from "@/lib/site-data";

export default function ServicePage({ slug }) {
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  if (idx === -1) return <Navigate to="/" replace />;
  const service = SERVICES[idx];
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];
  const machines = FLEET.filter((m) => service.machines.includes(m.code));

  return (
    <div key={slug} data-testid={`service-page-${slug}`}>
      <Seo title={service.title} description={service.short} path={`/${slug}`} />
      {/* Header */}
      <section className="bg-cream pb-16 pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame" data-testid="service-breadcrumb">
            Direct Cranes / Chapter {service.chapter}
          </p>
          <h1 className="mt-4 font-display font-black leading-[0.9] tracking-tight text-ink" data-testid="service-title">
            <MaskedLines lines={[service.title]} lineClassName="text-4xl sm:text-6xl lg:text-7xl" start={0.1} />
          </h1>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">{service.lede}</p>
          </Reveal>
        </div>
      </section>

      {/* Image spotlight panel */}
      <section className="border-y-[3px] border-ink bg-obsidian py-14 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <div className={`overflow-hidden rounded-3xl border border-flame/30 ${service.containImage ? "bg-white" : ""}`}>
              <img
                src={service.image}
                alt={service.title}
                className={`max-h-[70vh] w-full ${service.containImage ? "object-contain" : "object-cover"}`}
                data-testid="service-hero-image"
              />
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {service.specs.map((sp, i) => (
              <Reveal key={sp.k} delay={i * 0.08}>
                <div className="spec-card rounded-2xl p-5" data-testid={`service-spec-${i}`}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-flame">{sp.k}</p>
                  <p className="mt-2 font-display text-2xl font-black text-cream">{sp.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Body + capabilities */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">The detail</p>
            {service.body.map((p, i) => (
              <p key={i} className="mt-5 max-w-lg text-sm leading-relaxed text-ink/80 sm:text-base">{p}</p>
            ))}
            <a
              href={BRAND.phoneHref}
              className="sticker sticker-hover mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream"
              data-testid="service-call-btn"
            >
              <Phone size={14} /> {BRAND.phone}
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-light glass-sheen rounded-3xl p-8" data-testid="service-capabilities">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Capabilities</p>
              <ul className="mt-6 space-y-4">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flame text-cream">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="font-display text-base font-bold text-ink">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Machine spec sheets */}
      {machines.length > 0 && (
        <section className="border-y-[3px] border-ink bg-obsidian py-20 sm:py-24" data-testid="service-machines">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">The machinery</p>
              <h2 className="mt-3 font-display text-3xl font-black text-cream sm:text-5xl">
                Spec <span className="text-flame">sheets.</span>
              </h2>
            </Reveal>
            <div className="mt-12 space-y-10">
              {machines.map((m, i) => (
                <SpecSheet key={m.code} machine={m} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / next */}
      <section className="border-t-2 border-ink bg-paper">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 px-5 sm:px-10">
          <Link to={`/${prev.slug}`} className="group flex items-center gap-3 border-r-2 border-ink py-8 pr-4" data-testid="service-prev-link">
            <ArrowLeft size={18} className="text-flame transition-transform group-hover:-translate-x-1" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Previous</p>
              <p className="font-display text-sm font-black text-ink sm:text-lg">{prev.title}</p>
            </div>
          </Link>
          <Link to={`/${next.slug}`} className="group flex items-center justify-end gap-3 py-8 pl-4 text-right" data-testid="service-next-link">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Next</p>
              <p className="font-display text-sm font-black text-ink sm:text-lg">{next.title}</p>
            </div>
            <ArrowRight size={18} className="text-flame transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
