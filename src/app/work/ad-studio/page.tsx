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
          title="A studio where every choice is on the screen."
          summary="Ad Studio began as a prompt bar with a few hidden buttons. Over one summer I rebuilt it so the options are visible before you spend a credit."
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
          tag="Screen: the new home"
        />

        {/* ───────── Situation ───────── */}
        <Chapter id="situation" label="Situation" aside="Where it started" title="People could not see what the studio could do.">
          <P>
            Ad Studio launched in June as a prompt bar at the bottom of the
            screen. Product and Avatar were plus buttons that opened modals
            over the page. Everything else lived inside the prompt.
          </P>
          <P>
            Our users are creators, small agencies and shop owners who need
            an ad this afternoon. Most typed one line, got something they
            did not expect, tried once more, and left.
          </P>

          <Figure
            flush
            plain
            items={[{ src: `${M}/old-home-laptop.jpg`, alt: "The old Ad Studio home on a laptop." }]}
            tag="Before"
            caption="A prompt bar and two plus buttons."
          />
          <Figure
            columns={2}
            items={[
              { src: `${IMG}/old-2-product-modal.png`, alt: "The old product modal over the home." },
              { src: `${IMG}/old-3-avatar-modal.png`, alt: "The old avatar sheet over the home." },
            ]}
            caption="Every choice was a modal over the page."
          />

          <H3>What the numbers said</H3>
          <P>
            In mid July the studio opened to Free users. Weekly users went
            from about 120 to over 900. Failures went up faster, and nine in
            ten of them were one of two things.
          </P>

          <div className="mt-8">
            <Table
              columns={["Count", "What it means"]}
              rows={[
                ["Model not allowed on this plan", "10,211", "Free users were offered models their plan could not run"],
                ["Prompt is required", "1,891", "People pressed Create with nothing typed"],
                ["Insufficient credits", "804", "Expected"],
                ["Real generation errors", "under 60", "The model was not the problem"],
              ]}
            />
          </div>
          <p className="body-sm mt-3 text-ink-quiet">Failed generations, June to September 2026. Staff and test accounts excluded.</p>

          <P>
            The AI was fine. The interface let people walk into walls it
            could have shown them, and nobody came back for a third try.
          </P>
        </Chapter>

        {/* ───────── Task ───────── */}
        <Chapter id="task" label="Task" aside="The brief" title="Show everything. Break nothing. Fit on a phone.">
          <P>
            The brief was broad: make it intuitive, add the tools people
            asked for, fix mobile. I turned it into four things I could
            check against the data.
          </P>
          <Point n="1" title="Every option on screen before you generate." />
          <Point n="2" title="Nothing you can click fails because of your plan." />
          <Point n="3" title="One screen on a phone, no modals." />
          <Point n="4" title="Every result carries its next step." />

          <Circles steps={["Data", "Sketch", "Build", "Measure"]} />
        </Chapter>

        {/* ───────── Action ───────── */}
        <Chapter id="action" label="Action" aside="What I did" title="From a prompt bar to a rail of five cards.">
          <H3>Competition first</H3>
          <P>
            I spent a week in OpenArt and Higgsfield making the same ad.
            Both lead with the model and make you upload your product every
            time. We flipped it: lead with the ad, keep the model as a field
            you only see when it matters.
          </P>

          <H3>The rail</H3>
          <P>
            The new create screen has five cards on the left: Scene,
            Product, Avatar, Visual Reference, Style. The prompt sits below
            them and is optional. Generate is one button.
          </P>
          <P>
            The PM and the CEO wanted a dozen controls so nothing from the
            old product was missing. I argued for five, because five is the
            number of decisions that change an ad. We shipped five.
          </P>

          <Figure
            flush
            plain
            items={[{ src: `${M}/create-laptop.jpg`, alt: "The new create screen on a laptop." }]}
            tag="After"
            caption="Five cards, an optional prompt, one button."
          />

          <H3>Pick with your eyes</H3>
          <P>
            Each card opens a panel of real examples. Scenes are photographs
            of compositions. Products and avatars come from a saved library
            with search and upload in one place.
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
            A finished ad opens with its own toolbar: Relight, Camera
            Angles, Variate, Background Changer, Upscale, Edit. The panel
            beside it lists what made it, so a good one can be repeated and
            a bad one understood.
          </P>

          <Figure
            flush
            plain
            items={[{ src: `${M}/result-laptop.jpg`, alt: "A generated ad on a laptop with its toolbar and details." }]}
            caption="Every result shows what made it."
          />

          <PillDivider>Mobile</PillDivider>

          <H3>One screen</H3>
          <P>
            The old mobile flow was a modal inside a modal. The new one is a
            single scrolling screen with Create at the bottom, where your
            thumb already is. Video adds hook, model, length and quality to
            the same screen.
          </P>

          <Figure
            flush
            plain
            columns={3}
            items={[
              { src: `${M}/mobile-1-phone.jpg`, alt: "Mobile home" },
              { src: `${M}/mobile-2-phone.jpg`, alt: "Mobile create, image" },
              { src: `${M}/mobile-3-phone.jpg`, alt: "Mobile create, video" },
            ]}
            caption="Home. Create an image. Create a video."
          />
          <Figure
            flush
            plain
            columns={3}
            items={[
              { src: `${M}/mobile-4-phone.jpg`, alt: "Mobile generating" },
              { src: `${M}/mobile-5-phone.jpg`, alt: "Mobile history with a finished video" },
              { src: `${M}/mobile-6-phone.jpg`, alt: "Mobile result" },
            ]}
            caption="Generating. Done. The result."
          />

          <H3>Straight from the failure log</H3>
          <Bullets
            items={[
              <><span className="strong">The prompt is optional.</span> 1,891 people had pressed Create with an empty box.</>,
              <><span className="strong">The model is in the form.</span> You see the plan gate before Generate, never after.</>,
              <><span className="strong">Settings travel with the result.</span> Ratio, quality and length sit on every history card.</>,
            ]}
          />
        </Chapter>

        {/* ───────── Result ───────── */}
        <Chapter id="result" label="Result" aside="What happened" title="Paid users succeed more. The rest is a month away.">
          <P>
            The redesign rolled out at the end of September, so the clean
            before and after is still a few weeks off. This is the baseline
            it was built against, and the first movement.
          </P>

          <Numbers
            items={[
              ["81%", "Paid generations that succeed, up from 69%"],
              ["8x", "Weekly users after opening to Free"],
              ["1,891", "Empty-prompt failures the new form removes"],
              ["10,211", "Plan-gate failures the model field now shows first"],
            ]}
          />

          <H3>What I took from it</H3>
          <Point title="Read the failures before you draw.">
            The biggest fix was not a layout. It was noticing that nine in
            ten failures were a plan gate and an empty box.
          </Point>
          <Point title="Volume is not health.">
            Opening to Free made every chart go up. Success rate told the
            truth.
          </Point>
          <Point title="On mobile, the screen is the funnel.">
            Anything that did not fit on one screen was something to cut.
          </Point>

          <H3>Next</H3>
          <Bullets
            items={[
              "Measure the new design from October: success rate and exports, paid and free.",
              "Hide gated models from Free users, or show the upgrade before Generate.",
              "Bring Hook and Format to image ads.",
            ]}
          />
        </Chapter>
      </Article>
    </CaseStudyShell>
  );
}
