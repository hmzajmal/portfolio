"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionGrid } from "@/components/ui/section-grid";

type Site = {
  name: string;
  line: string;
  meta: string;
  href: string;
  /** Capture of the page, top first. Stands in until the live page loads,
   *  and stays on phones and for readers who prefer reduced motion. */
  image: string;
};

/** Add a site by adding an entry. One site gets the wide layout, more get a grid. */
const SITES: Site[] = [
  {
    name: "Frame 1.0",
    line: "Launch page for ImagineArt's avatar model. Record yourself once, get an avatar ready for any video.",
    meta: "ImagineArt · Design and build",
    href: "https://frame1-five.vercel.app/frame/",
    image: "/websites/frame.jpg",
  },
  {
    name: "Imagine Computer",
    line: "Product site for ImagineArt's AI workspace: an agent that gets things done, plus docs, slides, images, video and music.",
    meta: "ImagineArt · Design and build",
    href: "https://imagine-computer.vercel.app/",
    image: "/websites/imagine-computer.jpg",
  },
];

/**
 * Websites. Each one is a window onto the real page, running live at
 * desktop size and scaled down to fit, so the hero plays as it does on the
 * site and the page can be scrolled in place. The text under it links out.
 */
export function WebsitesFold() {
  const single = SITES.length === 1;
  return (
    <section id="websites" className="relative w-full py-24 md:py-32">
      <SectionGrid />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h2 text-ink"
        >
          Websites
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg mt-4 max-w-[720px] text-ink-muted"
        >
          Pages I designed and built. Each window is the live site. Rest on one to scroll it.
        </motion.p>

        <div className={`mt-14 grid grid-cols-1 gap-8 ${single ? "" : "md:grid-cols-2"}`}>
          {SITES.map((site, i) => (
            <SiteCard key={site.href} site={site} wide={single} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteCard({ site, wide, delay }: { site: Site; wide: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 gap-6 ${wide ? "lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-end lg:gap-12" : ""}`}
    >
      <LiveWindow site={site} />

      <a
        href={site.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-4"
      >
        <p className="eyebrow">{site.meta}</p>
        <h3 className="h3 mt-3 text-ink">{site.name}</h3>
        <p className="body mt-2 max-w-[460px] text-ink-muted">{site.line}</p>
        <span className="label-sm mt-5 inline-flex items-center gap-2 text-ink">
          Visit site
          <svg viewBox="0 0 16 16" width={14} height={14} fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M4.5 11.5l7-7M11.5 4.5H6M11.5 4.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </motion.div>
  );
}

/** The page is laid out at this size, then scaled to the window's width. */
const VIEW_W = 1440;
const VIEW_H = 900;

/** How long the pointer must rest on a window before it takes the wheel. */
const REST_MS = 350;

/**
 * A 16:10 window onto the live page. It loads only on screens wide enough
 * to be worth the weight, only once it is near the viewport, and never for
 * readers who ask for reduced motion. Everyone else sees the capture.
 *
 * The page inside can be scrolled, but only once the pointer has rested
 * on the window. Until then the frame is inert, so a reader scrolling down
 * the portfolio passes straight over it instead of getting caught inside.
 * Any wheel movement while inert restarts the wait. Leaving switches it
 * off again. The frame is sandboxed so nothing in it can navigate this page.
 */
function LiveWindow({ site }: { site: Site }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [near, setNear] = useState(false);
  const [wide, setWide] = useState(false);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(false);
  const rest = useRef<number | undefined>(undefined);
  const reduceMotion = useReducedMotion();

  const arm = () => {
    window.clearTimeout(rest.current);
    rest.current = window.setTimeout(() => setActive(true), REST_MS);
  };
  const disarm = () => {
    window.clearTimeout(rest.current);
    setActive(false);
  };
  useEffect(() => () => window.clearTimeout(rest.current), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const size = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / VIEW_W));
    size.observe(el);
    const seen = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          seen.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    seen.observe(el);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => setWide(mq.matches);
    onMq();
    mq.addEventListener("change", onMq);
    return () => {
      size.disconnect();
      seen.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  const live = near && wide && !reduceMotion && scale > 0;

  return (
    <div
      ref={ref}
      onPointerEnter={arm}
      onPointerLeave={disarm}
      onWheel={active ? undefined : arm}
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[var(--color-canvas-warm)] ring-1 transition-shadow duration-500 ${active ? "shadow-[0_24px_60px_rgba(15,15,15,0.14)] ring-[var(--color-line-strong)]" : "ring-[var(--color-line)]"}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.image}
        alt={`${site.name}, the top of the page`}
        loading="lazy"
        className="absolute top-0 left-0 block w-full"
      />
      {live && (
        <iframe
          src={site.href}
          title={`${site.name}, live`}
          tabIndex={-1}
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setReady(true)}
          className={`absolute top-0 left-0 origin-top-left border-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"} ${active ? "" : "pointer-events-none"}`}
          style={{ width: VIEW_W, height: VIEW_H, transform: `scale(${scale})` }}
        />
      )}
    </div>
  );
}
