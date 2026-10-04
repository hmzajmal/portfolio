import { CSFrame, CSShot } from "@/components/case-study/primitives";
import { ZoomImage } from "@/components/ui/zoom-image";

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

/* ─────────── Blocks shared by the studies ─────────── */

/** Wide band on the 1280 container, for frames and multi-up images. */
export function Wide({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">{children}</div>
    </section>
  );
}

/** A labelled sub-block inside a section. */
export function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-14 first:mt-10">
      <p className="label text-ink">{label}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

/** One line of commentary under a block. */
export function Note({ children }: { children: React.ReactNode }) {
  return <p className="body mt-5 max-w-[720px] text-ink-muted">{children}</p>;
}

/** A small tile with an eyebrow and one sentence. */
export function Tile({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="liquid rounded-2xl p-6">
      <p className="eyebrow">{eyebrow}</p>
      <p className="body mt-3 text-ink">{children}</p>
    </div>
  );
}

/** Label and one-line cards in a grid. */
export function Cards({
  items,
  cols = 4,
}: {
  items: [string, string][];
  cols?: 2 | 3 | 4;
}) {
  const grid = cols === 2 ? "md:grid-cols-2" : cols === 3 ? "md:grid-cols-3" : "md:grid-cols-4";
  return (
    <ul className={`grid grid-cols-2 gap-3 ${grid} md:gap-4`}>
      {items.map(([t, d]) => (
        <li key={t} className="liquid rounded-2xl p-5">
          <p className="label text-ink">{t}</p>
          <p className="body-sm mt-1 text-ink-muted">{d}</p>
        </li>
      ))}
    </ul>
  );
}

/** Left to right flow of pills. */
export function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-3">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-3">
          <span className="liquid-sm inline-flex h-10 items-center rounded-full px-4 label-sm text-ink">
            {s}
          </span>
          {i < steps.length - 1 && (
            <svg viewBox="0 0 16 16" width={14} height={14} fill="none" className="text-ink-quiet" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Simple comparison table. The last column is the emphasised one. */
export function CompareTable({
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

/** Stat tiles, two to five across. */
export function StatStrip({ items }: { items: [string, string][] }) {
  const n = items.length;
  const grid = n >= 5 ? "md:grid-cols-5" : n === 4 ? "md:grid-cols-4" : n === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <ul className={`grid grid-cols-2 gap-4 ${grid} md:gap-5`}>
      {items.map(([v, l]) => (
        <li key={l} className="liquid flex flex-col gap-2 rounded-2xl p-5 md:p-6">
          <p className="h2 stat text-ink">{v}</p>
          <p className="body-sm text-ink-muted">{l}</p>
        </li>
      ))}
    </ul>
  );
}
