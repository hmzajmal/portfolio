import { Noise } from "./noise";
import { RetroGrid } from "./retro-grid";

/**
 * Hero backdrop. Layered effects:
 *  - drifting warm amber glow
 *  - subtle masked grid pattern
 *  - animated film grain (canvas)
 *  - vertical fade into the page background
 *  - retro perspective grid floor
 */
export function HeroBackdrop() {
  return (
    <div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none bg-bg"
      aria-hidden="true"
    >
      {/* Drifting warm wash */}
      <div
        className="hero-glow absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 560px at 50% 200px, rgba(233,162,59,0.28), transparent)",
        }}
      />

      {/* Masked grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_15%,#000_70%,transparent_100%)]" />

      {/* Animated film grain */}
      <Noise patternAlpha={6} patternRefreshInterval={4} />

      {/* Soften the backdrop toward the lower hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, var(--color-bg) 85%)",
        }}
      />

      {/* Retro perspective grid floor */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[360px] opacity-60"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 45%), linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 45%), linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        <RetroGrid gridColor="#c87f2e" speed={0.6} />
      </div>
    </div>
  );
}
