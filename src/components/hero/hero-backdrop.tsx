/**
 * Page-wide backdrop. Absolute-positioned, sized to the full document, so
 * different vertical bands of the page show different color blooms as you
 * scroll — the backdrop doesn't follow the viewport, it stays in place
 * behind the content.
 *
 * Blooms are placed at fractional vh offsets so they don't need to know
 * the exact page height; they naturally spread across the scroll depth.
 */

const NOISE_URI = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)'/>
  </svg>`
)}`;

type Bloom = {
  color: string;
  top: string; // top offset in vh
  left: string; // horizontal offset (percent or px)
  size: string; // width of the bloom
  opacity: number;
};

const BLOOMS: Bloom[] = [
  // Hero — muted purple, upper-left
  { color: "107,84,120", top: "-10vh", left: "-10%", size: "70vw", opacity: 0.42 },
  // Hero counter-bloom — warm dusty rose, right
  { color: "158,138,148", top: "20vh", left: "55%", size: "60vw", opacity: 0.32 },
  // Operating principles band — soft amber
  { color: "198,158,102", top: "95vh", left: "-5%", size: "70vw", opacity: 0.28 },
  // Featured works band — cool teal
  { color: "100,150,168", top: "180vh", left: "40%", size: "80vw", opacity: 0.32 },
  // Featured works lower — muted pink
  { color: "180,120,150", top: "280vh", left: "-10%", size: "70vw", opacity: 0.30 },
  // Books band — soft sage
  { color: "130,155,130", top: "380vh", left: "50%", size: "70vw", opacity: 0.26 },
  // Testimonials — return to purple
  { color: "107,84,120", top: "460vh", left: "-5%", size: "80vw", opacity: 0.34 },
  // CTA — warm ember
  { color: "180,120,90", top: "560vh", left: "30%", size: "80vw", opacity: 0.30 },
];

export function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Base canvas */}
      <div className="absolute inset-0 bg-[var(--color-canvas)]" />

      {/* Multi-band color blooms */}
      {BLOOMS.map((b, i) => (
        <div
          key={i}
          className="absolute aspect-square"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            background: `radial-gradient(closest-side, rgba(${b.color},${b.opacity}), rgba(${b.color},${b.opacity * 0.35}) 55%, transparent 80%)`,
            filter: "blur(40px)",
          }}
        />
      ))}

      {/* Fine noise grain — spans the whole document */}
      <div
        className="absolute inset-0 opacity-[0.42] mix-blend-multiply"
        style={{
          backgroundImage: `url("${NOISE_URI}")`,
          backgroundSize: "220px 220px",
        }}
      />
    </div>
  );
}
