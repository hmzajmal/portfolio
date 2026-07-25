"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

/**
 * Standalone "Books" block. Sits between the work section and
 * testimonials. Continues the same canvas / handwritten language.
 */
export function BooksFold() {
  return (
    <section className="relative w-full py-24 md:py-32">

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start gap-10 px-6 text-left md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          Reading
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg max-w-[720px] text-[var(--color-ink-muted)]"
        >
          <span className="strong">Beyond the work</span>, I read and share
          knowledge through presentations. Two that shaped how I think about
          negotiation and shipping under pressure.
        </motion.p>

        <div className="flex flex-wrap items-end justify-start gap-10 md:gap-14">
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
          <Book
            src="/assets/book-design-of-everyday-things.png"
            title="The Design of Everyday Things"
            rotate={-2}
            delay={0.45}
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-[190px] flex-col items-start gap-4"
    >
      <div className="h-[260px] w-[180px] overflow-hidden rounded-sm shadow-[0_10px_24px_rgba(0,0,0,0.18),0_2px_4px_rgba(0,0,0,0.08)]">
        <img src={src} alt={title} className="h-full w-full object-cover" />
      </div>
      <span className="body-sm leading-[1.35] text-[var(--color-ink)]">
        {title}
      </span>
    </motion.div>
  );
}
