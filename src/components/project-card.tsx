"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

/**
 * Featured project card. Used by the Featured Works section on home and
 * by the "next case studies" strip at the bottom of each case study
 * page. Liquid-glass container, tinted image well, title / subtitle /
 * tag stack.
 */
export function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label={`Read case study: ${project.title}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.42) 100%)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          boxShadow: [
            "inset 0 1px 0 rgba(255,255,255,0.9)",
            "inset 0 -1px 0 rgba(255,255,255,0.25)",
            "inset 0 0 0 1px rgba(15,15,15,0.06)",
            "0 10px 22px rgba(15,15,15,0.06)",
            "0 1px 2px rgba(15,15,15,0.04)",
          ].join(", "),
        }}
      >
        <div
          className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden p-6 md:p-8"
          style={{ background: project.bgColor }}
        >
          <img
            src={project.image}
            alt=""
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 px-6 py-6 md:px-7 md:py-7">
          <h3 className="h3 text-[var(--color-ink)]">{project.title}</h3>
          <p className="body-sm text-[var(--color-ink-muted)]">
            {project.subtitle}
          </p>
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-[12px] text-[var(--color-ink-muted)] ring-1 ring-inset ring-[rgba(15,15,15,0.06)] backdrop-blur-sm">
              {project.tag}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
