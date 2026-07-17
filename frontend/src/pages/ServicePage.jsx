import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Phone, Check, ArrowLeft, ArrowRight, Cpu, Boxes, Building2, ShieldCheck, MapPin, Zap } from "lucide-react";
import { Reveal, MaskedLines } from "@/components/site/Reveal";
import Seo from "@/components/site/Seo";
import SpecSheet from "@/components/site/SpecSheet";
import GallerySlider from "@/components/site/GallerySlider";
import { BRAND, SERVICES, FLEET } from "@/lib/site-data";

const WHY_ICONS = { cpu: Cpu, boxes: Boxes, building: Building2, shield: ShieldCheck, map: MapPin, zap: Zap };

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
      <section className={`relative overflow-hidden pb-16 pt-32 sm:pt-40 ${service.headerImage ? "" : "bg-cream"}`}>
        {service.headerImage && (
          <div aria-hidden className="absolute inset-0 z-0" data-testid="service-header-bg">
            <img src={service.headerImage} alt="" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-obsidian" />
          </div>
        )}
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame" data-testid="service-breadcrumb">
            Direct Cranes / Chapter {service.chapter}
          </p>
          <h1
            className={`mt-4 font-display font-black leading-[0.9] tracking-tight ${service.headerImage ? "text-cream" : "text-ink"}`}
            data-testid="service-title"
          >
            <MaskedLines lines={[service.title]} lineClassName="text-4xl sm:text-6xl lg:text-7xl" start={0.1} />
          </h1>
          <Reveal delay={0.25}>
            <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${service.headerImage ? "text-cream/80" : "text-ink/75"}`}>
              {service.lede}
            </p>
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

      {/* Deliverable tiers (lift studies) */}
      {service.tiers && service.tiers.length > 0 && (
        <section className="border-y-[3px] border-ink bg-obsidian py-20 sm:py-24" data-testid="service-tiers">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">How we plan</p>
              <h2 className="mt-3 font-display text-3xl font-black text-cream sm:text-5xl">
                From plan to <span className="text-flame">engineered.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/60 sm:text-base">
                Every job gets the right level of documentation — from a straightforward lift plan to a fully
                engineered, software-verified study.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.tiers.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <div className="glass-panel glass-sheen glass-hover h-full rounded-2xl p-6" data-testid={`tier-${i}`}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-flame">0{i + 1}</p>
                    <h3 className="mt-4 font-display text-xl font-black text-cream">{t.name}</h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50">{t.tag}</p>
                    <p className="mt-4 text-sm leading-relaxed text-cream/70">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key considerations (lift studies) */}
      {service.considerations && service.considerations.length > 0 && (
        <section className="relative overflow-hidden bg-paper py-20 sm:py-24" data-testid="service-considerations">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 top-1/4 h-80 w-80 rounded-full bg-flame/12 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Every study accounts for</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-black leading-[0.95] text-ink sm:text-5xl">
                The detail behind a <span className="text-stroke-flame">safe lift.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-x-10 gap-y-1 sm:grid-cols-2">
              {service.considerations.map((c, i) => (
                <Reveal key={c} delay={(i % 2) * 0.06}>
                  <div className="flex items-start gap-3 border-b border-ink/10 py-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame text-cream">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-ink sm:text-base">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why choose (lift studies) */}
      {service.whyChoose && service.whyChoose.length > 0 && (
        <section className="border-y-[3px] border-ink bg-obsidian py-20 sm:py-24" data-testid="service-why">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Why Direct Cranes</p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-black text-cream sm:text-5xl">
                Why choose us for <span className="text-flame">3D lift planning.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.whyChoose.map((w, i) => {
                const Icon = WHY_ICONS[w.icon] || Check;
                return (
                  <Reveal key={w.title} delay={(i % 3) * 0.08}>
                    <div className="glass-panel glass-sheen h-full rounded-2xl p-6" data-testid={`why-${i}`}>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flame text-cream">
                        <Icon size={18} />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-black text-cream">{w.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/70">{w.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Featured projects (lift studies) */}
      {service.projects && service.projects.length > 0 && (
        <section className="relative overflow-hidden bg-cream py-20 sm:py-24" data-testid="service-projects">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-flame/10 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Featured projects</p>
              <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-5xl">
                Planned, lifted, <span className="text-stroke-flame">delivered.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {service.projects.map((pr, i) => (
                <Reveal key={pr.title} delay={i * 0.1}>
                  <div className="glass-light glass-sheen group h-full overflow-hidden rounded-3xl" data-testid={`project-${i}`}>
                    <div className="overflow-hidden">
                      <img
                        src={pr.img}
                        alt={pr.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-black text-ink">{pr.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">{pr.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Video reel showcase */}
      {service.videos && service.videos.length > 0 && (
        <section className="border-y-[3px] border-ink bg-obsidian py-20 sm:py-24" data-testid="service-videos">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Watch</p>
              <h2 className="mt-3 font-display text-3xl font-black text-cream sm:text-5xl">
                On <span className="text-flame">the job.</span>
              </h2>
            </Reveal>
            <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4">
              {service.videos.map((v, i) => (
                <div key={v.src} className="shrink-0 snap-start">
                  <Reveal delay={(i % 4) * 0.06}>
                    <div className="glass-panel glass-sheen w-[240px] overflow-hidden rounded-[1.5rem] p-1.5 sm:w-[280px]">
                      <video
                        className="aspect-[9/16] w-full rounded-[1.2rem] bg-black object-cover"
                        src={v.src}
                        poster={v.poster}
                        controls
                        playsInline
                        preload="none"
                      />
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Real-job photo gallery */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="border-y-[3px] border-ink bg-obsidian py-20 sm:py-24" data-testid="service-gallery">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">On the road</p>
              <h2 className="mt-3 font-display text-3xl font-black text-cream sm:text-5xl">
                Real <span className="text-flame">jobs.</span>
              </h2>
            </Reveal>
            <div className="mt-12">
              <Reveal>
                <GallerySlider items={service.gallery} />
              </Reveal>
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
