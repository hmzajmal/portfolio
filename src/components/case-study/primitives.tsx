"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ChildrenProps = { children: React.ReactNode };

/* Container helpers */

export function CSContainer({
  children,
  narrow,
  className = "",
}: ChildrenProps & { narrow?: boolean; className?: string }) {
  return (
    <div
      className={`mx-auto px-6 md:px-10 ${narrow ? "max-w-[800px]" : "max-w-[1200px]"} ${className}`}
    >
      {children}
    </div>
  );
}

/* Section eyebrow numbering */
export function CSEyebrow({ children }: ChildrenProps) {
  return (
    <p className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">
      {children}
    </p>
  );
}

/* Back button row */
export function CSBack({ href = "/#mywork", label = "Back" }: { href?: string; label?: string }) {
  return (
    <CSContainer>
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,0,0,0.15)] bg-white px-4 py-2 text-[13px] text-[#171717] transition-colors hover:border-[rgba(0,0,0,0.35)]"
      >
        <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
          <path d="M10 5.5H1m0 0L5 1.5m-4 4L5 9.5" stroke="currentColor" strokeLinecap="round" />
        </svg>
        <span>{label}</span>
      </Link>
    </CSContainer>
  );
}

/* Hero */
type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta: { label: string; value: string }[];
  accent?: string;
};

export function CSHero({ eyebrow, title, description, meta, accent = "#cc74bf" }: HeroProps) {
  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28">
      <CSContainer>
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block rounded-full px-3 py-1 text-[11px] tracking-[0.14em] text-white uppercase"
          style={{ background: accent }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[920px] text-[40px] leading-[1.05] tracking-[-0.02em] text-[#171717] md:text-[56px] lg:text-[72px]"
          style={{ fontVariationSettings: '"wght" 480, "opsz" 96, "wdth" 100' }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-[680px] text-[17px] leading-[1.6] text-[rgba(0,0,0,0.7)]"
        >
          {description}
        </motion.p>
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-2 gap-y-6 border-t border-[rgba(0,0,0,0.1)] pt-8 md:grid-cols-4"
        >
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1.5">
              <dt className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.5)] uppercase">
                {m.label}
              </dt>
              <dd className="text-[15px] text-[#171717]">{m.value}</dd>
            </div>
          ))}
        </motion.dl>
      </CSContainer>
    </section>
  );
}

/* Section wrapper */
type SectionProps = {
  eyebrow?: string;
  heading?: string;
  children: React.ReactNode;
  narrow?: boolean;
};

export function CSSection({ eyebrow, heading, children, narrow }: SectionProps) {
  return (
    <section className="py-20 md:py-28">
      <CSContainer narrow={narrow}>
        {(eyebrow || heading) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            {eyebrow && <CSEyebrow>{eyebrow}</CSEyebrow>}
            {heading && (
              <h2
                className="mt-3 text-[26px] leading-[1.15] tracking-[-0.01em] text-[#171717] md:text-[36px]"
                style={{ fontVariationSettings: '"wght" 500, "opsz" 96' }}
              >
                {heading}
              </h2>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </CSContainer>
    </section>
  );
}

/* Body text */
export function CSBody({ children }: ChildrenProps) {
  return (
    <div className="grid max-w-[760px] gap-4 text-[16px] leading-[1.75] text-[rgba(0,0,0,0.72)]">
      {children}
    </div>
  );
}

/* Image. Keeps natural aspect ratio. The `aspect` prop is accepted for
   backward compatibility but is ignored. */
type ImageProps = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  rounded?: boolean;
};

export function CSImage({
  src,
  alt,
  caption,
  rounded = true,
}: ImageProps) {
  return (
    <CSContainer>
      <figure className="flex flex-col gap-3">
        <div
          className={`overflow-hidden bg-[rgba(0,0,0,0.04)] ${
            rounded ? "rounded-3xl" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="block h-auto w-full" />
        </div>
        {caption && (
          <figcaption className="text-[12px] text-[rgba(0,0,0,0.55)]">{caption}</figcaption>
        )}
      </figure>
    </CSContainer>
  );
}

/* Staged image. Image sits inside a soft tinted container with an optional
   accent label chip and caption. Use for the marquee visual moments in a
   case study, where a plain CSImage feels too austere. */
type StageImageProps = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  accent?: string;
  /** Override the gradient backdrop. */
  surface?: string;
};

export function CSStageImage({
  src,
  alt,
  label,
  caption,
  accent = "#171717",
  surface = "linear-gradient(160deg, #FFF1E2 0%, #FFFAF3 45%, #FFFFFF 100%)",
}: StageImageProps) {
  return (
    <CSContainer>
      <div
        className="rounded-[32px] p-3 md:p-5"
        style={{ background: surface }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_24px_56px_rgba(0,0,0,0.08)]">
          {label && (
            <span
              className="absolute left-4 top-4 z-10 rounded-full bg-white/85 px-3 py-1 text-[10px] tracking-[0.18em] uppercase backdrop-blur-md"
              style={{ color: accent, fontVariationSettings: '"wght" 600' }}
            >
              {label}
            </span>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="block h-auto w-full" />
        </div>
        {caption && (
          <p className="px-4 pb-1 pt-4 text-[13px] leading-[1.6] text-[rgba(0,0,0,0.6)]">
            {caption}
          </p>
        )}
      </div>
    </CSContainer>
  );
}

/* Pull quote */
export function CSQuote({ children, accent = "#cc74bf" }: ChildrenProps & { accent?: string }) {
  return (
    <blockquote
      className="border-l-2 pl-6 text-[20px] leading-[1.55] text-[#171717] md:text-[24px]"
      style={{ borderColor: accent, fontVariationSettings: '"wght" 380, "slnt" -2' }}
    >
      {children}
    </blockquote>
  );
}

/* Stats row */
type Stat = { value: string; label: string };

export function CSStats({ stats }: { stats: Stat[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {stats.map((s) => (
        <li
          key={s.label}
          className="flex flex-col gap-3 rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]"
        >
          <p
            className="text-[40px] leading-none text-[#171717] md:text-[52px]"
            style={{ fontVariationSettings: '"wght" 400, "opsz" 144, "wdth" 100' }}
          >
            {s.value}
          </p>
          <p className="text-[13px] text-[rgba(0,0,0,0.55)]">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}

/* Challenge / Solution */
type CSItem = {
  problem: string;
  solution: string;
};

export function CSChallengeList({
  items,
  problemBg = "rgba(240,239,245,0.5)",
}: {
  items: CSItem[];
  problemBg?: string;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((it, i) => (
        <li key={i} className="rounded-2xl p-7" style={{ background: problemBg }}>
          <p className="text-[15px] leading-[1.7] text-[#171717]">{it.problem}</p>
          <div className="mt-4 rounded-xl bg-white p-5">
            <p className="text-[13px] tracking-[0.14em] text-[rgba(0,0,0,0.5)] uppercase">
              Solution
            </p>
            <p className="mt-2 text-[14px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
              {it.solution}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* Gradient callout band */
type CalloutProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  children?: React.ReactNode;
  gradient?: string;
};

export function CSCallout({
  eyebrow,
  heading,
  body,
  children,
  gradient = "linear-gradient(135deg, #cc74bf 0%, #d49b00 100%)",
}: CalloutProps) {
  return (
    <div
      className="rounded-3xl p-10 text-white md:p-14"
      style={{ background: gradient }}
    >
      {eyebrow && (
        <p className="text-[11px] tracking-[0.18em] text-white/80 uppercase">{eyebrow}</p>
      )}
      {heading && (
        <h3
          className="mt-4 text-[24px] leading-[1.2] md:text-[34px]"
          style={{ fontVariationSettings: '"wght" 500, "opsz" 96' }}
        >
          {heading}
        </h3>
      )}
      {body && (
        <p className="mt-6 max-w-[640px] text-[15px] leading-[1.7] text-white/90">
          {body}
        </p>
      )}
      {children}
    </div>
  );
}

/* Labelled tile grid (for Key Research Insights, before/after, etc.) */
export function CSTileGrid({
  tiles,
  cols = 4,
}: {
  tiles: { src?: string; label: string }[];
  cols?: 2 | 3 | 4;
}) {
  const colMap = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[cols];
  return (
    <ul className={`grid grid-cols-2 gap-4 ${colMap}`}>
      {tiles.map((t, i) => (
        <li key={i} className="flex flex-col gap-3">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[rgba(0,0,0,0.04)]">
            {t.src && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={t.src} alt={t.label} className="h-full w-full object-cover" />
            )}
          </div>
          <p className="text-[13px] text-[rgba(0,0,0,0.7)]">{t.label}</p>
        </li>
      ))}
    </ul>
  );
}

/* Numbered feature list (Ode to Beauty Key Features) */
export function CSNumberedList({
  items,
  accent = "#cc74bf",
}: {
  items: { title: string; body: string }[];
  accent?: string;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex gap-5 rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]"
        >
          <span
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[14px] text-white"
            style={{ background: accent }}
          >
            {i + 1}
          </span>
          <div>
            <p className="text-[15px] text-[#171717]" style={{ fontVariationSettings: '"wght" 600' }}>
              {it.title}
            </p>
            <p className="mt-2 text-[14px] leading-[1.6] text-[rgba(0,0,0,0.65)]">
              {it.body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* Side-by-side / multi-column image or video row */
export function CSMediaRow({
  items,
}: {
  items: { src: string; alt: string; type?: "image" | "video" }[];
}) {
  const cols = items.length === 2 ? "md:grid-cols-2" : items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-4 ${cols}`}>
      {items.map((m, i) => (
        <div key={i} className="overflow-hidden rounded-2xl bg-[rgba(0,0,0,0.04)]">
          {m.type === "video" ? (
            <video
              src={m.src}
              autoPlay
              loop
              muted
              playsInline
              className="block h-auto w-full"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={m.src} alt={m.alt} className="block h-auto w-full" />
          )}
        </div>
      ))}
    </div>
  );
}

/* Card with optional bullets (Ode to Beauty Role/Team) */
export function CSDetailCard({
  title,
  body,
  bullets,
  bg = "white",
}: {
  title: string;
  body?: string;
  bullets?: string[];
  bg?: string;
}) {
  return (
    <div
      className="rounded-2xl p-7"
      style={{ background: bg }}
    >
      <p className="text-[13px] tracking-[0.14em] text-[rgba(0,0,0,0.55)] uppercase">
        {title}
      </p>
      {body && (
        <p className="mt-3 text-[15px] leading-[1.7] text-[#171717]">{body}</p>
      )}
      {bullets && (
        <ul className="mt-3 flex flex-col gap-2 text-[14px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[rgba(0,0,0,0.4)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* Phase list (Design Strategy, Research Methods) */
export function CSPhaseList({
  phases,
}: {
  phases: { label: string; title: string; body: string }[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {phases.map((p) => (
        <li
          key={p.title}
          className="flex flex-col gap-3 rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]"
        >
          <p className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.5)] uppercase">
            {p.label}
          </p>
          <p className="text-[16px] text-[#171717]" style={{ fontVariationSettings: '"wght" 600' }}>
            {p.title}
          </p>
          <p className="text-[14px] leading-[1.65] text-[rgba(0,0,0,0.65)]">{p.body}</p>
        </li>
      ))}
    </ul>
  );
}

/* Yellow info tiles (for E-learning, Xiangqi) */
export function CSYellowTiles({
  items,
  bg = "#FFF2AF",
}: {
  items: { title: string; body: string }[];
  bg?: string;
}) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((t) => (
        <li
          key={t.title}
          className="rounded-2xl p-6"
          style={{ background: bg }}
        >
          <p className="text-[15px] text-[#171717]" style={{ fontVariationSettings: '"wght" 600' }}>
            {t.title}
          </p>
          <p className="mt-3 text-[14px] leading-[1.6] text-[rgba(0,0,0,0.7)]">{t.body}</p>
        </li>
      ))}
    </ul>
  );
}

/* Next case study card */
type NextProps = {
  next: { title: string; description: string; tags: string[]; slug: string };
  accent?: string;
};

export function CSNext({ next, accent = "#cc74bf" }: NextProps) {
  return (
    <section className="border-t border-[rgba(0,0,0,0.08)] py-20 md:py-28">
      <CSContainer>
        <CSEyebrow>Next Case Study</CSEyebrow>
        <Link
          href={`/work/${next.slug}`}
          className="group mt-6 flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-0.5 md:p-10"
        >
          <div className="flex items-center gap-2">
            {next.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-[rgba(0,0,0,0.12)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[rgba(0,0,0,0.6)] uppercase"
              >
                {t}
              </span>
            ))}
          </div>
          <h3
            className="text-[28px] leading-[1.15] tracking-[-0.01em] text-[#171717] md:text-[40px]"
            style={{ fontVariationSettings: '"wght" 500, "opsz" 96' }}
          >
            {next.title}
          </h3>
          <p className="max-w-[640px] text-[15px] leading-[1.7] text-[rgba(0,0,0,0.65)]">
            {next.description}
          </p>
          <span
            className="mt-2 inline-flex items-center gap-2 text-[13px]"
            style={{ color: accent }}
          >
            <span>Read case study</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 11 11"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M1 5.5h9m0 0L6 1.5m4 4L6 9.5" stroke="currentColor" strokeLinecap="round" />
            </svg>
          </span>
        </Link>
      </CSContainer>
    </section>
  );
}
