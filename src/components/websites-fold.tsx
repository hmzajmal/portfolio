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
 * Websites. A ticker of windows onto pages I built. Each window also keeps
 * moving on its own, down to the second fold and back to the top, so it
 * reads as a page and not a picture. Clicking a card opens the site.
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
          Feature launches
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg mt-4 max-w-[720px] text-ink-muted"
        >
          High-converting launch pages I designed and built in code. Scroll-driven heroes, motion, and the product shown working.
        </motion.p>

      </div>

      <Ticker />
    </section>
  );
}

/** Sideways drift, in CSS pixels per second. */
const SPEED = 42;
const GAP = 24;

/**
 * The cards drift left in an endless row across the full width of the
 * page. There is one copy of each card, not two: a card that leaves on the
 * left is moved to the right end of the row, so the live pages inside are
 * never duplicated. Card width is set so three cards always overfill the
 * screen by more than one card, which is what makes that wrap invisible.
 * The row pauses under the pointer and under keyboard focus so a card can
 * be opened, and stops while off screen. It can also be moved by hand: a
 * sideways wheel or swipe, or a drag. With reduced motion it is a plain
 * row the reader scrolls sideways.
 */
function Ticker() {
  const track = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLAnchorElement | null)[]>([]);
  const paused = useRef(false);
  const dragged = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = track.current;
    if (!el || reduceMotion) return;
    let offset = 0;
    let last = performance.now();
    let raf = 0;
    let visible = true;
    const seen = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    seen.observe(el);

    const frame = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const first = cards.current[0];
      if (first && visible) {
        const step = first.offsetWidth + GAP;
        const total = step * SITES.length;
        if (!paused.current && !drag) offset += (SPEED * dt) / 1000;
        offset = ((offset % total) + total) % total;
        cards.current.forEach((card, i) => {
          if (!card) return;
          // Range is [-step, total - step): off the left edge, then round to the right.
          const x = ((((i * step - offset) % total) + total + step) % total) - step;
          card.style.transform = `translate3d(${x}px,0,0)`;
        });
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // By hand: a sideways wheel or trackpad swipe moves the row, and so
    // does dragging it. Up-and-down wheel is left alone so the page scrolls.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      offset += e.deltaX;
    };
    let drag: { x: number; moved: number } | null = null;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      drag = { x: e.clientX, moved: 0 };
    };
    const onMove = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      drag.x = e.clientX;
      drag.moved += Math.abs(dx);
      offset -= dx;
      if (drag.moved > 6) el.style.cursor = "grabbing";
    };
    const onUp = () => {
      // A drag must not open the card it started on.
      if (drag && drag.moved > 6) dragged.current = true;
      drag = null;
      el.style.cursor = "";
    };
    const onClick = (e: MouseEvent) => {
      if (dragged.current) {
        e.preventDefault();
        dragged.current = false;
      }
    };
    const onDragStart = (e: DragEvent) => e.preventDefault();
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    el.addEventListener("click", onClick, true);
    el.addEventListener("dragstart", onDragStart);
    return () => {
      cancelAnimationFrame(raf);
      seen.disconnect();
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      el.removeEventListener("click", onClick, true);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, [reduceMotion]);

  const card = (site: Site, i: number) => (
    <a
      key={site.href}
      ref={(node) => {
        cards.current[i] = node;
      }}
      href={site.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${site.name}, opens in a new tab`}
      className={`group block w-[80vw] shrink-0 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-4 md:w-[52vw] ${reduceMotion ? "" : "absolute top-0 left-0 will-change-transform"}`}
    >
      <SiteWindow site={site} index={i} />
    </a>
  );

  if (reduceMotion) {
    return <div className="mt-14 flex gap-6 overflow-x-auto px-6 pb-4 md:px-10">{SITES.map(card)}</div>;
  }

  return (
    <div
      ref={track}
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
      // Height of one card: its width at 16:10.
      className="relative mt-14 h-[50vw] w-full touch-pan-y overflow-hidden select-none md:h-[32.5vw]"
    >
      {SITES.map(card)}
    </div>
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
