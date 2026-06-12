import { CaseStudyShell } from "@/components/case-study/shell";
import {
  CSHero,
  CSSection,
  CSBody,
  CSImage,
  CSQuote,
  CSNext,
  CSMediaRow,
} from "@/components/case-study/primitives";

const ACCENT = "#3a4356";
const VIDEO = "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4";

export const metadata = {
  title: "Walter's Hospitality · Case Study · Hamza Jamal",
};

const nextSteps = [
  "Advanced Analytics & Reporting",
  "Mobile App for Event Day Management",
  "Integration with Event Tools",
  "AI-Powered Features",
];

export default function WaltersCaseStudy() {
  return (
    <CaseStudyShell bg="#f9f8f5">
      <CSHero
        eyebrow="CRM · Event Management"
        title="Walter's Hospitality"
        accent={ACCENT}
        description="Walter's Hospitality is an event-management company that organises a wide range of events. They work closely with outside vendors like florists, caterers, and photographers, and also manage complex internal planning and money matters."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Duration", value: "12+ months" },
          { label: "Industry", value: "Hospitality, Event Mgmt" },
          { label: "Team size", value: "12" },
        ]}
      />

      <CSImage
        src="https://framerusercontent.com/images/YB0WaAIttTvz40J4JU1UvyNL4SI.jpeg"
        alt="Walter's Hospitality cover"
      />

      <CSSection narrow>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <ul className="flex flex-col gap-6">
            {[
              { label: "Role", value: "Product Designer" },
              { label: "Duration", value: "12+ Month Project" },
              { label: "Industry", value: "Hospitality, Event Management" },
              { label: "Team size", value: "12" },
            ].map((m) => (
              <li key={m.label}>
                <p className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.5)] uppercase">{m.label}</p>
                <p className="mt-1 text-[14px] text-[#171717]">{m.value}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[14px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
                Challenge
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
                Before this project, Walter&apos;s Hospitality struggled with
                old ways of working. They used spreadsheets, emails, and paper,
                which caused a lot of back-and-forth. Information was
                scattered, different teams couldn&apos;t easily share updates,
                and many tasks had to be done by hand.
              </p>
            </div>
            <div>
              <p className="text-[14px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
                Results
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[rgba(0,0,0,0.72)]">
                The most immediate and important benefit of the new platform is
                the expected reduction in time spent on manual tasks.
              </p>
            </div>
          </div>
        </div>
      </CSSection>

      <CSSection>
        <CSMediaRow
          items={[
            { src: VIDEO, alt: "Walkthrough 1", type: "video" },
            { src: VIDEO, alt: "Walkthrough 2", type: "video" },
            { src: VIDEO, alt: "Walkthrough 3", type: "video" },
          ]}
        />
      </CSSection>

      <CSSection narrow>
        <p className="text-[14px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          My Responsibilities
        </p>
        <p className="mt-3 text-[16px] leading-[1.75] text-[rgba(0,0,0,0.72)]">
          As the Product Designer for this project, which lasted 12+ months, I
          took ownership of key parts of the design process. My main
          responsibilities included leading the user research, driving the
          ideation phase, and creating the complete UI design for the new
          event management platform.
        </p>
      </CSSection>

      <CSSection narrow>
        <p className="text-[14px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          Challenge
        </p>
        <p className="mt-3 text-[16px] leading-[1.75] text-[rgba(0,0,0,0.72)]">
          Walter&apos;s Hospitality faced several big problems that slowed them
          down and affected client happiness. A major issue was their messy
          and inconsistent way of managing vendors. This caused delays in
          event planning and led to different experiences for clients. I
          learned how their 4 major meeting plan works.
        </p>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/8yJZbYSUe6CvlO52r6pDsZn5w.png"
        alt="Walter's modular vendor profile UI"
      />

      <CSSection narrow>
        <CSQuote accent={ACCENT}>
          Key findings showed that a single solution wouldn&apos;t work for
          all vendors. The floral vendor with pre-designed packages
          didn&apos;t need extensive inventory fields, while the custom floral
          vendor desperately did.
        </CSQuote>
      </CSSection>

      <CSSection>
        <CSMediaRow
          items={[
            { src: VIDEO, alt: "Vendor portal walkthrough A", type: "video" },
            { src: VIDEO, alt: "Vendor portal walkthrough B", type: "video" },
          ]}
        />
      </CSSection>

      <CSSection>
        <CSMediaRow
          items={[
            { src: VIDEO, alt: "Workflow walkthrough A", type: "video" },
            { src: VIDEO, alt: "Workflow walkthrough B", type: "video" },
          ]}
        />
      </CSSection>

      <CSSection narrow>
        <p className="text-[14px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          Design Decisions
        </p>
        <p className="mt-3 text-[16px] leading-[1.75] text-[rgba(0,0,0,0.72)]">
          I conducted one-on-one interviews with Walter&apos;s event planners,
          administrative staff, and key vendors. To handle the varied ways
          different vendors work (florists, caterers, photographers), I
          created a modular vendor profile system. This design allowed each
          vendor type to set up its specific data fields, services, and
          communication methods.
        </p>
      </CSSection>

      <CSSection narrow>
        <p className="text-[14px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          Synthesizing Complex Information
        </p>
        <p className="mt-3 text-[16px] leading-[1.75] text-[rgba(0,0,0,0.72)]">
          To turn the large amount of information from interviews and research
          into clear insights, Miro was an essential tool. This digital
          whiteboard helped us organise raw observations into meaningful
          conclusions.
        </p>
      </CSSection>

      <CSSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/MxI5687J6ufruVWrNiLEEhBKM.png" alt="Vendor profile screens" className="block h-auto w-full" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.04)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/O7MHKQgQJqr1xrflnf7Kz47ChY.png" alt="Synthesis board" className="block h-auto w-full" />
          </div>
        </div>
      </CSSection>

      <CSSection narrow>
        <p className="text-[14px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          CRM, Multi-user profile management
        </p>
        <p className="mt-3 text-[16px] leading-[1.75] text-[rgba(0,0,0,0.72)]">
          I created an end-to-end flow for each user and showed prototypes to
          each vendor by letting them use their own portal. This is an
          extensive platform where I dug deep into each use case and curated a
          personalised experience for every user, including admin, staff, and
          all vendors.
        </p>
      </CSSection>

      <CSSection>
        <CSMediaRow items={[{ src: VIDEO, alt: "Multi-user profile management walkthrough", type: "video" }]} />
      </CSSection>

      <CSSection narrow>
        <p className="text-[14px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          Reports
        </p>
        <p className="mt-3 text-[16px] leading-[1.75] text-[rgba(0,0,0,0.72)]">
          After identifying the major things the analytics team wanted to
          track, I created a reports page that shows revenues and packages.
        </p>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/sDoDGUZQpMzGQpjTuB9ebM5z5as.png"
        alt="Walter's reports dashboard"
      />

      <CSSection narrow>
        <p className="text-[14px]" style={{ color: ACCENT, fontVariationSettings: '"wght" 600' }}>
          Conclusion
        </p>
        <p className="mt-3 text-[16px] leading-[1.75] text-[rgba(0,0,0,0.72)]">
          Working on Walter&apos;s Hospitality&apos;s platform taught me a lot
          about complex enterprise design. A key learning was how to handle
          and bring together conflicting needs from different teams. This
          experience showed me that good product design in complex settings
          needs strong communication and the ability to build agreement, not
          just technical skills.
        </p>
      </CSSection>

      <CSSection narrow>
        <p className="text-[11px] tracking-[0.18em] text-[rgba(0,0,0,0.55)] uppercase">
          Potential Next Steps
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {nextSteps.map((s) => (
            <li
              key={s}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-[14px] text-[#171717]"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.33301 8H12.6663M8 3.33325L12.6667 7.99992L8 12.6666"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {s}
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
              href="/work/E-learning-management"
              className="group flex flex-col gap-3 rounded-3xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-[rgba(0,0,0,0.12)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[rgba(0,0,0,0.6)] uppercase">
                  EdTech
                </span>
                <span className="rounded-md border border-[rgba(0,0,0,0.12)] px-2.5 py-1 text-[10px] tracking-[0.14em] text-[rgba(0,0,0,0.6)] uppercase">
                  B2C
                </span>
              </div>
              <h3 className="text-[24px] leading-[1.15] text-[#171717] md:text-[28px]" style={{ fontVariationSettings: '"wght" 500, "opsz" 96' }}>
                Designing an Interactive Edtech Platform
              </h3>
              <p className="text-[14px] leading-[1.65] text-[rgba(0,0,0,0.65)]">
                Advance Learning Platform is an online school that provides a
                personalised learning experience to students.
              </p>
            </a>
            <a
              href="/work/xiangqi"
              className="group flex flex-col gap-3 rounded-3xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-0.5"
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
