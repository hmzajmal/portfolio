import { notFound } from "next/navigation";
import { CaseStudyShell } from "@/components/case-study/shell";
import {
  Block,
  Cards,
  CompareTable,
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
import { CSYellowTiles } from "@/components/case-study/primitives";

/** Table of contents for the navbar. Ids match the section anchors below. */
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

export default function AdStudioCaseStudy() {
  // Draft. Visible on the dev server, a 404 on every production build.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <CaseStudyShell bg="#F4F4F6" currentSlug="ad-studio" sections={NAV_SECTIONS}>
      <Title
        title="Ad Studio"
        summary="I turned ImagineArt's ad maker from a prompt bar and a stack of modals into a studio you can see."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Team", value: "PM, FE and BE engineers, growth, QA" },
          { label: "Timeline", value: "Jul to Sep 2026" },
          { label: "Platforms", value: "Web and mobile" },
        ]}
      />

      <Shots
        items={[
          {
            src: `${IMG}/desktop-1.png`,
            alt: "The new Ad Studio home: Image Ads and Video Ads entry points, tools, and presets",
          },
        ]}
      />

      <Wide>
        <p className="h3 max-w-[820px] text-ink wt-regular">
          People could not see what Ad Studio could do.{" "}
          <span className="text-ink-quiet">So they typed a line, hit Create, and left.</span>
        </p>
      </Wide>

      {/* ───────────── 01 Situation ───────────── */}
      <Section number="01" id="situation" eyebrow="Situation" wide>
        <H2>A prompt bar, three plus buttons, and a lot of guessing.</H2>

        <Prose>
          <p>
            Ad Studio launched in June as a prompt bar at the bottom of the
            screen. Product and Avatar were plus buttons that opened modals
            over the home. Everything else was behind the prompt. If you did
            not know to type it, it did not exist.
          </p>
        </Prose>

        <Block label="Who uses it">
          <Cards
            items={[
              ["Solo creators", "Need ads today"],
              ["Agencies", "Many brands, one tool"],
              ["Founders", "First ad, no designer"],
              ["Shop owners", "One product, many angles"],
            ]}
          />
        </Block>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/old-1-home.png`,
            alt: "Old Ad Studio home with a prompt bar at the bottom",
            caption: "Before. A prompt bar and two plus buttons.",
          },
          {
            src: `${IMG}/old-2-product-modal.png`,
            alt: "Old Ad Studio product modal stacked over the home",
            caption: "Before. Every choice was a modal over the page.",
          },
        ]}
      />

      <Section eyebrow="What the data said" wide bare>
        <Prose>
          <p>
            In mid July Ad Studio opened to Free users. Weekly users went
            from about 120 to over 900. Failed generations went up faster.
            Our growth specialist pulled the numbers and I went through every
            failure reason.
          </p>
        </Prose>

        <div className="mt-8">
          <CompareTable
            columns={["Count", "What it means"]}
            rows={[
              ["Model not allowed on this plan", "10,211", "Free users were offered models they could not use"],
              ["Prompt is required", "1,891", "People hit Create with nothing typed"],
              ["Insufficient credits", "804", "Expected"],
              ["Concurrency limit", "74", "Expected"],
              ["Real generation errors", "under 60", "The model was not the problem"],
            ]}
          />
        </div>
        <Note>Jun to Sep 2026, Mixpanel. Test and staff accounts excluded.</Note>

        <div className="mt-10">
          <CSYellowTiles
            items={[
              {
                title: "The tool was hiding its own features",
                body: "Scene, style, hook, format, model. All of it existed. None of it was visible until you knew the words.",
              },
              {
                title: "Most failures were not failures",
                body: "Nine in ten were a plan gate or an empty prompt. The interface let people walk into both.",
              },
              {
                title: "People tried twice and left",
                body: "Median two generations per user. A wrong result with no way to see why is a reason to go.",
              },
            ]}
          />
        </div>
      </Section>

      {/* ───────────── 02 Task ───────────── */}
      <Section number="02" id="task" eyebrow="Task" wide>
        <H2>Make the studio visible, and make it work on a phone.</H2>
        <Prose>
          <p>
            The brief from the PM and the CEO was broad: make it intuitive,
            add the tools people were asking for, and fix mobile. I narrowed
            it to four things I could measure.
          </p>
        </Prose>
        <div className="mt-8">
          <Cards
            cols={4}
            items={[
              ["Show, do not type", "Every option on screen before you generate"],
              ["No dead ends", "Nothing you can click that will fail for your plan"],
              ["One screen to create", "On mobile, from open to Create without a modal"],
              ["Results that lead somewhere", "Every output carries its next action"],
            ]}
          />
        </div>
      </Section>

      {/* ───────────── 03 Action ───────────── */}
      <Section number="03" id="action" eyebrow="Action" wide>
        <H2>From a prompt bar to a studio.</H2>

        <Block label="What the competition does">
          <CompareTable
            columns={["OpenArt", "Higgsfield", "Ad Studio, after"]}
            rows={[
              ["Entry point", "Model picker and prompt", "Preset gallery and prompt", "Image Ads or Video Ads, then a form"],
              ["Product and avatar", "Upload per generation", "Upload per generation", "Saved library, pick once"],
              ["Scene and style", "In the prompt", "Presets", "Visible cards with examples"],
              ["Mobile", "Desktop first", "Desktop first", "One screen, Create at the thumb"],
            ]}
          />
          <Note>
            Both competitors put the model first. We put the ad first, and
            moved the model to a field you only see when it matters.
          </Note>
        </Block>

        <Block label="The main decision">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <Tile eyebrow="Before">
              A prompt bar. Product and Avatar as plus buttons. Each one a
              modal over the page, each one hiding the others.
            </Tile>
            <Tile eyebrow="After">
              A left rail with five cards: Scene, Product, Avatar, Visual
              Reference, Style. The prompt is optional. Generate is one
              button at the bottom.
            </Tile>
          </div>
        </Block>
      </Section>

      <Shots
        items={[
          {
            src: `${IMG}/desktop-2.png`,
            alt: "New Ad Studio create screen with the left rail of Scene, Product, Avatar, Visual Reference and Style",
            caption: "After. Every choice is a card. The prompt is optional.",
          },
        ]}
      />

      <Section eyebrow="Pick, do not describe" wide bare>
        <Prose>
          <p>
            Scenes, products and avatars each got a full panel with real
            examples, search, saved items and upload in one place. You pick
            with your eyes. The prompt is there if you want it, and the
            placeholder tells you about the @ shortcut for products and
            characters.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={3}
        items={[
          {
            src: `${IMG}/desktop-3.png`,
            alt: "Scene picker panel",
            caption: "Scene. Composition and layout, as pictures.",
          },
          {
            src: `${IMG}/desktop-4.png`,
            alt: "Product picker panel",
            caption: "Product. Saved library, categories, upload.",
          },
          {
            src: `${IMG}/desktop-6.png`,
            alt: "Avatar picker panel",
            caption: "Avatar. The same panel, same rules.",
          },
        ]}
      />

      <Section eyebrow="The result is a starting point" wide bare>
        <Prose>
          <p>
            Every generation opens with its own toolbar: Relight, Camera
            Angles, Variate, Background Changer, Upscale, Edit. The panel on
            the right shows exactly what made it, so a good result can be
            repeated and a bad one can be understood.
          </p>
        </Prose>
      </Section>

      <Shots
        items={[
          {
            src: `${IMG}/desktop-7.png`,
            alt: "A generated ad opened with its toolbar and details panel",
            caption: "After. Scene, product, avatar and style listed beside the result.",
          },
        ]}
      />

      <Section eyebrow="Mobile, one screen" wide bare>
        <Prose>
          <p>
            On a phone the old flow was a modal inside a modal. The new one
            is a single screen: medium, scene, the five cards, prompt, and
            Create at the bottom where a thumb lands. Video adds Hook,
            Background, model, length and quality on the same screen.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={3}
        surface="white"
        plain
        items={[
          {
            src: `${IMG}/mobile-1.png`,
            alt: "Mobile home with Create Ads and presets",
            caption: "Home. One button.",
          },
          {
            src: `${IMG}/mobile-2.png`,
            alt: "Mobile create screen for an image ad",
            caption: "Create, image.",
          },
          {
            src: `${IMG}/mobile-3.png`,
            alt: "Mobile create screen for a video ad with model, length and quality",
            caption: "Create, video. Model in the form.",
          },
        ]}
      />

      <Shots
        columns={3}
        surface="white"
        plain
        items={[
          {
            src: `${IMG}/mobile-4.png`,
            alt: "Mobile generating state with estimated time",
            caption: "Generating. Time estimate, cancel.",
          },
          {
            src: `${IMG}/mobile-5.png`,
            alt: "Mobile history with a finished video",
            caption: "Done. History keeps the settings.",
          },
          {
            src: `${IMG}/mobile-6.png`,
            alt: "Mobile result view with download and details",
            caption: "Result. Download first.",
          },
        ]}
      />

      <Section eyebrow="Details I would not let go" wide bare>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {[
            ["Prompt optional", "1,891 people had hit Create with nothing typed. Now the cards carry the intent and the prompt is extra."],
            ["Model in the form, not the fine print", "You see which model will run before you pay for it. The plan gate shows up before Generate, not after."],
            ["Real examples everywhere", "Scenes, products, avatars and presets are pictures. Nobody picks a composition from a word."],
            ["Settings travel with the result", "History shows ratio, quality and length on every card, so a good ad can be made again."],
          ].map(([t, d]) => (
            <li key={t} className="liquid rounded-2xl p-6">
              <p className="label text-ink">{t}</p>
              <p className="body-sm mt-2 text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="How we worked" wide bare>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <Tile eyebrow="Growth">
            Pulled the failure reasons weekly. The plan gate finding came
            from that table, not from a hunch.
          </Tile>
          <Tile eyebrow="Engineers">
            Front end and back end reviewed the rail before high fidelity.
            The model field moved into the form because the back end could
            tell us the gate early.
          </Tile>
          <Tile eyebrow="PM and CEO">
            Wanted everything visible. I pushed for five cards and a
            Learn tab, not twelve cards. We shipped five.
          </Tile>
        </div>
      </Section>

      {/* ───────────── 04 Result ───────────── */}
      <Section number="04" id="result" eyebrow="Result" wide>
        <H2>Paid users succeed more. The rest is early.</H2>
        <p className="eyebrow mt-2">Mixpanel · Ad Generation · Jun vs Sep 2026 · paid users</p>

        <div className="mt-8">
          <StatStrip
            items={[
              ["81%", "paid generations that succeed, up from 69%"],
              ["8x", "weekly users after opening to Free"],
              ["1,891", "empty-prompt failures the new form removes"],
              ["10,211", "plan-gate failures the model field now surfaces first"],
            ]}
          />
        </div>

        <Note>
          The redesign rolled out at the end of September. The numbers above
          are the baseline it was built against and the first paid-user
          lift. A clean before and after needs a full month of the new
          design, so this section will be updated.
        </Note>

        <Block label="What I learned">
          <CSYellowTiles
            items={[
              {
                title: "Read the failures before the designs",
                body: "The biggest fix in this project was not a screen. It was noticing that nine in ten failures were a plan gate and an empty box.",
              },
              {
                title: "Volume is not health",
                body: "Opening to Free made the chart go up and the product feel worse. Success rate is the number that mattered.",
              },
              {
                title: "Mobile is the funnel",
                body: "One screen, Create at the thumb. Everything that did not fit on that screen was a thing to cut, not to collapse.",
              },
            ]}
          />
        </Block>

        <Block label="Next">
          <Cards
            cols={3}
            items={[
              ["Measure the new design", "Success rate and exports, paid and free, Oct onward"],
              ["Hide gated models for Free", "Or show the upgrade before Generate, never after"],
              ["Bring Hook and Format to image ads", "Video has them. Image should too"],
            ]}
          />
        </Block>
      </Section>
    </CaseStudyShell>
  );
}
