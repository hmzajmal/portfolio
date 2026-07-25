"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { CopyEmailButton } from "@/components/copy-email-button";
import {
  CanvasGrid,
  Eyebrow,
  Handwritten,
  Polaroid,
  Selectable,
  SelectionFrame,
  StickyPill,
} from "@/components/ui/primitives";

/* ──────────── Data ──────────── */

const PHOTOS = [
  {
    src: "https://framerusercontent.com/images/Jh1DoeHZzXuOMtEbOm2dyELUEMg.jpeg",
    caption: "Presentation",
    rotate: -3,
  },
  {
    src: "https://framerusercontent.com/images/M0w2G5eAZBFQxu2RQHm3jQ7cr64.jpg",
    caption: "Client meetup",
    rotate: 2,
  },
  {
    src: "https://framerusercontent.com/images/kcoRT6A15oNYInIrmXZMvKJ03Y.jpeg",
    caption: "Juniper",
    rotate: -2,
  },
  {
    src: "https://framerusercontent.com/images/uG8SLrRRyn67t7vrkSG81kVnH8.jpeg",
    caption: "Travel",
    rotate: 3,
  },
  {
    src: "https://framerusercontent.com/images/FBnjisDxTBMNvLTeW8PzK7oePQ.jpg",
    caption: "Hackathon",
    rotate: -1,
  },
];

type Job = {
  company: string;
  role: string;
  dates: string;
  desc: string;
  logo?: string;
};

const JOBS: Job[] = [
  {
    company: "ImagineArt",
    role: "Product Designer",
    dates: "Apr 2026 – Present",
    desc: "Designing AI creative tools used by a global community. Ownership of activation, retention, and monetization surfaces across web and mobile.",
    logo: "/assets/logos/imagineart.png",
  },
  {
    company: "Carbonteq",
    role: "Sr. UX/UI Designer",
    dates: "2024 – Feb 2026",
    desc: "Led design for enterprise clients across finance, logistics, and healthcare. Established a shared design system and mentored juniors on outcome-driven work.",
    logo: "/assets/logos/carbonteq.png",
  },
  {
    company: "Arbisoft",
    role: "Product Designer",
    dates: "2019 – 2024",
    desc: "Redesigned the core web application with a user-centered process; lifted conversion from 1.79% to 11% over the first two quarters after launch.",
    logo: "/assets/logos/arbisoft.svg",
  },
  {
    company: "Summer Internship",
    role: "Visual Designer",
    dates: "2018",
    desc: "Produced marketing materials and websites for a handful of clients, working alongside engineers to keep the shipped work pixel-accurate to spec.",
  },
];

const EDUCATION = {
  degree: "Bachelor in Software Engineering",
  school: "University of Engineering and Technology, Taxila",
  dates: "Oct 2015 to Aug 2019",
};

const CERTIFICATIONS = [
  { title: "Nanodegree, User Experience Design", org: "Udacity", date: "Nov 2020 to Jan 2021" },
  { title: "Accessibility-First Design", org: "LinkedIn", date: "Jul 2023" },
  { title: "Hands-On with Design Systems", org: "LinkedIn", date: "Jun 2023" },
  { title: "Presenting Technical Information with Stories", org: "LinkedIn", date: "Nov 2022" },
  { title: "Designing Emotion: How To Use Design To Move People", org: "LinkedIn", date: "Apr 2020" },
  { title: "UX Design: Userflows, Ideation, Storyboarding", org: "LinkedIn", date: "May 2020" },
];

const SKILLS = [
  "User Interviews",
  "Usability Testing",
  "A/B Testing",
  "Proto Personas",
  "Competitor Analysis",
  "Information Architecture",
  "User Flows",
  "Concept Sketches",
  "Customer Journey Mapping",
  "Wireframes",
  "Prototypes & Mockups",
  "Design Systems",
  "Presentation",
  "Design Handoff",
  "Design Strategy",
  "Agile / Scrum",
];

/* ──────────── Canvas ──────────── */

export function AboutCanvas() {
  return (
    <div className="relative w-full pt-[88px]">
      <CanvasGrid className="absolute inset-0 z-0 opacity-60" />

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-32 px-6 pb-32 pt-16 md:gap-40 md:px-10 md:pt-24">
        <HeroBlock />
        <PhotoStrip />
        <TimelineBlock />
        <SkillsBlock />
        <CertsBlock />
        <CommunityBlock />
        <LetsTalk />
      </div>
    </div>
  );
}

/* ──────────── 1. Hero ──────────── */

function HeroBlock() {
  return (
    <section className="relative">
      <div className="flex flex-col items-start text-left">
        <Eyebrow>About</Eyebrow>

        <h1 className="display mt-6 text-[var(--color-ink)]">About</h1>

        <p className="body-lg mt-8 max-w-[720px] text-[var(--color-ink-muted)]">
          <span className="strong">Hamza Jamal</span>, a product designer with
          5+ years shipping activation, retention and conversion surfaces.
          Worked on e-learning, online games, internal tools, and now AI
          creative products.
        </p>
      </div>
    </section>
  );
}

/* ──────────── 2. Photo strip ──────────── */

function PhotoStrip() {
  return (
    <section className="relative">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <Eyebrow>Off the clock</Eyebrow>
          <h2 className="h2 mt-4 text-[var(--color-ink)]">
            Some moments from this year.
          </h2>
        </div>
        <Handwritten className="hidden text-[20px] md:block" rotate={3}>
          mostly cats &amp; carry-ons
        </Handwritten>
      </div>

      <div className="relative grid grid-cols-2 gap-6 md:grid-cols-5">
        {PHOTOS.map((p, i) => (
          <div key={p.caption} className="flex justify-center">
            <Polaroid
              src={p.src}
              alt={p.caption}
              caption={p.caption}
              rotate={p.rotate}
              delay={i * 0.06}
              width={200}
              height={240}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* Story stickies moved to home page — see components/operating-principles.tsx */

/* ──────────── 4. Experience ──────────── */

function TimelineBlock() {
  return (
    <section className="relative">
      <h2 className="h1 text-[var(--color-ink)]">Experience</h2>

      <ul className="mt-14 flex flex-col">
        {JOBS.map((j, i) => (
          <ExperienceRow key={j.company} job={j} delay={i * 0.05} />
        ))}
      </ul>
    </section>
  );
}

function ExperienceRow({ job, delay }: { job: Job; delay: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-[40px_1fr] gap-4 border-t border-[var(--color-line)] py-10 last:border-b md:grid-cols-[44px_1fr] md:gap-5"
    >
      <CompanyBadge name={job.company} logo={job.logo} />
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <div>
            <p
              className="text-[17px] text-[var(--color-ink)] md:text-[18px]"
              style={{ fontVariationSettings: '"wght" 600, "opsz" 18, "wdth" 100', letterSpacing: "-0.005em" }}
            >
              {job.company}
            </p>
            <p
              className="mt-0.5 text-[17px] text-[var(--color-ink)] md:text-[18px]"
              style={{ fontVariationSettings: '"wght" 600, "opsz" 18, "wdth" 100', letterSpacing: "-0.005em" }}
            >
              {job.role}
            </p>
          </div>
          <p
            className="stat whitespace-nowrap text-[14px] text-[var(--color-ink-muted)] md:text-[15px]"
            style={{ fontVariationSettings: '"wght" 500, "opsz" 14, "wdth" 100' }}
          >
            {job.dates}
          </p>
        </div>
        <p className="body-text mt-4 max-w-[720px] text-[var(--color-ink-muted)]">
          {job.desc}
        </p>
      </div>
    </motion.li>
  );
}

function CompanyBadge({ name, logo }: { name: string; logo?: string }) {
  if (logo) {
    return (
      <div className="liquid-sm mt-1 h-10 w-10 overflow-hidden rounded-lg md:h-11 md:w-11">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={`${name} logo`} className="h-full w-full object-contain p-1.5" />
      </div>
    );
  }
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="liquid-sm mt-1 flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-ink)] md:h-11 md:w-11">
      <span
        className="text-[15px] md:text-[16px]"
        style={{ fontVariationSettings: '"wght" 600, "opsz" 16, "wdth" 100' }}
      >
        {initial}
      </span>
    </div>
  );
}

/* ──────────── 5. Skills ──────────── */

function SkillsBlock() {
  return (
    <section className="relative">
      <div className="mb-12">
        <Eyebrow>Toolbox</Eyebrow>
        <h2 className="h2 mt-4 text-[var(--color-ink)]">
          Skills I lean on.
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {SKILLS.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, backgroundColor: "#0F0F0F", color: "#FFFFFF" }}
            className="liquid-sm inline-flex items-center rounded-full px-4 py-2 text-[14px] text-[var(--color-ink)]"
            style={{ fontWeight: 500 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

/* ──────────── 6. Certifications ──────────── */

function CertsBlock() {
  return (
    <section className="relative">
      <div className="mb-12">
        <Eyebrow>Courses &amp; Certifications</Eyebrow>
        <h2 className="h2 mt-4 text-[var(--color-ink)]">
          Things I&apos;ve studied.
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {CERTIFICATIONS.map((c, i) => (
          <motion.li
            key={c.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="liquid flex flex-col gap-1 rounded-xl px-5 py-4"
          >
            <p
              className="text-[15px] text-[var(--color-ink)]"
              style={{ fontWeight: 600 }}
            >
              {c.title}
            </p>
            <p className="text-[13px] text-[rgba(0,0,0,0.55)]">
              {c.org} · {c.date}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

/* ──────────── 7. Community ──────────── */

function CommunityBlock() {
  return (
    <section className="relative">
      <div className="mb-12">
        <Eyebrow>Community</Eyebrow>
        <h2 className="h2 mt-4 text-[var(--color-ink)]">
          When I&apos;m not in Figma.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-[18px] leading-[1.6] text-[var(--color-ink)]/85">
            I read books, watch documentaries, and mentor designers on ADPList.
            I&apos;m an active member of the designer community in Lahore and
            online.
          </p>
        </div>
        <a
          href="https://adplist.org/certifications/79239"
          target="_blank"
          rel="noreferrer noopener"
          className="liquid group flex flex-col items-center justify-center gap-3 rounded-xl px-6 py-8 transition-transform hover:-translate-y-1"
        >
          <img
            src="https://framerusercontent.com/images/afD174xm2bPhzPKDPt9HH0mbA4.png"
            alt="ADPList Certified Mentor"
            className="h-16 w-auto object-contain"
          />
          <span className="text-[12px] tracking-[0.14em] text-[rgba(0,0,0,0.5)] uppercase">
            Certified Mentor →
          </span>
        </a>
      </div>
    </section>
  );
}

/* ──────────── 8. CTA ──────────── */

function LetsTalk() {
  return (
    <section className="relative" id="contact">
      <div className="relative flex flex-col items-start overflow-hidden rounded-3xl bg-[#0F0F0F] px-8 py-20 text-left md:px-16 md:py-28">
        <Eyebrow className="text-white/60">Say hi</Eyebrow>
        <h2 className="display mt-6 text-white">Let&apos;s talk.</h2>
        <p className="body-lg mt-6 max-w-[620px] text-white/70">
          Open to thoughtful projects in growth, activation, and AI products.
          The fastest way to reach me is email.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-start gap-3">
          <CopyEmailButton
            label="Email me"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[14px] text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
          />
          <a
            href="https://www.linkedin.com/in/hamzajamal-design/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-[14px] text-white transition-colors hover:border-white"
            style={{ fontWeight: 700 }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
