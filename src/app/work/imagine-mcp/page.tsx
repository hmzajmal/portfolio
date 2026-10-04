import { notFound } from "next/navigation";
import { CaseStudyShell } from "@/components/case-study/shell";
import {
  Article,
  ArticleHead,
  Bullets,
  Chapter,
  Figure,
  H3,
  Numbers,
  P,
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
    <CaseStudyShell bg="#FAF7F2" currentSlug="imagine-mcp" sections={NAV_SECTIONS}>
      <Article>
        <ArticleHead
          label="Imagine MCP"
          aside="ImagineArt inside Claude"
          title="A creative tool with no screen of its own, that asks before it spends your credits."
          summary="A prompt is the wrong place to spend 1,600 credits on a guess. So I built a layer that asks a few quick questions first, as small widgets right in the chat. This is why, and what it looks like."
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
          items={[
            {
              src: `${IMG}/mockups/product-laptop.jpg`,
              alt: "A laptop showing Claude with the Add your product widget after the user asks for a UGC ad",
            },
          ]}
          caption="Ask Claude for a UGC ad and the first question appears as a widget."
        />

        {/* ───────── Context ───────── */}
        <Chapter
          id="context"
          label="Context"
          aside="Who, why, and what was out there"
          title="Our users already lived in Claude. The tools did not."
        >
          <H3>Who this is for</H3>
          <P>
            The people who use ImagineArt most are solo creators, small
            agencies, founders and shop owners. They need a lot of content,
            quickly. Many of them already spend their day in Claude or
            ChatGPT, and the last thing they want is to learn another large
            creative tool to get one ad out.
          </P>

          <H3>Why we built it</H3>
          <P>
            If someone is already sitting in Claude, let them make their ads,
            product shots and videos right there. One prompt can produce ten
            variations, so a person growing a brand can do a week of content
            in a single chat. Our web studios would stay for the detailed
            work. The MCP would be the fast lane.
          </P>

          <H3>What the competition was doing</H3>
          <P>
            Higgsfield launched their MCP the day after we started ours.
            OpenArt already had one. Both work the same way. You type a
            prompt, the model calls a tool, a file comes back. There is
            nothing to click, nothing to choose, and no way to see what the
            tool can do before you spend credits on it. Their support pages
            are full of expired tokens and jobs stuck on pending. Nobody had
            treated this as a design problem yet.
          </P>

          <div className="mt-8">
            <Table
              columns={["Higgsfield", "OpenArt", "Imagine MCP"]}
              rows={[
                ["Launched", "30 Apr 2026", "Earlier", "13 Jun 2026"],
                ["How it works", "Prompt in, file out", "Prompt in, file out", "Asks first, then generates"],
                ["Interface in chat", "None", "None", "Widgets"],
                ["Shows options before you spend", "No", "No", "Yes"],
              ]}
            />
          </div>

          <H3>Three things I learned before I sketched anything</H3>
          <Point n="1" title="A fifteen second video costs 1,600 credits.">
            On the website you choose your product, your presenter, the
            format and the hook before you pay. In a chat, all four become
            guesses.
          </Point>
          <Point n="2" title="A bad guess is invisible.">
            When the model gets your intent wrong it still thinks it did a
            good job. You are the only one who knows the video is useless,
            and by then the credits are gone.
          </Point>
          <Point n="3" title="People accept a hand-off. They do not accept a wrong video.">
            Users did not mind being told that something needed the full
            studio. They minded paying for a result they could not use, with
            no warning.
          </Point>
        </Chapter>

        {/* ───────── Process ───────── */}
        <Chapter
          id="process"
          label="Process"
          aside="Exploration and craft"
          title="A small layer that thinks a little before it spends your money."
        >
          <H3>The first version, and why I threw it out</H3>
          <P>
            We started with the obvious approach. Expose the tools and let
            the prompt do the work. It generated things, but it ignored most
            of what people asked for, and nearly everything had to be thrown
            away. It proved the problem. It did not solve it.
          </P>

          <H3>The mini-brain</H3>
          <P>
            So I drew this on the whiteboard. A layer that sits between your
            prompt and our tools. It reads what you typed, works out which
            studio you need, and asks only the questions that studio cannot
            answer by itself. One question at a time. When it knows enough,
            it generates once. I called it a mini-brain because that is what
            it does.
          </P>

          <Figure
            plain
            tint="#FFFFFF"
            items={[{ src: `${IMG}/whiteboard.jpg`, alt: "Whiteboard sketch of the mini-brain routing a prompt to Ad Studio or Fashion Studio." }]}
            caption="The first sketch. A prompt, a mini-brain, keywords, and a widget per studio."
          />

          <H3>Giving it a face</H3>
          <P>
            Nobody was showing an interface inside Claude, so there was
            nothing to copy. Our studios are built for a full screen, and
            Claude gives you a card. I designed a small version of each
            studio that fits in that card: one question, one obvious next
            action, and a way to open the result full screen when you want
            to look closer. Every widget has those two states. Small when it
            is asking you something, full when you want to inspect what came
            back.
          </P>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[5fr_7fr] md:items-start">
            <ClaudeFrame
              src={`${IMG}/widget-result.png`}
              alt="A generated bakery storefront inside Claude with Use, Variate, Animate and Edit actions"
              title="Generate an image"
              caption="Small. The result and its next actions, in the chat."
            />
            <Figure
              items={[{ src: `${IMG}/widget-fullscreen.png`, alt: "The same result opened full screen." }]}
              caption="Full screen. The same result, opened to look closer."
            />
          </div>

          <H3>The argument we had</H3>
          <P>
            The engineers and our PM wanted everything from the website
            inside Claude, so nothing would be missing. I pushed the other
            way. If people wanted every setting they would be on the
            website. The whole point of the MCP is that you do not have to
            think about the interface. So it should show you one thing, let
            you skip it, and get out of the way. We went with the small
            version, and kept full screen as the way out for anyone who
            wants more.
          </P>

          <H3>The details I cared about most</H3>
          <Bullets
            items={[
              <>
                <span className="strong">Every widget can be skipped.</span>{" "}
                If your prompt already answered the question, we do not ask
                it again.
              </>,
              <>
                <span className="strong">Formats are real clips, not names.</span>{" "}
                Nobody knows what a testimonial style looks like until they
                see one.
              </>,
              <>
                <span className="strong">The assistant says &ldquo;I won&apos;t guess.&rdquo;</span>{" "}
                When your account has more than one team or folder it shows
                you the list. Guessing is how a logo ends up in the wrong
                client&apos;s folder.
              </>,
              <>
                <span className="strong">What happens after a generation.</span>{" "}
                An image comes back with Use, Variate, Animate and Edit on
                it. You never have to ask what you can do with it.
              </>,
            ]}
          />
        </Chapter>

        {/* ───────── Solution ───────── */}
        <Chapter
          id="solution"
          label="Solution"
          aside="One question at a time"
          title="Type &ldquo;create a UGC ad&rdquo; and the mini-brain walks you through five questions."
        >
          <H3>1. Your product</H3>
          <P>Paste a link, upload a photo, or tap one you saved last time.</P>
          <div className="mt-6">
            <ClaudeFrame src={`${IMG}/widget-product.png`} alt="Add your product widget" title="Create a UGC ad" />
          </div>

          <H3>2. Your presenter</H3>
          <P>Pick a saved avatar, upload a reference, or describe one and let it generate.</P>
          <div className="mt-6">
            <ClaudeFrame src={`${IMG}/widget-avatar.png`} alt="Add your avatar widget" title="Create a UGC ad" />
          </div>

          <H3>3. The format</H3>
          <P>Unboxing, testimonial, UGC. Each one shown as a real clip.</P>
          <div className="mt-6">
            <ClaudeFrame src={`${IMG}/widget-format.png`} alt="Choose a format widget" title="Create a UGC ad" />
          </div>

          <H3>4. The hook</H3>
          <P>The first three seconds of the ad, with a name and a short clip for each.</P>
          <div className="mt-6">
            <ClaudeFrame src={`${IMG}/widget-hook.png`} alt="Pick your hook widget" title="Create a UGC ad" />
          </div>

          <H3>5. Generate</H3>
          <P>One result, with its next actions attached.</P>
          <div className="mt-6">
            <ClaudeFrame src={`${IMG}/widget-list.png`} alt="Three generated images in Claude with a Use action" title="Create a UGC ad" />
          </div>

          <H3>The small questions</H3>
          <P>
            Which team should this go in? Which folder? How many credits do I
            have left? The assistant just shows you.
          </P>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-start">
            <ClaudeFrame src={`${IMG}/widget-team.png`} alt="Choose a team widget" title="Generate a logo" />
            <ClaudeFrame src={`${IMG}/widget-folder.png`} alt="Choose a folder widget" title="Generate a logo" />
            <ClaudeFrame src={`${IMG}/widget-credits.png`} alt="Credits widget" title="Credits" />
          </div>
        </Chapter>

        {/* ───────── Results ───────── */}
        <Chapter
          id="results"
          label="Results"
          aside="And what I would fix next"
          title="Live in Claude, with the next problems already visible."
        >
          <P>
            The MCP has been live since June. These are the numbers from
            Mixpanel for July to September 2026.
          </P>

          <Numbers
            items={[
              ["4,319", "People who used it"],
              ["129.5K", "Tool calls in three months"],
              ["1,990", "Made an image through it, last 30 days"],
              ["5", "Calls per user, median"],
            ]}
          />

          <P>
            About half the traffic comes through OpenAI&apos;s clients. Most
            of the rest comes through Claude, Claude Code and Codex, which is
            where the widgets live.
          </P>

          <H3>What people said</H3>
          <Quote who="Sarah, AI filmmaker, on LinkedIn">
            It&apos;s pretty awesome. But having some trouble with my
            characters so Claude told me to go directly and do those.
          </Quote>
          <Quote who="Athul, AI filmmaker, on LinkedIn">
            It is great for storyboard and stuff like the general stuff. But
            for precision I switch to manual mode.
          </Quote>
          <P>
            That is exactly the split I designed for. The MCP takes the
            quick, general work. The studio takes the precise work. And when
            the MCP hits its limit, it tells you where to go instead of
            handing you a bad result.
          </P>

          <Figure
            columns={2}
            items={[
              { src: `${IMG}/linkedin-sarah.png`, alt: "LinkedIn post by Sarah Jahangir" },
              { src: `${IMG}/linkedin-athul.png`, alt: "LinkedIn post by Athul Krishna" },
            ]}
          />

          <H3>What I would fix next</H3>
          <Point title="A sharper first question.">
            A quarter of tool calls still end in an error or get blocked.
            Some of those are the mini-brain letting a prompt through before
            it had enough to go on.
          </Point>
          <Point title="Show what it can do.">
            More than half of the people who connect the MCP never make a
            call. They connect, see an empty chat, and leave. The next widget
            I want to build shows you what this thing can do before you have
            to ask.
          </Point>
          <Point title="Characters.">
            Sarah&apos;s problem is the most common one users hit. That
            studio is the next one to bring inside.
          </Point>
        </Chapter>
      </Article>
    </CaseStudyShell>
  );
}
