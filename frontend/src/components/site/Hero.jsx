import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import { MaskedLines } from "@/components/site/Reveal";
import { BRAND, STATS } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32" data-testid="hero-section">
      {/* Illustration background + black transparency overlay (portrait art on mobile) */}
      <div className="absolute inset-0 z-0" data-testid="hero-bg">
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/hero%20bg%20mobile/directcranes-hero-updated-bg-mobile.jpg" />
          <img
            src="/images/hero%20bg%20desktop/directcranes-hero-updated-bg.jpg"
            alt="Direct Cranes all-terrain crane on a coastal highway at sunset with a sky crane and telecom tower"
            className="h-full w-full object-cover object-center"
            fetchpriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/5 sm:to-black/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1600px] flex-col justify-center px-5 pb-14 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-5 inline-block w-fit rounded-full border border-cream/40 bg-black/30 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-cream backdrop-blur-md sm:text-[11px]"
          data-testid="hero-kicker"
        >
          Crane hire & lifting solutions — VIC · QLD · SA
        </motion.p>

        <h1 className="font-display font-black leading-[0.82] tracking-tight" data-testid="hero-title">
          <MaskedLines
            lines={["DIRECT"]}
            lineClassName="text-[22vw] text-cream sm:text-[19vw] lg:text-[13vw]"
            start={0.25}
          />
          <MaskedLines
            lines={["CRANES"]}
            lineClassName="text-sticker text-[22vw] sm:text-[19vw] lg:text-[13vw]"
            start={0.4}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 max-w-md text-sm leading-relaxed text-cream/85 sm:text-base"
          data-testid="hero-lede"
        >
          {BRAND.tagline} across Melbourne, Brisbane and South Australia. Frannas to 250T slews, tower cranes to helicopters — one company, complete lift.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href={BRAND.phoneHref}
            className="sticker sticker-hover flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink"
            data-testid="hero-call-btn"
          >
            <Phone size={14} /> {BRAND.phone}
          </a>
          <Link
            to="/mobile-cranes"
            className="sticker sticker-hover flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream"
            data-testid="hero-fleet-btn"
          >
            Mobile cranes <ArrowDown size={14} />
          </Link>
        </motion.div>

        {/* Stats bento — 2×2 glass card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.9 }}
          className="glass-panel glass-sheen mt-12 grid w-full max-w-xl grid-cols-2 overflow-hidden rounded-2xl"
          data-testid="hero-stats"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-5 ${i % 2 === 0 ? "border-r border-white/10" : ""} ${
                i < 2 ? "border-b border-white/10" : ""
              }`}
            >
              <p className="font-display text-3xl font-black text-flame sm:text-4xl">
                {s.v}
                <span className="text-lg text-cream">{s.suffix && ` ${s.suffix}`}</span>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/60">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
