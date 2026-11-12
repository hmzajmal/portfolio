"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionGrid } from "@/components/ui/section-grid";

type Site = {
  name: string;
  href: string;
  /** Two folds of the page stacked, top first. Shown on phones, while the
   *  live page loads, and for sites that refuse to be embedded. */
  image: string;
  /** Present when the site can be embedded. `section` is the id of its
   *  second fold; `glide` says whether the site scrolls there smoothly
   *  on its own or jumps. */
  live?: { section: string; glide: boolean };
};

const SITES: Site[] = [
  {
    name: "Frame 1.0",
    href: "https://frame1-five.vercel.app/frame/",
    image: "/websites/frame.jpg",
    live: { section: "clips", glide: true },
  },
  {
    name: "Imagine Computer",
    href: "https://imagine-computer.vercel.app/",
    image: "/websites/imagine-computer.jpg",
    live: { section: "features", glide: false },
  },
  {
    name: "ImagineArt for Business",
    href: "https://www.imagine.art/business",
    image: "/websites/imagine-business.jpg",
  },
];

/**
 * Websites. Each card is a window onto a page I built. It keeps moving on
 * its own, down to the second fold and back to the top, so it reads as a
 * page and not a picture. Clicking a card opens the site.
 */
export function WebsitesFold() {
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
          Pages I designed and built. Click one to open it.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SITES.map((site, i) => (
            <motion.a
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name}, opens in a new tab`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-4"
            >
              <SiteWindow site={site} index={i} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The page is laid out at this size, then scaled to the window's width. */
const VIEW_W = 1440;
const VIEW_H = 900;
/** Rest at the top, travel, rest at the second fold, travel back. */
const HOLD_TOP_MS = 3600;
const HOLD_DOWN_MS = 3200;
const FADE_MS = 280;

/**
 * A 16:10 window. Where the site allows it and the screen is wide enough,
 * the real page runs inside, scaled down, and is sent to its second fold
 * and back by changing the hash on its address (the only way to scroll a
 * page on another origin). Otherwise a two-fold capture slides instead.
 * The frame never takes the pointer, so the card's link gets every click
 * and the portfolio's own scroll is never trapped. Nothing moves for
 * readers who ask for reduced motion, or while the card is off screen.
 */
function SiteWindow({ site, index }: { site: Site; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [near, setNear] = useState(false);
  const [inView, setInView] = useState(false);
  const [wide, setWide] = useState(false);
  const [ready, setReady] = useState(false);
  const [down, setDown] = useState(false);
  const [veil, setVeil] = useState(false);
  const [hash, setHash] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const size = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / VIEW_W));
    size.observe(el);
    const nearby = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "400px" });
    nearby.observe(el);
    const visible = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    visible.observe(el);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => setWide(mq.matches);
    onMq();
    mq.addEventListener("change", onMq);
    return () => {
      size.disconnect();
      nearby.disconnect();
      visible.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  const live = !!site.live && near && wide && !reduceMotion && scale > 0;
  const running = inView && !reduceMotion && (!site.live || !live || ready);

  // The loop. Each card starts a little after the one before it.
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(
      () => setDown((d) => !d),
      (down ? HOLD_DOWN_MS : HOLD_TOP_MS) + (down ? 0 : index * 500)
    );
    return () => window.clearTimeout(timer);
  }, [running, down, index]);

  // Send the live page where the loop says. A site that glides is simply
  // told to go. One that jumps is covered for a moment while it does.
  useEffect(() => {
    if (!live || !ready || !site.live) return;
    const target = down ? `#${site.live.section}` : "#top";
    if (site.live.glide) {
      setHash(target);
      return;
    }
    setVeil(true);
    const jump = window.setTimeout(() => setHash(target), FADE_MS);
    const lift = window.setTimeout(() => setVeil(false), FADE_MS + 120);
    return () => {
      window.clearTimeout(jump);
      window.clearTimeout(lift);
    };
  }, [down, live, ready, site.live]);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0B0B0C] ring-1 ring-[var(--color-line)] transition-shadow duration-500 group-hover:shadow-[0_24px_60px_rgba(15,15,15,0.16)] group-hover:ring-[var(--color-line-strong)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.image}
        alt=""
        loading="lazy"
        className={`absolute top-0 left-0 block w-full transition-[translate] duration-[1600ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${down && !live ? "-translate-y-1/2" : "translate-y-0"} ${live && ready ? "invisible" : ""}`}
      />
      {live && (
        <iframe
          src={site.href + hash}
          title={`${site.name}, live`}
          tabIndex={-1}
          aria-hidden
          onLoad={() => setReady(true)}
          className={`pointer-events-none absolute top-0 left-0 origin-top-left border-0 transition-opacity ${ready && !veil ? "opacity-100" : "opacity-0"}`}
          style={{ width: VIEW_W, height: VIEW_H, transform: `scale(${scale})`, transitionDuration: `${ready ? FADE_MS : 700}ms` }}
        />
      )}
    </div>
  );
}
