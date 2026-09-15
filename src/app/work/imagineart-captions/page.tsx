import { CaseStudyShell } from "@/components/case-study/shell";

export const metadata = {
  title: "Captions · ImagineArt · Case Study · Hamza Jamal",
};

const PAGE_BG = "#F2F4F6";

/** Table of contents for the navbar. Ids match the Section anchors below. */
const NAV_SECTIONS = [
  { id: "context", label: "Context" },
  { id: "approach", label: "Approach" },
  { id: "styles", label: "Styles" },
  { id: "call", label: "The call" },
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
                Upload a video, pick a style, and add captions to it. It can
                translate them into other languages too.
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
              { label: "Visitors", value: "2,073", sub: "first eight weeks" },
              { label: "Made a video", value: "72%", sub: "of everyone who landed" },
              { label: "Exported it", value: "52%", sub: "start to finish" },
              { label: "Time live", value: "8 wks", sub: "300 to 400 visitors a week" },
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

      {/* ─────────── Image: where it lives ─────────── */}
      <section className="pb-20 md:pb-24">
        <Container>
          <Figure
            src="/work/captions/mode-select.jpg"
            alt="Captions selected in the ImagineArt video mode picker, with the upload empty state"
          />
        </Container>
      </section>

      {/* ─────────── 01 Context ─────────── */}
      <Section number="01" id="context" eyebrow="Context">
        <h2 className="h2 max-w-[820px] text-[var(--color-ink)]">
          Ours had to be the easiest.
        </h2>
        <Prose>
          <p>
            ImagineArt already had a video suite. Captions was a chance to
            add one more tool people search for by name, so I set one rule
            for it: the fewest steps possible. Upload a video, pick a look,
            and fix any wrong word without leaving the flow.
          </p>
          <p>
            Two things make that hard. Nobody notices a hundred correct
            words, but everyone notices the one wrong name, and names are
            exactly what the AI gets wrong. And the usual fix, a full
            transcript editor with a timeline, takes months to build and
            hands the proofreading to a user who arrived with a finished
            video and a deadline.
          </p>
        </Prose>
      </Section>

      {/* ─────────── Image: the result ─────────── */}
      <section className="pb-20 md:pb-24">
        <Container>
          <Figure
            src="/work/captions/result.jpg"
            alt="Generated video with word-level captions, the active word highlighted"
          />
        </Container>
      </section>

      {/* ─────────── 02 Approach ─────────── */}
      <Section number="02" id="approach" eyebrow="Approach">
        <h2 className="h2 max-w-[820px] text-[var(--color-ink)]">
          Feel the problem first, then get out of the way.
        </h2>
        <Prose>
          <p>
            Before we designed a single screen, I connected Veed&apos;s API
            and ran the whole flow from upload to export. You cannot feel
            friction in a screenshot. The caption styles came out of working
            sessions with our creative team, who make this kind of content
            every day, rather than a designer choosing fonts alone.
          </p>
          <p>
            The tool then had to sit where people already are. Captions
            lives in the same picker as every other video mode and on the
            toolbar of any video in your library. Set the spoken language
            and it captions in another one. I also mapped where it plugs
            into Ads Studio, where videos play on mute. That part is
            proposed, not shipped.
          </p>
        </Prose>
      </Section>

      {/* ─────────── Image: the second door ─────────── */}
      <section className="pb-20 md:pb-24">
        <Container>
          <Figure
            src="/work/captions/edit-captions.jpg"
            alt="Edit Captions available from the toolbar and context menu of an existing video asset"
            caption="Edit Captions on any video in your library, next to Reframe and Color Correction."
          />
        </Container>
      </section>

      {/* ─────────── 03 Styles ─────────── */}
      <Section number="03" id="styles" eyebrow="Styles">
        <h2 className="h2 max-w-[820px] text-[var(--color-ink)]">
          Choose by looking.
        </h2>
        <Prose>
          <p>
            Every style is a real frame with the captions already on it,
            because nobody picks a caption look from a font menu. The panel
            shows nine and See All opens the rest. Each word lights up as it
            is spoken. That rhythm is the whole point of this caption style,
            so it is on by default.
          </p>
        </Prose>
      </Section>

      {/* ─────────── Images: presets ─────────── */}
      <section className="pb-20 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Figure
              src="/work/captions/presets.jpg"
              alt="Captions panel showing language selection and a grid of nine caption style presets"
              caption="Nine on the panel."
            />
            <Figure
              src="/work/captions/presets-all.jpg"
              alt="The full preset library, showing many caption styles as live thumbnails with one selected"
              caption="See All opens the full library."
            />
          </div>
        </Container>
      </section>

      {/* ─────────── 04 The call I made ─────────── */}
      <section id="call" className="bg-[#0E1014] py-24 text-white md:py-32">
        <Container>
          <p className="eyebrow text-white/50">04 / The call I made</p>
          <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="h2 text-white">No transcript editor.</h2>
              <div className="body-text mt-8 flex flex-col gap-5 text-white/70">
                <p>
                  Remember the one wrong word. When the AI gets a word wrong,
                  the obvious fix is a full transcript with a timeline. That
                  was the plan on the table. I asked for something much
                  smaller: let people replace the word.
                </p>
                <p>
                  The mistakes are almost always the same kind. A brand name,
                  a product, a technical term. So you type the right word,
                  tell it which word to replace, and generate again. It took
                  a fraction of the time to build, and there is nothing to
                  learn.
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
                generate again.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ─────────── 05 Outcome ─────────── */}
      <Section number="05" id="outcome" eyebrow="Outcome">
        <h2 className="h2 max-w-[860px] text-[var(--color-ink)]">
          Most visitors make a video. Half export it.
        </h2>
        <p className="body-sm mt-6 text-[var(--color-ink-quiet)]">
          Mixpanel · ImagineArt · /video/captions · 20 Jul to 15 Sep 2026
        </p>
        <Prose>
          <p>
            In the first eight weeks, 2,073 people landed on the page. 72% of
            them generated a video and 52% exported one. Weekly visitors went
            from 6 at launch to a steady 300 to 400, and 97% of them are on a
            laptop, which settled a long debate about mobile.
          </p>
          <p>
            Money is the open question. Only 46 people bought credits, about
            2%. Captions brings people in and gets them to a finished video.
            The next brief is to turn that finished video into a purchase,
            and to add captions-specific events so the funnel is measured
            rather than guessed.
          </p>
        </Prose>
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

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="body-text mt-8 flex max-w-[680px] flex-col gap-5 text-[var(--color-ink-muted)]">
      {children}
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
  caption?: string;
}) {
  return (
    <figure className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block h-auto w-full" />
      </div>
      {caption && (
        <figcaption className="body-sm text-[var(--color-ink-quiet)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
