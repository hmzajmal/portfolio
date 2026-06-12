"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { StreakAnimation } from "./streak-animation";

/**
 * Poster-style cover for the streak case study. Big bold headline + gray
 * subhead, then a composition with the streak surface in a browser frame
 * and real artifacts floating around it.
 */
export function StreakCover() {
  return (
    <div className="relative isolate overflow-hidden pt-12 pb-24 md:pt-20 md:pb-28">
      {/* Soft warm wash, off-axis */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] top-[10%] h-[520px] w-[700px] rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(251,86,7,0.18), transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[12%] top-[40%] h-[420px] w-[560px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,196,116,0.32), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Headline */}
        <div className="text-center">
          <h1
            className="leading-[1.05] text-[#171717]"
            style={{
              fontSize: "clamp(40px, 6.4vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
            }}
          >
            A 4-day streak that converts free users.
          </h1>
          <p
            className="mx-auto mt-3 max-w-[820px] leading-[1.15] text-[rgba(0,0,0,0.45)]"
            style={{
              fontSize: "clamp(28px, 4.4vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Earn the discount. Don&apos;t just take it.
          </p>
        </div>

        {/* Composition */}
        <div className="relative mt-16 md:mt-20">
          {/* Center stage. Streak popup, framed like a browser surface. */}
          <div className="relative z-10 mx-auto max-w-[560px]">
            <div
              className="overflow-hidden rounded-[20px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_28px_64px_rgba(0,0,0,0.10)]"
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="flex items-center gap-2 border-b border-[rgba(0,0,0,0.06)] bg-[#FBFAF8] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F1604C]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F2BD3A]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#5ABE6E]" />
                <span className="mx-auto rounded-md bg-white px-3 py-1 text-[11px] text-[rgba(0,0,0,0.55)]">
                  imagine.art
                </span>
                <span className="w-6" />
              </div>
              <div className="bg-white p-6 md:p-8">
                <StreakAnimation />
              </div>
            </div>
          </div>

          {/* Floating: top-left, flame badge */}
          <FloatingChip className="absolute -left-2 top-2 hidden md:block" rotate={-6}>
            <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_28px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(0,0,0,0.04)]">
              <img src="/work/streak/assets/fire.svg" alt="" className="h-7 w-7" />
              <div className="flex flex-col leading-none">
                <span
                  className="bg-gradient-to-b from-[#fe7d03] to-[#fe6202] bg-clip-text text-[14px] text-transparent"
                  style={{ fontWeight: 700 }}
                >
                  Day 1
                </span>
                <span className="mt-1 text-[10px] text-[rgba(0,0,0,0.55)]">
                  Streak started
                </span>
              </div>
            </div>
          </FloatingChip>

          {/* Floating: bottom-left, progression chip */}
          <FloatingChip className="absolute -left-4 bottom-4 hidden md:block" rotate={4}>
            <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_28px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(0,0,0,0.04)]">
              <Dot active /> <Dot active /> <Dot /> <Dot reward />
              <span className="ml-1 text-[11px] text-[rgba(0,0,0,0.6)]">
                2 of 4 days
              </span>
            </div>
          </FloatingChip>

          {/* Floating: top-right, sparkle */}
          <FloatingChip className="absolute right-2 top-0 hidden md:block" rotate={10} delay={0.2}>
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #FFC976 0%, #FF9526 60%, #FF6A2C 100%)",
                boxShadow: "0 10px 24px rgba(251,86,7,0.32)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z" fill="white" />
              </svg>
            </div>
          </FloatingChip>

          {/* Floating: middle-right, reward card */}
          <FloatingChip className="absolute -right-4 top-[42%] hidden md:block" rotate={-4} delay={0.3}>
            <div className="flex w-[220px] flex-col gap-3 rounded-2xl bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.09)] ring-1 ring-[rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.14em] text-[rgba(0,0,0,0.5)] uppercase">
                  Reward
                </span>
                <span
                  className="rounded-md bg-[#E9F8EC] px-2 py-0.5 text-[10px] text-[#1E7F3A]"
                  style={{ fontWeight: 600 }}
                >
                  Earned
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFC976 0%, #FF9526 60%, #FF6A2C 100%)",
                  }}
                >
                  <img src="/work/streak/assets/gift-box.svg" alt="" className="h-6 w-6" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span
                    className="text-[20px] text-[#171717]"
                    style={{ fontWeight: 800, letterSpacing: "-0.01em" }}
                  >
                    40% OFF
                  </span>
                  <span className="text-[11px] text-[rgba(0,0,0,0.55)]">
                    On any annual plan
                  </span>
                </div>
              </div>
            </div>
          </FloatingChip>

          {/* Floating: bottom-right, credits chip */}
          <FloatingChip className="absolute -right-2 bottom-2 hidden md:block" rotate={6} delay={0.4}>
            <div className="flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_28px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(0,0,0,0.04)]">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 8h14v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8Z M2 6h16v2.5H2zM10 6v12 M7 6c0-1.5 1-3 3-3s3 1.5 3 3"
                  stroke="#FB5607"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[12px] text-[#171717]" style={{ fontWeight: 500 }}>
                +100 credits added
              </span>
            </div>
          </FloatingChip>
        </div>
      </div>
    </div>
  );
}

function FloatingChip({
  children,
  className,
  rotate = 0,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate }}
      animate={{ opacity: 1, scale: 1, rotate, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        rotate: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 5 + delay, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Dot({ active, reward }: { active?: boolean; reward?: boolean }) {
  if (reward) {
    return (
      <span
        className="h-3 w-3 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, #FFC976 0%, #FF9526 60%, #FF6A2C 100%)",
        }}
      />
    );
  }
  return (
    <span
      className={`h-3 w-3 rounded-full ${active ? "bg-[#FB5607]" : "bg-[#E5E5E5]"}`}
    />
  );
}
