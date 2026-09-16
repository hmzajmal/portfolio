import { CaseStudyShell } from "@/components/case-study/shell";
import { H2, Prose, Section, Shots, Title } from "@/components/case-study/editorial";
import { CSComponentShot, CSFrame } from "@/components/case-study/primitives";

/** Table of contents for the navbar. Ids match the section anchors below. */
const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "approach", label: "Approach" },
  { id: "fixes", label: "Fixes" },
  { id: "system", label: "System" },
  { id: "outcome", label: "Outcome" },
];

export const metadata = {
  title: "Ode to Beauty · Case Study · Hamza Jamal",
};

const IMG = "/work/ode-to-beauty";

export default function OdeToBeautyCaseStudy() {
  return (
    <CaseStudyShell bg="#f5f0f5" currentSlug="e-commerce-odetobeauty" sections={NAV_SECTIONS}>
      <Title
        title="Ode to Beauty"
        summary="A skincare store in Pakistan that sells Western brands. Paid social sent people to a site that looked like a marketplace and did not convert. Six weeks to make it look and work like a brand."
        meta={[
          { label: "Role", value: "Lead Designer" },
          { label: "Team", value: "3 designers, 1 PM" },
          { label: "Duration", value: "6 weeks, 2024" },
          { label: "Status", value: "Shipped" },
        ]}
      />

      <Shots
        items={[
          {
            src: `${IMG}/ode-to-beauty-cover.png`,
            alt: "Ode to Beauty homepage after the redesign",
          },
        ]}
      />

      <Section number="01" id="problem" eyebrow="The problem">
        <H2>Ads worked. The site did not.</H2>
        <Prose>
          <p>
            Ode to Beauty spent on Instagram ads, and the ads sent people to
            the site. Then the people left. The homepage looked like any
            marketplace: a grid of products, weak hierarchy, no sense of who
            the store was for. Someone arriving from a polished ad landed
            somewhere that felt cheaper than the ad.
          </p>
          <p>
            The store's real strength was buried. It sorts products by skin
            type and concern, which is how skincare shoppers actually think.
            You could not find that from the homepage.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/old-homepage-screenshot-1.jpg`,
            alt: "Old homepage, top",
            caption: "Before. The old homepage.",
          },
          {
            src: `${IMG}/old-homepage-screenshot-2.jpeg`,
            alt: "Old homepage, further down",
            caption: "Before. Further down the same page.",
          },
        ]}
      />

      <Section number="02" id="approach" eyebrow="The approach">
        <H2>Six weeks means no long discovery.</H2>
        <Prose>
          <p>
            We had heatmaps and drop-off data from Hotjar and Google
            Analytics, so we started there. Where people clicked, where they
            stopped, how long they stayed. I ran a heuristic pass on the
            existing site and compared it against four stores people in this
            market already trusted: Soko Glam, Highfy, Vegas.pk and Blume.
          </p>
          <p>
            Then we tested. Five moderated sessions on the old site, with two
            tasks: find a product for your skin type, and buy it. That gave
            us a baseline to test the redesign against, and it surfaced four
            problems the analytics alone could not explain.
          </p>
          <p>
            I led the team of three. I owned the research and the business
            alignment. One designer ran the campaign pages and testing, the
            other the visual system and components.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/heuristic-audit-board.jpg`,
            alt: "Heuristic audit board",
            caption: "The heuristic pass on the old site.",
          },
          {
            src: `${IMG}/competitor-comparison-board.jpg`,
            alt: "Competitor comparison board",
            caption: "Four stores this market already trusts.",
          },
        ]}
      />

      <Section number="03" id="fixes" eyebrow="The fixes">
        <H2>Four things people got wrong, and what we did.</H2>
        <Prose>
          <p>
            <span className="strong">Nobody found the skin-type filters.</span>{" "}
            They lived inside a menu. We gave them a section on the homepage,
            so shopping by concern is the first thing you see.
          </p>
          <p>
            <span className="strong">Out-of-stock items looked in stock.</span>{" "}
            You learned the truth when you pressed Add to Cart. They now sit
            at the bottom of the list with a clear label.
          </p>
          <p>
            <span className="strong">Icons meant the wrong thing.</span>{" "}
            The AM and PM routine icons read as a dark mode toggle. Every
            icon got a text label.
          </p>
          <p>
            <span className="strong">Ingredient lists scared people off.</span>{" "}
            Dense paragraphs became tags and short groups, so the detail is
            there for the people who want it and out of the way for the
            people who do not.
          </p>
        </Prose>
      </Section>

      <Shots
        items={[
          {
            src: `${IMG}/homepage-after.jpg`,
            alt: "Homepage after the redesign",
            caption: "After. Skin type on the homepage, one clear action per block.",
          },
        ]}
      />

      <Section number="04" id="system" eyebrow="The system">
        <H2>Bold brand, familiar patterns.</H2>
        <Prose>
          <p>
            The one rule for the visual work: keep the brand's boldness, but
            put every interaction where a shopper expects it. Type,
            colour tokens and components went into a small design system so
            the three of us shipped one site, not three.
          </p>
          <p>
            The product card shows the whole approach in one place. Image,
            one line on what it does for you, price, one button. Smaller
            changes carried weight too. "Add to bag" became "Add to cart",
            and free shipping moved next to the price.
          </p>
        </Prose>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <CSFrame columns={2} surface="white">
            <CSComponentShot
              src={`${IMG}/product-card-before.png`}
              alt="Product card before"
              label="Before"
              maxWidth={280}
            />
            <CSComponentShot
              src={`${IMG}/product-card-after.png`}
              alt="Product card after"
              label="After"
              maxWidth={280}
            />
          </CSFrame>
        </div>
      </section>

      <Shots
        items={[
          {
            src: `${IMG}/design-system-overview.png`,
            alt: "Design system overview",
            caption: "Type, tokens and components.",
          },
        ]}
      />

      <Section number="05" id="outcome" eyebrow="Outcome">
        <H2>Everyone finished the task. Live numbers are still owed.</H2>
        <Prose>
          <p>
            We ran the same two tasks with five new participants on the
            redesigned prototype. On the old site, 27% completed the task.
            On the new one, all five did, in about two minutes instead of
            four. The usability score came back in the high 80s. One
            participant said the site now felt like a real brand.
          </p>
          <p>
            Those are prototype numbers from five people. They say the
            design removed the things that stopped shoppers. They do not say
            what it did to revenue. The live A/B test against the old site
            was planned for the next phase, and I do not have its result, so
            I will not claim one.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/homepage-before.jpg`,
            alt: "Homepage before",
            caption: "Before.",
          },
          {
            src: `${IMG}/homepage-after.jpg`,
            alt: "Homepage after",
            caption: "After.",
          },
        ]}
      />
    </CaseStudyShell>
  );
}
