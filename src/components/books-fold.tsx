"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

/**
 * Standalone "Books" block. Sits between the work section and
 * testimonials. Continues the same canvas / handwritten language.
 */
export function BooksFold() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <div className="relative mx-auto flex max-w-[1080px] flex-col items-center gap-12 px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[600px] text-[18px] leading-[1.55] text-[#0F0F0F] md:text-[20px]"
          style={{ fontWeight: 500 }}
        >
          Beyond my work, I am also into book reading and sharing knowledge
          through presentations.
        </motion.p>

        <div className="flex flex-wrap items-end justify-center gap-10 md:gap-14">
          <Book
            src="/assets/book-never-split-the-difference.jpeg"
            title="Never Split the Difference"
            rotate={-4}
            delay={0.15}
          />
          <Book
            src="/assets/book-sprint.jpeg"
            title="Sprint: How to Solve Big Problems and Test New Ideas"
            rotate={3}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function Book({
  src,
  title,
  rotate,
  delay,
}: {
  src: string;
  title: string;
  rotate: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: rotate * 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-[180px] flex-col items-center gap-4"
    >
      <div className="h-[240px] w-[170px] overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.18),0_2px_4px_rgba(0,0,0,0.08)]">
        <img src={src} alt={title} className="h-full w-full object-cover" />
      </div>
      <span
        className="text-[16px] leading-[1.25] text-[#0F0F0F]"
        style={{ fontFamily: "var(--font-hand)" }}
      >
        {title}
      </span>
    </motion.div>
  );
}
