"use client";

/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useGlobalCursor } from "@/lib/use-global-cursor";
import { ShippingStack } from "@/components/shipping-stack";
import { HeroBackdrop } from "@/components/hero/hero-backdrop";

const CHIP = "#5ECCDD";
const CHIP_DARK = "#2BA9BC";

const INTRO_DURATION_MS = 2500;
const SESSION_KEY = "hero-intro-seen";

/**
 * Hero in two phases.
 *
 * 1. Typing chip in the middle of an empty grid canvas. Types "Hey there!"
 *    once, holds, then fades out.
 * 2. Full canvas hero. Top ruler, big bold name with a selection rectangle
 *    and corner handles, floating sticky notes, avatar bubbles, and a
 *    tagline at the bottom.
 */
export function Hero() {
  const [phase, setPhase] = useState<"intro" | "full">("intro");

  // Show the typing intro only once per session. After it has played,
  // subsequent navigations / re-renders skip straight to the full hero.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setPhase("full");
      return;
    }
    const t = setTimeout(() => {
      setPhase("full");
      sessionStorage.setItem(SESSION_KEY, "1");
    }, INTRO_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >

      <AnimatePresence mode="wait">
        {phase === "intro" ? <IntroTyper key="intro" /> : <FullHero key="full" />}
      </AnimatePresence>
    </section>
  );
}

/* ---------- Phase 1. Typing chip ---------- */

function IntroTyper() {
  const text = useTypewriter(["Hey there!"], {
    typeSpeed: 70,
    deleteSpeed: 0,
    holdAtFull: 99999, // never delete, full hero takes over instead
    holdAtEmpty: 0,
  });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div
        className="flex items-center rounded-2xl px-5 py-3 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_28px_rgba(94,204,221,0.25)]"
        style={{
          background: CHIP,
          border: `1.5px solid ${CHIP_DARK}`,
        }}
      >
        <span
          className="text-[20px] leading-none text-[#0F0F0F] md:text-[22px]"
          style={{ fontWeight: 600, letterSpacing: "-0.01em" }}
        >
          {text}
        </span>
        <span
          className="ml-[2px] inline-block h-[18px] w-[2px] bg-[#0F0F0F] md:h-[20px]"
          style={{ animation: "hero-caret 1s steps(1) infinite" }}
        />
      </div>
      <style>{`
        @keyframes hero-caret {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
}

/* ---------- Phase 2. Full canvas hero ---------- */

function FullHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex h-full min-h-[100svh] w-full max-w-[1280px] flex-col items-start justify-center px-6 pt-16 md:px-10"
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
        className="body-lg mt-8 max-w-[720px] text-left text-[var(--color-ink-muted)]"
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
        className="mt-10 flex flex-col items-start gap-3 sm:flex-row"
      >
        <a
          href="https://www.linkedin.com/in/hamzajamal-design/"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex h-11 items-center gap-2 rounded-full px-5 text-[14px] text-white transition-transform hover:-translate-y-0.5"
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
        className="mt-16 grid w-full max-w-[880px] grid-cols-1 gap-8 border-t border-[var(--color-line)] pt-8 sm:grid-cols-3 sm:gap-0"
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
        className="text-[22px] text-[var(--color-ink)] md:text-[24px]"
        style={{
          fontVariationSettings: '"wght" 500, "opsz" 24, "wdth" 100',
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
      className="micro stat absolute left-6 top-[128px] z-10 text-[var(--color-ink-quiet)] md:left-10"
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

function FloatingAvatar({
  className,
  delay,
  depth = 0.02,
  src,
}: {
  className?: string;
  delay: number;
  depth?: number;
  src: string;
}) {
  const cursor = useGlobalCursor();
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);
  useEffect(() => {
    const m = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);

  const offsetX = cursor.active ? (cursor.x - vw / 2) * depth : 0;
  const offsetY = cursor.active ? (cursor.y - vh / 2) * depth : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: offsetX,
        y: offsetY,
      }}
      transition={{
        opacity: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        x: { type: "spring", stiffness: 80, damping: 20, mass: 0.7 },
        y: { type: "spring", stiffness: 80, damping: 20, mass: 0.7 },
      }}
      className={`hidden md:flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-2 ring-[#5ECCDD] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] ${className ?? ""}`}
    >
      <img src={src} alt="" className="h-full w-full object-cover" />
    </motion.div>
  );
}

/* ---------- Parallax wrapper for stickies ---------- */

function Parallax({
  depth = 0.03,
  children,
  className,
}: {
  depth?: number;
  children: React.ReactNode;
  className?: string;
}) {
  const cursor = useGlobalCursor();
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);
  useEffect(() => {
    const m = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);

  const offsetX = cursor.active ? (cursor.x - vw / 2) * depth : 0;
  const offsetY = cursor.active ? (cursor.y - vh / 2) * depth : 0;

  return (
    <motion.div
      animate={{ x: offsetX, y: offsetY }}
      transition={{ type: "spring", stiffness: 80, damping: 20, mass: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className={className}>
      <path
        d="M2 1 L2 11 L5 8 L7 12 L9 11 L7 7 L11 7 Z"
        fill="currentColor"
        stroke="white"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Typewriter ---------- */

function useTypewriter(
  phrases: string[],
  {
    typeSpeed = 75,
    deleteSpeed = 40,
    holdAtFull = 1500,
    holdAtEmpty = 400,
  } = {}
) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    if (!isDeleting && text === phrase) {
      const t = setTimeout(() => setIsDeleting(true), holdAtFull);
      return () => clearTimeout(t);
    }
    if (isDeleting && text === "") {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, holdAtEmpty);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : phrase.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [text, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, holdAtFull, holdAtEmpty]);

  return text;
}
