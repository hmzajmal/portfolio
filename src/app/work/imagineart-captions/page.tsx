import { CaseStudyShell } from "@/components/case-study/shell";
import { ZoomImage } from "@/components/ui/zoom-image";

export const metadata = {
  title: "Captions · ImagineArt · Case Study · Hamza Jamal",
};

const PAGE_BG = "#F2F4F6";

/** Table of contents for the navbar. Ids match the Section anchors below. */
const NAV_SECTIONS = [
  { id: "context", label: "Context" },
  { id: "approach", label: "Approach" },
  { id: "styles", label: "Styles" },
  { id: "call", label: "Decision" },
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
              <h1 className="h1 text-ink">CAPTIONS</h1>
              <a
                href="https://imagine.art/video/captions"
                target="_blank"
                rel="noreferrer"
                className="body-sm mt-8 inline-flex items-center gap-1.5 text-ink-quiet transition-colors hover:text-ink"
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
              <p className="body-text max-w-[420px] text-ink-muted">
                Upload a video, pick a style, and add captions to it. It can
                translate them into other languages too.
              </p>
              <dl className="grid grid-cols-3 gap-x-6 gap-y-4">
                {[
                  { label: "Year", value: "2026" },
                  { label: "Role", value: "Lead Product Designer" },
                  { label: "Scope", value: "Research, design, tracking" },
                ].map((m) => (
                  <div key={m.label} className="flex flex-col gap-2">
                    <dt className="eyebrow">{m.label}</dt>
                    <dd className="body-sm text-ink">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-[var(--color-line-strong)] pt-10 md:mt-20 md:grid-cols-4">
            {[
              { label: "Visitors", value: "2,073", sub: "first eight weeks" },
              { label: "Made a video", value: "72%", sub: "of everyone who landed" },
              { label: "Downloaded it", value: "52%", sub: "start to finish" },
              { label: "Time live", value: "8 wks", sub: "300 to 400 visitors a week" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <p className="eyebrow">{s.label}</p>
                <p className="stat h2 text-ink">{s.value}</p>
                <p className="body-sm text-ink-quiet">{s.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── Image: where it lives ─────────── */}
      <section className="pb-20 md:pb-24">
        <Container>
          <Frame>
            <Figure
            src="/work/captions/mode-select.jpg"
            alt="Captions selected in the ImagineArt video mode picker, with the upload empty state"
            />
          </Frame>
        </Container>
      </section>

      {/* ─────────── 01 Context ─────────── */}
      <Section number="01" id="context" eyebrow="Context">
        <h2 className="h2 max-w-[820px] text-ink">
          It had to be the easiest one.
        </h2>
        <Prose>
          <p>
            ImagineArt already had video tools. Captions was one more tool
            that people search for by name, so it had to feel simpler than
            everything else out there. I gave it one rule: as few steps as
            possible.
          </p>
          <p>
            The hard part is accuracy. Nobody notices a hundred right
            words, but everyone notices one wrong name. And names are the
            words the AI gets wrong most. How we fixed that became the
            biggest decision in the project.
          </p>
        </Prose>
      </Section>

      {/* ─────────── Image: the result ─────────── */}
      <section className="pb-20 md:pb-24">
        <Container>
          <Frame>
            <Figure
            src="/work/captions/result.jpg"
            alt="Generated video with word-level captions, the active word highlighted"
            />
          </Frame>
        </Container>
      </section>

      {/* ─────────── 02 Approach ─────────── */}
      <Section number="02" id="approach" eyebrow="Approach">
        <h2 className="h2 max-w-[820px] text-ink">
          Test it first. Then stay out of the way.
        </h2>
        <Prose>
          <p>
            Before we drew any screens, I hooked up another company&apos;s
            caption tool, Veed, and used it from start to finish. You only
            feel the annoying parts when you use a thing yourself. That test
            showed where people slow down: choosing settings, and fixing
            wrong words.
          </p>
          <p>
            The tool also had to be where people already are, so nobody has
            to go looking for it. Captions sits in the same menu as every
            other video tool, and on the toolbar of any video you already
            made. I also planned where it should go in Ads Studio, because
            ads usually play with the sound off. That part is planned, not
            built yet.
          </p>
        </Prose>
      </Section>

      {/* ─────────── Image: the second door ─────────── */}
      <section className="pb-20 md:pb-24">
        <Container>
          <Frame>
            <Figure
            src="/work/captions/edit-captions.jpg"
            alt="Edit Captions available from the toolbar and context menu of an existing video asset"
            caption="Edit Captions on any video you already made."
            />
          </Frame>
        </Container>
      </section>

      {/* ─────────── 03 Styles ─────────── */}
      <Section number="03" id="styles" eyebrow="Styles">
        <h2 className="h2 max-w-[820px] text-ink">
          Pick a look by looking.
        </h2>
        <Prose>
          <p>
            Every style is a real picture with the captions already on it,
            because nobody picks a caption style from a list of font names.
            The panel shows nine styles, and See All shows the rest.
          </p>
          <p>
            The styles themselves came from working sessions with our
            creative team. They make videos like this every day, so they
            know which looks people really use. Each word lights up as it is
            spoken. That is the fun part of this caption style, so it is on
            from the start.
          </p>
        </Prose>
      </Section>

      {/* ─────────── Images: presets ─────────── */}
      <section className="pb-20 md:pb-24">
        <Container>
          <Frame columns={2}>
            <Figure
              src="/work/captions/presets.jpg"
              alt="Captions panel showing language selection and a grid of nine caption style presets"
              caption="Nine styles on the panel."
            />
            <Figure
              src="/work/captions/presets-all.jpg"
              alt="The full preset library, showing many caption styles as live thumbnails with one selected"
              caption="See All shows the rest."
            />
          </Frame>
        </Container>
      </section>

      {/* ─────────── 04 The call I made ─────────── */}
      <section id="call" className="bg-[#0E1014] py-24 text-ink-inverse md:py-32">
        <Container>
          <p className="eyebrow text-ink-inverse-quiet">04 / The big decision</p>
          <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="h2 text-ink-inverse">No big text editor.</h2>
              <div className="body-text mt-8 flex flex-col gap-5 text-ink-inverse-muted">
                <p>
                  Back to the one wrong word. The normal fix is a big text
                  editor with a timeline. That takes months to build, and it
                  makes the user check every word, when they came with a
                  finished video and no time to spare. I asked for something
                  much smaller: let people swap the word.
                </p>
                <p>
                  The mistakes are almost always the same kind. A brand name,
                  a product name, a special term. So you type the right
                  word, tell it which word to replace, and run it again. It
                  took a small part of the time to build, and there is
                  nothing to learn.
                </p>
                <p className="italic text-ink-inverse-quiet">
                  The obvious fix and the right fix are not always the same
                  size.
                </p>
              </div>
            </div>
            <Frame dark>
              <Figure
                dark
                src="/work/captions/vocabulary.jpg"
                alt="Vocabulary panel letting the user substitute one word for another"
                caption="The whole fix. Type the right word, say which word it replaces, run it again."
              />
            </Frame>
          </div>
        </Container>
      </section>

      {/* ─────────── 05 Outcome ─────────── */}
      <Section number="05" id="outcome" eyebrow="Outcome">
        <h2 className="h2 max-w-[860px] text-ink">
          Most visitors make a video. Half of them download it.
        </h2>
        <p className="body-sm mt-6 text-ink-quiet">
          Mixpanel · ImagineArt · /video/captions · 20 Jul to 15 Sep 2026
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {[
            { label: "Visitors", value: "2,073", sub: "in eight weeks" },
            { label: "Made a video", value: "72%", sub: "1,486 people" },
            { label: "Downloaded it", value: "52%", sub: "1,070 people" },
            { label: "Bought credits", value: "2%", sub: "46 people" },
          ].map((m) => (
            <div key={m.label} className="liquid rounded-3xl px-6 py-7">
              <p className="eyebrow">{m.label}</p>
              <p className="stat h2 mt-4 text-ink">{m.value}</p>
              <p className="body-sm mt-2 text-ink-quiet">{m.sub}</p>
            </div>
          ))}
        </div>

        <Prose>
          <p>
            Visitors went from 6 in the first week to a steady 300 to 400 a
            week. 97% of them use a laptop, which ended a long debate about
            mobile.
          </p>
          <p>
            Money is the open question. Captions brings people in and gets
            them to a finished video. The next job is to turn that video
            into a purchase, and to add proper tracking so we measure each
            step instead of guessing.
          </p>
        </Prose>
      </Section>
    </CaseStudyShell>
  );
}

/* ─────────── Local editorial primitives ─────────── */

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1280px] px-6 md:px-10">{children}</div>
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
          <span className="mx-3 text-ink-quiet">/</span>
          {eyebrow}
        </p>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="body-text mt-8 flex max-w-[680px] flex-col gap-5 text-ink-muted">
      {children}
    </div>
  );
}

/**
 * Padded frame behind one or more screenshots. The frame carries the
 * rounded corners so the UI inside is never clipped.
 */
function Frame({
  children,
  columns = 1,
  dark,
}: {
  children: React.ReactNode;
  columns?: 1 | 2;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-4 md:p-8 ${ dark ? "bg-white/[0.06]" : "bg-[rgba(15,15,15,0.04)]" } ${columns === 2 ? "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8" : ""}`}
    >
      {children}
    </div>
  );
}

function Figure({
  src,
  alt,
  caption,
  dark,
}: {
  src: string;
  alt: string;
  caption?: string;
  dark?: boolean;
}) {
  return (
    <figure className="flex min-w-0 flex-col gap-4">
      <div
        className={`overflow-hidden rounded-lg border ${ dark ? "border-white/10" : "border-[var(--color-line)]" } bg-white shadow-[0_8px_24px_rgba(15,15,15,0.08)]`}
      >
        <ZoomImage src={src} alt={alt} />
      </div>
      {caption && (
        <figcaption
          className={`body-sm ${dark ? "text-ink-inverse-quiet" : "text-ink-quiet"}`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
