# Content inventory

Source: https://hamzajamal.design, crawled 5 Oct 2026 with headless Chrome.
One markdown file per page sits beside this file. Images are in
`../assets/<slug>/` at the resolution the site serves (there is no srcset
on the site; every `<img>` points at the original file).

`/work/imagine-mcp` returns 404 on the live site, so it is not in this
inventory. `/work/streak` exists but nothing on the site links to it.

## Facts on the home page that can be used as numbers

- "5+ years of product design experience"
- "1M+ active users": reach of the surfaces designed at ImagineArt across Film Studio, Imagine Computer and Ad Studio
- "1.79% → 11%": conversion lift at Arbisoft (Xiangqi) in two quarters
- Six case studies on the work grid (Ad Studio, Captions, Ode to Beauty, Walter's Hospitality, Advance Learning, Xiangqi)
- ADPList certified mentor
- Led a team of three at Carbonteq

Experience as listed: ImagineArt, Product Designer, Apr 2026 to present.
Carbonteq, Sr. UX/UI Designer, 2024 to Feb 2026. Arbisoft, Product
Designer, 2019 to 2024. Summer Internship, Visual Designer, 2018.
Education (in site data, not rendered): BSc Software Engineering, UET
Taxila, Oct 2015 to Aug 2019.

Tools: Claude, Figma, Jira, Mixpanel, Hotjar, Framer, Adobe Suite.
Skills: User Interviews, Usability Testing, A/B Testing, Proto Personas,
Competitor Analysis, Information Architecture, User Flows, Concept
Sketches, Customer Journey Mapping, Wireframes, Prototypes & Mockups,
Design Systems, Presentation, Design Handoff, Design Strategy, Agile / Scrum.

Operating principles: Research over assumption. Ship the boring parts.
Move the metric. Engineers in the room.

---

## 1. ImagineArt Ad Studio

- **Title on site**: Rebuilding Ad Studio around what people could see
- **Product**: Ad Studio, the image and video ad maker inside ImagineArt (AI creative suite, over a million users). Web and mobile app.
- **Role**: Product design, analytics review, UI and interaction design, mobile design, hand-off
- **Team**: Product manager, front end engineer, back end engineer, growth specialist, QA
- **Timeline**: July to September 2026. Launched June 2026 as a prompt bar; opened to Free users in July; redesign rolled out the last week of September.
- **Audience**: solo creators, small agencies, founders and shop owners with no designer, and from July a large Free tier
- **Problem**: Launched as a prompt bar with hidden plus buttons; every choice was a modal. The brief blamed the AI. The failure log showed nine in ten failed generations were a plan gate or an empty prompt. Problem statement: an ad maker where every choice is visible before you spend a credit, nothing you can click fails because of your plan, and it fits on a phone screen.
- **Process steps**:
  1. Read every failed generation in Mixpanel before opening Figma. Jun to Sep 2026: 10,211 "model not allowed on this plan", 1,891 "prompt is required", 804 insufficient credits, 58 real generation errors.
  2. Looked hard at the existing version (prompt bar, Product and Avatar as modals).
  3. Spent a week making the same ad in OpenArt and Higgsfield; both lead with the model. Decision: lead with the ad.
  4. Replaced the prompt bar with five cards: Scene, Product, Avatar, Visual Reference, Style. Prompt optional. PM and CEO wanted a dozen controls; shipped five.
  5. Every choice became a picker of real examples; products and avatars in a saved library.
  6. Every result opens with Relight, Camera Angles, Variate, Background Changer, Upscale, Edit, plus a panel listing what made it.
  7. Mobile rebuilt as one scrolling screen; plan gate shows before Generate.
  8. Rolled out end of September.
- **Outcomes and metrics**: 81% paid generations succeed (up from 69% in June). 8x weekly users after opening to Free (about 120 to over 900 a week). 9 in 10 failures traced to two causes the redesign removes. October numbers pending.
- **Lessons**: Read the failures before you draw. Volume is not health. On a phone, the screen is the funnel.
- **Images** (`assets/ad-studio/`): cover.jpg (laptop and phone), home-laptop.jpg, old-home-laptop.jpg, old-2-product-modal.png, old-3-avatar-modal.png, create-pair.jpg, desktop-3.png (scene picker), desktop-4.png (product picker), result-pair.jpg, mobile-1-phone.jpg, mobile-3-phone.jpg, mobile-4-phone.jpg. The failure chart is rendered in code (data above), not an image.

## 2. ImagineArt Captions

- **Title on site**: CAPTIONS
- **Product**: Captions inside ImagineArt's video suite. Upload a video, pick a style, add captions; can translate them. Live at imagine.art/video/captions.
- **Role**: Product Designer. Scope: research, design, tracking
- **Team**: TODO: confirm with Hamza (site lists no team; copy mentions working sessions with the creative team)
- **Timeline**: 2026. Live about eight weeks by 15 Sep 2026; Mixpanel window 20 Jul to 15 Sep 2026.
- **Problem**: Had to be the easiest tool in the suite (people search for it by name). Hard part is accuracy; names are the words the AI gets wrong most.
- **Process steps**:
  1. Used a competitor (Veed) start to finish before drawing screens; slow points were settings and fixing wrong words.
  2. Placed Captions in the same menu as every other video tool and on the toolbar of any existing video (Edit Captions). Placement in Ad Studio planned, not built.
  3. Styles are real pictures with captions on them; nine on the panel, See All for the rest; styles chosen with the creative team; word-by-word highlight on by default.
  4. The big decision: no big text editor. A Vocabulary swap: type the right word, say which word it replaces, run it again.
- **Outcomes and metrics**: 2,073 visitors in eight weeks; 72% made a video (1,486); 52% downloaded (1,070); 2% bought credits (46). Visitors from 6 in week one to 300 to 400 a week. 97% on laptop. Monetisation and step tracking are the stated open work.
- **Images** (`assets/imagineart-captions/`): cover.jpg (three phones), mode-select.jpg, mode-select-mobile.jpg, presets.jpg, presets-mobile.jpg, presets-all.jpg, result.jpg (upload state), result-clip.jpg (captioned clip), edit-captions.jpg, vocabulary.jpg.

## 3. Ode to Beauty

- **Title on site**: Ode to Beauty
- **Product**: A skincare e-commerce store in Pakistan selling Western brands. Web.
- **Role**: Lead Designer; owned research and business alignment. Done at Carbonteq.
- **Team**: 3 designers, 1 PM
- **Timeline**: 6 weeks, 2024
- **Problem**: Instagram ads sent people to a site that looked like a marketplace and did not convert. The store's strength (sorting by skin type and concern) was buried in a menu.
- **Process steps**:
  1. Hotjar heatmaps and Google Analytics drop-off as the start.
  2. Heuristic pass; compared against Soko Glam, Highfy, Vegas.pk, Blume.
  3. Five moderated sessions on the old site, two tasks (find a product for your skin type; buy it) as baseline.
  4. Four fixes: skin-type filters on the homepage; out-of-stock items labelled and moved down; text labels on every icon (AM/PM icons read as dark mode); ingredient lists as tags.
  5. Small design system (type, colour tokens, components). Product card rebuilt. "Add to bag" became "Add to cart"; free shipping next to price.
- **Outcomes and metrics**: Task completion 27% on old site to 5 of 5 on the new prototype; about two minutes instead of four; usability score in the high 80s. Prototype numbers from five people. Live A/B result not available; no revenue claim.
- **Images** (`assets/e-commerce-odetobeauty/`): ode-to-beauty-cover.png, old-homepage-screenshot-1.jpg, old-homepage-screenshot-2.jpeg, heuristic-audit-board.jpg, competitor-comparison-board.jpg, homepage-after.jpg, homepage-before.jpg, product-card-before.png, product-card-after.png (both small, 281x600 and 310x531), design-system-overview.png.

## 4. Walter's Hospitality

- **Title on site**: Walter's Hospitality
- **Product**: An events company CRM: planners, office staff and every outside vendor in one system. Web.
- **Role**: Product Designer
- **Team**: 12, at Arbisoft
- **Timeline**: 12 months, 2023
- **Problem**: Every event lived in a spreadsheet, an email thread, a paper file and two people's heads. Vendor management handled differently per vendor.
- **Process steps**:
  1. Interviewed planners, office staff and vendors one at a time; sat through the four-meeting planning cycle.
  2. Finding: vendors are not one kind of user (package florist vs custom florist vs photographer).
  3. Vendor profile that changes shape by vendor type; a portal per role, each prototyped and tested with its user.
  4. Reports page with finance: revenue by period, which packages sell.
  5. Delivery: one role's flow end to end, ship, next.
- **Outcomes and metrics**: Shipped; replaced spreadsheets, email and paper. No post-launch usage numbers (client did not instrument). No hours-saved claim.
- **Images** (`assets/walters-hospitality/`): walter-s-hospitality-cover.jpeg (collage), synthesis-board.png, walter-s-modular-vendor-profile-ui.png (note: this image shows a brainstorming board, not the profile UI), vendor-profile-screens.png (very large, 9376x4672), walter-s-reports-dashboard.png.

## 5. Advance Learning

- **Title on site**: Advance Learning
- **Product**: An online school for the Saudi Embassy. Web.
- **Role**: Product Designer
- **Client**: Saudi Embassy, via Arbisoft. Team size: TODO: confirm with Hamza (site does not say)
- **Timeline**: Nov 2022 to Aug 2023. Redesign launched December 2022; approved January 2023.
- **Problem**: More than half of new students quit at sign-up; most of the rest never opened a course. No direct access to students; evidence from numbers, relayed quotes and the product. A 13-year-old quit at too many choices.
- **Process steps**:
  1. Cut sign-up to essentials; moved the rest to settings; seven-day trial replaced the paywall. Sign-up fixed before the dashboard.
  2. Dashboard in two rounds; one next step per state; grade-level themes (client requirement).
  3. Wireframes reviewed with engineers before high fidelity.
  4. Design system: inventory session with engineers; atoms, molecules, organisms; rebuilt components.
  5. Retrospective: hand-off documents for every flow (states, interactions, failure cases).
- **Outcomes and metrics**: Approved by the embassy on the first review (Jan 2023). No post-launch sign-up numbers (client owned analytics).
- **Images** (`assets/E-learning-management/`): advance-learning-platform-overview.gif, signup-and-trial-flow.png, two-dashboard-iterations.jpeg (tall), theme-variants-for-the-dashboard.png, components-inventory-list.png, design-system-overview.png, handoff-documentation.png, final-approved-ui.png (note: shows a Grafana report, not the UI).

## 6. Xiangqi.com

- **Title on site**: Xiangqi.com
- **Product**: Chinese chess online against people or bots. Web and mobile (Android). Live at play.xiangqi.com.
- **Role**: Product Designer, Research
- **Team**: 8, at Arbisoft
- **Timeline**: Jan 2021 to Dec 2022
- **Problem**: Retention 20% (one in five came back). Business wanted ten times the players in a year. Product decisions had been made by engineers.
- **Process steps**:
  1. One-question rating after every game. Findings: too much on screen in play; could not find games with the wanted timer and rules; invite-a-friend hidden.
  2. Competitive read of Chess.com, Lichess, TianTian plus their store reviews.
  3. New IA with the PM; two lobby layouts on paper; priced with the tech lead; cheaper one was also clearer.
  4. Version 2: lobby built around live games. Four months of heatmaps: empty lobby off-peak, New Game button not seen, slow matchmaking pushing people to bots.
  5. Version 3: leads with the board; lobby works with three players or three hundred; New Game the one obvious action; sign-up cut to fewer fields; mobile app designed in parallel.
- **Outcomes and metrics**: Conversion 1.79% to 11% after version 3. Android app passed 100,000 downloads on the Play Store. Retention rose from the 20% baseline; final figure not given.
- **Images** (`assets/xiangqi/`): xiangqi-com-cover.png, old-lobby-ui.png, information-architecture-diagram.png, wireframe-variants.png, version-2-lobby.png, heatmap-overlay.png, lobby-before-and-after.png, signup-before-and-after.png, mobile-design-screens.png, conversion-chart.jpg.

## 7. Streak (unlinked)

- **Product**: A four-day login streak on the ImagineArt home that unlocks a 40% discount for free users. Shipped 2026.
- **Role**: Product Designer. Team: TODO: confirm with Hamza.
- **Problem**: Free users used 100 daily credits and left; a permanent discount went unnoticed.
- **Decisions**: four days (three teaches people to delay, seven is too long); orange flame; gold gift box on day four; resets at local midnight; follows the account; twice a day counts once.
- **Outcomes**: Live; measuring day-two return, day-four completion and 30-day paid conversion. No numbers.
- **Images** (`assets/streak/`): before.png, after.png, plus the SVG parts of the animated cover.

---

## TODO: confirm with Hamza

1. Captions: team composition (PM, engineers, who else).
2. Advance Learning: team size.
3. Streak: team, and whether it should appear at all (nothing links to it).
4. Ad Studio: the "last week of September" ship date and the "week in OpenArt and Higgsfield" line were never confirmed by you (noted in the repo handoff).
5. "1M+ active users" is claimed across Film Studio, Imagine Computer and Ad Studio; only Ad Studio has a case study. Fine for a numbers page, but say if you would rather scope it to Ad Studio.
6. Carbonteq (2024 to Feb 2026) overlaps Arbisoft (2019 to 2024). Exact start and end months for the experience timeline.
7. Two LinkedIn URLs on the site (hero: linkedin.com/in/hamzajamal-design, footer: linkedin.com/in/hmzajmal). Which one goes in the PDF.
8. Walter's: the image named "modular vendor profile" is a brainstorming board, and the real profile screens file is a 9376px collage. Say if you have a single clean profile screen.
9. Advance Learning: "final-approved-ui.png" is a Grafana report. Say if you have a screen of the approved dashboard.
10. Natalia Wojcik's title is "Product · Harvard" on the site. Confirm before quoting her in a formal document.
