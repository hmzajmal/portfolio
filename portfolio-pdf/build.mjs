#!/usr/bin/env node
/**
 * Build the PDF and run the quality checks.
 *
 *   node build.mjs          # writes out/portfolio.pdf and out/pages/NN.png
 *   node build.mjs --qa     # checks only, no PDF
 *
 * Uses the installed Google Chrome through Playwright (channel "chrome"),
 * so no browser download is needed. Page size comes from @page in
 * src/styles.css; printBackground is on.
 */
import { chromium } from "playwright";
import { mkdirSync, statSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(new URL(".", import.meta.url).pathname);
const SRC = `file://${ROOT}/src/index.html`;
const OUT = `${ROOT}/out`;
const QA_ONLY = process.argv.includes("--qa");

const BANNED = [
  "leverage", "seamless", "robust", "elevate", "delve", "journey", "crucial", "pivotal",
  "landscape", "realm", "tapestry", "unlock", "empower", "cutting-edge", "game-changer",
  "holistic", "synergy", "intuitive", "user-friendly", "in today's fast-paced world",
  "not just", "it's not about",
];

mkdirSync(`${OUT}/pages`, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await page.goto(SRC, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.emulateMedia({ media: "print" });

/* ── Quality checks ─────────────────────────────────────────────────────── */
const report = await page.evaluate((BANNED) => {
  const pages = [...document.querySelectorAll(".page")];
  const problems = [];
  const text = document.body.innerText;

  // 1. dashes
  for (const [ch, name] of [["—", "em dash"], ["–", "en dash"]]) {
    const n = (text.match(new RegExp(ch, "g")) || []).length;
    if (n) problems.push(`${name}: ${n} found`);
  }
  // 2. banned words
  const lower = text.toLowerCase();
  for (const w of BANNED) {
    const re = new RegExp(`\\b${w.replace(/[-'\s]/g, (m) => (m === " " ? "\\s+" : "\\" + m))}\\b`, "g");
    const n = (lower.match(re) || []).length;
    if (n) problems.push(`banned "${w}": ${n}`);
  }
  // 3. per page checks
  const perPage = pages.map((p, i) => {
    const n = i + 1;
    const pr = p.getBoundingClientRect();
    const cs = getComputedStyle(p);
    const top = parseFloat(cs.paddingTop), bottom = parseFloat(cs.paddingBottom), side = parseFloat(cs.paddingLeft);
    let overflow = 0, sideOverflow = 0;
    p.querySelectorAll("*").forEach((el) => {
      if (el.classList.contains("toplink")) return; // running footer, sits in the margin on purpose
      if (el.offsetParent === null && getComputedStyle(el).position !== "absolute") return;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dy = r.bottom - (pr.bottom - bottom);
      if (dy > 1) overflow = Math.max(overflow, Math.round(dy));
      const dx = Math.max(r.right - (pr.right - side), (pr.left + side) - r.left);
      if (dx > 1) sideOverflow = Math.max(sideOverflow, Math.round(dx));
    });
    // body word count: everything in .body / .lead / .small / li inside the page
    // narrative copy only: paragraphs set in body or lead. Lists, captions and
    // stat labels are scannable, so they do not count toward the 80 words.
    const bodyText = [...p.querySelectorAll("p.body, p.lead")].filter((e) => !e.closest(".cells, .quote, .numlist")).map((e) => e.innerText).join(" ");
    const words = bodyText.trim() ? bodyText.trim().split(/\s+/).length : 0;
    // pixelation: rendered width vs natural
    const pix = [...p.querySelectorAll("img")].filter((im) => im.naturalWidth && im.getBoundingClientRect().width > im.naturalWidth * 1.15).map((im) => im.getAttribute("src"));
    const broken = [...p.querySelectorAll("img")].filter((im) => !im.complete || !im.naturalWidth).map((im) => im.getAttribute("src"));
    const dataN = p.getAttribute("data-n");
    return { n, label: p.getAttribute("data-label"), overflow, sideOverflow, words, pix, broken, dataN: dataN ? Number(dataN) : null };
  });
  for (const r of perPage) {
    if (r.overflow) problems.push(`page ${r.n} (${r.label}): ${r.overflow}px below the bottom margin`);
    if (r.sideOverflow) problems.push(`page ${r.n} (${r.label}): ${r.sideOverflow}px past a side margin`);
    if (r.words > 90) problems.push(`page ${r.n} (${r.label}): ${r.words} words of body copy`);
    if (r.pix.length) problems.push(`page ${r.n}: upscaled image ${r.pix.join(", ")}`);
    if (r.broken.length) problems.push(`page ${r.n}: broken image ${r.broken.join(", ")}`);
    if (r.dataN !== null && r.dataN !== r.n) problems.push(`page ${r.n}: data-n says ${r.dataN}`);
  }
  // 4. index page numbers match
  document.querySelectorAll("[data-ref]").forEach((el) => {
    const target = document.querySelector(`.page[data-id="${el.getAttribute("data-ref")}"]`);
    const idx = pages.indexOf(target) + 1;
    if (!target) problems.push(`index ref "${el.getAttribute("data-ref")}" has no page`);
    else if (idx !== Number(el.innerText.replace(/\D/g, ""))) problems.push(`index ref "${el.getAttribute("data-ref")}" prints ${el.innerText} but the page is ${idx}`);
  });
  const total = getComputedStyle(document.documentElement).getPropertyValue("--total-label").replace(/"/g, "").trim();
  if (String(pages.length) !== total) problems.push(`--total-label is ${total} but there are ${pages.length} pages`);
  return { count: pages.length, problems, words: perPage.map((r) => r.words) };
}, BANNED);

console.log(`pages: ${report.count}`);
console.log(`body words per page: ${report.words.join(" ")}`);
if (report.problems.length) {
  console.log("problems:");
  for (const p of report.problems) console.log("  - " + p);
} else {
  console.log("no problems found");
}

/* ── Render ─────────────────────────────────────────────────────────────── */
if (!QA_ONLY) {
  await page.emulateMedia({ media: "screen" });
  const handles = await page.$$(".page");
  for (let i = 0; i < handles.length; i++) {
    await handles[i].screenshot({ path: `${OUT}/pages/${String(i + 1).padStart(2, "0")}.png` });
  }
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: `${OUT}/portfolio.pdf`,
    width: "1920px",
    height: "1080px",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  const mb = (statSync(`${OUT}/portfolio.pdf`).size / 1048576).toFixed(1);
  console.log(`wrote out/portfolio.pdf (${mb} MB) and ${handles.length} page PNGs`);
}
await browser.close();
process.exit(report.problems.length ? 1 : 0);
