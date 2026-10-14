// What's real and what's a placeholder: docs/content-status.md
import siteJson from "@/public/system/site.json";

/** Name, email and links. Shared with the case studies' nav (scripts/sync-nav.mjs). */
export const site = siteJson;

export type CaseStudy = {
  slug: string;
  href: string;
  product: string;
  project: string;
  headline: string;
  /** The homepage row's two lines: the finding (highlighted, the bigger one) and what I did.
   *  Groww's are Dev's own wording; BookMyShow's are its case study's lede, split in two */
  finding: string;
  rest: string;
  /** Shown after "Project" (the product) in the homepage row */
  facts: { label: string; value: string }[];
  /** The real prototype that plays inside the middle screen on hover */
  loop: string;
  /** Read aloud, with captions, by "Listen to the walkthrough" */
  say: string;
  /** The three hero screens, in the case study's order */
  screens: string[];
  /** One finished image that replaces the three screens in the homepage tile. With it, hover plays nothing */
  cover?: string;
  heroLabel: string;
  /** The case study's brand tokens, copied from its <style id="page"> block */
  brand: {
    "--brand": string;
    "--hero-1": string;
    "--hero-2": string;
    "--hero-3": string;
    "--hero-glow": string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "groww",
    href: "/work/groww",
    product: "Groww",
    project: "AI-assisted Start a SIP",
    headline: "The missing step between opening Groww and starting a SIP",
    finding: "First-time investors often rely on someone else's reassurance before taking the first step.",
    rest: "I designed an AI-assisted guide to help users move from a financial goal to a clearer understanding of their first SIP.",
    facts: [
      { label: "Focus", value: "SIP onboarding" },
      { label: "Scope", value: "UX research + prototype" },
    ],
    loop: "/work/groww/loop.html",
    say: "This is the real prototype. A first-time investor types what they're saving for, the guide fills in the sentence, and Groww suggests two funds at thirteen thousand rupees a month.",
    screens: [
      "/work/groww/hero-1.webp",
      "/work/groww/hero-2.webp",
      "/work/groww/hero-3.webp",
    ],
    cover: "/work/groww/cover.webp",
    heroLabel:
      "Three screens from the design: the guide card above Groww's fund list, the guide sentence filled in, and the investment plan showing ₹13,000 a month with two funds",
    brand: {
      "--brand": "#04b488",
      "--hero-1": "#e6f6ee",
      "--hero-2": "#d9f1e6",
      "--hero-3": "#e4f0f7",
      "--hero-glow": "rgba(4, 180, 136, 0.2)",
    },
  },
  {
    slug: "bookmyshow",
    href: "/work/bookmyshow",
    product: "BookMyShow",
    project: "Events discovery",
    headline: "Improving Event Discovery for BookMyShow",
    finding: "Most people never see the comedy shows, concerts and sports BookMyShow sells.",
    rest: "I redesigned how the app helps them find Events.",
    facts: [
      { label: "Role", value: "Product designer" },
      { label: "Tools", value: "Figma, Cursor" },
    ],
    loop: "/work/bookmyshow/tap-peek.html",
    say: "This is the real prototype. Tapping an event card opens a preview sheet, so people can check out an event without losing the page they were browsing.",
    screens: [
      "/work/bookmyshow/assets/hero-home.png",
      "/work/bookmyshow/assets/movie-detail-also.png",
      "/work/bookmyshow/assets/fork-events-row.png",
    ],
    // 16:9, so the 3:2 tile trims a little off each side; the phone sits in the middle
    cover: "/work/bookmyshow/cover.webp",
    heroLabel:
      "Three screens from the redesign: a homepage with equal Movies and Events entry points, a movie page with nearby events, and an events row",
    brand: {
      "--brand": "#eb0028",
      "--hero-1": "#fef2f4",
      "--hero-2": "#feecef",
      "--hero-3": "#f7f4fb",
      "--hero-glow": "rgba(235, 0, 40, 0.1)",
    },
  },
];

/** Hand notes around the homepage video. Claude's wording, placeholders until Dev rewrites them */
export const heroNotes = {
  laptop: "where the case studies get made",
  // the word joiner keeps "deep-work" on one line
  socks: "socks on: deep-⁠work mode",
  blanket: "this blanket gave the site its sand colour",
};

export type SideQuest = {
  id: string;
  name: string;
  line: string;
  /** Real screenshot in /public/images; placeholders have none. Also the video's poster */
  image?: string;
  /** Short muted loop of the thing working, shown instead of the screenshot */
  video?: string;
  link?: string;
  placeholder: boolean;
};

/** AI experiments and products. Placeholders until Dev sends the real list (docs/content-status.md) */
export const sideQuests: SideQuest[] = [
  { id: "p1", name: "Project name", line: "One line on what it is and what it tried.", placeholder: true },
  { id: "p2", name: "Project name", line: "One line on what it is and what it tried.", placeholder: true },
  { id: "p3", name: "Project name", line: "One line on what it is and what it tried.", placeholder: true },
];


/**
 * About page. Claude's draft, a placeholder until Dev rewrites it (docs/content-status.md).
 * Every fact comes from the case studies; the jokes are Claude's and are Dev's to keep or cut.
 */
export const about = {
  /** Hand notes around the portrait, in the case studies' annotation style */
  notes: {
    head: "Dev Dixit. Product designer, based in India.",
    bag: "Figma and Cursor live in here",
    shoe: "Will walk you through any flow",
  },
  receipts: [
    {
      claim: "I talk to people first.",
      proof: "For Groww, I interviewed 15 people. 12 said they needed someone's go-ahead before starting a SIP, so the design gives them one.",
      href: "/work/groww#evidence",
      cta: "See the interviews",
    },
    {
      claim: "I prototype to learn.",
      proof: "The BookMyShow redesign is a working prototype. I tested it with 3 people across 3 tasks, and the case study says what still needs testing.",
      href: "/work/bookmyshow#testing",
      cta: "See the testing",
    },
    {
      claim: "I keep what didn't make it.",
      proof: "Groww's case study shows two designs I rejected, and why.",
      href: "/work/groww#ruled-out",
      cta: "See the rejects",
    },
  ],
  experience: [
    { role: "[Role]", company: "[Company]", years: "[Year–Year]" },
    { role: "[Role]", company: "[Company]", years: "[Year–Year]" },
  ],
  /** Photos from outside work. Only the first is real; Dev sends the rest. */
  photos: [
    { id: "office", src: "/images/hero-still.jpg", alt: "Dev on a bed with a laptop, a mug and a notebook", caption: "This counts, right?" },
    { id: "photo-2", caption: "[Your caption]" },
    { id: "photo-3", caption: "[Your caption]" },
    { id: "photo-4", caption: "[Your caption]" },
  ] as { id: string; src?: string; alt?: string; caption: string }[],
};
