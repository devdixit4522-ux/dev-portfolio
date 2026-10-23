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
  /** Said in place of the link when there's no public one to give (e.g. a phone app) */
  noLink?: string;
  /** Real screens, for projects without live art: phones stand side by side, a web page sits alone */
  screens?: { src: string; alt: string; w: number; h: number }[];
  shape?: "phone" | "web";
  /** Kept in the list but left off the site, e.g. while the project isn't finished */
  hidden?: boolean;
  /** How many of the screens the homepage-sized tile shows; all of them if unset */
  tileScreens?: number;
  /** Its cover: the project's own colour as the field (sampled from its screens), and whether type on it is light or dark */
  cover: { field: string; glow: string; ink: "light" | "dark"; url?: string };
  /** Its own launch video, shown whole as a silent loop where the project has one (cut from Dev's launch videos) */
  video?: { src: string; poster: string; w: number; h: number };
};

/** Every AI project, shown or not. Only the ones not marked `hidden` appear on the site (labProjects). */
const allLabProjects: LabProject[] = [
  {
    slug: "step-repeat",
    video: { src: "/videos/lab/step-repeat.mp4", poster: "/videos/lab/step-repeat.webp", w: 720, h: 406 },
    cover: { field: "#f0ece4", glow: "#ffffff", ink: "dark", url: "step-repeat-delta.vercel.app" },
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
    link: "https://step-repeat-delta.vercel.app",
  },
  // The three below come from each project's own docs and Dev's resume; screens are real captures
  {
    slug: "repgate",
    // Dev's call (2026-10-22): off the site until RepGate is finished
    hidden: true,
    cover: { field: "#0c0c0e", glow: "#ff8a4c", ink: "light" },
    name: "RepGate",
    line: "Ten push-ups before the apps you want less of.",
    kind: "An Android app.",
    about:
      "Pick the apps you want to use less. When you open one, RepGate asks for 10 push-ups first, counted through the front camera. Half reps don't count. Everything stays on the phone: no account, no internet and no paywall.",
    can: [
      { verb: "Gate", what: "Any app you choose, 10 push-ups an open" },
      { verb: "Count", what: "Real reps through the camera, never half reps" },
      { verb: "Track", what: "Push-ups paid, scrolls skipped and days kept" },
      { verb: "Exit", what: "An emergency exit, so it never traps you" },
    ],
    facts: [
      { label: "Year", value: "2026" },
      { label: "Built with", value: "Kotlin, Jetpack Compose, CameraX and MediaPipe Pose" },
      { label: "Tested", value: "19 half reps rejected, 20 of 20 app opens caught" },
    ],
    noLink: "Android, shown live in class",
    shape: "phone",
    screens: [{ src: "/images/lab/repgate-home.webp", alt: "RepGate's home screen: 20 push-ups all time, and YouTube, Calendar and Airbnb gated at 10 per open", w: 600, h: 1285 }],
  },
  {
    slug: "kept",
    video: { src: "/videos/lab/kept.mp4", poster: "/videos/lab/kept.webp", w: 576, h: 720 },
    cover: { field: "#5989fa", glow: "#9db8ff", ink: "light" },
    name: "Kept",
    line: "A habit tracker you share with one person.",
    kind: "A web app for two.",
    about:
      "A private tracker is easy to drop, because nobody notices when you stop. Kept is shared with exactly one person: you each log your own progress, see the other's and keep one streak together. It installs on an Android phone straight from the browser.",
    can: [
      { verb: "Log", what: "A workout, a run, study hours or a job hunt, in seconds" },
      { verb: "Share", what: "One streak for the two of you, kept when either logs" },
      { verb: "Nudge", what: "Your partner, once they've been quiet for two days" },
      { verb: "Cheer", what: "A live note when they log, with one reaction" },
    ],
    facts: [
      { label: "Year", value: "2026" },
      { label: "Built with", value: "Next.js and Supabase" },
      { label: "Works on", value: "Android phones, installed from the browser" },
    ],
    // no live link until Kept is finished (Dev, 2026-10-22)
    noLink: "Still being built",
    shape: "phone",
    tileScreens: 1,
    screens: [
      { src: "/images/lab/kept-dev.webp", alt: "Kept's home screen on Dev's phone: a 7-day shared streak and today's habits", w: 458, h: 990 },
      { src: "/images/lab/kept-aarav.webp", alt: "The same shared streak on his partner's phone, with their own progress", w: 458, h: 990 },
    ],
  },
  {
    slug: "namegenius",
    video: { src: "/videos/lab/namegenius.mp4", poster: "/videos/lab/namegenius.webp", w: 720, h: 406 },
    cover: { field: "#7a4be5", glow: "#b49bff", ink: "light", url: "name-genius-theta.vercel.app" },
    name: "NameGenius",
    line: "Brand names that come with a reason.",
    kind: "An AI naming tool.",
    about:
      "Answer four questions about your brand, including what the name must not sound like. NameGenius comes back with five names, each with the reason behind it, and checks live whether the domains are still free.",
    can: [
      { verb: "Brief", what: "Four questions, plus an anti-brief of what to avoid" },
      { verb: "Name", what: "Five names, each with its reasoning" },
      { verb: "Check", what: "Live domain checks across .com, .in, .co and more" },
      { verb: "Keep", what: "Star and copy names, then claim a free domain" },
    ],
    facts: [
      { label: "Year", value: "2026" },
      { label: "Built with", value: "Node.js and the Gemini API" },
      { label: "Used by", value: "Early testers" },
    ],
    link: "https://name-genius-theta.vercel.app",
    shape: "web",
    screens: [{ src: "/images/lab/namegenius-home.webp", alt: "NameGenius's landing page: Find a name worth building, with two example names and their domains", w: 1200, h: 1080 }],
  },
];

export const labProjects = allLabProjects.filter((p) => !p.hidden);


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
  /** Things Dev designed and built alone, from the resume. Each opens its page in the AI section (labProjects). */
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
      name: "Kept",
      kind: "Web app",
      years: "Sep – Oct 2026",
      text: "A habit tracker you share with one partner: one shared streak, and a Nudge when they go quiet. I wrote the PRD too.",
      stack: "Next.js, Supabase",
      href: "/lab/kept",
      cta: "See the project",
    },
    {
      name: "NameGenius",
      kind: "Web app",
      years: "Sep – Oct 2026",
      text: "AI brand naming with an “anti-brief” filter and live domain checks. Used by early testers.",
      stack: "Gemini API",
      href: "/lab/namegenius",
      cta: "See the project",
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
