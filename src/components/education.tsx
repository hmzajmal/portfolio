"use client";

import { motion } from "framer-motion";

const items = [
  {
    year: "2019",
    degree: "Bachelor's Degree in Software Engineering",
    institution: "University of Engineering & Technology",
  },
  {
    year: "2020",
    degree: "User Experience Design Nanodegree",
    institution: "Udacity",
  },
];

export function Education() {
  return (
    <section className="relative border-t border-line py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-3">05 / Education</p>
          <h2 className="heading col-span-12 mt-6 text-[32px] md:col-span-9 md:mt-0 md:text-[44px] lg:text-[52px]">
            My Education
          </h2>
        </div>

        <ul className="mt-20 flex flex-col">
          {items.map((e, i) => (
            <motion.li
              key={e.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-12 gap-x-6 border-t border-line py-10 last:border-b"
            >
              <p className="col-span-12 text-[13px] text-fg-muted md:col-span-3">{e.year}</p>
              <div className="col-span-12 mt-3 md:col-span-9 md:mt-0">
                <p className="text-[18px] text-fg">{e.degree}</p>
                <p className="mt-2 text-[14px] text-fg-muted">{e.institution}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
