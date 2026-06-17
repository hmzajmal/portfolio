"use client";

/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useGlobalCursor } from "@/lib/use-global-cursor";

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
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-white"
    >
      {/* Full-canvas grid. Subtle, visible everywhere. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

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
      className="relative flex h-full min-h-[100svh] w-full flex-col"
    >
      <TimeStamp />

      {/* Center composition fills available vertical space */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-32 md:pt-24">
        <div className="relative">
          {/* Handwritten "my name is" */}
          <motion.span
            drag
            dragMomentum={false}
            dragElastic={0.15}
            whileDrag={{ scale: 1.04, rotate: 0, zIndex: 30, cursor: "grabbing" }}
            initial={{ opacity: 0, y: -6, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-[72px] left-[8%] inline-block text-[24px] text-[#171717] md:left-[12%] md:text-[28px]"
            style={{ fontFamily: "var(--font-hand)", touchAction: "none" }}
          >
            my name is
            <svg
              width="60"
              height="14"
              viewBox="0 0 60 14"
              className="absolute -bottom-3 left-0"
              fill="none"
            >
              <path
                d="M2 11 C 10 4, 30 4, 58 8"
                stroke="#171717"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </motion.span>

          {/* Currently / Previously sticky pills */}
          <motion.span
            drag
            dragMomentum={false}
            dragElastic={0.15}
            whileDrag={{ scale: 1.06, rotate: 0, zIndex: 30, cursor: "grabbing" }}
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-[60px] -top-[6px] z-10 inline-block rounded-md bg-[#B7E8C8] px-3 py-1.5 text-[12px] text-[#0F0F0F] shadow-[0_4px_10px_rgba(0,0,0,0.08)] md:-left-[140px] md:text-[13px]"
            style={{ fontFamily: "var(--font-hand)", touchAction: "none" }}
          >
            Currently at Imagine.art
          </motion.span>
          <motion.span
            drag
            dragMomentum={false}
            dragElastic={0.15}
            whileDrag={{ scale: 1.06, rotate: 0, zIndex: 30, cursor: "grabbing" }}
            initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-[40px] -top-[10px] z-10 inline-block rounded-md bg-[#1F3A93] px-3 py-1.5 text-[12px] text-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] md:-right-[60px] md:text-[13px]"
            style={{ fontFamily: "var(--font-hand)", touchAction: "none" }}
          >
            5+ years in product
          </motion.span>

          {/* Selection rectangle behind the name */}
          <SelectionFrame />

          {/* Big name. Constrained so it fits inside even narrow viewports. */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative leading-[0.85] text-[#0F0F0F]"
            style={{
              fontSize: "clamp(64px, 10.5vw, 144px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            HAMZA
          </motion.h1>

        </div>

        {/* Availability line */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.2em] text-[#0F0F0F] uppercase"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#5ECCDD]" />
          Available for thoughtful projects
        </motion.p>
      </div>

      {/* Handwritten side note — easter egg, bottom-right corner, rotated */}
      <Parallax
        depth={0.04}
        className="absolute right-[2%] bottom-[20%] hidden lg:block"
      >
        <motion.div
          data-cursor="drag"
          drag
          dragMomentum={false}
          dragElastic={0.15}
          whileDrag={{ scale: 1.06, rotate: 0, zIndex: 30 }}
          initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: -10 }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[220px] leading-[1.1]"
          style={{ fontFamily: "var(--font-hand)", color: "#0F0F0F", touchAction: "none" }}
        >
          <p className="relative inline-block text-[22px]">
            I burn Claude tokens
            <motion.svg
              aria-hidden
              viewBox="0 0 220 36"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.path
                d="M4 22 Q 22 8, 46 20 T 92 18 T 138 22 T 184 16 T 216 20"
                stroke="#FB5607"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.svg>
          </p>
          <p className="mt-1 text-[18px] text-[rgba(0,0,0,0.55)]">
            just kidding,
          </p>
          <p className="mt-1 text-[22px]">I&apos;ve never hit the limit.</p>
          <svg
            width="60"
            height="20"
            viewBox="0 0 60 20"
            className="absolute -bottom-3 left-2"
            fill="none"
          >
            <path
              d="M2 14 Q 14 3, 30 8 T 58 10"
              stroke="#FB5607"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>
      </Parallax>

      {/* Floating avatar bubbles. Hidden below md so they never collide. */}
      <FloatingAvatar
        className="absolute left-[12%] top-[44%]"
        delay={0.85}
        depth={0.025}
        src="/assets/hamza-presenting.avif"
      />
      <FloatingAvatar
        className="absolute right-[10%] top-[56%]"
        delay={1.0}
        depth={0.02}
        src="/assets/strategy-canvas.avif"
      />

      {/* Bottom band sits in normal flow at the end of the column. */}
      <div className="pb-10 md:pb-14">
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6">
          {/* Yellow sticky with cursor (left) */}
          <Parallax
            depth={0.04}
            className="absolute left-[6%] -top-[10px] hidden md:flex items-end gap-1"
          >
            <motion.span
              drag
              dragMomentum={false}
              dragElastic={0.15}
              whileDrag={{ scale: 1.06, rotate: 0, zIndex: 30, cursor: "grabbing" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block rounded-md bg-[#F7C948] px-3 py-1.5 text-[13px] text-[#171717] shadow-[0_4px_10px_rgba(0,0,0,0.10)] -rotate-[6deg]"
              style={{ fontFamily: "var(--font-hand)", touchAction: "none" }}
            >
              PRODUCT DESIGNER
            </motion.span>
            <CursorIcon className="h-5 w-5 -translate-x-2 translate-y-1 text-[#171717]" />
          </Parallax>

          {/* Pink sticky with cursor (right) */}
          <Parallax
            depth={0.05}
            className="absolute right-[6%] -top-[10px] hidden md:flex items-end gap-1"
          >
            <CursorIcon className="h-5 w-5 translate-x-2 translate-y-1 text-[#171717]" />
            <motion.span
              drag
              dragMomentum={false}
              dragElastic={0.15}
              whileDrag={{ scale: 1.06, rotate: 0, zIndex: 30, cursor: "grabbing" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block rounded-md bg-[#FF4D8B] px-3 py-1.5 text-[13px] text-white shadow-[0_4px_10px_rgba(0,0,0,0.10)] rotate-[6deg]"
              style={{ fontFamily: "var(--font-hand)", touchAction: "none" }}
            >
              AVAILABLE NOW
            </motion.span>
          </Parallax>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-[#0F0F0F]"
            style={{ fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 500 }}
          >
            Scaling products through{" "}
            <span className="inline-block translate-y-[3px]">🎯</span>{" "}
            activation{" "}
            <span className="text-[#5ECCDD]">&amp;</span>{" "}
            retention{" "}
            <span className="inline-block translate-y-[2px]">🌸</span>
          </motion.p>

          {/* Contact button */}
          <motion.a
            href="https://calendly.com/hmzajmal911/30min"
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0F0F0F] py-2.5 pl-2 pr-5 text-white hover:opacity-90"
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ background: CHIP }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 3 L10 3 L10 9 L2 9 Z M2 3 L6 6.5 L10 3"
                  stroke="#0F0F0F"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-[13px] tracking-[0.1em] uppercase" style={{ fontWeight: 600 }}>
              Contact me
            </span>
          </motion.a>
        </div>
      </div>
    </motion.div>
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
      transition={{ duration: 0.5, delay: 0.2 }}
      className="absolute left-1/2 top-[110px] z-10 -translate-x-1/2 tabular-nums text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.5)] uppercase md:top-[118px]"
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

function SelectionFrame() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
      className="pointer-events-none absolute -inset-[14px]"
    >
      <div className="absolute inset-0 border border-[#5ECCDD]" />
      {/* corner handles */}
      <Handle position="-top-1 -left-1" />
      <Handle position="-top-1 -right-1" />
      <Handle position="-bottom-1 -left-1" />
      <Handle position="-bottom-1 -right-1" />
    </motion.div>
  );
}

function Handle({ position }: { position: string }) {
  return (
    <span
      className={`absolute h-2 w-2 border-2 border-[#5ECCDD] bg-white ${position}`}
    />
  );
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
