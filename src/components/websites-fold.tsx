"use client";

import { motion } from "framer-motion";
import { SectionGrid } from "@/components/ui/section-grid";

type Site = {
  name: string;
  line: string;
  meta: string;
  href: string;
  /** Tall capture of the page, top first. Scrolls inside the window on hover. */
  image: string;
};

/** Add a site by adding an entry. One site gets the wide layout, more get a grid. */
const SITES: Site[] = [
  {
    name: "Frame 1.0",
    line: "Launch page for ImagineArt's avatar model. Record yourself once, get an avatar ready for any video.",
    meta: "ImagineArt · 2026 · Design and build",
    href: "https://imagine-landing-pages-copy.vercel.app/frame/",
    image: "/websites/frame.jpg",
  },
];

/**
 * Websites. Each one is a window onto a capture of the real page: still at
 * the top until hovered, then it travels down the page. The whole card
 * links to the live site.
 */
export function WebsitesFold() {
  const single = SITES.length === 1;
  return (
    <section id="websites" className="relative w-full py-24 md:py-32">
      <SectionGrid />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h2 text-ink"
        >
          Websites
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg mt-4 max-w-[720px] text-ink-muted"
        >
          Pages I designed and built. Hover to look down the page, click to open it.
        </motion.p>

        <div className={`mt-14 grid grid-cols-1 gap-8 ${single ? "" : "md:grid-cols-2"}`}>
          {SITES.map((site, i) => (
            <SiteCard key={site.href} site={site} wide={single} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteCard({ site, wide, delay }: { site: Site; wide: boolean; delay: number }) {
  return (
    <motion.a
      href={site.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid grid-cols-1 gap-6 outline-none ${wide ? "lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-end lg:gap-12" : ""}`}
    >
      {/* Window. The capture hangs from the top; on hover its top edge moves
          to the bottom of the window while it shifts up by its own height,
          so it ends exactly on its last row whatever the sizes are. */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[var(--color-canvas-warm)] ring-1 ring-[var(--color-line)] transition-shadow duration-500 group-hover:shadow-[0_24px_60px_rgba(15,15,15,0.14)] group-focus-visible:ring-2 group-focus-visible:ring-[#5ECCDD]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.image}
          alt={`${site.name}, the page from the top`}
          loading="lazy"
          className="absolute top-0 left-0 block w-full translate-y-0 transition-[top,translate] duration-[1200ms] ease-out group-hover:top-full group-hover:-translate-y-full group-hover:duration-[14000ms] group-hover:ease-linear motion-reduce:transition-none motion-reduce:group-hover:top-0 motion-reduce:group-hover:translate-y-0"
        />
      </div>

      <div>
        <p className="eyebrow">{site.meta}</p>
        <h3 className="h3 mt-3 text-ink">{site.name}</h3>
        <p className="body mt-2 max-w-[460px] text-ink-muted">{site.line}</p>
        <span className="label-sm mt-5 inline-flex items-center gap-2 text-ink">
          Visit site
          <svg viewBox="0 0 16 16" width={14} height={14} fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M4.5 11.5l7-7M11.5 4.5H6M11.5 4.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </motion.a>
  );
}
