"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Optional class for the wrapping button. */
  buttonClassName?: string;
};

/**
 * An image that opens a full-viewport preview on click.
 *
 * Used for every screenshot on the site. The trigger is a real button so
 * it is keyboard reachable; the preview closes on Escape, on the close
 * button, or on a click outside the image. Lenis is paused while open so
 * the page does not scroll behind the overlay.
 */
export function ZoomImage({ src, alt, className = "", buttonClassName = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    window.__lenis?.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__lenis?.start();
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const fade = reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${alt} at full size`}
        className={`group block w-full cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2 ${buttonClassName}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={`block h-auto w-full ${className}`} />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fade}
                onClick={close}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(15,15,15,0.86)] p-4 backdrop-blur-md md:p-10"
                style={{ cursor: "zoom-out" }}
              >
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close preview"
                  className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ink-inverse outline-none transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-[#5ECCDD] md:top-6 md:right-6"
                >
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" aria-hidden>
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <motion.img
                  src={src}
                  alt={alt}
                  initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={reduceMotion ? undefined : { scale: 0.98, opacity: 0 }}
                  transition={fade}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-full max-w-full rounded-lg object-contain shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
                  style={{ cursor: "default" }}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
