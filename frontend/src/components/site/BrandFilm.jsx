import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Volume2, VolumeX, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/site-data";

export default function BrandFilm() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted && v.paused) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <section
      className="relative overflow-hidden border-y-[3px] border-ink bg-obsidian py-24 sm:py-32"
      data-testid="brandfilm-section"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-flame/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-flamedeep/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-12 px-5 sm:px-10 lg:grid-cols-2 lg:gap-20">
        {/* 9:16 reel in a frosted-glass frame */}
        <Reveal>
          <div className="mx-auto w-full max-w-[330px]">
            <div className="glass-panel glass-sheen relative overflow-hidden rounded-[2rem] p-2">
              <video
                ref={videoRef}
                className="aspect-[9/16] w-full rounded-[1.5rem] object-cover"
                src="/media/brand-showcase-direct-cranes.mp4"
                poster="/media/brand-showcase-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                data-testid="brandfilm-video"
              />
              <button
                type="button"
                onClick={toggleSound}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="glass-panel absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full text-cream transition-transform hover:scale-105"
                data-testid="brandfilm-sound"
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={0.1}>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">In the field</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
              Direct Cranes, <span className="text-stroke-flame">in motion.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
              Real machines, real jobs. From crawler-crane transport to the heaviest lifts — this is
              Direct Cranes on the road and on site across Victoria, Queensland and South Australia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BRAND.phoneHref}
                className="sticker sticker-hover flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream"
                data-testid="brandfilm-call"
              >
                <Phone size={14} /> {BRAND.phone}
              </a>
              <Link
                to="/heavy-haulage"
                className="glass-panel glass-hover flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream"
                data-testid="brandfilm-link"
              >
                Heavy haulage <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
