"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Item = {
  label: string;
  value: number;
  /** Shown instead of the number, e.g. "under 60". */
  display?: string;
  /** One line of plain reading, shown in the tooltip and the table view. */
  meaning?: string;
};

/**
 * Ranked horizontal bars for one series.
 *
 * Bars are 20px, rounded only at the data end, grown from a shared
 * baseline. One colour, since there is one series. Every value sits at
 * its bar tip and the axis carries clean ticks. Hovering a row shows the
 * count, its share of the total and the one-line reading. A visually
 * hidden table carries the same data for readers who cannot see it.
 */
export function BarChart({
  items,
  title,
  note,
}: {
  items: Item[];
  /** Short name of what is plotted. Replaces a legend. */
  title: string;
  note?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const total = useMemo(() => items.reduce((s, i) => s + i.value, 0), [items]);
  const max = Math.max(...items.map((i) => i.value));

  // Clean ticks: a round step, the axis top at the next step past the max.
  const step = niceStep(max);
  const top = Math.ceil(max / step) * step;
  const ticks = Array.from({ length: Math.round(top / step) + 1 }, (_, i) => i * step);

  const LABEL = 180; // px, the label column

  return (
    <figure className="mt-8 max-w-[760px]">
      <figcaption className="flex items-baseline justify-between gap-6">
        <span className="label text-ink">{title}</span>
        <span className="body-sm text-ink-quiet">{total.toLocaleString()} total</span>
      </figcaption>

      <div className="relative mt-5" onMouseLeave={() => setActive(null)}>
        {/* Gridlines, hairline and recessive, behind the bars. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0"
          style={{ left: LABEL }}
        >
          {ticks.map((t) => (
            <span
              key={t}
              className="absolute inset-y-0 w-px bg-[var(--color-line)]"
              style={{ left: `${(t / top) * 100}%` }}
            />
          ))}
        </div>

        <ol className="relative flex flex-col gap-3">
          {items.map((it, i) => {
            const pct = (it.value / top) * 100;
            const isActive = active === i;
            return (
              <li
                key={it.label}
                className="grid items-center gap-4"
                style={{ gridTemplateColumns: `${LABEL}px 1fr` }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                tabIndex={0}
              >
                <span className="body-sm leading-tight text-ink-muted">{it.label}</span>
                <span className="relative flex h-7 items-center">
                  <motion.span
                    aria-hidden
                    className="block h-5 shrink-0 origin-left rounded-r-[4px] bg-[var(--color-ink)] transition-opacity duration-200"
                    style={{ width: `${pct}%`, minWidth: 2, opacity: active === null || isActive ? 1 : 0.4 }}
                    initial={reduceMotion ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <span
                    className="label-sm stat ml-3 whitespace-nowrap text-ink"
                  >
                    {it.display ?? it.value.toLocaleString()}
                  </span>

                  {isActive && (
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute left-0 top-full z-10 mt-2 w-max max-w-[320px] rounded-xl bg-[var(--color-ink)] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(15,15,15,0.18)]"
                    >
                      <span className="block label-sm text-ink-inverse">
                        {it.value.toLocaleString()}
                        <span className="wt-regular text-ink-inverse-quiet">
                          &nbsp;&middot;&nbsp;{Math.round((it.value / total) * 100)}% of failures
                        </span>
                      </span>
                      {it.meaning && (
                        <span className="mt-1 block body-sm text-ink-inverse-muted">{it.meaning}</span>
                      )}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ol>

        {/* Axis: baseline and ticks under the bar column. */}
        <div className="mt-3" style={{ marginLeft: LABEL }}>
          <div className="relative h-px bg-[var(--color-line-strong)]" />
          <div className="relative mt-2 h-4">
            {ticks.map((t, i) => (
              <span
                key={t}
                className={`absolute body-sm stat text-ink-quiet ${
                  i === ticks.length - 1 ? "-translate-x-full" : i === 0 ? "" : "-translate-x-1/2"
                }`}
                style={{ left: `${(t / top) * 100}%` }}
              >
                {t.toLocaleString()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {note && <p className="body-sm mt-4 text-ink-quiet">{note}</p>}

      {/* Table view for readers who cannot see the bars. */}
      <table className="sr-only">
        <caption>{title}</caption>
        <thead>
          <tr>
            <th scope="col">Reason</th>
            <th scope="col">Count</th>
            <th scope="col">Meaning</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.label}>
              <th scope="row">{it.label}</th>
              <td>{it.display ?? it.value.toLocaleString()}</td>
              <td>{it.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

/** A round axis step that gives four or five ticks. */
function niceStep(max: number) {
  const raw = max / 4;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / mag;
  const nice = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return nice * mag;
}
