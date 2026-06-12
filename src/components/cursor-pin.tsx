"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

/**
 * "YOU" pin that follows the cursor with a slight spring lag and a small
 * arrow tail pointing back at where the mouse is. Hidden until the user
 * moves the mouse for the first time.
 */
export function CursorPin() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const xs = useSpring(x, { stiffness: 350, damping: 30 });
  const ys = useSpring(y, { stiffness: 350, damping: 30 });

  useEffect(() => {
    let active = false;
    const onMove = (e: MouseEvent) => {
      if (!active) {
        active = true;
      }
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: xs, y: ys }}
      className="pointer-events-none fixed left-0 top-0 z-[60]"
    >
      {/* small arrow + label */}
      <div className="absolute left-[6px] top-[6px]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 1 L2 11 L5 8 L7 12 L9 11 L7 7 L11 7 Z"
            fill="#0F0F0F"
            stroke="white"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="absolute left-[12px] top-[12px] inline-block rounded-md bg-[#0F0F0F] px-1.5 py-[2px] text-[10px] tracking-[0.16em] text-white uppercase"
          style={{ fontWeight: 600 }}
        >
          You
        </span>
      </div>
    </motion.div>
  );
}
