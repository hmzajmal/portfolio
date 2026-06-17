"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion } from "framer-motion";
import { useGlobalCursor } from "@/lib/use-global-cursor";
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

const STORY_STICKIES = [
  {
    tone: "yellow" as const,
    rotate: -3,
    heading: "Research over assumption.",
    body: "Every screen starts with a real user problem. Interviews, support tickets, session replays. No designing in a vacuum.",
  },
  {
    tone: "pink" as const,
    rotate: 2,
    heading: "Ship the boring parts.",
    body: "Empty states, error states, edge cases, design systems. The unglamorous parts are where the product actually lives.",
  },
  {
    tone: "mint" as const,
    rotate: -2,
    heading: "Move the metric.",
    body: "Activation, retention, conversion. If the design does not move a number, it is decoration. Outcomes over aesthetics.",
  },
  {
    tone: "blue" as const,
    rotate: 3,
    heading: "Engineers in the room.",
    body: "Best designs are co-authored. I pair with engineering from kickoff so what ships matches what was specced.",
  },
];

const JOBS = [
  {
    company: "Imagine.art",
    dates: "Apr 2026 to Present",
    role: "Product Designer",
    desc: "Designing AI creative tools for a global community. Activation, retention, monetization surfaces.",
    current: true,
  },
  {
    company: "Carbonteq",
    dates: "2024 to Feb 2026",
    role: "Sr. UX/UI Designer",
    desc: "Led design for enterprise clients, established systems, mentored juniors.",
    current: false,
  },
  {
    company: "Arbisoft",
    dates: "2019 to 2024",
    role: "Product Designer",
    desc: "Lifted conversion from 1.79% to 11% with a user-centered redesign of the core web app.",
    current: false,
  },
  {
    company: "Summer Internship",
    dates: "2018",
    role: "Visual Designer",
    desc: "Marketing materials and websites for various clients, working with engineers on pixel-perfect handoff.",
    current: false,
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
    <div className="relative w-full bg-[var(--color-canvas)] pt-[88px]">
      <CanvasGrid className="absolute inset-0 z-0 opacity-60" />

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-32 px-6 pb-32 pt-16 md:gap-40 md:px-10 md:pt-24">
        <HeroBlock />
        <PhotoStrip />
        <StoryStickies />
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
      <div className="flex flex-col items-center text-center">
        <Eyebrow>01 / About</Eyebrow>

        <h1
          className="relative mt-6 inline-block text-[#0F0F0F]"
          style={{
            fontSize: "clamp(72px, 14vw, 200px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          ABOUT
          <SelectionFrame color="#0F0F0F" inset={18} />
        </h1>

        <p className="mt-12 max-w-[760px] text-[20px] leading-[1.55] text-[#0F0F0F] md:text-[24px]">
          I&apos;m{" "}
          <Selectable>Hamza Jamal</Selectable>, a product designer with{" "}
          <Selectable>6+ years</Selectable> shipping{" "}
          <Selectable>activation, retention and conversion</Selectable>{" "}
          surfaces. I&apos;ve worked on e-learning, online games, internal
          tools, and now AI creative products.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <StickyPill tone="yellow" rotate={-3}>
            Currently at Imagine.art
          </StickyPill>
          <StickyPill tone="pink" rotate={2}>
            Available now
          </StickyPill>
          <StickyPill tone="mint" rotate={-1}>
            Lahore, PK
          </StickyPill>
        </div>

        <Handwritten
          className="mt-10 text-[22px] text-[var(--color-ink-muted)]"
          rotate={-2}
        >
          scroll for the long version
        </Handwritten>
      </div>
    </section>
  );
}

/* ──────────── 2. Photo strip ──────────── */

function PhotoStrip() {
  const cursor = useGlobalCursor();

  return (
    <section className="relative">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <Eyebrow>02 / Off the clock</Eyebrow>
          <h2
            className="mt-4 text-[#0F0F0F]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Some moments from this year.
          </h2>
        </div>
        <Handwritten className="hidden text-[20px] md:block" rotate={3}>
          mostly cats &amp; carry-ons
        </Handwritten>
      </div>

      <div className="relative grid grid-cols-2 gap-6 md:grid-cols-5">
        {PHOTOS.map((p, i) => {
          const drift = cursor.active
            ? {
                x: (cursor.x - window.innerWidth / 2) * 0.012 * (i % 2 ? 1 : -1),
                y: (cursor.y - window.innerHeight / 2) * 0.008,
              }
            : { x: 0, y: 0 };

          return (
            <motion.div
              key={p.caption}
              animate={drift}
              transition={{ type: "spring", stiffness: 60, damping: 18, mass: 0.6 }}
              className="flex justify-center"
            >
              <Polaroid
                src={p.src}
                alt={p.caption}
                caption={p.caption}
                rotate={p.rotate}
                delay={i * 0.06}
                width={200}
                height={240}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ──────────── 3. Story stickies ──────────── */

function StoryStickies() {
  return (
    <section className="relative">
      <div className="mb-14 text-center">
        <Eyebrow>03 / Operating principles</Eyebrow>
        <h2
          className="mt-4 text-[#0F0F0F]"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          What goes into my work.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {STORY_STICKIES.map((s, i) => (
          <StoryCard key={s.heading} {...s} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}

function StoryCard({
  tone,
  rotate,
  heading,
  body,
  delay,
}: {
  tone: "yellow" | "pink" | "mint" | "blue";
  rotate: number;
  heading: string;
  body: string;
  delay: number;
}) {
  const TONE_BG: Record<typeof tone, string> = {
    yellow: "#FFE99E",
    pink: "#FFB7C9",
    mint: "#B7E8C8",
    blue: "#A9C4FF",
  };
  return (
    <motion.div
      data-cursor="drag"
      drag
      dragMomentum={false}
      dragElastic={0.15}
      whileDrag={{ scale: 1.04, rotate: 0, zIndex: 30, cursor: "grabbing" }}
      initial={{ opacity: 0, y: 24, rotate: rotate * 1.6 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ rotate: 0, y: -6 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-md p-8 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_18px_44px_rgba(0,0,0,0.08)]"
      style={{ background: TONE_BG[tone], touchAction: "none" }}
    >
      <h3
        className="text-[24px] text-[#0F0F0F] md:text-[28px]"
        style={{ fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.15 }}
      >
        {heading}
      </h3>
      <p className="mt-4 text-[16px] leading-[1.55] text-[#0F0F0F]/80">
        {body}
      </p>
    </motion.div>
  );
}

/* ──────────── 4. Timeline ──────────── */

function TimelineBlock() {
  return (
    <section className="relative">
      <div className="mb-14">
        <Eyebrow>04 / Timeline</Eyebrow>
        <h2
          className="mt-4 text-[#0F0F0F]"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Where I&apos;ve been.
        </h2>
      </div>

      <ul className="relative">
        {JOBS.map((j, i) => (
          <motion.li
            key={j.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-x-6 border-t border-[rgba(0,0,0,0.1)] py-8 last:border-b"
          >
            <div className="col-span-12 flex items-center gap-3 md:col-span-4">
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${
                  j.current ? "bg-[var(--color-brand-cyan)]" : "bg-[rgba(0,0,0,0.25)]"
                }`}
              />
              <div>
                <p
                  className="text-[18px] text-[#0F0F0F]"
                  style={{ fontWeight: 700 }}
                >
                  {j.company}
                </p>
                <p className="text-[12px] tracking-[0.06em] text-[rgba(0,0,0,0.55)]">
                  {j.dates}
                </p>
              </div>
            </div>
            <div className="col-span-12 mt-4 md:col-span-8 md:mt-0">
              <p
                className="text-[16px] text-[#0F0F0F]"
                style={{ fontWeight: 600 }}
              >
                {j.role}
              </p>
              <p className="mt-2 max-w-[640px] text-[15px] leading-[1.65] text-[rgba(0,0,0,0.65)]">
                {j.desc}
              </p>
            </div>
          </motion.li>
        ))}

        {/* Education row */}
        <motion.li
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-x-6 border-t border-[rgba(0,0,0,0.1)] py-8"
        >
          <div className="col-span-12 flex items-center gap-3 md:col-span-4">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-brand-yellow)]" />
            <div>
              <p
                className="text-[18px] text-[#0F0F0F]"
                style={{ fontWeight: 700 }}
              >
                Education
              </p>
              <p className="text-[12px] tracking-[0.06em] text-[rgba(0,0,0,0.55)]">
                {EDUCATION.dates}
              </p>
            </div>
          </div>
          <div className="col-span-12 mt-4 md:col-span-8 md:mt-0">
            <p
              className="text-[16px] text-[#0F0F0F]"
              style={{ fontWeight: 600 }}
            >
              {EDUCATION.degree}
            </p>
            <p className="mt-2 text-[15px] leading-[1.65] text-[rgba(0,0,0,0.65)]">
              {EDUCATION.school}
            </p>
          </div>
        </motion.li>
      </ul>
    </section>
  );
}

/* ──────────── 5. Skills ──────────── */

function SkillsBlock() {
  return (
    <section className="relative">
      <div className="mb-12">
        <Eyebrow>05 / Toolbox</Eyebrow>
        <h2
          className="mt-4 text-[#0F0F0F]"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
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
            className="inline-flex items-center rounded-full border border-[rgba(0,0,0,0.12)] bg-white px-4 py-2 text-[14px] text-[#0F0F0F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
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
        <Eyebrow>06 / Courses &amp; Certifications</Eyebrow>
        <h2
          className="mt-4 text-[#0F0F0F]"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
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
            className="flex flex-col gap-1 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <p
              className="text-[15px] text-[#0F0F0F]"
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
        <Eyebrow>07 / Community</Eyebrow>
        <h2
          className="mt-4 text-[#0F0F0F]"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          When I&apos;m not in Figma.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-[18px] leading-[1.6] text-[#0F0F0F]/85">
            I read books, watch documentaries, and mentor designers on ADPList.
            I&apos;m an active member of the designer community in Lahore and
            online.
          </p>
        </div>
        <a
          href="https://adplist.org/certifications/79239"
          target="_blank"
          rel="noreferrer noopener"
          className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-white px-6 py-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_28px_rgba(0,0,0,0.06)] ring-1 ring-[rgba(0,0,0,0.04)] transition-transform hover:-translate-y-1"
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
      <div className="relative flex flex-col items-center overflow-hidden rounded-3xl bg-[#0F0F0F] px-6 py-24 text-center md:py-32">
        <Eyebrow className="text-white/60">08 / Say hi</Eyebrow>
        <h2
          className="mt-6 text-white"
          style={{
            fontSize: "clamp(56px, 10vw, 140px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          LET&apos;S TALK.
        </h2>
        <p className="mt-8 max-w-[560px] text-[18px] leading-[1.55] text-white/70">
          Open to thoughtful projects in growth, activation, and AI products. The
          fastest way to reach me is email.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="mailto:hamza.jamal@imagine.art"
            className="inline-flex h-12 items-center gap-2 rounded-none border-[2px] border-white bg-white px-6 text-[14px] tracking-[0.14em] text-[#0F0F0F] uppercase transition-colors hover:bg-transparent hover:text-white"
            style={{ fontWeight: 700 }}
          >
            Email me
          </Link>
          <a
            href="https://www.linkedin.com/in/hamzajamal-design/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-12 items-center gap-2 rounded-none border-[2px] border-white/30 px-6 text-[14px] tracking-[0.14em] text-white uppercase transition-colors hover:border-white"
            style={{ fontWeight: 700 }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
