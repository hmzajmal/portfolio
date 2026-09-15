"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { ZoomImage } from "@/components/ui/zoom-image";

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
          className="h1 mt-6 max-w-[920px] text-ink"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg mt-6 max-w-[720px] text-ink-muted"
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
                className="body-text text-ink wt-medium"
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
  /** Anchor for the nav's table of contents. */
  id?: string;
};

export function CSSection({ eyebrow, heading, children, narrow, id }: SectionProps) {
  return (
    <section id={id} className="py-20 md:py-28">
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
              <h2 className="h2 mt-3 text-ink">{heading}</h2>
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
    <div className="body-text flex max-w-[720px] flex-col gap-4 text-ink-muted">
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
  /**
   * Transparent-background mockups (device renders, logo strips) sit
   * directly on the page. Everything else is a hard-edged screenshot and
   * goes inside a CSFrame so its corners are never clipped.
   */
  plain?: boolean;
};

/**
 * Padded, tinted frame behind one or more screenshots. The frame carries
 * the rounded corners; the images inside keep a small radius only.
 */
export function CSFrame({
  children,
  columns = 1,
  surface = "tint",
  className = "",
}: ChildrenProps & { columns?: 1 | 2 | 3; surface?: "tint" | "white"; className?: string }) {
  const grid =
    columns === 2
      ? "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8"
      : columns === 3
      ? "grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8"
      : "";
  // White is for small transparent components (cards, badges) that need
  // a clean surface rather than a tint that muddies their own shadows.
  const bg =
    surface === "white"
      ? "bg-white border border-[var(--color-line)]"
      : "bg-[rgba(15,15,15,0.04)]";
  return (
    <div className={`rounded-3xl p-4 md:p-8 ${bg} ${grid} ${className}`}>
      {children}
    </div>
  );
}

/**
 * A small transparent UI component (a card, a badge) shown at a fixed
 * width, centred in its cell, with a label beneath. For before/after
 * pairs where the two assets are different sizes.
 */
export function CSComponentShot({
  src,
  alt,
  label,
  maxWidth = 300,
}: {
  src: string;
  alt: string;
  label?: string;
  maxWidth?: number;
}) {
  return (
    <figure className="flex min-w-0 flex-col items-center gap-5">
      <div className="w-full" style={{ maxWidth }}>
        <ZoomImage src={src} alt={alt} />
      </div>
      {label && (
        <figcaption className="eyebrow text-ink-quiet">{label}</figcaption>
      )}
    </figure>
  );
}

/** A zoomable screenshot with a hairline border and soft shadow, for use inside CSFrame. */
export function CSShot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="flex min-w-0 flex-col gap-3">
      <div className="overflow-hidden rounded-lg border border-[var(--color-line)] bg-white shadow-[0_8px_24px_rgba(15,15,15,0.08)]">
        <ZoomImage src={src} alt={alt} />
      </div>
      {caption && (
        <figcaption className="body-sm text-ink-quiet">{caption}</figcaption>
      )}
    </figure>
  );
}

export function CSImage({ src, alt, caption, plain = false }: ImageProps) {
  if (plain) {
    return (
      <CSContainer>
        <figure className="flex flex-col gap-3">
          <ZoomImage src={src} alt={alt} />
          {caption && (
            <figcaption className="body-sm text-ink-quiet">
              {caption}
            </figcaption>
          )}
        </figure>
      </CSContainer>
    );
  }
  return (
    <CSContainer>
      <CSFrame>
        <CSShot src={src} alt={alt} caption={caption} />
      </CSFrame>
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
            <span className="liquid-sm absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-ink eyebrow">
              {label}
            </span>
          )}
          <ZoomImage src={src} alt={alt} />
        </div>
        {caption && (
          <p className="body-sm px-4 pb-1 pt-4 text-ink-muted">
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
      className="border-l-[2px] border-[var(--color-ink)] pl-6 text-ink wt-medium"
      style={{ fontSize: "clamp(20px, 2.4vw, 26px)",
        letterSpacing: "-0.01em",
        lineHeight: 1.4 }}
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
            className="text-ink wt-medium"
            style={{ fontSize: "clamp(40px, 5vw, 56px)",
              letterSpacing: "-0.02em",
              lineHeight: 1 }}
          >
            {s.value}
          </p>
          <p className="body-sm text-ink-muted">{s.label}</p>
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
          <p className="body-text text-ink">{it.problem}</p>
          <div className="liquid-sm mt-4 rounded-xl p-5">
            <p className="eyebrow">Solution</p>
            <p className="body-sm mt-2 text-ink-muted">{it.solution}</p>
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
    <div className="rounded-3xl p-10 text-ink-inverse md:p-14" style={{ background: gradient }}>
      {eyebrow && (
        <p className="eyebrow text-ink-inverse-quiet">{eyebrow}</p>
      )}
      {heading && (
        <h3
          className="mt-4 text-ink-inverse wt-medium"
          style={{ fontSize: "clamp(24px, 3.2vw, 40px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15 }}
        >
          {heading}
        </h3>
      )}
      {body && (
        <p className="body-lg mt-6 max-w-[640px] text-ink-inverse-muted">{body}</p>
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
              <ZoomImage
                src={t.src}
                alt={t.label}
                buttonClassName="h-full"
                className="h-full object-cover"
              />
            )}
          </div>
          <p className="body-sm text-ink-muted">{t.label}</p>
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
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] body-sm text-ink-inverse wt-medium"
          >
            {i + 1}
          </span>
          <div>
            <p
              className="body-text text-ink wt-medium"
              style={{ letterSpacing: "-0.005em" }}
            >
              {it.title}
            </p>
            <p className="body-sm mt-2 text-ink-muted">{it.body}</p>
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
  const columns = items.length === 3 ? 3 : 2;
  return (
    <CSFrame columns={columns}>
      {items.map((m, i) =>
        m.type === "video" ? (
          <div key={i} className="overflow-hidden rounded-lg border border-[var(--color-line)] bg-white">
            <video src={m.src} autoPlay loop muted playsInline className="block h-auto w-full" />
          </div>
        ) : (
          <CSShot key={i} src={m.src} alt={m.alt} />
        )
      )}
    </CSFrame>
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
        <p className="body-text mt-3 text-ink">{body}</p>
      )}
      {bullets && (
        <ul className="body-sm mt-3 flex flex-col gap-2 text-ink-muted">
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
            className="body-text text-ink wt-medium"
            style={{ letterSpacing: "-0.005em" }}
          >
            {p.title}
          </p>
          <p className="body-sm text-ink-muted">{p.body}</p>
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
            className="body-text text-ink wt-medium"
            style={{ letterSpacing: "-0.005em" }}
          >
            {t.title}
          </p>
          <p className="body-sm mt-3 text-ink-muted">{t.body}</p>
        </li>
      ))}
    </ul>
  );
}


