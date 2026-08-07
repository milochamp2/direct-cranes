import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Check, ArrowUpRight, Globe } from "lucide-react";
import { Reveal, MaskedLines } from "@/components/site/Reveal";
import Seo from "@/components/site/Seo";
import { STEEL } from "@/lib/site-data";

/* Small check-list used across the capability sections. */
function CheckList({ items, tone = "dark" }) {
  const text = tone === "dark" ? "text-cream" : "text-ink";
  return (
    <ul className="mt-6 space-y-4">
      {items.map((c) => (
        <li key={c} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flame text-cream">
            <Check size={12} strokeWidth={3} />
          </span>
          <span className={`font-display text-base font-bold ${text}`}>{c}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DirectSteelPage() {
  const s = STEEL;
  return (
    <div data-testid="direct-steel-page">
      <Seo
        title="Direct Steel Solutions"
        description="Direct Steel Solutions — a division of Direct Cranes. Structural steel engineering, supply, fabrication, cranes, rigging and installation across Melbourne, regional Victoria and Australia-wide."
        path="/direct-steel-solutions"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40" data-testid="steel-hero">
        <div aria-hidden className="absolute inset-0 z-0">
          <img src={s.hero} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-obsidian" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">
            Direct Cranes / A Division
          </p>
          <h1 className="mt-4 font-display font-black leading-[0.86] tracking-tight text-cream">
            <MaskedLines lines={["DIRECT"]} lineClassName="text-5xl sm:text-7xl lg:text-8xl" start={0.1} />
            <MaskedLines lines={["STEEL SOLUTIONS"]} lineClassName="text-flame text-5xl sm:text-7xl lg:text-8xl" start={0.24} />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/70 sm:text-sm">
              {s.disciplines.map((d, i) => (
                <span key={d} className="flex items-center gap-3">
                  {i > 0 && <span className="text-flame">·</span>}
                  {d}
                </span>
              ))}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">{s.lede}</p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={s.contact.phoneHref}
                className="sticker sticker-hover flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream"
                data-testid="steel-hero-call"
              >
                <Phone size={14} /> {s.contact.phone}
              </a>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50">{s.regions}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01 — One coordinated team */}
      <section className="bg-cream py-20 sm:py-28" data-testid="steel-intro">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">01 — One coordinated team</p>
            <h2 className="mt-3 font-display text-3xl font-black leading-[0.95] text-ink sm:text-5xl">
              One team. One program. One <span className="text-stroke-flame">delivery path.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/70 sm:text-base">{s.intro.sub}</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/80 sm:text-base">{s.intro.body}</p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-flame">{s.intro.backedTitle}</p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/80 sm:text-base">{s.intro.backed}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-light glass-sheen h-full rounded-3xl p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">{s.intro.partnerTag}</p>
              <p className="mt-4 font-display text-3xl font-black text-ink sm:text-4xl">{s.intro.partnerName}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">{s.intro.partnerDesc}</p>
              <div className="mt-8 border-t border-ink/10 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">A division of</p>
                <Link to="/" className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-black text-ink transition-colors hover:text-flame">
                  Direct Cranes <ArrowUpRight size={18} className="text-flame" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — Complete steel service */}
      <section className="border-y-[3px] border-ink bg-obsidian py-20 sm:py-24" data-testid="steel-service">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">02 — Complete steel service</p>
            <h2 className="mt-3 font-display text-3xl font-black text-cream sm:text-5xl">
              End to end, one point of <span className="text-flame">coordination.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/60 sm:text-base">
              A simple end-to-end delivery model — from approved drawings and steel supply through to the final installed structure.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.service.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="glass-panel glass-sheen glass-hover h-full rounded-2xl p-6" data-testid={`steel-service-${i}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-flame">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-xl font-black text-cream">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl bg-black/40 p-8 ring-1 ring-flame/20">
              <h3 className="font-display text-xl font-black text-cream sm:text-2xl">One team. One program. One accountable delivery path.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/60">
                From approved drawings and steel supply through to the final installed structure.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — Project delivery process */}
      <section className="bg-cream py-20 sm:py-24" data-testid="steel-process">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">03 — Project delivery process</p>
            <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-5xl">
              Clear responsibilities, first review to <span className="text-stroke-flame">completion.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {s.process.map((p, i) => (
              <Reveal key={p.n} delay={(i % 2) * 0.06}>
                <div className="flex items-start gap-5 border-b border-ink/10 pb-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-flame font-mono text-sm font-bold text-cream">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-black uppercase tracking-tight text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Supply & fabrication */}
      <section className="border-y-[3px] border-ink bg-obsidian py-20 sm:py-24" data-testid="steel-supply">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">04 — Supply &amp; fabrication</p>
            <h2 className="mt-3 font-display text-3xl font-black text-cream sm:text-5xl">
              Practical procurement and <span className="text-flame">fabrication.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/60 sm:text-base">
              Reliable steel procurement and fabrication support for commercial and residential steel, coordinated to suit project drawings, program and delivery requirements.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-flame/25">
              <img src={s.supplyImage} alt="Structural steel frame supplied and coordinated by Direct Steel Solutions" loading="lazy" className="max-h-[52vh] w-full object-cover" />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="glass-panel glass-sheen h-full rounded-3xl p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Steel supply</p>
                <CheckList items={s.supply} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-panel glass-sheen h-full rounded-3xl p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Fabrication capability</p>
                <CheckList items={s.fabrication} />
                <p className="mt-8 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-cream/50">
                  Steel supply partner · <span className="text-flame">{s.intro.partnerName}</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 — Cranes, rigging & delivery */}
      <section className="bg-cream py-20 sm:py-24" data-testid="steel-cranes">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">05 — Cranes, rigging &amp; delivery</p>
            <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-5xl">
              Backed by the <span className="text-stroke-flame">Direct Cranes fleet.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
              Crane access, transport, rigging and lift planning coordinated with the steel installation program.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {s.cranes.images.map((img, i) => (
              <Reveal key={img} delay={i * 0.1}>
                <div className="overflow-hidden rounded-3xl border border-ink/10">
                  <img src={img} alt="Direct Cranes fleet supporting a steel installation" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { t: "Crane fleet", items: s.cranes.fleet },
              { t: "Site support", items: s.cranes.site },
              { t: "Installation", items: s.cranes.install },
            ].map((col, i) => (
              <Reveal key={col.t} delay={i * 0.08}>
                <div className="glass-light glass-sheen h-full rounded-2xl p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-flame">{col.t}</p>
                  <ul className="mt-5 space-y-3">
                    {col.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 font-display text-base font-bold text-ink">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-flame" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Safety & quality */}
      <section className="relative overflow-hidden border-y-[3px] border-ink bg-obsidian py-20 sm:py-24" data-testid="steel-safety">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 top-1/4 h-80 w-80 rounded-full bg-flame/12 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">06 — Safety &amp; quality</p>
            <h2 className="mt-3 font-display text-3xl font-black text-cream sm:text-5xl">
              Safety first. <span className="text-flame">Quality assured.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/60 sm:text-base">
              Every package is planned around site conditions, access, lift sequence and documented controls.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="glass-panel glass-sheen h-full rounded-3xl p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Safe delivery</p>
                <CheckList items={s.safety.delivery} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-panel glass-sheen h-full rounded-3xl p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Quality control</p>
                <CheckList items={s.safety.quality} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 — Completed work */}
      <section className="bg-cream py-20 sm:py-24" data-testid="steel-projects">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">07 — Completed work</p>
            <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-5xl">
              Real project <span className="text-stroke-flame">delivery.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
              Structural steel, lifting and commercial fitout — delivered as part of the project package.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {s.projects.map((pr, i) => (
              <Reveal key={pr.title} delay={(i % 2) * 0.1}>
                <div className="glass-light glass-sheen group h-full overflow-hidden rounded-3xl" data-testid={`steel-project-${i}`}>
                  <div className="overflow-hidden">
                    <img src={pr.img} alt={pr.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

      {/* 08 — Industries we service */}
      <section className="border-y-[3px] border-ink bg-paper py-20 sm:py-24" data-testid="steel-industries">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">08 — Industries we service</p>
            <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-5xl">
              Flexible support, multiple <span className="text-stroke-flame">sectors.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.industries.map((ind, i) => (
              <Reveal key={ind} delay={(i % 3) * 0.06}>
                <div className="flex items-center gap-4 rounded-2xl bg-cream p-5 ring-1 ring-ink/10">
                  <span className="h-8 w-1 shrink-0 rounded-full bg-flame" />
                  <span className="font-display text-base font-black uppercase tracking-tight text-ink">{ind}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-obsidian py-20 sm:py-28" data-testid="steel-contact">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-flame/12 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display font-black leading-[0.9] tracking-tight text-cream">
              <MaskedLines lines={["LET'S BUILD"]} lineClassName="text-4xl sm:text-6xl" start={0.05} />
              <MaskedLines lines={["SOMETHING"]} lineClassName="text-flame text-4xl sm:text-6xl" start={0.16} />
              <MaskedLines lines={["TOGETHER."]} lineClassName="text-4xl sm:text-6xl" start={0.27} />
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
              Steel supply, fabrication, cranes, rigging and installation — one contact from initial enquiry through to project delivery.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-panel glass-sheen rounded-3xl p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Your direct point of contact</p>
              <p className="mt-4 font-display text-3xl font-black text-cream">{s.contact.name}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/50">{s.contact.role}</p>
              <div className="mt-8 space-y-4">
                <a href={s.contact.phoneHref} className="flex items-center gap-3 font-display text-xl font-black text-cream transition-colors hover:text-flame">
                  <Phone size={18} className="text-flame" /> {s.contact.phone}
                </a>
                <a href={s.contact.emailHref} className="flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-flame sm:text-base">
                  <Mail size={16} className="text-flame" /> {s.contact.email}
                </a>
                <a href="/" className="flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-flame sm:text-base">
                  <Globe size={16} className="text-flame" /> {s.contact.site}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
