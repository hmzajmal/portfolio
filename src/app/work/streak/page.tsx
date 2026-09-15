import { CaseStudyShell } from "@/components/case-study/shell";
import { StreakCover } from "@/components/case-study/streak-cover";
import { CSFrame, CSShot } from "@/components/case-study/primitives";

/** Table of contents for the navbar. Ids match the section anchors below. */
const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "decision", label: "Decision" },
  { id: "details", label: "Details" },
  { id: "outcome", label: "Outcome" },
  { id: "next", label: "Next" },
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
                <dd className="body-sm text-ink">{m.value}</dd>
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
            and left. Very few paid. A daily discount ran at the same time,
            and nobody noticed it, because an offer that is always there
            stops feeling like an offer.
          </p>
          <p>
            So we kept the same discount and made users earn it. Come back
            four days in a row and the discount unlocks.
          </p>
        </Prose>
      </Section>

      <Section number="02" id="decision" eyebrow="The decision">
        <H2>Why four days.</H2>
        <Prose>
          <p>
            The length mattered most. Three days was too short: anyone ready
            to pay today could wait three days for a cheaper price, so we
            would be teaching people to delay. Seven days was too long: a
            week is a lot to ask for a habit that does not exist yet, and
            every extra day is another chance to quit. Four days takes real
            effort but fits inside a work week, and it gets past day two,
            where most streaks break.
          </p>
          <p>
            Four days also works with how people think. A reward this week
            feels bigger than one next month. The closer the goal, the harder
            people push, so by day three finishing feels obvious. And once
            you are two days in, the streak feels like yours and you do not
            want to lose it. The same 100 credits become something to
            protect.
          </p>
        </Prose>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <CSFrame>
            <CSShot
              src="/work/streak/before.png"
              alt="Home before the streak feature"
              caption="Before. A plain 100 free credits message. No reason to return tomorrow."
            />
          </CSFrame>
        </div>
      </section>

      <Section number="03" id="details" eyebrow="Design details">
        <H2>Orange, a flame, and a few rules.</H2>
        <Prose>
          <p>
            Orange feels warm and urgent. Red reads as a warning and yellow
            as caution, and orange is already ImagineArt&apos;s brand colour.
            The flame needed no debate: Snapchat and Duolingo taught everyone
            what it means. On day four the flame becomes a gold gift box, so
            you can see you have arrived.
          </p>
          <p>
            Three rules keep it fair. Streaks reset at the user&apos;s local
            midnight, so a user in Karachi and one in San Francisco each get
            a full day. The streak follows the account, not the device, so
            it carries over from laptop to phone. And logging in twice in one
            day counts once.
          </p>
        </Prose>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <CSFrame>
            <CSShot
              src="/work/streak/after.png"
              alt="Home after the streak feature"
              caption="After. The same credits shown as Day 1 of a four-day streak, with 40% off at the end."
            />
          </CSFrame>
        </div>
      </section>

      <Section number="04" id="outcome" eyebrow="Outcome">
        <H2>Shipped. Measuring now.</H2>
        <Prose>
          <p>
            Live for all free users on the ImagineArt home. Three numbers
            will tell us if it worked: how many day-one users come back on
            day two, how many of those reach day four and claim the reward,
            and whether streak users go on to pay more than a control group
            over thirty days.
          </p>
        </Prose>
      </Section>

      <Section number="05" id="next" eyebrow="What&apos;s next">
        <H2>Three things for the next version.</H2>
        <Prose>
          <p>
            <span className="strong">Handle a broken streak.</span>{" "}
            Right now, miss a day and you start again at day one. A discount
            for broken streaks would undo the point, since the reward has to
            be earned. A streak freeze is the fair middle: one free freeze a
            month, the way Duolingo does it.
          </p>
          <p>
            <span className="strong">Test the length.</span>{" "}
            Three days against four. The case for four is strong, but a test
            beats an argument.
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
          <span className="mx-3 text-ink-quiet">/</span>
          {eyebrow}
        </p>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="h2 max-w-[820px] text-ink">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="body-lg mt-8 flex max-w-[820px] flex-col gap-5 text-ink-muted">
      {children}
    </div>
  );
}


