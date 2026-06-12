"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative border-t border-line py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-3">
            06 / Testimonials
          </p>
          <h2 className="heading col-span-12 mt-6 text-[28px] md:col-span-9 md:mt-0 md:text-[40px]">
            See what people have to say
          </h2>
        </div>

        <ul className="mt-24 grid grid-cols-1 gap-16 md:mt-32 md:grid-cols-3 md:gap-10">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-8"
            >
              <p className="quote text-[18px] leading-[1.55] text-fg/95">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex flex-col gap-1 border-t border-line pt-5">
                <span className="text-[14px] text-fg">{t.name}</span>
                <span className="text-[12px] text-fg-muted">{t.role}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
