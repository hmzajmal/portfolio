import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { NextCases } from "@/components/case-study/next-cases";

type Props = {
  children: React.ReactNode;
  /** Slug of the current case study, so the "explore more" strip at the
   * bottom can exclude it. */
  currentSlug: string;
  /** Page background tint. Defaults to a soft cream — each case study can
   * override with its own hue. */
  bg?: string;
};

/**
 * Case study page shell. Reuses the same SiteNav and SiteFooter as the
 * home page so the chrome is consistent across the portfolio. Adds a
 * liquid-glass "Back to work" pill at the top of the content column.
 */
export function CaseStudyShell({ children, currentSlug, bg = "#faf9f6" }: Props) {
  return (
    <div className="min-h-screen text-[var(--color-ink)]" style={{ background: bg }}>
      <SmoothScroll />
      <SiteNav />

      <main className="pt-24 md:pt-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Link
            href="/#work"
            className="liquid-sm group inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] text-[var(--color-ink)]"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 11 11"
              fill="none"
              className="transition-transform group-hover:-translate-x-0.5"
              aria-hidden
            >
              <path
                d="M10 5.5H1m0 0L5 1.5m-4 4L5 9.5"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <span>Back to work</span>
          </Link>
        </div>
        {children}

        <NextCases currentSlug={currentSlug} />
      </main>

      <SiteFooter />
    </div>
  );
}
