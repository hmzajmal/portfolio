import Link from "next/link";

type Props = {
  children: React.ReactNode;
  /** Page background tint. Defaults to OdeToBeauty lavender cream. */
  bg?: string;
};

/**
 * Light themed shell for case study pages.
 * Wraps content with its own light nav + footer so the dark home shell
 * doesn't bleed in. The bg prop lets each case study set its own tint
 * (Ode to Beauty lavender, Walter's cream, plain white, etc).
 */
export function CaseStudyShell({ children, bg = "#faf9f6" }: Props) {
  return (
    <div className="min-h-screen text-[#171717]" style={{ background: bg }}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 md:py-6"
          style={{ background: bg }}
        >
          <Link
            href="/"
            className="group flex h-10 w-10 items-center justify-center border border-[rgba(0,0,0,0.15)] text-[13px] tracking-[0.05em] text-[#171717] transition-colors hover:border-[rgba(0,0,0,0.4)]"
          >
            HJ
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/#mywork" className="text-[13px] text-[#171717] transition-opacity hover:opacity-60">
              Work
            </Link>
            <span className="text-[rgba(0,0,0,0.25)]">·</span>
            <Link href="/#about" className="text-[13px] text-[#171717] transition-opacity hover:opacity-60">
              About
            </Link>
            <span className="text-[rgba(0,0,0,0.25)]">·</span>
            <Link href="/#experiments" className="text-[13px] text-[#171717] transition-opacity hover:opacity-60">
              Experiments
            </Link>
          </nav>
          <a
            href="https://calendly.com/hmzajmal911/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full bg-[#171717] px-5 py-2 text-[13px] text-white transition-opacity hover:opacity-90"
          >
            Book a call
          </a>
        </div>
      </header>

      <main className="pt-28 md:pt-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-full border border-[rgba(0,0,0,0.15)] bg-white/60 px-4 py-2 text-[13px] text-[#171717] backdrop-blur-sm transition-colors hover:border-[rgba(0,0,0,0.35)] hover:bg-white"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 11 11"
              fill="none"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path d="M10 5.5H1m0 0L5 1.5m-4 4L5 9.5" stroke="currentColor" strokeLinecap="round" />
            </svg>
            <span>Back to work</span>
          </Link>
        </div>
        {children}
      </main>

      <footer className="border-t border-[rgba(0,0,0,0.1)]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <span className="text-[12px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">
            © 2026 Hamza Jamal
          </span>
          <div className="flex items-center gap-6 text-[13px] text-[#171717]">
            <a href="https://www.linkedin.com/in/hamzajamal-design/" target="_blank" rel="noreferrer noopener" className="transition-opacity hover:opacity-60">
              LinkedIn
            </a>
            <a href="https://www.behance.net/hmzajmal91ce55" target="_blank" rel="noreferrer noopener" className="transition-opacity hover:opacity-60">
              Behance
            </a>
            <a href="mailto:hamza.jamal@imagine.art" className="transition-opacity hover:opacity-60">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
