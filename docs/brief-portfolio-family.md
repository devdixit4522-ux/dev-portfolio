# Brief: Portfolio, Case Study System family

Status: **draft, awaiting Dev's approval** · 2026-10-12 · branch `family-restyle`

## 1. Job and audience

- **Who:** HR and recruiters, design leads, and hiring managers, arriving from LinkedIn or a job application.
- **Mode:** the homepage is *Experience* (the work leads and the interface recedes). About is *Read*.
- **First ten seconds:** see Groww and BookMyShow as real screens on their own tints, know who Dev is in one or two lines, and see that AI concept projects follow.

## 2. Outcome and proof

- **Success:** the visitor opens a case study, and the jump from the homepage to the case study doesn't feel like changing websites.
- **Proof on the page:** real product screens from the two case studies (the same images their heroes use). Nothing else is presented as evidence.
- **Product truth:** no claim goes on the site unless Dev has confirmed it (see §7, placeholders).

## 3. Direction

**Visual authority:** the Case Study System v1.0, pinned. No new world.

**Thesis:** *the homepage is a row of doors, and each door is the case study's own hero, shrunk.* Each project card is a tinted panel showing the three-screen cascade from that case study's hero, with the same tint recipe and the same screens. Clicking it feels like walking into a room you've already seen through the doorway.

### Shared layer (identical on every page, portfolio and case studies)

- **Tokens:** one `tokens.css` holding every colour, type size, spacing step, radius, shadow and easing, with the three breakpoint overrides. Both sides read it (§7).
- **Type:** Nimbus Sans 400 and 700. The same scale: 38/31/25 H1, 28/24/18 H2, 18/16/16 body. Title Case labels, no uppercase, no tracking.
- **Surfaces:** `#fcfcfc` page, `#f4f5ef` panel (8px radius), `#fff` card (16px radius, only on a panel).
- **Frame:** 30px gutter (24px on phone), 1680px maximum width, breakpoints at 1200 and 810.
- **Rhythm:** 64px to a panel, 80px between sections (64 and 40 on smaller screens). Space only, no lines or bands.
- **Motion:** a 600ms fade and 14px rise, once per block; 180ms colour changes on hover; off under reduced motion.
- **Focus:** 2px black ring, 3px offset.
- **Nav (new, also added to the system):** the same component on every page (below).
- **Footer:** one grey 14px line above a hairline: `Dev Dixit · Product designer · devdixit.fun` (Groww's footer already has this shape).

### The nav (Dev's three-part structure, rebuilt in the system's materials)

```
Dev Dixit              ( Work | About | Contact ▾ )             Resume   LinkedIn
```

- **Left:** "Dev Dixit", 14px ink, linking home. The grey "Portfolio" chip goes.
- **Centre:** a pill-shaped switcher on panel beige `#f4f5ef`. The current page sits on a white segment, the system's "white card on a beige panel" rule at small scale. **Text labels instead of icons**, because icon-only items make a hiring reader guess.
- **Contact:** opens a small white card (16px radius, the system's one allowed floating-card shadow `0 4px 52px rgba(0,0,0,.1)`) under the item, holding email (with a Copy action), LinkedIn and Resume as plain rows. It opens on hover **and** on click, tap and keyboard focus, and closes on Escape, on clicking outside, and when the pointer leaves after a short delay. It appears instantly, or with a 180ms fade; it never slides.
- **Right:** Resume and LinkedIn, 14px, grey, turning ink on hover.
- **Behaviour:** fixed to the top as it is today, on a solid `#fcfcfc` background. **The frosted blur goes.** On case studies the contents rail's sticky top moves down by the nav height.
- **Phone (≤809px):** name on the left, switcher centred under it or kept as three short words. No hamburger, no full-screen menu. Resume and LinkedIn move into the Contact card.
- **System change:** this reverses rule 1 ("no navigation bar") and §18 ("no sticky header"). The change goes into the RULEBOOK, components.html and the stylesheet together, as **v1.1**, and both case studies get it at once.

### Portfolio-only layer (deliberately different)

- **Homepage is a stack, not a column.** Full-width project panels between the gutters, with no 850px reading column, no contents rail and no facts strip.
- **Project card:** tinted panel → under it, the H2 (product · project name), a one-sentence lede (the case study's own lede, shortened only with Dev's approval), and a grey line `Type · Status` from that study's facts strip. The whole card is one link. On hover the "Read case study" text goes from grey to ink over 180ms. No lift, no scale, no arrow sliding in.
- **Card tint check (done):** rendered side by side, the two tints read as two distinct pale rooms (mint and blush) on a neutral page. They work. Groww's glow is heavier (20% against BookMyShow's 10%). Keep each recipe exact, because matching the case study hero matters more than matching each other. The cards are **stacked, one per row**, never side by side, so the two tints never compete and each screen gets full width.
- **AI concept projects:** the label "AI Concept Projects", one line of prose, then one beige panel of the system's *media cards* (3 columns: a 4:3 real screenshot with 16px corners, then a white card with name, one line and a link). The cards are all the same height, and the panel holds three to six of them.
- **About:** a reading page that uses the case study's own grammar (headline, lede, prose column, panels), because it's read top to bottom.

### Homepage hero: the three versions you asked to see

**A. Work-first, plain intro (my pick)**
```
[nav]
Hi, I'm Dev, a product designer in India.        ← H1 38px, one or two lines max
[one-line lede: what I work on]                  ← 18px body
                                                  (64px)
┌──────────── Groww tint ─────────────────────┐
│     ▯  ▯  ▯   three-screen cascade           │  ← visible in the first viewport at 1440×900
└─────────────────────────────────────────────┘
Groww · AI-assisted Start a SIP
Lede…  ·  Feature addition · Prototype, user tested       Read case study
                                                  (80px)
┌──────────── BookMyShow tint ────────────────┐ …
```
Why: the screens begin around 260px down at 1440×900, so a recruiter sees real work before scrolling. The intro is shaped like a case study hero (headline then lede), so it already feels like the case studies.

**B. Work-first, split intro**
```
[nav]
Hi, I'm Dev…  (left, ~420px)     ┌── Groww tint panel ──┐
lede                              │   ▯ ▯ ▯              │
                                  └──────────────────────┘
```
The intro shares the first row with the first card. More work shows above the fold, but Groww gets a bigger frame than BookMyShow and the order gets muddled. I'm keeping it as a backup only.

**C. Me prominent**
```
[nav]
┌ panel ───────┐   Hi, I'm Dev…                     ← portrait still on a beige panel, left
│  portrait    │   lede · short paragraph
└──────────────┘
(the work starts below the fold)
```
Honest cost: at 1440×900, no product screen appears without scrolling, which goes against "the work is the loudest thing". If you want your face on the site, it fits better at the top of About.

### Bridges (what makes homepage → case study feel continuous)

1. The card's tinted panel **is** the case study's hero panel: the same tokens, the same three screens, the same cascade.
2. The same nav, in the same place, on both sides.
3. The same footer line.
4. The same section label style ("AI Concept Projects", "Selected Work"…): Title Case, bold, 28px, no kicker.
5. The same beige panel and white card wherever a surface appears.
6. The same breakpoints, so both sides change layout at the same widths.

### Wireframes

**About**
```
[nav]
H1 headline (one sentence about how I work)          ← placeholder, Dev writes it
Lede
┌ panel ─── portrait still (optional) ─────────┐
└──────────────────────────────────────────────┘
How I Work           prose, 1–3 sentences
┌ hairline grid: 3–4 cells (icons optional) ───┐   ← placeholders
Experience           prose, or a hairline grid of roles  ← placeholder, needs real roles and dates
[footer line]
```

**Contact:** no page. It's the card that opens from the nav.

## 4. Scope and boundaries

- **In:** the homepage, About, the nav (including on both case studies), the footer, `tokens.css`, the font setup, and moving the case studies into this repo as static pages.
- **Untouched:** the live deployment, and the Case Study System folder until Dev approves the v1.1 change.
- **Anti-goals:** a homepage cloned from a case study page, a marquee, autoplay video, cursor effects, tilted mockups, glassmorphism, gradient blobs, a bento grid, hover lift, scroll-jacking, uppercase labels, any colour from one case study used site-wide.

## 5. States and ranges

- **Case studies:** 2 today. The layout must hold 1 to 6 (a stack scales; a grid would not).
- **AI projects:** 0 to 6. With 0, hide the section entirely; never show an empty panel. 1 or 2 projects use the same 3-column grid with empty columns, never stretched cards.
- **Contact card:** closed, open (hover, click or focus), and "Email copied" confirmation (the label changes to "Copied" for about 2s, no toast).
- **Long titles:** H2 balanced, two lines at most.

## 6. Interaction and layout

- **Breakpoints:** desktop ≥1200, tablet 810–1199, phone ≤809. Project panels use the case study hero ratios: 21:10, 7:4 and 100:86.
- **Hover:** colour only, 180ms. **Reveal:** the 600ms rise, once per block.
- **Keyboard:** Tab order is nav → cards → projects → footer. The Contact card is reachable and dismissable by keyboard.
- **Checks:** every page at 1440, 1000 and 390 wide, with reduced motion on, keyboard only, and at 200% zoom.

## 7. Technical direction

- **One source of tokens.** Create `public/system/tokens.css` (custom properties only, including the 1199px and 809px overrides). `app/globals.css` does `@import "../public/system/tokens.css"`, and Tailwind v4's `@theme inline` maps names to it (`--color-panel: var(--panel)`, `--color-ink: var(--ink)`, …). The case studies' `case-study.css` imports the same file. There is one file and no copies. The Groww page's **inline** copy of the stylesheet gets replaced with a link, which removes the drift found during research.
- **Where the system lives:** its canonical home moves into this repo (`public/system/`: tokens, `case-study.css`, `case-study.js`, fonts). The Desktop folder becomes the authoring and archive copy. *Open decision for Dev.*
- **Fonts:** Nimbus Sans through `next/font/local` from `public/system/fonts/` (converted to woff2), with `adjustFontFallback` so no Arial reflow shows. The case studies load the same files through `@font-face`. Cost: the font downloads once more when crossing from the portfolio to a case study, because Next.js serves its own hashed copy. That's acceptable.
- **Case studies stay static HTML**, under `public/work/groww/` and `public/work/bookmyshow/`, with a `rewrites` entry in `next.config.ts` so `/work/groww` serves `index.html`. *Why not React routes:* porting them would fork the system into a second implementation, and keeping the two in sync is exactly the drift problem.
- **The nav is in two places** (a React component, and plain HTML in the system's template), so it's specified once in components.html, and the visual check compares both.
- **Remove:** Google fonts, `/shadcn-preview`, `components/CaseStudies.shadcn.tsx`, `components/Marquee.tsx`, `public/bookmyshow.html` (an old, pre-system version), the masked hero video, lucide icons, and shadcn's unused badge, button and tooltip. Keep Radix only if the Contact popover uses it.
- **Branch:** `family-restyle`. Nothing gets deployed.

## Placeholders Dev must supply

1. The AI concept project list: name, one line, a real screenshot, and a link for each.
2. The homepage intro (H1 and lede). Draft lines will be marked `[placeholder]`.
3. About copy: headline, how you work, experience (roles and dates).
4. The correct email (the site shows `devdixit@gmail.com`), and the real resume and LinkedIn URLs (both are `#` or a generic link today).
5. Confirmation that the "Hebbia" line and Famli should go (assumed: both removed).
6. Whether the portrait stays on About.

## Open decisions

- Whether the system's canonical home moves into this repo (recommended), or tokens get synced from the Desktop folder by a script.
- Approving the system change to v1.1 (the nav on case studies).
