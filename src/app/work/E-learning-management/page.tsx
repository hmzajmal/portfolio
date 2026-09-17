import { CaseStudyShell } from "@/components/case-study/shell";
import { H2, Prose, Section, Shots, Title } from "@/components/case-study/editorial";

/** Table of contents for the navbar. Ids match the section anchors below. */
const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "signup", label: "Sign-up" },
  { id: "dashboard", label: "Dashboard" },
  { id: "system", label: "System" },
  { id: "outcome", label: "Outcome" },
];

export const metadata = {
  title: "Advance Learning · Case Study · Hamza Jamal",
};

const IMG = "/work/advance-learning";

export default function ELearningCaseStudy() {
  return (
    <CaseStudyShell bg="#ffffff" currentSlug="E-learning-management" sections={NAV_SECTIONS}>
      <Title
        title="Advance Learning"
        summary="An online school for the Saudi Embassy. Students were quitting at the sign-up form, so we cut the form, redesigned the dashboard, and built the design system the platform did not have."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Client", value: "Saudi Embassy, via Arbisoft" },
          { label: "Timeline", value: "Nov 2022 to Aug 2023" },
          { label: "Status", value: "Shipped" },
        ]}
      />

      <Shots
        surface="white"
        plain
        items={[
          {
            src: `${IMG}/advance-learning-platform-overview.gif`,
            alt: "Advance Learning platform overview",
          },
        ]}
      />

      <Section number="01" id="problem" eyebrow="The problem">
        <H2>Students quit before they reached a course.</H2>
        <Prose>
          <p>
            More than half of new students gave up at the sign-up form. Of
            the ones who got through, most never opened a course. The menu
            labels were vague, the dashboard was crowded, and nothing told a
            student what to do next.
          </p>
          <p>
            We could not talk to students directly. The client was an
            embassy, the students were in another country, and the platform
            was in a language I do not speak. So the evidence came from the
            numbers, a short list of student quotes the client passed on,
            and the product itself.
          </p>
          <p>
            One quote stuck: a 13-year-old said he quit when he saw too many
            choices on the sign-up page.
          </p>
        </Prose>
      </Section>

      <Section number="02" id="signup" eyebrow="The decision">
        <H2>Ask for less, later.</H2>
        <Prose>
          <p>
            The form asked for everything up front. We cut it to what the
            school needed to create an account, and moved the rest to the
            settings page where a student can fill it in once they are
            inside. A seven-day trial replaced the wall, so a new student saw
            a course before they saw a payment screen.
          </p>
          <p>
            The order mattered. Fixing the dashboard first would have
            polished a room most students never entered.
          </p>
        </Prose>
      </Section>

      <Shots
        items={[
          {
            src: `${IMG}/signup-and-trial-flow.png`,
            alt: "Sign-up and trial flow",
            caption: "The new sign-up. Essentials only, then a seven-day trial.",
          },
        ]}
      />

      <Section number="03" id="dashboard" eyebrow="The dashboard">
        <H2>One next step per screen.</H2>
        <Prose>
          <p>
            The dashboard went through two rounds. The first round cut the
            clutter. The second gave every state one clear action: continue
            the course you were on, or start the one you have not. Themes
            for each grade level came from the client as a requirement, and
            they earned their place, because a ten-year-old and a
            seventeen-year-old should not see the same school.
          </p>
          <p>
            Wireframes were reviewed with the engineers before anything was
            drawn in high fidelity. That is where we caught what would not
            fit the build window.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/two-dashboard-iterations.jpeg`,
            alt: "Two dashboard iterations",
            caption: "Round one and round two.",
          },
          {
            src: `${IMG}/theme-variants-for-the-dashboard.png`,
            alt: "Theme variants for the dashboard",
            caption: "Themes by grade level.",
          },
        ]}
      />

      <Section number="04" id="system" eyebrow="The system">
        <H2>A design system, built with the engineers.</H2>
        <Prose>
          <p>
            The platform had no shared components. The same button looked
            different on every screen, and nobody could say how many
            versions there were. I ran a session with the engineers to list
            every element in use, sorted the list into atoms, molecules and
            organisms, then rebuilt the components from that inventory.
          </p>
          <p>
            Halfway through, a retrospective surfaced a problem I had
            caused. Engineers were guessing at edge cases because my
            hand-offs did not cover them. From then on every flow shipped
            with a hand-off document: states, interactions, and what happens
            when something goes wrong.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/components-inventory-list.png`,
            alt: "Components inventory list",
            caption: "The inventory, listed with the engineers.",
          },
          {
            src: `${IMG}/design-system-overview.png`,
            alt: "Design system overview",
            caption: "The system that came out of it.",
          },
        ]}
      />

      <Shots
        items={[
          {
            src: `${IMG}/handoff-documentation.png`,
            alt: "Hand-off documentation",
            caption: "A hand-off page. Every state, every edge case.",
          },
        ]}
      />

      <Section number="05" id="outcome" eyebrow="Outcome">
        <H2>Approved on the first review.</H2>
        <Prose>
          <p>
            The redesign launched in December 2022. The embassy approved it
            in January 2023 without a second round, which for a government
            client is the fast path.
          </p>
          <p>
            I do not have post-launch numbers for sign-up completion. The
            client owned the analytics and did not share them after
            hand-over, so this study makes no claim about them.
          </p>
        </Prose>
      </Section>

      <Shots
        items={[
          {
            src: `${IMG}/final-approved-ui.png`,
            alt: "Final approved UI",
            caption: "The approved build.",
          },
        ]}
      />
    </CaseStudyShell>
  );
}
