"use client";

import { motion } from "framer-motion";
import { AmberGlow } from "./amber-glow";
import { CopyEmailButton } from "./copy-email-button";

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
            <h2 className="h1 text-[var(--color-ink)]">
              Have a product worth scaling?
            </h2>
          </div>

          <div className="col-span-12 mt-10 flex flex-col gap-6 md:col-span-3 md:mt-0 md:items-end md:justify-end">
            <CopyEmailButton
              label="Book a call"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-line py-2.5 px-5 text-[13px] text-fg transition-colors hover:border-fg/30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
