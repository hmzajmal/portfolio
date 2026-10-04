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

/* ─────────── Study layout ─────────── */

/**
 * One column. Text sits on a 680px measure, images run the full 1000px
 * width. Headings are plain nouns. Every process step is a past-tense
 * sentence, one paragraph, one image.
 */
export function Study({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-[1000px] px-6 pt-10 pb-24 md:px-10 md:pt-14 md:pb-32">
      {children}
    </article>
  );
}

export function StudyHead({ title, client, kind }: { title: string; client: string; kind: string }) {
  return (
    <header>
      <h1 className="h1 max-w-[860px] text-ink">{title}</h1>
      <p className="title mt-5 text-ink-muted wt-regular">For {client}</p>
      <p className="mt-6 inline-flex h-8 items-center rounded-full border border-[var(--color-line)] px-3 body-sm text-ink-muted">
        {kind}
      </p>
    </header>
  );
}

/** Section heading. */
export function Sec({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-20 md:mt-24">
      <h2 className="h3 text-ink">{title}</h2>
      {children}
    </section>
  );
}

/** Three big numbers with a line under each. */
export function Outcomes({ items }: { items: [string, string][] }) {
  return (
    <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
      {items.map(([v, l]) => (
        <div key={l}>
          <dd className="h1 stat text-ink">{v}</dd>
          <dt className="body mt-2 max-w-[260px] text-ink-muted">{l}</dt>
        </div>
      ))}
    </dl>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="body mt-5 max-w-[680px] text-ink-muted [line-height:1.8]">{children}</p>;
}

/** Columns of stacked facts: My Role, Team, Scope, Client. */
export function Facts({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
      {groups.map((g) => (
        <div key={g.title}>
          <p className="label text-ink">{g.title}</p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {g.items.map((it) => (
              <li key={it} className="body text-ink-muted">{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** A dash list, the way the reference writes its audience. */
export function Dashes({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex max-w-[680px] flex-col gap-2">
      {items.map((it) => (
        <li key={it} className="body text-ink-muted [line-height:1.8]">
          <span className="text-ink-quiet">-&nbsp;</span>
          {it}
        </li>
      ))}
    </ul>
  );
}

/** A process step: a past-tense sentence, then what happened. */
export function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-14">
      <h3 className="title max-w-[760px] text-ink">{title}</h3>
      {children}
    </div>
  );
}

/** Full-width image with soft corners. */
export function Img({
  src,
  alt,
  caption,
  frame = false,
  columns = 1,
  items,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  /** Hairline and shadow for raw screenshots. Off for rendered mockups. */
  frame?: boolean;
  columns?: 1 | 2 | 3;
  items?: { src: string; alt: string }[];
}) {
  const list = items ?? (src ? [{ src, alt: alt ?? "" }] : []);
  const grid =
    columns === 3 ? "grid grid-cols-1 gap-4 sm:grid-cols-3" : columns === 2 ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : "";
  return (
    <figure className="mt-10">
      <div className={grid}>
        {list.map((it) => (
          <div
            key={it.src}
            className={
              frame
                ? "overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-[0_8px_24px_rgba(15,15,15,0.06)]"
                : "overflow-hidden rounded-2xl"
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

/** A quote with the person under it. */
export function Quote({ who, children }: { who: string; children: React.ReactNode }) {
  return (
    <blockquote className="mt-6 max-w-[680px] border-l-2 border-[var(--color-ink)] pl-6">
      <p className="body text-ink [line-height:1.8]">&ldquo;{children}&rdquo;</p>
      <footer className="body-sm mt-2 text-ink-muted">{who}</footer>
    </blockquote>
  );
}

/**
 * Screens in CSS device frames on a tinted panel, for shots whose text
 * is too small to survive a rendered mockup. `kind="browser"` for
 * desktop screens, `kind="phone"` for mobile.
 */
export function Mockups({
  kind,
  items,
  caption,
  tint = "#F1EDE6",
  url,
}: {
  kind: "browser" | "phone";
  items: { src: string; alt: string }[];
  caption?: string;
  tint?: string;
  url?: string;
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
  const pad = kind === "phone" ? "px-6 py-10 md:px-16 md:py-14" : "p-4 md:p-8";
  return (
    <figure className="mt-10">
      <div className={`rounded-3xl ${pad} ${grid}`} style={{ background: tint }}>
        {items.map((it) =>
          kind === "browser" ? (
            <BrowserFrame key={it.src} src={it.src} alt={it.alt} url={url} />
          ) : (
            <PhoneFrame key={it.src} src={it.src} alt={it.alt} />
          )
        )}
      </div>
      {caption && (
        <figcaption className="body-sm mt-4 text-center text-ink-quiet">{caption}</figcaption>
      )}
    </figure>
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

