import { CaseStudyShell } from "@/components/case-study/shell";
import {
  CSHero,
  CSSection,
  CSImage,
  CSQuote,
} from "@/components/case-study/primitives";

const ACCENT = "#3a4356";

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
    <CaseStudyShell bg="#f9f8f5" currentSlug="walters-hospitality">
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
                <p className="eyebrow">{m.label}</p>
                <p className="body-sm mt-1 text-[var(--color-ink)]">{m.value}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-10">
            <div>
              <p className="eyebrow" style={{ color: ACCENT }}>Challenge</p>
              <p className="body-text mt-3 text-[var(--color-ink-muted)]">
                Before this project, Walter&apos;s Hospitality struggled with
                old ways of working. They used spreadsheets, emails, and paper,
                which caused a lot of back-and-forth. Information was
                scattered, different teams couldn&apos;t easily share updates,
                and many tasks had to be done by hand.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: ACCENT }}>Results</p>
              <p className="body-text mt-3 text-[var(--color-ink-muted)]">
                The most immediate and important benefit of the new platform is
                the expected reduction in time spent on manual tasks.
              </p>
            </div>
          </div>
        </div>
      </CSSection>

      <CSSection narrow>
        <p className="eyebrow" style={{ color: ACCENT }}>My Responsibilities</p>
        <p className="body-text mt-3 text-[var(--color-ink-muted)]">
          As the Product Designer for this project, which lasted 12+ months, I
          took ownership of key parts of the design process. My main
          responsibilities included leading the user research, driving the
          ideation phase, and creating the complete UI design for the new
          event management platform.
        </p>
      </CSSection>

      <CSSection narrow>
        <p className="eyebrow" style={{ color: ACCENT }}>Challenge</p>
        <p className="body-text mt-3 text-[var(--color-ink-muted)]">
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

      <CSSection narrow>
        <p className="eyebrow" style={{ color: ACCENT }}>Design Decisions</p>
        <p className="body-text mt-3 text-[var(--color-ink-muted)]">
          I conducted one-on-one interviews with Walter&apos;s event planners,
          administrative staff, and key vendors. To handle the varied ways
          different vendors work (florists, caterers, photographers), I
          created a modular vendor profile system. This design allowed each
          vendor type to set up its specific data fields, services, and
          communication methods.
        </p>
      </CSSection>

      <CSSection narrow>
        <p className="eyebrow" style={{ color: ACCENT }}>Synthesizing Complex Information</p>
        <p className="body-text mt-3 text-[var(--color-ink-muted)]">
          To turn the large amount of information from interviews and research
          into clear insights, Miro was an essential tool. This digital
          whiteboard helped us organise raw observations into meaningful
          conclusions.
        </p>
      </CSSection>

      <CSSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[var(--color-canvas-warm)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/MxI5687J6ufruVWrNiLEEhBKM.png" alt="Vendor profile screens" className="block h-auto w-full" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[var(--color-canvas-warm)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/O7MHKQgQJqr1xrflnf7Kz47ChY.png" alt="Synthesis board" className="block h-auto w-full" />
          </div>
        </div>
      </CSSection>

      <CSSection narrow>
        <p className="eyebrow" style={{ color: ACCENT }}>CRM · Multi-user profile management</p>
        <p className="body-text mt-3 text-[var(--color-ink-muted)]">
          I created an end-to-end flow for each user and showed prototypes to
          each vendor by letting them use their own portal. This is an
          extensive platform where I dug deep into each use case and curated a
          personalised experience for every user, including admin, staff, and
          all vendors.
        </p>
      </CSSection>

      <CSSection narrow>
        <p className="eyebrow" style={{ color: ACCENT }}>Reports</p>
        <p className="body-text mt-3 text-[var(--color-ink-muted)]">
          After identifying the major things the analytics team wanted to
          track, I created a reports page that shows revenues and packages.
        </p>
      </CSSection>

      <CSImage
        src="https://framerusercontent.com/images/sDoDGUZQpMzGQpjTuB9ebM5z5as.png"
        alt="Walter's reports dashboard"
      />

      <CSSection narrow>
        <p className="eyebrow" style={{ color: ACCENT }}>Conclusion</p>
        <p className="body-text mt-3 text-[var(--color-ink-muted)]">
          Working on Walter&apos;s Hospitality&apos;s platform taught me a lot
          about complex enterprise design. A key learning was how to handle
          and bring together conflicting needs from different teams. This
          experience showed me that good product design in complex settings
          needs strong communication and the ability to build agreement, not
          just technical skills.
        </p>
      </CSSection>

      <CSSection narrow>
        <p className="eyebrow">Potential Next Steps</p>
        <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {nextSteps.map((s) => (
            <li
              key={s}
              className="liquid-sm body-sm flex items-center gap-3 rounded-2xl px-5 py-4 text-[var(--color-ink)]"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
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
    </CaseStudyShell>
  );
}
