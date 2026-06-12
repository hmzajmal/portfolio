"use client";

import { motion } from "framer-motion";
import { AmberGlow } from "./amber-glow";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden py-32 md:py-44">
      <AmberGlow position="bottom-left" size="md" intensity={0.45} />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-x-6"
        >
          <div className="col-span-12 md:col-span-9">
            <h2 className="display text-[40px] md:text-[64px] lg:text-[80px]">
              Have a product worth scaling?
            </h2>
          </div>

          <div className="col-span-12 mt-10 flex flex-col gap-6 md:col-span-3 md:mt-0 md:items-end md:justify-end">
            <a
              href="mailto:hamza.jamal@imagine.art"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-line py-2.5 pl-5 pr-2 text-[13px] text-fg transition-colors hover:border-fg/30"
            >
              <span>Book a call</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-transform group-hover:translate-x-0.5">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path
                    d="M1 5.5h9m0 0L6 1.5m4 4L6 9.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
