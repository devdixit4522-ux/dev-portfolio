# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Dev Dixit's product-design portfolio (Next.js 16 App Router, React 19, Tailwind v4, shadcn/radix). Two pages, Home (`app/page.tsx`) and About (`app/about/page.tsx`), plus two static case studies. `PRODUCT.md` defines the audience, brand commitments and principles. Read it before any design or copy change.

## Commands

```bash
npm run dev        # runs scripts/sync-nav.mjs first, then next dev on :3000
npm run build      # also runs sync-nav first
npm run lint       # eslint (public/work/** is ignored)
npx tsc --noEmit   # type check
```

There are no tests. Verify changes in the browser: `.claude/launch.json` has `portfolio` (the dev server) and `mockups` (a static server on :4100 for `docs/mockups/*.html`).

## Deploy

`master` is the main branch on GitHub (`devdixit4522-ux/dev-portfolio`). Vercel deploys every push to `master` to the live site, so a push is a release. `family-restyle` is the working branch, kept level with `master`. `old-portfolio` holds the previous site.

## Architecture: one design system, two kinds of page

The **Case Study System** lives in `public/system/` and is the visual authority for the whole site:

- `tokens.css` holds every value (colours, type scale, spacing, `--page-max`, breakpoints at 810px and 1200px). `nav.css` and `shared.css` hold the nav and pieces shared by both kinds of page. `case-study.css` and `case-study.js` belong to the case studies only.
- The React app pulls the same files in through `app/globals.css` (`@import "../public/system/tokens.css"` etc.), and `@theme inline` maps the tokens onto Tailwind (`tablet:` / `desktop:` breakpoints, `--color-ink`, …). Change a value in `tokens.css` and it changes everywhere.
- System changes are logged with version numbers in `public/system/CHANGES.md`.

**Case studies** (`public/work/<slug>/index.html`) are standalone static HTML, not React. `next.config.ts` rewrites `/work/:slug` to them. They load `/system/case-study.css` and `case-study.js`, and keep only their brand tokens in a `<style id="page">` block. Don't edit `case-study.css` or `case-study.js` for one case study.

**The nav is shared across both worlds** through `public/system/site.json` (name, email, links, pages):
- `components/Navbar.tsx` reads it for the React pages.
- `scripts/sync-nav.mjs` writes the same nav markup into every case study between `<!-- site-nav -->` and `<!-- /site-nav -->`. It runs before `dev` and `build`. Edit `site.json` or the script, never the nav markup inside a case study.

**Content** lives in `lib/content.ts`: `site` (re-exported from `site.json`), `caseStudies` (homepage rows; each `brand` block copies that case study's `<style id="page">` tokens), and `heroNotes`. `docs/content-status.md` tracks what is real, what is a placeholder, and what Dev still has to send. Update it when content changes.

**Homepage behaviour across files:**
- Word-by-word reveals: `components/Words.tsx` (`wordSplitter`) plus the `.w` / `.fw` animations in `globals.css`. `.rv` blocks fade in through `components/Reveal.tsx`.
- Scroll memory: `components/home/ScrollMemory.tsx` saves the homepage scroll position, and an inline script in `app/layout.tsx` (`RESTORE_HOME`) restores it on Back before first paint.
- `layout.tsx` also prerenders `/work/*` with speculation rules, and loads Nimbus Sans locally from `public/system/fonts`.
- The AI work: the homepage's last work row is a gateway card (`components/home/LabRow.tsx`), set like a chat app's empty screen (serif greeting in `--greet`, a prompt that types itself, a send button), that opens `/lab` (`app/lab/page.tsx` + `components/lab/GlyphRoom.tsx`): each project's real screen, a terminal-style header and a working command line; each project opens `/lab/<slug>`. Behind the card and the whole of `/lab` runs `components/lab/GlyphField.tsx`, a cursor-reactive texture of characters. JetBrains Mono (`--mono`) and Source Serif 4 (`--greet`) are used only there. Its design contract is in `.impeccable/surfaces/app-lab-page-tsx.md`. Projects live in `labProjects` in `lib/content.ts`. The old full-width dark ending (`SideQuests.tsx`, `IntoTheDark.tsx`) is kept but not rendered.

## Working conventions

- `logs/CHANGELOG.md` is a plain-English record of every change, newest first, with branch, deploy state and files touched. Add an entry with each change.
- Ask Dev before any design or copy change that wasn't asked for. Present choices one question at a time.
- Only true content: no invented numbers, results, logos or testimonials (`PRODUCT.md`, Product Principles).
- Accessibility rules from the system: visible 2px focus ring, reduced motion turns animation off, anything opened on hover also opens on focus and tap.
