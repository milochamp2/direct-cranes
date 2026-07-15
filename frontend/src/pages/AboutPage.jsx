import React from "react";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { Reveal, MaskedLines } from "@/components/site/Reveal";
import { BRAND, IMG, STATS, VALUES, SERVICE_AREAS } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div className="bg-cream" data-testid="about-page">
      <section className="pb-10 pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Direct Cranes Hire</p>
          <h1 className="mt-4 font-display font-black leading-[0.85] tracking-tight text-ink">
            <MaskedLines lines={["ABOUT"]} lineClassName="text-5xl sm:text-8xl" start={0.1} />
            <MaskedLines lines={["US."]} lineClassName="text-5xl text-stroke-flame sm:text-8xl" start={0.22} />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
              Direct Cranes Hire delivers complete crane hire and lifting solutions across Melbourne, Brisbane and South Australia. Cranes, operators, riggers, heavy haulage and lift planning — coordinated under one roof so your project never waits on a subcontractor.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
              From tight-access Franna shifts to engineered 250T slew lifts and helicopter operations, safety and reliability lead every job.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Iconic photo */}
      <section className="pb-16" data-testid="about-iconic">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <div className="sticker relative overflow-hidden rounded-[2rem]">
              <img
                src={IMG.iconic}
                alt="Direct Cranes operator giving a thumbs up beside a 25T Franna"
                className="max-h-[75vh] w-full object-cover object-center"
                data-testid="about-iconic-photo"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-3 sm:bottom-6 sm:left-6">
                <span className="sticker-sm rounded-full bg-flame px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-cream">
                  The Direct thumbs-up
                </span>
                <span className="sticker-sm rounded-full bg-cream px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink">
                  Every lift signed off with a smile
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <div className="sticker grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink lg:grid-cols-4" data-testid="about-stats">
              {STATS.map((s) => (
                <div key={s.label} className="bg-cream px-6 py-6">
                  <p className="font-display text-4xl font-black text-flame">
                    {s.v}
                    <span className="text-lg text-ink">{s.suffix && ` ${s.suffix}`}</span>
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y-[3px] border-ink bg-paper py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-ink sm:text-5xl">
              The Direct <span className="text-stroke-flame">way.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.1}>
                <div className="glass-light glass-sheen glass-hover h-full rounded-3xl p-8" data-testid={`about-value-${v.n}`}>
                  <p className="font-display text-6xl font-black text-flame">{v.n}</p>
                  <h3 className="mt-6 font-display text-2xl font-black leading-tight text-ink">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 sm:py-24" data-testid="about-contact">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Get in touch</p>
            <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-5xl">
              Talk to a <span className="text-stroke-flame">lift planner.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <a
                href={BRAND.phoneHref}
                className="sticker sticker-hover flex h-full flex-col justify-between rounded-[2rem] bg-ink p-10"
                data-testid="contact-phone-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flame text-cream">
                  <Phone size={20} />
                </span>
                <div className="mt-14">
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Call — fastest response</p>
                  <p className="mt-3 font-display text-4xl font-black text-cream sm:text-6xl">{BRAND.phone}</p>
                  <p className="mt-3 flex items-center gap-2 font-mono text-xs text-cream/50">
                    <Clock size={12} /> 24/7 emergency response
                  </p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={`mailto:${BRAND.email}`}
                className="sticker sticker-hover flex h-full flex-col justify-between rounded-[2rem] bg-flame p-10"
                data-testid="contact-email-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream">
                  <Mail size={20} />
                </span>
                <div className="mt-14">
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink">Email — quotes & plans</p>
                  <p className="mt-3 break-all font-display text-2xl font-black text-cream sm:text-4xl">{BRAND.email}</p>
                  <p className="mt-3 font-mono text-xs text-cream/70">Site plans & load details welcome</p>
                </div>
              </a>
            </Reveal>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {SERVICE_AREAS.map((loc, i) => (
              <Reveal key={loc.code} delay={0.15 + i * 0.08}>
                <div className="glass-light glass-sheen rounded-3xl p-8" data-testid={`contact-depot-${loc.code}`}>
                  <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-flame">
                    <MapPin size={13} /> {loc.code}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-black text-ink">{loc.depot}</h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-ink/80" data-testid={`contact-address-${loc.code}`}>{loc.address}</p>
                  <p className="mt-2 text-sm text-ink/65">Servicing {loc.state} — metro & regional.</p>
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-flame transition-colors hover:text-ink"
                    data-testid={`contact-directions-${loc.code}`}
                  >
                    <Navigation size={13} /> Get directions
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
