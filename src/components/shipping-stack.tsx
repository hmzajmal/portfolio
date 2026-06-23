"use client";

import { motion } from "framer-motion";

/**
 * "Currently shipping" stack. Sits in the upper-right of the hero and
 * surfaces three live Imagine.art surfaces I lead design for. Each card
 * is a labeled brief that links out in a new tab.
 *
 * Visual: small eyebrow, three slightly-rotated cards in a vertical
 * stack with a brand-color accent on the left edge. Hover lifts the
 * card forward and de-rotates it.
 */

type ShipItem = {
  name: string;
  role: string;
  url: string;
  accent: string;
  rotate: number;
};

const ITEMS: ShipItem[] = [
  {
    name: "Film Studio",
    role: "Designing the AI video editor surface",
    url: "https://www.imagine.art/ai-film-studio",
    accent: "#FB5607",
    rotate: -3,
  },
  {
    name: "Imagine Computer",
    role: "Activation flows for the desktop client",
    url: "https://www.imagine.art/imagine-computer",
    accent: "#5ECCDD",
    rotate: 2,
  },
  {
    name: "Ad Studio",
    role: "Conversion-optimized briefs to ads",
    url: "https://www.imagine.art/ai-ad-studio",
    accent: "#FF4D8B",
    rotate: -1.5,
  },
];

export function ShippingStack() {
  return (
    <div className="absolute right-[4%] top-[16%] z-20 hidden w-[260px] md:block">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="mb-3 flex items-center gap-2 pl-2 text-[10px] tracking-[0.22em] text-[rgba(0,0,0,0.55)] uppercase"
        style={{ fontWeight: 600 }}
      >
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#5ECCDD]" />
        Currently shipping
      </motion.div>

      {/* Stack */}
      <div className="flex flex-col gap-3">
        {ITEMS.map((it, i) => (
          <ShipCard key={it.name} item={it} delay={1.1 + i * 0.08} />
        ))}
      </div>
    </div>
  );
}

function ShipCard({ item, delay }: { item: ShipItem; delay: number }) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 10, rotate: item.rotate * 1.5, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, rotate: item.rotate, scale: 1 }}
      whileHover={{ rotate: 0, y: -4, scale: 1.025, zIndex: 10 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-white pr-4 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_14px_36px_rgba(0,0,0,0.10)] ring-1 ring-[rgba(0,0,0,0.06)]"
    >
      {/* Accent edge */}
      <span
        aria-hidden
        className="h-[68px] w-[6px] flex-shrink-0"
        style={{ background: item.accent }}
      />

      <div className="flex flex-1 flex-col py-3">
        <span
          className="text-[15px] leading-[1.1] text-[#0F0F0F]"
          style={{ fontWeight: 700, letterSpacing: "-0.01em" }}
        >
          {item.name}
        </span>
        <span
          className="mt-1 text-[12px] leading-[1.35] text-[rgba(0,0,0,0.6)]"
          style={{ fontWeight: 500 }}
        >
          {item.role}
        </span>
      </div>

      <ArrowOut />
    </motion.a>
  );
}

function ArrowOut() {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="flex-shrink-0 text-[rgba(0,0,0,0.4)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0F0F0F]"
    >
      <path
        d="M3 11 L11 3 M4 3 L11 3 L11 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
