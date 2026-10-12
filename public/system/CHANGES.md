# Case Study System: changes in this repo

This folder (`public/system/`) is now the working home of the system. The Desktop copy
(`case studies/Groww/case-study-system/`) is still at v1.0 and was not edited.

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
