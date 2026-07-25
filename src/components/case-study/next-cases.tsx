"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

/**
 * "Explore more" strip that sits at the bottom of every case study.
 * Shows two other projects from the shared catalog, excluding whichever
 * one the reader is currently on.
 */
export function NextCases({ currentSlug }: { currentSlug: string }) {
  const others = PROJECTS.filter((p) => p.slug !== currentSlug).slice(0, 2);

  if (others.length === 0) return null;

  return (
    <section className="relative w-full py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h2 text-[var(--color-ink)]"
        >
          Explore more
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
          {others.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
