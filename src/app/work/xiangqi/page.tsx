import { CaseStudyShell } from "@/components/case-study/shell";
import {
  CSHero,
  CSSection,
  CSBody,
  CSImage,
  CSStats,
  CSYellowTiles,
} from "@/components/case-study/primitives";

const ACCENT = "#ff7878";

export const metadata = {
  title: "Xiangqi · Case Study · Hamza Jamal",
};

const userProblems = [
  {
    title: "Overwhelming interface",
    body: "Too much information during gameplay made it hard for users to focus on the game.",
  },
  {
    title: "Game Customization",
    body: "Users reported they couldn't find games where they could change the timer and play settings.",
  },
  {
    title: "PVP games",
    body: "Users were unaware of the most important feature (inviting friends) due to poor navigation.",
  },
];

const competitors = [
  {
    name: "Chess.com",
    value: "Comprehensive chess platform offering tutorials, puzzles, and tournaments.",
    users: "Casual players, serious chess enthusiasts, and competitive players.",
    strengths:
      "Extensive feature set including tutorials, puzzles, articles, videos, and live tournaments. Strong community.",
    weakness:
      "Subscription required for full access. Interface can feel cluttered.",
    launch: "2007",
  },
  {
    name: "Lichess.org",
    value: "Free and open-source chess platform with a focus on simplicity, fairness, and accessibility.",
    users: "Competitive players seeking an ad-free experience.",
    strengths:
      "Completely free, no ads or paywalls. Puzzles, analysis tools, tournaments.",
    weakness:
      "Limited social features compared to Chess.com. Some users prefer a more polished design.",
    launch: "2010",
  },
  {
    name: "TianTian",
    value: "AI-powered chess platform providing personalised training and analysis.",
    users: "Players looking to improve through AI-driven insights.",
    strengths:
      "Advanced AI offers personalised training tailored to strengths and weaknesses.",
    weakness:
      "Smaller user base than Chess.com and Lichess. Limited community features.",
    launch: "2021",
  },
];

const contributions = [
  "Proposed a complete redesign plan for information architecture and platform navigation.",
  "Identified key areas of improvement by conducting a UX audit and analysing user feedback.",
  "Introduced cohesive brand guidelines and design systems for web and mobile.",
];

const reflections = [
  "A generic look and feel won't always work for a product. It has to be intuitive and simple.",
  "User experience is iterative and continues to improve over time.",
  "The design must be flexible enough to handle any number of users and should not feel empty under any circumstances.",
  "It is important to focus on the features that deliver the highest value to users.",
  "Scope creep should be avoided. The focus should be on creating MVPs.",
];

export default function XiangqiCaseStudy() {
  return (
    <CaseStudyShell bg="#ffffff">
      <CSHero
        eyebrow="Entertainment · Online Board Game"
        title="Xiangqi.com Chinese Chess"
        accent={ACCENT}
        description="Xiangqi.com is a product based on the Xiangqi ancient board game similar to Chess. Players can register for free, chat, and play against other players, or with AI-powered bots at various skill levels."
        meta={[
          { label: "Role", value: "Product Design, UX Research" },
          { label: "Duration", value: "Jan 2021 to Dec 2022" },
          { label: "Industry", value: "Entertainment, Gaming" },
          { label: "Team", value: "8 (PO, Tech Lead, Engineers, QA)" },
        ]}
      />

      <CSImage
        src="https://framerusercontent.com/images/Dq7Cvghr3A9SQUbk8YQQaBhU.png"
        alt="Xiangqi.com cover"
      />

      <CSSection eyebrow="Overview" narrow>
        <p className="mt-3">
          <a
            href="https://play.xiangqi.com/lobby"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-[14px] transition-opacity hover:opacity-70"
            style={{ color: ACCENT }}
          >
            <span>Live website</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 9l6-6M3 3h6v6" stroke="currentColor" strokeLinecap="round" />
            </svg>
          </a>
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 text-[14px] md:grid-cols-3">
          {[
            { label: "Role", value: "Product Design, Design Strategy, UX Research, UX Writing, OKR planning" },
            { label: "Tools", value: "Figma, Squarespace, Adobe Illustrator, Jira" },
            { label: "Duration", value: "Jan 2021 to Dec 2022" },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.5)] uppercase">{m.label}</p>
              <p className="mt-2 leading-[1.6] text-[#171717]">{m.value}</p>
            </div>
          ))}
        </div>
      </CSSection>

      <CSSection eyebrow="Outcome" heading="What changed">
        <CSStats
          stats={[
            { value: "1.79% → 11%", label: "User conversion increase" },
            { value: "100k+", label: "Downloads on the Play Store" },
            { value: "20% → up", label: "Retention rate" },
          ]}
        />
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/hFtdJKInk84tp82z8gCijNNiBQ.png"
        alt="Play Store download badge"
      />

      <CSSection narrow>
        <CSBody>
          <p>Final Design. Read on to see how I got here.</p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/anvC9dld0nNkUB7fwhS1z9D1SuY.gif"
        alt="Final web design walkthrough"
      />

      <CSImage
        src="https://framerusercontent.com/images/Q2TlvjHy0SYKD3eiYtbBdKigX8.png"
        alt="Mobile design screens"
      />

      <CSSection eyebrow="Context" heading="The Problem" narrow>
        <CSBody>
          <p>
            Existing users of Xiangqi.com expressed frustration with the lack
            of engagement and the complexity of the interface, resulting in a
            low user retention rate of 20%.
          </p>
        </CSBody>
      </CSSection>

      <CSSection eyebrow="Objective" narrow>
        <CSBody>
          <p>
            The business objective was to achieve a 10X growth in user base
            within one year. To support this goal, the design objective was to
            increase user engagement and retention by optimising the interface
            and driving conversions.
          </p>
        </CSBody>
      </CSSection>

      <CSSection eyebrow="My contributions" narrow>
        <ul className="flex max-w-[760px] flex-col gap-3 text-[16px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
          {contributions.map((c) => (
            <li key={c} className="flex gap-3">
              <span className="mt-2.5 inline-block h-1 w-1 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </CSSection>

      <CSSection eyebrow="Team" narrow>
        <CSBody>
          <p>
            The total team members were 8 including a Product Owner, Tech
            Lead, Engineers, and QAs.
          </p>
        </CSBody>
      </CSSection>

      <CSSection eyebrow="Research" heading="Understanding existing implementation" narrow>
        <CSBody>
          <p>
            When I joined, the product&apos;s primary focus was on delivering
            functionality, so most of the implementation was carried out by
            engineers. To improve the product, I researched competitors,
            identified usability issues, and prepared a document to discuss
            them with a Product manager.
          </p>
        </CSBody>
      </CSSection>

      <CSSection heading="User problems">
        <CSBody>
          <p>
            We embedded a &ldquo;Rate your experience&rdquo; popup to collect
            user feedback. It was shown to the user after completing a game.
            From that, we prioritised the three most common problems:
          </p>
        </CSBody>
        <div className="mt-10">
          <CSYellowTiles items={userProblems} bg="#FFF2AF" />
        </div>
      </CSSection>

      <CSSection heading="Old Lobby - Version 1" narrow>
        <CSBody>
          <p>
            A central hub where players can browse and join games based on
            their skill level and game-mode preferences.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/3YHgWnN58owA1cAr1h4oBd0uio.png"
        alt="Old lobby UI"
      />

      <CSSection eyebrow="Phase 01" heading="Competitors Research" narrow>
        <CSBody>
          <p>
            I started by exploring the chess-based apps that were most
            commonly used by people around the world.
          </p>
          <p>
            <span style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
              Purpose of research.
            </span>{" "}
            This research study was conducted to collect users&apos; insights
            on the board games Chess.com and Lichess.org. The insights
            gathered contributed to shaping the solutions to improve user
            conversions of Xiangqi.com.
          </p>
          <p>
            <span style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>Approach.</span>{" "}
            I divided this study into two main phases: Competitors Research
            and User Reviews. For the prior, I conducted a detailed analysis
            of several multiplayer solutions to identify their value
            proposition, feature set, flows, and common design patterns. For
            the latter, I wanted to capture more quantitative insights from
            users, for which I included heatmaps and game reviews.
          </p>
        </CSBody>
      </CSSection>

      <CSSection heading="Value Analysis">
        <CSBody>
          <p>
            Conducted a value analysis to state the strengths, weaknesses,
            target audience and key differentiators of each competitor.
          </p>
        </CSBody>
        <div className="mt-10 overflow-x-auto rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[820px] border-collapse text-[13px]">
            <thead>
              <tr className="border-b border-[rgba(0,0,0,0.08)] text-left text-[rgba(0,0,0,0.55)]">
                <th className="p-4 font-normal">Platform</th>
                <th className="p-4 font-normal">Value</th>
                <th className="p-4 font-normal">Users</th>
                <th className="p-4 font-normal">Strengths</th>
                <th className="p-4 font-normal">Weakness</th>
                <th className="p-4 font-normal">Launch</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr key={c.name} className="border-b border-[rgba(0,0,0,0.06)] align-top last:border-0">
                  <td className="p-4 text-[#171717]" style={{ fontVariationSettings: '"wght" 600' }}>
                    {c.name}
                  </td>
                  <td className="p-4 text-[rgba(0,0,0,0.7)]">{c.value}</td>
                  <td className="p-4 text-[rgba(0,0,0,0.7)]">{c.users}</td>
                  <td className="p-4 text-[rgba(0,0,0,0.7)]">{c.strengths}</td>
                  <td className="p-4 text-[rgba(0,0,0,0.7)]">{c.weakness}</td>
                  <td className="p-4 text-[rgba(0,0,0,0.7)]">{c.launch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CSSection>

      <CSSection eyebrow="Phase 02" heading="User reviews" narrow>
        <CSBody>
          <p>
            I explored online reviews and comments from Play Store and App
            Store to identify user problems.
          </p>
        </CSBody>
      </CSSection>

      <CSSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/xjYjTUdC2XKSJrfKOFa9H6ykKg.png" alt="App store reviews" className="block h-auto w-full" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/s8LzSRH2btksEJBuSKbN5W52k.png" alt="More app reviews" className="block h-auto w-full" />
          </div>
        </div>
      </CSSection>

      <CSSection eyebrow="Ideation" heading="Information Architecture" narrow>
        <CSBody>
          <p>
            I created an information architecture by discussing related
            features with the Product Manager, which was based on an
            understanding of the existing structure and user needs.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/rWw8cZwdkl9XwELibVnxuKHW3Tc.png"
        alt="Information architecture diagram"
      />

      <CSSection heading="Wireframing" narrow>
        <CSBody>
          <p>
            After prioritising the information on a paper sketch, I presented
            two design variations based on usability. During this process, I
            made sure to discuss the development cost with the Tech lead to
            keep it at a minimum. Idea 2 was ultimately selected, and we
            proceeded further.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/fr2j5HG1uwY2nirAGE2OSP3njE.png"
        alt="Wireframe variants"
      />

      <CSSection eyebrow="Design" heading="Version 2" narrow>
        <CSBody>
          <p>
            The first iteration was quite a revamp. We received a lot of
            positive feedback from the users and the stakeholders. We
            celebrated the success with a tournament held in the company on
            Saturday. The design had a clear visual hierarchy, with elements
            prioritised according to user needs.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/opohUIKYCNuZQCdSd9rnDFoqPU.png"
        alt="Version 2 lobby"
      />

      <CSSection heading="But, after user testing" narrow>
        <CSBody>
          <p>
            <span style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
              Analyzing the heatmap.
            </span>
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/V4ovThEgxyn0vTgL8hoGtkV6SA.png"
        alt="Heatmap overlay"
      />

      <CSSection heading="The results weren't that great" narrow>
        <CSBody>
          <p>
            We tested this version for 4 months but a few concerns were raised
            by the users:
          </p>
        </CSBody>
        <ul className="mt-6 grid max-w-[760px] gap-3 text-[15px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
          <li className="flex gap-3">
            <span className="mt-2.5 inline-block h-1 w-1 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
            <span>There were fewer users after peak hours, which made the lobby empty.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2.5 inline-block h-1 w-1 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
            <span>The call-to-action button for &ldquo;New game&rdquo; was not prominent enough.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2.5 inline-block h-1 w-1 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
            <span>The matchmaking waiting time was too long, so people preferred to play with the AI bots.</span>
          </li>
        </ul>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/GLcgVRz3ML8FlHbutO8I4VLRorg.png"
        alt="Annotated V2 issues"
      />

      <CSSection eyebrow="Design enhancement" heading="Latest Design - Version 3" narrow>
        <CSBody>
          <p>
            After collecting 4 months of feedback, I made sure that the design
            should not only be flexible enough to handle empty spaces because
            of less users but also encourage them to play Xiangqi by giving
            the first impression of the game board.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/VuZkR5HW8AAuarbZTdbPFqtJo.png"
        alt="Version 3 lobby"
      />

      <CSSection eyebrow="Before & After" heading="Lobby page" />

      <CSImage
        src="https://framerusercontent.com/images/k95N9vYnrF4sPvMt3HmyN3otdEc.png"
        alt="Lobby before and after"
      />

      <CSSection heading="Signup page" />

      <CSImage
        src="https://framerusercontent.com/images/ZgtsGtpVAO7CNX6UfxqvK6ufo.png"
        alt="Signup before and after"
      />

      <CSSection heading="Design Impact" narrow>
        <CSBody>
          <p>
            Improvement to the user experience led to an increase in user
            conversion from 1.79% to 11.0%.
          </p>
        </CSBody>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/OqmmkRIlfqUnj21iSaWXRSeonQ.jpg"
        alt="Conversion chart"
      />

      <CSSection heading="Positive user Feedback">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/kPVehxj0Sx87dIGv4fTnWmxYmd8.png" alt="User feedback" className="block h-auto w-full" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/ZlLn6RkO7V7TVoPzTc3UcrpU.png" alt="User feedback" className="block h-auto w-full" />
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://framerusercontent.com/images/9t41VKB2dDk9ddvS05VRdZljuzc.png" alt="Wider feedback strip" className="block h-auto w-full" />
        </div>
      </CSSection>

      <CSSection eyebrow="Results" heading="Reflection and takeaways" narrow>
        <CSBody>
          <p>
            The design for Xiangqi was not like other platforms. It had
            complex challenges. I learned that the generic look and feel
            won&apos;t always work for a product. It has to be intuitive and
            simple.
          </p>
        </CSBody>
        <ul className="mt-8 flex max-w-[760px] flex-col gap-3 text-[15px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
          {reflections.map((r) => (
            <li key={r} className="flex gap-3">
              <span className="mt-2.5 inline-block h-1 w-1 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </CSSection>

      <section className="border-t border-[rgba(0,0,0,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <p className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">
            Next Case Study
          </p>
          <a
            href="/work/E-learning-management"
            className="mt-8 flex flex-col gap-3 rounded-3xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-0.5 md:p-10"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-[rgba(0,0,0,0.12)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[rgba(0,0,0,0.6)] uppercase">
                EdTech
              </span>
              <span className="rounded-md border border-[rgba(0,0,0,0.12)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[rgba(0,0,0,0.6)] uppercase">
                B2C
              </span>
            </div>
            <h3 className="text-[28px] leading-[1.15] text-[#171717] md:text-[40px]" style={{ fontVariationSettings: '"wght" 500, "opsz" 96' }}>
              Designing an Interactive Edtech Platform
            </h3>
            <p className="max-w-[640px] text-[15px] leading-[1.7] text-[rgba(0,0,0,0.65)]">
              Advance Learning Platform is an online school that provides a
              personalised learning experience to students.
            </p>
          </a>
        </div>
      </section>
    </CaseStudyShell>
  );
}
