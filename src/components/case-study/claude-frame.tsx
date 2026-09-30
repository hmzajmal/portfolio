import { ZoomImage } from "@/components/ui/zoom-image";

/**
 * A Claude window drawn around a conversation screenshot.
 *
 * The screenshot carries the user's prompt, the assistant's reply and
 * the widget. This adds the chrome around it: a slim header and the
 * composer, so a reader sees where the widget lives without a full
 * screenshot of Claude for every frame.
 */
export function ClaudeFrame({
  src,
  alt,
  caption,
  title = "New chat",
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
  className?: string;
}) {
  return (
    <figure className={`flex min-w-0 flex-col gap-3 ${className}`}>
      <div
        className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[#FAF9F5] shadow-[0_12px_32px_rgba(15,15,15,0.08)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[rgba(15,15,15,0.06)] px-4 py-2.5">
          <div className="flex items-center gap-2.5">
            <ClaudeMark />
            <span className="label-sm text-ink">Claude</span>
            <span aria-hidden className="h-3.5 w-px bg-[var(--color-line-strong)]" />
            <span className="body-sm text-ink-quiet">{title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-flex h-6 items-center rounded-full border border-[var(--color-line)] bg-white px-2.5 body-sm text-ink-muted">
              ImagineArt
              <span
                aria-hidden
                className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#2DB56A]"
              />
            </span>
          </div>
        </div>

        {/* Conversation */}
        <div className="bg-white">
          <ZoomImage src={src} alt={alt} />
        </div>

        {/* Composer */}
        <div className="border-t border-[rgba(15,15,15,0.06)] px-4 py-3">
          <div className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-white px-3 py-2.5">
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-line)] text-ink-quiet"
            >
              <svg viewBox="0 0 16 16" width={12} height={12} fill="none" aria-hidden>
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="body-sm flex-1 text-ink-faint">Reply to Claude</span>
            <span
              aria-hidden
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#D97757] text-ink-inverse"
            >
              <svg viewBox="0 0 16 16" width={12} height={12} fill="none" aria-hidden>
                <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {caption && <figcaption className="body-sm text-ink-quiet">{caption}</figcaption>}
    </figure>
  );
}

function ClaudeMark() {
  return (
    <span
      aria-hidden
      className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#D97757] text-ink-inverse"
    >
      <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor" aria-hidden>
        <path d="M12 3l1.6 5.4L19 6.2l-3.3 4.6L21 12l-5.3 1.2L19 17.8l-5.4-2.2L12 21l-1.6-5.4L5 17.8l3.3-4.6L3 12l5.3-1.2L5 6.2l5.4 2.2L12 3z" />
      </svg>
    </span>
  );
}
