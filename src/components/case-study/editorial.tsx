import { CSFrame, CSShot } from "@/components/case-study/primitives";
import { ZoomImage } from "@/components/ui/zoom-image";
import { BrowserFrame, PhoneFrame } from "@/components/case-study/device-frames";

/**
 * Editorial case study primitives. Five numbered sections of prose, each
 * followed by one image block, is the shape every case study follows.
 * Streak set the pattern; the rest of the studies share it from here.
 */

export function Section({
  number,
  eyebrow,
  id,
  children,
  wide,
  bare,
}: {
  /** Section number. Omit for a sub-block that only carries an eyebrow. */
  number?: string;
  eyebrow: string;
  /** Anchor for the nav's table of contents. */
  id?: string;
  children: React.ReactNode;
  wide?: boolean;
  /** Tighter vertical rhythm for a sub-block between two image bands. */
  bare?: boolean;
}) {
  const maxW = wide ? "max-w-[1080px]" : "max-w-[820px]";
  const pad = bare ? "pb-20 md:pb-28" : "py-20 md:py-28";
  return (
    <section id={id || undefined} className={pad}>
      <div className={`mx-auto ${maxW} px-6 md:px-10`}>
        <p className="eyebrow">
          {number && (
            <>
              {number}
              <span className="mx-3 text-ink-quiet">/</span>
            </>
          )}
          {eyebrow}
        </p>
        <div className={bare ? "mt-6" : "mt-10"}>{children}</div>
      </div>
    </section>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="h2 max-w-[820px] text-ink">{children}</h2>;
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="body-lg mt-8 flex max-w-[820px] flex-col gap-5 text-ink-muted">
      {children}
    </div>
  );
}

/** Title block at the top of a study. Plain h1, one-line summary, meta. */
export function Title({
  title,
  summary,
  meta,
}: {
  title: string;
  summary: string;
  meta: { label: string; value: string }[];
}) {
  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="mx-auto max-w-[820px] px-6 md:px-10">
        <h1 className="h1 text-ink">{title}</h1>
        <p className="body-lg mt-6 text-ink-muted">{summary}</p>
        <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--color-line-strong)] pt-8">
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <dt className="eyebrow">{m.label}</dt>
              <dd className="body-sm text-ink">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/**
 * One or two framed screenshots on the wide container. `surface="white"`
 * and `plain` are for transparent device mockups, which need a clean
 * white frame and no screenshot border of their own.
 */
export function Shots({
  items,
  columns = 1,
  surface = "tint",
  plain = false,
}: {
  items: { src: string; alt: string; caption?: string }[];
  columns?: 1 | 2 | 3;
  surface?: "tint" | "white";
  plain?: boolean;
}) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <CSFrame columns={columns} surface={surface}>
          {items.map((s) =>
            plain ? (
              <figure key={s.src} className="flex min-w-0 flex-col gap-3">
                <ZoomImage src={s.src} alt={s.alt} />
                {s.caption && (
                  <figcaption className="body-sm text-ink-quiet">{s.caption}</figcaption>
                )}
              </figure>
            ) : (
              <CSShot key={s.src} src={s.src} alt={s.alt} caption={s.caption} />
            ),
          )}
        </CSFrame>
      </div>
    </section>
  );
}

/* ─────────── Article layout ─────────── */

/**
 * One column for everything. Text and images share the same measure,
 * so edges line up and the reader never re-finds the left margin. Each
 * chapter opens with a small label and a big statement, then paragraphs,
 * then the pictures that prove them.
 */
export function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-[1000px] px-6 pb-24 md:px-10 md:pb-32">
      {children}
    </article>
  );
}

/** Small label with a quiet aside, above a statement headline. */
export function Label({ children, aside }: { children: React.ReactNode; aside?: string }) {
  return (
    <p className="label-sm text-ink">
      {children}
      {aside && <span className="wt-regular text-ink-quiet">&nbsp;&nbsp;{aside}</span>}
    </p>
  );
}

/** Title, one-paragraph summary, and a four-column fact row. */
export function ArticleHead({
  label,
  aside,
  title,
  summary,
  facts,
}: {
  label: string;
  aside?: string;
  title: string;
  summary?: string;
  facts: [string, string][];
}) {
  return (
    <header className="pt-12 md:pt-16">
      <Label aside={aside}>{label}</Label>
      <h1 className="h1 mt-5 max-w-[860px] text-ink">{title}</h1>
      {summary && <p className="body-lg mt-6 max-w-[760px] text-ink-muted">{summary}</p>}
      <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt className="body-sm text-ink-quiet">{k}</dt>
            <dd className="body mt-1 text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

/** A chapter: label, statement headline, then whatever follows. */
export function Chapter({
  id,
  label,
  aside,
  title,
  children,
}: {
  id?: string;
  label: string;
  aside?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-24 md:mt-32">
      <Label aside={aside}>{label}</Label>
      <h2 className="h2 mt-5 max-w-[860px] text-ink">{title}</h2>
      {children}
    </section>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="h3 mt-14 max-w-[760px] text-ink">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="body-lg mt-5 max-w-[760px] text-ink-muted">{children}</p>;
}

/** A numbered point with a bold lead line. */
export function Point({
  n,
  title,
  children,
}: {
  n?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 max-w-[760px]">
      <p className="title text-ink">
        {n && <span className="text-ink-quiet">{n}&nbsp;&nbsp;</span>}
        {title}
      </p>
      <p className="body-lg mt-2 text-ink-muted">{children}</p>
    </div>
  );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-5 flex max-w-[760px] list-disc flex-col gap-2 pl-6 body-lg text-ink-muted marker:text-ink-quiet">
      {items.map((it, i) => (
        <li key={i} className="pl-1">{it}</li>
      ))}
    </ul>
  );
}

/**
 * Images on a tinted panel, full column width. Screenshots keep their
 * own corners inside the panel; `plain` is for mockups with transparency.
 */
export function Figure({
  items,
  columns = 1,
  plain = false,
  flush = false,
  caption,
  tint = "rgba(15,15,15,0.04)",
}: {
  items: { src: string; alt: string }[];
  columns?: 1 | 2 | 3;
  plain?: boolean;
  /** No panel at all. For rendered mockups that bring their own backdrop. */
  flush?: boolean;
  caption?: string;
  tint?: string;
}) {
  const grid =
    columns === 3
      ? "grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6"
      : columns === 2
      ? "grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"
      : "";
  return (
    <figure className="mt-10">
      <div
        className={flush ? grid : `rounded-3xl p-4 md:p-8 ${grid}`}
        style={flush ? undefined : { background: tint }}
      >
        {items.map((it) => (
          <div
            key={it.src}
            className={
              plain
                ? "overflow-hidden rounded-2xl"
                : "overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-[0_8px_24px_rgba(15,15,15,0.06)]"
            }
          >
            <ZoomImage src={it.src} alt={it.alt} />
          </div>
        ))}
      </div>
      {caption && <figcaption className="body-sm mt-3 text-ink-quiet">{caption}</figcaption>}
    </figure>
  );
}

/**
 * Screens in device frames on a tinted panel. `kind="browser"` for
 * desktop screenshots, `kind="phone"` for mobile. `hero` tips the panel
 * back a few degrees for the opening image only.
 */
export function Mockups({
  kind,
  items,
  caption,
  tint = "rgba(15,15,15,0.05)",
  url,
  hero = false,
}: {
  kind: "browser" | "phone";
  items: { src: string; alt: string }[];
  caption?: string;
  tint?: string;
  url?: string;
  hero?: boolean;
}) {
  const n = items.length;
  const grid =
    kind === "phone"
      ? n >= 3
        ? "grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10"
        : n === 2
        ? "grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10"
        : "flex justify-center"
      : n >= 3
      ? "grid grid-cols-1 gap-6 md:grid-cols-3"
      : n === 2
      ? "grid grid-cols-1 gap-6 md:grid-cols-2"
      : "";
  const pad = kind === "phone" ? "px-6 py-10 md:px-16 md:py-14" : "p-4 md:p-10";
  return (
    <figure className={hero ? "mt-10 [perspective:1800px]" : "mt-10"}>
      <div
        className={`rounded-3xl ${pad} ${grid} ${hero ? "[transform:rotateX(4deg)] origin-top" : ""}`}
        style={{ background: tint }}
      >
        {items.map((it) =>
          kind === "browser" ? (
            <BrowserFrame key={it.src} src={it.src} alt={it.alt} url={url} />
          ) : (
            <PhoneFrame key={it.src} src={it.src} alt={it.alt} />
          )
        )}
      </div>
      {caption && <figcaption className="body-sm mt-3 text-ink-quiet">{caption}</figcaption>}
    </figure>
  );
}

/** A quiet row of numbers, separated by hairlines. Used once per study. */
export function Numbers({ items }: { items: [string, string][] }) {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-y-8 border-t border-[var(--color-line)] pt-8 md:grid-cols-4">
      {items.map(([v, l]) => (
        <div key={l} className="flex flex-col gap-2 md:border-l md:border-[var(--color-line)] md:px-6 md:first:border-l-0 md:first:pl-0">
          <dd className="h2 stat text-ink">{v}</dd>
          <dt className="body-sm text-ink-muted">{l}</dt>
        </div>
      ))}
    </dl>
  );
}

/** A quote with the person under it. */
export function Quote({ who, children }: { who: string; children: React.ReactNode }) {
  return (
    <blockquote className="mt-8 max-w-[760px] border-l-2 border-[var(--color-ink)] pl-6">
      <p className="body-lg text-ink">&ldquo;{children}&rdquo;</p>
      <footer className="body-sm mt-2 text-ink-muted">{who}</footer>
    </blockquote>
  );
}

/** Simple comparison table. The last column is the emphasised one. */
export function Table({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--color-line)]">
            <th className="px-5 py-4" />
            {columns.map((c) => (
              <th key={c} className="px-5 py-4 label text-ink">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-[var(--color-line)] last:border-b-0">
              <td className="px-5 py-4 body-sm text-ink-muted">{r[0]}</td>
              {r.slice(1).map((c, i, arr) => (
                <td
                  key={i}
                  className={`px-5 py-4 body-sm text-ink ${i === arr.length - 1 ? "wt-medium" : ""}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

