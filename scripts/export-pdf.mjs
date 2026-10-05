#!/usr/bin/env node
/**
 * Print the /pdf route to public/hamza-jamal-portfolio.pdf with headless
 * Chrome. The dev server must be running on port 3000.
 *
 *   npm run pdf
 *
 * Page size comes from the @page rule in src/app/pdf/pdf.css, so no flags
 * for paper size are needed here.
 */
import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = process.env.PDF_URL ?? "http://localhost:3000/pdf";
const OUT = resolve("public/hamza-jamal-portfolio.pdf");

if (!existsSync(CHROME)) {
  console.error(`Chrome not found at ${CHROME}. Set CHROME=/path/to/chrome.`);
  process.exit(1);
}

execFileSync(
  CHROME,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=15000",
    `--print-to-pdf=${OUT}`,
    URL,
  ],
  { stdio: "inherit" },
);

const mb = (statSync(OUT).size / (1024 * 1024)).toFixed(1);
console.log(`Wrote ${OUT} (${mb} MB)`);
