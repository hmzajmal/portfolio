"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/** Full player, sound on, with Loom's own controls. Opened on click. */
const FULL_SRC =
  "https://www.loom.com/embed/2c9dc0b9884c4c6683e3734f05c1df31" +
  "?autoplay=1&hide_owner=true&hide_share=true&hide_title=true";

/**
 * A short intro, cropped to a circle beside the hero copy.
 *
 * The circle runs a four second silent clip on a loop. It is a local
 * file with no audio track at all, so nothing can make noise uninvited
 * and the page does not wait on a third party to draw its hero. Clicking
 * opens the full video with sound, where Loom's own controls live.
 */
export function IntroVideo() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  // Muted autoplay is allowed almost everywhere, but a few browsers and
  // battery-saver modes still refuse it without a gesture. Ask on mount,
  // again once the file is decodable, and once more after the reader's
  // first interaction. Until one of those lands, the poster stands in.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let done = false;
    const tryPlay = () => {
      if (done) return;
      video.play().then(
        () => {
          done = true;
        },
        () => {}
      );
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    for (const e of events) {
      window.addEventListener(e, tryPlay, { once: true, passive: true });
    }
    return () => {
      done = true;
      video.removeEventListener("canplay", tryPlay);
      for (const e of events) window.removeEventListener(e, tryPlay);
    };
  }, []);

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

  const fade = reduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Play the intro video with sound"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        className="group relative block h-[112px] w-[112px] shrink-0 cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-4 md:h-[150px] md:w-[150px] lg:h-[248px] lg:w-[248px]"
      >
        <span
          className="absolute inset-0 block overflow-hidden rounded-full bg-[var(--color-canvas-warm)]"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(15,15,15,0.06), 0 18px 44px rgba(15,15,15,0.12), 0 2px 6px rgba(15,15,15,0.06)",
          }}
        >
          <video
            ref={videoRef}
            src="/assets/intro/intro-loop.mp4"
            poster="/assets/intro/intro-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
            tabIndex={-1}
            // The subject sits left of centre in a 16:9 frame, so the crop
            // is nudged across to put the face in the middle of the circle.
            className="h-full w-full object-cover [object-position:42%_45%]"
          />
        </span>

        {/* Play affordance, on the rim so it never covers the face. */}
        <span className="pointer-events-none absolute right-0 bottom-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-ink)] text-ink-inverse shadow-[0_6px_16px_rgba(15,15,15,0.24)] transition-transform duration-300 group-hover:scale-110 lg:right-1 lg:bottom-1 lg:h-11 lg:w-11">
          <PlayIcon />
        </span>
      </motion.button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Intro video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fade}
                onClick={close}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(15,15,15,0.86)] p-4 backdrop-blur-md md:p-10"
              >
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close video"
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

                <motion.div
                  initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={reduceMotion ? undefined : { scale: 0.98, opacity: 0 }}
                  transition={fade}
                  onClick={(e) => e.stopPropagation()}
                  className="aspect-video w-full max-w-[1100px] overflow-hidden rounded-xl bg-black shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
                >
                  <iframe
                    src={FULL_SRC}
                    title="Intro video"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden>
      <path d="M9 6.5v11a.6.6 0 0 0 .92.5l8.5-5.5a.6.6 0 0 0 0-1L9.92 6a.6.6 0 0 0-.92.5Z" />
    </svg>
  );
}
