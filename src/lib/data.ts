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
      "Designing a streak loop at Imagine.art that turns daily-credit habits into paid subscriptions, with a special discount earned at day 4.",
    tags: ["Growth", "Activation"],
    year: "2026",
  },
  {
    index: "02",
    slug: "e-commerce-odetobeauty",
    title: "Premium Skincare Store",
    outcome:
      "A polished e-commerce platform curated for skincare lovers in Pakistan, featuring Western brands and intelligent product selection by skin type and concerns.",
    tags: ["B2C", "E-commerce"],
    year: "2024",
  },
  {
    index: "03",
    slug: "walters-hospitality",
    title: "CRM Event Management",
    outcome:
      "Walter's Hospitality is an event-management company that organises a wide range of events.",
    tags: ["B2B", "Hospitality"],
    year: "2023",
  },
  {
    index: "04",
    slug: "E-learning-management",
    title: "Designing an Interactive Edtech Platform",
    outcome:
      "Advance Learning Platform is an online school that provides a personalised learning experience to students.",
    tags: ["B2C", "EdTech"],
    year: "2022",
  },
  {
    index: "05",
    slug: "xiangqi",
    title: "Bringing an Ancient Board Game to Life",
    outcome:
      "An ancient board game similar to Chess. Players can register for free, chat, and play against other players.",
    tags: ["B2C", "Entertainment"],
    year: "2021",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Natalia Wojcik",
    role: "Product · Harvard",
    quote:
      "Hamza worked on the product design for Xiangqi, repeatedly exhibiting great problem-solving skills under time pressure. He is creative, a strong communicator, and continually advocates for the best end design and user experience.",
  },
  {
    name: "Eman Irfan",
    role: "UX Design · Carbonteq",
    quote:
      "Hamza has been a spectacular manager and mentor. He not only taught me a lot, but also empowered me to take ownership of my work and grow with confidence. Hamza creates a safe space to question, challenge, and make mistakes.",
  },
  {
    name: "Maheen Iram",
    role: "Product Designer",
    quote:
      "Hamza is a highly skilled UX/UI designer, an exceptional professional and mentor. I admire his instinct to continuously improve workflows and solve customer problems, and his deep knowledge of human-interface design across platforms.",
  },
];
