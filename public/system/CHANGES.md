# Case Study System: changes in this repo

This folder (`public/system/`) is now the working home of the system. The Desktop copy
(`case studies/Groww/case-study-system/`) is still at v1.0 and was not edited.

## v1.5 (2026-10-14)

- **The contact card animates.** It grows out of the Contact button in 0.18s and leaves faster, in 0.12s. Before, it appeared in place. Reduced motion keeps it instant.
- **Nav buttons give a little when pressed.** Contact and Copy shrink to 97% while held.
- **Smoother tile-to-hero morph.** The tile and the hero are different shapes, so neither picture is stretched any more: each is cropped to the moving box, and the tile fades out early while the hero fades in through a slight blur (`shared.css`).
- **The hero is ready on the first frame.** Each case study names its hero panel in the HTML instead of by script at the end of the page, waits to draw until the hero is parsed (`<link rel="expect" href="#top" blocking="render">`), and decodes the hero screens before drawing (`decoding="sync"`). Add all three to new case studies.

## v1.4 (2026-10-14)

- **Sand tokens.** `--sand-1`, `--sand-2`, `--sand-3`, `--sand-ink` and `--sand-deep`, sampled from the portfolio's intro video. They're for small touches on the portfolio homepage, not for the case studies.

## v1.3 (2026-10-13)

- **Contact moves to the right.** The right side of the nav is one beige "Contact" pill that opens the white contact card (email with Copy, LinkedIn, Resume) on hover, click, tap or keyboard. It replaces the separate Resume and LinkedIn links and shows on phones too.
- **One frame width:** `--page-max` is now 1600px of content plus the gutters (it was 1680px including them), for the case studies, the portfolio and the nav.
- **Hand notes are easier to read.** `--sketch` is a touch darker (#2f6fde to #2a66d0), so the blue notes reach 4.5:1 contrast on beige panels. It was 4.3:1.
- **Nav controls are easier to tap.** The name, the page switcher and Contact each get an invisible area at least 44px tall, so they don't look any bigger.
- **Night tokens.** `--night` and its text and fill tones (`--night-ink`, `--night-soft`, `--night-mute`, `--night-hair`, `--night-fill`, `--night-fill-on`) moved into `tokens.css`. They're for the portfolio homepage's dark AI section.

## v1.2 (2026-10-12)

- **Contact menu removed from the nav.** Resume and LinkedIn already sit on the right, so the card was a second copy of them. Its styles (`nav.css`), behaviour (`case-study.js`) and markup (`sync-nav.mjs`) are gone. On phones, where the right side is hidden, the portfolio's footer carries the email, LinkedIn and Resume.
- **Work goes to the work.** The nav's Work link is `/#work`: from a case study or About it lands on the homepage's work section, and on the homepage it scrolls there. While that section is on screen, Work shows as current (`aria-current="location"`).
- **The name means home**, on every page.
- **Cross-page morph:** a homepage project tile and its case study's hero panel share a view-transition name, so the tile grows into the hero (`shared.css`, `case-study.js`). Reduced motion gets a normal page load.

## v1.1 (2026-10-12)

- **Tokens split out.** Every value now lives in `tokens.css`. `case-study.css` imports it, and so does the portfolio's `app/globals.css`. Values are unchanged. New token: `--nav-h: 68px`.
- **Site nav on every page.** This replaces rule 1 ("no navigation bar") and the §18 ban on a sticky header.
  - Fixed to the top, with a frosted pane (24px blur fading downwards). This is the one translucent surface in the system, and it's for the nav only.
  - Name on the left. A centre switcher on a beige panel, with the current page on a white segment. Resume and LinkedIn on the right.
  - Contact opens a white card with the floating-card shadow. It opens on hover, click, tap and keyboard focus, and closes on Escape, an outside click, or when the pointer leaves.
  - Styles are in `nav.css`, behaviour in `case-study.js`, and the case-study markup is written by `scripts/sync-nav.mjs` from `site.json`.
- **Offsets for the nav:** the hero starts `--nav-h` lower, the contents rail sticks below the nav, and section anchors land below it.
- **Shared rules:** the `.rv` reveal and the text-selection colour moved to `shared.css`.

Still to do: bring RULEBOOK.md, components.html and the Desktop template up to v1.1.
