"use client";

import { motion } from "framer-motion";
import { AmberGlow } from "./amber-glow";

const skillTags = [
  "Stakeholders Management",
  "Active Listening",
  "Speaking Developer's Language",
  "Team Player",
  "Time Management",
  "Curiosity",
  "Leadership",
];

const books = [
  {
    title: "Never Split the Difference",
    cover: "https://framerusercontent.com/images/60GueKLsVnqy1ZbVu9SSXtzNA.jpeg",
  },
  {
    title: "Sprint",
    cover: "https://framerusercontent.com/images/iBS03x09FoyOXHennffa5vAjTMI.jpeg",
  },
];

export function AboutTeaser() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-32 md:py-40">
      <AmberGlow position="top-right" size="md" intensity={0.3} />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-3">02 / About</p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 mt-8 md:col-span-9 md:mt-0"
          >
            <h2 className="heading text-[32px] md:text-[44px] lg:text-[52px]">
              About Me
            </h2>

            <div className="mt-10 grid max-w-[760px] gap-5 text-[16px] leading-[1.7] text-fg-muted">
              <p>
                My name is Hamza Jamal, and I&apos;m a Product Designer
                specialising in UX and UI design. I&apos;m currently working at
                Imagine.art and am based in Lahore, Pakistan.
              </p>
              <p>
                Over the past years, I&apos;ve planned features, built product
                roadmaps, and collaborated with cross-functional teams across
                startups and companies in healthcare, education, hospitality,
                e-commerce, beauty, and wellness. I stay up to date with the
                latest design and AI trends.
              </p>
            </div>

            {/* Skill tag cloud */}
            <div className="mt-12 flex max-w-[640px] flex-wrap gap-2">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line bg-bg-2 px-3 py-1.5 text-[12px] text-fg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Books shelf */}
            <div className="mt-16">
              <p className="text-[14px] text-fg-muted">
                Beyond my work I read books and share knowledge through
                presentations.
              </p>
              <div className="mt-6 flex gap-4">
                {books.map((book) => (
                  <div
                    key={book.title}
                    className="relative h-[180px] w-[120px] overflow-hidden bg-bg-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
