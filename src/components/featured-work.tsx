"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";

export function FeaturedWork() {
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section eyebrow */}
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-3">01 / Selected work</p>
          <h2 className="heading col-span-12 mt-6 text-[32px] md:col-span-9 md:mt-0 md:text-[44px] lg:text-[52px]">
            Featured Case Studies
          </h2>
        </div>

        {/* Project list */}
        <ul className="mt-24 md:mt-32 flex flex-col gap-24 md:gap-32">
          {projects.map((p, i) => {
            const isOffset = i % 2 === 1;
            return (
              <motion.li
                key={p.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`grid grid-cols-12 gap-x-6 ${
                  isOffset ? "md:[&>div]:order-1" : ""
                }`}
              >
                {/* Image / placeholder column */}
                <div
                  className={`col-span-12 md:col-span-7 ${
                    isOffset ? "md:col-start-6" : "md:col-start-1"
                  }`}
                >
                  <Link
                    href={`/work/${p.slug}`}
                    className="group relative block aspect-[4/3] overflow-hidden bg-bg-2"
                  >
                    <div
                      className="absolute inset-0 transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                      style={{
                        background:
                          "radial-gradient(120% 80% at 30% 30%, rgba(40,180,200,0.10), rgba(10,10,9,0) 55%), linear-gradient(135deg, #16181a 0%, #0c0d0e 100%)",
                      }}
                    />
                    <span className="absolute right-5 bottom-5 text-[11px] tracking-[var(--tracking-eyebrow)] text-fg-muted uppercase">
                      {p.index}
                    </span>
                  </Link>
                </div>

                {/* Text column */}
                <div
                  className={`col-span-12 mt-8 flex flex-col justify-end gap-5 md:col-span-4 md:mt-0 ${
                    isOffset ? "md:col-start-2" : "md:col-start-9"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-line px-2.5 py-1 text-[10px] tracking-[0.14em] text-fg-muted uppercase"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="text-[11px] text-fg-faint">{p.year}</span>
                  </div>
                  <h3 className="heading text-[28px] md:text-[36px]">
                    {p.title}
                  </h3>
                  <p className="max-w-[420px] text-[15px] leading-[1.65] text-fg-muted">
                    {p.outcome}
                  </p>
                  <Link
                    href={`/work/${p.slug}`}
                    className="mt-2 inline-flex items-center gap-2 text-[13px] text-fg transition-colors hover:text-fg-muted"
                  >
                    <span>Read case study</span>
                    <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M1 5.5h9m0 0L6 1.5m4 4L6 9.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
