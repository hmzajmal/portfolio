"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { SectionGrid } from "@/components/ui/section-grid";

/**
 * "About me" section on the home page. Two-column layout — portrait on
 * the left, headline + bio + a 2×2 stat grid on the right. Tool list
 * sits below the whole block, edge to edge.
 *
 * Tool logos: drop SVG/PNG files at /public/assets/tools/{slug}.svg to
 * light them up. When a file is missing the tool renders as a monogram
 * badge fallback so nothing breaks.
 */

type Stat = {
  icon: React.ReactNode;
  label: string;
  detail: string;
};

type Tool = {
  name: string;
  logo?: string;
};

const STATS: Stat[] = [
  {
    icon: <BriefcaseIcon />,
    label: "5+ years",
    detail: "of product design experience",
  },
  {
    icon: <SparkIcon />,
    label: "AI-native mindset",
    detail: "building the next generation of intelligent products",
  },
  {
    icon: <UserIcon />,
    label: "End-to-end ownership",
    detail: "from discovery to delivery",
  },
  {
    icon: <PulseIcon />,
    label: "User-centered",
    detail: "empathy-led design approach",
  },
];

// Logos are pulled from Simple Icons' CDN — full-color brand marks,
// zero setup, no local files required.
const TOOLS: Tool[] = [
  { name: "Claude", logo: "https://cdn.simpleicons.org/claude" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Jira", logo: "https://cdn.simpleicons.org/jira" },
  { name: "Mixpanel", logo: "https://cdn.simpleicons.org/mixpanel" },
  { name: "Hotjar", logo: "https://cdn.simpleicons.org/hotjar" },
  { name: "Framer", logo: "https://cdn.simpleicons.org/framer" },
  { name: "Adobe Suite", logo: "https://cdn.simpleicons.org/adobe" },
];

export function AboutMe() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32">
      <SectionGrid />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-square w-full overflow-hidden rounded-3xl bg-[var(--color-canvas-warm)] lg:aspect-auto lg:h-full"
          >
            <img
              src="/assets/about-me.jpeg"
              alt="Hamza Jamal"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow"
            >
              About me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h1 mt-4 text-[var(--color-ink)]"
            >
              I design with clarity, empathy{" "}
              <span className="text-[var(--color-ink-quiet)]">&amp; purpose.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="body-lg mt-6 max-w-[540px] text-[var(--color-ink-muted)]"
            >
              Design, to me, is problem-solving with empathy. I believe the best
              products are the ones that make complex things feel effortless
              for real people.
            </motion.p>

            {/* 2x2 stat grid */}
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-[var(--color-line)] pt-10 sm:grid-cols-2">
              {STATS.map((s, i) => (
                <StatCell key={s.label} stat={s} delay={0.3 + i * 0.05} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools I use */}
        <div className="mt-20 border-t border-[var(--color-line)] pt-10">
          <p className="eyebrow">Tools I use</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
            {TOOLS.map((t) => (
              <ToolItem key={t.name} tool={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCell({ stat, delay }: { stat: Stat; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-4"
    >
      <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center text-[var(--color-ink)]">
        {stat.icon}
      </span>
      <div className="min-w-0">
        <p
          className="text-[16px] text-[var(--color-ink)]"
          style={{ fontVariationSettings: '"wght" 600, "opsz" 16, "wdth" 100', letterSpacing: "-0.005em" }}
        >
          {stat.label}
        </p>
        <p className="body-sm mt-1 text-[var(--color-ink-muted)]">
          {stat.detail}
        </p>
      </div>
    </motion.div>
  );
}

function ToolItem({ tool }: { tool: Tool }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-md"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.42) 100%)",
          backdropFilter: "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
          boxShadow: [
            "inset 0 1px 0 rgba(255,255,255,0.85)",
            "inset 0 -1px 0 rgba(255,255,255,0.25)",
            "inset 0 0 0 1px rgba(15,15,15,0.06)",
          ].join(", "),
        }}
      >
        {tool.logo ? (
          <img
            src={tool.logo}
            alt=""
            className="h-4 w-4 object-contain"
            onError={(e) => {
              // fall back to monogram when the file is missing
              e.currentTarget.style.display = "none";
              const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
              if (sibling) sibling.style.display = "inline";
            }}
          />
        ) : null}
        <span
          className="text-[13px] text-[var(--color-ink)]"
          style={{
            display: tool.logo ? "none" : "inline",
            fontVariationSettings: '"wght" 600, "opsz" 14, "wdth" 100',
          }}
        >
          {tool.name.charAt(0)}
        </span>
      </span>
      <span
        className="text-[14px] text-[var(--color-ink)]"
        style={{ fontVariationSettings: '"wght" 500, "opsz" 14, "wdth" 100' }}
      >
        {tool.name}
      </span>
    </div>
  );
}

/* ── Icons (Heroicons outline paths) ── */

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M20.25 14.15v4.075A2.25 2.25 0 0 1 18 20.475h-12A2.25 2.25 0 0 1 3.75 18.225v-4.07m16.5 0a2.25 2.25 0 0 0 .659-1.591V9.375a2.25 2.25 0 0 0-2.25-2.25H5.25a2.25 2.25 0 0 0-2.25 2.25v3.19c0 .621.24 1.186.659 1.607M16.5 7.125v-1.5a2.25 2.25 0 0 0-2.25-2.25h-4.5a2.25 2.25 0 0 0-2.25 2.25v1.5m12 5.375h-.008v.008h.008v-.008Z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}
