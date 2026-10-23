# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People hiring a product designer: HR and recruiters, design leads, and hiring managers. They arrive from LinkedIn or a job application and give the site seconds before deciding whether to read further. In that time they should see Dev's two case studies (Groww, BookMyShow) and know that AI concept projects follow.

## Product Purpose

Dev Dixit's portfolio site, served at devdixit.fun. It gets a hiring reader from "who is this" to reading a case study, and it has to feel like the same hand made the homepage and the case studies.

## Positioning

The case studies are built on Dev's own Case Study System: a fixed, documented format with one stylesheet, rules and components. The portfolio belongs to that family as a sibling, laid out for scanning and picking, while the case studies are laid out for reading.

## Operating Context

- Case studies live outside this repo today, as static HTML:
  - Groww, AI-assisted Start a SIP: `C:\Users\91790\Desktop\case studies\Groww\case-study-draft\groww-case-study-v10.html`
  - BookMyShow, Events discovery: `C:\Users\91790\Desktop\case studies\bookmy show\case-study-portfolio-v2-system.html`
- The visual authority is `C:\Users\91790\Desktop\case studies\Groww\case-study-system\` (README, RULEBOOK, template).
- A production version is live on Vercel. This folder is the local copy, and work happens on a branch.

## Capabilities and Constraints

- Next.js 16 App Router, Tailwind v4, TypeScript.
- Pages: Home (the work) and About. The nav's Work link scrolls to the work on the homepage, and the name always goes home. There's no Contact page: a Contact button on the right of the nav opens a card with the email, LinkedIn and Resume.
- Light only. No dark mode. The homepage's AI section is dark by design (see Brand Commitments); that is not a dark mode.

## Brand Commitments

- The Case Study System is binding: Nimbus Sans in 400 and 700, warm neutrals, beige panels with white cards, rationed colour, space-only rhythm, quiet motion.
- The portfolio has no accent colour of its own. Colour arrives only with a project (its hero tint).
- One warm neutral of its own, chosen by Dev on 2026-10-14: **sand**, taken from the blanket in the intro video (`--sand-1` to `--sand-deep` in `tokens.css`). It ties the hero to the work in small touches only: the email underline, a highlighter on each project's finding, the line above its facts, and the "Listen to walkthrough" button. It never goes on a project's visual. Dev rejected a sand panel behind the text and a full sand section.
- One exception, chosen by Dev on 2026-10-13: the AI work lives in the dark. Since 2026-10-21 (Dev's choice) the homepage shows it as a gateway card, the last row after the case studies: it feels like a chat app's empty screen ("Step into the lab.", a prompt that types itself, a send button) and says what's behind the door without listing the projects. It opens `/lab`, where each project's real screen is shown clearly. Characters are only ever the background: a texture that drifts and ripples under the cursor, behind the card and the whole of `/lab`. Dev rejected characters as the main picture (2026-10-21). Before that, the homepage ended in a full dark section, described here: "AI experiments and products" is a full-width warm graphite section (`--night`, #121211) with a clean top edge and one slow cool light in the corner, which sets the AI work apart from the case studies. The mood is soft futuristic, after Linear and Apple. Scrolling in, the content comes into focus, and past 40% the page glides the rest of the way. The nav and footer turn dark with it. Keep it to this one section and its project pages: each AI project opens a single dark page at `/lab/<slug>` (chosen by Dev on 2026-10-20), with the project as the banner, a short description and a link out. Not a case study.
- Dev likes the three-part nav: name on the left, a centred page switcher, a Contact button on the right that opens a card.
- First-person, plain, factual voice.

## Evidence on Hand

- Two finished case studies (above), with real product screens.
- AI projects: STEP/REPEAT, a generative typography tool (source: `C:\Users\91790\Desktop\letter-grid`); RepGate, an Android app (`AndroidStudioProjects\RepGate`); Kept, a habit tracker for two (`Desktop\tracker app`); NameGenius, an AI naming tool (`Desktop\name genius`).
- Portrait photo and video: `public/images/hero-portrait.png` and `.mp4`.
- Contact, confirmed by Dev: email `devdixit4522@gmail.com`, LinkedIn `linkedin.com/in/devdixit4522`. The old `devdixit@gmail.com` was wrong.
- Not verified, so it must not be reused without confirmation: the Famli project and its "28%" outcome. The old "Hebbia" line was Shaun Tan's copy and is gone.

## Product Principles

1. The work is the loudest thing. Real screens lead, and nothing competes with them.
2. Only what's true. No invented numbers, logos, testimonials or results.
3. Siblings, not twins. The same materials as the case studies, with a layout fitted to each page's job.
4. Prefer removing an element to restyling it.

## Accessibility & Inclusion

The Case Study System §17 applies: a visible 2px black focus ring with 3px offset, reduced motion turns every animation off, it works at 200% zoom, and anything that opens on hover also opens on focus and tap.
