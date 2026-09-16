"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMagnetic } from "@/lib/use-magnetic";

/* ------------------------------------------------------------------ */
/*  Vuesax (Iconsax) glyphs. 24-grid source, drawn at 16px.            */
/*  Linear = idle, Bold = active.                                      */
/* ------------------------------------------------------------------ */

type Glyph = { linear: string[]; bold: string[] };

const GLYPHS: Record<string, Glyph> = {
  category: {
    linear: [
      "M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z",
    ],
    bold: [
      "M7.24 2h-1.9C3.15 2 2 3.15 2 5.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C10.57 3.15 9.42 2 7.24 2ZM18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2ZM18.67 13.43h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33ZM7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34Z",
    ],
  },
  user: {
    linear: [
      "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7",
    ],
    bold: [
      "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5Z",
    ],
  },
  briefcase: {
    linear: [
      "M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
      "M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76",
    ],
    bold: [
      "M21.091 6.98c-.85-.94-2.27-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.09-3.76 3.76v.05h-.24c-2.07 0-3.48.47-4.33 1.41-.99 1.1-.96 2.58-.86 3.59l.01.07.077.813c.015.15.095.285.221.367.24.157.641.416.882.55.14.09.29.17.44.25 1.71.94 3.59 1.57 5.5 1.88.09.94.5 2.04 2.69 2.04s2.62-1.09 2.69-2.06c2.04-.33 4.01-1.04 5.79-2.08.06-.03.1-.06.15-.09.397-.225.808-.501 1.183-.772a.493.493 0 0 0 .201-.346l.016-.143.05-.47c.01-.06.01-.11.02-.18.08-1.01.06-2.39-.88-3.43Zm-8 6.85c0 1.06 0 1.22-1.23 1.22s-1.23-.19-1.23-1.21v-1.26h2.46v1.25Zm-4.18-8.26v-.04c0-1.7 0-2.33 2.33-2.33h1.52c2.33 0 2.33.64 2.33 2.33v.05h-6.18v-.01Z",
      "M20.873 13.735a.509.509 0 0 1 .726.502l-.36 3.954c-.21 2-1.03 4.04-5.43 4.04H8.19c-4.4 0-5.22-2.04-5.43-4.03l-.34-3.748a.508.508 0 0 1 .716-.506c1.14.516 3.242 1.43 4.541 1.77a.57.57 0 0 1 .37.315c.607 1.298 1.923 1.989 3.824 1.989 1.882 0 3.215-.718 3.824-2.019a.571.571 0 0 1 .37-.315c1.379-.363 3.618-1.385 4.81-1.952Z",
    ],
  },
  message: {
    linear: [
      "M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z",
      "M15.996 11h.01M11.995 11h.01M7.995 11h.008",
    ],
    bold: [
      "M17 2H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V6.98C22 4.23 19.76 2 17 2ZM8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Z",
    ],
  },
};

const ARROW_LEFT_LINEAR = "M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67";
const ARROW_UP_LINEAR = "M5.93 14.43 12 8.36l6.07 6.07M12 20.5V8.5";

function VuesaxIcon({
  glyph,
  bold,
  size = 16,
  className,
}: {
  glyph: Glyph;
  bold: boolean;
  size?: number;
  className?: string;
}) {
  const paths = bold ? glyph.bold : glyph.linear;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden
    >
      {paths.map((d, i) =>
        bold ? (
          <path key={i} d={d} fill="currentColor" />
        ) : (
          <path
            key={i}
            d={d}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
        )
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Tabs                                                               */
/* ------------------------------------------------------------------ */

type Tab = {
  href: string;
  label: string;
  /** Section id that lights this tab. */
  sectionId: string;
  /** Vuesax glyph. Omitted for text-only case study tabs. */
  glyph?: Glyph;
};

/** A case study's own table of contents, shown in place of the home tabs. */
export type NavSection = { id: string; label: string };

const TABS: Tab[] = [
  { href: "/#work", label: "Projects", sectionId: "work", glyph: GLYPHS.category },
  { href: "/#about", label: "About", sectionId: "about", glyph: GLYPHS.user },
  { href: "/#experience", label: "Experience", sectionId: "experience", glyph: GLYPHS.briefcase },
  { href: "/#testimonials", label: "Reviews", sectionId: "testimonials", glyph: GLYPHS.message },
];

/**
 * Tracks which `<section id>` has most recently crossed the nav line.
 *
 * Polls on requestAnimationFrame because Lenis smooth-scroll does not
 * reliably emit native scroll events mid animation. Lenis lands an
 * anchored section at 176px (80px offset + 96px scroll-margin-top), so
 * the probe sits just below that. The LAST section whose top has crossed
 * the probe wins, so blocks without an id inherit the tab above them.
 */
function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let rafId = 0;
    let last: string | null = null;

    function tick() {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const probeY = 200;
      let current: string | null = null;
      for (const s of Array.from(sections)) {
        if (s.getBoundingClientRect().top <= probeY) current = s.id;
      }
      if (current !== last) {
        last = current;
        setActive(current);
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return active;
}

/* ------------------------------------------------------------------ */
/*  Nav                                                                */
/* ------------------------------------------------------------------ */

/**
 * Floating pill nav.
 *
 *   Home:        [Avatar] Hamza J.   ···   tabs   ···   Dribbble · Contact
 *   Case study:  [← Back]            ···   tabs   ···   Dribbble · Contact
 *
 * Tabs use Vuesax glyphs: Linear when idle, Bold when active. The active
 * tab sits in a soft 88px pill that travels between tabs.
 */
export function SiteNav({ sections }: { sections?: NavSection[] } = {}) {
  const pathname = usePathname() ?? "/";
  const isCaseStudy = pathname.startsWith("/work");
  const spySection = useActiveSection();

  // On a case study that provides its own sections, the tabs become that
  // study's table of contents: text only, no glyphs.
  const tabs: Tab[] = sections
    ? sections.map((sec) => ({ href: `#${sec.id}`, label: sec.label, sectionId: sec.id }))
    : TABS;

  // A clicked tab lights up immediately and holds until the smooth scroll
  // delivers its section to the probe line.
  const [pending, setPending] = useState<string | null>(null);
  useEffect(() => {
    if (!pending) return;
    if (spySection === pending) {
      setPending(null);
      return;
    }
    const t = setTimeout(() => setPending(null), 1600);
    return () => clearTimeout(t);
  }, [pending, spySection]);

  // The hero has no tab, so landing there lights nothing.
  const spy = spySection === "hero" ? null : spySection;
  const activeId = sections ? pending ?? spy : isCaseStudy ? null : pending ?? spy;

  // The bar is naked while the page sits at the top and picks up its white
  // pill once the content starts moving underneath it.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let rafId = 0;
    let last = false;
    function tick() {
      const next = window.scrollY > 12;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const reduceMotion = useReducedMotion();
  const barSpring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 320, damping: 34, mass: 0.9 };

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="mx-auto flex w-full max-w-[1280px] justify-center px-6 md:px-10">
        {/* While scrolling the side clusters fold away and the bar shrinks
            to just the tabs, so the reader has fewer things to look at. */}
        <motion.div
          layout
          transition={barSpring}
          // Collapsed, the bar is only as tall as the 32px tabs plus 8px
          // padding, so the side padding drops to 8px to stay symmetrical.
          className={`flex items-center justify-between rounded-full py-2 transition-[background,box-shadow,backdrop-filter] duration-300 ease-out ${ scrolled ? "w-auto gap-2 px-2" : "w-full gap-3 px-3" }`}
          style={
            scrolled
              ? {
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.48) 100%)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 0 0 1px rgba(15,15,15,0.06), 0 10px 22px rgba(15,15,15,0.06), 0 1px 2px rgba(15,15,15,0.04)",
                }
              : {
                  background: "transparent",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                  boxShadow: "none",
                }
          }
        >
          {/* Back stays put while reading a case study. Only the identity
              cluster folds away on scroll. */}
          {isCaseStudy ? (
            <motion.div layout transition={barSpring} className="flex shrink-0 items-center gap-2">
              <BackPill />
              <span aria-hidden className="h-4 w-px bg-[var(--color-line-strong)]" />
            </motion.div>
          ) : (
            <>
              <Cluster collapsed={scrolled}>
                <Identity onSelect={() => setPending(null)} />
              </Cluster>
              {/* Once the page is moving, the identity gives way to a
                  back-to-top arrow, mirroring the Back arrow on case studies. */}
              <Cluster collapsed={!scrolled}>
                <div className="flex items-center gap-2">
                  <ToTop onSelect={() => setPending(null)} />
                  <span aria-hidden className="h-4 w-px bg-[var(--color-line-strong)]" />
                </div>
              </Cluster>
            </>
          )}

          {/* Tabs */}
          <motion.nav layout transition={barSpring} aria-label="Primary" className="flex items-center gap-1">
            {tabs.map((t) => (
              <TabLink
                key={t.href}
                tab={t}
                active={activeId === t.sectionId}
                onSelect={() => setPending(t.sectionId)}
              />
            ))}
          </motion.nav>

          <Cluster collapsed={scrolled}>
            <div className="flex items-center gap-2">
              <a
                href="https://dribbble.com/hmzajmal"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Dribbble"
                title="Dribbble"
                className="group hidden h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,0,0,0.18)] bg-white text-ink outline-none transition-colors hover:bg-[var(--color-canvas-warm)] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2 sm:inline-flex"
              >
                <span className="block h-4 w-4 transition-transform group-hover:scale-110">
                  <DribbbleIcon />
                </span>
              </a>
              <MagneticContactButton />
            </div>
          </Cluster>
        </motion.div>
      </div>
    </header>
  );
}

/**
 * Side cluster. Stays mounted and collapses to zero width, so the bar,
 * the tabs and the cluster all move in ONE layout pass instead of a
 * mount animation fighting the bar's own resize. That single pass is
 * what keeps the return to the top smooth.
 */
function Cluster({ collapsed, children }: { collapsed: boolean; children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      layout
      aria-hidden={collapsed || undefined}
      animate={{ opacity: collapsed ? 0 : 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { layout: { type: "spring", stiffness: 320, damping: 34, mass: 0.9 }, opacity: { duration: 0.2 } }
      }
      className={`flex shrink-0 items-center overflow-hidden ${collapsed ? "pointer-events-none" : ""}`}
      // Height collapses too, otherwise the 40px buttons inside keep the
      // bar tall and the 32px tabs float with uneven padding.
      style={{ width: collapsed ? 0 : "auto", height: collapsed ? 0 : "auto" }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Left cluster ---------- */

function Identity({ onSelect }: { onSelect: () => void }) {
  return (
    // "/#hero" rather than "/" so SmoothScroll intercepts the click and
    // glides back to the top instead of Next treating it as a no-op
    // navigation to the current route.
    <Link
      href="/#hero"
      aria-label="Hamza Jamal home"
      className="inline-flex h-10 items-center gap-2 pr-1 text-ink outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
      onPointerDown={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSelect();
      }}
    >
      <span className="relative inline-block h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[var(--color-canvas-warm)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hamza-avatar.png"
          alt=""
          width={40}
          height={40}
          className="h-full w-full object-cover"
          style={{ transform: "scale(1.24)", transformOrigin: "50% 30%" }}
        />
      </span>
      <span
        className="hidden label leading-5 tracking-[0.02em] sm:inline"
      >
        Hamza J.
      </span>
    </Link>
  );
}

function ToTop({ onSelect }: { onSelect: () => void }) {
  return (
    <Link
      href="/#hero"
      aria-label="Back to top"
      title="Back to top"
      className="group inline-flex h-8 w-8 items-center justify-center rounded-full text-ink outline-none transition-colors hover:bg-black/[0.04] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
      onPointerDown={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSelect();
      }}
    >
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" className="transition-transform group-hover:-translate-y-0.5" aria-hidden>
        <path d={ARROW_UP_LINEAR} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
      </svg>
    </Link>
  );
}

function BackPill() {
  return (
    <Link
      href="/#work"
      aria-label="Back to projects"
      title="Back to projects"
      className="group inline-flex h-8 w-8 items-center justify-center rounded-full text-ink outline-none transition-colors hover:bg-black/[0.04] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
    >
      <svg
        viewBox="0 0 24 24"
        width={18}
        height={18}
        fill="none"
        className="transition-transform group-hover:-translate-x-0.5"
        aria-hidden
      >
        <path
          d={ARROW_LEFT_LINEAR}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </svg>
    </Link>
  );
}

/* ---------- Tab ---------- */

function TabLink({
  tab,
  active,
  onSelect,
}: {
  tab: Tab;
  active: boolean;
  onSelect: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.8 };

  return (
    <motion.div layout transition={spring} className="relative">
      <Link
        href={tab.href}
        aria-label={tab.label}
        aria-current={active ? "page" : undefined}
        className={`relative inline-flex h-8 items-center justify-center gap-1.5 rounded-full px-2.5 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2 md:px-3 ${ active ? "text-ink md:min-w-[88px]" : "text-ink-muted hover:text-ink" }`}
        // SmoothScroll intercepts anchor clicks in the capture phase and
        // stops propagation, so React never receives onClick. Pointer-down
        // and Enter fire before that.
        onPointerDown={onSelect}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSelect();
        }}
      >
        {active && (
          <motion.span
            aria-hidden
            layoutId="nav-active-pill"
            transition={spring}
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{ boxShadow: "inset 0 0 34px rgba(0,0,0,0.08)" }}
          />
        )}

        <span className="relative z-10 inline-flex items-center gap-1.5">
          {tab.glyph && <VuesaxIcon glyph={tab.glyph} bold={active} className="shrink-0" />}
          <span
            className={`whitespace-nowrap body-sm leading-4 tracking-[0.02em] transition-[font-variation-settings] duration-200 ${ tab.glyph ? "hidden md:inline" : "inline" } ${active ? "wt-regular" : "wt-light"}`}
            >
            {tab.label}
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

/* ---------- Contact ---------- */

function MagneticContactButton() {
  const m = useMagnetic(0.3);
  return (
    <motion.div
      ref={m.ref as React.RefObject<HTMLDivElement>}
      onMouseMove={m.onMouseMove}
      onMouseLeave={m.onMouseLeave}
      style={{ x: m.x, y: m.y }}
    >
      <Link
        href="https://www.linkedin.com/in/hamzajamal-design/"
        target="_blank"
        rel="noreferrer noopener"
        data-cursor="hover"
        className="inline-flex h-10 items-center rounded-full bg-[var(--color-ink)] px-4 label-sm leading-[19.5px] text-ink-inverse outline-none transition-colors hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2 sm:px-5"
      >
        Contact
      </Link>
    </motion.div>
  );
}

/* ---------- Dribbble ---------- */

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-full w-full" aria-hidden>
      <path d="M8 16C3.59 16 0 12.41 0 8C0 3.59 3.59 0 8 0C12.41 0 16 3.59 16 8C16 12.41 12.41 16 8 16ZM14.7467 9.09467C14.5133 9.02133 12.6333 8.45933 10.4907 8.80267C11.384 11.2587 11.7487 13.2587 11.8187 13.6747C13.352 12.638 14.4427 10.9947 14.7487 9.09467H14.7467ZM10.67 14.3C10.568 13.7 10.17 11.612 9.21 9.12L9.166 9.13333C5.306 10.4767 3.926 13.15 3.806 13.4C4.95933 14.3053 6.41933 14.844 7.99933 14.844C8.946 14.844 9.846 14.6507 10.666 14.3013L10.67 14.3ZM2.92333 12.58C3.078 12.3133 4.95333 9.21 8.478 8.07C8.568 8.04 8.658 8.014 8.748 7.99C8.57467 7.6 8.388 7.212 8.19333 6.83C4.78 7.85 1.47067 7.80667 1.17067 7.8L1.168 8.008C1.168 9.76333 1.83333 11.366 2.924 12.578L2.92333 12.58ZM1.31 6.61C1.61667 6.61533 4.432 6.62733 7.628 5.778C6.496 3.766 5.27467 2.07267 5.09467 1.826C3.18267 2.726 1.75467 4.486 1.31067 6.606L1.31 6.61ZM6.4 1.368C6.588 1.62133 7.83 3.31067 8.948 5.368C11.378 4.458 12.408 3.07467 12.53 2.9C11.3233 1.82667 9.73667 1.176 8 1.176C7.45 1.176 6.91333 1.24267 6.4 1.366V1.368ZM13.29 3.69C13.1447 3.88333 12 5.352 9.474 6.38333C9.634 6.71 9.78733 7.04 9.92733 7.374C9.98067 7.494 10.0273 7.614 10.074 7.72733C12.3473 7.44067 14.6073 7.90067 14.834 7.94733C14.8207 6.334 14.2473 4.854 13.294 3.694L13.29 3.69Z" />
    </svg>
  );
}
