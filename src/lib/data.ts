export type Project = {
  index: string;
  slug: string;
  title: string;
  outcome: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "streak",
    title: "A 4-day streak that converts free users",
    outcome:
      "Designing a streak loop at ImagineArt that turns daily-credit habits into paid subscriptions, with a special discount earned at day 4.",
    tags: ["Growth", "Activation"],
    year: "2026",
  },
  {
    index: "02",
    slug: "e-commerce-odetobeauty",
    title: "Ode to Beauty",
    outcome:
      "A six-week redesign that made a skincare marketplace read as a brand. Task completion in testing went from 27% to 100%.",
    tags: ["B2C", "E-commerce"],
    year: "2024",
  },
  {
    index: "03",
    slug: "walters-hospitality",
    title: "Walter's Hospitality",
    outcome:
      "A twelve-month CRM that replaced spreadsheets, email and paper for planners, staff and every vendor type.",
    tags: ["B2B", "Hospitality"],
    year: "2023",
  },
  {
    index: "04",
    slug: "E-learning-management",
    title: "Advance Learning",
    outcome:
      "An online school for the Saudi Embassy. A shorter sign-up, a clearer dashboard, and the platform's first design system.",
    tags: ["B2C", "EdTech"],
    year: "2022",
  },
  {
    index: "05",
    slug: "xiangqi",
    title: "Xiangqi.com",
    outcome:
      "Two lobby redesigns for an online Chinese chess platform. Conversion went from 1.79% to 11%.",
    tags: ["B2C", "Entertainment"],
    year: "2021",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Tamim Rizvi",
    avatar: "/assets/testimonials/tamim.jpeg",
    role: "Design Engineer · ImagineArt",
    quote:
      "I had the pleasure of working alongside Hamza as a fellow product designer at ImagineArt. He was thoughtful in his design work and just as easy to collaborate with day to day. Projects always moved more smoothly when he was involved, and he had a way of making the work environment better for everyone around him.",
  },
  {
    name: "Natalia Wojcik",
    avatar: "/assets/testimonials/natalia.png",
    role: "Product · Harvard",
    quote:
      "Hamza worked on the product design for Xiangqi, repeatedly exhibiting great problem-solving skills under time pressure. He is creative, a strong communicator, and continually advocates for the best end design and user experience.",
  },
  {
    name: "Sannan Ahmad Bhatti",
    avatar: "/assets/testimonials/sannan.jpeg",
    role: "UI/UX, Product Designer · Arbisoft",
    quote:
      "I worked with Hamza at Arbisoft on the Walter's Hospitality project. His design skills are amazing and he is a thorough professional. I have learned a lot under his guidance.",
  },
  {
    name: "Eman Irfan",
    avatar: "/assets/testimonials/eman.png",
    role: "UX Design · Carbonteq",
    quote:
      "Hamza has been a spectacular manager and mentor. He not only taught me a lot, but also empowered me to take ownership of my work and grow with confidence. Hamza creates a safe space to question, challenge, and make mistakes.",
  },
  {
    name: "Maheen Iram",
    avatar: "/assets/testimonials/maheen.png",
    role: "Product Designer",
    quote:
      "Hamza is a highly skilled UX/UI designer, an exceptional professional and mentor. I admire his instinct to continuously improve workflows and solve customer problems, and his deep knowledge of human-interface design across platforms.",
  },
  {
    name: "Anas Usman",
    avatar: "/assets/testimonials/anas.avif",
    role: "Software Engineer",
    quote:
      "The session on User Experience kept me engaged throughout. I was riveted to find all the aspects that are part of UX, especially those related to product management. There were so many different components to cover, but each was well explained with great visuals and examples.",
  },
];
