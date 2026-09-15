"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { CopyEmailButton } from "@/components/copy-email-button";
import {
  Eyebrow,
  Handwritten,
  Selectable,
  SelectionFrame,
  StickyPill,
} from "@/components/ui/primitives";
import { SectionGrid } from "@/components/ui/section-grid";

/* ──────────── Data ──────────── */

const PHOTOS = [
  {
    src: "/assets/moments/usability-session.avif",
    caption: "Usability session",
    span: "md:col-span-2 md:row-span-2",
    position: "50% 40%",
  },
  {
    // Tall 1280x2276 portrait: needs a 1x2 tile, not a square one.
    src: "/assets/moments/design-system-kss.avif",
    caption: "Design system walkthrough",
    span: "md:col-span-1 md:row-span-2",
    position: "50% 30%",
  },
  {
    src: "https://framerusercontent.com/images/Jh1DoeHZzXuOMtEbOm2dyELUEMg.jpeg",
    caption: "Presentation",
    span: "md:col-span-1",
    position: "50% 35%",
  },
  {
    src: "https://framerusercontent.com/images/M0w2G5eAZBFQxu2RQHm3jQ7cr64.jpg",
    caption: "Client meetup",
    span: "md:col-span-1",
    position: "50% 35%",
  },
  {
    src: "https://framerusercontent.com/images/FBnjisDxTBMNvLTeW8PzK7oePQ.jpg",
    caption: "Hackathon",
    span: "md:col-span-2",
    position: "50% 35%",
  },
  {
    src: "/assets/moments/wireframing.avif",
    caption: "Wireframing",
    span: "md:col-span-1",
    position: "50% 50%",
  },
  {
    src: "/assets/moments/brainstorming.avif",
    caption: "Brainstorming",
    span: "md:col-span-1",
    position: "50% 50%",
  },
  {
    src: "https://framerusercontent.com/images/uG8SLrRRyn67t7vrkSG81kVnH8.jpeg",
    caption: "Travel",
    span: "md:col-span-2",
    position: "50% 45%",
  },
  {
    src: "https://framerusercontent.com/images/kcoRT6A15oNYInIrmXZMvKJ03Y.jpeg",
    caption: "Juniper",
    span: "md:col-span-2",
    position: "50% 45%",
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

export function AboutOffTheClock() {
  return (
    <div className="relative w-full py-24 md:py-32">
      {/* Grid lives only behind card sections (work, bento) where it never
          sits under running text. */}
      <SectionGrid />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10">
        <PhotoStrip />
      </div>
    </div>
  );
}

export function AboutExperience() {
  return (
    <section id="experience" className="relative w-full py-24 md:py-32">
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-32 px-6 md:gap-40 md:px-10">
        <TimelineBlock />
        <SkillsBlock />
        <CertsBlock />
        <CommunityBlock />
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
          <h2 className="h2 mt-4 text-ink">
            Some moments from this year.
          </h2>
        </div>
        <Handwritten className="hidden title md:block" rotate={3}>
          mostly cats &amp; carry-ons
        </Handwritten>
      </div>

      <div className="relative grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-4">
        {PHOTOS.map((p, i) => (
          <BentoTile key={p.caption} photo={p} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}

function BentoTile({
  photo,
  delay,
}: {
  photo: { src: string; caption: string; span: string; position: string };
  delay: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group liquid relative overflow-hidden rounded-2xl p-1.5 ${photo.span}`}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        loading="lazy"
        style={{ objectPosition: photo.position }}
        className="h-full w-full rounded-xl object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <figcaption className="eyebrow absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1.5 text-ink-inverse opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}

/* Story stickies moved to home page — see components/operating-principles.tsx */

/* ──────────── 4. Experience ──────────── */

function TimelineBlock() {
  return (
    <section className="relative">
      <h2 className="h1 text-ink">Experience</h2>

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
              className="text-ink title"
              style={{ letterSpacing: "-0.005em" }}
            >
              {job.company}
            </p>
            <p
              className="mt-0.5 text-ink title"
              style={{ letterSpacing: "-0.005em" }}
            >
              {job.role}
            </p>
          </div>
          <p
            className="stat whitespace-nowrap body-sm text-ink-muted md:label"
          >
            {job.dates}
          </p>
        </div>
        <p className="body mt-4 max-w-[720px] text-ink-muted">
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
    <div className="liquid-sm mt-1 flex h-10 w-10 items-center justify-center rounded-lg text-ink md:h-11 md:w-11">
      <span
        className="label"
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
        <h2 className="h2 mt-4 text-ink">
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
            whileHover={{ y: -3, backgroundColor: "#0F0F0F", color: "var(--color-ink-inverse)" }}
            className="liquid-sm inline-flex items-center rounded-full px-4 py-2 body-sm text-ink"
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
        <h2 className="h2 text-ink">
          Courses &amp; Certifications
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
              className="body text-ink"
              style={{ fontWeight: 500 }}
            >
              {c.title}
            </p>
            <p className="body-sm text-ink-muted">
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
        <h2 className="h2 mt-4 text-ink">
          When I&apos;m not in Figma.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-ink-muted body-lg">
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
          <span className="text-ink-quiet eyebrow">
            Certified Mentor →
          </span>
        </a>
      </div>
    </section>
  );
}
