"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbox } from "@/components/ui/lightbox";

/**
 * Shared UI primitives used across the canvas-style portfolio.
 * Establishes a single source of truth for repeated patterns so we don't
 * keep duplicating selection frames, polaroids, eyebrows, etc.
 */

/* ──────────── Selectable text wrapper ──────────── */

/**
 * Wrap any inline text. On hover it inverts (white-on-black) and shows
 * four small Figma-style corner handles. Pair with `.selectable` styles
 * defined in globals.css.
 */
export function Selectable({
  children,
  as: As = "span",
  className = "",
}: {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
}) {
  return (
    <As className={`selectable ${className}`}>
      {children}
      <span className="sel-frame" aria-hidden>
        <span className="sel-handle tl" />
        <span className="sel-handle tr" />
        <span className="sel-handle bl" />
        <span className="sel-handle br" />
      </span>
    </As>
  );
}

/* ──────────── Eyebrow ──────────── */

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`eyebrow ${className}`}>{children}</span>
  );
}

/* ──────────── Handwritten label (Caveat) ──────────── */

export function Handwritten({
  children,
  className = "",
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      className={`text-ink ${className}`}
      style={{
        fontFamily: "var(--font-hand)",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

/* ──────────── Selection frame ──────────── */

export function SelectionFrame({
  className = "",
  inset = 14,
  color = "var(--color-brand-cyan)",
}: {
  className?: string;
  inset?: number;
  color?: string;
}) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`pointer-events-none absolute ${className}`}
      style={{ inset: -inset }}
    >
      <div className="absolute inset-0 border" style={{ borderColor: color }} />
      <Handle position="-top-1 -left-1" color={color} />
      <Handle position="-top-1 -right-1" color={color} />
      <Handle position="-bottom-1 -left-1" color={color} />
      <Handle position="-bottom-1 -right-1" color={color} />
    </motion.div>
  );
}

function Handle({ position, color }: { position: string; color: string }) {
  return (
    <span
      className={`absolute h-2 w-2 border-2 bg-white ${position}`}
      style={{ borderColor: color }}
    />
  );
}

/* ──────────── Sticky pill (handwritten note) ──────────── */

type StickyTone = "yellow" | "mint" | "blue" | "pink" | "white";

const STICKY_TONES: Record<StickyTone, { bg: string; text: string }> = {
  yellow: { bg: "var(--color-brand-yellow)", text: "var(--color-ink)" },
  mint: { bg: "var(--color-brand-mint)", text: "var(--color-ink)" },
  blue: { bg: "var(--color-brand-blue)", text: "#FFFFFF" },
  pink: { bg: "var(--color-brand-pink)", text: "#FFFFFF" },
  white: { bg: "#FFFFFF", text: "var(--color-ink)" },
};

export function StickyPill({
  children,
  tone = "yellow",
  rotate = 0,
  className = "",
}: {
  children: React.ReactNode;
  tone?: StickyTone;
  rotate?: number;
  className?: string;
}) {
  const palette = STICKY_TONES[tone];
  return (
    <motion.span
      data-cursor="hover"
      initial={{ rotate }}
      whileHover={{ rotate: 0, scale: 1.08, y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 16, mass: 0.5 }}
      className={`inline-block rounded-md px-3 py-1.5 text-[13px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] ${className}`}
      style={{
        background: palette.bg,
        color: palette.text,
        fontFamily: "var(--font-hand)",
      }}
    >
      {children}
    </motion.span>
  );
}

/* ──────────── Reveal lines (scroll-staggered words) ──────────── */

/**
 * Splits its text into word spans and reveals them with a staggered
 * fade + translateY on scroll into view. Use for headings and body
 * sentences where you want the Nudge line-by-line entrance.
 */
export function RevealLines({
  text,
  as: As = "p",
  className = "",
  delay = 0,
  stagger = 0.04,
}: {
  text: string;
  as?: "p" | "h1" | "h2" | "h3" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  const MotionAs = motion[As as keyof typeof motion] as typeof motion.p;
  return (
    <MotionAs
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: "0.5em" },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionAs>
  );
}

/* ──────────── Polaroid ──────────── */

export function Polaroid({
  src,
  alt = "",
  caption,
  rotate = 0,
  className = "",
  delay = 0,
  width = 180,
  height = 220,
  draggable = true,
}: {
  src: string;
  alt?: string;
  caption?: string;
  rotate?: number;
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  draggable?: boolean;
}) {
  const layoutId = `polaroid-${useId()}`;
  const [open, setOpen] = useState(false);
  const [dragging, setDragging] = useState(false);

  return (
    <>
      <motion.div
        layoutId={layoutId}
        data-cursor={draggable ? "drag" : "hover"}
        drag={draggable}
        dragMomentum={false}
        dragElastic={0.15}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setTimeout(() => setDragging(false), 50)}
        onTap={() => {
          if (!dragging) setOpen(true);
        }}
        initial={{ opacity: 0, scale: 0.92, rotate }}
        whileInView={{ opacity: 1, scale: 1, rotate, y: [0, -6, 0] }}
        whileHover={{ scale: 1.06, rotate: 0, y: -10, zIndex: 10 }}
        whileDrag={{ scale: 1.08, rotate: 0, zIndex: 30, cursor: "grabbing" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          opacity: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
          scale: { type: "spring", stiffness: 220, damping: 18 },
          rotate: { type: "spring", stiffness: 220, damping: 18 },
          y: { duration: 5, delay: delay + 0.6, repeat: Infinity, ease: "easeInOut" },
        }}
        className={`relative flex flex-col gap-3 rounded-[6px] bg-white p-3 pb-5 shadow-[0_4px_8px_rgba(0,0,0,0.06),0_16px_36px_rgba(0,0,0,0.10)] ${className}`}
        style={{ width: `min(${width}px, 100%)`, touchAction: "none" }}
      >
        <div
          className="pointer-events-none w-full overflow-hidden bg-[#f5f5f5]"
          style={{ height }}
        >
          <img src={src} alt={alt} className="h-full w-full object-cover" draggable={false} />
        </div>
        {caption && (
          <span
            className="pointer-events-none text-center text-[18px] text-ink"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            {caption}
          </span>
        )}
      </motion.div>

      <AnimatePresence>
        {open && (
          <Lightbox
            src={src}
            alt={alt}
            caption={caption}
            layoutId={layoutId}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ──────────── Draggable (generic canvas item wrapper) ──────────── */

/**
 * Wrap any block to make it free-drag like a Figma layer. Optional
 * `tone` rotation hint on idle, snap-back disabled (dragMomentum=false).
 */
export function Draggable({
  children,
  className = "",
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <motion.div
      data-cursor="drag"
      drag
      dragMomentum={false}
      dragElastic={0.15}
      whileDrag={{ scale: 1.04, zIndex: 30, cursor: "grabbing" }}
      initial={{ rotate }}
      animate={{ rotate }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      style={{ touchAction: "none" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────── Glass card ──────────── */

/** Convert a hex colour to rgba with given alpha. */
export function tint(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function GlassCard({
  children,
  accent,
  className = "",
  style,
}: {
  children: React.ReactNode;
  accent: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`overflow-hidden rounded-3xl ${className}`}
      style={{
        background: `linear-gradient(135deg, ${tint(accent, 0.22)} 0%, ${tint(accent, 0.08)} 100%), rgba(255, 255, 255, 0.55)`,
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow:
          "inset 0 1px 0 rgba(255, 255, 255, 0.85), inset 0 -1px 0 rgba(255, 255, 255, 0.18), 0 24px 64px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ──────────── Canvas grid background ──────────── */

export function CanvasGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:64px_64px] ${className}`}
    />
  );
}
