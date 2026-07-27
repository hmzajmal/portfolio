import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hmzajmal/" },
  { label: "Behance", href: "https://www.behance.net/hamzajamal" },
  { label: "Email", href: "mailto:hmzajmal911@gmail.com" },
];

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "/about" },
];

const NOISE_URI = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)'/>
  </svg>`
)}`;

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0E1014] text-white">
      {/* Warm ember bloom, lower-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[80%] w-[70%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(180,120,90,0.28), rgba(180,120,90,0.10) 55%, transparent 80%)",
          filter: "blur(35px)",
        }}
      />
      {/* Cool violet bloom, upper-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[20%] -right-[10%] h-[80%] w-[70%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(107,84,120,0.32), rgba(107,84,120,0.12) 55%, transparent 80%)",
          filter: "blur(35px)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-screen"
        style={{
          backgroundImage: `url("${NOISE_URI}")`,
          backgroundSize: "220px 220px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <Link
              href="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[13px] tracking-[0.05em] text-white transition-colors hover:border-white/40"
            >
              HJ
            </Link>
            <p
              className="mt-6 text-[20px] leading-[1.3] text-white md:text-[22px]"
              style={{ fontVariationSettings: '"wght" 500, "opsz" 22, "wdth" 100', letterSpacing: "-0.01em" }}
            >
              Design with taste,
              <br />
              backed by data.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="eyebrow text-white/50">Navigate</p>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    className="text-[14px] text-white/85 transition-colors hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow text-white/50">Elsewhere</p>
            <ul className="mt-5 flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[14px] text-white/85 transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-8 text-[11px] tracking-[var(--tracking-eyebrow)] uppercase text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Hamza Jamal</span>
          <span>Designed &amp; built by Hamza</span>
        </div>
      </div>
    </footer>
  );
}
