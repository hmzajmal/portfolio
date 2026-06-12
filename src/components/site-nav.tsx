"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useGlobalCursor } from "@/lib/use-global-cursor";

type Tab = {
  href: string;
  label: string;
  icon: React.ReactNode;
  /** Matches when pathname starts with any of these prefixes. */
  match: string[];
};

const TABS: Tab[] = [
  { href: "/", label: "Home", icon: <HomeIcon />, match: ["/"] },
  { href: "/#about", label: "About", icon: <SparkIcon />, match: ["/#about"] },
  { href: "/#work", label: "Case Study", icon: <TicketIcon />, match: ["/work"] },
  {
    href: "/#playground",
    label: "Playground",
    icon: <PaintIcon />,
    match: ["/playground"],
  },
];

/**
 * Floating top nav.
 * - 3-column grid for true visual balance (logo, centered tabs, right cluster).
 * - Active tab is derived from the current pathname.
 * - Tabs collapse to icon-only at small widths so they don't overflow.
 * - All interactive elements have focus-visible styles.
 */
export function SiteNav() {
  const pathname = usePathname() ?? "/";

  const isActive = (tab: Tab) => {
    if (tab.href === "/" && pathname === "/") return true;
    return tab.match.some(
      (m) => m !== "/" && pathname.startsWith(m.replace(/^\/#/, "/"))
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md">
      <div className="flex w-full items-center gap-3 px-4 py-3 md:gap-4 md:px-6">
        {/* Logo + tabs, grouped on the left */}
        <Link
          href="/"
          aria-label="Hamza Jamal home"
          className="inline-flex h-10 items-center px-1 text-[18px] tracking-[0.04em] text-[#0F0F0F] outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
          style={{ fontWeight: 800 }}
        >
          HJ
        </Link>

        <span aria-hidden className="h-6 w-px bg-[rgba(0,0,0,0.18)]" />

        <nav
          aria-label="Primary"
          className="flex items-center gap-1 md:gap-2"
        >
          {TABS.map((t) => (
            <TabLink
              key={t.href}
              href={t.href}
              icon={t.icon}
              active={isActive(t)}
              label={t.label}
            />
          ))}
        </nav>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-2">
          <IconLink
            href="https://www.linkedin.com/in/hamzajamal-design/"
            label="LinkedIn"
          >
            <LinkedInIcon />
          </IconLink>
          <IconLink href="https://dribbble.com/hmzajmal" label="Dribbble">
            <DribbbleIcon />
          </IconLink>
          <Link
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-none border-[2px] border-[#0F0F0F] bg-white px-4 text-[13px] tracking-[0.14em] text-[#0F0F0F] uppercase transition-colors outline-none hover:bg-[#FAFAFA] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
            style={{ fontWeight: 700 }}
          >
            <span className="hidden sm:inline">Contact</span>
          </Link>
        </div>
      </div>

      <NavRuler />
    </header>
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
  icon,
  active,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={`inline-flex h-10 items-center gap-2 text-[13px] tracking-[0.14em] uppercase outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2 ${
        active
          ? "rounded-none border-[2px] border-[#0F0F0F] bg-[#5ECCDD] px-3 text-[#0F0F0F]"
          : "px-3 text-[#0F0F0F] hover:opacity-70"
      }`}
      style={{ fontWeight: 700 }}
    >
      <span className="h-4 w-4">{icon}</span>
      <span className="hidden md:inline">{label}</span>
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
      className="group inline-flex h-10 w-10 items-center justify-center rounded-none border border-[rgba(0,0,0,0.12)] bg-white text-[#0F0F0F] outline-none transition-colors hover:bg-[#FAFAFA] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
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
    <svg viewBox="0 0 14 14" fill="none" className="h-full w-full">
      <path
        d="M2 7 L7 2 L12 7 V12 H8.5 V9 H5.5 V12 H2 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="h-full w-full">
      <path d="M7 1 L8.2 5.8 L13 7 L8.2 8.2 L7 13 L5.8 8.2 L1 7 L5.8 5.8 Z" fill="currentColor" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="h-full w-full">
      <path
        d="M1 5 V4 H13 V5 A1.5 1.5 0 0 0 13 8 V10 H1 V8 A1.5 1.5 0 0 0 1 5 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5 6 V9 M9 6 V9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="1 1.5"
      />
    </svg>
  );
}

function PaintIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="h-full w-full">
      <path
        d="M9 2 L12 5 L6 11 L3 12 L4 9 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M8 3 L11 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
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
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm7.86 5.54a10.34 10.34 0 0 1 2.39 6.46 22.4 22.4 0 0 0-6.7-.5 36.8 36.8 0 0 0-.62-1.61 12.85 12.85 0 0 0 4.93-4.35zM12 1.75a10.2 10.2 0 0 1 6.43 2.28 10.92 10.92 0 0 1-4.65 3.95A47.3 47.3 0 0 0 8.85 2.4 10.36 10.36 0 0 1 12 1.75zm-5.18 1.5a59.46 59.46 0 0 1 4.95 5.45 33.5 33.5 0 0 1-9.4 1.24 10.32 10.32 0 0 1 4.45-6.69zM1.74 12.06v-.3a35.94 35.94 0 0 0 10.55-1.56 21.5 21.5 0 0 1 .82 1.92 12.86 12.86 0 0 0-7.4 5.43 10.24 10.24 0 0 1-3.97-5.49zM12 22.27a10.2 10.2 0 0 1-6.32-2.17 11.16 11.16 0 0 1 6.59-4.94 49.06 49.06 0 0 1 2.32 7.62 10.18 10.18 0 0 1-2.59.49zm4.3-1.16a51.51 51.51 0 0 0-2.18-7.18 19.06 19.06 0 0 1 6.16.4 10.3 10.3 0 0 1-3.97 6.78z" />
    </svg>
  );
}
