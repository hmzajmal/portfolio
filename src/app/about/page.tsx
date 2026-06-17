import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AboutCanvas } from "@/components/about/about-canvas";

export const metadata = {
  title: "About — Hamza Jamal",
  description:
    "Hamza Jamal, a product designer working on activation, retention and conversion surfaces.",
};

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <SiteNav />
      <main>
        <AboutCanvas />
      </main>
      <SiteFooter />
    </>
  );
}
