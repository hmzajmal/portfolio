import { SiteNav, type NavSection } from "@/components/site-nav";
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
  /** Optional table of contents. When set, the nav shows these text-only
   * tabs instead of the home tabs. Each id must match a `<section id>`. */
  sections?: NavSection[];
};

/**
 * Case study page shell. Reuses the same SiteNav and SiteFooter as the
 * home page so the chrome is consistent across the portfolio. SiteNav
 * swaps its identity cluster for a Back pill on /work routes.
 */
export function CaseStudyShell({ children, currentSlug, bg = "#faf9f6", sections }: Props) {
  return (
    <div className="min-h-screen text-ink" style={{ background: bg }}>
      <SmoothScroll />
      <SiteNav sections={sections} />

      <main className="pt-24 md:pt-28">
        {children}

        <NextCases currentSlug={currentSlug} />
      </main>

      <SiteFooter />
    </div>
  );
}
