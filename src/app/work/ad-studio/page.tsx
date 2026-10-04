import { CaseStudyShell } from "@/components/case-study/shell";
import {
  Bars,
  Dashes,
  Facts,
  Img,
  Mockups,
  Outcomes,
  P,
  Sec,
  Step,
  Study,
  StudyHead,
} from "@/components/case-study/editorial";

/** Table of contents for the navbar. Ids match the section anchors below. */
const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "process", label: "Process" },
  { id: "outcomes", label: "Outcomes" },
];

export const metadata = {
  title: "Ad Studio · ImagineArt · Case Study · Hamza Jamal",
};

const IMG = "/work/ad-studio";
const M = `${IMG}/mockups`;

const OUTCOMES: [string, string][] = [
  ["81%", "Paid generations that succeed, up from 69% in June"],
  ["8x", "Weekly users after the studio opened to Free"],
  ["9 in 10", "Failures traced to two causes the redesign removes"],
];

export default function AdStudioCaseStudy() {
  return (
    <CaseStudyShell bg="#F7F6F3" currentSlug="ad-studio" sections={NAV_SECTIONS}>
      <Study>
        <StudyHead title="Rebuilding Ad Studio around what people could see" client="ImagineArt" kind="Web and mobile app" />

        <Img src={`${M}/home-laptop.jpg`} alt="The new Ad Studio home on a laptop." />

        <Sec title="Outcomes">
          <Outcomes items={OUTCOMES} />
        </Sec>

        <Sec id="overview" title="Overview">
          <P>
            This is the project where I stopped trusting the brief and started
            trusting the failure log. The brief said the AI was letting people
            down. The log said the interface was.
          </P>
          <P>
            ImagineArt is an AI creative suite with over a million users. Ad
            Studio is the part that makes image and video ads. It launched in
            June 2026 as a prompt bar with a few hidden buttons, and in July
            it opened to Free users. The team wanted it redesigned for web and
            mobile before the end of the quarter.
          </P>

          <Facts
            groups={[
              { title: "My role", items: ["Product design", "Analytics review", "UI and interaction design", "Mobile design", "Hand-off"] },
              { title: "Team", items: ["Product manager", "Front end engineer", "Back end engineer", "Growth specialist", "QA"] },
              { title: "Scope", items: ["July to September 2026", "Web and mobile", "Live product with paying users", "Free tier opened mid project"] },
            ]}
          />
        </Sec>

        <Sec title="Users and audience">
          <Dashes
            items={[
              "Solo creators making ads for their own channels",
              "Small agencies running several brands at once",
              "Founders and shop owners with one product and no designer",
              "From July, a large Free tier trying the tool for the first time",
            ]}
          />
        </Sec>

        <Sec id="problem" title="Problem statement">
          <P>
            How might we make an ad maker where every choice is visible before
            you spend a credit, nothing you can click fails because of your
            plan, and the whole thing fits on a phone screen.
          </P>
          <Img src={`${M}/old-home-laptop.jpg`} alt="The old Ad Studio home on a laptop." caption="Where we started. A prompt bar and two plus buttons." />
        </Sec>

        <Sec id="process" title="Process">
          <Step title="Started by reading every failed generation in Mixpanel before opening Figma">
            <P>
              Our growth specialist pulled the failure log and I went through
              each reason. Nine in ten failures were a plan gate or an empty
              prompt. Real model errors were under sixty across four months.
              That one table replaced the brief.
            </P>
            <Bars
              items={[
                { label: "Model not allowed on this plan", value: 10211, meaning: "Free users were offered models their plan could not run." },
                { label: "Prompt is required", value: 1891, meaning: "People pressed Create with nothing typed." },
                { label: "Insufficient credits", value: 804, meaning: "Expected." },
                { label: "Real generation errors", value: 58, display: "under 60", meaning: "The model was fine." },
              ]}
              note="Failed generations, June to September 2026. Staff and test accounts excluded."
            />
          </Step>

          <Step title="Looked hard at the version we already had">
            <P>
              The old studio was a prompt bar at the bottom of the screen.
              Product and Avatar were plus buttons that opened modals over the
              page. Scenes, styles, formats and models existed, but only if
              you knew to type them. People typed once, tried again, and left.
            </P>
            <Img
              frame
              items={[
                { src: `${IMG}/old-2-product-modal.png`, alt: "The old product modal over the home." },
                { src: `${IMG}/old-3-avatar-modal.png`, alt: "The old avatar sheet over the home." },
              ]}
              caption="Every choice was a modal."
            />
          </Step>

          <Step title="Spent a week making the same ad in OpenArt and Higgsfield">
            <P>
              Both lead with the model and make you upload your product every
              time. That works for people who know what Seedance and Veo are.
              Ours do not and should not have to. So we led with the ad and
              moved the model to a field you only see when it matters.
            </P>
          </Step>

          <Step title="Replaced the prompt bar with a rail of five cards">
            <P>
              Scene, Product, Avatar, Visual Reference, Style. Each card says
              what it does in a sentence. The prompt sits below them and is
              optional, because 1,891 people had pressed Create on an empty
              box. Generate is one button.
            </P>
            <P>
              The PM and the CEO wanted a dozen controls so nothing from the old
              product was missing. I argued for five, because five is the
              number of decisions that change an ad. We shipped five.
            </P>
            <Img src={`${M}/create-pair.jpg`} alt="The new create screen on a laptop and on a phone." caption="The same five cards on web and mobile." />
          </Step>

          <Step title="Turned every choice into something you can point at">
            <P>
              Each card opens a panel of real examples. Scenes are
              photographs. Products and avatars live in a saved library with
              search and upload in one place, so you pick your product once
              and it follows you.
            </P>
            <Mockups kind="browser" url="imagine.art/ad-studio" tint="#EDEBE6" items={[{ src: `${IMG}/desktop-3.png`, alt: "Scene picker" }]} caption="Scenes are photographs of compositions." />
            <Mockups kind="browser" url="imagine.art/ad-studio" tint="#EDEBE6" items={[{ src: `${IMG}/desktop-4.png`, alt: "Product picker" }]} caption="Products come from a saved library." />
          </Step>

          <Step title="Made every result a starting point, not an ending">
            <P>
              A finished ad opens with Relight, Camera Angles, Variate,
              Background Changer, Upscale and Edit. Beside it a panel lists
              what made it. A result you can read is a result you can fix,
              which is the answer to failures nobody could explain.
            </P>
            <Img src={`${M}/result-pair.jpg`} alt="A generated ad on a laptop, and the same project in mobile history." caption="What made it, on both screens." />
          </Step>

          <Step title="Rebuilt mobile as one screen">
            <P>
              The old flow was a modal inside a modal. The new one is a single
              scrolling screen with Create under your thumb. Video adds hook,
              model, length and quality on the same screen. The model field is
              there so the plan gate shows before Generate, never after.
            </P>
            <Img narrow src={`${M}/mobile-1-phone.jpg`} alt="Mobile home" caption="Home. One button." />
            <Img narrow src={`${M}/mobile-3-phone.jpg`} alt="Mobile create, video" caption="Create a video. The model is in the form." />
            <Img narrow src={`${M}/mobile-4-phone.jpg`} alt="Mobile generating" caption="Generating, with a time estimate." />
          </Step>

          <Step title="Rolled out at the end of September">
            <P>
              The new studio went live on web and mobile in the last week of
              September. Paid users were already succeeding more often than in
              June, and the two failure types that made up nine in ten
              failures now have a design answer. I will add the October
              numbers when there is a full month of them.
            </P>
          </Step>
        </Sec>

        <Sec id="outcomes" title="Outcomes">
          <Outcomes items={OUTCOMES} />
        </Sec>

        <Sec title="Lessons">
          <P>
            Read the failures before you draw. The biggest fix in this project
            was not a layout, it was a table, and I nearly skipped it.
          </P>
          <P>
            Volume is not health. When Free users came in every chart went up
            and the product felt worse. Success rate was the only number
            telling the truth.
          </P>
          <P>
            On a phone, the screen is the funnel. Anything that did not fit on
            one screen was something to cut, not something to hide in a modal.
          </P>
        </Sec>
      </Study>
    </CaseStudyShell>
  );
}
