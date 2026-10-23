---
name: Dev Dixit, product designer
description: A light, rationed portfolio built on the Case Study System, with the AI work as its one dark exception, entered through a chat-screen door and set as a terminal room.
colors:
  page: "#fcfcfc"
  panel: "#f4f5ef"
  card: "#ffffff"
  ink: "#000000"
  body: "#2b2b2b"
  soft: "#4c4c4c"
  mute: "#8f8f8f"
  hair: "rgba(0, 0, 0, 0.1)"
  bubble: "#ececea"
  sketch: "#2a66d0"
  sand-1: "#f4ede4"
  sand-2: "#eadfd1"
  sand-3: "#dccbb8"
  sand-ink: "#6e5b48"
  sand-deep: "#3f3328"
  brand-default: "#04b488"
  night: "#121211"
  night-sheet: "#161615"
  night-ink: "rgba(255, 255, 255, 0.92)"
  night-soft: "rgba(255, 255, 255, 0.62)"
  night-mute: "rgba(255, 255, 255, 0.45)"
  night-hair: "rgba(255, 255, 255, 0.1)"
  night-fill: "rgba(255, 255, 255, 0.08)"
  night-fill-on: "rgba(255, 255, 255, 0.14)"
  glyph-ink: "rgb(240, 236, 228)"
  cool-light: "rgba(150, 170, 255, 0.2)"
  gate-bg: "#262624"
  gate-box: "#30302e"
  gate-ink: "#faf9f5"
  gate-soft: "#b7b5ab"
  gate-line: "rgba(222, 220, 209, 0.15)"
  gate-send: "#d97757"
  gate-send-hover: "#c6613f"
typography:
  display:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 2.7vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "25px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  row-title:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.7vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.36
    letterSpacing: "-0.02em"
  card-title:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  card-text:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0"
  ui:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0"
  hand:
    fontFamily: "Caveat, Segoe Print, cursive"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "0"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  greet:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(28px, 3vw, 40px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  prompt:
    fontFamily: "Nimbus Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
rounded:
  small: "6px"
  panel: "8px"
  browser: "10px"
  card: "16px"
  composer: "20px"
  pill: "999px"
spacing:
  tight: "16px"
  gutter: "30px"
  panel-gap: "64px"
  nav-h: "68px"
  inset: "80px"
  section: "80px"
  block: "140px"
  read: "850px"
  page-max: "1260px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-sand:
    backgroundColor: "{colors.sand-2}"
    textColor: "{colors.sand-deep}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  button-sand-hover:
    backgroundColor: "{colors.sand-3}"
  nav-switch:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.pill}"
    padding: "4px"
  nav-item:
    textColor: "{colors.soft}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "30px"
  nav-item-current:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
  nav-contact:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "38px"
  nav-contact-hover:
    backgroundColor: "{colors.bubble}"
  contact-card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
    padding: "8px"
    width: "288px"
  project-tile:
    rounded: "{rounded.panel}"
  gateway-card:
    backgroundColor: "{colors.gate-bg}"
    textColor: "{colors.gate-ink}"
    rounded: "{rounded.panel}"
    padding: "72px 32px"
  gateway-composer:
    backgroundColor: "{colors.gate-box}"
    textColor: "{colors.gate-ink}"
    typography: "{typography.prompt}"
    rounded: "{rounded.composer}"
    padding: "18px 16px 12px 20px"
    width: "640px"
  gateway-send:
    backgroundColor: "{colors.gate-send}"
    textColor: "{colors.card}"
    rounded: "{rounded.panel}"
    size: "32px"
  gateway-send-hover:
    backgroundColor: "{colors.gate-send-hover}"
  lab-shot:
    backgroundColor: "{colors.night-sheet}"
    rounded: "{rounded.browser}"
  command-line:
    textColor: "{colors.night-ink}"
    typography: "{typography.mono}"
  command-chip:
    textColor: "{colors.night-soft}"
    rounded: "{rounded.small}"
    padding: "0 12px"
    height: "32px"
  lab-open:
    backgroundColor: "{colors.card}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
---

# Design System: Dev Dixit, product designer

## Overview

**Creative North Star: "The Case Study Family, with One Night Room"**

The site is a sibling of Dev's Case Study System, not a separate brand. Every value comes from one file (`public/system/tokens.css`), read by both the static case studies and the React portfolio, so a homepage row and a case-study page are visibly made by the same hand. The light world is quiet and rationed: an off-white page, beige panels holding white cards, near-black type in two weights of Nimbus Sans, and no accent colour of the portfolio's own. Colour arrives only with a project, as that case study's own hero tint. One warm neutral, sand, ties the intro video to the work in small touches.

There is exactly one exit from the light: the AI work. On the homepage it is the last work row, a door rather than a list: a warm dark card set like the empty screen of the chat app the work was made with. A serif greeting, "Step into the lab.", sits over a composer whose prompt types itself; the whole card is one link to `/lab` and names no project. Behind the door lies warm graphite night, set as a terminal session: each project's real screen shown clearly on a dark sheet, a `cat` prompt above it, a working command line at the end. Characters are the texture, not the picture: a faint field of type drifts behind both the door and the room and gathers around the pointer. One slow cool light sits in a corner of the night. This is not a dark mode; it is one room and its door.

Density is low, motion is quiet and always optional. Reduced motion stills every animation and gives instant, visible end states.

**Key Characteristics:**
- One token file feeds both the case studies and the portfolio; Tailwind reads it through `@theme inline`.
- Light, warm-neutral surfaces; beige panels, white cards, near-black type.
- Nimbus Sans in 400 and 700 only; Caveat for blue hand notes; JetBrains Mono only in the AI work (the /lab terminal and the glyph field); Source Serif 4 only for the gateway's greeting.
- No portfolio accent: colour comes with a project; sand appears only in small touches.
- The AI work is the single dark room (`--night`), a terminal session showing real screens, entered from a chat-screen gateway card with its own scoped palette; a faint glyph field moves behind both.
- Flat by default; one floating shadow, one device shadow, one frosted surface (the nav).

## Colors

Warm, low-chroma neutrals with colour rationed to the work itself, plus one night palette reserved for the AI room and one scoped gateway palette for the homepage AI card.

### Primary
- **Pure Ink** (`ink`): headings, the leading black pill button, the focus ring, the current-state text. The system's only "accent" is full black.

### Secondary
- **Blanket Sand** (`sand-1` to `sand-deep`): taken from the blanket in the intro video. `sand-3` underlines the intro email and draws the rule above each project's facts; `sand-2` is the highlighter under each project's finding and the "Listen to walkthrough" button; `sand-ink` labels the facts (5.9:1 on `sand-1`); `sand-deep` is text on `sand-2`.

### Tertiary
- **Hand-Note Blue** (`sketch`): Caveat annotations and their drawn arrows, around the intro video and the About portrait. Darkened to reach 4.5:1 on panels.
- **Project Brand** (`brand-default`, overridden per case study with `--brand`, `--brand-ink`, `--hero-1..3`, `--hero-glow`): a project's tile gradient and its brand dot. The only colour that changes from project to project.

### Neutral
- **Paper White** (`page`): the page ground.
- **Beige Panel** (`panel`): panels, the nav switcher and Contact pill, the photo desk.
- **Card White** (`card`): cards on panels, the switcher's current segment, the contact card.
- **Body Graphite** (`body`): running text.
- **Soft Graphite** (`soft`): secondary text, nav items at rest, captions.
- **Mute Grey** (`mute`): the quiet second half of a two-tone statement.
- **Hairline** (`hair`): borders and inputs.
- **Bubble** (`bubble`): hover fill on beige pills, image placeholders, text selection.

### Night (the AI room only)
- **Warm Graphite Night** (`night`): the ground of `/lab` and `/lab/<slug>`; the nav and its pills turn to night fills while it is under them.
- **Night Sheet** (`night-sheet`): the sheet one step lighter than the night that holds each project's screen on `/lab`, laid at 86% so the glyph field shows faintly through, with a `night-hair` inset line.
- **Night Ink / Soft / Mute** (`night-ink`, `night-soft`, `night-mute`): white at 92%, 62% and 45%: primary text, secondary text, and prompts and hints.
- **Night Hair / Fill / Fill-On** (`night-hair`, `night-fill`, `night-fill-on`): rules between terminal lines, dashed dividers, chip borders; resting and pressed pill fills.
- **Glyph Warm White** (`glyph-ink`): the colour of every character in the glyph field, drawn faint (about 7% at rest, up to about 50% where the pointer gathers it; 85% of that on `/lab`).
- **Cool Light** (`cool-light`): the one slow light in the corner of the night on `/lab`.

### Gateway (the homepage AI card only)
Scoped as custom properties on `.gate`, quoting the chat screen the work was made with.
- **Gate Ground** (`gate-bg`): the card's warm dark panel.
- **Gate Composer** (`gate-box`): the message box, one step lighter.
- **Gate Ink / Soft** (`gate-ink`, `gate-soft`): the greeting and typed prompt; the model label, the `+` icon and the note line.
- **Gate Line** (`gate-line`): the 1px border of the composer and the `+` square, doubling to 30% on the composer when hovered.
- **Send Clay** (`gate-send`, `gate-send-hover`): the send square (at 45% until the prompt finishes typing) and the greeting's sparkle; it deepens on hover.

### Named Rules
**The Colour Comes With the Work Rule.** The portfolio has no accent of its own. Hue appears only inside a project's tile, from that case study's own tokens, and in the gateway's send clay, which belongs to the chat screen the card quotes.

**The Sand Touch Rule.** Sand is an underline, a highlighter, a rule or a button. It never fills a panel, a section or a project visual.

**The One Night Rule.** `--night` belongs to the AI work only: `/lab` and `/lab/<slug>`. It is not a theme and there is no dark mode.

**The Gateway Rule.** The `gate-*` palette and the serif greeting live only on the homepage AI card. They never leak into `/lab` or the light world.

## Typography

**Display Font:** Nimbus Sans (with Helvetica Neue, Helvetica, Arial)
**Body Font:** Nimbus Sans (same stack)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Consolas), AI work only; Caveat (with Segoe Print) for hand notes; Source Serif 4 400 (`--greet`, via next/font) for the gateway's greeting only

**Character:** A neo-grotesk in two weights, set tight (negative tracking grows with size), does almost all the work; a handwritten blue note marks annotations; a monospace face speaks only in the AI work; one serif line greets at its door.

### Hierarchy
- **Display** (400 with 700 emphasis, `clamp(1.625rem, 2.7vw, 2.5rem)`, 1.1): the two-tone statement, ink then mute. The homepage intro runs a step smaller (`clamp(1.5rem, 2.4vw, 2.125rem)`).
- **Headline** (700, 34px desktop / 31px tablet / 25px phone, 1.1): section titles at the case studies' h1 size; a `/lab/<slug>` project name.
- **Title** (700, 25px / 24px / 18px): titles inside a section.
- **Row title** (700, `clamp(1.375rem, 1.7vw, 1.625rem)`, 1.15): a homepage project's headline, kept to about 22 characters a line. Its finding sits below at 19px with the sand highlighter.
- **Body** (400, 17px / 16px, 1.36 / 1.26): running text; the reading measure is 850px desktop, 600px tablet.
- **Card title / card text** (700 17px; 400 15px): names and descriptions inside cards and project blocks.
- **Label** (400, 12px, 0 tracking): fact labels in sand-ink. Nav and controls use 13 to 14px with 0 tracking.
- **Hand** (Caveat 500, 20px / 19px, 1.05): blue notes only.
- **Mono** (JetBrains Mono 400/700, 15px, 1.6, 0 tracking; 14px on phones): every `/lab` terminal line, prompt and command; the room's title runs 700 at `clamp(18px, 1.7vw, 24px)`. The glyph field draws the face on canvas at 12px.
- **Greet** (Source Serif 4 400, `clamp(28px, 3vw, 40px)`, 1.15, -0.01em): the gateway's "Step into the lab." only, with a clay sparkle before it.
- **Prompt** (Nimbus 400, 17px, 1.5, -0.01em): the gateway's self-typing prompt. The model label is 13px, the note 14px, both `gate-soft`.

### Named Rules
**The Two Weights Rule.** Nimbus Sans is 400 or 700, nothing between.

**The One Mono Rule.** JetBrains Mono appears only in the AI work: the `/lab` terminal and the characters of the glyph field. The gateway card itself speaks Nimbus and its serif greeting, and a project's own name is Nimbus Sans 700 even inside the terminal, so the work keeps the family's voice.

## Layout

One frame for every page and the nav: content up to 1200px plus 30px gutters each side (`--page-max`, 24px gutters on phones), centred. Three layouts: phone (default), tablet from 810px, desktop from 1200px; Tailwind exposes them as `tablet:` and `desktop:`. Rhythm is spacing: 140px between a page's big blocks (112px tablet, 80px phone), 80px between case-study sections, 64px around panels, 16px tight pairs. The nav is fixed at 68px and pages start below it.

Homepage project rows split picture and text evenly (64px gap) on desktop and stack below 1200px; the picture is a 3:2 tile. The intro is a 5:6 text-to-video grid that stacks on phones.

The gateway card is one centred column (at least 460px tall, 72px by 32px padding; 380px and 48px by 16px on phones): greeting, then the composer up to 640px wide 32px below (24px on phones), then the note 18px below. `/lab` opens with the title, prompt and `ls`, then project blocks two across on desktop (72px by 56px gaps) and one column below (88px gaps, 64px on phones); each block is a `cat` prompt over a 4:3.2 screen sheet (4:3.4 on phones). A working command line closes the page 112px below, above a dashed rule.

## Elevation & Depth

Flat by default. Depth comes from tone (white card on beige panel, night sheet on night, composer on gateway) rather than shadow. Each shadow has one job; the frosted nav is the only backdrop-blurred surface.

### Shadow Vocabulary
- **Floating card** (`box-shadow: 0 4px 52px rgba(0, 0, 0, 0.1)`): the contact card and the About polaroids.
- **Device** (`box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.14)`): phone screens inside a project tile.
- **Tile lift** (`box-shadow: 0 24px 48px -24px rgba(0, 0, 0, 0.22)`): a project tile lifts 4px under a fine pointer.
- **Night screen** (`box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 24px 60px rgba(0, 0, 0, 0.5)`): real screenshots on a dark sheet on `/lab/<slug>`.
- **Screen sheet** (`box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1)`): the hairline round each `/lab` screen sheet; no drop.
- **Composer** (`box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25)`): the gateway's message box.

### Named Rules
**The One Frost Rule.** The nav's frosted pane (24px blur, fading downwards) is the only translucent surface in the system.

**The Type Is the Texture Rule.** Characters are a background, never the picture. The glyph field fills its card or sits fixed behind the page, unframed, untouchable (`pointer-events: none`, `aria-hidden`) and faint: sparse drifting bands at rest, thickening and rippling only near the pointer. Each project's real screen is shown clearly, on its own sheet.

## Shapes

Gently rounded rectangles and full pills. Panels, project tiles and the gateway card take 8px; browser frames, `/lab` screen sheets and the `/lab/<slug>` banner 10px; floating cards 16px; the gateway composer 20px, with its `+` and send squares at 8px (they are drawings inside one link, not controls). Every control is a pill (999px): buttons, the nav switcher and its segments, the Contact button, Copy, the night room's open link. Small chips, the skip link and polaroids use 6px. Faces and dots are circles. Borders are 1px hairlines and appear only inside lists (fact rows, terminal output lines); the night room uses a dashed hairline to divide a project's meta and to set off the command line.

## Components

### Buttons
Pills, quiet and confident; black leads, sand follows.
- **Shape:** full pill (999px), 44px tall in a row's actions.
- **Primary:** ink on white text, 20px side padding, 14px Nimbus 400, an arrow that slides 4px right on hover.
- **Sand:** `sand-2` with `sand-deep` text; `sand-3` on hover and while pressed (its speaker waves pulse while it talks).
- **Night:** the `/lab/<slug>` open link is a 48px white pill with night text and 700 weight; on hover it softens to `night-ink`. Disabled, it becomes a night-fill pill in 400.
- **Press:** buttons give to 0.97 scale when pressed (motion permitting).

### Chips
- **Style:** the night room's command chips are 32px, 6px radius, a `night-hair` border, mono 13px in `night-soft`.
- **State:** hover turns the text white and the border `night-soft`. A click runs the command in the prompt above.

### Cards / Containers
- **Corner Style:** 8px for panels and tiles, 16px for the floating contact card.
- **Background:** white cards on beige panels; project tiles carry their case study's hero gradient (two radial lights over a three-stop linear tint).
- **Shadow Strategy:** see Elevation; tiles are flat until hovered.
- **Border:** none.
- **Internal Padding:** 8px for the contact card with 10px by 12px rows.

### Inputs / Fields
- **Style:** the only text field is the night room's command line: borderless, transparent, mono, white text with a block caret, placeholder in `night-mute`, preceded by the `dev@lab:~$` prompt as its label.
- **Focus:** 2px white outline with 3px offset.

### Navigation
Name left (14px, 700), a centred page switcher (beige panel, 4px padding, 30px pill segments in `soft`; the current page on a white segment that slides between Work and About), and a beige Contact pill on the right that opens the white contact card on hover, click, tap or focus. Every control has an invisible touch area at least 44px tall. Over the night room the name turns white, the switcher and Contact become `night-fill`, and the current segment `night-fill-on`. On phones all three parts stay.

### Gateway Card (signature)
The homepage's last work row, a door rather than a list, set like a chat app's empty screen. A `gate-bg` panel (8px radius) with the glyph field behind; the whole card is one link to `/lab` (2px black focus ring, 3px offset). Centred: a clay sparkle and the serif greeting "Step into the lab."; a `gate-box` composer (up to 640px, 20px radius, `gate-line` border, composer shadow) whose prompt "Show me what Dev built with AI" types itself once when first seen (45ms a character) behind a 2px bar caret; under it a bar with a bordered `+` square, the "Claude Code · Cursor" label with a chevron, and the clay send square (45% until typing ends, `gate-send-hover` on hover); then a soft note line. It names no project. Reduced motion: the prompt is already typed and the caret still.

### Glyph Field (signature)
A texture of characters on canvas, in JetBrains Mono 12px and `glyph-ink`, from the ramp ` .:-=+*#%@`. Two slow crossing waves print only their crests, so at rest it is sparse, faint drifting bands. It floats on water: a 2D wave simulation (one cell per character, damping 0.982) that only movement disturbs. A dragged pointer dents the surface along its path, deeper the faster it moves, leaving a wake; ripples spread, cross, reflect off the edges and calm. Crests add lighter characters, troughs clear them, and each character slides along the local slope. Water never prints past `*`, so it stays a background. Scope `parent` fills the gateway card; scope `page` sits fixed behind all of `/lab` (at 85% strength). A tap drops one ripple; it stops off screen and once calm; reduced motion holds it still.

### Screen Sheet
Each `/lab` project's real screen, shown clearly: a 4:3.2 sheet (4:3.4 on phones), 10px radius, `night-sheet` at 86% with a hairline inset. Phones and web screens come from the project's own images; STEP/REPEAT shows its live engine. On hover the screens rise 6px and brighten slightly. Below it, a dashed rule, the project name in Nimbus 700, its line in `night-soft`, and underlined `open` and live-app links.

### Project Row
The light world's signature: a 3:2 hero-gradient tile with three phones, beside a row title, a finding with the sand highlighter, a 15px soft description, three facts above a `sand-3` rule, and the black and sand pill buttons. On scroll it rises and opens like a window; on hover it lifts.

## Do's and Don'ts

### Do:
- **Do** take every value from `public/system/tokens.css`; change it there and log it in `public/system/CHANGES.md`.
- **Do** keep Nimbus Sans to 400 and 700, with tracking tightening as size grows (-0.01em small, -0.02em body, -0.03em to -0.04em titles) and 0 on controls and mono.
- **Do** let colour arrive only through a project's own tokens (`--brand`, `--hero-1..3`, `--hero-glow`).
- **Do** keep sand to underlines, highlighters, rules and one button.
- **Do** keep every control a pill at least 44px tall to a finger, and the focus ring a visible 2px outline with 3px offset (black on light, white on night).
- **Do** open on focus and tap anything that opens on hover.
- **Do** turn every animation off under reduced motion, leaving the end state visible.
- **Do** keep JetBrains Mono inside the AI work (the `/lab` terminal and the glyph field), and set project names there in Nimbus Sans 700.
- **Do** keep the `gate-*` palette and the serif greeting scoped to the homepage gateway card.
- **Do** show each AI project's real screen clearly, and keep characters as a faint background behind it.

### Don't:
- **Don't** add a dark mode or take `--night` outside the AI work.
- **Don't** give the portfolio an accent colour, or put sand on a panel, a full section or a project visual.
- **Don't** use a Nimbus weight other than 400 or 700, a mono face outside the AI work, or the serif anywhere but the gateway's greeting.
- **Don't** add a second translucent, backdrop-blurred surface; the frost belongs to the nav (the night's blurred cool light is a light, not a surface).
- **Don't** draw a project's picture in characters, or let the glyph field grow loud enough to compete with the screens; it stays a faint texture that only gathers near the pointer.
- **Don't** list projects on the gateway card; it is a door, and `/lab` names them.
- **Don't** give the terminal window-chrome dots or green phosphor; its glyphs are warm white on warm graphite.
- **Don't** invent numbers, results, logos or testimonials anywhere on a surface.
