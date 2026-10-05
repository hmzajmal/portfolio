import { ZoomImage } from "@/components/ui/zoom-image";

/**
 * Device frames for screenshots. A browser window for desktop screens and
 * a phone bezel for mobile ones. Drawn in CSS so the screenshot inside
 * stays sharp and zoomable, unlike a flattened mockup image.
 */

export function BrowserFrame({
  src,
  alt,
  url = "imagine.art",
  dark = true,
}: {
  src: string;
  alt: string;
  url?: string;
  dark?: boolean;
}) {
  const bar = dark ? "bg-[#141416] border-[rgba(255,255,255,0.08)]" : "bg-[#F4F4F5] border-[var(--color-line)]";
  const dot = dark ? "bg-[rgba(255,255,255,0.18)]" : "bg-[rgba(15,15,15,0.14)]";
  const pill = dark
    ? "bg-[rgba(255,255,255,0.06)] text-ink-inverse-quiet"
    : "bg-white text-ink-quiet border border-[var(--color-line)]";
  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(15,15,15,0.18),0_2px_6px_rgba(15,15,15,0.08)]">
      <div className={`flex items-center gap-3 border-b px-4 py-2.5 ${bar}`}>
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        </span>
        <span className={`mx-auto inline-flex h-6 items-center rounded-md px-3 body-sm ${pill}`}>
          {url}
        </span>
        <span className="w-[54px]" aria-hidden />
      </div>
      <ZoomImage src={src} alt={alt} />
    </div>
  );
}

export function PhoneFrame({
  src,
  alt,
  statusBar,
}: {
  src: string;
  alt: string;
  /**
   * Background colour for a status bar strip above the screenshot. Use it
   * when the screenshot starts at the app header, so the island sits in
   * the strip instead of over the header.
   */
  statusBar?: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="rounded-[2.6rem] bg-[#0B0B0C] p-[9px] shadow-[0_24px_60px_rgba(15,15,15,0.22),0_2px_6px_rgba(15,15,15,0.1)] ring-1 ring-[rgba(255,255,255,0.08)]">
        <div className="relative overflow-hidden rounded-[2.05rem] bg-black">
          {statusBar ? <div aria-hidden className="h-11 w-full" style={{ background: statusBar }} /> : null}
          <ZoomImage src={src} alt={alt} />
          {/* Dynamic island */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-2.5 left-1/2 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-black"
          />
        </div>
      </div>
    </div>
  );
}
