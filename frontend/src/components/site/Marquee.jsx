import React from "react";
import { MARQUEE_ITEMS } from "@/lib/site-data";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y-[3px] border-ink bg-flame py-4" data-testid="marquee-band">
      <div className="animate-marquee flex w-max items-center gap-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl font-black uppercase tracking-tight text-cream sm:text-3xl">{item}</span>
            <span className="font-display text-2xl text-ink">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
