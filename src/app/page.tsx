import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { OperatingPrinciples } from "@/components/operating-principles";
import { FeaturedWorksFold } from "@/components/featured-works-fold";
import { AboutMe } from "@/components/about-me";
import { BooksFold } from "@/components/books-fold";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <SiteNav />
      <main>
        <Hero />
        <AboutMe />
        <FeaturedWorksFold />
        <OperatingPrinciples />
        <BooksFold />
        <Testimonials />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
