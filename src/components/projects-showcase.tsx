"use client";

import { motion } from "framer-motion";

const showcase = [
  { src: "https://framerusercontent.com/images/NflZVs29tF6lNwsWsdKgfBGz00.jpeg", alt: "Project sample" },
  { src: "https://framerusercontent.com/images/IsaQpwDOegOg4IwipnqrQBbR8I.jpg", alt: "Project sample" },
  { src: "https://framerusercontent.com/images/d8RteD8kZ2b2meES8GoRGKOlA68.jpeg", alt: "Dashboard analytics UX" },
  { src: "https://framerusercontent.com/images/1Mmn16KRYozvcnhmC0P3yepA.jpeg", alt: "Project sample" },
  { src: "https://framerusercontent.com/images/peesnM7hHOEWqNJDstp0JnNWRJY.jpg", alt: "Dashboard UI/UX design" },
  { src: "https://framerusercontent.com/images/1BHjYnJnA5TwaAhbBYyrI6UJoo.jpeg", alt: "UI/UX design" },
];

export function ProjectsShowcase() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading text-[32px] md:text-[44px] lg:text-[52px]"
        >
          Projects Showcase
        </motion.h2>
      </div>

      <div className="mt-16 overflow-x-auto pl-6 md:pl-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-5 pr-6 md:pr-10">
          {showcase.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[420px] w-[520px] flex-shrink-0 overflow-hidden bg-bg-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.alt} className="absolute inset-0 h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
