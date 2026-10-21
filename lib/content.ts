// What's real and what's a placeholder: docs/content-status.md
import siteJson from "@/public/system/site.json";

/** Name, email and links. Shared with the case studies' nav (scripts/sync-nav.mjs). */
export const site = siteJson;

export type CaseStudy = {
  slug: string;
  href: string;
  product: string;
  project: string;
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
    slug: "bookmyshow",
    href: "/work/bookmyshow",
    product: "BookMyShow",
    project: "Events discovery",
    finding: "BookMyShow's movie-first experience makes concerts, comedy shows and sports harder to discover.",
    rest: "I redesigned the discovery experience to help users find events without getting stuck in a movie-first journey.",
    facts: [
      { label: "Role", value: "Product designer" },
      { label: "Tools", value: "Figma · Cursor" },
    ],
    loop: "/work/bookmyshow/tap-peek.html",
    say: "This is the real prototype. Tapping an event card opens a preview sheet, so people can check out an event without losing the page they were browsing.",
    screens: [
      "/work/bookmyshow/assets/hero-home.webp",
      "/work/bookmyshow/assets/movie-detail-also.webp",
      "/work/bookmyshow/assets/fork-events-row.webp",
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
  {
    slug: "groww",
    href: "/work/groww",
    product: "Groww",
    project: "AI-assisted Start a SIP",
    finding: "First-time investors can struggle to decide how much to invest and where to begin.",
    rest: "I designed an AI-assisted onboarding flow that turns an investment goal into a clear starting amount and relevant fund categories.",
    facts: [
      { label: "Focus", value: "SIP onboarding" },
      { label: "Scope", value: "UX research · Product strategy · Prototyping" },
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
];

/** Hand notes around the homepage video. Claude's wording, placeholders until Dev rewrites them */
export const heroNotes = {
  laptop: "where the case studies get made",
  // the word joiner keeps "deep-work" on one line
  socks: "socks on: deep-⁠work mode",
  blanket: "this blanket gave the site its sand colour",
};

/**
 * AI experiments and products. Each one is a tile in the dark at the end of the homepage
 * and a single dark page at /lab/<slug>, not a case study.
 */
export type LabProject = {
  slug: string;
  name: string;
  /** The tile's one line */
  line: string;
  /** What kind of thing it is, under the name on its page */
  kind: string;
  about: string;
  can: { verb: string; what: string }[];
  facts: { label: string; value: string }[];
  /** The live project. Missing until it's online, so the page says it's coming */
  link?: string;
};

export const labProjects: LabProject[] = [
  {
    slug: "step-repeat",
    name: "STEP/REPEAT",
    line: "A generative type tool built on one grid.",
    kind: "A generative typography tool.",
    about:
      "Type a letter, a word or drop in an image. It's cut into a grid of square windows, each shifted a little more than the last, so the shape splits, echoes and comes back together. Start from a preset, drag on the art to push it, and take it away as a PNG, a link, a live website embed or a video loop.",
    can: [
      { verb: "Type", what: "A letter, a word, a sentence or an image" },
      { verb: "Distort", what: "Shift, squeeze, compress, twist and drift" },
      { verb: "Export", what: "PNG, a live website embed or a video loop" },
      { verb: "Share", what: "A link that rebuilds the exact composition" },
    ],
    facts: [
      { label: "Year", value: "2026" },
      { label: "Built with", value: "HTML, CSS, JavaScript and Canvas, no libraries" },
      { label: "Works on", value: "Desktop and phone" },
    ],
    // Dev is putting it on its own site and will send the address (docs/content-status.md)
  },
];


/**
 * About page. Every fact comes from the case studies or Dev's resume; the hand-note jokes
 * are Claude's and are Dev's to keep or cut (docs/content-status.md).
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
  /** From Dev's resume (public/Dev_Dixit_Resume.pdf) */
  experience: [
    { role: "Freelance Product Designer", company: "PrayagrajKumbhMela.com", years: "Dec 2024 – Jan 2025" },
    { role: "UI/UX Design Intern", company: "Campaign Studio", years: "Aug – Dec 2024" },
    { role: "B.Des, Product & Industrial Design", company: "Lovely Professional University", years: "2022 – 2026" },
  ],
  /** Things Dev designed and built alone. From the resume; links only where the project is public. */
  built: [
    {
      name: "STEP/REPEAT",
      kind: "Generative type tool",
      years: "2026",
      text: "Type a letter, a word or drop in an image, and it splits, echoes and comes back together on one grid.",
      stack: "HTML, CSS, JavaScript and Canvas",
      href: "/lab/step-repeat",
      cta: "See the project",
    },
    {
      name: "RepGate",
      kind: "Android app",
      years: "Sep – Oct 2026",
      text: "Puts 10 camera-counted push-ups between you and an app you chose to limit. The counter never over-counted: 48 real reps counted and 19 half reps rejected across 13 recordings.",
      stack: "Kotlin, Jetpack Compose, CameraX, MediaPipe Pose",
      cta: "Demoed live in class",
    },
    {
      name: "Kept",
      kind: "Web app",
      years: "Sep – Oct 2026",
      text: "A habit tracker you share with one partner: one shared streak, and a Nudge when they go quiet. I wrote the PRD too.",
      stack: "Next.js, Supabase",
      href: "https://kept-jet.vercel.app",
      cta: "Open Kept",
    },
    {
      name: "NameGenius",
      kind: "Web app",
      years: "Sep – Oct 2026",
      text: "AI brand naming with an “anti-brief” filter and live domain checks. Used by early testers.",
      stack: "Gemini API",
      href: "https://name-genius-theta.vercel.app",
      cta: "Open NameGenius",
    },
  ] as { name: string; kind: string; years: string; text: string; stack: string; href?: string; cta: string }[],
  /** Photos from outside work. Only the first is real; Dev sends the rest. */
  photos: [
    { id: "office", src: "/images/hero-still.jpg", alt: "Dev on a bed with a laptop, a mug and a notebook", caption: "This counts, right?" },
    { id: "photo-2", caption: "[Your caption]" },
    { id: "photo-3", caption: "[Your caption]" },
    { id: "photo-4", caption: "[Your caption]" },
  ] as { id: string; src?: string; alt?: string; caption: string }[],
};
