"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * A short intro, cropped to a circle beside the hero copy.
 *
 * The circle shows the frame at one second until the reader presses play.
 * Then the full clip plays right there, with sound, no overlay. Pressing
 * again pauses. When it ends it goes back to the still.
 */
export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reduceMotion = useReducedMotion();

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      // A touch quicker than recorded. Still natural, less waiting.
      video.playbackRate = 1.2;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const reset = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 1;
  };

  return (
    // The circle and the play badge are separate controls. A single
    // rounded-full button would clip its own hit area to the circle,
    // leaving the badge in a dead corner.
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion || playing ? undefined : { scale: 1.02 }}
      className="group relative block h-[112px] w-[112px] shrink-0 md:h-[150px] md:w-[150px] lg:h-[248px] lg:w-[248px]"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause the intro video" : "Play the intro video with sound"}
        aria-pressed={playing}
        className="absolute inset-0 block cursor-pointer overflow-hidden rounded-full bg-[var(--color-canvas-warm)] outline-none focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-4"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(15,15,15,0.06), 0 18px 44px rgba(15,15,15,0.12), 0 2px 6px rgba(15,15,15,0.06)",
        }}
      >
        <video
          ref={videoRef}
          src="/assets/intro/intro.mp4#t=1"
          poster="/assets/intro/intro-poster.jpg"
          playsInline
          preload="metadata"
          aria-hidden
          tabIndex={-1}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={reset}
          // The subject sits left of centre in a 16:9 frame, so the crop
          // is nudged across to put the face in the middle of the circle.
          className="h-full w-full object-cover [object-position:42%_45%]"
        />
      </button>

      {/* Play or pause badge, on the rim so it never covers the face. The
          circle above already names the action, so this is hidden from
          assistive tech rather than announced twice. */}
      <button
        type="button"
        onClick={toggle}
        aria-hidden
        tabIndex={-1}
        className="absolute right-0 bottom-0 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[var(--color-ink)] text-ink-inverse shadow-[0_6px_16px_rgba(15,15,15,0.24)] transition-transform duration-300 group-hover:scale-110 lg:right-1 lg:bottom-1 lg:h-11 lg:w-11"
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
    </motion.div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden>
      <path d="M9 6.5v11a.6.6 0 0 0 .92.5l8.5-5.5a.6.6 0 0 0 0-1L9.92 6a.6.6 0 0 0-.92.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden>
      <rect x="7" y="6" width="3.5" height="12" rx="0.8" />
      <rect x="13.5" y="6" width="3.5" height="12" rx="0.8" />
    </svg>
  );
}
