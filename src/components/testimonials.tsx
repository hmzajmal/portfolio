"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

/**
 * Testimonials — clean editorial grid. Liquid-glass cards with a leading
 * quote glyph, the pull quote as the main content, and a small avatar +
 * name + role attribution block at the bottom. No page-local blooms —
 * the page backdrop already provides the color texture behind them.
 */
export function Testimonials() {
  return (
    <section className="relative w-full py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <header className="text-left">
          <p className="eyebrow">Testimonials</p>
          <h2 className="h1 mt-6 max-w-[820px] text-[var(--color-ink)]">
            What people who&apos;ve worked with me say.
          </h2>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              role={t.role}
              quote={t.quote}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  quote,
  delay,
}: {
  name: string;
  role: string;
  quote: string;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="liquid flex flex-col justify-between gap-8 rounded-2xl p-7 md:p-8"
    >
      <div>
        <QuoteGlyph />
        <p className="body-lg mt-4 text-[var(--color-ink)]">{quote}</p>
      </div>

      <div className="flex items-center gap-3 border-t border-[var(--color-line)] pt-5">
        <Avatar name={name} />
        <div className="min-w-0">
          <p
            className="text-[15px] text-[var(--color-ink)]"
            style={{ fontVariationSettings: '"wght" 600, "opsz" 16, "wdth" 100', letterSpacing: "-0.005em" }}
          >
            {name}
          </p>
          <p className="body-sm text-[var(--color-ink-muted)]">{role}</p>
        </div>
      </div>
    </motion.article>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-[13px] text-white"
      style={{ fontVariationSettings: '"wght" 600, "opsz" 14, "wdth" 100', letterSpacing: "0.02em" }}
    >
      {initials}
    </span>
  );
}

function QuoteGlyph() {
  return (
    <svg
      viewBox="0 0 32 24"
      aria-hidden
      className="h-6 w-8 text-[var(--color-ink-quiet)]"
      fill="currentColor"
    >
      <path d="M0 24V13.3C0 9.5 0.867 6.4 2.6 4 4.333 1.6 7.033 0.267 10.7 0V4.933C7.833 5.6 6.4 7.767 6.4 11.4H10.667V24H0zM19.333 24V13.3c0-3.8 0.867-6.9 2.6-9.3C23.667 1.6 26.367 0.267 30.033 0V4.933c-2.867 0.667-4.3 2.833-4.3 6.467H30V24H19.333z" />
    </svg>
  );
}
