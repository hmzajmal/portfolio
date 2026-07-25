"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useGlobalCursor } from "@/lib/use-global-cursor";
import { useMagnetic } from "@/lib/use-magnetic";

type Tab = {
  href: string;
  label: string;
  /** Matches when pathname starts with any of these prefixes. */
  match: string[];
  /** When this section id is the most-visible on the page, tab is active. */
  sectionId?: string;
  external?: boolean;
};

const TABS: Tab[] = [
  { href: "/#work", label: "Work", match: ["/work"], sectionId: "work" },
  { href: "/about", label: "About", match: ["/about"] },
  // Lab tab hidden until the /lab page ships — re-add when ready.
];

/**
 * Tracks which `<section id>` is currently crossing the nav line.
 *
 * Uses a `requestAnimationFrame` polling loop instead of a scroll listener
 * because Lenis smooth-scroll doesn't reliably emit native scroll events
 * during its animation. Polling every frame is cheap (a handful of
 * getBoundingClientRect calls) and decouples us from any event timing.
 */
function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = 0;
    let last: string | null = null;

    function tick() {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const probeY = 140;
      let current: string | null = null;
      for (const s of Array.from(sections)) {
        const rect = s.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          current = s.id;
          break;
        }
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
 * - 3-column grid for true visual balance (logo, centered tabs, right cluster).
 * - Active tab is derived from the current pathname.
 * - Tabs collapse to icon-only at small widths so they don't overflow.
 * - All interactive elements have focus-visible styles.
 */
export function SiteNav() {
  const pathname = usePathname() ?? "/";
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (tab: Tab) => {
    // Pathname match wins (e.g. /about, /work/[slug]).
    const pathMatch = tab.match.some(
      (m) => m !== "/" && pathname.startsWith(m.replace(/^\/#/, "/"))
    );
    if (pathMatch) return true;

    // On the home page, scroll-spy decides.
    if (pathname === "/" && tab.sectionId) {
      return activeSection === tab.sectionId;
    }

    return false;
  };

  const glassStyle: React.CSSProperties = scrolled
    ? {
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.18) 100%)",
        backdropFilter: "blur(48px) saturate(200%) brightness(1.06)",
        WebkitBackdropFilter: "blur(48px) saturate(200%) brightness(1.06)",
        boxShadow: [
          "inset 0 1px 0 rgba(255,255,255,0.85)",
          "inset 0 0 0 1px rgba(255,255,255,0.35)",
          "inset 0 -1px 0 rgba(15,15,15,0.09)",
          "0 6px 24px rgba(15,15,15,0.04)",
        ].join(", "),
      }
    : {
        background: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "inset 0 -1px 0 rgba(15,15,15,0.06)",
      };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,box-shadow] duration-300 ease-out"
      style={glassStyle}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center gap-4 px-6 py-3 md:px-10">
        {/* Left cluster — avatar + name */}
        <Link
          href="/"
          aria-label="Hamza Jamal home"
          className="inline-flex h-10 items-center gap-3 pr-1 text-[var(--color-ink)] outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
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
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </span>
          <span
            className="text-[15px] tracking-[-0.005em]"
            style={{ fontVariationSettings: '"wght" 600, "opsz" 14, "wdth" 100' }}
          >
            Hamza Jamal
          </span>
        </Link>

        {/* Right cluster — tabs, dribbble, contact */}
        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <nav
            aria-label="Primary"
            className="flex items-center gap-1 md:gap-2"
          >
            {TABS.map((t) => (
              <TabLink
                key={t.href}
                href={t.href}
                active={isActive(t)}
                label={t.label}
                external={t.external}
              />
            ))}
          </nav>
          <IconLink href="https://dribbble.com/hmzajmal" label="Dribbble">
            <DribbbleIcon />
          </IconLink>
          {/* ThemeToggle hidden until dark mode is fully polished — re-import from @/components/theme when bringing back */}
          <MagneticContactButton />
        </div>
      </div>

    </header>
  );
}

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
        className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 text-[13px] text-[var(--color-canvas)] transition-colors outline-none hover:bg-[var(--color-ink-2)] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
        style={{ fontVariationSettings: '"wght" 500, "opsz" 14, "wdth" 100' }}
      >
        <span className="hidden sm:inline">Contact</span>
      </Link>
    </motion.div>
  );
}

/* ---------- Ruler ---------- */

function NavRuler() {
  const ticks = Array.from({ length: 42 }, (_, i) => (i - 7) * 100);
  const minors = [0.25, 0.5, 0.75];

  const [scrolled, setScrolled] = useState(false);
  const [vw, setVw] = useState(0);
  const cursor = useGlobalCursor();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const measure = () => setVw(window.innerWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const center = vw / 2;
  const panX = cursor.active ? -(cursor.x - center) * 0.35 : 0;

  const visible = cursor.active && !scrolled;

  return (
    <motion.div
      animate={{ height: visible ? "auto" : 0, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
      aria-hidden
    >
      <div className="pointer-events-none select-none border-y border-[rgba(0,0,0,0.08)]">
        <motion.div
          ref={containerRef}
          className="relative flex h-7 will-change-transform"
          animate={{ x: panX }}
          transition={{ type: "spring", stiffness: 90, damping: 22, mass: 0.6 }}
        >
          {ticks.map((t) => (
            <div key={t} className="relative w-[80px] flex-shrink-0">
              <span className="absolute left-0 top-0 h-[55%] w-px bg-[rgba(0,0,0,0.28)]" />
              {minors.map((p) => (
                <span
                  key={p}
                  className="absolute top-0 h-[28%] w-px bg-[rgba(0,0,0,0.16)]"
                  style={{ left: `${p * 100}%` }}
                />
              ))}
              <span className="absolute bottom-[1px] left-1.5 text-[9px] tabular-nums text-[rgba(0,0,0,0.55)]">
                {t}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---------- Pieces ---------- */

function TabLink({
  href,
  active,
  label,
  external,
}: {
  href: string;
  active: boolean;
  label: string;
  external?: boolean;
}) {
  const className = `relative inline-flex h-10 items-center justify-center px-4 text-[14px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2 ${
    active
      ? "text-[var(--color-ink)]"
      : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
  }`;

  const content = (
    <>
      <span>{label}</span>
      {active && (
        <span
          aria-hidden
          className="absolute bottom-1.5 left-4 right-4 h-[1.5px] rounded-full bg-[var(--color-ink)]"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={label}
        className={className}
        style={{ fontVariationSettings: '"wght" 500, "opsz" 14, "wdth" 100' }}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={className}
      style={{ fontVariationSettings: '"wght" 500, "opsz" 14, "wdth" 100' }}
    >
      {content}
    </Link>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      title={label}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-canvas)] text-[var(--color-ink)] outline-none transition-colors hover:bg-[var(--color-canvas-warm)] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
    >
      <span className="block h-4 w-4 transition-transform group-hover:scale-110">
        {children}
      </span>
    </a>
  );
}

/* ---------- Icons ---------- */

function RainbowMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
      <path d="M4 24 Q 16 8, 28 24" stroke="#0F0F0F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M8 24 Q 16 12, 24 24" stroke="#5ECCDD" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M12 24 Q 16 18, 20 24" stroke="#0F0F0F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M2.25 12 12 2.25 21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h4.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
    </svg>
  );
}

function PaintIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" fill="currentColor" className={className}>
      <path d="M7 12 C 3 9, 1 6.5, 1 4.5 A 2.5 2.5 0 0 1 7 3 A 2.5 2.5 0 0 1 13 4.5 C 13 6.5, 11 9, 7 12 Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
