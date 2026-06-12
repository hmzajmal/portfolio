"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FLIP = { duration: 0.7, ease: [0.65, 0, 0.35, 1] } as const;

// Cube geometry. RADIUS is half of FACE_H so the two faces meet at the edge.
const FACE_H = "1.45em";
const RADIUS = "0.725em";
const PAD_X = "0.55em";

/**
 * A single word that morphs through a list with a cube-flip animation.
 * No icons. Designed for headlines like "Designing products that win at [word]".
 */
export function RotatingWord({
  items,
  intervalMs = 2200,
}: {
  items: string[];
  intervalMs?: number;
}) {
  const [step, setStep] = useState(0);
  const [widths, setWidths] = useState<number[]>([]);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => s + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  useLayoutEffect(() => {
    if (!measureRef.current) return;
    const ws = Array.from(measureRef.current.children).map(
      (c) => (c as HTMLElement).offsetWidth
    );
    setWidths(ws);
  }, [items]);

  const len = items.length;
  const idx = ((step % len) + len) % len;
  const at = (s: number) => items[((s % len) + len) % len];
  const faces = [step - 1, step];
  const w = widths[idx];

  return (
    <span
      className="inline-flex align-middle"
      style={{ perspective: "700px" }}
    >
      {/* Hidden measurer */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="absolute top-0 left-0 opacity-0 pointer-events-none -z-50 flex flex-col items-start"
      >
        {items.map((label, i) => (
          <span
            key={i}
            className="inline-flex items-center whitespace-nowrap"
            style={{ height: FACE_H, paddingLeft: PAD_X, paddingRight: PAD_X }}
          >
            {label}
          </span>
        ))}
      </span>

      {/* Morphing pill */}
      <motion.span
        className="relative inline-block rounded-[0.28em] border border-[rgba(0,0,0,0.12)] bg-white/55 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)]"
        style={{ height: FACE_H }}
        animate={w != null ? { width: w } : undefined}
        transition={FLIP}
      >
        <motion.span
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            willChange: "transform",
          }}
          animate={{ rotateX: -90 * step }}
          transition={FLIP}
        >
          {faces.map((s) => (
            <motion.span
              key={s}
              className="absolute left-1/2 top-1/2 flex items-center justify-center whitespace-nowrap"
              style={{
                height: FACE_H,
                transform: `translate(-50%, -50%) rotateX(${90 * s}deg) translateZ(${RADIUS})`,
                backfaceVisibility: "hidden",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: s === step ? 1 : 0 }}
              transition={FLIP}
            >
              {at(s)}
            </motion.span>
          ))}
        </motion.span>
      </motion.span>
    </span>
  );
}
