"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    company: "Imagine.art",
    dates: "Apr 2026 to Present",
    role: "Product Designer",
    desc: "Designing AI-first creative tools used by a global community.",
    current: true,
  },
  {
    company: "Carbonteq",
    dates: "2024 to Feb 2026",
    role: "Sr. UX/UI Designer",
    desc: "Led design initiatives for enterprise clients. Established design systems and mentored junior designers.",
    current: false,
  },
  {
    company: "Arbisoft",
    dates: "2019 to 2024",
    role: "Product Designer",
    desc: "Enhanced user conversion rate from 1.79% to 11% with a user-centred design approach and a redesign of the interface into a consistent web application.",
    current: false,
  },
  {
    company: "Summer Internship",
    dates: "2018",
    role: "Visual Designer",
    desc: "Created marketing materials and websites for various clients. Collaborated with developers to ensure pixel-perfect implementation.",
    current: false,
  },
];

export function WorkExperience() {
  return (
    <section className="relative border-t border-line bg-bg-2 py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-3">04 / Job</p>
          <h2 className="heading col-span-12 mt-6 text-[32px] md:col-span-9 md:mt-0 md:text-[44px] lg:text-[52px]">
            My Work Experience
          </h2>
        </div>

        <ul className="mt-20 flex flex-col">
          {jobs.map((j, i) => (
            <motion.li
              key={j.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-12 gap-x-6 border-t border-line py-10 last:border-b"
            >
              <div className="col-span-12 flex items-center gap-3 md:col-span-3">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    j.current ? "bg-[rgb(40,180,200)]" : "bg-fg-faint"
                  }`}
                />
                <div>
                  <p className="text-[15px] text-fg">{j.company}</p>
                  <p className="text-[12px] text-fg-muted">{j.dates}</p>
                </div>
              </div>
              <div className="col-span-12 mt-5 md:col-span-9 md:mt-0">
                <p className="text-[15px] text-fg">{j.role}</p>
                <p className="mt-3 max-w-[640px] text-[14px] leading-[1.65] text-fg-muted">
                  {j.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
