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
- Pages: Work (home), About. Contact is a small menu in the nav, not a page.
- Light only. No dark mode.

## Brand Commitments

- The Case Study System is binding: Nimbus Sans in 400 and 700, warm neutrals, beige panels with white cards, rationed colour, space-only rhythm, quiet motion.
- The portfolio has no accent colour of its own. Colour arrives only with a project (its hero tint).
- Dev likes the three-part nav: name on the left, a centred page switcher, contact links on the right.
- First-person, plain, factual voice.

## Evidence on Hand

- Two finished case studies (above), with real product screens.
- AI concept projects: real ones exist, but Dev hasn't supplied the list yet. The six on the current site are drawn placeholders and must not ship as real work.
- Portrait photo and video: `public/images/hero-portrait.png` and `.mp4`.
- Not verified, so it must not be reused without confirmation: the "Hebbia" employment line, the Famli project and its "28%" outcome, and the email `devdixit@gmail.com`.

## Product Principles

1. The work is the loudest thing. Real screens lead, and nothing competes with them.
2. Only what's true. No invented numbers, logos, testimonials or results.
3. Siblings, not twins. The same materials as the case studies, with a layout fitted to each page's job.
4. Prefer removing an element to restyling it.

## Accessibility & Inclusion

The Case Study System §17 applies: a visible 2px black focus ring with 3px offset, reduced motion turns every animation off, it works at 200% zoom, and anything that opens on hover also opens on focus and tap.
