# Changelog

A plain-English record of changes to this portfolio. Newest entries go at the top.

## 2026-10-22: Kept's live app is no longer linked

**Branch:** `master` · deployed

- Kept isn't finished, so the site no longer links to its live app: "Open the live app" is gone from Kept on `/lab`, and its project page says "Still being built" instead of an Open button. Kept itself stays on the site (gallery, `/lab`, its page, About).
- The address is removed from the code entirely (`lib/content.ts`), so it isn't in the page source either.

Files: `lib/content.ts`.

## 2026-10-22: STEP/REPEAT is live, RepGate is off for now, no project counts

**Branch:** `master` · deployed

- **STEP/REPEAT is live on Vercel** at https://step-repeat-delta.vercel.app: the `v2` folder of `Desktop/letter-grid`, deployed as the Vercel project `step-repeat` (production). Its "Open the live app ↗" link on `/lab` and its project page's "Open STEP/REPEAT" button now go there.
- **RepGate is hidden** until it's finished: marked `hidden: true` in `lib/content.ts` (delete that line to bring it back). It's off the homepage gallery, `/lab`, the About list, and `/lab/repgate` no longer exists.
- **No counts in the copy**, since the number of projects will change: "Things I designed and built with AI, using Claude Code and Cursor." on the homepage card and `/lab`. The homepage gallery shows one column per project (up to four), so there's never an empty gap.
- **On `/lab`, STEP/REPEAT plays its short motion loop** ("Type one letter."); Kept and NameGenius keep their covers there. Everything else unchanged.

Files: `lib/content.ts`, `components/home/LabRow.tsx`, `components/lab/GlyphRoom.tsx`, `app/lab/page.tsx`, `app/globals.css`.

## 2026-10-22: /lab speaks plainly, terminal look kept

**Branch:** `master` · deployed

- The top of `/lab` was written in terminal code (`# heading`, `dev@lab:~$ ls`, `cat repgate`, "The room is listening."). The terminal look stays, but every line now reads on its own:
  - A plain heading, "AI experiments and products", and one sentence: "Four things I designed and built with AI, using Claude Code and Cursor. Each one has its own page with how it works."
  - "› Jump to" with the real project names (STEP/REPEAT, RepGate, Kept, NameGenius).
  - Each project opens with "› RepGate — an Android app" instead of `cat repgate`; under its cover, one sentence and the links "See how it works →" and "Open the live app ↗".
  - The command line at the end is introduced with "Prefer typing? Try a command."; its hint reads "type help, or open kept".
- Removed the "Move your cursor. The room is listening." line.

Files: `components/lab/GlyphRoom.tsx`, `app/globals.css`.

## 2026-10-22: The AI cards play one short moment of each launch video

**Branch:** `master` · deployed

- In the homepage artifact gallery, STEP/REPEAT, Kept and NameGenius now play a few seconds of their own launch videos instead of a still cover, on repeat, so the moment sticks:
  - **STEP/REPEAT** (2.8s): a solid "A" sliced into shifting windows, "Type one letter."
  - **Kept** (3.2s): "Unless one person does." while both partners tick off the week and the shared streak climbs 3, 4, 5, 6.
  - **NameGenius** (2.6s): "Five names. Each with a reason." as the five name cards land.
- Each video sits whole inside its card on a dark sheet, never cropped (Kept's portrait video stands tall in the middle), with a small "Live demo" tag. It plays only while on screen and stays on a still frame with reduced motion. Each loop is under 80 KB.
- RepGate keeps its cover for now; it has no launch video yet.
- Comparison pages kept in `docs/mockups/ai-covers-kept.html` (illustration vs icon vs motion; the illustration was made with Figma AI) and `docs/mockups/ai-covers-motion.html`.

Files: `components/lab/LabMotion.tsx` (new), `components/home/LabRow.tsx`, `lib/content.ts` (each project's `video`), `app/globals.css`, `public/videos/lab/*`.

## 2026-10-21: Designed covers for the AI projects

**Branch:** `master` · deployed

- The AI projects no longer show bare pasted screenshots. Each one has a cover, like an app store feature graphic, built only from its real screens: its own colour as the background (sampled from its screens), its name set large, and its screens in proper frames, tilted slightly and rising past the bottom edge.
  - **STEP/REPEAT:** the "DEV" proof on its own cream paper.
  - **RepGate:** its home screen in a phone, lit by its own orange from below.
  - **Kept:** both partners' phones, overlapping, on Kept's blue.
  - **NameGenius:** its landing page in a browser window with its real address, on its violet.
- Used on the homepage artifact cards and on `/lab`. Covers lift on hover. At small sizes the browser address turns into a plain pill instead of unreadable text.

Files: `components/lab/LabCover.tsx` (new), `components/home/LabRow.tsx`, `components/lab/GlyphRoom.tsx`, `lib/content.ts` (each project's `cover` colours), `app/globals.css`.

## 2026-10-21: The AI card is an artifact gallery

**Branch:** `master` · deployed

- You turned down the chat-and-panel version, so the gateway card is now set like a chat app's artifact gallery: the serif title "Dev's artifacts", "Four things I designed and built with AI, using Claude Code and Cursor.", an "Inspiration / Your artifacts" tab pair and an orange **Open the lab** button.
- Below, four artifact cards, each showing the project's real screen and only what it is ("A generative typography tool", "An Android app", "A web app for two", "An AI naming tool"), no names or summaries. The cards lift a little on hover; the whole card opens `/lab`. The water texture still moves behind it.
- Two columns on tablets and phones. STEP/REPEAT's still now shows the whole "DEV" on its own paper (edges trimmed).

Files: `components/home/LabRow.tsx`, `app/globals.css`, `public/images/lab/step-repeat-still.webp`.

## 2026-10-21: The AI card says clearly what's behind it

**Branch:** `master` · deployed

- The gateway card now looks like a chat app mid-answer, so it's obvious there's AI work behind it. Left: your question "Show me what Dev built with AI" already sent, then the reply streaming in: "I've opened Dev's lab. Inside are four things Dev designed and built with AI: two apps, a type tool and a naming tool. Here's a preview." Under it an artifact card, "Dev's AI lab · Artifact · 4 projects", and the reply box at the bottom.
- Right: the artifact panel, playing the real screens one after another ("1 of 4", dots, what each one is) with an orange **Open the lab** button. The whole card still opens `/lab`; the water texture still moves behind it.
- On tablets and phones the panel goes under the conversation and the reply box is dropped. With reduced motion the answer is already there and the panel stays on the first screen.

Files: `components/home/LabRow.tsx`, `app/globals.css`.

## 2026-10-21: The background texture behaves like water

**Branch:** `master` · deployed

- The character texture behind the AI card and `/lab` is now a real water simulation (the 2D wave equation, one cell per character). It only reacts to movement: dragging the cursor pushes the surface, a wake trails behind it, ripples spread, cross, bounce off the edges and slowly calm. A still cursor makes no waves. A tap drops a single ripple.
- Crests gather lighter characters and troughs clear them; each character also slides a little along the slope it sits on, so the type looks like it floats. It's capped at light characters, so it never turns into a solid block behind the text.
- Made about a third fainter after your look (opacity 0.045–0.35 instead of 0.07–0.52), so it stays subtle; the physics is unchanged.
- It runs only while visible, stops computing once the water is calm, and holds still with reduced motion. Characters are drawn in batches by weight, which halved the cost per frame.

Files: `components/lab/GlyphField.tsx`.

## 2026-10-21: The AI card is a gateway, and the character texture moves to the background

**Branch:** `master` · deployed

- **Homepage card:** no longer a terminal listing the projects. It's a door, set like a chat app's empty screen: a sparkle and the greeting "Step into the lab." in a serif, a message box where "Show me what Dev built with AI" types itself, a **+** button, a "Claude Code · Cursor" label and an orange send button. One line underneath says products and experiments are inside. The whole card opens `/lab`. No logo is used.
- **The characters are now a texture, not the picture.** Behind the card, and behind the whole of `/lab`, a faint field of characters drifts slowly and thickens into a ripple wherever your cursor goes. With reduced motion it holds still.
- **/lab:** every project shows its real screen clearly again (STEP/REPEAT's live "DEV", the RepGate and Kept phones, the NameGenius page); screens lift a little on hover. The terminal header, `cat` lines, two columns and command line stay.
- New font: Source Serif 4, for the greeting only. The old character-screen code (`GlyphScreen.tsx`) is removed.

Files: `components/home/LabRow.tsx`, `components/lab/GlyphField.tsx` (new), `components/lab/GlyphRoom.tsx`, `components/lab/GlyphScreen.tsx` (removed), `app/layout.tsx`, `app/globals.css`, `PRODUCT.md`, `CLAUDE.md`, `DESIGN.md`, `docs/content-status.md`.

## 2026-10-21: The AI card is a terminal, and /lab is the Glyph room

**Branch:** `master` · deployed

- **Homepage card, your idea:** the AI card is no longer a dark copy of the case-study rows. It's a terminal. When you scroll to it, `dev@lab:~$ claude "what did I build with AI?"` types itself, then the four projects print as the answer, then "4 projects, built with Claude Code and Cursor." and `→ open the lab` with a blinking cursor. Beside it, each project's screen is drawn in text characters, one after another; pointing at a line shows that project.
- **/lab, the Glyph room:** the page carries on the same session. `ls` lists the projects. Each one is printed with `cat repgate # an Android app` and its real screen drawn in characters. Move the pointer over it and a ripple runs through the type; rest the pointer (or click, tab to its link, or tap on a phone) and the real screenshot spreads out from that point. At the end, a real command line: `help`, `ls`, `open kept`, `mail`, `resume`, `cd ~`, plus buttons for each, and a couple of jokes (`sudo`, `claude`).
- **New font:** JetBrains Mono, for the terminal and the characters only. Nimbus Sans stays everywhere else.
- **Works for everyone:** with reduced motion nothing animates (the command is already typed, the characters are still, the screen appears at once); keyboard focus on a project shows its real screen; screen readers hear the real image descriptions, not the characters.
- Checked in two rounds at desktop and phone sizes, then an independent design review; its fixes are in (two columns, clearer app screens, no boxes, a proper focus ring on the command line).

Files: `components/home/LabRow.tsx`, `components/lab/GlyphScreen.tsx`, `components/lab/GlyphRoom.tsx`, `app/lab/page.tsx`, `app/layout.tsx`, `app/globals.css`, `lib/content.ts`, `public/images/lab/step-repeat-dev.webp`, `.impeccable/surfaces/app-lab-page-tsx.md`.

## 2026-10-21: The AI work moves to its own page, behind one dark card

**Branch:** `master` · deployed

- The homepage no longer ends in a full dark section. After Groww and BookMyShow comes **one dark card**, in the same row layout as the case studies: STEP/REPEAT drawing "DEV" on the left, then "AI experiments and products", a line about the four projects, the facts, and **See the AI work**. Inspired by how helloparul.in ends its work list. The "Say hi" sign-off follows in the light.
- **New page `/lab`**: the dark page with all four projects as tiles, two by two, then the sign-off. Each tile opens its project page; "AI experiments" on a project page now goes back to `/lab`.
- Fixes from the design critique: screenshots load at the right size so they're sharp; STEP/REPEAT shows a still of "DEV" until the live engine draws, so it's never a blank box; Kept's tile shows one phone (its page still shows both); NameGenius runs off the bottom edge like the phones; screen readers hear just the project name and line; hovering brightens the picture, which also shows with reduced motion.
- The old dark ending (`SideQuests.tsx`, `IntoTheDark.tsx`) is kept but not rendered.

Files: `app/page.tsx`, `app/lab/page.tsx`, `app/lab/[slug]/page.tsx`, `components/home/LabRow.tsx`, `components/lab/LabGrid.tsx`, `components/lab/LabScreens.tsx`, `components/lab/StepRepeatLive.tsx`, `components/home/SideQuests.tsx`, `app/globals.css`, `lib/content.ts`, `public/images/lab/*`, `PRODUCT.md`, `CLAUDE.md`, `docs/content-status.md`.

## 2026-10-21: New DEV banner look, roomier editor

**Branch:** `master` · deployed

- You re-tuned the banner: still DEV in Grotesk, now cut into bigger windows (density 7, down from 13) with no squeeze, so the letters read more clearly.
- The Tune editor now floats on the right of the screen instead of inside the banner, so every slider fits even when the banner is small.

Files: `lib/step-repeat-look.json`, `app/globals.css`.

## 2026-10-21: Three more products in the AI section

**Branch:** `master` · deployed

- The dark AI section on the homepage now has four projects: STEP/REPEAT, **RepGate**, **Kept** and **NameGenius**. With four, the desktop grid is two by two, so no tile sits alone on a row.
- Each new one has its own dark page at `/lab/repgate`, `/lab/kept` and `/lab/namegenius`, built like STEP/REPEAT's: what it is, what it does, the facts, and the way in. "Next" walks through all four.
- The pictures are real screens: RepGate's home screen from your phone (status bar cropped off), Kept's home on both phones from your LinkedIn poster, and NameGenius's landing page. They rise from the bottom of the same dark sheet in every tile and banner, and size themselves so they never spill off the edge on a phone. The RepGate camera screen was left out because it shows your face.
- The words come from each project's own docs (`PRODUCT.md`, `README.md`, `CLAUDE.md`) and your resume. RepGate has no public link, so its button says "Android, shown live in class".
- About's "Built on my own" now opens these pages, so RepGate has a link too.

Files: `lib/content.ts`, `components/lab/LabScreens.tsx`, `components/home/SideQuests.tsx`, `app/lab/[slug]/page.tsx`, `app/globals.css`, `public/images/lab/*`, `docs/content-status.md`.

## 2026-10-21: About page finished, no placeholders left

**Branch:** `master` · deployed

- **Before this** now shows your real experience from your resume: Freelance Product Designer at PrayagrajKumbhMela.com (Dec 2024 – Jan 2025), UI/UX Design Intern at Campaign Studio (Aug – Dec 2024), and your B.Des at Lovely Professional University (2022 – 2026).
- **Away from Figma** (one photo and three empty slots) is replaced by **Built on my own**: STEP/REPEAT, RepGate, Kept and NameGenius, each with what it does, what it's built with and a link where it's public (Kept and NameGenius open in a new tab; the GitHub repos are private, so they aren't linked).
- The "Placeholder" and "3 photos to come" tags are gone.
- The photo desk (`components/about/Desk.tsx`) is kept but not shown, ready for when you send photos.
- Fixed: the homepage BookMyShow row pointed at three `.png` screens that had been swapped for `.webp`. It now uses the `.webp` files, so the images show on the live site.

Files: `app/about/page.tsx`, `lib/content.ts`, `docs/content-status.md`.

## 2026-10-20: Banner text is dark on light

**Branch:** `master` · deployed

- When the banner shows text, it's now dark letters (film black) on the tool's light bromide paper, instead of light letters on dark. Your DEV banner and the homepage tile both show it this way.
- A picture still sits on the dark sheet.

Files: `components/lab/StepRepeatLive.tsx`.

## 2026-10-20: Tune the STEP/REPEAT banner yourself

**Branch:** `master` · deployed

- The banner has a Tune button (sliders icon, next to pause). It opens the tool's own controls: Size, Density, Shift X, Shift Y, Squeeze, Compress, Twist, Drift and Speed. Every change shows on the banner straight away.
- **Save** keeps the look. It's written to `lib/step-repeat-look.json`, and the banner and the homepage tile both use it. **Undo changes** goes back to the last save.
- Only you see this, on your computer while `npm run dev` runs. On the live site there's no Tune button, and the save address does nothing.
- The Tune panel can also show text instead of the picture: switch **Picture / Text** at the top, type a letter or a word, and pick a typeface (Grotesk, Narrow or Didone, the tool's own). Text is set in the tool's bromide white on the dark banner. Switching sets a sensible starting size, and Size now goes down to 10, as in the tool.

- You saved the banner as the word **DEV** in Grotesk, sliced lightly with a slow drift. The homepage tile shows it too.
- On narrow screens a word now shrinks to fit instead of losing its sides. Wide screens look the same.

Files: `components/lab/LookTuner.tsx`, `components/lab/StepRepeatLive.tsx`, `app/api/lab-look/route.ts`, `lib/step-repeat-look.json`, `app/globals.css`.

## 2026-10-20: STEP/REPEAT banner uses your robot illustration

**Branch:** `master` · deployed

- The banner and the homepage tile now show the illustration you sent: the robot kneeling by the forest pond. The tool cuts it into a fine grid, shifted only a little, so it reads as the picture with a light graphic grid over it. It drifts slowly. Pause and reduced motion work as before.
- The image's black bars are cropped off. It's saved as `public/lab/step-repeat/robot.webp` (about 100 KB).
- The banner is dark again, to match the picture.

Files: `components/lab/StepRepeatLive.tsx`, `app/globals.css`, `public/lab/step-repeat/robot.webp`, `docs/content-status.md`.

## 2026-10-20: STEP/REPEAT banner shows a photo

**Branch:** `master` · deployed

- The banner was too distorted to tell what it was showing. Now the tool slices a photo, finely and only a little, so it reads as a picture first and a grid second. It drifts slowly. The pause button stays, and with reduced motion it's still.
- The preset rotation and the preset names are gone. The banner has its photo's white paper, with small dark "Live" and pause pills.
- For now it uses your hero photo (`/images/hero-still.jpg`), until you send the image you want. To swap it, change `image` (and `paper` to match its background) in `components/lab/StepRepeatLive.tsx`.
- The homepage tile uses the same picture.

Files: `components/lab/StepRepeatLive.tsx`, `app/globals.css`, `docs/content-status.md`.

## 2026-10-20: AI section is back, with STEP/REPEAT

**Branch:** `master` · deployed

- The dark "AI experiments and products" section at the end of the homepage is back on, with your first real project, STEP/REPEAT, in place of the placeholders. While it's the only project, its tile is wider (two of the three columns). The placeholder cards are gone.
- Tapping the tile opens a new page, `/lab/step-repeat`. It's one dark screen that doesn't scroll on a laptop or desktop. On a phone it scrolls a little, so the banner doesn't get squashed. Footer hidden, nav dark.
- The banner is the tool itself, running live with the project's own engine (no video). It goes through the five presets, Fracture, Splinter, Compress, Echo and Chaos, every 6 seconds. There's a pause button, and you can pick a preset. With reduced motion it shows one still proof.
- Under the banner: the name and description, what you can do (Type, Distort, Export, Share), the facts (year, what it's built with, works on), and the open button. It says "Link coming soon" until you send the link. A back link goes to the AI section, and a "Next" link will show up once there's a second project.
- The player and three fonts are copied from the project into `public/lab/step-repeat/`. If the engine changes, copy them again.

Files: `app/page.tsx`, `app/lab/[slug]/page.tsx`, `components/home/SideQuests.tsx`, `components/lab/StepRepeatLive.tsx`, `lib/content.ts`, `app/globals.css`, `app/layout.tsx`, `public/lab/step-repeat/`, `docs/content-status.md`.

## 2026-10-17: Bigger hero video

**Branch:** `master` · deployed

- The homepage hero video is about 1.15x bigger (80% to 92% of its column), to balance the left text visually.
- It grows around its own centre. The left text stays exactly where it was; nothing was re-centred.

Files: `app/globals.css`.

## 2026-10-17: Resume now downloads

**Branch:** `master` · deployed

- Your resume PDF (`Dev_Dixit_Resume.pdf`) is now on the site. Tapping Resume downloads it straight away, instead of going nowhere.
- This works from every place Resume appears: the Contact card in the nav (homepage, About and both case studies), the footer, and the About sign-off.
- To swap in a new resume later, replace `public/Dev_Dixit_Resume.pdf` with a file of the same name.

Files: `public/Dev_Dixit_Resume.pdf`, `public/system/site.json`, `components/Navbar.tsx`, `components/Footer.tsx`, `components/about/SayHi.tsx`, `scripts/sync-nav.mjs`, `public/work/bookmyshow/index.html`, `public/work/groww/index.html`, `docs/content-status.md`.

## 2026-10-16: Intro on the homepage and case studies, lighter BookMyShow images

**Branch:** `master` · deployed

- Opening a case study for the first time in a tab now plays a short intro (about 1.2s): your name rises in on a white screen, then the screen lifts away. It does not play again in that tab, not with reduced motion, and not when the homepage tile is already growing into the page.
- The same intro now plays on the homepage when someone opens the link, so the first thing they see is not a half-loaded page. The hero words, video and notes wait about 0.85s so they start as the screen lifts.
- BookMyShow's images are now WebP. They went from about 2.5 MB to about 0.4 MB, so the page loads faster. The old PNG files are removed.

Files: `app/layout.tsx`, `app/globals.css`, `public/system/shared.css`, `public/system/CHANGES.md`, `scripts/sync-nav.mjs`, `public/work/*/index.html`, `public/work/bookmyshow/homepage-funnel-2.html`, `public/work/bookmyshow/assets/`.

## 2026-10-16: Removed the "copies it for you" note

**Branch:** `master` · deployed

- The hand-written "copies it for you" note and its arrow beside the Copy button on the About page are gone. Screen readers still hear "Copied" when you press the button.

Files: `components/about/SayHi.tsx`.

## 2026-10-15: BookMyShow first

**Branch:** `master` · deployed

- Selected work now lists BookMyShow first, then Groww.

Files: `lib/content.ts`.

## 2026-10-15: Project text is one centred block

**Branch:** `master` · deployed

- On wide screens the text beside each picture is now one compact block, centred on the picture, instead of being split between the top and bottom edges. The empty hole in the middle is gone and both cards have the same space above and below (42px).
- The facts use the same column widths on both cards, so "UX research · Product strategy · Prototyping" stays on one line and the divider sits at the same height.
- The finding and the line under it stop at one shared width. The facts line runs the full column.
- Stacked layouts (under 1200px) keep their order; only the facts column widths changed.

Files: `app/globals.css`.

## 2026-10-15: Project cards: new copy, no highlighter

**Branch:** `master` · deployed

- Both cards use Dev's new wording for the finding, the "what I did" line and the facts (Groww's scope now reads "UX research · Product strategy · Prototyping"; the tools read "Figma · Cursor").
- The finding is black type, a little larger than the line under it and balanced to wrap evenly. (The sand highlighter behind it was removed here, then brought back at Dev's request.)
- The three facts are evenly spaced columns. The secondary button reads "Listen to walkthrough".
- PRODUCT.md lists the highlighter among the sand touches again.

Files: `lib/content.ts`, `components/home/ProjectRow.tsx`, `app/globals.css`, `PRODUCT.md`.

## 2026-10-15: Project text lines up with the picture's top and bottom

**Branch:** `master` · deployed

- On wide screens (1200px and up) the text beside each project now spans the picture's height. The title and the two lines hang from the top edge. The facts and the two buttons sit on the bottom edge.
- The spoken captions now appear below the buttons without pushing them up.
- Stacked layouts (under 1200px) are unchanged.

Files: `app/globals.css`.

## 2026-10-15: Shorter, bolder project headings

**Branch:** `master` · deployed

- Each project's heading is now just its name: "AI-assisted Start a SIP" and "Events discovery". The long sentence headings are gone.
- Headings are smaller and bold (700).
- Groww's two lines are a little shorter, and the gaps between title, lines, facts and buttons are tighter (version 2 of the mockup).

Files: `lib/content.ts`, `components/home/ProjectRow.tsx`, `app/globals.css`.

## 2026-10-15: Mockup for distilling the project card text

**Branch:** `master` · deployed · site unchanged

- Added a side-by-side mockup of the text beside each homepage project: today, version 1 (the "what I did" line removed) and version 2 (everything kept, wording and spacing tightened).
- Nothing on the live pages changed. Waiting for Dev to pick one.

Files: `docs/mockups/distill-project-text.html`.

## 2026-10-15: Contact card opens from the middle of the button

**Branch:** `master` · deployed

- The card used to grow from its top-right corner. It now grows from a point right under the middle of the word "Contact".
- It starts very small (a fifth of its size) and swells open and settles smoothly, like the Dynamic Island. The fade is short and quick, so the size does most of the work.
- Closing shrinks it back toward the same point, a bit faster.
- On screens 1440px wide and up, the card is now centred under the word "Contact". Below that it stays flush with the right edge, because a centred card would run off the screen.

Files: `public/system/nav.css`.

## 2026-10-15: Contact card waits for a real hover

**Branch:** `master` · deployed

- The card now opens only after the pointer rests on "Contact" for about 0.2 seconds. Sweeping across it quickly does nothing.
- Click, tap and keyboard focus still open it straight away.

Files: `components/Navbar.tsx`.

## 2026-10-15: Contact card opens faster

**Branch:** `master` · deployed

- The card's opening animation is now 0.2 seconds, down from 0.38.

Files: `public/system/nav.css`.

## 2026-10-15: Very slight bounce on the Contact card

**Branch:** `master` · deployed

- The card overshoots its size by a hair as it opens, then settles. Still 0.2 seconds.

Files: `public/system/nav.css`.

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

**Branch:** `family-restyle` · deployed

- **BookMyShow** now has a finished cover picture, like Groww: one phone on a pink cinema scene, filling the card edge to edge. The picture is a bit wider than the card, so a thin strip is trimmed off each side. Hovering it no longer plays the prototype, same as Groww.
- **Card text** on a laptop now runs to the right edge of its half. Before, the title and the highlighted line were evened out and stopped short.
- **AI experiments and products** is hidden for now, until the products and their pages are ready. The dark ending is gone with it. The homepage now ends on the light "Say hi" sign-off from About: the email, Copy, LinkedIn and Resume. The section's code is kept, so it can come back.

Files: `lib/content.ts`, `public/work/bookmyshow/cover.webp`, `app/page.tsx`, `app/globals.css`.

## 2026-10-14: Smaller pictures on the project cards

**Branch:** `family-restyle` · deployed

- On a laptop, each project's picture now takes half the row instead of about 60%, and it's a little flatter (3:2 instead of 7:5). That's about 20% shorter. The text is unchanged.
- The space between the two projects is a little smaller, so on a 1440×900 screen the BookMyShow card now peeks in below Groww.
- The Groww cover is 3:2 itself, so its sides no longer get trimmed.
- On a laptop, the text now uses the full width of its half, so the titles take 2 lines instead of 3 and the Groww card is shorter too. On tablets and phones the text keeps its old line lengths.

## 2026-10-14: Work always scrolls, and Back returns to your place

**Branch:** `family-restyle` · deployed

- **Work in the nav** now scrolls to the projects every time. Before, a second tap did nothing once the address already ended in `#work`.
- **Back from a case study** lands where you left the homepage:
  - The homepage remembers your place as you scroll, and on Back it puts you there while the page is still loading, before anything is drawn. So you never see it land somewhere else first. Opening the homepage fresh still starts at the top.
  - The glide into the dark AI section only answers your own scrolling from the last few seconds (wheel, finger, keys, scrollbar). The browser scrolling on its own can't set it off. Before, coming back could land you at the top of the AI section.

Files: `components/Navbar.tsx`, `components/home/IntoTheDark.tsx`, `components/home/ScrollMemory.tsx`, `app/page.tsx`, `app/layout.tsx`.

## 2026-10-14: Smoother card-to-case-study animation

**Branch:** `family-restyle` · deployed

Tapping a project card grew it into the case study, but it stuttered. There were four causes, and each is fixed:

- **Different shapes.** The card is 7:5 and the case study's hero is 21:10, so both pictures were stretched while the shape changed. Now each is cropped instead.
- **Different pictures.** The Groww card's cover and the hero's three phones faded over each other. Now the card fades out early and the hero fades in through a slight blur.
- **Late start.** The Groww page is 842 KB, and the hero only got its link to the card at the very end of the file. Now the link is in the HTML, the page waits to draw until the hero is ready, and the hero screens are decoded before the first frame.
- **Page not ready.** Chrome and Edge now start building a case study in the background as soon as you hover or press its card.

Files: `public/system/shared.css`, both `public/work/*/index.html`, `app/layout.tsx`.

## 2026-10-14: Finer motion, and three new scroll moments

**Branch:** `family-restyle` · deployed

- **Buttons** shrink very slightly when pressed. On "Read case study", only the arrow slides on hover now, so the button no longer changes width.
- **The Contact card** grows out of its button and closes a little faster than it opens. This is in the shared nav, so the case studies get it too (system v1.5 in `public/system/CHANGES.md`).
- **"Copy" to "Copied"** swaps with a quick soft blur, in the Contact card and in "Say hi".
- **"Listen to the walkthrough"**: the speaker's sound waves pulse while it's talking.
- **Project cards** lift a little under the mouse.
- **The Work / About highlight** slides between them instead of jumping.
- **Scroll:** the "Selected work" and "AI experiments and products" titles come into focus word by word. The project cards open like a window as they rise. "Say hi. Tell me what you're building." lights up grey to white, word by word, as you reach the end.
- Reduced motion turns all of it off.

## 2026-10-14: The homepage moves

**Branch:** `family-restyle` · deployed

- **Opening:** your sentence comes into focus word by word, the bed video fades up out of soft focus, then three handwritten notes draw themselves on around it (the laptop, the socks, the blanket). About 2 seconds, once per visit to the page.
- **Scrolling:** the top drifts away, the video a little slower than the words. Each project card rises and settles as you scroll, and its text moves at a slightly different speed, so it feels layered. The phones inside the cards don't move.
- **Layout:** the top is a bit shorter, so "Selected work" shows at the bottom of the first screen.
- Reduced motion turns all of it off. Browsers without scroll-linked animation (Firefox today) keep the old soft fade.
- The three notes are Claude's words, placeholders in `lib/content.ts` (`heroNotes`).

## 2026-10-14: New picture on the Groww card

**Branch:** `family-restyle` · deployed

- The Groww card on the homepage now shows Dev's three-phone image (`public/work/groww/cover.webp`) instead of the three separate screens.
- Hovering it no longer plays the prototype. "Listen to the walkthrough" still reads the description aloud with captions.
- BookMyShow's card is unchanged.

## 2026-10-14: The homepage ends with "Say hi"

**Branch:** `family-restyle` · deployed

- The dark AI section now ends the way About does: "Say hi. Tell me what you're building.", your email in large white text with a Copy button, then LinkedIn and Resume.
- It reuses About's sign-off, so both stay the same. In the dark there's no blue hand note.
- A screen reader announces "Copied".
- "Selected work" above the projects is now a real heading, the same size as the other section titles. It was small grey text.
- Dropped: the "projects first" homepage idea. Its mockups stay in `docs/mockups/` (`home-work-first.html`, `home-work-first-bold.html`) and aren't published.

## 2026-10-14: Project card text, tightened

**Branch:** `family-restyle` · deployed

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

**Branch:** `family-restyle` · deployed

- **The video's sand colour now carries down the page**, in small touches: the email underline, a highlighter over each project's main finding, the line above its facts, and the "Play with sound" button. The project pictures keep their own brand colours.
- **Project cards read in steps:** a bigger title, then the main finding in larger text, then the rest of the sentence, then a facts row (Product, plus Type and Stage or Role and Tools), then the buttons.
- A small dot in each project's colour sits by its name. "Read case study" has an arrow.
- The three options Dev compared are in `docs/mockups/work-sand.html`. Dev picked "Accents only".

## 2026-10-13: Fixes from the design review

**Branch:** `family-restyle` · deployed

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

**Branch:** `family-restyle` · deployed

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

**Branch:** `family-restyle` · deployed

- The right side of the nav is now one "Contact" button instead of the Resume and LinkedIn links. Hover, click, tap or keyboard opens a white card with your email (with Copy), LinkedIn and Resume.
- Same on every page, including both case studies.
- It also shows on phones, which couldn't reach Resume or LinkedIn from the nav before.
- One width for the whole site: content goes up to 1600px on every page, including the case studies, and the nav lines up with it (`--page-max` in `public/system/tokens.css`).

## 2026-10-12: New homepage live in the site, About redone, Contact menu gone

**Branch:** `family-restyle` · deployed

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

**Branch:** `family-restyle` · deployed

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
