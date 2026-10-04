import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { OperatingPrinciples } from "@/components/operating-principles";
import { FeaturedWorksFold } from "@/components/featured-works-fold";
import { AboutMe } from "@/components/about-me";
import { AboutOffTheClock, AboutExperience } from "@/components/about/about-canvas";
import { BooksFold } from "@/components/books-fold";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <FeaturedWorksFold />
        <AboutMe />
        <OperatingPrinciples />
        <AboutOffTheClock />
        <BooksFold />
        <AboutExperience />
        <Testimonials />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
