# Imagine.art Work — Portfolio Evaluation

Context: Hamza joined Imagine.art on Apr 13, 2026 as Product Designer. The
existing portfolio case studies (Ode to Beauty, Walter's Hospitality,
Advance Learning, Xiangqi) are all from earlier roles (Arbisoft and
Carbonteq). The portfolio reads as outdated for any AI-first or
SaaS-shaped role he targets next.

Below is an inventory of recent Imagine.art work with a hiring-manager
lens applied to each.

---

## What hiring managers and clients look for in a senior PD portfolio

1. **Evidence of impact.** Metrics on shipped features (activation,
   retention, conversion, revenue).
2. **Range.** Different surfaces (consumer, B2B, marketing, growth) and
   different problem types (zero-to-one, redesign, scale).
3. **Strategic thinking.** Research → decisions → trade-offs → outcomes.
   Not just "I made screens."
4. **Role clarity.** Exactly what *Hamza* did versus the team.
5. **Visual craft.** The work itself looks excellent.
6. **Storytelling.** A clear narrative arc, not a screen dump.

A portfolio with 3 well-told case studies almost always beats one with 6
shallow ones.

---

## Inventory

### 1. Real-time Try-On

A webcam-based virtual try-on for clothing. Credits get consumed per
session.

**Status:** Designed and shipped to engineering, but the feature was
**never released** to end users.

**Strengths**
- Technically ambitious. Camera + AI + commerce.
- Forces design decisions across permissions, framing, latency, error
  states, and consumption (credit) UX.
- Easy to make visually striking.

**Risks**
- "Never shipped" is the question every interviewer will ask.
- Without launch data, impact is theoretical.

**Verdict:** Include, but frame honestly. Senior designers own the
reality of their work, including when it didn't ship. A two-line
explanation of why (priority shift, business call, technical debt) plus
what you'd do next is more compelling than hiding the outcome.

---

### 2. Landing Page Designs (3 high-ranking pages)

- **2a. Imagine.art MCP** — landing for the Model Context Protocol
  integration.
- **2b. Ad Studio** — landing for the AI ad creation tool.
- **2c. AI Audio Studio** — landing for the AI audio product.

**Strengths**
- Three landings show range of marketing-design craft.
- "High ranking" implies measurable SEO or conversion outcome.
- Visual storytelling for products that need explaining (good entry
  point for AI-curious users).

**Risks**
- Three near-identical case studies look redundant on a portfolio.
- Marketing pages are sometimes discounted by product-design hiring
  managers as "not core PD work."
- Without conversion numbers, they're just pretty pages.

**Verdict:** Combine into **one** case study called something like
"Marketing site at Imagine.art" or "Landing pages for three AI
products," with all three under it. Lead with the strongest performer.

---

### 3. Gamification

- **3a. Task-based discount.** User completes tasks to unlock additional
  discounts.
- **3b. Daily streak.** 4-day streak earns a reward.

**Strengths**
- Pure activation-and-retention design, which is the most
  hiring-manager-relevant work a senior PD can show.
- Well-understood mechanic with quantifiable outcomes.
- Combines behavioural design with reward systems and UI craft.

**Risks**
- Only valuable if shipped with data. "I designed a streak" with no
  numbers is weak.
- Two small mechanics aren't enough for two separate case studies.

**Verdict:** Strong candidate **if shipped with metrics.** Combine the
two into a single "Activation and retention at Imagine.art" case study.

---

## Recommended new portfolio composition

### Keep from the old portfolio

| # | Project | Why |
|---|---|---|
| 1 | **Ode to Beauty** | Carries the only hard conversion metric (1.79% → 11%). Visual range, B2C ecom. |
| 2 | **Walter's Hospitality** | Shows enterprise B2B / CRM / multi-user systems. Different from everything else. |

### Add from Imagine.art

| # | Project | Why |
|---|---|---|
| 3 | **Real-time Try-On at Imagine.art** | Most ambitious recent work. AI + product. Frame honestly about ship status. |
| 4 | **Gamification at Imagine.art** (combined streak + tasks) | Pure activation/retention. Most relevant to product-design hiring. |
| 5 | **Marketing site for three AI products** (combined MCP + Ad Studio + Audio Studio) | Visual craft + range + measurable. |

### Retire

| # | Project | Why retire |
|---|---|---|
| – | **Advance Learning** | Older. EdTech / Saudi Embassy client is less relevant for SaaS or AI-first roles. |
| – | **Xiangqi** | Older. The 1.79% → 11% metric is the only thing that stood out, and that one already lives in the work history line. |

Final count: 5 case studies. 2 carryovers, 3 new.

---

## Storytelling structure for each

Every case study should answer five questions, in order:

1. **What was the situation?** One paragraph of context.
2. **Why did it matter?** What was the user pain or business risk?
3. **What did I do?** Research, decisions, the specific design moves.
4. **What shipped (or what was learned)?** Honest outcomes.
5. **What would I do next?** Reflection. Senior signal.

Below, a draft of the narrative arc for each new case study.

### Real-time Try-On

- **Hook stat:** A single arresting line. "Designed an AI-powered
  virtual try-on across web, permissions, credits, and error states.
  Not shipped — here's what I'd do differently."
- **Problem:** Online clothing has a returns problem. Imagine.art's
  user base is creative and visual. A try-on bridges discovery and
  intent.
- **Decisions to highlight:**
  - Permissions and framing UX. Camera grant is a high-friction
    moment. How did you reduce drop-off in the prototype?
  - Credit consumption model. How do you make a paid action feel fair?
  - Latency and error states. AI is slow and sometimes wrong.
- **Outcome:** Be specific. "Internal user tests at N=X showed Y." Then
  the honest line about why it didn't ship.
- **Reflection:** What did you learn about designing for camera + AI?
  What would you ship first if you got a second pass?

### Gamification (streak + tasks)

- **Hook stat:** "Lifted X-day retention by Y% with a streak and a
  task ladder."
- **Problem:** Activation drop-off after first session is the biggest
  growth lever in any SaaS. Imagine.art needed a reason for users to
  come back day two.
- **Decisions to highlight:**
  - Why a 4-day streak (not 7, not 3)?
  - Task design. What counts as a task? How is difficulty calibrated?
  - Reward design. Discount vs credits vs cosmetic? How do you avoid
    devaluing the product?
- **Outcome:** Numbers. Day-2 return, day-7, total credits redeemed,
  conversion to paid.
- **Reflection:** Where did the streak break? What's next?

### Marketing site for three AI products

- **Hook:** "Designed three high-converting landings for Imagine.art's
  AI products. Best one lifted X by Y%."
- **Problem:** AI products are hard to explain. Each page has to
  educate, demonstrate, and convert in one scroll.
- **Decisions to highlight:**
  - A shared visual language across three pages, with each one having
    its own moment.
  - How did you teach users what each tool does without overwhelming?
  - SEO and SERP-aware page structure if relevant.
- **Outcome:** Conversion lift, SEO ranking, organic traffic. Pick the
  one that moved the most.
- **Reflection:** What's the one principle that worked across all
  three?

---

## Build plan in the Next.js portfolio

For each new case study, create
`src/app/work/[slug]/page.tsx` using the existing case-study primitives
(`CSHero`, `CSSection`, `CSImage`, `CSStats`, etc.). The shell already
supports a per-page `bg` and `accent` colour, so each Imagine.art piece
can have its own visual identity:

- **Try-On:** Cool / camera-blue accent. Lots of full-bleed product
  imagery. Big stats tile for credits-per-session model.
- **Gamification:** Warm / amber accent (matches Imagine.art brand).
  Heavy use of before/after screen comparisons and chart imagery.
- **Marketing:** Neutral white. Three big landing screenshots inline.
  Stats tiles per page.

Each case study takes roughly the same component vocabulary as Ode to
Beauty does today.

---

## Open questions for Hamza

1. Did Try-On ship to any internal users or stakeholders for testing?
   That's the strongest framing if so.
2. Do you have metrics for the streak and tasks? Even directional ones.
3. Which landing page performed best, and by what measure?
4. Are there usage screenshots or videos you can share for any of
   these?
5. Do you want to keep Advance Learning and Xiangqi as a hidden
   "archive" page, or fully retire them?
