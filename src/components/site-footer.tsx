import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hmzajmal/" },
  { label: "Behance", href: "https://www.behance.net/hamzajamal" },
  { label: "Email", href: "mailto:hamza.jamal@imagine.art" },
];

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "/about" },
  { label: "Experiments", href: "#experiments" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <Link
              href="/"
              className="inline-flex h-10 w-10 items-center justify-center border border-line text-[13px] tracking-[0.05em] text-fg transition-colors hover:border-fg/30"
            >
              HJ
            </Link>
            <p className="heading mt-6 text-[20px] leading-[1.3] text-fg md:text-[22px]">
              Design with taste,
              <br />
              backed by data.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    className="text-[14px] text-fg transition-colors hover:text-fg-muted"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-5 flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[14px] text-fg transition-colors hover:text-fg-muted"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-line pt-8 text-[11px] tracking-[var(--tracking-eyebrow)] text-fg-muted uppercase md:flex-row md:items-center md:justify-between">
          <span>© 2026 Hamza Jamal</span>
          <span>Designed &amp; built by Hamza</span>
        </div>
      </div>
    </footer>
  );
}
