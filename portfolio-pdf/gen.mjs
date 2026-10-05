#!/usr/bin/env node
/**
 * Generates src/index.html from the content below.
 *
 *   node gen.mjs
 *
 * Copy lives in this file. Layout templates are the small functions at the
 * bottom. Every image is placed at its own aspect ratio inside the space the
 * template gives it, so nothing is cropped or stretched; the generator reads
 * each JPEG's pixel size to do that.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(new URL(".", import.meta.url).pathname);
const IMG = (p) => `img/${p}`;

/* ── Page geometry (must match styles.css) ─────────────────────────────── */
const W = 1920, H = 1080, MARGIN = 96, TOP = 136, BOTTOM = 112, GUTTER = 32;
const CONTENT_W = W - 2 * MARGIN;          // 1728
const CONTENT_H = H - TOP - BOTTOM;        // 832
const COL = (CONTENT_W - 11 * GUTTER) / 12;
const cols = (n) => n * COL + (n - 1) * GUTTER;
const CAPTION_H = 40;

/* ── Image sizes ───────────────────────────────────────────────────────── */
function jpegSize(file) {
  const buf = readFileSync(file);
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  throw new Error(`no SOF in ${file}`);
}
const sizeCache = new Map();
function dims(src) {
  if (!sizeCache.has(src)) {
    const f = resolve(ROOT, "src", src);
    if (!existsSync(f)) throw new Error(`missing image ${src}`);
    sizeCache.set(src, jpegSize(f));
  }
  return sizeCache.get(src);
}
/** Fit an image inside maxW x maxH at its own aspect. Returns {w,h}. */
function fit(src, maxW, maxH) {
  const { w, h } = dims(src);
  const s = Math.min(maxW / w, maxH / h);
  return { w: Math.round(w * s), h: Math.round(h * s) };
}

/* ── Content ────────────────────────────────────────────────────────────── */
const SITE = "hamzajamal.design";

const STUDIES = [
  {
    id: "ad-studio", label: "Ad Studio", no: "01", kicker: "ImagineArt · 2026 · Consumer AI",
    title: "Rebuilding Ad Studio around what people could see",
    lead: "ImagineArt's ad maker launched as a prompt bar with hidden buttons. Three months later it was a studio of visible choices on web and mobile, and paid generations were succeeding more often.",
    index: "A prompt bar and a stack of modals, rebuilt into a studio you can see, on web and mobile.",
    tag: "Consumer AI · 2026",
    meta: [["Role", "Product design, analytics, UI, mobile, hand-off"], ["Team", "PM, two engineers, growth, QA"], ["When", "July to September 2026"], ["Platform", "Web and mobile"]],
    cover: "ad-studio/home-laptop.jpg",
    pages: [
      split("01 · The problem", "The brief blamed the AI. The failure log blamed the interface.",
        ["ImagineArt is an AI creative suite with over a million users. Ad Studio launched in June 2026 as a prompt bar, with Product and Avatar tucked behind plus buttons that opened modals.",
         "People typed once, tried again, and left. The team needed a redesign for web and mobile before the quarter ended."],
        [{ src: "ad-studio/old-home-laptop.jpg", cap: "Where we started. A prompt bar and two plus buttons." },
         { row: [{ src: "ad-studio/old-2-product-modal.jpg", cap: "The product modal." }, { src: "ad-studio/old-3-avatar-modal.jpg", cap: "The avatar sheet." }] }]),
      roleConstraints("02 · Role and constraints", "A live product, paying users, and a Free tier arriving halfway through.",
        "How might we make an ad maker where every choice is visible before you spend a credit, nothing you can click fails because of your plan, and the whole thing fits on a phone screen.",
        [["My role", "Product design, analytics review, UI and interaction design, mobile design and hand-off."],
         ["Team", "A product manager, a front end engineer, a back end engineer, a growth specialist and QA."],
         ["Constraints", "One quarter for web and mobile. A live product with paying users. The Free tier opened in July, in the middle of the work."],
         ["Who it is for", "Solo creators, small agencies running several brands, and founders with one product and no designer."]]),
      research("03 · Research", "I read 12,964 failed generations before drawing anything.",
        ["The growth specialist pulled every failed generation from June to September. Fewer than 60 were real model errors. Nine in ten came from two causes, and both were interface problems.",
         "I also spent a week making ads in OpenArt and Higgsfield. Both lead with the model and ask for a product upload first. That did not fit our users."],
        "Failed generations by reason, June to September 2026",
        [["Model not allowed on this plan", "Free users offered models they could not use", 10211, "10,211", true],
         ["Prompt is required", "Create pressed with an empty prompt", 1891, "1,891", true],
         ["Insufficient credits", "Expected. People ran out.", 804, "804", false],
         ["Real generation errors", "Actual model failures", 58, "under 60", false]]),
      band("04 · The decision", "Twelve controls were on the table. I argued for five.",
        ["The prompt bar became five cards: Scene, Product, Avatar, Visual Reference and Style. Each one says what it does. The prompt is now optional, and Generate is a single button."],
        [{ src: "ad-studio/create-pair.jpg", cap: "The same five cards on web and mobile." }]),
      split("05 · Visible choices", "Every choice is something you can see.",
        ["Scenes are photographs of the composition, not names. Products and avatars live in one searchable library with a single upload, and the product you pick stays picked.",
         "A finished ad opens with tools to relight it, change the camera angle, make variations or swap the background, next to a panel showing what made it."],
        [{ src: "ad-studio/desktop-3.jpg", cap: "Scenes are photographs of compositions.", frame: "browser", url: "imagine.art/ad-studio" },
         { src: "ad-studio/result-pair.jpg", cap: "A generated ad, and the same project in mobile history." }]),
      band("06 · Mobile", "On a phone, the screen is the funnel.",
        ["Nested modals became one scrolling screen with Create where your thumb is. Hook, model, length and quality sit together, and the model field shows plan limits before you generate, so nothing fails afterwards."],
        [{ src: "ad-studio/mobile-1-phone.jpg", cap: "Home. One button." }, { src: "ad-studio/mobile-3-phone.jpg", cap: "Create a video. The model is in the form." }, { src: "ad-studio/mobile-4-phone.jpg", cap: "Generating, with a time estimate." }]),
      outcome("07 · Outcome", "Shipped on web and mobile at the end of September.",
        "Paid users now succeed far more often than they did in June, and both of the main failure types have a design answer. I will add October numbers when there is a full month of them.",
        [["81%", "Paid generations that succeed, up from 69% in June."], ["8x", "Weekly users after the studio opened to Free."], ["9 in 10", "Failures traced to two causes the redesign removes."]],
        [["Read the failures before you draw.", "The biggest fix in this project was a table, not a layout."],
         ["Volume is not health.", "When Free users arrived, every chart went up and the product felt worse. Success rate was the only number telling the truth."]]),
    ],
  },
  {
    id: "xiangqi", label: "Xiangqi.com", no: "02", kicker: "Arbisoft · 2021 to 2022 · Gaming",
    title: "Two lobby redesigns took Xiangqi.com from 1.79% to 11% conversion",
    lead: "Chinese chess, played online against people or bots. Only one in five players came back, and the business wanted ten times the players in a year.",
    index: "Two lobby redesigns for an online Chinese chess platform. Conversion went from 1.79% to 11%.",
    tag: "Gaming · 2021 to 2022",
    meta: [["Role", "Product Designer, research"], ["Team", "Eight, at Arbisoft"], ["When", "Jan 2021 to Dec 2022"], ["Live", "play.xiangqi.com"]],
    cover: "xiangqi/xiangqi-com-cover.jpg", coverFrame: "browser",
    pages: [
      split("01 · The problem", "People signed up, played once, and left.",
        ["Retention was 20%. The product could not reach ten times the players while losing four in five.",
         "When I joined, almost every product decision had been made by engineers, because shipping features came first. My first job was to find out why players left, and put it in a form the product manager could act on."],
        [{ src: "xiangqi/old-lobby-ui.jpg", cap: "Before. The lobby players saw when I joined.", frame: "browser", url: "play.xiangqi.com" }]),
      split("02 · Research", "Ask the players, then read the competition.",
        ["A one-question rating after every game pointed at the problems: too much on screen during play, no easy way to find the right timer and rules, and an invite-a-friend feature nobody could find.",
         "I compared Chess.com, Lichess and TianTian and read their store reviews. Then I priced two lobby layouts with the tech lead. The cheaper one was also clearer."],
        [{ src: "xiangqi/information-architecture-diagram.jpg", cap: "The new structure, drawn with the PM." },
         { src: "xiangqi/wireframe-variants.jpg", cap: "Two layouts. The second was chosen." }]),
      band("03 · Version 2", "The redesign everyone liked, and the data did not.",
        ["Players and stakeholders liked version 2. Four months of heatmaps disagreed. Outside peak hours the lobby looked empty, New Game did not stand out, and slow matchmaking pushed people to bots. The design was right for a busy lobby. Most of the day, the lobby was not busy."],
        [{ src: "xiangqi/version-2-lobby.jpg", cap: "Version 2.", frame: "browser", url: "play.xiangqi.com" }, { src: "xiangqi/heatmap-overlay.jpg", cap: "Four months of clicks. New Game barely registers.", frame: "browser", url: "play.xiangqi.com" }]),
      band("04 · Version 3", "Show the board first.",
        ["Version 3 leads with a game board, so a new visitor sees what Xiangqi looks like before they see how many people are online. The lobby holds up with three players or three hundred, and New Game is the one obvious action. Sign-up got fewer fields and one path."],
        [{ src: "xiangqi/lobby-before-and-after.jpg", cap: "Lobby, before and after." }, { src: "xiangqi/signup-before-and-after.jpg", cap: "Sign-up, before and after." }, { src: "xiangqi/mobile-design-screens.jpg", cap: "The mobile app, designed in parallel." }]),
      outcome("05 · Outcome", "1.79% to 11%.",
        "After version 3 shipped, the conversion rate the team tracked went from 1.79% to 11%. The Android app passed 100,000 downloads on the Play Store. Retention moved up from 20%, but I do not have the final figure, so I will not put a number on it.",
        [["1.79% to 11%", "Conversion after version 3."], ["100K", "Android downloads on the Play Store."], ["20%", "Retention when I joined. It rose after version 3."]],
        [["A design that looks right in a full room can fail in an empty one.", "Design for the quiet hours."],
         ["Check the heatmap before you celebrate.", "The tournament for version 2 came before the data did."]],
        { src: "xiangqi/conversion-chart.jpg", cap: "Conversion before and after version 3." }),
    ],
  },
  {
    id: "imagineart-captions", label: "Captions", no: "03", kicker: "ImagineArt · 2026 · Consumer AI",
    title: "Captions: the easiest tool in the video suite",
    lead: "Upload a video, pick a style, get captions, translated if you need them. People search for this tool by name, so it had to feel simpler than anything else they would find.",
    index: "An auto-captioning tool that became the highest-intent way into the video suite.",
    tag: "Consumer AI · 2026",
    meta: [["Role", "Product Designer"], ["Scope", "Research, design, tracking"], ["When", "2026, live since July"], ["Live", "imagine.art/video/captions"]],
    cover: "imagineart-captions/cover.jpg",
    pages: [
      split("01 · Context", "It had to be the easiest one.",
        ["ImagineArt already had video tools. Captions was one more, so I set one rule: as few steps as possible.",
         "The hard part was accuracy. Nobody notices a correct word, but everyone notices a wrong one, especially a name. The AI often got proper nouns wrong, and that became the real problem to solve."],
        [{ src: "imagineart-captions/mode-select.jpg", cap: "Captions in the video mode picker, with the upload empty state.", frame: "browser", url: "imagine.art/video/captions" }]),
      split("02 · Approach", "Test it first. Then stay out of the way.",
        ["Before drawing a screen, I put a competitor's caption tool, Veed, through real videos. Two things slowed people down: choosing settings and fixing mistakes.",
         "So Captions lives where people already work, in the same menu as the other video tools and on the toolbar of any video they have made. Ads are next, since most ads play without sound. That part is planned, not built."],
        [{ src: "imagineart-captions/edit-captions.jpg", cap: "Edit Captions on any video you already made.", frame: "browser", url: "imagine.art" }]),
      band("03 · Styles", "Pick a look by looking.",
        ["Every style is a real frame with captions already on it. The panel shows nine, and See All opens the rest. The styles came out of sessions with the creative team, who make videos like this every day."],
        [{ src: "imagineart-captions/presets.jpg", cap: "Nine styles, each a live preview.", frame: "browser", url: "imagine.art/video/captions" }, { src: "imagineart-captions/presets-all.jpg", cap: "The full library, one selected.", frame: "browser", url: "imagine.art/video/captions" }]),
      split("04 · The big decision", "No big text editor.",
        ["The obvious answer was a full editor with a timeline. It would have taken months to build, and made people check every word of a video they had already finished.",
         "Instead, you type the right word, say which one it replaces, and run it again. Most mistakes repeat: brand names, product names, jargon. It took a fraction of the build time and there is almost nothing to learn."],
        [{ src: "imagineart-captions/vocabulary.jpg", cap: "Swap one word for another, then rerun.", frame: "browser", url: "imagine.art/video/captions" }]),
      outcomeFunnel("05 · Outcome", "Most visitors make a video. Half of them download it.",
        "Weekly visitors grew from 6 in the first week to a steady 300 to 400. 97% came on a laptop, which settled the mobile question.",
        [["What is still open.", "Captions brings people in and gets videos finished. Turning those videos into purchases is the next problem, and it needs proper tracking at each step so we measure it instead of guessing."],
         ["The obvious fix and the right fix are not always the same size.", "A word swap did what a timeline editor would have, for a fraction of the build."]],
        "Mixpanel · 20 Jul to 15 Sep 2026",
        [["Visitors", "100% of visitors", 2073, "2,073", false], ["Made a video", "72% of visitors", 1486, "1,486", false], ["Downloaded it", "52% of visitors", 1070, "1,070", false], ["Bought credits", "2% of visitors", 46, "46", true]]),
    ],
  },
  {
    id: "e-commerce-odetobeauty", label: "Ode to Beauty", no: "04", kicker: "Carbonteq · 2024 · E-commerce",
    title: "Ode to Beauty: a marketplace that reads as a brand",
    lead: "A skincare retailer in Pakistan selling Western brands. Their ads worked and their site did not. In six weeks we redesigned it, and task completion in testing went from 27% to 100%.",
    index: "A skincare marketplace made to feel like a brand. Task completion in testing went from 27% to 100%.",
    tag: "E-commerce · 2024",
    meta: [["Role", "Lead Designer"], ["Team", "Three designers and a PM"], ["When", "Six weeks, 2024"], ["Status", "Shipped"]],
    cover: "e-commerce-odetobeauty/ode-to-beauty-cover.jpg",
    pages: [
      split("01 · The problem", "Ads worked. The site did not.",
        ["People arrived from polished social ads and landed on what looked like a generic marketplace: no hierarchy, no brand, a plain grid of products.",
         "The one thing that made this store different, shopping by skin type and concern, was buried in the menus."],
        [{ row: [{ src: "e-commerce-odetobeauty/old-homepage-screenshot-1.jpg", cap: "Before. The old homepage.", top: true }, { src: "e-commerce-odetobeauty/old-homepage-screenshot-2.jpg", cap: "Before. Further down the same page.", top: true }] }]),
      split("02 · Approach and role", "Six weeks means no long discovery.",
        ["I ran a heuristic audit and compared the site with four stores this market already trusts: Soko Glam, Highfy, Vegas.pk and Blume. Five moderated sessions on the old site showed where people clicked, stopped and stayed, and gave us a baseline.",
         "I owned research and business alignment. The other two designers took campaign pages and the visual system."],
        [{ src: "e-commerce-odetobeauty/heuristic-audit-board.jpg", cap: "The heuristic pass on the old site." }, { src: "e-commerce-odetobeauty/competitor-comparison-board.jpg", cap: "Four stores this market already trusts." }]),
      fixes("03 · The fixes", "Four things people got wrong, and what we changed.",
        [["Hidden filters.", "Skin-type filters lived in a menu. Now they are the first thing on the homepage."],
         ["Stock.", "Out-of-stock items looked buyable until checkout. They now sit at the bottom, clearly labelled."],
         ["Icons.", "The AM and PM routine icons read as a dark mode toggle. Every icon got a text label."],
         ["Ingredients.", "Long lists were a wall of text. They became grouped tags you can scan."]],
        { src: "e-commerce-odetobeauty/homepage-after.jpg", cap: "After. Skin type on the homepage, one clear action per block.", top: true }),
      split("04 · The system", "Bold brand, familiar patterns.",
        ["The brand got to be loud. The interactions stayed ordinary on purpose, because shoppers already know how a store works.",
         "The product card carried most of it: image, one line on the benefit, price, one button. “Add to bag” became “Add to cart”, and free shipping moved next to the price."],
        [{ row: [{ src: "e-commerce-odetobeauty/product-card-before.jpg", cap: "Card, before.", pad: true }, { src: "e-commerce-odetobeauty/product-card-after.jpg", cap: "Card, after.", pad: true }] },
         { src: "e-commerce-odetobeauty/design-system-overview.jpg", cap: "Type, tokens and components." }]),
      outcome("05 · Outcome", "Everyone finished the task.",
        "Five new participants ran the same two tasks on the redesigned prototype. On the old site, 27% completed the task. On the new one, all five did, in about two minutes instead of four. The usability score came back in the high 80s.",
        [["27% to 100%", "Task completion in usability testing."], ["4 to 2 min", "Time to finish the task, roughly halved."], ["High 80s", "Usability score on the redesign."]],
        [["What I cannot claim.", "These numbers come from testing, not revenue. A live A/B test against the old site was planned for the next phase. I do not have its result, so I will not claim one."],
         ["What I took from it.", "With six weeks, the useful research is the kind you can run this week."]]),
    ],
  },
  {
    id: "E-learning-management", label: "Advance Learning", no: "05", kicker: "Arbisoft · 2022 to 2023 · EdTech",
    title: "Advance Learning: ask for less, later",
    lead: "An online school for the Saudi Embassy. Students were quitting at the sign-up form, so we cut the form, redesigned the dashboard and built the design system the platform did not have.",
    index: "An online school for the Saudi Embassy. Shorter sign-up, clearer dashboard, approved on the first review.",
    tag: "EdTech · 2022 to 2023",
    meta: [["Role", "Product Designer"], ["Client", "Saudi Embassy, via Arbisoft"], ["When", "Nov 2022 to Aug 2023"], ["Status", "Shipped, approved first time"]],
    cover: "E-learning-management/signup-and-trial-flow.jpg",
    pages: [
      quotePage("01 · The problem", "Students quit before they reached a course.",
        ["More than half of new students gave up at the sign-up form, and most who got through never opened a course.",
         "I could not talk to students directly. The client was an embassy, the students were in another country, and the platform was in a language I do not speak. So the evidence came from the numbers, a few quotes the client passed on, and the product itself."],
        "The quote that stuck", "“A 13-year-old said he quit when he saw too many choices on the sign-up page.”"),
      split("02 · The decision", "Ask for less, later.",
        ["We cut the form to what the school needed to create an account and moved everything else to settings. A seven-day trial replaced the paywall, so a new student saw a course before a payment screen.",
         "The order mattered. Fixing the dashboard first would have polished a room most students never entered."],
        [{ src: "E-learning-management/signup-and-trial-flow.jpg", cap: "The new sign-up. Essentials only, then a seven-day trial." }]),
      band("03 · The dashboard", "One next step per screen.",
        ["Two rounds. The first cut the clutter. The second gave every state one clear action: continue your course, or start the one you have not. Themes by grade level came from the client, and they earned their place. A ten-year-old and a seventeen-year-old should not see the same school."],
        [{ src: "E-learning-management/two-dashboard-iterations.jpg", cap: "Round one and round two." }, { src: "E-learning-management/theme-variants-for-the-dashboard.jpg", cap: "Themes by grade level." }]),
      band("04 · The system", "A design system, built with the engineers.",
        ["I listed every element in use with the engineers, sorted it into atoms, molecules and organisms, and rebuilt the components. Halfway through, a retro showed engineers were guessing at edge cases my hand-offs missed. After that, every flow shipped with a hand-off doc."],
        [{ src: "E-learning-management/components-inventory-list.jpg", cap: "The inventory, listed with the engineers." }, { src: "E-learning-management/design-system-overview.jpg", cap: "The system that came out of it." }, { src: "E-learning-management/handoff-documentation.jpg", cap: "A hand-off page. Every state, every edge case." }]),
      outcome("05 · Outcome", "Approved on the first review.",
        "The redesign launched in December 2022. The embassy approved it in January 2023 without a second round, which for a government client is the fast path. I do not have post-launch sign-up numbers. The client owned the analytics and did not share them after hand-over.",
        [["1st review", "Approved without a second round."], ["7 days", "Trial before any payment screen."], ["2", "Dashboard rounds before it was right."]],
        [["A retro caught a problem I had caused.", "Since then, every flow I hand over covers states, interactions and what happens when something goes wrong."],
         ["Fix the door before the room.", "Sign-up first, dashboard second. Most students never got past the form."]],
        { src: "E-learning-management/final-approved-ui.jpg", cap: "A reports screen the client shared after launch." }),
    ],
  },
  {
    id: "walters-hospitality", label: "Walter's Hospitality", no: "06", kicker: "Arbisoft · 2023 · B2B CRM",
    title: "Walter's Hospitality: one system for every vendor",
    lead: "An events company ran on spreadsheets, email and paper. Over twelve months we replaced all of it with one system for planners, the office and every outside vendor.",
    index: "A twelve-month CRM that replaced spreadsheets and email chains with one vendor system.",
    tag: "B2B CRM · 2023",
    meta: [["Role", "Product Designer"], ["Team", "Twelve, at Arbisoft"], ["When", "Twelve months, 2023"], ["Status", "Shipped"]],
    cover: "walters-hospitality/walter-s-hospitality-cover.jpg",
    pages: [
      listPage("01 · The problem", "Every event lived in five places.",
        ["Walter's plans weddings, corporate events and private parties, each with florists, caterers, photographers and a dozen other vendors. Teams could not see each other's updates, and a lot of the work was retyping.",
         "Vendor management was the worst of it. Every vendor was handled a different way, and clients felt the difference."],
        ["A spreadsheet", "An email thread", "A paper file", "Two people's heads", "The phone, for everything else"]),
      split("02 · The finding", "Vendors are not one kind of user.",
        ["I interviewed planners, office staff and vendors one at a time, and sat in on their four-meeting planning cycle to see where information changed hands.",
         "A florist selling packages needs a price list and a calendar. A florist doing custom work needs inventory and approvals. A photographer needs a shot list. One form for all of them is what the spreadsheets had been doing, badly."],
        [{ src: "walters-hospitality/walter-s-modular-vendor-profile-ui.jpg", cap: "The four-meeting planning cycle, mapped from the sessions I sat in on." }]),
      band("03 · The decision", "A profile that changes shape by vendor type.",
        ["Each vendor type gets its own fields, services and contact methods. Planners see one layout for every vendor, and vendors only see what applies to them. Every role got its own portal, and I tested each prototype with the person who would use it before it was built."],
        [{ src: "walters-hospitality/synthesis-board.jpg", cap: "Interview notes sorted by role and by where the hand-offs broke." }, { src: "walters-hospitality/vendor-profile-screens.jpg", cap: "One vendor's flow: a DJ planning a wedding." }]),
      split("04 · The build", "Reports the office had never had.",
        ["With events and vendors in one place, the numbers came almost for free. I sat with finance, listed what they had been assembling by hand every month, and built a reports page around it.",
         "To keep twelve people aligned, I designed one role's flow end to end, shipped it, then moved to the next."],
        [{ src: "walters-hospitality/walter-s-reports-dashboard.jpg", cap: "Revenue by period, and which packages sell.", frame: "browser" }]),
      outcome("05 · Outcome", "The spreadsheets went away.",
        "The platform replaced spreadsheets, email and paper for planners, staff and vendors. The retyping stopped, and updates became visible to everyone at once.",
        [["12", "Months, designed and shipped one role at a time."], ["3", "Kinds of portal: admin, staff and vendor."], ["1", "Vendor profile that changes shape by type."]],
        [["What I cannot claim.", "The client did not instrument the system, so I make no claim about hours saved."],
         ["In enterprise work, the design problem is mostly a disagreement problem.", "The job was getting twelve people to agree on one shape, then drawing it."]]),
    ],
  },
];

/* ── HTML helpers ──────────────────────────────────────────────────────── */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const paras = (arr, cls = "body muted") => arr.map((p) => `<p class="${cls}">${esc(p)}</p>`).join("");

/** One image box. frame: "browser" | undefined. top: object-position top for tall pages. pad: small image on a panel. */
function shot(it, maxW, maxH, withCaption = true) {
  const capH = withCaption && it.cap ? CAPTION_H : 0;
  const { src } = it;
  let w, h, inner;
  if (it.frame === "browser") {
    const barH = 40;
    const f = fit(IMG(src), maxW, maxH - capH - barH);
    w = f.w; h = f.h + barH;
    inner = `<div class="browser" style="width:${w}px;height:${h}px"><div class="bar"><i></i><i></i><i></i>${it.url ? `<span>${esc(it.url)}</span>` : ""}</div><img src="${IMG(src)}" alt=""></div>`;
  } else if (it.pad) {
    // small image centred on a panel that fills the slot
    const f = fit(IMG(src), maxW - 96, maxH - capH - 96);
    w = maxW; h = maxH - capH;
    inner = `<div class="shot pad" style="width:${w}px;height:${h}px"><img src="${IMG(src)}" alt="" style="width:${f.w}px;height:${f.h}px"></div>`;
  } else {
    const f = fit(IMG(src), maxW, maxH - capH);
    w = f.w; h = f.h;
    inner = `<div class="shot" style="width:${w}px;height:${h}px"><img src="${IMG(src)}" alt=""></div>`;
  }
  const cap = withCaption && it.cap ? `<figcaption class="caption">${esc(it.cap)}</figcaption>` : "";
  return `<figure style="width:${w}px">${inner}${cap}</figure>`;
}

/** Lay out a list of items (each an image or {row:[...]}) stacked in a box of maxW x maxH. */
function stackImages(items, maxW, maxH, gap = GUTTER) {
  // weight each row by its aspect (height per unit width), then split height.
  const rows = items.map((it) => (it.row ? it.row : [it]));
  const rowAspect = rows.map((row) => {
    // a row of n images sharing maxW: height = (maxW - gaps) / sum(w/h)
    const sum = row.reduce((a, it) => a + dims(IMG(it.src)).w / dims(IMG(it.src)).h, 0);
    const extra = row.some((it) => it.frame === "browser") ? 40 : 0;
    return ((maxW - gap * (row.length - 1)) / sum) + extra + CAPTION_H;
  });
  const natural = rowAspect.reduce((a, b) => a + b, 0) + gap * (rows.length - 1);
  const scale = Math.min(1, (maxH - 16) / natural);
  const out = rows.map((row, i) => {
    const rowH = Math.floor(rowAspect[i] * scale);
    const each = Math.floor((maxW - gap * (row.length - 1)) / row.length);
    const cells = row.map((it) => shot(it, row.length === 1 ? maxW : each, rowH)).join("");
    return `<div class="imgrow" style="gap:${gap}px">${cells}</div>`;
  });
  return `<div class="imgstack" style="gap:${gap}px">${out.join("")}</div>`;
}

/* ── Templates. Each returns (study) => html for one page body. ───────── */
function page(label, inner, cls = "") {
  return `<section class="page ${cls}" data-label="${esc(label)}">${inner}<span class="name">Hamza Jamal · ${SITE}</span></section>`;
}

function split(eyebrow, h, body, images, ratio = [5, 7]) {
  return (s) => {
    const right = cols(ratio[1]);
    return page(s.label, `<div class="grid">
      <div class="col c${ratio[0]}"><p class="label">${esc(eyebrow)}</p><h2 class="h2 mt-3">${esc(h)}</h2><div class="stack mt-5">${paras(body)}</div></div>
      <div class="col c${ratio[1]} center">${stackImages(images, right, CONTENT_H)}</div>
    </div>`);
  };
}

function band(eyebrow, h, body, images) {
  return (s) => {
    const textH = 236;
    const avail = CONTENT_H - textH - 48;
    // images in one row, each fitted to avail height, then scaled to width
    const naturalW = images.reduce((a, it) => a + fit(IMG(it.src), 1e9, avail - CAPTION_H - (it.frame === "browser" ? 40 : 0)).w, 0) + GUTTER * (images.length - 1);
    const scale = Math.min(1, CONTENT_W / naturalW);
    const rowH = Math.floor(avail * scale);
    const cells = images.map((it) => shot(it, Math.floor(fit(IMG(it.src), 1e9, rowH - CAPTION_H - (it.frame === "browser" ? 40 : 0)).w), rowH)).join("");
    return page(s.label, `<div class="col" style="height:100%">
      <div class="grid" style="height:${textH}px;align-content:start"><div class="c6"><p class="label">${esc(eyebrow)}</p><h2 class="h2 mt-3">${esc(h)}</h2></div><div class="c6 stack" style="padding-top:44px">${paras(body)}</div></div>
      <div class="imgrow bottom" style="gap:${GUTTER}px;justify-content:center;align-items:flex-end">${cells}</div>
    </div>`);
  };
}

function roleConstraints(eyebrow, h, question, cells) {
  return (s) => page(s.label, `<div class="grid">
    <div class="col c6"><p class="label">${esc(eyebrow)}</p><h2 class="h2 mt-3">${esc(h)}</h2>
      <div class="bottom"><p class="label">The question I designed against</p><p class="lead mt-3 measure-wide">${esc(question)}</p></div></div>
    <div class="col c6 center"><div class="cells">${cells.map(([k, v]) => `<div><p class="label">${esc(k)}</p><p class="body mt-2">${esc(v)}</p></div>`).join("")}</div></div>
  </div>`);
}

function bars(title, rows) {
  const max = Math.max(...rows.map((r) => r[2]));
  return `<p class="label">${esc(title)}</p><ul class="bars mt-4">${rows.map(([l, sub, v, shown, hot]) => `<li><div class="row"><div><p class="body">${esc(l)}</p><p class="caption">${esc(sub)}</p></div><p class="h3 num">${esc(shown)}</p></div><div class="track"><span class="${hot ? "hot" : ""}" style="width:${Math.max(0.8, (v / max) * 100).toFixed(1)}%"></span></div></li>`).join("")}</ul>`;
}

function research(eyebrow, h, body, chartTitle, rows) {
  return (s) => page(s.label, `<div class="grid">
    <div class="col c5"><p class="label">${esc(eyebrow)}</p><h2 class="h2 mt-3">${esc(h)}</h2><div class="stack mt-5">${paras(body)}</div></div>
    <div class="col c6 start-7 center">${bars(chartTitle, rows)}</div>
  </div>`);
}

function outcome(eyebrow, h, body, stats, lessons, image) {
  return (s) => {
    const statsHtml = `<div class="stats">${stats.map(([v, l]) => `<div><p class="stat-sm">${esc(v)}</p><p class="small muted mt-3 measure">${esc(l)}</p></div>`).join("")}</div>`;
    const lessonsHtml = `<div class="lessons">${lessons.map(([k, v]) => `<div><p class="h3">${esc(k)}</p><p class="small muted mt-2">${esc(v)}</p></div>`).join("")}</div>`;
    if (image) {
      return page(s.label, `<div class="grid">
        <div class="col c6"><p class="label">${esc(eyebrow)}</p><h2 class="h2 mt-3">${esc(h)}</h2><p class="body muted mt-5">${esc(body)}</p>
          <div class="bottom">${statsHtml}</div></div>
        <div class="col c6 center" style="align-items:flex-end">${shot(image, cols(6), CONTENT_H - 300)}<div class="mt-6" style="width:100%">${lessonsHtml}</div></div>
      </div>`);
    }
    return page(s.label, `<div class="col" style="height:100%">
      <div class="grid" style="height:auto"><div class="c6"><p class="label">${esc(eyebrow)}</p><h2 class="h2 mt-3">${esc(h)}</h2></div><div class="c6" style="padding-top:44px"><p class="body muted">${esc(body)}</p></div></div>
      <div class="mt-7 stats big">${stats.map(([v, l]) => `<div><p class="stat">${esc(v)}</p><p class="small muted mt-4 measure">${esc(l)}</p></div>`).join("")}</div>
      <div class="mt-7">${lessonsHtml}</div>
    </div>`);
  };
}

function outcomeFunnel(eyebrow, h, body, lessons, chartTitle, rows) {
  return (s) => page(s.label, `<div class="grid">
    <div class="col c5"><p class="label">${esc(eyebrow)}</p><h2 class="h2 mt-3">${esc(h)}</h2><p class="body muted mt-5">${esc(body)}</p>
      <div class="bottom lessons one">${lessons.map(([k, v]) => `<div><p class="h3">${esc(k)}</p><p class="small muted mt-2">${esc(v)}</p></div>`).join("")}</div></div>
    <div class="col c6 start-7 center">${bars(chartTitle, rows)}</div>
  </div>`);
}

function fixes(eyebrow, h, items, image) {
  return (s) => page(s.label, `<div class="grid">
    <div class="col c6 center">${shot(image, cols(6), CONTENT_H)}</div>
    <div class="col c6"><p class="label">${esc(eyebrow)}</p><h2 class="h2 mt-3">${esc(h)}</h2>
      <ol class="numlist mt-5">${items.map(([k, v]) => `<li><p class="body"><span class="ink">${esc(k)}</span> <span class="muted">${esc(v)}</span></p></li>`).join("")}</ol></div>
  </div>`);
}

function quotePage(eyebrow, h, body, qLabel, quote) {
  return (s) => page(s.label, `<div class="grid">
    <div class="col c6"><p class="label">${esc(eyebrow)}</p><h2 class="h1 mt-3">${esc(h)}</h2><div class="stack mt-5 bottom">${paras(body)}</div></div>
    <div class="col c6 center"><p class="label">${esc(qLabel)}</p><p class="quote-big mt-4">${esc(quote)}</p></div>
  </div>`);
}

function listPage(eyebrow, h, body, items) {
  return (s) => page(s.label, `<div class="grid">
    <div class="col c6"><p class="label">${esc(eyebrow)}</p><h2 class="h1 mt-3">${esc(h)}</h2><div class="stack mt-5 bottom">${paras(body)}</div></div>
    <div class="col c6 center"><ol class="numlist big">${items.map((t) => `<li><p class="h2">${esc(t)}</p></li>`).join("")}</ol></div>
  </div>`);
}

function caseCover(s) {
  const img = s.coverFrame === "browser" ? shot({ src: s.cover, frame: "browser", url: s.meta.find(([k]) => k === "Live")?.[1] }, cols(7), CONTENT_H, false) : shot({ src: s.cover }, cols(7), CONTENT_H, false);
  return page(s.label, `<div class="grid">
    <div class="col c5"><p class="label">Case study ${s.no} · ${esc(s.kicker)}</p><h1 class="h1 mt-4">${esc(s.title)}</h1><p class="lead muted mt-5">${esc(s.lead)}</p>
      <dl class="facts cols-2 bottom">${s.meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl></div>
    <div class="col c7 center" style="align-items:flex-end">${img}</div>
  </div>`, "");
}

/* ── Assemble ──────────────────────────────────────────────────────────── */
const out = [];
const studyFirstPage = {};

// 1 Cover
out.push(page("Portfolio 2026", `<div class="grid">
  <div class="col c6"><h1 class="display">Hamza<br>Jamal</h1><p class="lead muted mt-6 measure-wide">Product and UX Designer. I work on activation, retention and the parts of a product people use every day. Currently at ImagineArt.</p>
    <dl class="facts cols-2 bottom"><div><dt>Role</dt><dd>Product Designer, ImagineArt</dd></div><div><dt>Based in</dt><dd>Lahore, Pakistan</dd></div><div><dt>Selected work</dt><dd>Six case studies, 2021 to 2026</dd></div><div><dt>Online</dt><dd>${SITE}</dd></div></dl></div>
  <div class="col c6 center" style="align-items:flex-end">${shot({ src: "ad-studio/cover.jpg" }, cols(6), CONTENT_H, false)}</div>
</div>`));

// 2 About
out.push(page("About", `<div class="grid">
  <div class="col c4 center">${shot({ src: "home/about-me.jpg" }, cols(4), CONTENT_H, false)}</div>
  <div class="col c7 start-6"><h2 class="h1">I design with clarity, empathy and purpose.</h2>
    <p class="lead muted mt-5">I have spent five years building product roadmaps with cross-functional teams, at startups and larger companies. Now I am at ImagineArt, working on AI creative tools. To me, design is problem-solving with empathy: the best products make complex things feel effortless for real people.</p>
    <div class="cells bottom">${[["Research over assumption.", "Every screen starts with a real user problem. Interviews, support tickets, session replays."], ["Ship the boring parts.", "Empty states, error states, edge cases, design systems. That is where the product lives."], ["Move the metric.", "Activation, retention, conversion. If the design does not move a number, it is decoration."], ["Engineers in the room.", "I pair with engineering from kickoff so what ships matches what was specced."]].map(([k, v]) => `<div><p class="h3">${esc(k)}</p><p class="small muted mt-2">${esc(v)}</p></div>`).join("")}</div></div>
</div>`));

// 3 Numbers
out.push(page("In numbers", `<div class="col" style="height:100%">
  <div class="grid" style="height:auto"><div class="c6"><h2 class="h1">Some numbers behind the work.</h2></div><div class="c6" style="padding-top:20px"><p class="lead muted">Every figure here comes from a shipped product or a test I ran. Where I do not have a number, the case study says so.</p></div></div>
  <div class="stats four bottom">${[["6x", "Conversion on Xiangqi.com after two lobby redesigns, 1.79% to 11%."], ["1M+", "Active users across the ImagineArt surfaces I design: Film Studio, Imagine Computer and Ad Studio."], ["81%", "Paid generations in Ad Studio that now succeed, up from 69% in June."], ["5+", "Years designing products, from discovery through to hand-off."]].map(([v, l]) => `<div><p class="stat">${esc(v)}</p><p class="small muted mt-4 measure">${esc(l)}</p></div>`).join("")}</div>
</div>`));

// 4 Experience
out.push(page("Experience", `<div class="grid">
  <div class="col c4"><h2 class="h1">Where I have worked.</h2>
    <div class="bottom"><p class="label">Education</p><p class="body mt-2">BSc Software Engineering</p><p class="small muted">UET Taxila, 2015 to 2019</p></div></div>
  <div class="col c8 center"><ol class="timeline">${[["Apr 2026 to now", "ImagineArt", "Product Designer", "I own activation, retention and monetisation surfaces across web and mobile, on AI creative tools used by a global community."], ["2024 to Feb 2026", "Carbonteq", "Senior UX/UI Designer", "Led a team of three on client work, including Ode to Beauty. Set up the shared design system and mentored the two designers on the team."], ["2019 to 2024", "Arbisoft", "Product Designer", "Client products for Xiangqi.com, Walter's Hospitality and Advance Learning. Two lobby redesigns on Xiangqi took conversion from 1.79% to 11%."], ["2018", "Summer internship", "Visual Designer", "Marketing material and websites for a handful of clients, built with engineers and kept pixel-accurate to spec."]].map(([d, c, r, t]) => `<li><p class="small quiet num">${esc(d)}</p><div><p class="h3">${esc(c)}</p><p class="small muted mt-1">${esc(r)}</p></div><p class="small muted">${esc(t)}</p></li>`).join("")}</ol></div>
</div>`));

// 5 Capabilities
out.push(page("Capabilities", `<div class="grid">
  <div class="col c4"><h2 class="h1">The skills I lean on.</h2>
    <div class="bottom"><p class="label">Tools</p><ul class="chips mt-4">${["Figma", "Framer", "Adobe Suite", "Mixpanel", "Hotjar", "Jira", "Claude"].map((t) => `<li>${t}</li>`).join("")}</ul></div></div>
  <div class="col c8 center"><div class="groups">${[["Research", ["User interviews", "Usability testing", "A/B testing", "Proto personas", "Competitor analysis"]], ["Structure", ["Information architecture", "User flows", "Concept sketches", "Wireframes"]], ["Craft", ["Prototypes and mockups", "Design systems", "Design hand-off"]], ["With the team", ["Design strategy", "Presentation", "Agile and Scrum"]]].map(([k, items]) => `<div><p class="label">${esc(k)}</p><ul class="mt-3">${items.map((t) => `<li class="body">${esc(t)}</li>`).join("")}</ul></div>`).join("")}</div></div>
</div>`));

// 6 Index (page numbers filled after assembly)
const INDEX_AT = out.length;
out.push(null);

// Studies
for (const s of STUDIES) {
  studyFirstPage[s.id] = out.length + 1;
  out.push(caseCover(s));
  for (const p of s.pages) out.push(p(s));
}

// Beyond the work
out.push(page("Beyond the work", `<div class="grid">
  <div class="col c5"><h2 class="h1">Mentoring, talks and books.</h2>
    <p class="body muted mt-5">I mentor designers on ADPList, where I am a certified mentor, and I am part of the design community in Lahore and online. I read a lot, and I share what I learn through talks and presentations.</p>
    <div class="bottom"><p class="label">Books that shaped how I work</p><p class="body mt-3">Never Split the Difference<br>Sprint<br>The Design of Everyday Things</p></div></div>
  <div class="col c7 center">${(() => {
    const w = (cols(7) - GUTTER) / 2, h = (CONTENT_H - GUTTER - 2 * CAPTION_H) / 2;
    const tiles = [["home/presentation.jpg", "Presentation"], ["home/usability-session.jpg", "Usability session"], ["home/hackathon.jpg", "Hackathon"], ["home/client-meetup.jpg", "Client meetup"]];
    return `<div class="tiles">${tiles.map(([src, cap]) => `<figure><div class="shot cover" style="width:${Math.floor(w)}px;height:${Math.floor(h)}px"><img src="${IMG(src)}" alt=""></div><figcaption class="caption">${cap}</figcaption></figure>`).join("")}</div>`;
  })()}</div>
</div>`));

// Testimonials
out.push(page("What people say", `<div class="col" style="height:100%">
  <h2 class="h1">What colleagues say.</h2>
  <div class="quotes mt-6">${[["“I had the pleasure of working alongside Hamza as a fellow product designer at ImagineArt. He was thoughtful in his design work and just as easy to collaborate with day to day. Projects always moved more smoothly when he was involved.”", "home/tamim.jpg", "Tamim Rizvi", "Design Engineer, ImagineArt"], ["“Hamza worked on the product design for Xiangqi, repeatedly exhibiting great problem-solving skills under time pressure. He is creative, a strong communicator, and continually advocates for the best end design and user experience.”", "home/natalia.jpg", "Natalia Wojcik", "Product, Harvard"], ["“I worked with Hamza at Arbisoft on the Walter's Hospitality project. His design skills are amazing and he is a thorough professional. I have learned a lot under his guidance.”", "home/sannan.jpg", "Sannan Ahmad Bhatti", "UI/UX, Product Designer, Arbisoft"]].map(([q, img, n, r]) => `<blockquote class="quote"><p class="body">${esc(q)}</p><div class="who"><img src="${IMG(img)}" alt=""><div><p class="small">${esc(n)}</p><p class="small quiet">${esc(r)}</p></div></div></blockquote>`).join("")}</div>
</div>`));

// Contact
out.push(page("Contact", `<div class="col" style="height:100%">
  <div class="bottom"><h2 class="display">Thanks for<br>reading.</h2>
  <p class="lead muted mt-6 measure-wide">Every project here has a longer write-up online, with the screens and numbers behind each decision. I would be glad to talk through any of them.</p></div>
  <dl class="facts cols-3 mt-7"><div><dt>Email</dt><dd>hmzajmal911@gmail.com</dd></div><div><dt>Website</dt><dd>${SITE}</dd></div><div><dt>LinkedIn</dt><dd>linkedin.com/in/hamzajamal-design</dd></div></dl>
</div>`, "dark"));

// Index page, now that numbers are known
out[INDEX_AT] = page("Selected work", `<div class="col" style="height:100%">
  <h2 class="h1">Six projects where the outcome moved the metric.</h2>
  <ol class="index mt-6 bottom">${STUDIES.map((s) => `<li><p class="label num">${s.no}</p><p class="h3">${esc(s.label === "Captions" || s.label === "Ad Studio" ? "ImagineArt " + s.label : s.label)}</p><p class="small muted">${esc(s.index)}</p><p class="small quiet">${esc(s.tag)}</p><p class="small num" style="text-align:right" data-ref="${s.id}">${String(studyFirstPage[s.id]).padStart(2, "0")}</p></li>`).join("")}</ol>
</div>`);

// mark study covers with data-id for the QA cross-check
let html = out.join("\n");
for (const s of STUDIES) html = html.replace(`<section class="page " data-label="${esc(s.label)}">`, `<section class="page " data-label="${esc(s.label)}" data-id="${s.id}">`);

const TOTAL = out.length;
const doc = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Hamza Jamal · Portfolio 2026</title>
<link rel="stylesheet" href="styles.css"><style>:root{--total-label:"${TOTAL}"}</style></head>
<body>
${html}
</body></html>`;
writeFileSync(resolve(ROOT, "src/index.html"), doc);
console.log(`wrote src/index.html with ${TOTAL} pages`);
for (const s of STUDIES) console.log(`  ${s.no} ${s.label}: starts on page ${studyFirstPage[s.id]}, ${s.pages.length + 1} pages`);
