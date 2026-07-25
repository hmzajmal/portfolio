"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Case study primitives.
 *
 * Single source of truth for containers, sections, and typography across
 * every case study page. All components pull from the same tokens as the
 * home + about pages:
 *   - container:  max-w-[1280px] px-6 md:px-10 (or `narrow` max-w-[820px])
 *   - section:    py-20 md:py-28
 *   - typography: .display / .h1 / .h2 / .h3 / .body-lg / .body-text / .body-sm / .eyebrow
 *   - color:      var(--color-ink) / var(--color-ink-muted) / var(--color-ink-quiet)
 *   - surface:    .liquid / .liquid-sm for card treatments
 *
 * Update these once and every case study picks up the change.
 */

type ChildrenProps = { children: React.ReactNode };

/* ─────────── Container ─────────── */

const CONTAINER_WIDE = "max-w-[1280px]";
const CONTAINER_NARROW = "max-w-[820px]";

export function CSContainer({
  children,
  narrow,
  className = "",
}: ChildrenProps & { narrow?: boolean; className?: string }) {
  return (
    <div
      className={`mx-auto px-6 md:px-10 ${narrow ? CONTAINER_NARROW : CONTAINER_WIDE} ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────── Eyebrow ─────────── */

export function CSEyebrow({ children }: ChildrenProps) {
  return <p className="eyebrow">{children}</p>;
}

/* ─────────── Hero ─────────── */

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta: { label: string; value: string }[];
  /** Kept for backwards compatibility with existing case study pages;
   * no longer used — the new hero uses the neutral ink tokens. */
  accent?: string;
};

export function CSHero({ eyebrow, title, description, meta }: HeroProps) {
  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28">
      <CSContainer>
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h1 mt-6 max-w-[920px] text-[var(--color-ink)]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg mt-6 max-w-[720px] text-[var(--color-ink-muted)]"
        >
          {description}
        </motion.p>
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-2 gap-y-6 border-t border-[var(--color-line)] pt-8 md:grid-cols-4"
        >
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1.5">
              <dt className="eyebrow">{m.label}</dt>
              <dd
                className="text-[15px] text-[var(--color-ink)]"
                style={{
                  fontVariationSettings: '"wght" 500, "opsz" 16, "wdth" 100',
                }}
              >
                {m.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </CSContainer>
    </section>
  );
}

/* ─────────── Section ─────────── */

type SectionProps = {
  eyebrow?: string;
  heading?: string;
  children?: React.ReactNode;
  narrow?: boolean;
};

export function CSSection({ eyebrow, heading, children, narrow }: SectionProps) {
  return (
    <section className="py-20 md:py-28">
      <CSContainer narrow={narrow}>
        {(eyebrow || heading) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            {eyebrow && <CSEyebrow>{eyebrow}</CSEyebrow>}
            {heading && (
              <h2 className="h2 mt-3 text-[var(--color-ink)]">{heading}</h2>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </CSContainer>
    </section>
  );
}

/* ─────────── Body prose ─────────── */

export function CSBody({ children }: ChildrenProps) {
  return (
    <div className="body-text flex max-w-[720px] flex-col gap-4 text-[var(--color-ink-muted)]">
      {children}
    </div>
  );
}

/* ─────────── Image ─────────── */

type ImageProps = {
  src: string;
  alt: string;
  caption?: string;
  rounded?: boolean;
};

export function CSImage({ src, alt, caption, rounded = true }: ImageProps) {
  return (
    <CSContainer>
      <figure className="flex flex-col gap-3">
        <div
          className={`overflow-hidden bg-[var(--color-canvas-warm)] ${
            rounded ? "rounded-3xl" : ""
          }`}
        >
          <img src={src} alt={alt} className="block h-auto w-full" />
        </div>
        {caption && (
          <figcaption className="body-sm text-[var(--color-ink-quiet)]">
            {caption}
          </figcaption>
        )}
      </figure>
    </CSContainer>
  );
}

/* ─────────── Staged image (framed / tinted surround) ─────────── */

type StageImageProps = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  /** Override the gradient backdrop. */
  surface?: string;
};

export function CSStageImage({
  src,
  alt,
  label,
  caption,
  surface = "linear-gradient(160deg, #F4EFEA 0%, #FBF7F1 55%, #FFFFFF 100%)",
}: StageImageProps) {
  return (
    <CSContainer>
      <div className="rounded-[32px] p-3 md:p-5" style={{ background: surface }}>
        <div className="liquid relative overflow-hidden rounded-2xl">
          {label && (
            <span className="liquid-sm absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] tracking-[0.18em] text-[var(--color-ink)] uppercase">
              {label}
            </span>
          )}
          <img src={src} alt={alt} className="block h-auto w-full" />
        </div>
        {caption && (
          <p className="body-sm px-4 pb-1 pt-4 text-[var(--color-ink-muted)]">
            {caption}
          </p>
        )}
      </div>
    </CSContainer>
  );
}

/* ─────────── Pull quote ─────────── */

export function CSQuote({ children }: ChildrenProps & { accent?: string }) {
  return (
    <blockquote
      className="border-l-[2px] border-[var(--color-ink)] pl-6 text-[var(--color-ink)]"
      style={{
        fontSize: "clamp(20px, 2.4vw, 26px)",
        fontVariationSettings: '"wght" 500, "opsz" 28, "wdth" 100',
        letterSpacing: "-0.01em",
        lineHeight: 1.4,
      }}
    >
      {children}
    </blockquote>
  );
}

/* ─────────── Stats row ─────────── */

export function CSStats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {stats.map((s) => (
        <li key={s.label} className="liquid flex flex-col gap-3 rounded-2xl p-7">
          <p
            className="text-[var(--color-ink)]"
            style={{
              fontSize: "clamp(40px, 5vw, 56px)",
              fontVariationSettings: '"wght" 500, "opsz" 56, "wdth" 100',
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {s.value}
          </p>
          <p className="body-sm text-[var(--color-ink-muted)]">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}

/* ─────────── Problem / Solution list ─────────── */

export function CSChallengeList({
  items,
}: {
  items: { problem: string; solution: string }[];
  problemBg?: string; // kept for backwards compat, no longer used
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((it, i) => (
        <li key={i} className="liquid rounded-2xl p-7">
          <p className="body-text text-[var(--color-ink)]">{it.problem}</p>
          <div className="liquid-sm mt-4 rounded-xl p-5">
            <p className="eyebrow">Solution</p>
            <p className="body-sm mt-2 text-[var(--color-ink-muted)]">{it.solution}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ─────────── Gradient callout ─────────── */

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
  gradient = "linear-gradient(135deg, #0F0F0F 0%, #2A2A2E 100%)",
}: CalloutProps) {
  return (
    <div className="rounded-3xl p-10 text-white md:p-14" style={{ background: gradient }}>
      {eyebrow && (
        <p className="eyebrow text-white/60">{eyebrow}</p>
      )}
      {heading && (
        <h3
          className="mt-4 text-white"
          style={{
            fontSize: "clamp(24px, 3.2vw, 40px)",
            fontVariationSettings: '"wght" 500, "opsz" 44, "wdth" 100',
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          {heading}
        </h3>
      )}
      {body && (
        <p className="body-lg mt-6 max-w-[640px] text-white/80">{body}</p>
      )}
      {children}
    </div>
  );
}

/* ─────────── Tile grid ─────────── */

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
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-canvas-warm)]">
            {t.src && (
              <img src={t.src} alt={t.label} className="h-full w-full object-cover" />
            )}
          </div>
          <p className="body-sm text-[var(--color-ink-muted)]">{t.label}</p>
        </li>
      ))}
    </ul>
  );
}

/* ─────────── Numbered feature list ─────────── */

export function CSNumberedList({
  items,
}: {
  items: { title: string; body: string }[];
  accent?: string; // kept for backwards compat
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((it, i) => (
        <li key={i} className="liquid flex gap-5 rounded-2xl p-6">
          <span
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-[14px] text-white"
            style={{
              fontVariationSettings: '"wght" 600, "opsz" 14, "wdth" 100',
            }}
          >
            {i + 1}
          </span>
          <div>
            <p
              className="text-[16px] text-[var(--color-ink)]"
              style={{
                fontVariationSettings: '"wght" 600, "opsz" 16, "wdth" 100',
                letterSpacing: "-0.005em",
              }}
            >
              {it.title}
            </p>
            <p className="body-sm mt-2 text-[var(--color-ink-muted)]">{it.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ─────────── Media row (image or video) ─────────── */

export function CSMediaRow({
  items,
}: {
  items: { src: string; alt: string; type?: "image" | "video" }[];
}) {
  const cols =
    items.length === 2
      ? "md:grid-cols-2"
      : items.length === 3
      ? "md:grid-cols-3"
      : "md:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-4 ${cols}`}>
      {items.map((m, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl bg-[var(--color-canvas-warm)]"
        >
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
            <img src={m.src} alt={m.alt} className="block h-auto w-full" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─────────── Detail card ─────────── */

export function CSDetailCard({
  title,
  body,
  bullets,
}: {
  title: string;
  body?: string;
  bullets?: string[];
  bg?: string; // kept for backwards compat, no longer used
}) {
  return (
    <div className="liquid rounded-2xl p-7">
      <p className="eyebrow">{title}</p>
      {body && (
        <p className="body-text mt-3 text-[var(--color-ink)]">{body}</p>
      )}
      {bullets && (
        <ul className="body-sm mt-3 flex flex-col gap-2 text-[var(--color-ink-muted)]">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-ink-quiet)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ─────────── Phase list ─────────── */

export function CSPhaseList({
  phases,
}: {
  phases: { label: string; title: string; body: string }[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {phases.map((p) => (
        <li key={p.title} className="liquid flex flex-col gap-3 rounded-2xl p-7">
          <p className="eyebrow">{p.label}</p>
          <p
            className="text-[16px] text-[var(--color-ink)]"
            style={{
              fontVariationSettings: '"wght" 600, "opsz" 16, "wdth" 100',
              letterSpacing: "-0.005em",
            }}
          >
            {p.title}
          </p>
          <p className="body-sm text-[var(--color-ink-muted)]">{p.body}</p>
        </li>
      ))}
    </ul>
  );
}

/* ─────────── Colored info tiles ─────────── */

export function CSYellowTiles({
  items,
  bg,
}: {
  items: { title: string; body: string }[];
  bg?: string; // kept for backwards compat; default now uses liquid
}) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {items.map((t) => (
        <li
          key={t.title}
          className={bg ? "rounded-2xl p-6" : "liquid rounded-2xl p-6"}
          style={bg ? { background: bg } : undefined}
        >
          <p
            className="text-[16px] text-[var(--color-ink)]"
            style={{
              fontVariationSettings: '"wght" 600, "opsz" 16, "wdth" 100',
              letterSpacing: "-0.005em",
            }}
          >
            {t.title}
          </p>
          <p className="body-sm mt-3 text-[var(--color-ink-muted)]">{t.body}</p>
        </li>
      ))}
    </ul>
  );
}

/* ─────────── Back button (kept for backwards compat — shell already renders one) ─────────── */

export function CSBack({ href = "/#work", label = "Back to work" }: { href?: string; label?: string }) {
  return (
    <CSContainer>
      <Link
        href={href}
        className="liquid-sm inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] text-[var(--color-ink)]"
      >
        <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden>
          <path
            d="M10 5.5H1m0 0L5 1.5m-4 4L5 9.5"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
        <span>{label}</span>
      </Link>
    </CSContainer>
  );
}

/* ─────────── Next case card (deprecated — CaseStudyShell mounts NextCases) ─────────── */

type NextProps = {
  next: { title: string; description: string; tags: string[]; slug: string };
  accent?: string;
};

export function CSNext({ next }: NextProps) {
  return (
    <section className="border-t border-[var(--color-line)] py-20 md:py-28">
      <CSContainer>
        <CSEyebrow>Next Case Study</CSEyebrow>
        <Link
          href={`/work/${next.slug}`}
          className="liquid group mt-6 flex flex-col gap-4 rounded-3xl p-8 transition-transform hover:-translate-y-0.5 md:p-10"
        >
          <div className="flex items-center gap-2">
            {next.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-[var(--color-line)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[var(--color-ink-muted)] uppercase"
              >
                {t}
              </span>
            ))}
          </div>
          <h3 className="h2 text-[var(--color-ink)]">{next.title}</h3>
          <p className="body-text max-w-[640px] text-[var(--color-ink-muted)]">
            {next.description}
          </p>
          <span className="inline-flex items-center gap-2 text-[13px] text-[var(--color-ink)]">
            <span>Read case study</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 11 11"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
              aria-hidden
            >
              <path
                d="M1 5.5h9m0 0L6 1.5m4 4L6 9.5"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </Link>
      </CSContainer>
    </section>
  );
}
