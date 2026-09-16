import { CaseStudyShell } from "@/components/case-study/shell";
import { H2, Prose, Section, Shots, Title } from "@/components/case-study/editorial";

/** Table of contents for the navbar. Ids match the section anchors below. */
const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "finding", label: "Finding" },
  { id: "decision", label: "Decision" },
  { id: "build", label: "Build" },
  { id: "outcome", label: "Outcome" },
];

export const metadata = {
  title: "Walter's Hospitality · Case Study · Hamza Jamal",
};

const IMG = "/work/walters";

export default function WaltersCaseStudy() {
  return (
    <CaseStudyShell bg="#f9f8f5" currentSlug="walters-hospitality" sections={NAV_SECTIONS}>
      <Title
        title="Walter's Hospitality"
        summary="An events company ran on spreadsheets, email and paper. Over twelve months we replaced that with one system for the planners, the office, and every outside vendor they work with."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Team", value: "12, at Arbisoft" },
          { label: "Duration", value: "12 months, 2023" },
          { label: "Status", value: "Shipped" },
        ]}
      />

      <Shots
        items={[
          {
            src: `${IMG}/walter-s-hospitality-cover.jpeg`,
            alt: "Walter's Hospitality platform overview",
          },
        ]}
      />

      <Section number="01" id="problem" eyebrow="The problem">
        <H2>Every event lived in five places.</H2>
        <Prose>
          <p>
            Walter's plans weddings, corporate events and private parties.
            Each one involves florists, caterers, photographers and a dozen
            other vendors. Before this project, the plan for an event was
            spread across a spreadsheet, an email thread, a paper file, and
            two people's heads. Teams could not see each other's updates,
            and a lot of work was retyping.
          </p>
          <p>
            The worst of it was vendor management. Every vendor was handled
            a different way, so the same event could go smoothly with one
            florist and badly with another. Clients felt that difference.
          </p>
        </Prose>
      </Section>

      <Section number="02" id="finding" eyebrow="The finding">
        <H2>Vendors are not one kind of user.</H2>
        <Prose>
          <p>
            I interviewed the planners, the office staff, and the vendors
            themselves, one at a time. I also sat through their four-meeting
            planning cycle to see where the information actually changed
            hands.
          </p>
          <p>
            The finding that shaped the whole product: one vendor form would
            not work. A florist selling fixed packages needs a price list and
            a calendar. A florist doing custom work needs inventory,
            quantities and approvals. A photographer needs neither, and
            needs a shot list instead. Forcing them into one form is what
            the spreadsheets had been doing, badly.
          </p>
        </Prose>
      </Section>

      <Shots
        items={[
          {
            src: `${IMG}/synthesis-board.png`,
            alt: "Research synthesis board",
            caption: "Interview notes sorted by role and by where the hand-offs broke.",
          },
        ]}
      />

      <Section number="03" id="decision" eyebrow="The decision">
        <H2>A profile that changes shape by vendor type.</H2>
        <Prose>
          <p>
            Instead of one vendor record, each vendor type gets its own set
            of fields, services and ways of being contacted. The planner
            sees the same layout for every vendor. The vendor sees only what
            applies to them. That kept the system learnable for the office
            without making a caterer fill in a florist's form.
          </p>
          <p>
            Every role got its own portal: admin, staff, and each vendor. I
            prototyped each one and put it in front of the person who would
            use it, in their own portal, before it was built.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/walter-s-modular-vendor-profile-ui.png`,
            alt: "Modular vendor profile",
            caption: "The vendor profile. Same frame, different fields.",
          },
          {
            src: `${IMG}/vendor-profile-screens.png`,
            alt: "Vendor profile screens",
            caption: "Vendor-side screens.",
          },
        ]}
      />

      <Section number="04" id="build" eyebrow="The build">
        <H2>Reports the office had never had.</H2>
        <Prose>
          <p>
            With events and vendors in one system, the numbers came for
            free. I worked with the finance side to list what they had been
            assembling by hand each month, and built a reports page around
            it: revenue by period, and which packages sell.
          </p>
          <p>
            Twelve months is a long project. The way to keep twelve people
            aligned was to design one role's flow end to end, ship it, and
            move to the next, rather than design everything and hand it
            over at once.
          </p>
        </Prose>
      </Section>

      <Shots
        items={[
          {
            src: `${IMG}/walter-s-reports-dashboard.png`,
            alt: "Reports dashboard",
            caption: "Revenue and packages, without the spreadsheet.",
          },
        ]}
      />

      <Section number="05" id="outcome" eyebrow="Outcome">
        <H2>The spreadsheets went away.</H2>
        <Prose>
          <p>
            The platform shipped and replaced the spreadsheet, email and
            paper process for planners, staff and vendors. The immediate
            gain was time: the retyping stopped, and updates were visible to
            everyone at once.
          </p>
          <p>
            I do not have usage numbers from after launch. The client did
            not instrument the system, and I moved on before that changed.
            So this study describes what was built and why, and makes no
            claim about hours saved.
          </p>
          <p>
            What I took from it: in enterprise work, the design problem is
            mostly a disagreement problem. Twelve people and a dozen vendor
            types wanted different things. The job was getting them to
            agree on one shape, then drawing it.
          </p>
        </Prose>
      </Section>
    </CaseStudyShell>
  );
}
