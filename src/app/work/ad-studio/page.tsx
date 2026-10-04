import { notFound } from "next/navigation";
import { CaseStudyShell } from "@/components/case-study/shell";
import {
  Article,
  ArticleHead,
  Bullets,
  Chapter,
  Figure,
  H3,
  Mockups,
  Numbers,
  P,
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

export default function AdStudioCaseStudy() {
  // Draft. Visible on the dev server, a 404 on every production build.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <CaseStudyShell bg="#F6F6F7" currentSlug="ad-studio" sections={NAV_SECTIONS}>
      <Article>
        <ArticleHead
          label="Ad Studio"
          aside="ImagineArt"
          title="Turning a prompt bar into a studio where every choice is on the screen."
          summary="ImagineArt's ad maker started as a prompt bar with a few hidden buttons. Over one summer I rebuilt it for web and mobile. This is how the data pointed the way, what I changed, and what happened."
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
          items={[
            {
              src: `${IMG}/mockups/home-laptop.jpg`,
              alt: "The new Ad Studio home on a laptop. Image Ads and Video Ads up top, tools below, presets at the bottom.",
            },
          ]}
          caption="The new Ad Studio home."
        />

        {/* ───────── Situation ───────── */}
        <Chapter id="situation" label="Situation" aside="Where it started" title="People could not see what Ad Studio could do, so they typed a line, hit Create, and left.">
          <H3>What Ad Studio was</H3>
          <P>
            Ad Studio launched in June 2026 as a prompt bar sitting at the
            bottom of the screen. You typed what you wanted, picked UGC or a
            hook from a couple of chips, and hit Create. Product and Avatar
            were small plus buttons on the bar, and each one opened a modal
            on top of the page. Scenes, styles, formats and models all
            existed in the product, but you could only reach them if you
            already knew to ask for them in the prompt.
          </P>
          <P>
            The people using it were solo creators, small agencies, founders
            and shop owners. People who need an ad this afternoon, not
            people who want to learn a tool. Most of them typed one line,
            got something they did not expect, tried once more, and left.
          </P>

          <Figure
            flush
            plain
            items={[{ src: `${IMG}/mockups/old-home-laptop.jpg`, alt: "The old Ad Studio home on a laptop, with the prompt bar at the bottom." }]}
            caption="Before. A prompt bar and two plus buttons."
          />
          <Figure
            columns={2}
            items={[
              { src: `${IMG}/old-2-product-modal.png`, alt: "The old product modal stacked over the home." },
              { src: `${IMG}/old-3-avatar-modal.png`, alt: "The old avatar sheet stacked over the home." },
            ]}
            caption="Before. Every choice was a modal over the page."
          />

          <H3>What the numbers said</H3>
          <P>
            In the middle of July the studio opened to Free users. Weekly
            users went from about 120 to over 900 in a week. So did the
            failed generations. Our growth specialist pulled the failure
            log out of Mixpanel and I went through every reason. It was not
            what the team expected.
          </P>

          <div className="mt-8">
            <Table
              columns={["Count", "What it means"]}
              rows={[
                ["Model not allowed on this plan", "10,211", "Free users were offered models their plan could not run"],
                ["Prompt is required", "1,891", "People pressed Create with nothing typed"],
                ["Insufficient credits", "804", "Expected"],
                ["Concurrency limit", "74", "Expected"],
                ["Real generation errors", "under 60", "The model was not the problem"],
              ]}
            />
          </div>
          <p className="body-sm mt-3 text-ink-quiet">
            Failed generations, June to September 2026. Staff and test accounts excluded.
          </p>

          <P>
            Nine in ten failures were a plan gate or an empty prompt. The AI
            was fine. The interface was letting people walk into walls it
            could have shown them. And once someone hit a wall with no
            explanation, they did not come back for a third try. The median
            user made two generations.
          </P>
        </Chapter>

        {/* ───────── Task ───────── */}
        <Chapter id="task" label="Task" aside="The brief" title="Make the studio visible, make it safe to click, and make it work on a phone.">
          <P>
            The brief from the PM and the CEO was broad. Make it intuitive,
            add the tools people were asking for, make it work on mobile. I
            turned that into four things I could check against the data.
          </P>
          <Point n="1" title="Show everything before you generate.">
            Scene, product, avatar, style, format, model. If it changes the
            result, it is on the screen, not in the prompt.
          </Point>
          <Point n="2" title="No dead ends.">
            Nothing you can click should fail because of your plan. If a
            model is gated, you learn that before Generate, not after.
          </Point>
          <Point n="3" title="One screen on a phone.">
            From opening the studio to pressing Create without a single
            modal.
          </Point>
          <Point n="4" title="Every result leads somewhere.">
            A finished ad should carry its own next step, so a good one can
            be repeated and a bad one can be understood.
          </Point>
          <P>
            The team was a product manager, a front end and a back end
            engineer, a growth specialist who owned the Mixpanel board, QA,
            and me. We had July to September.
          </P>
        </Chapter>

        {/* ───────── Action ───────── */}
        <Chapter id="action" label="Action" aside="What I did" title="From a prompt bar to a rail of five cards, and from a modal inside a modal to one screen.">
          <H3>Looking at the competition</H3>
          <P>
            I spent the first week in OpenArt and Higgsfield, making the same
            ad in each. Both lead with the model. You pick a model, you
            write a prompt, you upload your product every time. They are
            built for people who already know what Seedance and Veo are. Our
            users do not, and should not have to. So we flipped it: lead
            with the ad you want, keep the model as a field you only look at
            when it matters.
          </P>

          <H3>From a prompt bar to a rail</H3>
          <P>
            The main decision was to stop treating the prompt as the
            product. The new create screen has a left rail with five cards:
            Scene, Product, Avatar, Visual Reference and Style. Each one
            shows what it does in a sentence. The prompt sits below them
            and is optional. Generate is one button at the bottom. The right
            side of the screen is for the result.
          </P>
          <P>
            The PM and the CEO wanted everything from the old product
            visible at once, a dozen controls on the rail. I argued for five
            cards and a Learn tab, because five is the number of decisions
            that actually change an ad. We shipped five.
          </P>

          <Figure
            flush
            plain
            items={[{ src: `${IMG}/mockups/create-laptop.jpg`, alt: "The new create screen on a laptop, with the rail on the left and the result area on the right." }]}
            caption="After. Five cards, an optional prompt, one button."
          />

          <H3>Pick with your eyes, not with words</H3>
          <P>
            Each card opens a full panel. Scenes are photographs of
            compositions. Products and avatars come from a saved library
            with categories, search and upload in the same place, so you
            pick your product once and it follows you across generations.
            Nobody has to describe a composition in a sentence when they can
            point at one.
          </P>

          <Mockups
            kind="browser"
            url="imagine.art/ad-studio"
            items={[
              { src: `${IMG}/desktop-3.png`, alt: "Scene picker" },
              { src: `${IMG}/desktop-4.png`, alt: "Product picker" },
            ]}
            caption="Scene and product. The same panel, the same rules, and avatar follows suit."
          />

          <H3>The result is a starting point</H3>
          <P>
            A finished ad opens with its own toolbar: Relight, Camera
            Angles, Variate, Background Changer, Upscale, Edit. On the right
            the panel lists exactly what made it, the scene, the product,
            the avatar, the style and the model. If it is good you can make
            it again. If it is wrong you can see why.
          </P>

          <Figure
            flush
            plain
            items={[{ src: `${IMG}/mockups/result-laptop.jpg`, alt: "A generated ad on a laptop, with its toolbar and the details panel." }]}
            caption="Every result shows what made it."
          />

          <H3>Mobile in one screen</H3>
          <P>
            On a phone the old flow was a modal inside a modal. The new one
            is a single scrolling screen: image or video, scene, the five
            cards, the prompt, and Create at the bottom where your thumb
            already is. Video adds Hook, Background, the model, length and
            quality to the same screen. While it generates you see a time
            estimate and a cancel button. When it is done, the history keeps
            the settings on every card.
          </P>

          <Figure
            flush
            plain
            columns={3}
            items={[
              { src: `${IMG}/mockups/mobile-1-phone.jpg`, alt: "Mobile home" },
              { src: `${IMG}/mockups/mobile-2-phone.jpg`, alt: "Mobile create screen, image" },
              { src: `${IMG}/mockups/mobile-3-phone.jpg`, alt: "Mobile create screen, video" },
            ]}
            caption="Home, create an image, create a video."
          />
          <Figure
            flush
            plain
            columns={3}
            items={[
              { src: `${IMG}/mockups/mobile-4-phone.jpg`, alt: "Mobile generating state" },
              { src: `${IMG}/mockups/mobile-5-phone.jpg`, alt: "Mobile history with a finished video" },
              { src: `${IMG}/mockups/mobile-6-phone.jpg`, alt: "Mobile result view" },
            ]}
            caption="Generating, done, and the result."
          />

          <H3>Small things that came straight from the failure log</H3>
          <Bullets
            items={[
              <>
                <span className="strong">The prompt is optional.</span> 1,891
                people had pressed Create with an empty box. Now the cards
                carry the intent and the prompt is extra.
              </>,
              <>
                <span className="strong">The model is in the form.</span> You
                see which model will run before you pay. The plan gate shows
                up before Generate, never after.
              </>,
              <>
                <span className="strong">Settings travel with the result.</span>{" "}
                Ratio, quality and length sit on every history card, so a
                good ad can be made again without guessing.
              </>,
              <>
                <span className="strong">Real examples everywhere.</span>{" "}
                Scenes, products, avatars and presets are pictures. Nobody
                picks a composition from a word.
              </>,
            ]}
          />
        </Chapter>

        {/* ───────── Result ───────── */}
        <Chapter id="result" label="Result" aside="What happened" title="Paid users succeed more. The rest is a month away.">
          <P>
            The redesign rolled out at the end of September, so the clean
            before and after is still a few weeks away. What I can show is
            the baseline it was built against and the first movement in the
            numbers that mattered.
          </P>

          <Numbers
            items={[
              ["81%", "Paid generations that succeed, up from 69% in June"],
              ["8x", "Weekly users after the studio opened to Free"],
              ["1,891", "Empty-prompt failures the new form removes"],
              ["10,211", "Plan-gate failures the model field now shows first"],
            ]}
          />

          <P>
            Paid users were already succeeding more often by September.
            Overall volume went up eight times when Free users came in, and
            that made the chart look great and the product feel worse,
            because most of them hit a gate. The redesign is aimed squarely
            at those two failure types. I will put the October numbers here
            when there is a full month of them.
          </P>

          <H3>What I took from it</H3>
          <Point title="Read the failures before you draw the screens.">
            The biggest fix in this project was not a layout. It was noticing
            that nine in ten failures were a plan gate and an empty box, and
            designing for those two cases first.
          </Point>
          <Point title="Volume is not health.">
            Opening to Free made every chart go up. Success rate was the one
            that told the truth.
          </Point>
          <Point title="On mobile, the screen is the funnel.">
            Anything that did not fit on one screen was something to cut,
            not something to tuck into a modal.
          </Point>

          <H3>What comes next</H3>
          <Bullets
            items={[
              "Measure the new design. Success rate and exports, paid and free, from October on.",
              "Hide gated models from Free users, or show the upgrade before Generate. Never after.",
              "Bring Hook and Format to image ads. Video has them and image should too.",
            ]}
          />
        </Chapter>
      </Article>
    </CaseStudyShell>
  );
}
