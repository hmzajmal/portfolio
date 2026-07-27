import { CaseStudyShell } from "@/components/case-study/shell";
import { StreakCover } from "@/components/case-study/streak-cover";

const ACCENT = "#FB5607";

export const metadata = {
  title: "Streak · ImagineArt · Case Study · Hamza Jamal",
};

export default function StreakCaseStudy() {
  return (
    <CaseStudyShell bg="#FDF8EE" currentSlug="streak">
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

      <Section number="01" eyebrow="The problem">
        <H2>Free users were too comfortable.</H2>
        <Prose>
          <p>
            ImagineArt gives free users 100 credits a day. People came back,
            used them, and left. They rarely converted.
          </p>
          <p>
            A daily discount was running in parallel and was ignored. A
            discount that is always there stops being an offer. The bet
            became simple. Keep the same incentive. Make the user feel they
            earned it.
          </p>
        </Prose>
      </Section>

      <Section number="02" eyebrow="The core decision">
        <H2>Why four days, not three, not seven.</H2>
        <Prose>
          <p>
            The length was the highest-leverage decision. Get it wrong and we
            either fail to build a habit, or train users to wait.
          </p>
        </Prose>
        <div className="mt-14 flex flex-col gap-12">
          <Choice
            label="Three days"
            verdict="rejected"
            body="A user who wanted to subscribe today could just wait three days for a cheaper deal. We would have been teaching the entire base to delay purchase."
          />
          <Choice
            label="Seven days"
            verdict="too ambitious"
            body="A week is a long commitment for a behaviour that has not been built yet. Drop-off compounds, and every extra day is another chance for a user to break the chain before they have any reason to care about it."
          />
          <Choice
            label="Four days"
            verdict="won"
            body="Long enough to require intent. Short enough that completion feels achievable inside one work week. The midpoint, day two, is where streaks usually die, and four is short enough that we never sit on the midpoint for long."
            highlight
          />
        </div>
      </Section>

      <Section number="03" eyebrow="Why a streak works at all">
        <H2>The behavioural arithmetic underneath.</H2>
        <Prose>
          <p>
            A streak is doing three quiet things to a user at the same time.
            None of them are obvious. That is the point.
          </p>
          <p>
            <span className="strong">Hyperbolic discounting.</span>{" "}
            Users value near-term rewards far more than distant ones. Four
            days sits inside the near-term window where the reward still
            feels real.
          </p>
          <p>
            <span className="strong">Goal-gradient effect.</span>{" "}
            Motivation rises as the goal gets closer. Four days keeps the
            user inside that gradient the whole time. Day three feels
            inevitable rather than optional.
          </p>
          <p>
            <span className="strong">Loss aversion.</span>{" "}
            A streak you have already invested in feels valuable. The
            counter becomes an asset the user does not want to lose. The
            same 100 credits, now anchored to a sunk cost.
          </p>
        </Prose>
      </Section>

      <Section number="04" eyebrow="Before and after" wide>
        <H2>What changed on the home.</H2>
        <Prose>
          <p>The same 100 credits. Reframed.</p>
        </Prose>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          <figure className="flex flex-col gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/work/streak/before.png"
              alt="Home before the streak feature"
              className="block h-auto w-full border border-[var(--color-line)]"
            />
            <figcaption className="body-sm text-[var(--color-ink-quiet)]">
              <span className="strong">Before.</span>{" "}
              A flat &ldquo;100 free credits&rdquo; toast. No sense of
              progression, no reason to come back tomorrow.
            </figcaption>
          </figure>
          <figure className="flex flex-col gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/work/streak/after.png"
              alt="Home after the streak feature"
              className="block h-auto w-full border border-[var(--color-line)]"
            />
            <figcaption className="body-sm text-[var(--color-ink-quiet)]">
              <span className="strong">After.</span>{" "}
              The same 100 credits, now framed as Day 1 of a four-day
              streak with a 40% OFF reward locked in at the end.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section number="05" eyebrow="Visual decisions">
        <H2>Why orange, why a flame, and where the flame stops.</H2>
        <Prose>
          <p>
            Orange is high-arousal but warm. Red would read as a warning,
            yellow as a caution. Orange holds the middle, and it&apos;s
            already ImagineArt&apos;s brand colour.
          </p>
          <p>
            The flame was a non-decision. Streaks already have a universal
            vocabulary, from Snapchat to Duolingo. Inventing a new metaphor
            would have only added friction.
          </p>
          <p>
            Day four breaks the flame pattern on purpose. A gold gift box
            takes its place. The visual rupture signals arrival.
          </p>
        </Prose>
      </Section>

      <Section number="06" eyebrow="Edge cases">
        <H2>Three things the engineering brief asked about.</H2>
        <dl className="mt-12 flex flex-col gap-8">
          <EdgeCase
            term="Timezone"
            def="Streaks reset at the user's local midnight, so a user in Karachi and one in San Francisco get a fair day boundary."
          />
          <EdgeCase
            term="Account, not device"
            def="The streak is tied to the user account, not the browser, so it persists across laptop and phone."
          />
          <EdgeCase
            term="Multiple sessions per day"
            def="Logging in twice in one day still counts as one streak day. We did not want users gaming the counter."
          />
        </dl>
      </Section>

      <Section number="07" eyebrow="Open question">
        <H2>On broken streaks.</H2>
        <Prose>
          <p>
            The current design ships without a recovery flow. Miss a day and
            the streak resets. The 40% goes with it. Start again at day one.
          </p>
          <p>
            A broken-streak discount would cheapen the loop. The whole point
            is that the reward is earned. A recovery offer is just the old
            daily discount with extra steps.
          </p>
          <p>
            A streak freeze is the middle path. One free freeze a month, the
            way Duolingo does it. Forgiveness, not punishment. I would add it
            in v2 once the break rates are visible.
          </p>
        </Prose>
      </Section>

      <Section number="08" eyebrow="Outcome">
        <H2>Shipped. Measuring now.</H2>
        <Prose>
          <p>
            Live on the ImagineArt home for all free users. Five metrics
            define whether this worked, in order of how much they tell us.
          </p>
        </Prose>
        <ol className="mt-12 flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {[
            ["Streak start rate", "Of users active on day 1, what percentage return on day 2 to start a streak."],
            ["Streak completion rate", "Of starters, what percentage reach day 4 and claim the reward."],
            ["Drop-off curve", "Day 2 to 3 to 4 retention. The biggest leak typically sits between day 2 and 3."],
            ["Reward redemption", "Of users who complete, how many redeem the discount before it expires."],
            ["Conversion lift", "Retention and paid conversion of streak users versus a non-streak control, measured over thirty days."],
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
            <span className="strong">Ship the broken-streak experience in v1.</span>{" "}
            We left a hole users will discover before our metrics do.
          </p>
          <p>
            <span className="strong">A/B test the length from the start.</span>{" "}
            Three days versus four. The case for four is strong on paper,
            but paper is not data. Testing is cheaper than winning the
            argument.
          </p>
          <p>
            <span className="strong">Design what happens after day four.</span>{" "}
            Right now the loop ends. Users who complete should re-enter the
            funnel toward a bigger reward at day fourteen or thirty.
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
  children,
  wide,
}: {
  number: string;
  eyebrow: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const maxW = wide ? "max-w-[1080px]" : "max-w-[820px]";
  return (
    <section className="py-20 md:py-28">
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
