"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { Polaroid } from "@/components/ui/primitives";

/**
 * Second fold of the home page, "about me" canvas. Continues the dotted
 * grid look from the hero. Hand-drawn arc across the top, handwritten
 * label, a selection-style "what's up" chip, big body sentence with
 * inline portrait and icons, two polaroids, and a row of skill pills.
 */
export function AboutFold() {
  return (
    <section
      id="about"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-white pb-24 pt-16"
    >
      {/* Continuing full-canvas grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      {/* Hand-drawn arc at top */}
      <motion.svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 right-0 top-0 h-[160px] w-full"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.path
          d="M 0 140 Q 360 -20, 720 60 T 1440 140"
          stroke="#0F0F0F"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
      </motion.svg>

      <div className="relative mx-auto max-w-[1280px] px-6 pt-32 md:px-10">
        {/* Handwritten label, top-left */}
        <motion.span
          initial={{ opacity: 0, rotate: -4, x: -10 }}
          whileInView={{ opacity: 1, rotate: -4, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-4 top-4 text-[22px] text-[#0F0F0F] md:left-[8%] md:top-[12%] md:text-[32px]"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          about me!
        </motion.span>

        {/* "what's up" selection chip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-fit"
        >
          <div
            className="relative inline-block bg-white px-6 py-3 text-[#0F0F0F]"
            style={{
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "-0.01em",
            }}
          >
            what&apos;s up
            <SelectionFrame />
          </div>
        </motion.div>

        {/* Big body sentence with inline portrait + icons */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-[920px] text-center text-[#0F0F0F]"
          style={{
            fontSize: "clamp(28px, 4.2vw, 52px)",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            lineHeight: 1.2,
          }}
        >
          I&apos;m Hamza{" "}
          <InlinePortrait />
          {" "}a product designer who helps growth-stage teams ship the
          activation, retention, and conversion surfaces that move the metric
          that actually matters.
        </motion.p>

        {/* Polaroids */}
        <div className="absolute left-[2%] top-[44%] hidden lg:block">
          <Polaroid
            src="/assets/hamza-presenting.avif"
            alt="Hamza presenting at a hackathon"
            caption="hackathon, 2024"
            rotate={-6}
            delay={0.85}
            height={180}
          />
        </div>
        <div className="absolute right-[2%] top-[48%] hidden lg:block">
          <Polaroid
            src="/assets/workspace-ipad.avif"
            alt="Hamza's iPad workspace"
            caption="my workspace"
            rotate={5}
            delay={1.0}
            height={180}
          />
        </div>

        {/* Skill pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 flex w-fit flex-wrap items-center justify-center gap-3"
        >
          <SkillPill bg="#F7C948" color="#0F0F0F" icon="grid">
            Product Design
          </SkillPill>
          <SkillPill bg="#2EBD6B" color="#FFFFFF" icon="sun">
            Design Systems
          </SkillPill>
          <SkillPill bg="#FF4D8B" color="#FFFFFF" icon="eye">
            User Research
          </SkillPill>
          <SkillPill bg="#5ECCDD" color="#0F0F0F" icon="spark">
            Prototyping
          </SkillPill>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Pieces ---------- */

function SelectionFrame() {
  return (
    <span aria-hidden className="pointer-events-none absolute -inset-[8px]">
      <span className="absolute inset-0 border-[1.5px] border-[#0F0F0F]" />
      <Handle position="-top-[5px] -left-[5px]" />
      <Handle position="-top-[5px] -right-[5px]" />
      <Handle position="-bottom-[5px] -left-[5px]" />
      <Handle position="-bottom-[5px] -right-[5px]" />
    </span>
  );
}

function Handle({ position }: { position: string }) {
  return (
    <span
      className={`absolute h-[10px] w-[10px] border-[1.5px] border-[#0F0F0F] bg-white ${position}`}
    />
  );
}

function InlinePortrait() {
  return (
    <span
      className="inline-flex h-[1em] w-[1.5em] -translate-y-[0.08em] items-center justify-center overflow-hidden rounded-full ring-2 ring-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
      style={{ verticalAlign: "middle" }}
    >
      <img
        src="/assets/hamza-presenting.avif"
        alt=""
        className="h-full w-full object-cover"
      />
    </span>
  );
}

function InlineIcon({ variant }: { variant: "target" | "flower" }) {
  if (variant === "target") {
    return (
      <span
        className="inline-flex h-[1.05em] w-[1.05em] -translate-y-[0.04em] items-center justify-center rounded-md"
        style={{ background: "#F7C948", verticalAlign: "middle" }}
      >
        <svg viewBox="0 0 24 24" className="h-[0.7em] w-[0.7em]" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#0F0F0F" strokeWidth="2" />
          <circle cx="12" cy="12" r="5" stroke="#0F0F0F" strokeWidth="2" />
          <circle cx="12" cy="12" r="1.5" fill="#0F0F0F" />
        </svg>
      </span>
    );
  }
  // flower
  return (
    <span
      className="inline-flex h-[1.05em] w-[1.05em] -translate-y-[0.04em] items-center justify-center rounded-md"
      style={{ background: "#FF4D8B", verticalAlign: "middle" }}
    >
      <svg viewBox="0 0 24 24" className="h-[0.75em] w-[0.75em]" fill="none">
        <circle cx="12" cy="6" r="3" fill="#FFFFFF" />
        <circle cx="12" cy="18" r="3" fill="#FFFFFF" />
        <circle cx="6" cy="12" r="3" fill="#FFFFFF" />
        <circle cx="18" cy="12" r="3" fill="#FFFFFF" />
        <circle cx="12" cy="12" r="2" fill="#F7C948" />
      </svg>
    </span>
  );
}

function YouPin() {
  return (
    <span
      aria-hidden
      className="ml-1 inline-flex translate-y-[-0.5em] items-center rounded-md bg-[#0F0F0F] px-1.5 py-0.5 align-top text-[10px] tracking-[0.16em] text-white uppercase"
      style={{ fontWeight: 600 }}
    >
      You
    </span>
  );
}

function SkillPill({
  children,
  bg,
  color,
  icon,
}: {
  children: React.ReactNode;
  bg: string;
  color: string;
  icon: "grid" | "sun" | "eye" | "spark";
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] md:text-[16px]"
      style={{ background: bg, color, fontWeight: 600, letterSpacing: "-0.005em" }}
    >
      <span>{children}</span>
      <PillIcon variant={icon} fill={color} />
    </span>
  );
}

function PillIcon({
  variant,
  fill,
}: {
  variant: "grid" | "sun" | "eye" | "spark";
  fill: string;
}) {
  if (variant === "grid")
    return (
      <svg viewBox="0 0 18 18" className="h-[18px] w-[18px]" fill="none">
        <rect x="2" y="2" width="6" height="6" fill={fill} />
        <rect x="10" y="2" width="6" height="6" fill={fill} opacity="0.55" />
        <rect x="2" y="10" width="6" height="6" fill={fill} opacity="0.55" />
        <rect x="10" y="10" width="6" height="6" fill={fill} />
      </svg>
    );
  if (variant === "sun")
    return (
      <svg viewBox="0 0 18 18" className="h-[18px] w-[18px]" fill="none">
        <circle cx="9" cy="9" r="4" fill={fill} />
        <g stroke={fill} strokeWidth="1.8" strokeLinecap="round">
          <path d="M9 1 V3" />
          <path d="M9 15 V17" />
          <path d="M1 9 H3" />
          <path d="M15 9 H17" />
          <path d="M3 3 L4.5 4.5" />
          <path d="M13.5 13.5 L15 15" />
          <path d="M3 15 L4.5 13.5" />
          <path d="M13.5 4.5 L15 3" />
        </g>
      </svg>
    );
  if (variant === "eye")
    return (
      <svg viewBox="0 0 18 18" className="h-[18px] w-[18px]" fill="none">
        <path
          d="M1 9 C 3 4, 15 4, 17 9 C 15 14, 3 14, 1 9 Z"
          stroke={fill}
          strokeWidth="1.6"
          fill="none"
        />
        <circle cx="9" cy="9" r="2.4" fill={fill} />
      </svg>
    );
  // spark
  return (
    <svg viewBox="0 0 18 18" className="h-[18px] w-[18px]" fill="none">
      <path
        d="M9 1 L10.7 7.3 L17 9 L10.7 10.7 L9 17 L7.3 10.7 L1 9 L7.3 7.3 Z"
        fill={fill}
      />
    </svg>
  );
}
