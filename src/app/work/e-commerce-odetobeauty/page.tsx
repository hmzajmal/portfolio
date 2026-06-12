import { CaseStudyShell } from "@/components/case-study/shell";
import {
  CSHero,
  CSSection,
  CSBody,
  CSImage,
  CSQuote,
  CSStats,
  CSChallengeList,
  CSNext,
  CSCallout,
  CSTileGrid,
  CSNumberedList,
  CSMediaRow,
  CSDetailCard,
  CSPhaseList,
} from "@/components/case-study/primitives";

const ACCENT = "#cc74bf";

export const metadata = {
  title: "Ode to Beauty · Case Study · Hamza Jamal",
};

const roleResponsibilities = [
  "Analytics & heatmap analysis",
  "User testing and research",
  "UI design and prototyping",
  "Design system creation",
];

const team = [
  { initials: "DL", role: "Design Lead, Me", desc: "Requirements & business alignment" },
  { initials: "D1", role: "Designer #1", desc: "Campaign strategy & testing" },
  { initials: "D2", role: "Designer #2", desc: "Visual design & component creation" },
];

const researchInsights = [
  { src: "https://framerusercontent.com/images/YaaFgLLcgItX0ZnOjNoqhu9IfOw.png", label: "User Clicks" },
  { src: "https://framerusercontent.com/images/2XBMKYTVBFpuyE3Wt6S3KT0w.png", label: "Content Discoverability" },
  { src: "https://framerusercontent.com/images/L0UKs9yebYBE7r7SbPsOtR2IA.png", label: "Time Duration" },
  { src: "https://framerusercontent.com/images/PnaTgmqaLX2te2pRLHDJ39YAf6o.png", label: "Overall Benchmark" },
];

const strategyPhases = [
  {
    label: "Phase 1",
    title: "Analytics & Research",
    body: "Heatmap review, drop-off analysis, and moderated user sessions.",
  },
  {
    label: "Phase 2",
    title: "Ideation & Testing",
    body: "Trying different approaches and clickable prototypes for validation.",
  },
  {
    label: "Phase 3",
    title: "Design System",
    body: "Typography, colour tokens, and reusable components for consistency.",
  },
];

const researchMethods = [
  {
    label: "Method",
    title: "Analytics & Heatmaps",
    body: "Tools: Google Analytics + Hotjar. Focus: Drop-off points.",
  },
  {
    label: "Method",
    title: "Moderated Testing",
    body: "Sessions: 1:1 + guerrilla. Tasks: find & purchase.",
  },
  {
    label: "Method",
    title: "Heuristic Audit",
    body: "Focus areas: hierarchy & CTAs. Accessibility: basic compliance.",
  },
];

const challenges = [
  {
    problem: "Skin-type filters were not discoverable on the homepage.",
    solution:
      "Created a Skin Type section where users can find products by their specific concerns.",
  },
  {
    problem:
      "Out-of-stock items lacked clear labelling. A user didn't know until they clicked Add to Cart.",
    solution:
      "Out-of-stock items were placed at the bottom with a clear visual indicator.",
  },
  {
    problem: "Icons were misunderstood (AM/PM mistaken for dark mode).",
    solution:
      "Introduced icon and colour labels so users don't have to guess the meaning.",
  },
  {
    problem: "Ingredient details were dense and off-putting for some users.",
    solution: "Organised the content through clearer visual hierarchy and tags.",
  },
];

const keyFeatures = [
  {
    title: "Hero & Landing Pages",
    body: "Bold, visual-first banner with clear CTA and product spotlight.",
  },
  {
    title: "Product Cards",
    body: "Simplified hierarchy: image, benefit line, price, single CTA.",
  },
  {
    title: "Navigation & Categories",
    body: "Reduced categories with clearer labels and improved linking.",
  },
  {
    title: "Trust & Social Proof",
    body: "Shipping info, best-seller badges, and usage hints.",
  },
  {
    title: "Micro-copy & CTAs",
    body: "\"Add to bag\" changed to \"Add to cart\". Added value-added packages like free shipping.",
  },
];

const userImpactRows = [
  { label: "Task Completion", baseline: "27%", after: "100%" },
  { label: "Average Task Time", baseline: "4.2 minutes", after: "~2 minutes" },
  { label: "SUS Score", baseline: "Low scores", after: "High 80s" },
];

const businessImpact = [
  {
    title: "Better Landing Pages",
    body: "Marketing now has improved destinations for social campaigns.",
  },
  {
    title: "Reduced Friction",
    body: "Clearer path from social discovery to purchase decision.",
  },
  {
    title: "Brand Perception",
    body: "Site now feels like a curated beauty brand, not a generic marketplace.",
  },
];

const nextSteps = [
  {
    title: "A/B Testing",
    body: "Measure real conversion lift and revenue impact.",
  },
  {
    title: "Component Library",
    body: "Expand to product detail and checkout flows.",
  },
  {
    title: "Mobile Optimisation",
    body: "Continue iterating where social traffic lands.",
  },
];

export default function OdeToBeautyCaseStudy() {
  return (
    <CaseStudyShell bg="#f5f0f5">
      <CSHero
        eyebrow="E-commerce Redesign"
        title="Ode to Beauty"
        accent={ACCENT}
        description="Helping Ode to Beauty increase conversions and reduce bounce with a visual-first redesign."
        meta={[
          { label: "Duration", value: "6 weeks" },
          { label: "Role", value: "Lead Designer" },
          { label: "Team", value: "3 designers, 1 PM" },
          { label: "Industry", value: "E-commerce, Beauty" },
        ]}
      />

      <CSImage
        src="https://framerusercontent.com/images/eGR4KuR0q88MHZ7lUo57VN0f40.png"
        alt="Ode to Beauty cover"
      />

      <CSSection eyebrow="Impact" heading="Project Impact">
        <CSStats
          stats={[
            { value: "100%", label: "Task completion rate (from 27%)" },
            { value: "~2 min", label: "Average task time (from 4.2 min)" },
            { value: "80s", label: "SUS score" },
          ]}
        />
      </CSSection>

      <CSSection narrow>
        <CSCallout
          eyebrow="Key Achievement"
          heading="From generic marketplace to a real brand"
          body="Transformed the site from a generic marketplace to a real brand that builds trust with social visitors and converts marketing spend into sustainable revenue."
        />
      </CSSection>

      <CSSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CSDetailCard
            title="My Role"
            body="End-to-end design ownership from research through concept, UI design, and testing."
            bullets={roleResponsibilities}
          />
          <div className="rounded-2xl bg-white p-7">
            <p className="text-[13px] tracking-[0.14em] text-[rgba(0,0,0,0.55)] uppercase">
              Team
            </p>
            <ul className="mt-5 flex flex-col gap-5">
              {team.map((t) => (
                <li key={t.role} className="flex items-start gap-4">
                  <span
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[12px] text-white"
                    style={{ background: ACCENT }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-[14px] text-[#171717]" style={{ fontVariationSettings: '"wght" 600' }}>
                      {t.role}
                    </p>
                    <p className="mt-1 text-[13px] text-[rgba(0,0,0,0.6)]">{t.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div
              className="mt-6 rounded-xl p-5 text-[13px] leading-[1.65] text-[#171717]"
              style={{ background: "rgba(204,116,191,0.12)" }}
            >
              <span style={{ fontVariationSettings: '"wght" 600' }}>Tools Used. </span>
              Figma, Illustrator, Google Analytics, Hotjar, and simple moderated
              usability tests to drive data-informed design decisions.
            </div>
          </div>
        </div>
      </CSSection>

      <CSSection eyebrow="Problem Framing" heading="A generic marketplace, not a curated beauty brand">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7">
            <p className="text-[13px] tracking-[0.14em] uppercase" style={{ color: ACCENT }}>
              The Problem
            </p>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#171717]">
              The existing site felt like a generic marketplace rather than a
              curated beauty brand. A product experience that didn&apos;t
              convert social visitors.
            </p>
            <ul className="mt-5 flex flex-col gap-2 text-[14px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
              {["Unclear navigation and weak hierarchy", "Generic marketplace feel vs curated brand", "Poor conversion of social traffic"].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-7">
            <p className="text-[13px] tracking-[0.14em] uppercase" style={{ color: ACCENT }}>
              Why It Matters
            </p>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#171717]">
              With these issues, the brand risked continued poor performance
              from paid campaigns.
            </p>
            <ul className="mt-5 flex flex-col gap-2 text-[14px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
              {["High bounce rates from social traffic", "Poor marketing ROI due to low conversion", "Lack of brand differentiation in the marketplace"].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CSSection>

      <CSSection heading="Key Research Insights">
        <CSTileGrid tiles={researchInsights} cols={4} />
      </CSSection>

      <CSSection>
        <CSCallout
          eyebrow="Supporting Data"
          gradient={`linear-gradient(135deg, ${ACCENT} 0%, #d49b00 100%)`}
        >
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { v: "High", l: "bounce rates from social" },
              { v: "Low", l: "conversion rates" },
              { v: "Poor", l: "product discovery" },
            ].map((s) => (
              <div key={s.v}>
                <p className="text-[44px] leading-none text-white" style={{ fontVariationSettings: '"wght" 400, "opsz" 144' }}>
                  {s.v}
                </p>
                <p className="mt-3 text-[14px] text-white/85">{s.l}</p>
              </div>
            ))}
          </div>
        </CSCallout>
      </CSSection>

      <CSSection heading="Old Design">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/DgrZnLfYwpAZYYVDHU6i4azgz8.jpg" alt="Old homepage screenshot 1" className="block h-auto w-full" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/j5CFttK7xczzfC3Qg5gggGPioY.jpeg" alt="Old homepage screenshot 2" className="block h-auto w-full" />
          </div>
        </div>
      </CSSection>

      <CSSection eyebrow="Approach" heading="How I worked" narrow>
        <CSBody>
          <p>
            I combined heuristic evaluation with behavioural analytics (Hotjar)
            and competitive benchmarking against Soko Glam, Highfy, Vegas.pk,
            and Blume.
          </p>
        </CSBody>
      </CSSection>

      <CSSection heading="Design Strategy">
        <CSBody>
          <p>
            Keep the brand&apos;s boldness, but anchor interactions to
            recognisable e-commerce patterns so users never have to guess where
            to click.
          </p>
        </CSBody>
        <div className="mt-10">
          <CSPhaseList phases={strategyPhases} />
        </div>
      </CSSection>

      <CSSection heading="Research Methods">
        <CSBody>
          <p>
            Combined quantitative analytics with qualitative insights from
            lightweight user testing to identify pain points and validate
            design solutions quickly and confidently.
          </p>
        </CSBody>
        <div className="mt-10">
          <CSPhaseList phases={researchMethods} />
        </div>
      </CSSection>

      <CSSection heading="Heuristic Evaluation">
        <CSMediaRow
          items={[
            { src: "https://framerusercontent.com/images/NUETVf2hGcP1xyvbBSRGzG8w.jpg", alt: "Heuristic audit board" },
            { src: "https://framerusercontent.com/images/6ld3NHSwsmrq5XdBDF0bWYY36xw.jpg", alt: "Heuristic audit detail" },
          ]}
        />
      </CSSection>

      <CSSection heading="Competitive Research">
        <CSImage
          src="https://framerusercontent.com/images/0cej1YcfvMbIgEvJL5XWhKb3o.png"
          alt="Competitor logos: Soko Glam, Highfy, Vegas.pk, Blume"
        />
        <div className="mt-8">
          <CSImage
            src="https://framerusercontent.com/images/ohVsqPuf6viOhmQY7cQJ3s9gIE.jpg"
            alt="Competitor comparison board"
          />
        </div>
      </CSSection>

      <CSSection eyebrow="Challenges" heading="Four problems that showed up in testing" narrow>
        <CSChallengeList items={challenges} problemBg="rgba(204,116,191,0.14)" />
      </CSSection>

      <CSSection narrow>
        <CSCallout
          eyebrow="Key Learnings"
          heading="Fast research is enough signal"
          body="Fast, focused research plus analytics provides enough signal to make confident design changes without a long discovery phase. A small amount of visual polish can have outsized effects on perceived brand value and trust for social visitors."
          gradient={`linear-gradient(135deg, ${ACCENT} 0%, #d49b00 100%)`}
        />
      </CSSection>

      <CSSection eyebrow="Solution" heading="Three principles, one design system" narrow>
        <CSBody>
          <p>
            Redesigned the homepage and product flow for clarity. I emphasised
            discoverability by skin type, relocated and styled CTAs for stronger
            visibility, simplified ingredient layouts, and introduced consistent
            typography and colour tokens across the site.
          </p>
        </CSBody>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { t: "Visual-First", b: "Bold, immediate visual impact for social visitors." },
            { t: "Trust & Social Proof", b: "Clear signals to reassure social traffic." },
            { t: "Simplified Journey", b: "Streamlined path from discovery to purchase." },
          ].map((p) => (
            <div key={p.t} className="rounded-2xl bg-white p-7">
              <p className="text-[16px] text-[#171717]" style={{ fontVariationSettings: '"wght" 600' }}>
                {p.t}
              </p>
              <p className="mt-3 text-[14px] leading-[1.65] text-[rgba(0,0,0,0.65)]">
                {p.b}
              </p>
            </div>
          ))}
        </div>
      </CSSection>

      <CSSection heading="Design System">
        <CSImage
          src="https://framerusercontent.com/images/q0EsZa0ZzupNO6bU49nci6kuUA.png"
          alt="Design system overview"
        />
      </CSSection>

      <CSSection heading="Key Features" narrow>
        <CSNumberedList items={keyFeatures} accent={ACCENT} />
      </CSSection>

      <CSSection heading="Before & After">
        <p className="text-[13px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">
          Main section
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/Uy8zBOyunfwBtq9jkYnwtewctg.jpg" alt="Homepage before" className="block h-auto w-full" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/0o0DUNy7QrsTnuLUCxkK1bnuFA.jpg" alt="Homepage after" className="block h-auto w-full" />
          </div>
        </div>
        <p className="mt-12 text-[13px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">
          Product card
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/KkHObzl7x6m8WE1c9nalD24oU.png" alt="Product card before" className="block h-auto w-full" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/wvQ18wmpJteTIcPKuCUHwcTrKg.png" alt="Product card after" className="block h-auto w-full" />
          </div>
        </div>
        <p className="mt-12 text-[13px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">
          Side-by-side walkthrough
        </p>
        <div className="mt-6">
          <CSMediaRow
            items={[
              { src: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4", alt: "Walkthrough", type: "video" },
              { src: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4", alt: "Walkthrough", type: "video" },
            ]}
          />
        </div>
      </CSSection>

      <CSSection eyebrow="Test" heading="Usability & SUS Snapshot">
        <CSBody>
          <p>
            Moderated remote sessions (Google Meet) with 5 participants using a
            think-aloud protocol. Three observers captured notes. Tasks and
            prompts were consistent across sessions. Surveys were collected via
            Typeform and aggregated in Google Sheets.
          </p>
        </CSBody>
        <div className="mt-10">
          <CSStats
            stats={[
              { value: "100%", label: "Task completion. Prototype testing achieved full completion" },
              { value: "~2 min", label: "Average task time. Users complete tasks in under 2 minutes" },
              { value: "High 80s", label: "SUS score. Strong perceived usability" },
            ]}
          />
        </div>
      </CSSection>

      <CSSection heading="User Impact">
        <div className="rounded-3xl bg-white p-8 md:p-10">
          <p className="text-[13px] tracking-[0.14em] uppercase" style={{ color: ACCENT }}>
            Prototype Testing Results
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {userImpactRows.map((r) => (
              <li key={r.label} className="grid grid-cols-1 items-center gap-2 border-b border-[rgba(0,0,0,0.06)] pb-4 last:border-0 md:grid-cols-[1fr_auto_auto_auto] md:gap-6">
                <span className="text-[14px] text-[#171717]">{r.label}</span>
                <span className="rounded-full border border-[rgba(0,0,0,0.15)] px-3 py-1 text-[12px] text-[rgba(0,0,0,0.65)]">
                  {r.baseline}
                </span>
                <span className="text-[rgba(0,0,0,0.4)]">→</span>
                <span
                  className="rounded-full px-3 py-1 text-[12px] text-white"
                  style={{ background: ACCENT }}
                >
                  {r.after}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CSQuote accent={ACCENT}>
              &ldquo;The site now feels like a real brand,&rdquo; and
              participants found product options much faster than before.
            </CSQuote>
          </div>
        </div>
      </CSSection>

      <CSSection heading="Business Impact">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {businessImpact.map((b) => (
            <li key={b.title} className="rounded-2xl p-7" style={{ background: "rgba(204,116,191,0.12)" }}>
              <p className="text-[15px] text-[#171717]" style={{ fontVariationSettings: '"wght" 600' }}>
                {b.title}
              </p>
              <p className="mt-3 text-[14px] leading-[1.65] text-[rgba(0,0,0,0.72)]">{b.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <CSCallout
            eyebrow="Next Phase"
            body="Live A/B testing planned to measure real-world conversion lift and revenue impact from the new design system."
            gradient={`linear-gradient(135deg, ${ACCENT} 0%, #d49b00 100%)`}
          />
        </div>
      </CSSection>

      <CSSection heading="Next Steps">
        <CSBody>
          <p>
            Planning the next phase to measure live impact and expand the
            design system.
          </p>
        </CSBody>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {nextSteps.map((n) => (
            <li key={n.title} className="rounded-2xl bg-white p-7">
              <p className="text-[15px] text-[#171717]" style={{ fontVariationSettings: '"wght" 600' }}>
                {n.title}
              </p>
              <p className="mt-3 text-[14px] leading-[1.65] text-[rgba(0,0,0,0.65)]">{n.body}</p>
            </li>
          ))}
        </ul>
      </CSSection>

      <CSNext
        accent={ACCENT}
        next={{
          title: "CRM Event Management",
          description:
            "Walter's Hospitality is an event-management company that organises a wide range of events.",
          tags: ["B2B", "Hospitality"],
          slug: "walters-hospitality",
        }}
      />
    </CaseStudyShell>
  );
}
