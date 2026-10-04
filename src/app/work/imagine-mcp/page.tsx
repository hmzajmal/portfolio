import { notFound } from "next/navigation";
import { CaseStudyShell } from "@/components/case-study/shell";
import {
  Block,
  Cards,
  CompareTable,
  Flow,
  H2,
  Note,
  Prose,
  Section,
  Shots,
  StatStrip,
  Tile,
  Title,
  Wide,
} from "@/components/case-study/editorial";
import { ClaudeFrame } from "@/components/case-study/claude-frame";
import { CSYellowTiles } from "@/components/case-study/primitives";
import { ZoomImage } from "@/components/ui/zoom-image";

/** Table of contents for the navbar. Ids match the section anchors below. */
const NAV_SECTIONS = [
  { id: "context", label: "Context" },
  { id: "process", label: "Process" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
];

export const metadata = {
  title: "Imagine MCP · ImagineArt · Case Study · Hamza Jamal",
};

const IMG = "/work/mcp";

export default function ImagineMcpCaseStudy() {
  // Draft. Visible on the dev server, a 404 on every production build.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <CaseStudyShell bg="#FAF7F2" currentSlug="imagine-mcp" sections={NAV_SECTIONS}>
      <Title
        title="Imagine MCP"
        summary="I put ImagineArt's tools inside Claude, and gave them a face."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Team", value: "PM, 2 engineers, QA, CEO" },
          { label: "Timeline", value: "29 Apr to 13 Jun 2026" },
          { label: "Status", value: "Live in Claude" },
        ]}
      />

      {/* Hero frame */}
      <Wide>
        <ClaudeFrame
          src={`${IMG}/widget-product.png`}
          alt="Claude showing the Add your product widget after the user asks for a UGC ad"
          title="Create a UGC ad"
        />
      </Wide>

      {/* One-line problem */}
      <Wide>
        <p className="h3 max-w-[820px] text-ink wt-regular">
          An MCP has no interface, and a prompt does not carry intent.{" "}
          <span className="text-ink-quiet">Every wrong guess costs the user credits.</span>
        </p>
      </Wide>

      {/* ───────────── 01 Context ───────────── */}
      <Section number="01" id="context" eyebrow="Context and research" wide>
        <H2>Who I designed for, and what was already out there.</H2>

        <Block label="Users">
          <Cards
            items={[
              ["Solo creators", "Volume, fast"],
              ["Marketing agencies", "Many clients, one chat"],
              ["Founders", "No time for a studio"],
              ["Business owners", "One ad, today"],
            ]}
          />
          <Note>
            They need volume, they live in Claude or ChatGPT, and they do not
            want to learn a full studio for one ad.
          </Note>
        </Block>

        <Block label="Why we built it">
          <Prose>
            <p>
              If someone is already in Claude, let them make ads, product
              shots and videos right there. One prompt can do a week of
              content. The web studios stay for precision. The MCP is the
              fast lane.
            </p>
          </Prose>
        </Block>

        <Block label="What the competition was doing">
          <CompareTable
            columns={["Higgsfield", "OpenArt", "Imagine MCP"]}
            rows={[
              ["Launched", "30 Apr 2026", "Earlier", "13 Jun 2026"],
              ["How it works", "Prompt in, file out", "Prompt in, file out", "Asks first, then generates"],
              ["Interface in chat", "None", "None", "Widgets"],
              ["Shows options before you spend", "No", "No", "Yes"],
              ["Common complaints", "Expired tokens, stuck jobs", "", ""],
            ]}
          />
          <Note>Nobody had treated this as a design problem yet.</Note>
        </Block>

        <Block label="Three things I learned before sketching">
          <CSYellowTiles
            items={[
              {
                title: "1,600 credits",
                body: "That is one fifteen second video. On the web you choose product, presenter, format and hook before you pay. In a chat, all four are guesses.",
              },
              {
                title: "A bad guess is silent",
                body: "The model thinks it did well. Only the user knows the video is useless, and the credits are already gone.",
              },
              {
                title: "Hand-offs are fine. Wrong videos are not.",
                body: "Users did not mind being sent to the full studio for precise work. They minded paying for a wrong result.",
              },
            ]}
          />
        </Block>
      </Section>

      {/* ───────────── 02 Process ───────────── */}
      <Section number="02" id="process" eyebrow="Exploration and craft" wide>
        <H2>A layer that thinks a little before it spends your money.</H2>

        <Block label="First attempt">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <Tile eyebrow="What we tried">
              Expose the tools, let the prompt drive.
            </Tile>
            <Tile eyebrow="What happened">
              It generated, ignored the parameters, and almost everything was
              thrown away. It proved the problem.
            </Tile>
          </div>
        </Block>

        <Block label="The mini-brain">
          <Prose>
            <p>
              A small layer between your prompt and our tools. It reads what
              you typed, works out which studio you need, and asks only the
              questions that studio cannot answer on its own. One question at
              a time. When it knows enough, it generates once.
            </p>
          </Prose>
          <div className="mt-10">
            <Flow steps={["Prompt", "Keywords", "Widget", "Generate"]} />
          </div>
        </Block>
      </Section>

      <Shots
        surface="white"
        plain
        items={[
          {
            src: `${IMG}/whiteboard.jpg`,
            alt: "Whiteboard sketch of the mini-brain routing a prompt to Ad Studio or Fashion Studio",
            caption: "The first sketch. A prompt, a mini-brain, keywords, and a widget per studio.",
          },
        ]}
      />

      <Section eyebrow="Putting a face on it" wide bare>
        <Prose>
          <p>
            Nobody was showing an interface inside Claude, so there was
            nothing to copy. Our studios are built for a full screen. Claude
            gives you a card. So every studio got a small version that fits
            the card.
          </p>
        </Prose>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <Tile eyebrow="Small">Asks one question. One obvious action.</Tile>
          <Tile eyebrow="Full screen">Inspect the result. Adjust it.</Tile>
        </div>
      </Section>

      <Wide>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[5fr_7fr] md:items-start md:gap-8">
          <ClaudeFrame
            src={`${IMG}/widget-result.png`}
            alt="A generated bakery storefront image inside Claude with Use, Variate, Animate and Edit actions"
            title="Generate an image"
            caption="Small. The result and its next actions, inside the chat."
          />
          <figure className="flex min-w-0 flex-col gap-3">
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-[0_12px_32px_rgba(15,15,15,0.08)]">
              <ZoomImage src={`${IMG}/widget-fullscreen.png`} alt="The same result opened full screen" />
            </div>
            <figcaption className="body-sm text-ink-quiet">
              Full screen. The same result, opened to look closer.
            </figcaption>
          </figure>
        </div>
      </Wide>

      <Section eyebrow="The argument" wide bare>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <Tile eyebrow="Engineers and PM">
            Put everything from the website inside Claude, so nothing is
            missing.
          </Tile>
          <Tile eyebrow="Me">
            If people wanted every setting they would be on the website. Show
            one thing, let them skip it, get out of the way.
          </Tile>
        </div>
        <Note>We shipped the small version. Full screen stayed as the way out.</Note>
      </Section>

      <Section eyebrow="Details I obsessed over" wide bare>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {[
            ["Skippable", "If the prompt already answered it, we do not ask."],
            ["Real clips, not labels", "Nobody knows what a testimonial looks like until they see one."],
            ["“I won’t guess.”", "Teams, folders and credits are read out, never assumed."],
            ["Actions on the result", "Use, Variate, Animate and Edit live on the image itself."],
          ].map(([t, d]) => (
            <li key={t} className="liquid rounded-2xl p-6">
              <p className="label text-ink">{t}</p>
              <p className="body-sm mt-2 text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ───────────── 03 Solution ───────────── */}
      <Section number="03" id="solution" eyebrow="The solution" wide>
        <H2>Making a UGC ad, one question at a time.</H2>
        <Prose>
          <p>Type &ldquo;create a UGC ad&rdquo; and the mini-brain walks you through it.</p>
        </Prose>
      </Section>

      <Steps
        items={[
          {
            n: "1",
            title: "Your product",
            body: "Link, upload, or a saved one.",
            src: `${IMG}/widget-product.png`,
            alt: "Add your product widget",
          },
          {
            n: "2",
            title: "Your presenter",
            body: "Saved avatar, reference upload, or describe one.",
            src: `${IMG}/widget-avatar.png`,
            alt: "Add your avatar widget",
          },
          {
            n: "3",
            title: "Format",
            body: "Unboxing, testimonial, UGC, shown as real clips.",
            src: `${IMG}/widget-format.png`,
            alt: "Choose a format widget",
          },
          {
            n: "4",
            title: "Hook",
            body: "The first three seconds, named and previewed.",
            src: `${IMG}/widget-hook.png`,
            alt: "Pick your hook widget",
          },
          {
            n: "5",
            title: "Generate",
            body: "One video, next actions attached.",
            src: `${IMG}/widget-list.png`,
            alt: "Three generated images in Claude with a Use action",
          },
        ]}
      />

      <Section eyebrow="The small questions" wide bare>
        <Prose>
          <p>Which team? Which folder? How many credits? The assistant shows you.</p>
        </Prose>
      </Section>

      <Wide>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start md:gap-6">
          <ClaudeFrame src={`${IMG}/widget-team.png`} alt="Choose a team widget" title="Generate a logo" />
          <ClaudeFrame src={`${IMG}/widget-folder.png`} alt="Choose a folder widget" title="Generate a logo" />
          <ClaudeFrame src={`${IMG}/widget-credits.png`} alt="Credits widget" title="Credits" />
        </div>
      </Wide>

      {/* ───────────── 04 Results ───────────── */}
      <Section number="04" id="results" eyebrow="Results and reflection" wide>
        <H2>How it is going.</H2>
        <p className="eyebrow mt-2">Mixpanel · MCP tool events · Jul to Sep 2026</p>

        <div className="mt-8">
          <StatStrip
            items={[
            ["4,319", "users"],
            ["129.5K", "tool calls"],
            ["1,990", "made an image, last 30 days"],
            ["1,603", "made a video, last 30 days"],
            ["5", "calls per user, median"],
            ]}
          />
        </div>
        <Note>
          Half the traffic comes through OpenAI&apos;s clients. Most of the
          rest through Claude, Claude Code and Codex, where the widgets live.
        </Note>

        <Block label="What people said">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start md:gap-8">
            <QuoteCard
              src={`${IMG}/linkedin-sarah.png`}
              alt="LinkedIn post by Sarah Jahangir about the MCP"
              who="Sarah, AI filmmaker"
            >
              It&apos;s pretty awesome. But having some trouble with my
              characters so Claude told me to go directly and do those.
            </QuoteCard>
            <QuoteCard
              src={`${IMG}/linkedin-athul.png`}
              alt="LinkedIn post by Athul Krishna about the MCP"
              who="Athul, AI filmmaker"
            >
              Great for storyboard and general stuff. But for precision I
              switch to manual mode.
            </QuoteCard>
          </div>
          <Note>
            That is the split I designed for. Quick work in the MCP, precise
            work in the studio, and a clear hand-off between them.
          </Note>
        </Block>

        <Block label="What I would fix next">
          <CSYellowTiles
            items={[
              {
                title: "Sharper first question",
                body: "A quarter of calls still error or get blocked. Some are prompts the mini-brain let through too early.",
              },
              {
                title: "Show what it can do",
                body: "More than half of people who connect never make a call. They see an empty chat and leave.",
              },
              {
                title: "Characters",
                body: "The precision case users hit most. Next studio to bring inside.",
              },
            ]}
          />
        </Block>
      </Section>
    </CaseStudyShell>
  );
}

/* ─────────── Local blocks ─────────── */

function Steps({
  items,
}: {
  items: { n: string; title: string; body: string; src: string; alt: string }[];
}) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:gap-16 md:px-10">
        {items.map((it) => (
          <div
            key={it.n}
            className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] md:items-start md:gap-10"
          >
            <div className="flex items-start gap-4 md:sticky md:top-32">
              <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] label-sm text-ink-inverse">
                {it.n}
              </span>
              <div>
                <p className="title text-ink">{it.title}</p>
                <p className="body-sm mt-1 text-ink-muted">{it.body}</p>
              </div>
            </div>
            <ClaudeFrame src={it.src} alt={it.alt} title="Create a UGC ad" />
          </div>
        ))}
      </div>
    </section>
  );
}

function QuoteCard({
  src,
  alt,
  who,
  children,
}: {
  src: string;
  alt: string;
  who: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="liquid flex flex-col gap-5 rounded-2xl p-6">
      <blockquote className="body-lg text-ink">&ldquo;{children}&rdquo;</blockquote>
      <figcaption className="body-sm text-ink-muted">{who}, on LinkedIn</figcaption>
      <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
        <ZoomImage src={src} alt={alt} />
      </div>
    </figure>
  );
}
