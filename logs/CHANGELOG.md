# Changelog

A plain-English record of changes to this portfolio. Newest entries go at the top.

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
