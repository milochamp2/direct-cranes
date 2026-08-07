import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { BRAND, SERVICES, SERVICE_AREAS, SOCIAL } from "@/lib/site-data";

const SOCIAL_ICONS = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin };

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-flame bg-ink pb-10 pt-20 text-cream" data-testid="footer">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-wide text-3xl tracking-tight text-flame">DIRECT</p>
            <p className="font-wide text-xs tracking-[0.5em] text-cream/70">CRANES HIRE</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">{BRAND.tagline} across Melbourne, Brisbane and South Australia.</p>
            <a href={BRAND.phoneHref} className="mt-6 inline-block font-display text-3xl font-black text-cream transition-colors hover:text-flame" data-testid="footer-phone">
              {BRAND.phone}
            </a>
            <p className="mt-1 font-mono text-xs text-cream/50">{BRAND.email}</p>
            <div className="mt-6 flex items-center gap-3" data-testid="footer-social">
              {SOCIAL.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Direct Cranes on ${s.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-flame hover:bg-flame hover:text-cream"
                    data-testid={`footer-social-${s.icon}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-flame">Services</p>
            <div className="mt-4 flex flex-col gap-2">
              {SERVICES.map((s) => (
                <Link key={s.slug} to={`/${s.slug}`} className="text-sm text-cream/70 transition-colors hover:text-flame" data-testid={`footer-service-${s.slug}`}>
                  {s.title}
                </Link>
              ))}
              <Link to="/direct-steel-solutions" className="text-sm text-cream/70 transition-colors hover:text-flame" data-testid="footer-service-direct-steel">
                Direct Steel Solutions
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-flame">Company</p>
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/locations" className="text-sm text-cream/70 transition-colors hover:text-flame" data-testid="footer-link-locations">Locations</Link>
              <Link to="/about" className="text-sm text-cream/70 transition-colors hover:text-flame" data-testid="footer-link-about">About Us</Link>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-flame">Depots</p>
            <div className="mt-4 flex flex-col gap-3">
              {SERVICE_AREAS.map((a) => (
                <div key={a.code}>
                  <p className="font-mono text-xs text-cream/70">{a.depot} · {a.code}</p>
                  <p className="font-mono text-[10px] leading-relaxed text-cream/40">{a.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40">© {new Date().getFullYear()} Direct Cranes Hire. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40">Safe · Reliable · Direct</p>
        </div>
      </div>
    </footer>
  );
}
