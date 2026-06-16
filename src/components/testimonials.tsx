"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

/**
 * Canvas-style testimonials. Each testimonial is split into two cards
 * stacked vertically (a profile chip on top with avatar + name + role, a
 * quote card below). Cards drift on slight rotations across a section
 * dotted with soft pastel colour blooms.
 */
export function Testimonials() {
  return (
    <section className="relative isolate w-full overflow-hidden py-32 md:py-40">
      {/* Pastel colour blooms */}
      <ColourBlooms />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <header className="text-center">
          <p className="eyebrow">06 / Testimonials</p>
          <h2
            className="mt-4 text-[#0F0F0F]"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            What people who&apos;ve worked with me say.
          </h2>
        </header>

        <div className="relative mt-16 grid grid-cols-1 gap-y-16 gap-x-6 md:mt-24 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              role={t.role}
              quote={t.quote}
              tone={["yellow", "pink", "blue"][i % 3] as Tone}
              rotate={[-2, 1.5, -1][i % 3]}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Background pastel blooms ---------- */

function ColourBlooms() {
  const blooms = [
    { color: "rgba(255, 220, 145, 0.55)", top: "10%", left: "8%" },
    { color: "rgba(255, 200, 220, 0.55)", top: "20%", left: "70%" },
    { color: "rgba(200, 215, 255, 0.55)", top: "55%", left: "20%" },
    { color: "rgba(255, 175, 130, 0.45)", top: "60%", left: "78%" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {blooms.map((b, i) => (
        <div
          key={i}
          className="absolute h-[520px] w-[520px] rounded-full"
          style={{
            top: b.top,
            left: b.left,
            background: `radial-gradient(closest-side, ${b.color}, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Testimonial card ---------- */

type Tone = "yellow" | "pink" | "blue";

const STAR_BADGE_BG: Record<Tone, string> = {
  yellow: "#3D8BFF",
  pink: "#3D8BFF",
  blue: "#3D8BFF",
};

function TestimonialCard({
  name,
  role,
  quote,
  tone,
  rotate,
  delay,
}: {
  name: string;
  role: string;
  quote: string;
  tone: Tone;
  rotate: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: rotate * 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex w-full max-w-[320px] flex-col items-center"
    >
      {/* Top — profile chip */}
      <div className="relative flex w-full flex-col items-center gap-3 rounded-3xl bg-white px-6 pt-8 pb-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_18px_44px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(0,0,0,0.04)]">
        <div className="relative">
          <Avatar name={name} tone={tone} />
          <span
            aria-hidden
            className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.18)]"
          >
            <StarIcon className="h-3.5 w-3.5" color={STAR_BADGE_BG[tone]} />
          </span>
        </div>
        <p
          className="text-center text-[18px] text-[#0F0F0F]"
          style={{ fontWeight: 700, letterSpacing: "-0.01em" }}
        >
          {name}
        </p>
        <p className="text-center text-[10px] tracking-[0.18em] text-[rgba(0,0,0,0.5)] uppercase">
          {role}
        </p>

        {/* Connector tab to quote */}
        <span
          aria-hidden
          className="absolute -bottom-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-md bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
          style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
        />
      </div>

      {/* Bottom — quote card */}
      <div className="relative mt-6 w-full rounded-3xl bg-white px-6 py-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_18px_44px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(0,0,0,0.04)]">
        <p
          className="text-center text-[15px] leading-[1.55] text-[#0F0F0F]/85"
          style={{ fontStyle: "italic" }}
        >
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}

/* ---------- Avatar ---------- */

const AVATAR_GRADIENTS: Record<Tone, string> = {
  yellow: "linear-gradient(135deg, #FFD08A 0%, #FF8A6B 100%)",
  pink: "linear-gradient(135deg, #FFB7C9 0%, #F37AA1 100%)",
  blue: "linear-gradient(135deg, #A9C4FF 0%, #7AA0F0 100%)",
};

function Avatar({ name, tone }: { name: string; tone: Tone }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <span
      className="flex h-16 w-16 items-center justify-center rounded-full text-[20px] text-white ring-4 ring-white"
      style={{
        background: AVATAR_GRADIENTS[tone],
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}
    >
      {initials}
    </span>
  );
}

function StarIcon({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 20 20" fill={color} className={className} aria-hidden>
      <path d="M10 1.5 12.45 7.05 18.5 7.7 13.95 11.8 15.3 17.7 10 14.55 4.7 17.7 6.05 11.8 1.5 7.7 7.55 7.05 Z" />
    </svg>
  );
}
