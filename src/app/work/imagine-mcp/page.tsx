import { notFound } from "next/navigation";
import { CaseStudyShell } from "@/components/case-study/shell";
import {
  Dashes,
  Facts,
  Img,
  Outcomes,
  P,
  Quote,
  Sec,
  Step,
  Study,
  StudyHead,
  Table,
} from "@/components/case-study/editorial";
import { ClaudeFrame } from "@/components/case-study/claude-frame";

/** Table of contents for the navbar. Ids match the section anchors below. */
const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "process", label: "Process" },
  { id: "outcomes", label: "Outcomes" },
];

export const metadata = {
  title: "Imagine MCP · ImagineArt · Case Study · Hamza Jamal",
};

const IMG = "/work/mcp";

const OUTCOMES: [string, string][] = [
  ["4,319", "People who used it in the first three months"],
  ["129.5K", "Tool calls in the same period"],
  ["1,990", "Made an image through it in the last 30 days"],
];

export default function ImagineMcpCaseStudy() {
  // Draft. Visible on the dev server, a 404 on every production build.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <CaseStudyShell bg="#F8F5F0" currentSlug="imagine-mcp" sections={NAV_SECTIONS}>
      <Study>
        <StudyHead title="Putting a creative tool inside Claude, with no screen of its own" client="ImagineArt" kind="MCP server with widgets" />

        <Img src={`${IMG}/mockups/product-laptop.jpg`} alt="A laptop showing Claude with the Add your product widget." />

        <Sec title="Outcomes">
          <Outcomes items={OUTCOMES} />
        </Sec>

        <Sec id="overview" title="Overview">
          <P>
            This was the first thing I designed that has no interface of its
            own. It lives inside Claude, ChatGPT and Cursor, and the only
            surface I controlled was a small card in someone else&apos;s
            chat. That constraint turned out to be the whole project.
          </P>
          <P>
            ImagineArt wanted its image, video and ad tools reachable from
            the AI assistants our users already live in. The MCP shipped on
            13 June 2026, one of the first creative MCPs to render widgets
            inside the chat rather than returning files.
          </P>

          <Facts
            groups={[
              { title: "My role", items: ["Product design", "Interaction design", "Widget system", "Competitor review", "Hand-off"] },
              { title: "Team", items: ["Product manager", "Two engineers", "QA", "CEO"] },
              { title: "Scope", items: ["29 April to 13 June 2026", "Claude first, then ChatGPT and Cursor", "No UI beyond a chat card", "Live and tracked in Mixpanel"] },
            ]}
          />
        </Sec>

        <Sec title="Users and audience">
          <Dashes
            items={[
              "Solo creators who want volume without learning a studio",
              "Small agencies working across many brands",
              "Founders and shop owners making their first ads",
              "People who already spend their day in Claude or ChatGPT",
            ]}
          />
        </Sec>

        <Sec id="problem" title="Problem statement">
          <P>
            How might we let someone make a 1,600 credit video from a single
            line of text without guessing what they meant, when the model
            cannot see the product, the presenter, the format or the hook.
          </P>
          <div className="mx-auto mt-10 max-w-[760px]">
            <ClaudeFrame src={`${IMG}/widget-list.png`} alt="Three generated images in Claude with a Use action" title="Create a UGC ad" caption="Where it lands. A result inside the chat, with its next action attached." />
          </div>
        </Sec>

        <Sec id="process" title="Process">
          <Step title="Started by trying the first version, and throwing it out">
            <P>
              The obvious approach was to expose the tools and let the prompt
              drive. It generated things, but it ignored most of what people
              asked for and nearly everything was thrown away. It proved the
              problem. It did not solve it.
            </P>
          </Step>

          <Step title="Looked at Higgsfield and OpenArt, who shipped the same week">
            <P>
              Higgsfield launched their MCP the day after we started ours.
              OpenArt already had one. Both are prompt in, file out. Nothing
              to click, nothing to choose, no way to see what the tool can do
              before you pay. Nobody had treated this as a design problem.
            </P>
            <div className="mt-8 max-w-[760px]">
              <Table
                columns={["Higgsfield", "OpenArt", "Imagine MCP"]}
                rows={[
                  ["Launched", "30 Apr 2026", "Earlier", "13 Jun 2026"],
                  ["How it works", "Prompt in, file out", "Prompt in, file out", "Asks first, then generates"],
                  ["Interface in chat", "None", "None", "Widgets"],
                ]}
              />
            </div>
          </Step>

          <Step title="Sketched a mini-brain that asks before it spends">
            <P>
              A layer between the prompt and the tools. It reads what you
              typed, works out which studio you need, and asks only the
              questions that studio cannot answer by itself. One question at
              a time. Then it generates once.
            </P>
            <Img src={`${IMG}/whiteboard.jpg`} alt="Whiteboard sketch of the mini-brain." caption="The first sketch. A prompt, a mini-brain, keywords, a widget per studio." />
          </Step>

          <Step title="Designed a small and a full state for every widget">
            <P>
              Our studios are built for a full screen and Claude gives you a
              card. So each one got a small version that asks one question
              with one obvious action, and a full-screen version for looking
              at the result. The engineers and the PM wanted everything from
              the website in the card. We shipped the small version and kept
              full screen as the way out.
            </P>
            <div className="mx-auto mt-10 max-w-[760px]">
              <ClaudeFrame src={`${IMG}/widget-result.png`} alt="A generated image inside Claude with Use, Variate, Animate and Edit." title="Generate an image" caption="Small. The result and its next actions, in the chat." />
            </div>
            <Img frame src={`${IMG}/widget-fullscreen.png`} alt="The same result opened full screen." caption="Full screen. The same result, up close." />
          </Step>

          <Step title="Built the UGC ad flow as five questions">
            <P>
              Product, presenter, format, hook, generate. Each one is a
              widget you can tap, upload to, or skip. Formats and hooks are
              real clips, because nobody knows what a testimonial looks like
              until they see one.
            </P>
            <div className="mx-auto mt-10 flex max-w-[760px] flex-col gap-8">
              <ClaudeFrame src={`${IMG}/widget-product.png`} alt="Add your product widget" title="Create a UGC ad" caption="1. Product. Paste a link, upload, or tap a saved one." />
              <ClaudeFrame src={`${IMG}/widget-avatar.png`} alt="Add your avatar widget" title="Create a UGC ad" caption="2. Presenter. A saved avatar, a reference, or a description." />
              <ClaudeFrame src={`${IMG}/widget-format.png`} alt="Choose a format widget" title="Create a UGC ad" caption="3. Format. Each one a real clip." />
              <ClaudeFrame src={`${IMG}/widget-hook.png`} alt="Pick your hook widget" title="Create a UGC ad" caption="4. Hook. The first three seconds." />
            </div>
          </Step>

          <Step title="Made the assistant say &ldquo;I won&rsquo;t guess&rdquo;">
            <P>
              Teams, folders and credits are facts on the account. When there
              is more than one answer the assistant shows the list instead of
              picking. Guessing is how a logo ends up in the wrong
              client&apos;s folder.
            </P>
            <div className="mx-auto mt-10 flex max-w-[760px] flex-col gap-8">
              <ClaudeFrame src={`${IMG}/widget-team.png`} alt="Choose a team widget" title="Generate a logo" caption="Which team." />
              <ClaudeFrame src={`${IMG}/widget-folder.png`} alt="Choose a folder widget" title="Generate a logo" caption="Which folder." />
              <ClaudeFrame src={`${IMG}/widget-credits.png`} alt="Credits widget" title="Credits" caption="How many credits are left." />
            </div>
          </Step>

          <Step title="Shipped on 13 June and watched what people did with it">
            <P>
              Half the traffic came through OpenAI&apos;s clients, most of the
              rest through Claude, Claude Code and Codex. Two filmmakers
              wrote about it on LinkedIn, and both landed on the split I
              designed for: quick work in the MCP, precise work in the
              studio, and a hand-off between them.
            </P>
            <Quote who="Sarah, AI filmmaker">
              It&apos;s pretty awesome. But having some trouble with my characters so Claude told me to go directly and do those.
            </Quote>
            <Quote who="Athul, AI filmmaker">
              Great for storyboard and general stuff. But for precision I switch to manual mode.
            </Quote>
          </Step>
        </Sec>

        <Sec id="outcomes" title="Outcomes">
          <Outcomes items={OUTCOMES} />
        </Sec>

        <Sec title="Lessons">
          <P>
            Ask before you spend. A quarter of tool calls still error or get
            blocked, and most of those are prompts the mini-brain let through
            too early. The first question has to be sharper.
          </P>
          <P>
            Show what the thing can do. More than half of the people who
            connect never make a call. They see an empty chat and leave. The
            next widget is the one that shows the menu before you ask.
          </P>
          <P>
            Listen for the hand-off. Sarah&apos;s characters problem is the
            precision case users hit most. That studio comes inside next.
          </P>
        </Sec>
      </Study>
    </CaseStudyShell>
  );
}
