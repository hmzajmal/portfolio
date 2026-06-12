"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Animated recreation of the Imagine.art streak popup.
 * Uses the actual SVG assets exported from Figma (file: Imagine ONE Workspace,
 * node 28155:805628). Plays automatically when scrolled into view and loops.
 *
 * Sizes and colours are kept faithful to the Figma source.
 */

const ASSETS = "/work/streak/assets";
const STREAK_GRADIENT =
  "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(255,147,51,0.15) 0%, rgba(255,161,77,0.15) 23.077%, rgba(254,162,52,0.15) 61.538%, rgba(253,163,27,0.15) 100%), #ffffff";

export function StreakAnimation() {
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const beats = [1200, 1400, 1400, 1800, 1500];
    let i = 0;
    const tick = () => {
      if (cancelled) return;
      setStep(i);
      i = (i + 1) % beats.length;
      setTimeout(tick, beats[i]);
    };
    const t = setTimeout(tick, 200);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [inView]);

  // Progress bar fill. 0→25%, 1→50%, 2→75%, 3+→100%.
  const progress = [25, 50, 75, 100, 100][step];

  return (
    <div ref={ref} className="flex w-full items-center justify-center py-8">
      <div
        className="relative flex w-full max-w-[520px] flex-col gap-6 rounded-2xl border border-[#ededed] bg-white p-4 shadow-[0_8px_16px_rgba(176,175,175,0.22)]"
      >
        {/* Close button (top-right, decorative, not interactive) */}
        <div className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f7f7f7]">
          <img src={`${ASSETS}/close-x.svg`} alt="" className="h-3 w-3" />
        </div>

        <div className="flex items-center gap-4">
          {/* Left column. Flame + Day 1 + Streak reward */}
          <div
            className="flex w-[120px] shrink-0 flex-col items-center justify-center self-stretch rounded-xl px-4 pb-3 pt-1"
            style={{ background: STREAK_GRADIENT }}
          >
            <motion.img
              src={`${ASSETS}/fire.svg`}
              alt=""
              className="h-16 w-16"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <div className="mt-2 flex w-full flex-col items-center">
              <p
                className="bg-gradient-to-b from-[#fe7d03] to-[#fe6202] bg-clip-text text-center text-[24px] leading-[32px] text-transparent"
                style={{ fontVariationSettings: '"wght" 600' }}
              >
                Day 1
              </p>
              <p
                className="text-center text-[12px] leading-[16px] text-[#525252]"
                style={{ letterSpacing: "0.24px" }}
              >
                Streak reward
              </p>
            </div>
          </div>

          {/* Right column. Header + progress + day tiles */}
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <img src={`${ASSETS}/gift-header.svg`} alt="" className="h-[18px] w-[18px]" />
                <p
                  className="text-[14px] leading-[20px] text-[#0f0f0f]"
                  style={{ fontVariationSettings: '"wght" 500', letterSpacing: "0.42px" }}
                >
                  100 credits added!
                </p>
              </div>
              <p className="text-[12px] leading-[16px] text-[rgba(15,15,15,0.5)]" style={{ letterSpacing: "0.24px" }}>
                Daily credits added on top of your existing balance
              </p>
            </div>

            {/* Progress bar */}
            <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-[#fce0be]">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-[#f7941e]"
                initial={{ width: "25%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Day tiles */}
            <div className="grid grid-cols-4 gap-3">
              <DayTile day="Day 1" active={step >= 0} />
              <DayTile day="Day 2" active={step >= 1} />
              <DayTile day="Day 3" active={step >= 2} />
              <RewardTile opened={step >= 3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Day tile (1-3) ---------- */

function DayTile({ day, active }: { day: string; active: boolean }) {
  return (
    <div className="flex h-20 flex-col items-start justify-center gap-1">
      <motion.div
        className="relative flex h-[60px] w-full items-center justify-center overflow-hidden rounded-lg"
        animate={{
          backgroundColor: active ? "#ffffff" : "#f7f7f7",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          border: active ? "1px solid transparent" : "1px solid #ededed",
        }}
      >
        {/* Gradient overlay when active */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-lg"
          initial={false}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: STREAK_GRADIENT }}
        />
        {/* Check icon. Cross-fade between default (grey) and active (orange). */}
        <div className="relative size-6">
          <motion.img
            src={`${ASSETS}/check-default.svg`}
            alt=""
            className="absolute inset-0 h-full w-full"
            initial={false}
            animate={{ opacity: active ? 0 : 1 }}
            transition={{ duration: 0.35 }}
          />
          <motion.img
            src={`${ASSETS}/check-active.svg`}
            alt=""
            className="absolute inset-0 h-full w-full"
            initial={false}
            animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.85 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: active ? 0.1 : 0 }}
          />
        </div>
      </motion.div>
      <motion.span
        className="w-full text-center text-[11px] leading-4"
        initial={false}
        animate={{ color: active ? "#0f0f0f" : "rgba(15,15,15,0.5)" }}
        transition={{ duration: 0.4 }}
        style={{
          fontVariationSettings: active ? '"wght" 500' : '"wght" 400',
          letterSpacing: "0.33px",
        }}
      >
        {day}
      </motion.span>
    </div>
  );
}

/* ---------- Day 4 reward tile ---------- */

function RewardTile({ opened }: { opened: boolean }) {
  return (
    <div className="flex h-20 flex-col items-start justify-center gap-1">
      <motion.div
        className="relative flex w-full flex-1 flex-col items-center overflow-hidden rounded-lg"
        style={{
          background:
            "linear-gradient(156.89deg, rgb(254, 224, 39) 23.477%, rgb(254, 139, 5) 83.54%)",
        }}
        animate={{ scale: opened ? 1.04 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Soft bloom on open */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          initial={false}
          animate={{ opacity: opened ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.55), transparent 70%)",
          }}
        />
        <div className="flex w-full flex-1 items-start justify-center py-1.5">
          <motion.img
            src={`${ASSETS}/gift-box.svg`}
            alt=""
            className="h-7 w-7"
            initial={false}
            animate={{ y: opened ? -1 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {/* Sparkles, faded in on reveal */}
        <motion.img
          src={`${ASSETS}/sparkle-1.svg`}
          alt=""
          className="pointer-events-none absolute right-[9%] top-[9%] h-[18%] w-[18%]"
          initial={false}
          animate={{ opacity: opened ? 1 : 0.5, scale: opened ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: opened ? 0.15 : 0 }}
        />
        <motion.img
          src={`${ASSETS}/sparkle-2.svg`}
          alt=""
          className="pointer-events-none absolute left-[12%] top-[15%] h-[20%] w-[14%] -scale-x-100"
          initial={false}
          animate={{ opacity: opened ? 1 : 0.5, scale: opened ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: opened ? 0.2 : 0 }}
        />
        {/* 40% OFF chip */}
        <div
          className="flex w-full items-center justify-center py-0.5"
          style={{
            background:
              "linear-gradient(200.73deg, rgb(253, 101, 1) 12.343%, rgb(253, 144, 6) 90.061%)",
          }}
        >
          <p
            className="text-[11px] leading-4 text-white"
            style={{ fontVariationSettings: '"wght" 500', letterSpacing: "0.33px" }}
          >
            40% OFF
          </p>
        </div>
      </motion.div>
      <span
        className="w-full text-center text-[11px] leading-4 text-[rgba(15,15,15,0.5)]"
        style={{ letterSpacing: "0.33px" }}
      >
        Day 4
      </span>
    </div>
  );
}
