// What's real and what's a placeholder: docs/content-status.md
import siteJson from "@/public/system/site.json";

/** Name, email and links. Shared with the case studies' nav (scripts/sync-nav.mjs). */
export const site = siteJson;

export const hero = {
  // Kept from the previous site, as Dev asked. The Hebbia line is unconfirmed.
  lines: [
    "Dev is a product designer based in India.",
    "He combines user needs, business goals, and technology to turn ambiguous ideas into products.",
    "Right now he's at Hebbia, building the leading AI platform for finance.",
  ],
};

export type CaseStudy = {
  slug: string;
  href: string;
  product: string;
  project: string;
  headline: string;
  lede: string;
  /** From the case study's facts strip */
  meta: string[];
  /** The three hero screens, in the case study's order */
  screens: string[];
  heroLabel: string;
  /** The case study's six brand tokens, copied from its <style id="page"> block */
  brand: {
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
    lede: "Everyone I interviewed who started a SIP had someone say it was fine. This puts that go-ahead inside Groww.",
    meta: ["Feature addition", "Prototype, user tested"],
    screens: [
      "/work/groww/hero-1.webp",
      "/work/groww/hero-2.webp",
      "/work/groww/hero-3.webp",
    ],
    heroLabel:
      "Three screens from the design: the guide card above Groww's fund list, the guide sentence filled in, and the investment plan showing ₹13,000 a month with two funds",
    brand: {
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
    lede: "BookMyShow is an app people in India use to book movie tickets. It also sells tickets to comedy shows, concerts and sports, which I'll call Events. Most people never see them. I redesigned how the app helps people discover Events.",
    meta: ["Product designer", "Figma, Cursor"],
    screens: [
      "/work/bookmyshow/assets/hero-home.png",
      "/work/bookmyshow/assets/movie-detail-also.png",
      "/work/bookmyshow/assets/fork-events-row.png",
    ],
    heroLabel:
      "Three screens from the redesign: a homepage with equal Movies and Events entry points, a movie page with nearby events, and an events row",
    brand: {
      "--hero-1": "#fef2f4",
      "--hero-2": "#feecef",
      "--hero-3": "#f7f4fb",
      "--hero-glow": "rgba(235, 0, 40, 0.1)",
    },
  },
];

export type AiProject = {
  id: string;
  name: string;
  line: string;
  /** Real screenshot in /public/images; placeholders have none */
  image?: string;
  link?: string;
  placeholder: boolean;
};

/** Placeholders until Dev sends the real list (docs/content-status.md) */
export const aiProjects: AiProject[] = [
  { id: "p1", name: "Project name", line: "One line on what it is and what it tried.", placeholder: true },
  { id: "p2", name: "Project name", line: "One line on what it is and what it tried.", placeholder: true },
  { id: "p3", name: "Project name", line: "One line on what it is and what it tried.", placeholder: true },
];

/** Claude's draft, a placeholder until Dev rewrites it */
export const about = {
  headline: "I design by finding out what people actually need",
  lede: "I'm Dev, a product designer in India. I start with interviews, test with prototypes, and only keep what the evidence supports.",
  principles: [
    {
      title: "Talk to people first",
      text: "Before I design, I interview the people who'll use it. On Groww, 12 of 15 people I spoke to needed someone to say it was fine before starting a SIP.",
    },
    {
      title: "Prototype to learn",
      text: "I build working prototypes early, so testing is about real behaviour, not opinions.",
    },
    {
      title: "Drop what doesn't hold up",
      text: "I keep a record of the designs I rejected and why. They're in every case study.",
    },
  ],
  experience: [
    { role: "[Role]", company: "[Company]", years: "[Year–Year]" },
    { role: "[Role]", company: "[Company]", years: "[Year–Year]" },
  ],
  tools: "Figma, Cursor",
};
