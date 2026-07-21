import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Slide-view gallery — one photo at a time in a glass frame with
 * prev/next arrows, a counter, and touch-swipe / keyboard support.
 * Mixed portrait+landscape photos render via object-contain on black.
 */
export default function GallerySlider({ items }) {
  const [index, setIndex] = useState(0);
  const touchX = useRef(null);
  const count = items.length;

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <div data-testid="gallery-slider">
      <div
        className="glass-panel glass-sheen relative overflow-hidden rounded-3xl p-1.5"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative h-[52vh] overflow-hidden rounded-[1.2rem] bg-black sm:h-[62vh]">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((g, i) => (
              <div key={g.src} className="h-full w-full shrink-0">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="glass-panel absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream transition-transform hover:scale-105"
          data-testid="gallery-prev"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className="glass-panel absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream transition-transform hover:scale-105"
          data-testid="gallery-next"
        >
          <ChevronRight size={20} />
        </button>
        <span
          className="glass-panel absolute bottom-4 right-4 rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.15em] text-cream"
          data-testid="gallery-counter"
        >
          {index + 1} / {count}
        </span>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {items.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Photo ${i + 1}`}
            className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
              i === index ? "border-flame opacity-100" : "border-transparent opacity-50 hover:opacity-80"
            }`}
            data-testid={`gallery-thumb-${i}`}
          >
            <img src={g.thumb || g.src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
