# Changelog

A plain-English record of changes to this portfolio. Newest entries go at the top.

## 2026-10-15: Real email and LinkedIn

**Branch:** `master` · deployed

- **Email** is now `devdixit4522@gmail.com`. The old one, `devdixit@gmail.com`, came from the old site and was wrong.
- **LinkedIn** now opens Dev's profile (`linkedin.com/in/devdixit4522`) instead of LinkedIn's homepage.
- Both change everywhere at once: the nav contact card, the homepage, About's "Say hi", the footer, and both case studies.
- The resume link still goes nowhere. Dev will send it later.

Files: `public/system/site.json`, both `public/work/*/index.html` (nav re-synced), `docs/content-status.md`, `PRODUCT.md`.

## 2026-10-14: Smaller text everywhere, project cards top-aligned

**Branch:** `master` · deployed

- **Smaller text across the site**, to suit the narrower 1200px page. On a laptop:
  - Homepage intro: 44px to 34px (the words are unchanged).
  - Project titles: 44px to 34px. The highlighted line: 22px to 19px. The line under it: 16px to 15px. The facts and buttons are a size smaller too, and the buttons are 44px tall instead of 48px.
  - Section titles ("Selected work"): 38px to 34px. About's opening line: 44px to 40px. The big email in "Say hi": 76px to 60px. Hand notes: 22px to 20px.
  - Case studies, through the shared sizes: headings 38px to 34px and 28px to 25px, body text 18px to 17px, card text a size smaller.
  - Tablets and phones keep their own sizes, so they barely change.
- **Project cards are top-aligned.** The title now starts level with the top of the picture. Before, the text was centred next to it. While scrolling, the text still arrives a beat after the picture, then moves with it, so the two tops stay level.

Files: `public/system/tokens.css`, `app/globals.css`, `components/home/ProjectRow.tsx`, `public/system/CHANGES.md`.

## 2026-10-14: Narrower page

**Branch:** `master` · deployed

- The page is now at most 1200px wide, down from 1600px, plus the 30px side margins. This applies to the homepage, About, the nav, and both case studies.
- On big screens there's more empty space on each side. Laptops at 1260px wide or less look the same as before.

Files: `public/system/tokens.css`, `app/globals.css`, `public/system/CHANGES.md`.

## 2026-10-14: New version pushed to GitHub and made the main one

**Branch:** `master` · deployed by Vercel

- This folder is now linked to the GitHub repo `devdixit4522-ux/dev-portfolio`.
- The new design (everything from `family-restyle`) is now `master`, the main branch. Vercel builds the live site from it.
- The old site is kept on GitHub in a branch called `old-portfolio`, so it can come back if needed.

## 2026-10-14: BookMyShow cover, fuller card text, AI section hidden

**Branch:** `family-restyle` · not deployed

- **BookMyShow** now has a finished cover picture, like Groww: one phone on a pink cinema scene, filling the card edge to edge. The picture is a bit wider than the card, so a thin strip is trimmed off each side. Hovering it no longer plays the prototype, same as Groww.
- **Card text** on a laptop now runs to the right edge of its half. Before, the title and the highlighted line were evened out and stopped short.
- **AI experiments and products** is hidden for now, until the products and their pages are ready. The dark ending is gone with it. The homepage now ends on the light "Say hi" sign-off from About: the email, Copy, LinkedIn and Resume. The section's code is kept, so it can come back.

Files: `lib/content.ts`, `public/work/bookmyshow/cover.webp`, `app/page.tsx`, `app/globals.css`.

## 2026-10-14: Smaller pictures on the project cards

**Branch:** `family-restyle` · not deployed

- On a laptop, each project's picture now takes half the row instead of about 60%, and it's a little flatter (3:2 instead of 7:5). That's about 20% shorter. The text is unchanged.
- The space between the two projects is a little smaller, so on a 1440×900 screen the BookMyShow card now peeks in below Groww.
- The Groww cover is 3:2 itself, so its sides no longer get trimmed.
- On a laptop, the text now uses the full width of its half, so the titles take 2 lines instead of 3 and the Groww card is shorter too. On tablets and phones the text keeps its old line lengths.

## 2026-10-14: Work always scrolls, and Back returns to your place

**Branch:** `family-restyle` · not deployed

- **Work in the nav** now scrolls to the projects every time. Before, a second tap did nothing once the address already ended in `#work`.
- **Back from a case study** lands where you left the homepage:
  - The homepage remembers your place as you scroll, and on Back it puts you there while the page is still loading, before anything is drawn. So you never see it land somewhere else first. Opening the homepage fresh still starts at the top.
  - The glide into the dark AI section only answers your own scrolling from the last few seconds (wheel, finger, keys, scrollbar). The browser scrolling on its own can't set it off. Before, coming back could land you at the top of the AI section.

Files: `components/Navbar.tsx`, `components/home/IntoTheDark.tsx`, `components/home/ScrollMemory.tsx`, `app/page.tsx`, `app/layout.tsx`.

## 2026-10-14: Smoother card-to-case-study animation

**Branch:** `family-restyle` · not deployed

Tapping a project card grew it into the case study, but it stuttered. There were four causes, and each is fixed:

- **Different shapes.** The card is 7:5 and the case study's hero is 21:10, so both pictures were stretched while the shape changed. Now each is cropped instead.
- **Different pictures.** The Groww card's cover and the hero's three phones faded over each other. Now the card fades out early and the hero fades in through a slight blur.
- **Late start.** The Groww page is 842 KB, and the hero only got its link to the card at the very end of the file. Now the link is in the HTML, the page waits to draw until the hero is ready, and the hero screens are decoded before the first frame.
- **Page not ready.** Chrome and Edge now start building a case study in the background as soon as you hover or press its card.

Files: `public/system/shared.css`, both `public/work/*/index.html`, `app/layout.tsx`.

## 2026-10-14: Finer motion, and three new scroll moments

**Branch:** `family-restyle` · not deployed

- **Buttons** shrink very slightly when pressed. On "Read case study", only the arrow slides on hover now, so the button no longer changes width.
- **The Contact card** grows out of its button and closes a little faster than it opens. This is in the shared nav, so the case studies get it too (system v1.5 in `public/system/CHANGES.md`).
- **"Copy" to "Copied"** swaps with a quick soft blur, in the Contact card and in "Say hi".
- **"Listen to the walkthrough"**: the speaker's sound waves pulse while it's talking.
- **Project cards** lift a little under the mouse.
- **The Work / About highlight** slides between them instead of jumping.
- **Scroll:** the "Selected work" and "AI experiments and products" titles come into focus word by word. The project cards open like a window as they rise. "Say hi. Tell me what you're building." lights up grey to white, word by word, as you reach the end.
- Reduced motion turns all of it off.

## 2026-10-14: The homepage moves

**Branch:** `family-restyle` · not deployed

- **Opening:** your sentence comes into focus word by word, the bed video fades up out of soft focus, then three handwritten notes draw themselves on around it (the laptop, the socks, the blanket). About 2 seconds, once per visit to the page.
- **Scrolling:** the top drifts away, the video a little slower than the words. Each project card rises and settles as you scroll, and its text moves at a slightly different speed, so it feels layered. The phones inside the cards don't move.
- **Layout:** the top is a bit shorter, so "Selected work" shows at the bottom of the first screen.
- Reduced motion turns all of it off. Browsers without scroll-linked animation (Firefox today) keep the old soft fade.
- The three notes are Claude's words, placeholders in `lib/content.ts` (`heroNotes`).

## 2026-10-14: New picture on the Groww card

**Branch:** `family-restyle` · not deployed

- The Groww card on the homepage now shows Dev's three-phone image (`public/work/groww/cover.webp`) instead of the three separate screens.
- Hovering it no longer plays the prototype. "Listen to the walkthrough" still reads the description aloud with captions.
- BookMyShow's card is unchanged.

## 2026-10-14: The homepage ends with "Say hi"

**Branch:** `family-restyle` · not deployed

- The dark AI section now ends the way About does: "Say hi. Tell me what you're building.", your email in large white text with a Copy button, then LinkedIn and Resume.
- It reuses About's sign-off, so both stay the same. In the dark there's no blue hand note.
- A screen reader announces "Copied".
- "Selected work" above the projects is now a real heading, the same size as the other section titles. It was small grey text.
- Dropped: the "projects first" homepage idea. Its mockups stay in `docs/mockups/` (`home-work-first.html`, `home-work-first-bold.html`) and aren't published.

## 2026-10-14: Project card text, tightened

**Branch:** `family-restyle` · not deployed

- **Groww card, new words (Dev's):** the highlighted line is now "First-time investors often rely on someone else's reassurance before taking the first step." Under it: "I designed an AI-assisted guide to help users move from a financial goal to a clearer understanding of their first SIP."
- **Groww facts:** Project: Groww · Focus: SIP onboarding · Scope: UX research + prototype. On both cards the first fact is now called "Project".
- **"Play with sound" is now "Listen to the walkthrough".** It still plays the prototype and reads its description aloud.
- **Tidier text side:**
  - the headline wraps into even lines
  - the highlighted line no longer leaves one word alone on its last line
  - the facts sit in three lined-up columns, with a thinner line above them
  - both buttons are the same height (48px)
- **On phones,** the facts go two to a row, with Scope on its own line, and the buttons stack. Nothing scrolls sideways.

## 2026-10-14: Sand in the work, and clearer project cards

**Branch:** `family-restyle` · not deployed

- **The video's sand colour now carries down the page**, in small touches: the email underline, a highlighter over each project's main finding, the line above its facts, and the "Play with sound" button. The project pictures keep their own brand colours.
- **Project cards read in steps:** a bigger title, then the main finding in larger text, then the rest of the sentence, then a facts row (Product, plus Type and Stage or Role and Tools), then the buttons.
- A small dot in each project's colour sits by its name. "Read case study" has an arrow.
- The three options Dev compared are in `docs/mockups/work-sand.html`. Dev picked "Accents only".

## 2026-10-13: Fixes from the design review

**Branch:** `family-restyle` · not deployed

- **Dark section:**
  - It now lines up with the rest of the page on Windows, and the page no longer scrolls a few pixels sideways.
  - Its heading is one size smaller, so the case studies stay the biggest titles.
  - "Work" in the nav is no longer highlighted once you reach it.
  - When the nav turns dark, the Contact button no longer flashes.
- **Easier to read:**
  - The footer line on light pages is darker.
  - The blue hand notes are a touch darker everywhere, including the case studies.
- **Easier to tap:** nav and small text links have a bigger invisible touch area on phones. They look the same.
- **Contact card:**
  - Escape always closes it and puts you back on Contact.
  - If copying is blocked, the email gets selected for you instead.
- **About:** the claims under "How I work" are one size smaller than the section heading, and their arrows point → instead of ↗, since the links stay on the site.
- **Project rows:** keyboard users stop at the title and the buttons, not at the picture as well. The prototype still plays when they tab in.
- **Fixed: clicking a project didn't open it.** While the prototype played on hover, a click on the middle phone went into the prototype, so the case study didn't open and its grow animation never ran. Clicks now pass through to the tile.
- **Speed:**
  - The intro video is 0.5MB instead of 3.5MB and looks the same.
  - The dark section's scroll code does less work per frame.
- **Tidying:** the dark section's colours now live in the shared colour file (`tokens.css`).
- **Zoom:** big text follows the visitor's browser text size.
- **Not changed:** the sound button (Dev will fix it later) and the intro. A "projects first" version will be made separately.

## 2026-10-13: The homepage ends in the dark

**Branch:** `family-restyle` · not deployed

- The "AI zone" with the spinning rainbow lights is gone.
- In its place, "AI experiments and products" is a full-width dark section (warm graphite) at the end of the homepage, with a clean top edge.
- Scrolling in:
  - the heading and cards come into focus from a soft blur
  - once you're 40% of the way in, the page glides the rest of the way (0.85s) so the dark fills the screen; stop before that and nothing moves
  - the same works in reverse on the way out, and any scroll or tap cancels the glide
- One cool light circles slowly in the top corner and catches the top edge of each screenshot.
- Cards: screenshot or short muted video, name, one line, an arrow when there's a link, and a small lift on hover.
- The nav turns dark while you're in it, and the homepage footer is dark too. Other pages are unchanged.
- Copy: the heading is now "AI experiments and products", and "Ship it? Maybe. Learn? Always." is removed. The intro line stays.
- With reduced motion: no blur, no glide and no moving light; videos don't play on their own.
- PRODUCT.md records this section as the one place the portfolio leaves the light.
- Mockups that led here: `docs/mockups/side-quests-dark.html`, `side-quests-scroll.html`, `side-quests-scroll-edge.html` (the chosen one).

## 2026-10-13: Contact card is back, on the right

**Branch:** `family-restyle` · not deployed

- The right side of the nav is now one "Contact" button instead of the Resume and LinkedIn links. Hover, click, tap or keyboard opens a white card with your email (with Copy), LinkedIn and Resume.
- Same on every page, including both case studies.
- It also shows on phones, which couldn't reach Resume or LinkedIn from the nav before.
- One width for the whole site: content goes up to 1600px on every page, including the case studies, and the nav lines up with it (`--page-max` in `public/system/tokens.css`).

## 2026-10-12: New homepage live in the site, About redone, Contact menu gone

**Branch:** `family-restyle` · not deployed

- The approved homepage mockup is now the real homepage:
  - one sentence beside the big square video
  - the two project rows, which play the real prototype on hover and have "Play with sound"
  - the side quests in the "AI zone"
  - content held to 1200px wide
- The A/B intro versions are gone, and so is the "Hebbia" line, which was Shaun Tan's copy.
- Nav:
  - The Contact menu is removed.
  - "Work" now scrolls to the work on the homepage, from any page, and lights up while you're there.
  - "Dev Dixit" always takes you home, or back to the top if you're already there.
  - The case studies' nav got the same change.
- The footer now has the email, LinkedIn and Resume. Phones hide them in the nav, so this is where they find them.
- About page, redone with more personality (draft copy, see `docs/content-status.md`):
  - "Fig. 1": your walking portrait on a beige panel, annotated with the case studies' blue hand notes, which draw themselves in as you scroll.
  - "How I work, with receipts": three claims, each linked to the proof in a case study.
  - "Before this": experience, as placeholders.
  - "Away from Figma": a desk of photos you can drag around with a mouse. One is real; three are slots for your photos.
  - "Say hi": your email set big, with a Copy button.
- Loaded the system's hand-note font (Caveat) for the notes.
- The homepage mockup moved to `docs/mockups/home-v3.html`, so it won't be published.
- Checked at 1440, 1000 and 375/390 wide and with reduced motion. Lint, types and a production build pass.

## 2026-10-12: Portfolio rebuilt in the Case Study System family

**Branch:** `family-restyle` · not deployed

- New homepage. Version A (work first) is at `/`; version C (with the portrait video) is at `/?hero=video`.
- Each case study card shows that case study's own hero tint and three screens.
- AI Concept Projects section, with placeholder cards for now.
- New About page, using placeholder copy drafted by Claude.
- New nav with the frosted blur kept. It's built from shadcn's NavigationMenu, and Contact opens a small card.
- The footer is now one grey line.
- Both case studies now live in this repo at `/work/groww` and `/work/bookmyshow`, with the same nav.
- One shared source of values: `public/system/tokens.css`. The Nimbus Sans font is used everywhere.
- Removed: Google fonts, the word ticker, the old Famli card, the drawn side-quest previews, `/shadcn-preview`, and the old `public/bookmyshow.html`.
- Checked at 1440, 1000 and 390 wide, with reduced motion, and with the Contact card driven by keyboard. Lint and production build pass.

## 2026-10-12: Brief approved with changes

- Kept the frosted blur on the nav.
- Kept the portrait video as hero version C, to compare against version A.
- Homepage intro keeps the current lines.
- Added `docs/content-status.md`: what's real, what's a placeholder, and what Dev still needs to send.

## 2026-10-12: Restyle planning (no site changes)

**Branch:** `family-restyle`

- Studied the Case Study System and both case studies, and compared them with the current site.
- Added `PRODUCT.md`: who the site is for and the rules it must keep.
- Added `docs/brief-portfolio-family.md`: the plan for making the portfolio match the case studies. It's a draft waiting for approval.

## 2026-10-12: Project setup

**Branch:** `family-restyle`

- Turned the project into a git repository (`git init`).
- Saved every existing file as the first snapshot, "Initial commit" (`5027e8d`). This is the original version of the site to come back to.
- Created the `family-restyle` branch for the upcoming restyle.
- Added this `logs/` folder and changelog to keep track of changes.
