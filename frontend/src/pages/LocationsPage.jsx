import React from "react";
import { MapPin, Phone, Navigation } from "lucide-react";
import { Reveal, MaskedLines } from "@/components/site/Reveal";
import { BRAND, SERVICE_AREAS } from "@/lib/site-data";

export default function LocationsPage() {
  return (
    <div className="bg-cream" data-testid="locations-page">
      <section className="pb-10 pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Where we operate</p>
          <h1 className="mt-4 font-display font-black leading-[0.85] tracking-tight text-ink">
            <MaskedLines lines={["LOCATIONS."]} lineClassName="text-5xl sm:text-8xl" start={0.1} />
          </h1>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
              Three depots, three states, one standard. Local crews with local knowledge — and rapid mobilisation to regional and remote sites.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1600px] space-y-8 px-5 sm:px-10">
          {SERVICE_AREAS.map((loc, i) => (
            <Reveal key={loc.code} delay={i * 0.08}>
              <div className="glass-light glass-sheen grid gap-8 rounded-[2rem] p-6 sm:p-10 lg:grid-cols-12" data-testid={`area-block-${loc.code}`}>
                <div className="lg:col-span-5">
                  <p className="font-display text-6xl font-black text-stroke-flame sm:text-7xl">{loc.code}</p>
                  <h2 className="mt-4 font-display text-3xl font-black text-ink">{loc.state}</h2>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-flame">
                    <MapPin size={12} /> {loc.depot}
                  </p>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-ink/80" data-testid={`area-address-${loc.code}`}>{loc.address}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">{loc.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {loc.areas.map((a) => (
                      <span key={a} className="rounded-full border-2 border-ink bg-paper px-3.5 py-1 font-mono text-[10px] text-ink" data-testid={`area-chip-${a.toLowerCase().replace(/\s/g, "-")}`}>
                        {a}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
                    data-testid={`area-directions-${loc.code}`}
                  >
                    <Navigation size={13} /> Get directions
                  </a>
                </div>
                <div className="lg:col-span-7">
                  <iframe
                    title={`Map — ${loc.depot}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                    className="h-72 w-full rounded-2xl border-2 border-ink sm:h-full sm:min-h-[320px]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    data-testid={`area-map-${loc.code}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t-[3px] border-ink bg-flame py-16">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-6 px-5 sm:px-10">
          <h2 className="font-display text-3xl font-black text-cream sm:text-4xl">Outside these areas? Ask us anyway.</h2>
          <a
            href={BRAND.phoneHref}
            className="sticker sticker-hover flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream"
            data-testid="locations-call-btn"
          >
            <Phone size={14} /> {BRAND.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
