"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

/**
 * Magnetic hover. Element subtly pulls toward the cursor while hovered.
 * Returns the ref, plus motion values to bind to <motion.div style={{ x, y }}>.
 *
 * Nudge uses spring with bounce 0.2 + duration 0.4s for hover transitions.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.5 });

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return {
    ref: ref as React.RefObject<HTMLElement | null>,
    x: springX as MotionValue<number>,
    y: springY as MotionValue<number>,
    onMouseMove,
    onMouseLeave,
  };
}
