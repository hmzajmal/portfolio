"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

/**
 * Featured Works. Restrained two-column grid of project cards.
 * The card + data are extracted so the "next case studies" strip on
 * each case study page uses the same look.
 */
export function FeaturedWorksFold() {
  return (
    <section id="work" className="relative w-full py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h2 text-[var(--color-ink)]"
            >
              Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="body-lg mt-4 max-w-[720px] text-[var(--color-ink-muted)]"
            >
              A selection of projects where curiosity drove the process and the
              outcome moved the metric.
            </motion.p>
          </div>
          <Link
            href="/work"
            className="body-sm inline-flex items-center gap-1.5 text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            View all projects
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
