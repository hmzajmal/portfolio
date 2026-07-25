"use client";

import { motion } from "framer-motion";
import { SectionGrid } from "@/components/ui/section-grid";

/**
 * "Operating principles" — the four values that shape my work. Sits below
 * the hero on the home page. Each card carries a muted tint that catches
 * the page's noise + bloom aesthetic, with a soft top-to-bottom gradient
 * and a fine grain overlay so the surface reads as tinted paper rather
 * than a flat sticky note.
 */

type Tone = "amber" | "rose" | "sage" | "periwinkle";

const PRINCIPLES: { tone: Tone; heading: string; body: string }[] = [
  {
    tone: "amber",
    heading: "Research over assumption.",
    body: "Every screen starts with a real user problem. Interviews, support tickets, session replays. No designing in a vacuum.",
  },
  {
    tone: "rose",
    heading: "Ship the boring parts.",
    body: "Empty states, error states, edge cases, design systems. The unglamorous parts are where the product actually lives.",
  },
  {
    tone: "sage",
    heading: "Move the metric.",
    body: "Activation, retention, conversion. If the design does not move a number, it is decoration. Outcomes over aesthetics.",
  },
  {
    tone: "periwinkle",
    heading: "Engineers in the room.",
    body: "Best designs are co-authored. I pair with engineering from kickoff so what ships matches what was specced.",
  },
];

/** Soft light-tone gradients — cool, neutral palette that sits inside
 * the page backdrop without shouting. */
const TONE_GRADIENT: Record<Tone, string> = {
  amber: "linear-gradient(150deg, #F4FDFC 0%, #EAFBFA 55%, #D9F1EF 100%)",
  rose: "linear-gradient(150deg, #F8F8F8 0%, #F1F1F1 55%, #E4E4E4 100%)",
  sage: "linear-gradient(150deg, #E6EEF7 0%, #D5E4F3 55%, #BFD1E7 100%)",
  periwinkle: "linear-gradient(150deg, #FAF2E4 0%, #F3E9DA 55%, #E7D8BF 100%)",
};

const NOISE_URI = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)'/>
  </svg>`
)}`;

export function OperatingPrinciples() {
  return (
    <section className="relative w-full py-24 md:py-32">
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <p className="eyebrow">Operating principles</p>
        <h2 className="h1 mt-6 max-w-[720px] text-[var(--color-ink)]">
          What goes into my work.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard key={p.heading} {...p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleCard({
  tone,
  heading,
  body,
  delay,
}: {
  tone: Tone;
  heading: string;
  body: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl p-8"
      style={{
        background: TONE_GRADIENT[tone],
        boxShadow: [
          "inset 0 1px 0 rgba(255,255,255,0.55)",
          "inset 0 0 0 1px rgba(15,15,15,0.05)",
          "0 2px 4px rgba(15,15,15,0.04)",
          "0 18px 44px rgba(15,15,15,0.06)",
        ].join(", "),
      }}
    >
      {/* Grain overlay — matches the page backdrop texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage: `url("${NOISE_URI}")`,
          backgroundSize: "220px 220px",
        }}
      />

      <div className="relative">
        <h3 className="h3 text-[var(--color-ink)]">{heading}</h3>
        <p className="body-text mt-4 text-[var(--color-ink-muted)]">{body}</p>
      </div>
    </motion.div>
  );
}
