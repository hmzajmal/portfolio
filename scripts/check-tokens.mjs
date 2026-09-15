#!/usr/bin/env node
/**
 * Design-system guard. Fails when text is sized, weighed or coloured
 * outside the roles defined in src/app/globals.css.
 *
 *   npm run lint:tokens
 *
 * Product mockups (streak cover / animation) draw a fake app UI and are
 * exempt from the size floor.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "src");
const EXEMPT = [/streak-cover\.tsx$/, /streak-animation\.tsx$/];

const RULES = [
  { name: "inline font size", re: /\btext-\[\d+(\.\d+)?px\]/g, hint: "use a type role: display, h1, h2, h3, title, body-lg, body-text, body-sm, eyebrow" },
  { name: "inline font-variation-settings", re: /fontVariationSettings/g, hint: "roles set weight; use wt-light / wt-regular / wt-medium for one-offs" },
  { name: "optical size hardcoded", re: /"opsz"|"wdth"/g, hint: "font-optical-sizing is automatic; never name opsz or wdth" },
  { name: "raw text colour", re: /\btext-\[(var\(--color-|#|rgba?\()/g, hint: "use text-ink, text-ink-muted, text-ink-quiet, text-ink-faint or the inverse roles" },
  { name: "text-white / text-black", re: /\btext-(white|black)(\/\d+)?\b/g, hint: "use text-ink-inverse, text-ink-inverse-muted, text-ink-inverse-quiet" },
  { name: "retired alias", re: /--color-(fg|paper|nav|ink-paper|ink-2|bg|bg-2|amber)\b|\btext-fg\b|--tracking-(eyebrow|tab)\b/g, hint: "alias was removed; use the ink roles" },
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx|ts|css)$/.test(name)) out.push(p);
  }
  return out;
}

let failures = 0;
for (const file of walk(SRC)) {
  const rel = relative(ROOT, file);
  const exempt = EXEMPT.some((r) => r.test(file));
  const text = readFileSync(file, "utf8");
  for (const rule of RULES) {
    if (exempt && rule.name !== "retired alias") continue;
    if (rel === "src/app/globals.css" && rule.name === "raw text colour") continue;
    const lines = text.split("\n");
    lines.forEach((line, i) => {
      if (rule.re.test(line)) {
        failures++;
        console.log(`${rel}:${i + 1}  ${rule.name}: ${line.trim().slice(0, 100)}\n    -> ${rule.hint}`);
      }
      rule.re.lastIndex = 0;
    });
  }
}
if (failures) {
  console.error(`\n${failures} token violation(s).`);
  process.exit(1);
}
console.log("Tokens clean.");
