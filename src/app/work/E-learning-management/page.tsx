import { CaseStudyShell } from "@/components/case-study/shell";
import {
  CSHero,
  CSSection,
  CSBody,
  CSImage,
  CSQuote,
  CSNext,
  CSYellowTiles,
} from "@/components/case-study/primitives";

const ACCENT = "#e9a23b";

export const metadata = {
  title: "Advance Learning · Case Study · Hamza Jamal",
};

const painPoints = [
  { title: "Drop-off rate", body: "55% drop-off at the registration form." },
  {
    title: "Bulky UX",
    body: "Menu labels too vague. Students couldn't find My Courses.",
  },
  {
    title: "Complex dashboard",
    body: "Dashboard overload, no clear next-step button.",
  },
];

const validationTiles = [
  {
    title: "Heuristic Evaluation",
    body: "We identified additional design flows through evaluation.",
  },
  {
    title: "Stakeholders Alignment",
    body: "Multiple discussions with the PM and the client.",
  },
  {
    title: "Iterations",
    body: "Technical feasibility checks and improvements.",
  },
];

const takeaways = [
  {
    title: "Early Engineer Engagement",
    body: "Involving engineers during ideation is crucial for technical feasibility and understanding constraints upfront.",
  },
  {
    title: "Demo Videos & Prototypes",
    body: "Quick overview videos or interactive prototypes accelerate stakeholder reviews.",
  },
  {
    title: "Detailed Design Handoffs",
    body: "Clear handoffs that outline interactions and edge cases significantly reduce discrepancies.",
  },
  {
    title: "Jira Documentation",
    body: "Thoroughly documenting Jira stories with design specifications helps maintain alignment across the team.",
  },
];

export default function ELearningCaseStudy() {
  return (
    <CaseStudyShell bg="#ffffff">
      <CSHero
        eyebrow="EdTech · Online School"
        title="Advance Learning World"
        accent={ACCENT}
        description="It is a digital platform that provides students with a personalised learning experience as per the Saudi Embassy."
        meta={[
          { label: "Timeline", value: "Nov 2022 to Aug 2023" },
          { label: "Role", value: "Product Designer" },
          { label: "Industry", value: "EdTech" },
          { label: "Client", value: "Saudi Embassy" },
        ]}
      />

      <CSImage
        src="https://framerusercontent.com/images/w2gJrmcYaQyhjQT4TqiVQVD2UI.gif"
        alt="Advance Learning platform overview"
      />

      <CSSection eyebrow="Understanding the problem" heading="The Challenge" narrow>
        <CSBody>
          <p>
            Students often left the platform before finishing the sign-up
            process, and 60% of new users dropped off after signing up and
            never reached their courses.
          </p>
        </CSBody>
        <div className="mt-10">
          <CSQuote accent={ACCENT}>
            &ldquo;I quit when I saw too many choices on the signup page.&rdquo;
            <span className="mt-3 block text-[13px] text-[rgba(0,0,0,0.65)] not-italic">
              Ahmed, 13-year-old student
            </span>
          </CSQuote>
        </div>
      </CSSection>

      <CSSection>
        <CSYellowTiles items={painPoints} bg="#FFF2AF" />
      </CSSection>

      <CSSection narrow>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">My role</p>
            <p className="mt-3 text-[15px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
              As a Product designer, my responsibility was to understand the
              user pain points, research competitors, and propose solutions to
              stakeholders.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">Constraints</p>
            <ul className="mt-3 flex flex-col gap-2 text-[15px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
              <li>No direct user access</li>
              <li>Language differences</li>
              <li>Limited development time</li>
            </ul>
          </div>
        </div>
      </CSSection>

      <CSSection eyebrow="Crafting a better experience" heading="The Solutions" narrow>
        <CSBody>
          <p>
            To combat the high drop-off rate, we drastically reduced the
            number of required steps during signup. Essential information was
            prioritised, while additional details were moved to the
            user&apos;s settings page, allowing for a quicker entry into the
            platform.
          </p>
        </CSBody>
      </CSSection>

      <CSSection heading="Redesigning the Signup & Trial Experience" narrow>
        <CSBody>
          <p>
            We also introduced a 7-day free trial, providing users with
            immediate value and reducing friction.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/vcBHKOn94zYKRR1qHZwF7JCLKq0.png"
        alt="Signup and trial flow"
      />

      <CSSection heading="Dashboard Redesign (2 Iterations)" />

      <CSImage
        src="https://framerusercontent.com/images/IwL617SDpwNdRgx5y0Gw4fHQk.jpeg"
        alt="Two dashboard iterations"
      />

      <CSSection eyebrow="Design process" heading="Research & Discovery" narrow>
        <CSBody>
          <p>
            I started off by analysing top e-learning platforms (Moodle,
            Blackboard, Khan Academy, Coursera) to infer user expectations and
            best practices.
          </p>
        </CSBody>
      </CSSection>

      <CSSection heading="Competitive Audit" narrow>
        <CSBody>
          <p>
            This involved examining other successful online learning platforms
            to understand their features, usability, and overall user
            experience. For example, I studied how they visually display
            information and guide users through each step.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/suLszw4K9PF5m6nVdWXmG4NPRkA.png"
        alt="Competitive audit grid"
      />

      <CSSection eyebrow="Shaping the solution" heading="Ideation & Design" narrow>
        <CSBody>
          <p>
            I crafted user flows to map out every key step a user would take,
            and how these steps interconnected throughout the product. This
            ensured a logical and intuitive navigation experience.
          </p>
          <p>
            With a clear understanding of the problems and market, our
            ideation phase focused on defining the core user journeys.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/SIxy2g4E0TYrG3mE3XDECiVolOk.png"
        alt="User flows diagram"
      />

      <CSSection heading="Wireframing" narrow>
        <CSBody>
          <p>
            Following user flows, we moved into wireframing. This crucial step
            involved close collaboration with the Product Manager and
            Engineers. This early engagement was vital to ensure that our
            design concepts were technically feasible and could be implemented
            within the given time constraints, preventing costly reworks later
            in the development cycle.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/xgnDEp341GMeqh3FCgjR8FoNow.png"
        alt="Wireframes"
      />

      <CSSection heading="Design System" narrow>
        <CSBody>
          <p>
            Previously, the platform suffered from numerous inconsistencies,
            making it very difficult to track and manage individual components
            across different screens and features. To address this, I proposed
            and led the initiative to establish a comprehensive design system.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/JHTkMVfxkMPvWTDsRJRoyBZrBQ.png"
        alt="Design system overview"
      />

      <CSSection narrow>
        <p className="text-[16px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          Step 1, Design Components Organization
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
          I scheduled a team activity with the Engineers to list down the most
          common elements used in the platform.
        </p>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/fRgjmXV7MZ9V0UhoHt62rfSTaQ.png"
        alt="Components inventory list"
      />

      <CSSection narrow>
        <p className="text-[16px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          Step 2, Atomic Design
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
          I organised the components as per the Atomic Design Methodology by
          Brad Frost.
        </p>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/gOEgJC7N5XSD9ihhOXpDGnqqU.png"
        alt="Atomic design diagram"
      />

      <CSSection narrow>
        <p className="text-[16px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          Step 3, Creating Design System
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
          I built components from the ground up. Our inspiration was drawn
          from leading industry standards like Human Interface Guidelines,
          Atlassian Design System, and Material Design.
        </p>
      </CSSection>

      <CSSection heading="Introducing Engaging Themes" narrow>
        <CSBody>
          <p>
            As a key client requirement, we integrated various themes into the
            platform. This feature allowed the platform to be visually
            appealing and customisable for different grade levels, enhancing
            the overall engagement and personalisation for students.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/FIfl1FhTwKNSFcWXuCx7x0dQ0.png"
        alt="Theme variants for the dashboard"
      />

      <CSSection eyebrow="Redefining the experience" heading="Validation & Iteration" narrow>
        <CSBody>
          <p>
            Our designs underwent rigorous validation to ensure their
            effectiveness. We conducted heuristic evaluations to identify
            usability issues based on established principles, such as
            Nielsen&apos;s 10 Usability Heuristics.
          </p>
        </CSBody>
      </CSSection>

      <CSSection>
        <CSYellowTiles items={validationTiles} bg="#FFF2AF" />
      </CSSection>

      <CSSection heading="Collaboration with PM and Engineers" narrow>
        <CSBody>
          <p>
            In team retrospectives, developers mentioned that they were facing
            difficulty understanding edge cases of a flow and some user
            interactions, so they developed a few things as per their
            assumptions.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/xUxY49L9YalKM3oU5EZjIdPum0.png"
        alt="Handoff documentation"
      />

      <CSSection narrow>
        <CSBody>
          <p>
            I scheduled a meeting with the Engineers and Product Manager and
            addressed all the concerns, listened to their feedback, and
            improved the design process. I started creating handoffs
            afterward.
          </p>
        </CSBody>
      </CSSection>

      <CSSection eyebrow="Outcome" heading="Impact & Key Learnings" narrow>
        <CSBody>
          <p>
            The project culminated in successful updates launched in December
            2022, with the platform receiving official approval from the
            Saudi Embassy in January 2023.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/QhPohOkFOMW6gF73fRTFcalR9hk.png"
        alt="Final approved UI"
      />

      <CSSection narrow>
        <CSBody>
          <p>
            This rapid approval underscored the effectiveness and quality of
            the redesigned experience.
          </p>
        </CSBody>
      </CSSection>

      <CSSection heading="Valuable Takeaways for Future Projects">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {takeaways.map((t) => (
            <li key={t.title} className="rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
              <p className="text-[15px] text-[#171717]" style={{ fontVariationSettings: '"wght" 600' }}>
                {t.title}
              </p>
              <p className="mt-3 text-[14px] leading-[1.65] text-[rgba(0,0,0,0.65)]">{t.body}</p>
            </li>
          ))}
        </ul>
      </CSSection>

      <section className="border-t border-[rgba(0,0,0,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <p className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">
            Next Case Study
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <a
              href="/work/e-commerce-odetobeauty"
              className="flex flex-col gap-3 rounded-3xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-[rgba(0,0,0,0.12)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[rgba(0,0,0,0.6)] uppercase">
                  E-commerce
                </span>
                <span className="rounded-md border border-[rgba(0,0,0,0.12)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[rgba(0,0,0,0.6)] uppercase">
                  B2C
                </span>
              </div>
              <h3 className="text-[24px] leading-[1.15] text-[#171717] md:text-[28px]" style={{ fontVariationSettings: '"wght" 500, "opsz" 96' }}>
                Premium Skincare Store
              </h3>
              <p className="text-[14px] leading-[1.65] text-[rgba(0,0,0,0.65)]">
                A polished e-commerce platform curated for skincare lovers in
                Pakistan featuring Western brands, intelligent product
                selection by skin type and concerns.
              </p>
            </a>
            <a
              href="/work/xiangqi"
              className="flex flex-col gap-3 rounded-3xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-[rgba(0,0,0,0.12)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[rgba(0,0,0,0.6)] uppercase">
                  Entertainment
                </span>
                <span className="rounded-md border border-[rgba(0,0,0,0.12)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[rgba(0,0,0,0.6)] uppercase">
                  B2C
                </span>
              </div>
              <h3 className="text-[24px] leading-[1.15] text-[#171717] md:text-[28px]" style={{ fontVariationSettings: '"wght" 500, "opsz" 96' }}>
                Bringing an Ancient Board Game to Life
              </h3>
              <p className="text-[14px] leading-[1.65] text-[rgba(0,0,0,0.65)]">
                An ancient board game similar to Chess. Players can register
                for free, chat, and play against other players.
              </p>
            </a>
          </div>
        </div>
      </section>
    </CaseStudyShell>
  );
}
