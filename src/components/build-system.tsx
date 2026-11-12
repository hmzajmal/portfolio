"use client";

import { motion } from "framer-motion";

/**
 * How the work above gets built. Three plain statements, each one true of
 * this repo or of the Frame 1.0 repo, so a reader can check them:
 * tokens (globals.css type and colour roles), a gate (npm run lint:tokens
 * here, custom ESLint rules in Frame), and written standards for the
 * agent (TONE.md, AGENTS.md). Keep the claims at their real size.
 */
const PARTS: { heading: string; body: string }[] = [
  {
    heading: "Tokens before screens.",
    body: "Type, colour and spacing are defined once, as roles. No screen on this site sets a size or a colour of its own.",
  },
  {
    heading: "Rules a machine can check.",
    body: "A script fails the build when a rule is broken. The Frame 1.0 codebase adds its own lint rules for how components are written.",
  },
  {
    heading: "Written standards for the agent.",
    body: "A tone guide and working instructions live in the repo. AI writes code inside them, and I review everything it ships.",
  },
];

export function BuildSystem() {
  return (
    <section id="system" className="relative w-full pb-24 md:pb-32">
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          How I build
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="h2 mt-4 max-w-[980px] text-ink"
        >
          I set the system first. Then AI builds inside it.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg mt-4 max-w-[720px] text-ink-muted"
        >
          This site and the launch pages above were built this way, in Next.js, React and TypeScript.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[var(--color-line)] pt-10 md:grid-cols-3 md:gap-12">
          {PARTS.map((part, i) => (
            <motion.div
              key={part.heading}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="h3 text-ink">{part.heading}</h3>
              <p className="body mt-3 text-ink-muted">{part.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
