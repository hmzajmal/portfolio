import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { AboutFold } from "@/components/about-fold";
import { FeaturedWorksFold } from "@/components/featured-works-fold";
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
        <AboutFold />
        <FeaturedWorksFold />
        <BooksFold />
        <Testimonials />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
