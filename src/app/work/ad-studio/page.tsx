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
  Mockups,
  Numbers,
  P,
  PillDivider,
  Point,
  Table,
} from "@/components/case-study/editorial";

/** Table of contents for the navbar. Ids match the chapter anchors below. */
const NAV_SECTIONS = [
  { id: "situation", label: "Situation" },
  { id: "task", label: "Task" },
  { id: "action", label: "Action" },
  { id: "result", label: "Result" },
];

export const metadata = {
  title: "Ad Studio · ImagineArt · Case Study · Hamza Jamal",
};

const IMG = "/work/ad-studio";
const M = `${IMG}/mockups`;

export default function AdStudioCaseStudy() {
  // Draft. Visible on the dev server, a 404 on every production build.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <CaseStudyShell bg="#EFEAE2" currentSlug="ad-studio" sections={NAV_SECTIONS}>
      <Article accent="#7B5CFF">
        <ArticleHead
          label="Ad Studio"
          aside="ImagineArt, web and mobile"
          title="Every choice on the screen before you spend a credit."
          summary="Ad Studio was a prompt bar with hidden buttons. I rebuilt it as a studio, on web and mobile, and let the failure data decide what mattered."
          facts={[
            ["Role", "Product Designer"],
            ["Team", "PM, two engineers, growth, QA"],
            ["Timeline", "Jul to Sep 2026"],
            ["Platforms", "Web and mobile"],
          ]}
        />

        <Figure
          flush
          plain
          items={[{ src: `${M}/home-laptop.jpg`, alt: "The new Ad Studio home on a laptop." }]}
          tag="The new home"
        />

        <P>
          The short version. Nine in ten failed generations were not the AI.
          They were Free users offered models they could not run, and people
          pressing Create on an empty prompt. The redesign fixes both at the
          source, and paid success was already up from 69% to 81% by
          September.
        </P>

        {/* ───────── Situation ───────── */}
        <Chapter id="situation" label="Situation" aside="June 2026" title="A prompt bar, three plus buttons, a lot of guessing.">
          <P>
            Ad Studio launched as a prompt bar. Product and Avatar were plus
            buttons that opened modals over the page. Everything else was
            invisible unless you knew to type it.
          </P>
          <P>
            Our users are creators, agencies and shop owners who need an ad
            today. They typed once, tried once more, and left.
          </P>

          <Figure
            flush
            plain
            items={[{ src: `${M}/old-home-laptop.jpg`, alt: "The old Ad Studio home on a laptop." }]}
            tag="Before"
          />
          <Figure
            columns={2}
            items={[
              { src: `${IMG}/old-2-product-modal.png`, alt: "The old product modal over the home." },
              { src: `${IMG}/old-3-avatar-modal.png`, alt: "The old avatar sheet over the home." },
            ]}
            caption="Before. Every choice was a modal."
          />

          <H3>The data</H3>
          <P>
            Mid July, the studio opened to Free users. Weekly users went from
            120 to 900. Failures went up faster.
          </P>
          <P>
            I read every failure reason in the log. The pattern was not
            subtle.
          </P>

          <div className="mt-8">
            <Table
              columns={["Count", "Meaning"]}
              rows={[
                ["Model not allowed on this plan", "10,211", "Free users offered gated models"],
                ["Prompt is required", "1,891", "Create pressed on an empty box"],
                ["Insufficient credits", "804", "Expected"],
                ["Real generation errors", "under 60", "The model was fine"],
              ]}
            />
          </div>
          <p className="body-sm mt-3 text-ink-quiet">Failed generations, Jun to Sep 2026. Staff and test accounts excluded.</p>

          <P>
            The product was failing people before the model ever ran. That
            is a design problem, and it set the brief.
          </P>
        </Chapter>

        {/* ───────── Task ───────── */}
        <Chapter id="task" label="Task" aside="The brief" title="Show everything. Break nothing. Fit on a phone.">
          <P>
            The ask was broad. I narrowed it to four goals I could hold the
            design against.
          </P>
          <Point n="1" title="Every option visible before you generate." />
          <Point n="2" title="Nothing you can click fails because of your plan." />
          <Point n="3" title="One screen on a phone. No modals." />
          <Point n="4" title="Every result carries its next step." />

          <Circles steps={["Data", "Sketch", "Build", "Measure"]} />
        </Chapter>

        {/* ───────── Action ───────── */}
        <Chapter id="action" label="Action" aside="Jul to Sep" title="From a prompt bar to a rail of five cards.">
          <H3>Competition</H3>
          <P>
            OpenArt and Higgsfield lead with the model and make you upload
            your product every time. We led with the ad. The model became a
            field you see only when it matters.
          </P>

          <H3>The rail</H3>
          <P>
            Five cards on the left: Scene, Product, Avatar, Visual Reference,
            Style. The prompt sits below them, optional. One button.
          </P>
          <P>
            The PM and CEO wanted a dozen controls. Five is the number of
            decisions that change an ad. We shipped five.
          </P>

          <Figure
            flush
            plain
            items={[{ src: `${M}/create-pair.jpg`, alt: "The new create screen on a laptop, with the mobile create screen on a phone beside it." }]}
            tag="After, web and mobile"
            caption="The same five cards on both screens. On the phone they stack, and Create sits under your thumb."
          />

          <H3>Pick with your eyes</H3>
          <P>
            Each card opens a panel of real examples. Scenes are photographs.
            Products and avatars come from a saved library with search and
            upload in one place.
          </P>

          <Mockups
            kind="browser"
            url="imagine.art/ad-studio"
            items={[
              { src: `${IMG}/desktop-3.png`, alt: "Scene picker" },
              { src: `${IMG}/desktop-4.png`, alt: "Product picker" },
            ]}
            caption="Scene and product. Same panel, same rules."
          />

          <H3>The result is a starting point</H3>
          <P>
            A finished ad opens with Relight, Camera Angles, Variate,
            Background Changer, Upscale and Edit. Beside it, a panel lists
            what made it.
          </P>
          <P>
            A result you can read is a result you can fix. That panel is the
            answer to silent failure.
          </P>

          <Figure
            flush
            plain
            items={[{ src: `${M}/result-pair.jpg`, alt: "A generated ad on a laptop with its toolbar and details, and the same project in mobile history on a phone." }]}
            caption="Every result shows what made it. History keeps the settings on the phone."
          />

          <PillDivider>Mobile</PillDivider>

          <P>
            The old mobile flow was a modal inside a modal. The new one is one
            screen. Anything that did not fit was cut, not collapsed.
          </P>

          <Figure
            flush
            plain
            columns={3}
            items={[
              { src: `${M}/mobile-1-phone.jpg`, alt: "Mobile home" },
              { src: `${M}/mobile-3-phone.jpg`, alt: "Mobile create, video, with model, length and quality" },
              { src: `${M}/mobile-4-phone.jpg`, alt: "Mobile generating, with a time estimate" },
            ]}
            caption="Home. Create a video, model in the form. Generating, with a time estimate."
          />

          <H3>From the failure log</H3>
          <Bullets
            items={[
              <><span className="strong">Prompt optional.</span> 1,891 people had pressed Create on an empty box.</>,
              <><span className="strong">Model in the form.</span> The plan gate shows before Generate, never after.</>,
              <><span className="strong">Settings travel with the result.</span> Ratio, quality and length on every history card.</>,
            ]}
          />
        </Chapter>

        {/* ───────── Result ───────── */}
        <Chapter id="result" label="Result" aside="So far" title="Paid users succeed more. The full read is a month away.">
          <P>
            The redesign shipped at the end of September. This is the
            baseline it was built against, and the first movement.
          </P>

          <Numbers
            items={[
              ["81%", "Paid generations that succeed, from 69%"],
              ["8x", "Weekly users after opening to Free"],
              ["1,891", "Empty-prompt failures the form removes"],
              ["10,211", "Plan-gate failures now shown before Generate"],
            ]}
          />

          <H3>What I took from it</H3>
          <Point title="Read the failures before you draw.">
            The biggest fix was not a layout. It was the log.
          </Point>
          <Point title="Volume is not health.">
            Every chart went up when Free came in. Success rate told the truth.
          </Point>
          <Point title="On mobile, the screen is the funnel.">
            One screen, Create at the thumb, nothing tucked away.
          </Point>

          <H3>Next</H3>
          <Bullets
            items={[
              "October numbers: success rate and exports, paid and free.",
              "Hide gated models from Free, or show the upgrade before Generate.",
              "Hook and Format for image ads.",
            ]}
          />
        </Chapter>
      </Article>
    </CaseStudyShell>
  );
}
