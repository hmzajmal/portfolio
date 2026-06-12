"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  index: string;
  slug: string;
  title: string;
  date: string;
  subtitle: string;
  image: string;
  color: string; // brand colour for this card
};

const PROJECTS: Project[] = [
  {
    index: "01",
    slug: "streak",
    title: "Imagine.art Streak",
    date: "APR 13, 2026",
    subtitle:
      "Earning the discount, not waiting for it. A 4-day loop that turns free users into paid ones.",
    image: "/work/streak/after.png",
    color: "#5ECCDD",
  },
  {
    index: "02",
    slug: "e-commerce-odetobeauty",
    title: "Ode to Beauty",
    date: "AUG 2, 2024",
    subtitle:
      "A skincare marketplace becomes a real brand. Task completion lifts from 27% to 100%.",
    image: "https://framerusercontent.com/images/eGR4KuR0q88MHZ7lUo57VN0f40.png",
    color: "#FF4D8B",
  },
  {
    index: "03",
    slug: "walters-hospitality",
    title: "Walter's Hospitality",
    date: "JUN 19, 2023",
    subtitle:
      "Twelve months designing a CRM that turned spreadsheets and email chains into one vendor system.",
    image: "https://framerusercontent.com/images/YB0WaAIttTvz40J4JU1UvyNL4SI.jpeg",
    color: "#F7C948",
  },
  {
    index: "04",
    slug: "E-learning-management",
    title: "Advance Learning",
    date: "JAN 12, 2023",
    subtitle:
      "An online-school redesign for the Saudi Embassy. Approved on first review after fixing the signup drop-off.",
    image: "https://framerusercontent.com/images/w2gJrmcYaQyhjQT4TqiVQVD2UI.gif",
    color: "#2EBD6B",
  },
];

/* hex → rgba helper */
function rgba(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Featured works. Liquid-glass project cards that stack as you scroll.
 *
 * Each card is `position: sticky` with a small top offset per index, so as
 * you scroll the previous card stays pinned and the next one slides over
 * it. The cards are translucent with a subtle brand-colour tint and a
 * backdrop blur, so the grid and the colour blooms behind them show
 * through.
 */
export function FeaturedWorksFold() {
  return (
    <section
      id="work"
      className="relative isolate w-full pb-32 pt-24"
      style={{ background: "transparent" }}
    >
      {/* Clipped backdrop: blooms + grid live in their own overflow-hidden
          container so they can't push horizontal scroll, while the cards
          stay in normal flow where `position: sticky` still works. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <ColourBlooms />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:64px_64px]"
        />
      </div>

      {/* Heading */}
      <div className="relative mx-auto max-w-[1280px] px-6 text-center md:px-10">
        <motion.span
          initial={{ opacity: 0, rotate: -3, y: -6 }}
          whileInView={{ opacity: 1, rotate: -3, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block text-[24px] text-[#0F0F0F] md:text-[28px]"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          explore my work!
          <svg
            width="120"
            height="14"
            viewBox="0 0 120 14"
            className="absolute -bottom-3 left-1/2 -translate-x-1/2"
            fill="none"
          >
            <path
              d="M2 8 Q 30 2, 60 8 T 118 8"
              stroke="#0F0F0F"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 leading-[0.95] text-[#0F0F0F]"
          style={{
            fontSize: "clamp(56px, 9vw, 144px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          FEATURED
          <br />
          WORKS
        </motion.h2>

        <motion.span
          initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
          whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 inline-block max-w-[420px] rounded-md bg-[#FFE99E] px-5 py-3 text-[14px] leading-[1.45] text-[#0F0F0F] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          This is a showcase of what happens when curiosity drives the
          process.
        </motion.span>
      </div>

      {/* Sticky card stack */}
      <div className="relative mx-auto mt-24 max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col gap-10">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Background colour blooms ---------- */

function ColourBlooms() {
  const positions = [
    { color: "#5ECCDD", top: "20%", left: "10%" },
    { color: "#FF4D8B", top: "35%", left: "75%" },
    { color: "#F7C948", top: "55%", left: "15%" },
    { color: "#2EBD6B", top: "75%", left: "70%" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {positions.map((p, i) => (
        <div
          key={i}
          className="absolute h-[480px] w-[480px] rounded-full"
          style={{
            top: p.top,
            left: p.left,
            background: `radial-gradient(closest-side, ${p.color}55, transparent 70%)`,
            filter: "blur(70px)",
            opacity: 0.55,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Glass card ---------- */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const top = 96 + index * 24;
  const tintTop = rgba(project.color, 0.22);
  const tintBottom = rgba(project.color, 0.08);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky overflow-hidden rounded-3xl will-change-transform"
      style={{
        top,
        background: `linear-gradient(135deg, ${tintTop} 0%, ${tintBottom} 100%), rgba(255, 255, 255, 0.55)`,
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow:
          "inset 0 1px 0 rgba(255, 255, 255, 0.85), inset 0 -1px 0 rgba(255, 255, 255, 0.18), 0 24px 64px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)",
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label={`Read case study: ${project.title}`}
        className="block transition-transform duration-300 hover:scale-[1.002] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
      >
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:gap-12 md:p-12">
        {/* Left: meta */}
        <div className="flex flex-col justify-between gap-8">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-6 w-6 rounded-md"
              style={{
                background: project.color,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 6px rgba(0,0,0,0.10)",
              }}
            />
            <span
              className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase"
              style={{ fontWeight: 600 }}
            >
              Project {project.index}
            </span>
            <span className="text-[rgba(0,0,0,0.25)]">·</span>
            <span
              className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase"
              style={{ fontWeight: 600 }}
            >
              {project.date}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h3
              className="leading-[1.02] text-[#0F0F0F]"
              style={{
                fontSize: "clamp(34px, 4.4vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              {project.title}
            </h3>
            <p className="max-w-[460px] text-[15px] leading-[1.6] text-[rgba(0,0,0,0.7)] md:text-[16px]">
              {project.subtitle}
            </p>
          </div>

          <span
            className="group inline-flex items-center gap-2 self-start rounded-full border border-[rgba(0,0,0,0.12)] bg-white/60 px-4 py-2 text-[12px] tracking-[0.18em] text-[#0F0F0F] uppercase backdrop-blur-md transition-colors"
            style={{ fontWeight: 600 }}
          >
            <span>View project</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M3 9 L9 3 M9 3 H4 M9 3 V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

        {/* Right: image */}
        <ImageStage src={project.image} alt={project.title} accent={project.color} />
      </div>
      </Link>
    </motion.article>
  );
}

/* ---------- Image stage ---------- */

function ImageStage({
  src,
  alt,
  accent,
}: {
  src: string;
  alt: string;
  accent: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: rgba(accent, 0.08),
        border: "1px solid rgba(255,255,255,0.6)",
      }}
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className}>
      <path
        d="M3 1 H7 L10 4 V11 H3 Z M7 1 V4 H10"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}
