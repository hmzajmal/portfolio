"use client";

import { motion } from "framer-motion";

const tools = [
  {
    title: "Figma",
    body: "Main tool for UI/UX Design & Prototyping",
  },
  {
    title: "AI Tools",
    body: "Google Stitch, ChatGPT, Bolt, Maze, UserTesting AI",
  },
  {
    title: "Others",
    body: "Miro, Jira, Photoshop, Illustrator, Affinity",
  },
];

export function CreativeToolbox() {
  return (
    <section className="relative border-t border-line py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-3">03 / Tools</p>
          <h2 className="heading col-span-12 mt-6 text-[32px] md:col-span-9 md:mt-0 md:text-[44px] lg:text-[52px]">
            My creative toolbox
          </h2>
        </div>

        <ul className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-line md:grid-cols-3">
          {tools.map((t, i) => (
            <motion.li
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 bg-bg p-8"
            >
              <p className="heading text-[24px] text-fg">{t.title}</p>
              <p className="text-[14px] leading-[1.6] text-fg-muted">{t.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
