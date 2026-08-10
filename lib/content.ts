export const site = {
  name: "Dev Dixit",
  email: "devdixit@gmail.com",
  resumeUrl: "#",
  linkedinUrl: "https://www.linkedin.com/",
  hero: {
    lines: [
      "Dev is a product designer based in India.",
      "He combines user needs, business goals, and technology to turn ambiguous ideas into products.",
      "Right now he's at Hebbia, building the leading AI platform for finance.",
    ],
  },
  marqueeWords: [
    "Research",
    "Strategy",
    "Systems",
    "Prototyping",
    "AI Products",
    "Craft",
  ],
};

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  outcomes: { value: string; label: string; detail: string }[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "famli",
    title: "Famli App",
    description:
      "Simplified a family wealth management app by turning complex financial data into clear, intuitive experiences.",
    tags: ["B2C", "0→1", "Fintech"],
    image: "/images/famli-preview.png",
    imageAlt: "Famli App phone mockup with purple airplane",
    outcomes: [
      {
        value: "28%↑",
        label: "Decisions Made",
        detail:
          "Users completed key financial decisions 28% more often after the redesign simplified the decision flow.",
      },
      {
        value: "User Trust",
        label: "& Clarity",
        detail:
          "Plain-language summaries replaced raw financial jargon, so people understood what their money was doing at a glance.",
      },
      {
        value: "User Control",
        label: "& Guidance",
        detail:
          "Contextual nudges gave users just enough guidance to act confidently, without taking the decision out of their hands.",
      },
    ],
    href: "#",
  },
];

export const explorationsIntro = {
  titleLead: "A safe space for ideas,",
  titleScript: "explorations",
  titleTail: "and side quests",
  meta: "interactions · icons · visuals · motion · AI · coding",
  note: "ship it? maybe. learn? always.",
};

export type ExplorationVariant =
  | "quote"
  | "browser"
  | "arcade"
  | "icons"
  | "dock"
  | "stats";

export type Exploration = {
  id: string;
  /** Optional preview screenshot in /public/images. Falls back to the styled variant. */
  image?: string;
  imageAlt?: string;
  variant: ExplorationVariant;
  tags: string[];
  link?: string;
};

/** Swap these for your real experiments — drop a screenshot in /public/images and set `image`. */
export const explorations: Exploration[] = [
  {
    id: "shader",
    variant: "quote",
    tags: ["Shader exploration", "WebGL"],
  },
  {
    id: "codekarma",
    variant: "browser",
    tags: ["Website design", "Visual direction", "Illustrations"],
    link: "codekarma.ai",
  },
  {
    id: "tarcade",
    variant: "arcade",
    tags: ["Solitaire", "Classic games"],
    link: "tarcade.vercel.app",
  },
  {
    id: "iconography",
    variant: "icons",
    tags: ["Custom iconography", "Icon animation"],
  },
  {
    id: "dock",
    variant: "dock",
    tags: ["Interaction", "Micro-UX"],
  },
  {
    id: "typing",
    variant: "stats",
    tags: ["Typing game", "Motion"],
    link: "keys.vercel.app",
  },
];
