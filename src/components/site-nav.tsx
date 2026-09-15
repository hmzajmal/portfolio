"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMagnetic } from "@/lib/use-magnetic";

type Tab = {
  href: string;
  label: string;
  /** When this section id is crossing the nav line, the tab is active. */
  sectionId: string;
  icon: (props: { className?: string }) => React.ReactElement;
};

const TABS: Tab[] = [
  { href: "/#hero", label: "Home", sectionId: "hero", icon: HomeIcon },
  { href: "/#about", label: "About", sectionId: "about", icon: UserIcon },
  { href: "/#experience", label: "Experience", sectionId: "experience", icon: BriefcaseIcon },
  { href: "/#testimonials", label: "Testimonials", sectionId: "testimonials", icon: QuoteIcon },
];

/**
 * Tracks which `<section id>` is currently crossing the nav line.
 *
 * Polls on requestAnimationFrame rather than listening to scroll because
 * Lenis smooth-scroll does not reliably emit native scroll events mid
 * animation. A handful of getBoundingClientRect calls per frame is cheap.
 */
function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let rafId = 0;
    let last: string | null = null;

    function tick() {
      // The last section whose top has passed the probe line wins. Picking
      // "last above" instead of "contains the probe" means sections without
      // an id (principles, off the clock, reading) inherit the tab above
      // them instead of dropping the lens.
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const probeY = Math.max(160, window.innerHeight * 0.3);
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

/**
 * Floating top nav.
 *
 *   [Avatar] Name   ····   [ dark rail with glass lens ]   ····   Dribbble · Contact
 *
 * The rail is an ink-black pill. A transparent glass lens, taller than the
 * rail so it overhangs top and bottom, travels between tabs. The active
 * tab's icon lights up and its label unfolds inside the lens.
 */
export function SiteNav() {
  const pathname = usePathname() ?? "/";
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy only applies on the home page. Work has no tab of its own
  // and stays under Home.
  const activeId = (() => {
    if (pathname !== "/") return null;
    if (!activeSection || activeSection === "work") return "hero";
    return activeSection;
  })();

  const barStyle: React.CSSProperties = scrolled
    ? {
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.16) 100%)",
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
        boxShadow:
          "inset 0 -1px 0 rgba(15,15,15,0.06), 0 6px 24px rgba(15,15,15,0.04)",
      }
    : {
        background: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,box-shadow] duration-300 ease-out"
      style={barStyle}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 sm:px-6 md:px-10">
        {/* Left: avatar + name */}
        <Link
          href="/"
          aria-label="Hamza Jamal home"
          className="inline-flex h-10 w-fit items-center gap-3 text-[var(--color-ink)] outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
        >
          <span className="relative inline-block h-8 w-8 overflow-hidden rounded-full bg-[var(--color-canvas-warm)] ring-1 ring-[var(--color-line)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hamza-avatar.png"
              alt=""
              width={32}
              height={32}
              className="h-full w-full object-cover"
              style={{ transform: "scale(1.55)", transformOrigin: "50% 30%" }}
            />
          </span>
          <span
            className="hidden text-[15px] tracking-[-0.005em] sm:inline"
            style={{ fontVariationSettings: '"wght" 600, "opsz" 14, "wdth" 100' }}
          >
            Hamza Jamal
          </span>
        </Link>

        {/* Center: dark rail with glass lens */}
        <nav
          aria-label="Primary"
          className="relative flex h-12 items-center rounded-full bg-[var(--color-ink)] px-1.5"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.6), 0 10px 30px rgba(15,15,15,0.22), 0 1px 2px rgba(15,15,15,0.3)",
          }}
        >
          {TABS.map((t) => (
            <RailTab key={t.href} tab={t} active={activeId === t.sectionId} />
          ))}
        </nav>

        {/* Right: Dribbble + Contact */}
        <div className="flex items-center justify-self-end gap-2">
          <a
            href="https://dribbble.com/hmzajmal"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Dribbble"
            title="Dribbble"
            className="group hidden h-10 w-10 items-center justify-center rounded-full border sm:inline-flex border-[var(--color-line-strong)] text-[var(--color-ink)] outline-none transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-canvas)] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
          >
            <span className="block h-4 w-4 transition-transform group-hover:scale-110">
              <DribbbleIcon />
            </span>
          </a>
          <MagneticContactButton />
        </div>
      </div>
    </header>
  );
}

/* ---------- Rail tab ---------- */

function RailTab({ tab, active }: { tab: Tab; active: boolean }) {
  const reduceMotion = useReducedMotion();
  const Icon = tab.icon;

  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 340, damping: 28, mass: 0.9 };

  return (
    <Link
      href={tab.href}
      aria-label={tab.label}
      aria-current={active ? "page" : undefined}
      className={`relative inline-flex h-9 items-center justify-center gap-2 rounded-full px-3 outline-none sm:px-3.5 focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)] ${
        active ? "text-white" : "text-white/45 hover:text-white/75"
      } transition-colors duration-300`}
    >
      {/* Glass lens. The shared layoutId means Framer moves one persistent
          element between tabs. The lens is taller than the rail so it
          overhangs it top and bottom, like a droplet sitting on the pill. */}
      {active && (
        <motion.span
          aria-hidden
          layoutId="nav-lens"
          transition={spring}
          className="pointer-events-none absolute -inset-y-[7px] -inset-x-[3px] rounded-[20px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.28) 11%, rgba(255,255,255,0.04) 24%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.04) 76%, rgba(255,255,255,0.28) 89%, rgba(255,255,255,0.92) 100%)",
            backdropFilter: "blur(1.5px) saturate(160%) brightness(1.12)",
            WebkitBackdropFilter: "blur(1.5px) saturate(160%) brightness(1.12)",
            boxShadow: [
              "inset 0 0 0 1px rgba(255,255,255,0.55)",
              "inset 1.5px 0 0 rgba(255,255,255,0.22)",
              "inset -1.5px 0 0 rgba(255,255,255,0.22)",
              "inset 0 0 14px rgba(255,255,255,0.10)",
              "0 10px 24px rgba(15,15,15,0.28)",
              "0 2px 4px rgba(15,15,15,0.18)",
            ].join(", "),
          }}
        />
      )}

      <span className="relative z-10 inline-flex items-center gap-2">
        <Icon
          className={`h-[18px] w-[18px] shrink-0 transition-[filter] duration-300 ${
            active
              ? "[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.75))_drop-shadow(0_0_1px_rgba(255,255,255,0.9))]"
              : ""
          }`}
        />
        <AnimatePresence initial={false}>
          {active && (
            <motion.span
              key="label"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="hidden overflow-hidden whitespace-nowrap text-[13px] md:inline-block"
              style={{ fontVariationSettings: '"wght" 600, "opsz" 14, "wdth" 100' }}
            >
              {tab.label}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </Link>
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
        className="inline-flex h-10 items-center rounded-full bg-[var(--color-ink)] px-4 text-[13px] sm:px-5 text-[var(--color-canvas)] outline-none transition-colors hover:bg-[var(--color-ink-2)] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
        style={{ fontVariationSettings: '"wght" 500, "opsz" 14, "wdth" 100' }}
      >
        Contact
      </Link>
    </motion.div>
  );
}

/* ---------- Icons (24 grid, 1.7 stroke) ---------- */

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3.5 10.6 12 3.8l8.5 6.8V19a1.5 1.5 0 0 1-1.5 1.5h-4.2v-5.3a1 1 0 0 0-1-1h-3.6a1 1 0 0 0-1 1v5.3H5A1.5 1.5 0 0 1 3.5 19v-8.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.8 20c0-3.5 3.2-5.6 7.2-5.6s7.2 2.1 7.2 5.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M3 12.5h18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 5H4a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 17h3.2l3 3 3-3H20a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 20 5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full" aria-hidden>
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  );
}
