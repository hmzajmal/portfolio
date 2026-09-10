/**
 * Shared project catalog. Consumed by the Featured Works section on the
 * home page and by the "next case studies" strip at the bottom of each
 * case study page.
 */

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  /** Background tint (color, gradient, etc.) for the image container. */
  bgColor: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "streak",
    title: "ImagineArt Streak",
    subtitle:
      "A 4-day retention loop that turns daily free-credit users into paid subscribers.",
    image: "/work/streak/after.png",
    tag: "Consumer AI",
    bgColor: "#EEF0F5",
  },
  {
    slug: "imagineart-captions",
    title: "ImagineArt Captions",
    subtitle:
      "An auto-captioning utility that became the highest-intent front door into the video suite.",
    image: "/work/captions/mode-select.jpg",
    tag: "Consumer AI",
    bgColor: "#E8ECF1",
  },
  {
    slug: "e-commerce-odetobeauty",
    title: "Ode to Beauty",
    subtitle:
      "Turning a skincare marketplace into a real brand — task completion up from 27% to 100%.",
    image: "https://framerusercontent.com/images/eGR4KuR0q88MHZ7lUo57VN0f40.png",
    tag: "E-commerce",
    bgColor: "#F7ECE7",
  },
  {
    slug: "walters-hospitality",
    title: "Walter's Hospitality",
    subtitle:
      "A twelve-month CRM redesign that replaced spreadsheets and email chains with one vendor system.",
    image: "https://framerusercontent.com/images/YB0WaAIttTvz40J4JU1UvyNL4SI.jpeg",
    tag: "B2B CRM",
    bgColor: "linear-gradient(135deg, #F6D6C4 0%, #F1C2B0 55%, #E7A990 100%)",
  },
  {
    slug: "E-learning-management",
    title: "Advance Learning",
    subtitle:
      "An online-school redesign for the Saudi Embassy that closed the signup drop-off on the first review.",
    image: "https://framerusercontent.com/images/w2gJrmcYaQyhjQT4TqiVQVD2UI.gif",
    tag: "EdTech",
    bgColor: "#E9EFE9",
  },
];
