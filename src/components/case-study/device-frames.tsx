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

/**
 * A phone around a screenshot. The screen is a real iPhone ratio (393 x 852
 * points) with a Dynamic Island status bar drawn on top, so three phones in
 * a row come out the same height whatever the screenshots measure. The
 * screenshot fills the screen from the top; anything longer is cut at the
 * bottom, like a real device. Pass `statusBar` (a colour) when the
 * screenshot starts at an app header: the bar then sits in its own strip
 * above the screenshot instead of over it.
 */
export function PhoneFrame({
  src,
  alt,
  statusBar,
}: {
  src: string;
  alt: string;
  statusBar?: string;
}) {
  const overlay = !statusBar;
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="rounded-[14%/6.5%] bg-[#0B0B0C] p-[3%] shadow-[0_24px_60px_rgba(15,15,15,0.22),0_2px_6px_rgba(15,15,15,0.1)] ring-1 ring-[rgba(255,255,255,0.08)]">
        <div
          className="relative flex aspect-[393/852] flex-col overflow-hidden rounded-[11%/5%] bg-black"
          style={statusBar ? { background: statusBar } : undefined}
        >
          {!overlay && <StatusBar dark />}
          <div className="relative min-h-0 flex-1 [&_button]:h-full [&_img]:h-full [&_img]:object-cover [&_img]:object-top">
            <ZoomImage src={src} alt={alt} />
          </div>
          {overlay && (
            <div className="pointer-events-none absolute inset-x-0 top-0">
              <StatusBar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * iOS status bar at the Dynamic Island, drawn in points (393 wide, 54 tall)
 * so it scales with the phone. Text is part of the drawing, like the device
 * bezel, not site copy.
 */
function StatusBar({ dark = false }: { dark?: boolean }) {
  const ink = dark ? "#0B0B0C" : "#FFFFFF";
  return (
    <svg viewBox="0 0 393 54" className="block w-full" aria-hidden>
      <text x="52" y="35" fontSize="17" fontWeight="600" fill={ink} fontFamily="-apple-system, 'SF Pro Text', Inter, system-ui, sans-serif" letterSpacing="-0.3">
        9:41
      </text>
      <rect x="133.5" y="11" width="126" height="37" rx="18.5" fill="#0B0B0C" />
      <g fill={ink}>
        <rect x="294" y="31" width="3" height="4" rx="0.8" />
        <rect x="299" y="29" width="3" height="6" rx="0.8" />
        <rect x="304" y="26.5" width="3" height="8.5" rx="0.8" />
        <rect x="309" y="24" width="3" height="11" rx="0.8" />
      </g>
      <path d="M327 27.5a10.5 10.5 0 0 1 14 0l-1.6 1.6a8.3 8.3 0 0 0-10.8 0zm2.9 3a6.4 6.4 0 0 1 8.2 0l-1.6 1.6a4.2 4.2 0 0 0-5 0zm2.9 3a2.5 2.5 0 0 1 2.4 0l-1.2 1.4z" fill={ink} />
      <rect x="350" y="23.5" width="25" height="12" rx="3.5" fill="none" stroke={ink} strokeOpacity="0.4" />
      <rect x="351.5" y="25" width="22" height="9" rx="2" fill={ink} />
      <path d="M376.5 27v5a2.5 2.5 0 0 0 0-5z" fill={ink} fillOpacity="0.4" />
    </svg>
  );
}
