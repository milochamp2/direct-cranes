import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import Crane3D from "@/components/site/Crane3D";
import { MaskedLines } from "@/components/site/Reveal";
import { BRAND, STATS } from "@/lib/site-data";

const Cloud = ({ className, delay = 0 }) => (
  <motion.svg
    viewBox="0 0 120 60"
    className={className}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay }}
  >
    <motion.g
      animate={{ x: [0, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path
        d="M18 48 a14 14 0 0 1 4-27 a18 18 0 0 1 34-8 a16 16 0 0 1 28 6 a13 13 0 0 1 14 21 a10 10 0 0 1 -8 8 H26 a12 12 0 0 1 -8 0 Z"
        fill="#F2EDE3"
        stroke="#16120F"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </motion.g>
  </motion.svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream pt-28 sm:pt-32" data-testid="hero-section">
      {/* Rising sun */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-[12vmin] top-[8vh] h-[78vmin] w-[78vmin] overflow-hidden rounded-full border-[5px] border-ink bg-flame lg:right-[4vw]"
        data-testid="hero-sun"
      >
        <div className="seigaiha absolute inset-x-0 bottom-0 h-[42%] opacity-90" />
      </motion.div>

      <Cloud className="absolute right-[8vw] top-[10vh] w-24 sm:w-32 lg:right-[38vw]" delay={0.7} />
      <Cloud className="absolute right-[2vw] top-[64vh] w-20 sm:w-28" delay={1.1} />

      {/* 3D crane over the sun */}
      <div className="pointer-events-auto absolute right-0 top-[12vh] hidden h-[74vh] w-[52vw] lg:block" data-testid="hero-crane-3d">
        <Crane3D />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 inline-block rounded-full border-2 border-ink bg-cream px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-ink sm:text-[11px]"
          data-testid="hero-kicker"
        >
          Crane hire & lifting solutions — VIC · QLD · SA
        </motion.p>

        <h1 className="font-display font-black leading-[0.82] tracking-tight" data-testid="hero-title">
          <MaskedLines
            lines={["DIRECT"]}
            lineClassName="text-[22vw] text-ink sm:text-[19vw] lg:text-[15vw]"
            start={0.25}
          />
          <MaskedLines
            lines={["CRANES"]}
            lineClassName="text-sticker text-[22vw] sm:text-[19vw] lg:text-[15vw]"
            start={0.4}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 max-w-md text-sm leading-relaxed text-ink/75 sm:text-base"
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
            className="sticker sticker-hover flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream"
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

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.9 }}
          className="sticker mb-10 mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink sm:mt-20 lg:max-w-3xl lg:grid-cols-4"
          data-testid="hero-stats"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-cream px-5 py-4">
              <p className="font-display text-3xl font-black text-flame">
                {s.v}
                <span className="text-base text-ink">{s.suffix && ` ${s.suffix}`}</span>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
