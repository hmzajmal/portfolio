import { CaseStudyShell } from "@/components/case-study/shell";
import { H2, Prose, Section, Shots, Title } from "@/components/case-study/editorial";

/** Table of contents for the navbar. Ids match the section anchors below. */
const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "v2", label: "Version 2" },
  { id: "v3", label: "Version 3" },
  { id: "outcome", label: "Outcome" },
];

export const metadata = {
  title: "Xiangqi · Case Study · Hamza Jamal",
};

const IMG = "/work/xiangqi";

export default function XiangqiCaseStudy() {
  return (
    <CaseStudyShell bg="#ffffff" currentSlug="xiangqi" sections={NAV_SECTIONS}>
      <Title
        title="Xiangqi.com"
        summary="Chinese chess, played online against people or bots. Retention was 20% and the business wanted ten times the players. Two redesigns of the lobby took conversion from 1.79% to 11%."
        meta={[
          { label: "Role", value: "Product Designer, Research" },
          { label: "Team", value: "8, at Arbisoft" },
          { label: "Duration", value: "Jan 2021 to Dec 2022" },
          { label: "Live", value: "play.xiangqi.com" },
        ]}
      />

      <Shots
        items={[
          {
            src: `${IMG}/xiangqi-com-cover.png`,
            alt: "Xiangqi.com lobby, final design",
          },
        ]}
      />

      <Section number="01" id="problem" eyebrow="The problem">
        <H2>People signed up, played once, and left.</H2>
        <Prose>
          <p>
            Xiangqi.com let you register for free, chat, and play against
            other people or bots at different levels. Only one in five
            players came back. The business goal was ten times the user base
            in a year, and the product could not get there while losing
            four in five.
          </p>
          <p>
            When I joined, the team was eight people and almost all the
            product decisions had been made by engineers, because shipping
            features had been the priority. My first job was to find out
            why players left, and to put it in a form the product manager
            could act on.
          </p>
        </Prose>
      </Section>

      <Shots
        items={[
          {
            src: `${IMG}/old-lobby-ui.png`,
            alt: "The original lobby",
            caption: "Before. The lobby players saw when I joined.",
          },
        ]}
      />

      <Section number="02" id="research" eyebrow="The research">
        <H2>Ask the players, then read the competition.</H2>
        <Prose>
          <p>
            We added a one-question rating prompt after every finished game.
            The answers pointed at three things. The screen showed too much
            during play. Players could not find games with the timer and
            rules they wanted. And the most valuable feature, inviting a
            friend to play, was hidden so well most people did not know it
            existed.
          </p>
          <p>
            I compared Chess.com, Lichess and TianTian on what they offer,
            who they serve, and where their own users complain, then read
            through the Play Store and App Store reviews for all of them.
            Chess players had already solved most of our lobby problems.
            There was no reason to solve them again from scratch.
          </p>
          <p>
            From that I drew a new information architecture with the
            product manager, then two lobby layouts on paper. I priced both
            with the tech lead before choosing. The cheaper one to build was
            also the clearer one, so that was an easy call.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/information-architecture-diagram.png`,
            alt: "Information architecture",
            caption: "The new structure.",
          },
          {
            src: `${IMG}/wireframe-variants.png`,
            alt: "Two wireframe variants",
            caption: "Two layouts. The second was chosen.",
          },
        ]}
      />

      <Section number="03" id="v2" eyebrow="Version 2">
        <H2>The redesign everyone liked, and the data did not.</H2>
        <Prose>
          <p>
            Version 2 shipped with a clean hierarchy and a lobby built
            around live games. Players and stakeholders liked it. The
            company held a tournament to celebrate.
          </p>
          <p>
            Then we watched it for four months with heatmaps, and three
            problems showed up. Outside peak hours there were not enough
            live games, so the lobby looked empty and dead. The New Game
            button did not stand out, so people did not know how to start.
            And matchmaking was slow, so players gave up waiting and played
            bots instead, which is a lonelier game.
          </p>
          <p>
            The design was right for a busy lobby. Most of the day, the
            lobby was not busy.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/version-2-lobby.png`,
            alt: "Version 2 lobby",
            caption: "Version 2.",
          },
          {
            src: `${IMG}/heatmap-overlay.png`,
            alt: "Heatmap over version 2",
            caption: "Four months of clicks. The New Game button barely registers.",
          },
        ]}
      />

      <Section number="04" id="v3" eyebrow="Version 3">
        <H2>Show the board first.</H2>
        <Prose>
          <p>
            Version 3 leads with a game board, not a list of games. A new
            visitor sees what Xiangqi looks like before they see how many
            people are online. The lobby was redrawn so it holds up with
            three players or three hundred, and New Game became the one
            obvious action on the page. The sign-up page got the same
            treatment: fewer fields, one path.
          </p>
          <p>
            The same idea carried to the mobile app, which I designed in
            parallel with the web lobby.
          </p>
        </Prose>
      </Section>

      <Shots
        columns={2}
        items={[
          {
            src: `${IMG}/lobby-before-and-after.png`,
            alt: "Lobby before and after",
            caption: "Lobby, before and after.",
          },
          {
            src: `${IMG}/signup-before-and-after.png`,
            alt: "Sign-up before and after",
            caption: "Sign-up, before and after.",
          },
        ]}
      />

      <Shots
        items={[
          {
            src: `${IMG}/mobile-design-screens.png`,
            alt: "Mobile app screens",
            caption: "The mobile app.",
          },
        ]}
      />

      <Section number="05" id="outcome" eyebrow="Outcome">
        <H2>1.79% to 11%.</H2>
        <Prose>
          <p>
            After version 3 shipped, the conversion rate the team tracked
            went from 1.79% to 11%. The Android app passed 100,000
            downloads on the Play Store. Retention moved up from the 20%
            baseline, though I do not have the final figure, so I will not
            put a number on it.
          </p>
          <p>
            The lesson I still use: a design that looks right in a full
            room can fail in an empty one. Design for the quiet hours, and
            check the heatmap before you celebrate.
          </p>
        </Prose>
      </Section>

      <Shots
        items={[
          {
            src: `${IMG}/conversion-chart.jpg`,
            alt: "Conversion chart",
            caption: "Conversion before and after version 3.",
          },
        ]}
      />
    </CaseStudyShell>
  );
}
