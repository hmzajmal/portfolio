/**
 * Grid backdrop for a section — 32×32 dot grid using the page's
 * `--color-grid` token, softly masked at the top and bottom so it fades
 * in and out of the surrounding noise/bloom backdrop.
 *
 * Drop inside any `<section className="relative">` to give it graph-paper
 * texture without hard edges.
 */
export function SectionGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    />
  );
}
