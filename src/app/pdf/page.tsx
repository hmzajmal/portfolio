/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import "./pdf.css";

/**
 * PDF portfolio source. Dev-only route: it renders on `next dev` and 404s in
 * production. `npm run pdf` prints it to public/hamza-jamal-portfolio.pdf
 * through headless Chrome. One <Page> is one 1920 x 1080 sheet.
 *
 * Images come from public/pdf-assets, downscaled copies of the site's
 * screenshots so the PDF stays small. Every image is placed at its own
 * aspect ratio inside a box that fits a maximum width and height, so
 * nothing is ever cropped.
 */

export const metadata = {
  title: "Portfolio PDF · Hamza Jamal",
  robots: { index: false, follow: false },
};

const SITE = "hamzajamal.design";
const YEAR = 2026;
const A = "/pdf-assets";

/* ───────────────────────── Content ───────────────────────── */

type Project = { slug: string; title: string; line: string; tag: string; year: string; pages: number };

/** Order of the deck. Page numbers derive from this list. */
const PROJECTS: Project[] = [
  { slug: "ad-studio", title: "ImagineArt Ad Studio", line: "From a prompt bar and a stack of modals to a studio you can see, on web and mobile.", tag: "Consumer AI", year: "2026", pages: 2 },
  { slug: "imagineart-captions", title: "ImagineArt Captions", line: "An auto-captioning tool that became the highest-intent front door into the video suite.", tag: "Consumer AI", year: "2026", pages: 2 },
  { slug: "e-commerce-odetobeauty", title: "Ode to Beauty", line: "A skincare marketplace made to read as a brand. Task completion in testing went from 27% to 100%.", tag: "E-commerce", year: "2024", pages: 1 },
  { slug: "walters-hospitality", title: "Walter's Hospitality", line: "A twelve-month CRM that replaced spreadsheets, email and paper for planners, staff and vendors.", tag: "B2B CRM", year: "2023", pages: 1 },
  { slug: "E-learning-management", title: "Advance Learning", line: "An online school for the Saudi Embassy. Shorter sign-up, clearer dashboard, approved on the first review.", tag: "EdTech", year: "2022", pages: 1 },
  { slug: "xiangqi", title: "Xiangqi.com", line: "Two lobby redesigns for an online Chinese chess platform. Conversion went from 1.79% to 11%.", tag: "Gaming", year: "2021", pages: 1 },
];

const PRINCIPLES: [string, string][] = [
  ["Research over assumption.", "Every screen starts with a real user problem. Interviews, support tickets, session replays."],
  ["Ship the boring parts.", "Empty states, error states, edge cases, design systems. That is where the product lives."],
  ["Move the metric.", "Activation, retention, conversion. If the design does not move a number, it is decoration."],
  ["Engineers in the room.", "I pair with engineering from kickoff so what ships matches what was specced."],
];

const EXPERIENCE: [string, string, string][] = [
  ["ImagineArt", "Product Designer", "2026 to now"],
  ["Carbonteq", "Senior UX/UI Designer", "2024 to 2026"],
  ["Arbisoft", "Product Designer", "2019 to 2024"],
];

const QUOTES: { name: string; role: string; quote: string; avatar: string }[] = [
  {
    name: "Natalia Wojcik",
    role: "Product, Harvard",
    avatar: `${A}/natalia.jpg`,
    quote: "Hamza worked on the product design for Xiangqi, repeatedly exhibiting great problem-solving skills under time pressure. He is creative, a strong communicator, and continually advocates for the best end design and user experience.",
  },
  {
    name: "Eman Irfan",
    role: "UX Design, Carbonteq",
    avatar: `${A}/eman.jpg`,
    quote: "Hamza has been a spectacular manager and mentor. He not only taught me a lot, but also empowered me to take ownership of my work and grow with confidence. Hamza creates a safe space to question, challenge, and make mistakes.",
  },
];

/* Page numbering: cover 1, intro 2, index 3, then projects, then two closing pages. */
const FIRST_PROJECT_PAGE = 4;
function projectPage(slug: string) {
  let n = FIRST_PROJECT_PAGE;
  for (const p of PROJECTS) {
    if (p.slug === slug) return n;
    n += p.pages;
  }
  return n;
}
const PROJECT_PAGES = PROJECTS.reduce((a, p) => a + p.pages, 0);
const TOTAL_PAGES = FIRST_PROJECT_PAGE - 1 + PROJECT_PAGES + 2;
const BEYOND_PAGE = FIRST_PROJECT_PAGE + PROJECT_PAGES;

/* ───────────────────────── Page ───────────────────────── */

export default function PdfPortfolio() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="pdf-root">
      {/* 01 Cover */}
      <Page n={1} tone="dark" footer={false}>
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="pdf-eyebrow text-ink-inverse-quiet">Portfolio · {YEAR}</span>
            <span className="pdf-eyebrow text-ink-inverse-quiet">{SITE}</span>
          </div>
          <div>
            <h1 className="pdf-display text-ink-inverse">Hamza Jamal</h1>
            <p className="pdf-lead mt-10 max-w-[1100px] text-ink-inverse-muted">
              Product designer working on activation, retention and the parts of a product people actually touch. Currently at ImagineArt.
            </p>
          </div>
          <div className="pdf-row grid grid-cols-3 gap-10">
            <Fact label="Role" value="Product Designer, ImagineArt" dark />
            <Fact label="Based in" value="Lahore, Pakistan" dark />
            <Fact label="Selected work" value="Six projects, 2021 to 2026" dark />
          </div>
        </div>
      </Page>

      {/* 02 Intro */}
      <Page n={2}>
        <div className="grid h-full grid-cols-[520px_1fr] gap-24">
          <Shot src={`${A}/about-me.jpg`} alt="Hamza Jamal" ar={1350 / 1800} maxW={520} maxH={760} radius={28} />
          <div className="flex h-full flex-col">
            <p className="pdf-eyebrow text-ink-quiet">About</p>
            <h2 className="pdf-h1 mt-5 text-ink">I design with clarity, empathy and purpose.</h2>
            <p className="pdf-body mt-8 max-w-[940px] text-ink-muted">
              I have built product roadmaps and worked with cross-functional teams across startups and companies for five years. Design, to me, is problem-solving with empathy. The best products make complex things feel effortless for real people.
            </p>
            <div className="pdf-row mt-12 grid grid-cols-2 gap-x-14 gap-y-9">
              {PRINCIPLES.map(([h, b]) => (
                <div key={h}>
                  <p className="pdf-h3 text-ink">{h}</p>
                  <p className="pdf-small mt-2 text-ink-muted">{b}</p>
                </div>
              ))}
            </div>
            <div className="pdf-row mt-auto grid grid-cols-4 gap-10">
              {EXPERIENCE.map(([co, role, when]) => (
                <div key={co}>
                  <p className="pdf-eyebrow text-ink-quiet">{when}</p>
                  <p className="pdf-small mt-2 text-ink">{co}</p>
                  <p className="pdf-small text-ink-muted">{role}</p>
                </div>
              ))}
              <div>
                <p className="pdf-eyebrow text-ink-quiet">Education</p>
                <p className="pdf-small mt-2 text-ink">BSc Software Engineering</p>
                <p className="pdf-small text-ink-muted">UET Taxila, 2015 to 2019</p>
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* 03 Index */}
      <Page n={3} tone="panel">
        <p className="pdf-eyebrow text-ink-quiet">Selected work</p>
        <h2 className="pdf-h1 mt-5 max-w-[1200px] text-ink">Six projects where the outcome moved the metric.</h2>
        <ol className="pdf-list mt-14">
          {PROJECTS.map((p, i) => (
            <li key={p.slug} className="grid grid-cols-[72px_440px_1fr_200px_90px] items-baseline gap-8 py-6">
              <span className="pdf-eyebrow pdf-num text-ink-quiet">{String(i + 1).padStart(2, "0")}</span>
              <span className="pdf-h3 text-ink">{p.title}</span>
              <span className="pdf-small text-ink-muted">{p.line}</span>
              <span className="pdf-small text-ink-quiet">{p.tag} · {p.year}</span>
              <span className="pdf-small pdf-num text-right text-ink-quiet">p. {projectPage(p.slug)}</span>
            </li>
          ))}
        </ol>
      </Page>

      {/* 04 Ad Studio */}
      <ProjectPage
        n={projectPage("ad-studio")}
        eyebrow="ImagineArt · 2026 · Consumer AI · Web and mobile"
        title="Rebuilding Ad Studio around what people could see"
        slug="ad-studio"
        facts={[
          ["Role", "Product design, analytics review, mobile, hand-off"],
          ["Team", "PM, two engineers, growth specialist, QA"],
          ["When", "July to September 2026"],
          ["Context", "Live product with over a million users"],
        ]}
        problem="Ad Studio launched as a prompt bar with a few hidden buttons. The brief said the AI was letting people down. The failure log said the interface was: nine in ten failed generations were a plan gate or an empty prompt."
        did={[
          "Read every failed generation in Mixpanel before opening Figma. One table replaced the brief.",
          "Replaced the prompt bar with five cards: Scene, Product, Avatar, Reference, Style. The prompt became optional.",
          "Rebuilt mobile as one scrolling screen, with the plan gate shown before Generate, never after.",
        ]}
        stats={[
          ["81%", "Paid generations that succeed, from 69%"],
          ["8x", "Weekly users after opening to Free"],
          ["9 in 10", "Failures traced to two fixable causes"],
        ]}
        image={{ src: `${A}/create-pair.jpg`, alt: "The new create screen on a laptop and a phone", ar: 1800 / 1004, caption: "The same five cards on web and mobile." }}
      />

      {/* 05 Ad Studio, detail */}
      <Page n={projectPage("ad-studio") + 1}>
        <div className="flex h-full flex-col">
          <Header eyebrow="ImagineArt Ad Studio · continued" title="What the failure log changed" />
          <div className="mt-12 grid grid-cols-[600px_1fr] gap-20">
            <div>
              <p className="pdf-eyebrow text-ink-quiet">Why generations failed, June to September 2026</p>
              <Bars
                items={[
                  ["Model not allowed on this plan", 10211],
                  ["Prompt is required", 1891],
                  ["Insufficient credits", 804],
                  ["Real generation errors", 58],
                ]}
              />
              <p className="pdf-small mt-6 text-ink-quiet">Failed generations in Mixpanel. Staff and test accounts excluded. Real model errors were under sixty across four months.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Shot src={`${A}/old-home-laptop.jpg`} alt="The old Ad Studio home" ar={1800 / 1004} maxW={484} maxH={320} caption="Before. A prompt bar and two plus buttons." />
              <Shot src={`${A}/home-laptop.jpg`} alt="The new Ad Studio home" ar={1800 / 1004} maxW={484} maxH={320} caption="After. Scenes, products and presets you can see." />
            </div>
          </div>
          <div className="pdf-row mt-auto grid grid-cols-3 gap-16 pb-10">
            <Lesson h="Read the failures before you draw." b="The biggest fix in this project was not a layout, it was a table, and I nearly skipped it." />
            <Lesson h="Volume is not health." b="When Free users came in every chart went up and the product felt worse. Success rate was the only number telling the truth." />
            <Lesson h="On a phone, the screen is the funnel." b="Anything that did not fit on one screen was something to cut, not something to hide in a modal." />
          </div>
          <LinkRow slug="ad-studio" />
        </div>
      </Page>

      {/* 06 Captions */}
      <ProjectPage
        n={projectPage("imagineart-captions")}
        eyebrow="ImagineArt · 2026 · Consumer AI · Web"
        title="Captions: the easiest tool in the video suite"
        slug="imagineart-captions"
        facts={[
          ["Role", "Product Designer: research, design, tracking"],
          ["Team", "PM, engineers, the in-house creative team"],
          ["When", "2026, live since July"],
          ["Live", "imagine.art/video/captions"],
        ]}
        problem="People search for captions by name, so the tool had to feel simpler than everything else out there. One rule: as few steps as possible. The hard part is accuracy. Nobody notices a hundred right words, everyone notices one wrong name."
        did={[
          "Used a competitor start to finish before drawing a screen, to feel where people slow down: settings and wrong words.",
          "Made every style a real picture with captions on it, chosen with the creative team. Word by word highlight on by default.",
          "Instead of a timeline editor, a word swap: type the right word, say which word it replaces, run it again.",
        ]}
        stats={[
          ["2,073", "Visitors in the first eight weeks"],
          ["72%", "Made a video"],
          ["52%", "Downloaded it, start to finish"],
        ]}
        image={{ src: `${A}/cover.jpg`, alt: "Captions on three phones: presets, mode picker, a captioned clip", ar: 1800 / 1343, caption: "Pick a style, find it in the video menu, get the clip back captioned." }}
      />

      {/* 07 Captions, detail */}
      <Page n={projectPage("imagineart-captions") + 1}>
        <div className="flex h-full flex-col">
        <Header eyebrow="ImagineArt Captions · continued" title="Pick a look by looking. Fix a word, not a timeline." />
        <div className="mt-12 grid grid-cols-2 gap-16">
          <div>
            <Shot src={`${A}/presets.jpg`} alt="The Captions panel with nine style presets" ar={1800 / 1280} maxW={800} maxH={430} />
            <p className="pdf-h3 mt-8 text-ink">Styles you can see</p>
            <p className="pdf-body mt-3 text-ink-muted">
              Nobody picks a caption style from a list of font names. Every style is a real frame with the captions already on it. Nine on the panel, See All for the rest.
            </p>
          </div>
          <div>
            <Shot src={`${A}/vocabulary.jpg`} alt="The Vocabulary panel: use this word instead of that word" ar={1800 / 1280} maxW={800} maxH={430} />
            <p className="pdf-h3 mt-8 text-ink">The big decision: no big text editor</p>
            <p className="pdf-body mt-3 text-ink-muted">
              The mistakes are almost always a brand, a product or a special term. A word swap fixes those in seconds and took a fraction of the time to build. The obvious fix and the right fix are not always the same size.
            </p>
          </div>
        </div>
        <LinkRow slug="imagineart-captions" />
        </div>
      </Page>

      {/* 08 Ode to Beauty */}
      <ProjectPage
        n={projectPage("e-commerce-odetobeauty")}
        eyebrow="Carbonteq · 2024 · E-commerce · Web"
        title="Ode to Beauty: a marketplace that reads as a brand"
        slug="e-commerce-odetobeauty"
        facts={[
          ["Role", "Lead Designer: research, business alignment"],
          ["Team", "Three designers, one PM"],
          ["When", "Six weeks, 2024"],
          ["Client", "Skincare store in Pakistan, Western brands"],
        ]}
        problem="Instagram ads worked. The site did not. People arriving from a polished ad landed on a page that looked like any marketplace, and the store's real strength, sorting by skin type and concern, was buried in a menu."
        did={[
          "Started from Hotjar heatmaps and analytics, then ran five moderated sessions on the old site as a baseline.",
          "Fixed the four things people got wrong: hidden skin-type filters, out-of-stock items that looked in stock, icons without labels, dense ingredient lists.",
          "Put type, colour tokens and components into a small design system so three designers shipped one site.",
        ]}
        stats={[
          ["27% to 100%", "Task completion, old site to prototype"],
          ["2 min", "To find and buy, down from four"],
          ["High 80s", "Usability score after the redesign"],
        ]}
        image={{ src: `${A}/ode-to-beauty-cover.jpg`, alt: "The Ode to Beauty homepage after the redesign", ar: 1800 / 1130, caption: "After. Skin type on the homepage, one clear action per block." }}
      />

      {/* 09 Walter's Hospitality */}
      <ProjectPage
        n={projectPage("walters-hospitality")}
        eyebrow="Arbisoft · 2023 · B2B CRM · Web"
        title="Walter's Hospitality: one system for every vendor"
        slug="walters-hospitality"
        facts={[
          ["Role", "Product Designer: research, flows, portals"],
          ["Team", "Twelve, at Arbisoft"],
          ["When", "Twelve months, 2023"],
          ["Client", "Events company: weddings, corporate events"],
        ]}
        problem="Every event lived in five places: a spreadsheet, an email thread, a paper file and two people's heads. Vendor management was the worst of it. Every florist, caterer and photographer was handled a different way, and clients felt the difference."
        did={[
          "Interviewed planners, office staff and vendors one at a time, and sat through the four-meeting planning cycle.",
          "Designed a vendor profile that changes shape by vendor type, so a caterer never fills in a florist's form.",
          "Built a portal per role, tested each with its own user before build, and a reports page the office had never had.",
        ]}
        stats={[
          ["12 months", "From spreadsheets to one shipped system"],
          ["3 portals", "Admin, staff, vendor; each tested"],
          ["1 profile", "That changes shape by vendor type"],
        ]}
        image={{ src: `${A}/walter-s-hospitality-cover.jpg`, alt: "The Walter's Hospitality platform", ar: 1800 / 873, caption: "The platform. Events, vendors and reports in one place." }}
      />

      {/* 10 Advance Learning */}
      <ProjectPage
        n={projectPage("E-learning-management")}
        eyebrow="Arbisoft · 2022 to 2023 · EdTech · Web"
        title="Advance Learning: ask for less, later"
        slug="E-learning-management"
        facts={[
          ["Role", "Flows, dashboard, design system"],
          ["Team", "Arbisoft, with the client's engineers"],
          ["When", "November 2022 to August 2023"],
          ["Client", "The Saudi Embassy"],
        ]}
        problem="More than half of new students gave up at the sign-up form, and most of the rest never opened a course. We could not talk to students directly, so the evidence came from numbers, relayed quotes and the product. One 13-year-old quit when he saw too many choices."
        did={[
          "Cut the sign-up form to what the school needs to create an account and replaced the paywall with a seven-day trial.",
          "Redesigned the dashboard in two rounds so every state has one next step, with themes by grade level.",
          "Inventoried every element with the engineers and built the platform's first design system and hand-off docs.",
        ]}
        stats={[
          ["1st review", "Approved without a second round"],
          ["7 days", "Trial before any payment screen"],
          ["Dec 2022", "Launched, approved January 2023"],
        ]}
        image={{ src: `${A}/signup-and-trial-flow.jpg`, alt: "The new sign-up and seven-day trial flow", ar: 1800 / 878, caption: "The new sign-up. Essentials only, then a seven-day trial." }}
      />

      {/* 11 Xiangqi */}
      <ProjectPage
        n={projectPage("xiangqi")}
        eyebrow="Arbisoft · 2021 to 2022 · Gaming · Web and mobile"
        title="Xiangqi.com: two lobby redesigns, 1.79% to 11%"
        slug="xiangqi"
        facts={[
          ["Role", "Product Designer, research"],
          ["Team", "Eight, at Arbisoft"],
          ["When", "January 2021 to December 2022"],
          ["Live", "play.xiangqi.com"],
        ]}
        problem="Only one in five players came back. The business wanted ten times the players in a year. Product decisions had been made by engineers, so the first job was finding out why players left, in a form the product manager could act on."
        did={[
          "Added a one-question rating after every game and read the app store reviews of Chess.com, Lichess and TianTian.",
          "Shipped version 2, then watched four months of heatmaps show an empty lobby outside peak hours and a New Game button nobody saw.",
          "Version 3 leads with the board, holds up with three players or three hundred, and makes New Game the one obvious action.",
        ]}
        stats={[
          ["1.79% to 11%", "Conversion after version 3"],
          ["100K", "Android downloads on the Play Store"],
          ["2 redesigns", "The second checked against the heatmap"],
        ]}
        image={{ src: `${A}/lobby-before-and-after.jpg`, alt: "The Xiangqi lobby before and after", ar: 1800 / 1625, caption: "Lobby, before and after." }}
      />

      {/* 12 Beyond the work */}
      <Page n={BEYOND_PAGE}>
        <div className="grid h-full grid-cols-[640px_1fr] gap-24">
          <div className="flex h-full flex-col">
            <p className="pdf-eyebrow text-ink-quiet">Beyond the work</p>
            <h2 className="pdf-h1 mt-5 text-ink">Mentoring, talks, and what people say.</h2>
            <p className="pdf-body mt-8 text-ink-muted">
              I mentor designers on ADPList and am an active member of the design community in Lahore and online. I read, and I share what I learn through talks and presentations.
            </p>
            <div className="pdf-row mt-10 flex flex-col gap-7">
              <Fact label="ADPList" value="Certified mentor" />
              <Fact label="Led" value="A team of three designers at Carbonteq, with a shared design system" />
              <Fact label="Reading that shaped the work" value="Never Split the Difference. Sprint. The Design of Everyday Things." />
            </div>
          </div>
          <div className="flex h-full flex-col justify-center gap-8">
            {QUOTES.map((q) => (
              <blockquote key={q.name} className="pdf-quote">
                <p className="pdf-body text-ink">{q.quote}</p>
                <footer className="mt-7 flex items-center gap-4">
                  <img src={q.avatar} alt="" className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <p className="pdf-small text-ink">{q.name}</p>
                    <p className="pdf-small text-ink-quiet">{q.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Page>

      {/* 13 Close */}
      <Page n={TOTAL_PAGES} tone="dark" footer={false}>
        <div className="flex h-full flex-col justify-between">
          <span className="pdf-eyebrow text-ink-inverse-quiet">Thank you</span>
          <div>
            <h2 className="pdf-display text-ink-inverse">Let&apos;s talk.</h2>
            <p className="pdf-lead mt-10 max-w-[1000px] text-ink-inverse-muted">
              Every project in this document has a full case study online, with the process, the screens and the numbers behind each decision.
            </p>
          </div>
          <div className="pdf-row grid grid-cols-3 gap-10">
            <Fact label="Portfolio" value={SITE} dark />
            <Fact label="Email" value="hmzajmal911@gmail.com" dark />
            <Fact label="LinkedIn" value="linkedin.com/in/hamzajamal-design" dark />
          </div>
        </div>
      </Page>
    </main>
  );
}

/* ───────────────────────── Pieces ───────────────────────── */

function Page({ n, tone, footer = true, children }: { n: number; tone?: "dark" | "panel"; footer?: boolean; children: React.ReactNode }) {
  const dark = tone === "dark";
  const quiet = dark ? "text-ink-inverse-quiet" : "text-ink-quiet";
  return (
    <section className={`pdf-page ${tone ?? ""}`} data-page={n}>
      <div className="pdf-main">{children}</div>
      <footer className="pdf-foot">
        <span className={`pdf-eyebrow ${quiet}`}>{footer ? `Hamza Jamal · Portfolio ${YEAR}` : ""}</span>
        <span className={`pdf-eyebrow pdf-num ${quiet}`}>{footer ? `${String(n).padStart(2, "0")} / ${String(TOTAL_PAGES).padStart(2, "0")}` : ""}</span>
      </footer>
    </section>
  );
}

function Header({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="pdf-eyebrow text-ink-quiet">{eyebrow}</p>
      <h2 className="pdf-h2 mt-4 max-w-[1100px] text-ink">{title}</h2>
    </div>
  );
}

function Fact({ label, value, dark }: { label: string; value: string; dark?: boolean }) {
  return (
    <div>
      <p className={`pdf-eyebrow ${dark ? "text-ink-inverse-quiet" : "text-ink-quiet"}`}>{label}</p>
      <p className={`pdf-small mt-2 ${dark ? "text-ink-inverse" : "text-ink"}`}>{value}</p>
    </div>
  );
}

function Lesson({ h, b }: { h: string; b: string }) {
  return (
    <div>
      <p className="pdf-h3 text-ink">{h}</p>
      <p className="pdf-small mt-2 text-ink-muted">{b}</p>
    </div>
  );
}

/**
 * An image at its own aspect ratio, fitted inside maxW x maxH. Never
 * cropped: the box takes the image's shape, so there is no letterbox either.
 */
function Shot({ src, alt, ar, maxW, maxH, caption, radius = 20 }: { src: string; alt: string; ar: number; maxW: number; maxH: number; caption?: string; radius?: number }) {
  let w = maxW;
  let h = w / ar;
  if (h > maxH) {
    h = maxH;
    w = h * ar;
  }
  return (
    <figure className="pdf-figure">
      <div className="pdf-shot" style={{ width: w, height: h, borderRadius: radius }}>
        <img src={src} alt={alt} />
      </div>
      {caption && <figcaption className="pdf-small mt-4 text-ink-quiet">{caption}</figcaption>}
    </figure>
  );
}

/** Ranked horizontal bars, one series. Width is relative to the first item. */
function Bars({ items }: { items: [string, number][] }) {
  const max = Math.max(...items.map(([, v]) => v));
  return (
    <ul className="pdf-bars mt-6">
      {items.map(([label, v]) => (
        <li key={label}>
          <div className="flex items-baseline justify-between gap-6">
            <span className="pdf-small text-ink">{label}</span>
            <span className="pdf-small pdf-num text-ink-muted">{v.toLocaleString("en-US")}</span>
          </div>
          <div className="pdf-bar">
            <span style={{ width: `${Math.max(1.5, (v / max) * 100)}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

function LinkRow({ slug }: { slug: string }) {
  const url = `${SITE}/work/${slug}`;
  return (
    <div className="pdf-row mt-auto">
      <a href={`https://${url}`} className="pdf-link">
        <span className="arrow" aria-hidden>
          <ArrowIcon />
        </span>
        <span className="pdf-small text-ink">
          Read the full case study<span className="text-ink-quiet"> · {url}</span>
        </span>
      </a>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14 14 4M14 4H6.5M14 4v7.5" />
    </svg>
  );
}

/**
 * One project, one page. Rows top to bottom: header, facts across the
 * width, story beside the hero image, result numbers with the link.
 */
function ProjectPage({
  n, eyebrow, title, slug, facts, problem, did, stats, image,
}: {
  n: number;
  eyebrow: string;
  title: string;
  slug: string;
  facts: [string, string][];
  problem: string;
  did: string[];
  stats: [string, string][];
  image: { src: string; alt: string; ar: number; caption?: string };
}) {
  const url = `${SITE}/work/${slug}`;
  return (
    <Page n={n}>
      <div className="flex h-full flex-col">
        <Header eyebrow={eyebrow} title={title} />

        <div className="pdf-row pdf-row-b mt-8 grid grid-cols-4 gap-10">
          {facts.map(([k, v]) => (
            <Fact key={k} label={k} value={v} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-[600px_1fr] gap-20">
          <div>
            <p className="pdf-eyebrow text-ink-quiet">The problem</p>
            <p className="pdf-body mt-3 text-ink-muted">{problem}</p>
            <p className="pdf-eyebrow mt-8 text-ink-quiet">What I did</p>
            <ul className="pdf-bullets pdf-body mt-3 text-ink-muted">
              {did.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end">
            <Shot src={image.src} alt={image.alt} ar={image.ar} maxW={960} maxH={380} caption={image.caption} />
          </div>
        </div>

        <div className="pdf-row mt-auto grid grid-cols-[1fr_1fr_1fr_auto] items-start gap-10 pb-6">
          {stats.map(([v, l]) => (
            <div key={l}>
              <p className="pdf-stat text-ink">{v}</p>
              <p className="pdf-small mt-2 max-w-[300px] text-ink-muted">{l}</p>
            </div>
          ))}
          <a href={`https://${url}`} className="pdf-link mt-2">
            <span className="arrow" aria-hidden>
              <ArrowIcon />
            </span>
            <span className="pdf-small text-ink">
              Full case study<span className="text-ink-quiet"> · {url}</span>
            </span>
          </a>
        </div>
      </div>
    </Page>
  );
}
