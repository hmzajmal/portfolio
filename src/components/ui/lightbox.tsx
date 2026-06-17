"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Fullscreen image lightbox. Opens with a shared-layout animation from a
 * source image whose `layoutId` matches `layoutId`. Backdrop click and
 * close button both fire onClose.
 */
export function Lightbox({
  src,
  alt,
  caption,
  layoutId,
  onClose,
}: {
  src: string;
  alt: string;
  caption?: string;
  layoutId: string;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/65 px-6 py-10 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClose}
      data-cursor="hover"
    >
      <motion.div
        layoutId={layoutId}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] max-w-[min(86vw,900px)] overflow-hidden rounded-xl bg-white p-4 pb-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      >
        <img
          src={src}
          alt={alt}
          className="block max-h-[78vh] w-full object-contain"
        />
        {caption && (
          <p
            className="mt-4 text-center text-[20px] text-[#0F0F0F]"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            {caption}
          </p>
        )}
      </motion.div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        data-cursor="hover"
        className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0F0F0F] shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
}
