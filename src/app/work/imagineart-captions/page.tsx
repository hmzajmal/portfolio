import { CaseStudyShell } from "@/components/case-study/shell";

export const metadata = {
  title: "Captions · ImagineArt · Case Study · Hamza Jamal",
};

const PAGE_BG = "#F2F4F6";

/** Table of contents for the navbar. Ids match the Section anchors below. */
const NAV_SECTIONS = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "approach", label: "Approach" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
];

export default function CaptionsCaseStudy() {
  return (
    <CaseStudyShell bg={PAGE_BG} currentSlug="imagineart-captions" sections={NAV_SECTIONS}>
      {/* ─────────── Hero ─────────── */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <h1 className="h1 text-[var(--color-ink)]">CAPTIONS</h1>
              <p className="body-lg mt-5 max-w-[420px] italic text-[var(--color-ink-muted)]">
                Drop a video. Pick a look. Done.
              </p>
              <a
                href="https://imagine.art/video/captions"
                target="_blank"
                rel="noreferrer"
                className="body-sm mt-8 inline-flex items-center gap-1.5 text-[var(--color-ink-quiet)] transition-colors hover:text-[var(--color-ink)]"
              >
                imagine.art/video/captions
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path
                    d="M2 8L8 2M8 2H3.5M8 2v4.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="flex flex-col gap-10">
              <p className="body-text max-w-[420px] text-[var(--color-ink-muted)]">
                Upload a video, pick a style, and the captions are burned in.
                It can translate them too, so one clip works in more than one
                language. People search for captions by name, which makes
                this the cheapest way to bring new users into the video suite.
              </p>
              <dl className="grid grid-cols-3 gap-x-6 gap-y-4">
                {[
                  { label: "Year", value: "2026" },
                  { label: "Role", value: "Lead Product Designer" },
                  { label: "Scope", value: "Research, UX/UI, instrumentation" },
                ].map((m) => (
                  <div key={m.label} className="flex flex-col gap-2">
                    <dt className="eyebrow">{m.label}</dt>
                    <dd className="body-sm text-[var(--color-ink)]">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-[var(--color-line-strong)] pt-10 md:mt-20 md:grid-cols-4">
            {[
              { label: "Visitors", value: "966", sub: "first four weeks" },
              { label: "Went on to generate", value: "69%", sub: "of everyone who landed" },
              { label: "Signed up", value: "919", sub: "from a standing start" },
              { label: "Time live", value: "<5 wks", sub: "growing every week" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <p className="eyebrow">{s.label}</p>
                <p className="stat h2 text-[var(--color-ink)]">{s.value}</p>
                <p className="body-sm text-[var(--color-ink-quiet)]">{s.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── Cover ─────────── */}
      <section className="pb-20 md:pb-24">
        <Container>
          <Figure
            src="/work/captions/mode-select.jpg"
            alt="Captions selected in the ImagineArt video mode picker, with the upload empty state"
            caption="Captions sits in the video mode picker, next to Text to Video and Extend Video. One button to start."
          />
        </Container>
      </section>

      {/* ─────────── 01 Context ─────────── */}
      <Section number="01" id="context" eyebrow="Context">
        <div className="max-w-[640px]">
          <h2 className="h3 text-[var(--color-ink)]">What it is</h2>
          <p className="body-text mt-4 text-[var(--color-ink-muted)]">
            Upload a clip, set the language, pick a style. The captions are
            burned in word by word. It uses the same credits as the rest of
            the suite.
          </p>
        </div>

        <div className="mt-14">
          <Figure
            src="/work/captions/result.jpg"
            alt="Generated video with word-level captions, the active word highlighted"
            caption="The result."
          />
        </div>
      </Section>

      {/* ─────────── 02 The problem ─────────── */}
      <Section number="02" id="problem" eyebrow="The problem">
        <h2 className="h2 max-w-[860px] text-[var(--color-ink)]">
          Captioning is a chore. How do you make it fast and reliable, then
          use it to open the rest of the suite?
        </h2>
        <NumberedRow
          items={[
            {
              n: "01",
              title: "Accuracy is invisible",
              body: "Nobody notices a correct transcript. Everyone notices the one wrong word, and it is almost always a name or a technical term.",
            },
            {
              n: "02",
              title: "The editor is a trap",
              body: "The obvious fix is a transcript editor. That means a timeline, months of work, and every user becomes a proofreader.",
            },
            {
              n: "03",
              title: "Nobody reads the settings",
              body: "People want the job done, not options. Every control between the file and the result is a reason to leave.",
            },
          ]}
        />
      </Section>

      {/* ─────────── 03 How I got there ─────────── */}
      <Section number="03" id="approach" eyebrow="How I got there">
        <NumberedRow
          items={[
            {
              n: "01",
              title: "Built the flow on someone else's API",
              body: "I wired up Veed's API and ran the whole flow before we designed anything. You cannot feel friction in a screenshot.",
            },
            {
              n: "02",
              title: "Studied the category",
              body: "I went through the popular tools. They all share one shape: drop a video, generate, pick a look. Everything else is extra.",
            },
            {
              n: "03",
              title: "Made the presets with the creative team",
              body: "The styles came from working sessions with our creative team, not a designer picking fonts alone. They make this content every day and know which looks get used.",
            },
          ]}
        />
      </Section>

      {/* ─────────── 04 Key decisions ─────────── */}
      <Section number="04" id="decisions" eyebrow="Key decisions">
        <div className="flex flex-col gap-20">
          <div>
            <h2 className="h2 text-[var(--color-ink)]">Drop it in and go.</h2>
            <NumberedRow
              items={[
                {
                  n: "01",
                  title: "One mode, two doors",
                  body: "It sits in the same picker as every other video mode, and on the toolbar of any video in your library. Nothing new to learn.",
                },
                {
                  n: "02",
                  title: "Upload is the only empty state",
                  body: "One button. Nothing to set up until a file exists.",
                },
                {
                  n: "03",
                  title: "It travels",
                  body: "Set the spoken language and get captions in another one. One clip becomes a version for every market.",
                },
                {
                  n: "04",
                  title: "Into Ads Studio. Proposed.",
                  body: "Ads are judged in three seconds and most play on mute. I mapped where captions should be applied by default.",
                },
              ]}
            />
            <div className="mt-14">
              <Figure
                src="/work/captions/edit-captions.jpg"
                alt="Edit Captions available from the toolbar and context menu of an existing video asset"
                caption="The second door. Edit Captions from any video in your library."
              />
            </div>
          </div>

          <div>
            <h2 className="h2 text-[var(--color-ink)]">Choose by looking.</h2>
            <NumberedRow
              items={[
                {
                  n: "01",
                  title: "Presets, not properties",
                  body: "Every style is a real frame with the captions on it. Nobody picks a caption look from a font menu.",
                },
                {
                  n: "02",
                  title: "Nine up front, the rest one tap away",
                  body: "The panel shows nine. See All opens the full library.",
                },
                {
                  n: "03",
                  title: "The word lights up",
                  body: "Each word glows as it is spoken. That rhythm is the point of this caption style, so it is on by default.",
                },
              ]}
            />
            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
              <Figure
                src="/work/captions/presets.jpg"
                alt="Captions panel showing language selection and a grid of nine caption style presets"
                caption="Nine on the panel."
              />
              <Figure
                src="/work/captions/presets-all.jpg"
                alt="The full preset library, showing many caption styles as live thumbnails with one selected"
                caption="See All opens the full library. Same rule throughout."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ─────────── 05 The call I made ─────────── */}
      <section className="bg-[#0E1014] py-24 text-white md:py-32">
        <Container>
          <p className="eyebrow text-white/50">05 / The call I made</p>
          <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="h2 text-white">
                I argued against building a transcript editor.
              </h2>
              <div className="body-text mt-8 flex flex-col gap-5 text-white/70">
                <p>
                  When the model gets a word wrong, the obvious fix is a full
                  transcript with a timeline. That was the plan on the table.
                  I took a simpler idea to the PM: let people replace the
                  word.
                </p>
                <p>
                  What breaks is rarely the sentence. It is a brand name, a
                  product, a technical term. The same few words every time.
                  So you type the right word, say what it replaces, and
                  regenerate.
                </p>
                <p>
                  It cost a fraction of a timeline to build, and there is
                  nothing to learn. You already know how to type a word.
                </p>
                <p className="italic text-white/50">
                  The obvious feature and the right feature are rarely the
                  same size.
                </p>
              </div>
            </div>
            <figure className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-3xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/work/captions/vocabulary.jpg"
                  alt="Vocabulary panel letting the user substitute one word for another"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="body-sm text-white/40">
                The whole fix. Type the right word, say what it replaces,
                regenerate.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ─────────── 06 Outcome ─────────── */}
      <Section number="06" id="outcome" eyebrow="Outcome">
        <h2 className="h2 max-w-[860px] text-[var(--color-ink)]">
          Almost everyone who lands signs up. Almost nobody comes back yet.
        </h2>
        <p className="body-sm mt-6 text-[var(--color-ink-quiet)]">
          Mixpanel · ImagineArt · /video/captions · 20 Jul to 16 Aug 2026
        </p>

        <div className="body-text mt-12 flex max-w-[760px] flex-col gap-5 text-[var(--color-ink-muted)]">
          <p>
            Weekly visitors grew from 6 at launch to 392 by mid August, with
            no paid traffic. Nearly every visitor creates an account, and 97%
            are on a laptop, which settled a long debate about mobile.
          </p>
          <p>
            That is where the win stops. Most people who generated captions
            never exported, and 20 purchases from 966 visitors is close to
            zero. That is the next brief.
          </p>
          <p className="body-sm text-[var(--color-ink-quiet)]">
            No captions-specific events existed at launch, so these numbers
            come from generic product events filtered by URL. Treat the rates
            as an upper bound.
          </p>
        </div>
      </Section>

      {/* ─────────── 07 What's next ─────────── */}
      <Section number="07" eyebrow="What's next">
        <NumberedRow
          items={[
            {
              n: "01",
              title: "Measure it properly",
              body: "Add captions-specific events so the funnel is measured, not guessed.",
            },
            {
              n: "02",
              title: "Close the export gap",
              body: "The biggest drop is between a finished caption and a downloaded file.",
            },
            {
              n: "03",
              title: "Keep the dictionary",
              body: "Brand words do not change between videos. Save the fixes on the account, not the run.",
            },
          ]}
        />
      </Section>
    </CaseStudyShell>
  );
}

/* ─────────── Local editorial primitives ─────────── */

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1080px] px-6 md:px-10">{children}</div>
  );
}

function Section({
  number,
  eyebrow,
  id,
  children,
}: {
  number: string;
  eyebrow: string;
  /** Anchor for the nav's table of contents. */
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-24">
      <Container>
        <p className="eyebrow">
          {number}
          <span className="mx-3 text-[var(--color-ink-quiet)]">/</span>
          {eyebrow}
        </p>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

type NumberedItem = { n: string; title: string; body: string };

function NumberedRow({
  items,
  columns = 3,
}: {
  items: NumberedItem[];
  columns?: 2 | 3;
}) {
  const cols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className={`mt-14 grid grid-cols-1 gap-x-10 gap-y-10 ${cols}`}>
      {items.map((item) => (
        <div key={item.n} className="border-t border-[var(--color-line)] pt-5">
          <p className="micro text-[var(--color-ink-quiet)]">
            {item.n}
            <span className="mx-2">/</span>
            <span className="text-[var(--color-ink)]">{item.title}</span>
          </p>
          <p className="body-sm mt-4 text-[var(--color-ink-muted)]">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block h-auto w-full" />
      </div>
      <figcaption className="body-sm text-[var(--color-ink-quiet)]">
        {caption}
      </figcaption>
    </figure>
  );
}
