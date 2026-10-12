# Content status

What on the site is real, what is a placeholder, and what Dev still needs to send.
Update this file whenever something is confirmed or replaced.

Legend: ✅ real and confirmed · 🟡 placeholder, shipping for now · ❓ needs Dev's confirmation · ❌ removed

---

## Needs Dev (send later)

| Item | Where it shows | Status now |
|---|---|---|
| Email address | Contact card, footer, hero C | 🟡 `devdixit@gmail.com` from the old site, which may be wrong |
| Resume link | Nav (right), Contact card | 🟡 `#`, goes nowhere |
| LinkedIn URL | Nav (right), Contact card | 🟡 `https://www.linkedin.com/`, the generic homepage |
| AI concept projects: name, one line, real screenshot, link for each | Homepage, "AI Concept Projects" | 🟡 drawn placeholder cards, labelled "Placeholder" on the page |
| Is "Right now he's at Hebbia, building the leading AI platform for finance" true? | Homepage intro | ❓ kept because you asked to keep the current intro. Remove it if it isn't true. |
| About page copy | About | 🟡 Claude's draft (below), to be replaced or edited by Dev |
| Experience: roles, companies, dates | About | 🟡 shown as `[Role, Company, Year–Year]` |
| Portrait on About? | About | 🟡 using `public/images/hero-portrait.png` |

## Real (from Dev's own files)

| Item | Source |
|---|---|
| ✅ Groww case study, its headline, lede and screens | `Desktop\case studies\Groww\case-study-draft\groww-case-study-v10.html` |
| ✅ BookMyShow case study, its headline, lede and screens | `Desktop\case studies\bookmy show\case-study-portfolio-v2-system.html` |
| ✅ Groww card meta: "Feature addition · Prototype, user tested" | Groww facts strip |
| ✅ BookMyShow card meta: "Product designer · Figma, Cursor" | BookMyShow facts strip (it has no Type or Status cell) |
| ✅ Site name: devdixit.fun | Groww footer |
| ✅ Homepage intro lines (kept as on the current site) | `lib/content.ts` |
| ✅ Portrait video and still | `public/images/hero-portrait.mp4`, `.png` |

## Removed

| Item | Why |
|---|---|
| ❌ Famli App case study and its "28%↑" outcome | Not confirmed as real work |
| ❌ Scrolling word ticker | Breaks the system (motion, uppercase labels) |
| ❌ Old `public/bookmyshow.html` | A pre-system version, replaced by the real case study |
| ❌ `/shadcn-preview` page | A leftover experiment |

---

## About page: Claude's draft (🟡 placeholder)

It only uses facts already true from the case studies. Nothing about employers, years or results is invented.

**Headline:** I design by finding out what people actually need

**Lede:** I'm Dev, a product designer in India. I start with interviews, test with prototypes, and only keep what the evidence supports.

**How I Work**
- **Talk to people first.** Before I design, I interview the people who'll use it. On Groww, 12 of 15 people I spoke to needed someone to say it was fine before starting a SIP.
- **Prototype to learn.** I build working prototypes early, so testing is about real behaviour, not opinions.
- **Drop what doesn't hold up.** I keep a record of the designs I rejected and why. They're in every case study.

**Experience:** `[Role, Company, Year–Year]` × 2–3 (placeholder)

**Tools:** Figma, Cursor (from the BookMyShow case study)
