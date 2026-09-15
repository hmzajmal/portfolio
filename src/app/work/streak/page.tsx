import { CaseStudyShell } from "@/components/case-study/shell";
import { StreakCover } from "@/components/case-study/streak-cover";
import { CSFrame, CSShot } from "@/components/case-study/primitives";

const ACCENT = "#FB5607";

/** Table of contents for the navbar. Ids match the section anchors below. */
const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "decision", label: "Decision" },
  { id: "before-after", label: "Before & after" },
  { id: "edge-cases", label: "Edge cases" },
  { id: "outcome", label: "Outcome" },
];

export const metadata = {
  title: "Streak · ImagineArt · Case Study · Hamza Jamal",
};

export default function StreakCaseStudy() {
  return (
    <CaseStudyShell bg="#FDF8EE" currentSlug="streak" sections={NAV_SECTIONS}>
      <StreakCover />

      {/* Hero meta strip */}
      <section className="pt-2 pb-20 md:pt-4 md:pb-28">
        <div className="mx-auto max-w-[820px] px-6 md:px-10">
          <dl className="flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--color-line-strong)] pt-8">
            {[
              { label: "Role", value: "Product Designer" },
              { label: "Surface", value: "ImagineArt home" },
              { label: "Status", value: "Shipped" },
              { label: "Year", value: "2026" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <dt className="eyebrow">{m.label}</dt>
                <dd className="body-sm text-[var(--color-ink)]">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section number="01" id="problem" eyebrow="The problem">
        <H2>Free users had no reason to pay.</H2>
        <Prose>
          <p>
            ImagineArt gives free users 100 credits a day. People used them
            and left. Very few paid.
          </p>
          <p>
            A daily discount ran at the same time. Nobody noticed it. An
            offer that is always there stops feeling like an offer. So we
            kept the same discount and made users earn it.
          </p>
        </Prose>
      </Section>

      <Section number="02" id="decision" eyebrow="The core decision">
        <H2>Why four days.</H2>
        <Prose>
          <p>
            The length mattered most. Too short, and users learn to wait.
            Too long, and they give up.
          </p>
        </Prose>
        <div className="mt-14 flex flex-col gap-12">
          <Choice
            label="Three days"
            verdict="rejected"
            body="Anyone ready to pay today could wait three days for a cheaper price. We would be teaching users to delay."
          />
          <Choice
            label="Seven days"
            verdict="too long"
            body="A week is a lot to ask for a habit that does not exist yet. Every extra day is another chance to quit."
          />
          <Choice
            label="Four days"
            verdict="won"
            body="Long enough to take effort. Short enough to finish inside a work week. Most streaks break on day two, and four days gets past that point fast."
            highlight
          />
        </div>
      </Section>

      <Section number="03" eyebrow="Why it works">
        <H2>What a streak does to a user.</H2>
        <Prose>
          <p>A streak does three things at once.</p>
          <p>
            <span className="strong">Near rewards feel bigger.</span>{" "}
            People care far more about a reward this week than one next
            month. Four days keeps the reward close.
          </p>
          <p>
            <span className="strong">Motivation grows near the finish.</span>{" "}
            The closer the goal, the harder people push. By day three,
            finishing feels obvious.
          </p>
          <p>
            <span className="strong">Nobody wants to lose progress.</span>{" "}
            Two days in, the streak feels like yours. The same 100 credits
            are now something to protect.
          </p>
        </Prose>
      </Section>

      <Section number="04" id="before-after" eyebrow="Before and after" wide>
        <H2>What changed on the home page.</H2>
        <Prose>
          <p>Same 100 credits. New frame.</p>
        </Prose>
        <div className="mt-16">
          <CSFrame columns={2}>
            <CSShot
              src="/work/streak/before.png"
              alt="Home before the streak feature"
              caption="Before. A plain 100 free credits message. No progress. No reason to return tomorrow."
            />
            <CSShot
              src="/work/streak/after.png"
              alt="Home after the streak feature"
              caption="After. The same credits, shown as Day 1 of a four-day streak, with 40% off waiting at the end."
            />
          </CSFrame>
        </div>
      </Section>

      <Section number="05" eyebrow="Visual decisions">
        <H2>Why orange, and why a flame.</H2>
        <Prose>
          <p>
            Orange feels warm and urgent. Red reads as a warning and yellow
            as caution. Orange is also ImagineArt&apos;s brand colour.
          </p>
          <p>
            The flame needed no debate. Snapchat and Duolingo taught
            everyone what it means. A new symbol would only slow people
            down.
          </p>
          <p>
            Day four swaps the flame for a gold gift box. The change tells
            you that you have arrived.
          </p>
        </Prose>
      </Section>

      <Section number="06" id="edge-cases" eyebrow="Edge cases">
        <H2>Three details engineering asked about.</H2>
        <dl className="mt-12 flex flex-col gap-8">
          <EdgeCase
            term="Timezone"
            def="Streaks reset at the user's local midnight. A user in Karachi and one in San Francisco each get a fair day."
          />
          <EdgeCase
            term="Account, not device"
            def="The streak follows the account, so it carries over from laptop to phone."
          />
          <EdgeCase
            term="Multiple sessions a day"
            def="Logging in twice in one day counts once. No gaming the counter."
          />
        </dl>
      </Section>

      <Section number="07" eyebrow="Open question">
        <H2>When a streak breaks.</H2>
        <Prose>
          <p>
            Miss a day and the streak resets. The 40% is gone. You start
            again at day one.
          </p>
          <p>
            A discount for broken streaks would undo the point. The reward
            has to be earned, or it is the old daily discount again.
          </p>
          <p>
            A streak freeze is the fair middle. One free freeze a month, the
            way Duolingo does it. I would add it in v2 once we see how often
            streaks break.
          </p>
        </Prose>
      </Section>

      <Section number="08" id="outcome" eyebrow="Outcome">
        <H2>Shipped. Measuring now.</H2>
        <Prose>
          <p>
            Live for all free users on the ImagineArt home. Five numbers
            will tell us if it worked.
          </p>
        </Prose>
        <ol className="mt-12 flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {[
            ["Streak start rate", "How many day 1 users come back on day 2."],
            ["Completion rate", "How many starters reach day 4 and claim the reward."],
            ["Drop-off", "Where users quit between day 2 and day 4. Usually day 2 to 3."],
            ["Reward redemption", "How many finishers use the discount before it expires."],
            ["Conversion lift", "Paid conversion of streak users against a control group, over thirty days."],
          ].map(([title, body], i) => (
            <li key={title} className="grid grid-cols-12 gap-6 py-6">
              <span className="eyebrow col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="body-lg col-span-11 text-[var(--color-ink)] md:col-span-4"
                style={{ fontVariationSettings: '"wght" 500, "opsz" 20, "wdth" 100' }}
              >
                {title}
              </span>
              <p className="body-text col-span-12 text-[var(--color-ink-muted)] md:col-span-7">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section number="09" eyebrow="Reflection">
        <H2>What I would do differently.</H2>
        <Prose>
          <p>
            <span className="strong">Handle broken streaks in v1.</span>{" "}
            Users will hit that gap before our data does.
          </p>
          <p>
            <span className="strong">Test the length from day one.</span>{" "}
            Three days against four. The case for four is strong, but a
            test beats an argument.
          </p>
          <p>
            <span className="strong">Design what comes after day four.</span>{" "}
            Today the loop ends there. Finishers should move toward a bigger
            reward at day fourteen or thirty.
          </p>
        </Prose>
      </Section>
    </CaseStudyShell>
  );
}

/* ─────────── Local editorial primitives ─────────── */

function Section({
  number,
  eyebrow,
  id,
  children,
  wide,
}: {
  number: string;
  eyebrow: string;
  /** Anchor for the nav's table of contents. */
  id?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const maxW = wide ? "max-w-[1080px]" : "max-w-[820px]";
  return (
    <section id={id} className="py-20 md:py-28">
      <div className={`mx-auto ${maxW} px-6 md:px-10`}>
        <p className="eyebrow">
          {number}
          <span className="mx-3 text-[var(--color-ink-quiet)]">/</span>
          {eyebrow}
        </p>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="h2 max-w-[820px] text-[var(--color-ink)]">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="body-lg mt-8 flex max-w-[820px] flex-col gap-5 text-[var(--color-ink-muted)]">
      {children}
    </div>
  );
}

function Choice({
  label,
  verdict,
  body,
  highlight,
}: {
  label: string;
  verdict: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-3">
      <div className="col-span-12 md:col-span-4">
        <p className="h3 text-[var(--color-ink)]">{label}</p>
        <p
          className="eyebrow mt-1"
          style={{ color: highlight ? ACCENT : "var(--color-ink-quiet)" }}
        >
          {verdict}
        </p>
      </div>
      <p className="body-text col-span-12 max-w-[640px] text-[var(--color-ink-muted)] md:col-span-8">
        {body}
      </p>
    </div>
  );
}

function EdgeCase({ term, def }: { term: string; def: string }) {
  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-2 border-t border-[var(--color-line)] pt-6">
      <dt
        className="col-span-12 text-[var(--color-ink)] md:col-span-4"
        style={{ fontVariationSettings: '"wght" 500, "opsz" 16, "wdth" 100' }}
      >
        {term}
      </dt>
      <dd className="body-text col-span-12 max-w-[640px] text-[var(--color-ink-muted)] md:col-span-8">
        {def}
      </dd>
    </div>
  );
}
