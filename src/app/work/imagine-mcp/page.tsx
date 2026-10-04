import { notFound } from "next/navigation";
import { CaseStudyShell } from "@/components/case-study/shell";
import {
  Article,
  ArticleHead,
  Bullets,
  Chapter,
  Circles,
  Figure,
  H3,
  Numbers,
  P,
  PillDivider,
  Point,
  Quote,
  Table,
} from "@/components/case-study/editorial";
import { ClaudeFrame } from "@/components/case-study/claude-frame";

/** Table of contents for the navbar. Ids match the chapter anchors below. */
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
    <CaseStudyShell bg="#EDE7DD" currentSlug="imagine-mcp" sections={NAV_SECTIONS}>
      <Article accent="#D97757">
        <ArticleHead
          label="Imagine MCP"
          aside="ImagineArt inside Claude"
          title="A tool with no screen, that asks before it spends."
          summary="A prompt is the wrong place to spend 1,600 credits on a guess. So the MCP asks a few quick questions first, as small widgets in the chat."
          facts={[
            ["Role", "Product Designer"],
            ["Team", "PM, two engineers, QA, CEO"],
            ["Timeline", "29 Apr to 13 Jun 2026"],
            ["Status", "Live in Claude"],
          ]}
        />

        <Figure
          flush
          plain
          items={[{ src: `${IMG}/mockups/product-laptop.jpg`, alt: "A laptop showing Claude with the Add your product widget." }]}
          tag="Screen: the first question"
        />

        {/* ───────── Context ───────── */}
        <Chapter id="context" label="Context" aside="Who, why, and what was out there" title="Our users already lived in Claude. The tools did not.">
          <P>
            Solo creators, small agencies, founders and shop owners. They
            need a lot of content, quickly, and many of them spend the day
            in Claude or ChatGPT. The MCP lets them make ads, product shots
            and videos right there. The web studios stay for precise work.
          </P>

          <H3>The competition</H3>
          <P>
            Higgsfield launched their MCP the day after we started ours.
            OpenArt already had one. Both are prompt in, file out. Nothing
            to click, nothing to choose, no way to see what the tool can do
            before you pay.
          </P>

          <div className="mt-8">
            <Table
              columns={["Higgsfield", "OpenArt", "Imagine MCP"]}
              rows={[
                ["Launched", "30 Apr 2026", "Earlier", "13 Jun 2026"],
                ["How it works", "Prompt in, file out", "Prompt in, file out", "Asks first, then generates"],
                ["Interface in chat", "None", "None", "Widgets"],
              ]}
            />
          </div>

          <H3>Three things I learned first</H3>
          <Point n="1" title="A fifteen second video costs 1,600 credits.">
            On the website you choose product, presenter, format and hook
            before you pay. In a chat, all four are guesses.
          </Point>
          <Point n="2" title="A bad guess is invisible.">
            The model thinks it did well. Only you know the video is
            useless, and the credits are gone.
          </Point>
          <Point n="3" title="People accept a hand-off. Not a wrong video.">
            Being sent to the full studio was fine. Paying for a wrong
            result with no warning was not.
          </Point>
        </Chapter>

        {/* ───────── Process ───────── */}
        <Chapter id="process" label="Process" aside="Exploration and craft" title="A layer that thinks before it spends.">
          <P>
            The first version exposed the tools and let the prompt drive. It
            ignored most of what people asked for, and nearly everything was
            thrown away. It proved the problem.
          </P>
          <P>
            So I drew a mini-brain. It reads your prompt, works out which
            studio you need, and asks only the questions that studio cannot
            answer by itself. One question at a time. Then it generates
            once.
          </P>

          <Figure
            plain
            tint="#FFFFFF"
            items={[{ src: `${IMG}/whiteboard.jpg`, alt: "Whiteboard sketch of the mini-brain." }]}
            tag="The first sketch"
          />

          <Circles steps={["Research", "Sketch", "Widgets", "Ship"]} />

          <H3>Giving it a face</H3>
          <P>
            Nobody was showing an interface inside Claude, so there was
            nothing to copy. Our studios are built for a full screen and
            Claude gives you a card. Every widget got two states: small when
            it asks you something, full when you want to inspect the result.
          </P>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[5fr_7fr] md:items-start">
            <ClaudeFrame
              src={`${IMG}/widget-result.png`}
              alt="A generated image inside Claude with Use, Variate, Animate and Edit."
              title="Generate an image"
              caption="Small. The result and its next actions."
            />
            <Figure
              items={[{ src: `${IMG}/widget-fullscreen.png`, alt: "The same result opened full screen." }]}
              caption="Full screen. The same result, up close."
            />
          </div>

          <H3>The argument</H3>
          <P>
            The engineers and the PM wanted everything from the website in
            Claude. I pushed the other way: show one thing, let people skip
            it, get out of the way. We shipped the small version and kept
            full screen as the way out.
          </P>

          <H3>Details I cared about</H3>
          <Bullets
            items={[
              <><span className="strong">Every widget can be skipped.</span> If the prompt answered it, we do not ask.</>,
              <><span className="strong">Formats are real clips.</span> Nobody knows what a testimonial looks like until they see one.</>,
              <><span className="strong">&ldquo;I won&apos;t guess.&rdquo;</span> Teams, folders and credits are read out, never assumed.</>,
              <><span className="strong">Actions on the result.</span> Use, Variate, Animate and Edit live on the image.</>,
            ]}
          />
        </Chapter>

        {/* ───────── Solution ───────── */}
        <Chapter id="solution" label="Solution" aside="One question at a time" title="Five questions, then one video.">
          <P>Type &ldquo;create a UGC ad&rdquo; and the mini-brain walks you through it.</P>

          <H3>1. Your product</H3>
          <P>Paste a link, upload a photo, or tap one you saved.</P>
          <div className="mt-6"><ClaudeFrame src={`${IMG}/widget-product.png`} alt="Add your product widget" title="Create a UGC ad" /></div>

          <H3>2. Your presenter</H3>
          <P>Pick a saved avatar, upload a reference, or describe one.</P>
          <div className="mt-6"><ClaudeFrame src={`${IMG}/widget-avatar.png`} alt="Add your avatar widget" title="Create a UGC ad" /></div>

          <H3>3. The format</H3>
          <P>Unboxing, testimonial, UGC. Each one a real clip.</P>
          <div className="mt-6"><ClaudeFrame src={`${IMG}/widget-format.png`} alt="Choose a format widget" title="Create a UGC ad" /></div>

          <H3>4. The hook</H3>
          <P>The first three seconds, named and previewed.</P>
          <div className="mt-6"><ClaudeFrame src={`${IMG}/widget-hook.png`} alt="Pick your hook widget" title="Create a UGC ad" /></div>

          <H3>5. Generate</H3>
          <P>One result, with its next actions attached.</P>
          <div className="mt-6"><ClaudeFrame src={`${IMG}/widget-list.png`} alt="Three generated images in Claude" title="Create a UGC ad" /></div>

          <PillDivider>The small questions</PillDivider>

          <P>Which team? Which folder? How many credits left? The assistant just shows you.</P>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-start">
            <ClaudeFrame src={`${IMG}/widget-team.png`} alt="Choose a team widget" title="Generate a logo" />
            <ClaudeFrame src={`${IMG}/widget-folder.png`} alt="Choose a folder widget" title="Generate a logo" />
            <ClaudeFrame src={`${IMG}/widget-credits.png`} alt="Credits widget" title="Credits" />
          </div>
        </Chapter>

        {/* ───────── Results ───────── */}
        <Chapter id="results" label="Results" aside="And what comes next" title="Live in Claude. The next problems are visible.">
          <P>Mixpanel, July to September 2026.</P>

          <Numbers
            items={[
              ["4,319", "People who used it"],
              ["129.5K", "Tool calls in three months"],
              ["1,990", "Made an image through it, last 30 days"],
              ["5", "Calls per user, median"],
            ]}
          />

          <P>
            Half the traffic comes through OpenAI&apos;s clients. Most of the
            rest through Claude, Claude Code and Codex, where the widgets
            live.
          </P>

          <H3>What people said</H3>
          <Quote who="Sarah, AI filmmaker, on LinkedIn">
            It&apos;s pretty awesome. But having some trouble with my characters so Claude told me to go directly and do those.
          </Quote>
          <Quote who="Athul, AI filmmaker, on LinkedIn">
            Great for storyboard and general stuff. But for precision I switch to manual mode.
          </Quote>
          <P>
            That is the split I designed for. Quick work in the MCP, precise
            work in the studio, and a hand-off between them instead of a bad
            result.
          </P>

          <Figure
            columns={2}
            items={[
              { src: `${IMG}/linkedin-sarah.png`, alt: "LinkedIn post by Sarah Jahangir" },
              { src: `${IMG}/linkedin-athul.png`, alt: "LinkedIn post by Athul Krishna" },
            ]}
          />

          <H3>Next</H3>
          <Point title="A sharper first question.">
            A quarter of calls still error or get blocked. Some are prompts
            the mini-brain let through too early.
          </Point>
          <Point title="Show what it can do.">
            More than half of connected users never make a call. They see an
            empty chat and leave.
          </Point>
          <Point title="Characters.">
            Sarah&apos;s problem is the most common one. That studio is next.
          </Point>
        </Chapter>
      </Article>
    </CaseStudyShell>
  );
}
