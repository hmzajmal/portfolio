"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Hero. Left-aligned title + bio + LinkedIn/Download-CV CTAs + stat row.
 * The old "Hey there" typing intro was removed for the senior-tone rebuild.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      <FullHero />
    </section>
  );
}

function FullHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex h-full min-h-[100svh] w-full max-w-[1280px] flex-col items-start justify-center px-6 pt-24 md:px-10 md:pt-16"
    >
      <TimeStamp />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="h1 max-w-[960px] text-left text-[var(--color-ink)]"
      >
        Hands-on design <em className="italic">strategist</em> with knowledge of scaling products through{" "}
        <span className="text-[var(--color-ink-quiet)]">activation &amp; retention</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="body-lg mt-6 max-w-[720px] text-left text-[var(--color-ink-muted)] md:mt-8"
      >
        Product Designer with 5+ years of experience turning ambiguity into
        measurable business impact. Currently at{" "}
        <a
          href="https://www.imagine.art"
          target="_blank"
          rel="noreferrer noopener"
          className="strong underline decoration-[var(--color-line-strong)] decoration-[1.5px] underline-offset-[6px] transition-colors hover:decoration-[var(--color-ink)]"
        >
          ImagineArt
        </a>
        , building the future of AI-powered products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-10"
      >
        <a
          href="https://www.linkedin.com/in/hamzajamal-design/"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[14px] text-white transition-transform hover:-translate-y-0.5"
          style={{
            fontWeight: 500,
            background:
              "linear-gradient(180deg, rgba(38,38,42,0.92) 0%, rgba(15,15,15,0.88) 100%)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.35), 0 10px 22px rgba(15,15,15,0.22), 0 1px 2px rgba(15,15,15,0.10)",
          }}
        >
          <LinkedInMark />
          LinkedIn
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1xktX3Z1jOK_mDG2qVrot-OIfDWoLk80C"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex h-11 items-center gap-2 rounded-full px-5 text-[14px] text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
          style={{
            fontWeight: 500,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.42) 100%)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.25), inset 0 0 0 1px rgba(0,0,0,0.06), 0 10px 22px rgba(15,15,15,0.06), 0 1px 2px rgba(15,15,15,0.04)",
          }}
        >
          <DownloadIcon />
          Download CV
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 grid w-full max-w-[880px] grid-cols-1 gap-6 border-t border-[var(--color-line)] pt-8 sm:grid-cols-3 sm:gap-0 md:mt-16"
      >
        <StatCell
          stat="1.79% → 11%"
          detail="Lifted conversion 6x at Arbisoft in two quarters after redesigning the core web app."
        />
        <StatCell
          stat="4-day streak"
          detail="Shipped a retention loop at ImagineArt that turns daily-credit users into paid subscribers."
        />
        <StatCell
          stat="1M+ active users"
          detail="Reach of the surfaces I design at ImagineArt across Film Studio, Imagine Computer, and Ad Studio."
        />
      </motion.div>
    </motion.div>
  );
}

function StatCell({ stat, detail }: { stat: string; detail: string }) {
  return (
    <div className="flex flex-col gap-2 sm:border-l sm:border-[var(--color-line)] sm:px-6 sm:first:border-l-0 sm:first:pl-0">
      <p
        className="text-[20px] text-[var(--color-ink)] md:text-[24px]"
        style={{
          fontVariationSettings: '"wght" 500, "opsz" 22, "wdth" 100',
          letterSpacing: "-0.015em",
          lineHeight: 1.1,
        }}
      >
        {stat}
      </p>
      <p className="body-sm text-[var(--color-ink-muted)]">{detail}</p>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 2v9m0 0 3.2-3.2M8 11 4.8 7.8M3 13.5h10" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ---------- Pieces ---------- */

function TimeStamp() {
  const [now, setNow] = useState(() => formatTime(new Date()));
  useEffect(() => {
    const id = setInterval(() => setNow(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="micro stat mb-6 text-[var(--color-ink-quiet)]"
    >
      {now}
    </motion.span>
  );
}

function formatTime(d: Date) {
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  const s = d.getSeconds().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m}:${s} ${ampm}`;
}

