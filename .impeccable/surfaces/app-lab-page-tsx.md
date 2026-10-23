---
version: 1
slug: "app-lab-page-tsx"
primary_target: "app/lab/page.tsx"
related_targets: ["components/home/LabRow.tsx"]
---

# Surface: AI work (homepage gateway card + /lab Glyph room)

Mode: Experience. Visitors: recruiters and design leads who just passed the two case studies; seconds of attention. Job: see that Dev ships real things with AI, and enjoy poking at them. Action: open a project page (/lab/<slug>) or its live link.

Content: labProjects in lib/content.ts (STEP/REPEAT, RepGate, Kept, NameGenius), their real screens in public/images/lab/. No invented claims. Untouched: /lab/<slug> pages, case studies.

## Direction contract

THESIS: A door, not a list. The homepage card is set like a chat app's empty screen, a greeting and a prompt that types itself, and says only that AI-made products are inside; /lab then shows each project's real screen, clear, inside a terminal-voiced page. Characters are the room's texture, never the picture. Refuses the card grid, the case-study row and type-as-image.

OWN-WORLD: Card: warm chat dark (#262624 panel, #30302e composer, #faf9f5 ink, #d97757 send), Source Serif 4 greeting, Nimbus body. /lab: --night #121211, one cool light, JetBrains Mono for prompts and commands, Nimbus 700 for project names. Both: a faint field of warm-white characters behind everything, thickening and rippling at the cursor.

STORY: See a door that invites a prompt; press send; arrive in a room that reacts to your cursor; look at the real screens; open one, or type a command.

FIRST VIEWPORT: Card: centred greeting, 640px composer, note line, texture behind. /lab: `# AI experiments and products.`, `ls` with four links, then two real screens side by side on desktop (one column on phones), command line at the end.

FORM: ascii live-scene render (catalog challenger medium-native-ascii-live-scene-render), chosen over the dealt structures (cartridge shelf, workbench desk, try-it playground); seed:beb9b7808ca79461

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Signature interaction: the background texture gathers and ripples around the pointer, on the card and across /lab; the card's prompt types itself once. Reduced motion: still texture, prompt already typed.
Open decisions: none. Fonts: JetBrains Mono (Dev, 2026-10-21); Source Serif 4 for the greeting (2026-10-21, to read as a chat app). Revised after Dev's feedback 2026-10-21: characters as the main picture rejected.
