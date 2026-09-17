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
}: {
  number: string;
  eyebrow: string;
  /** Anchor for the nav's table of contents. */
  id?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const maxW = wide ? "max-w-[1080px]" : "max-w-[820px]";
  return (
    <section id={id} className="py-20 md:py-28">
      <div className={`mx-auto ${maxW} px-6 md:px-10`}>
        <p className="eyebrow">
          {number}
          <span className="mx-3 text-ink-quiet">/</span>
          {eyebrow}
        </p>
        <div className="mt-10">{children}</div>
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
