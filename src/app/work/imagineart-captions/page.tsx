import { CaseStudyShell } from "@/components/case-study/shell";

export const metadata = {
  title: "Captions · ImagineArt · Case Study · Hamza Jamal",
};

const PAGE_BG = "#F2F4F6";

export default function CaptionsCaseStudy() {
  return (
    <CaseStudyShell bg={PAGE_BG} currentSlug="imagineart-captions">
      {/* ─────────── Hero ─────────── */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <h1 className="h1 text-[var(--color-ink)]">CAPTIONS</h1>
              <p className="body-lg mt-5 max-w-[420px] italic text-[var(--color-ink-muted)]">
                Drop a video. Pick a look. That is the whole product.
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
                Upload a video, pick a style, get captions burned in. It can
                translate them too, so one clip travels past the language it
                was shot in. People search for this by name, which makes it
                the cheapest way into a video suite they never came looking
                for.
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
            caption="Captions lives in the video mode picker, next to Text to Video and Extend Video. One button to start."
          />
        </Container>
      </section>

      {/* ─────────── 01 Context ─────────── */}
      <Section number="01" eyebrow="Context">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="h3 text-[var(--color-ink)]">What it is</h2>
            <p className="body-text mt-4 text-[var(--color-ink-muted)]">
              Upload a clip, set the language, pick a style, and it burns the
              captions in word by word. Same credits as everything else in the
              suite.
            </p>
          </div>
          <div>
            <h2 className="h3 text-[var(--color-ink)]">Why it mattered</h2>
            <p className="body-text mt-4 text-[var(--color-ink-muted)]">
              People search for captions by name. They arrive with a finished
              clip and a deadline, so they judge you fast. Win the first
              thirty seconds and you have earned a look at everything else.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <Figure
            src="/work/captions/result.jpg"
            alt="Generated video with word-level captions, the active word highlighted"
            caption="What it makes. Captions burned in, each word lighting up as it lands."
          />
        </div>
      </Section>

      {/* ─────────── 02 The problem ─────────── */}
      <Section number="02" eyebrow="The problem">
        <h2 className="h2 max-w-[860px] text-[var(--color-ink)]">
          Captioning is a chore. So how do you make it fast and trustworthy,
          then use it to open a suite nobody came for?
        </h2>
        <NumberedRow
          items={[
            {
              n: "01",
              title: "Accuracy is invisible",
              body: "Nobody thanks you for a correct transcript. Everyone spots the one wrong word, and it is almost always a name or a bit of jargon.",
            },
            {
              n: "02",
              title: "The editor is a trap",
              body: "The obvious fix is a transcript editor. That means a timeline, months of work, and turning every user into a proofreader.",
            },
            {
              n: "03",
              title: "Nobody reads the settings",
              body: "People here want relief, not options. Every control between the file and the result is a reason to leave.",
            },
          ]}
        />
      </Section>

      {/* ─────────── 03 How I got there ─────────── */}
      <Section number="03" eyebrow="How I got there">
        <NumberedRow
          items={[
            {
              n: "01",
              title: "Built the flow on someone else's API",
              body: "I wired up Veed's API and ran the whole thing end to end before we designed anything. Reading about a captions tool and sitting through one are different, and friction does not show up in a screenshot.",
            },
            {
              n: "02",
              title: "Read the category",
              body: "I went through how the popular platforms handle it. They converge on the same shape: drop a video, generate, pick a look. Everything past that is someone's feature list, not the user's job.",
            },
            {
              n: "03",
              title: "Made the presets with the creatives",
              body: "The styles came out of working sessions with our creative teams rather than a designer choosing fonts alone. They make this content every day, so they know which looks actually get used.",
            },
          ]}
        />
      </Section>

      {/* ─────────── 04 Key decisions ─────────── */}
      <Section number="04" eyebrow="Key decisions">
        <div className="flex flex-col gap-20">
          <div>
            <h2 className="h2 text-[var(--color-ink)]">Drop it in and go.</h2>
            <NumberedRow
              items={[
                {
                  n: "01",
                  title: "One mode, two doors",
                  body: "It sits in the same picker as every other video mode, and on the toolbar of anything already in your library. No new navigation to learn.",
                },
                {
                  n: "02",
                  title: "Upload is the only empty state",
                  body: "One button. Nothing to configure until a file exists.",
                },
                {
                  n: "03",
                  title: "It travels",
                  body: "Set the spoken language and it can caption in another one. A single clip becomes a version for every market you sell in.",
                },
              ]}
            />
          </div>

          <div>
            <h2 className="h2 text-[var(--color-ink)]">Choose by looking.</h2>
            <NumberedRow
              items={[
                {
                  n: "01",
                  title: "Presets, not properties",
                  body: "Every style is a real frame with the captions already on it. Nobody picks a caption look from a font menu.",
                },
                {
                  n: "02",
                  title: "Nine up front, the rest one tap away",
                  body: "The panel shows nine. The full library sits behind See All for the people who go looking.",
                },
                {
                  n: "03",
                  title: "The word lights up",
                  body: "Each word glows as it is spoken. That rhythm is the whole reason this caption format exists, so it is on by default.",
                },
              ]}
            />
            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
              <Figure
                src="/work/captions/presets.jpg"
                alt="Captions panel showing language selection and a grid of nine caption style presets"
                caption="Nine on the panel, each one a real frame rather than a font name."
              />
              <Figure
                src="/work/captions/presets-all.jpg"
                alt="The full preset library, showing many caption styles as live thumbnails with one selected"
                caption="See All opens the full library. Same rule all the way down."
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
                I argued us out of building a transcript editor.
              </h2>
              <div className="body-text mt-8 flex flex-col gap-5 text-white/70">
                <p>
                  When the model gets a word wrong, the obvious fix is a full
                  transcript and a timeline. That was the option on the table.
                  I took a different one to the PM: just let people replace
                  the word.
                </p>
                <p>
                  Almost nothing that breaks is the sentence. It is a brand
                  name, a product, a piece of jargon, the same few words every
                  time. So you type the right one, say what it replaces, and
                  regenerate.
                </p>
                <p>
                  It cost a fraction of a timeline to build, and there is
                  nothing to learn. No playhead, no tracks, no scrubbing. You
                  already know how to type a word.
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

      {/* ─────────── 06 Where it connects ─────────── */}
      <Section number="06" eyebrow="Where it connects">
        <h2 className="h2 max-w-[820px] text-[var(--color-ink)]">
          A captions tool is worth more wired into the suite than sold beside
          it.
        </h2>
        <NumberedRow
          items={[
            {
              n: "01",
              title: "Into the editor. Shipped.",
              body: "Edit Captions sits on the toolbar of any video you own, alongside Reframe and Color Correction. Captioning became a step inside an edit rather than a separate errand.",
            },
            {
              n: "02",
              title: "Into Ads Studio. Proposed.",
              body: "Ad creative is judged in three seconds and most of it plays on mute, so I mapped where captions should hook in and get applied by default.",
            },
            {
              n: "03",
              title: "Translation is the reach play",
              body: "One clip can ship in every language a team sells in. That is the argument for putting captions in front of the ads and social workflows instead of behind them.",
            },
          ]}
        />
        <div className="mt-14">
          <Figure
            src="/work/captions/edit-captions.jpg"
            alt="Edit Captions available from the toolbar and context menu of an existing video asset"
            caption="The second door. Edit Captions on any video in your library, next to Reframe and Color Correction."
          />
        </div>
      </Section>

      {/* ─────────── 07 Outcome ─────────── */}
      <Section number="07" eyebrow="Outcome">
        <h2 className="h2 max-w-[860px] text-[var(--color-ink)]">
          Almost everyone who walks in converts. Almost nobody comes back yet.
        </h2>
        <p className="body-sm mt-6 text-[var(--color-ink-quiet)]">
          Mixpanel · ImagineArt · /video/captions · 20 Jul to 16 Aug 2026
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { label: "Visitors", value: "966", sub: "in the first four weeks" },
            { label: "Went on to generate", value: "69%", sub: "662 of them" },
            { label: "Signed up", value: "919", sub: "on the page itself" },
          ].map((s) => (
            <div key={s.label} className="liquid rounded-3xl px-7 py-8">
              <p className="eyebrow">{s.label}</p>
              <p className="stat h1 mt-4 text-[var(--color-ink)]">{s.value}</p>
              <p className="body-sm mt-3 text-[var(--color-ink-quiet)]">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="body-text mt-12 flex max-w-[760px] flex-col gap-5 text-[var(--color-ink-muted)]">
          <p>
            Weekly visitors went from 6 at launch to 392 by mid August,
            growing every week with no paid channel behind it. Nearly every
            stranger who lands creates an account, and 97% of them are on a
            laptop, which settled a long argument about mobile.
          </p>
          <p>
            The win stops there. Most people who generated captions never
            exported, and 20 purchases against 966 visitors is a rounding
            error. That is the next brief. A conversion problem beats a
            traffic problem.
          </p>
          <p className="body-sm text-[var(--color-ink-quiet)]">
            No captions-specific events existed at launch, so these figures
            come from generic product events filtered by URL. Only the first
            funnel step is URL-scoped, so the rates are an upper bound.
          </p>
        </div>
      </Section>

      {/* ─────────── 08 What I learned ─────────── */}
      <Section number="08" eyebrow="What I learned">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {[
            {
              title: "Prototype on somebody else's product.",
              body: "A week on Veed's API taught us more than a competitive audit would have. You cannot feel friction in a screenshot.",
            },
            {
              title: "The obvious feature is usually too big.",
              body: "A timeline would have cost a quarter and made everyone a proofreader. Asking what actually breaks turned it into a text field.",
            },
            {
              title: "Signing up is not coming back.",
              body: "Nearly everyone signed up. Almost nobody returned for a second tool. Two different problems, and only one is solved.",
            },
          ].map((l) => (
            <div key={l.title} className="border-t border-[var(--color-line)] pt-6">
              <h3 className="h3 text-[var(--color-ink)]">{l.title}</h3>
              <p className="body-text mt-3 text-[var(--color-ink-muted)]">
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────── 09 What's next ─────────── */}
      <Section number="09" eyebrow="What's next">
        <NumberedRow
          items={[
            {
              n: "01",
              title: "Measure it properly",
              body: "Captions-specific events, so the funnel stops being an inference.",
            },
            {
              n: "02",
              title: "Close the export gap",
              body: "The biggest drop sits between a finished caption and a downloaded file.",
            },
            {
              n: "03",
              title: "Let the dictionary persist",
              body: "Brand words do not change between videos. The fix should live on the account, not the run.",
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
  children,
}: {
  number: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-20 md:py-24">
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
