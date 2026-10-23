# Content status

What on the site is real, what is a placeholder, and what Dev still needs to send.
Update this file whenever something is confirmed or replaced.

Legend: ✅ real and confirmed · 🟡 placeholder, shipping for now · ❓ needs Dev's confirmation · ❌ removed

---

## Needs Dev (send later)

| Item | Where it shows | Status now |
|---|---|---|
| AI experiments and products | Homepage: a gateway card after the case studies (\"Step into the lab.\"), opening `/lab` (every project's real screen over a cursor-reactive texture, plus a command line), and one page each at `/lab/<slug>` | 🟢 STEP/REPEAT is in, with copy you approved (2026-10-20). 🟢 Live at https://step-repeat-delta.vercel.app (Vercel project `step-repeat`, deployed 2026-10-22). 🟡 RepGate hidden until finished (`hidden: true` in `lib/content.ts`). More projects go in the same list. 🟢 RepGate, Kept and NameGenius added (2026-10-21) from their own docs and the resume, with real screens in `public/images/lab/`. 🟢 Banner: the word DEV, as you set it in the banner's Tune panel (saved in `lib/step-repeat-look.json`). Your robot illustration is still there as the Picture option. |
| Matching project lines: the same kind of fact for both (e.g. role · what was made · status), and the two titles in one style | Homepage project rows | ❓ Groww says "Feature addition · Prototype, user tested", BookMyShow says "Product designer · Figma, Cursor"; the titles differ too ("The missing step…" vs "Improving Event Discovery for BookMyShow") |
| Homepage intro sentence | Homepage | 🟡 Claude's wording, approved in the mockup. Rewrite it in your own words when you like. |
| Hand notes around the homepage video: "where the case studies get made", "socks on: deep-work mode", "this blanket gave the site its sand colour" | Homepage intro | 🟡 Claude's wording. Change them in `heroNotes` in `lib/content.ts`. |
| About page copy | About | 🟡 Facts are real (case studies and resume); the portrait hand notes are Claude's jokes, yours to keep or cut |
| Photos from outside work (optional) | Not shown. The "Away from Figma" desk is kept in `components/about/Desk.tsx` | Send 3 photos with captions if you want the section back |

Email, Resume and LinkedIn all live in `public/system/site.json`. Change them there once and every page, including the case studies' nav, picks them up.

## Real (from Dev's own files)

| Item | Source |
|---|---|
| ✅ Groww case study, its headline, lede and screens | `Desktop\case studies\Groww\case-study-draft\groww-case-study-v10.html` |
| ✅ BookMyShow case study, its headline, lede and screens | `Desktop\case studies\bookmy show\case-study-portfolio-v2-system.html` |
| ✅ Groww row meta: "Feature addition · Prototype, user tested" | Groww facts strip |
| ✅ BookMyShow row meta: "Product designer · Figma, Cursor" | BookMyShow facts strip (it has no Type or Status cell) |
| ✅ BookMyShow row text, shortened from its lede | BookMyShow lede |
| ✅ "Listen to the walkthrough" scripts: the Groww guide and ₹13,000 a month with two funds; the BookMyShow preview sheet | The two prototypes |
| ✅ About receipts: 15 interviews and 12 of 15 needing a go-ahead (Groww, The Evidence); 3 people across 3 tasks (BookMyShow, testing); two rejected designs (Groww, Rejected Designs) | The case studies, linked from each receipt |
| ✅ Tools: Figma, Cursor | BookMyShow facts strip |
| ✅ Site name: devdixit.fun | Groww footer |
| ✅ Email: `devdixit4522@gmail.com` | Dev, 2026-10-15 |
| ✅ LinkedIn: `https://www.linkedin.com/in/devdixit4522/` | Dev, 2026-10-15 |
| ✅ About, "Before this": PrayagrajKumbhMela.com, Campaign Studio, B.Des at LPU | `public/Dev_Dixit_Resume.pdf` |
| ✅ About, "Built on my own": STEP/REPEAT, RepGate, Kept (kept-jet.vercel.app), NameGenius (name-genius-theta.vercel.app) | Resume, and the live sites |
| ✅ AI section: RepGate (Kotlin, 19 half reps rejected, 20 of 20 opens caught), Kept (kept-jet.vercel.app), NameGenius (name-genius-theta.vercel.app) | `AndroidStudioProjects/RepGate/CLAUDE.md`, `Desktop/tracker app/PRODUCT.md`, `Desktop/name genius/README.md`, resume |
| ✅ Portrait video, its still, and the walking cut-out | `public/images/hero-portrait.mp4`, `hero-still.jpg`, `hero-portrait.png` |

## Removed

| Item | Why |
|---|---|
| ❌ "Right now he's at Hebbia, building the leading AI platform for finance" | It's Shaun Tan's line from shaun.design, not Dev's |
| ❌ Famli App case study and its "28%↑" outcome | Not confirmed as real work |
| ❌ Scrolling word ticker | Breaks the system (motion, uppercase labels) |
| ❌ Old `public/bookmyshow.html` | A pre-system version, replaced by the real case study |
| ❌ `/shadcn-preview` page | A leftover experiment |

---

## About page

The facts come from the case studies. The jokes are mine, so keep or cut them. All of it lives in `lib/content.ts` under `about`.

**Opening:** **Hi, I'm Dev.** The longer version: I talk to people before I draw anything, I prototype until the evidence says stop, and I keep the designs that didn't make it.

**Fig. 1, hand notes on the portrait:**
- On your head: "Dev Dixit. Product designer, based in India."
- On the bag: "Figma and Cursor live in here"
- On your shoes: "Will walk you through any flow"
- Caption: "Fig. 1: Dev, in the wild"

**How I work, with receipts**
- **I talk to people first.** For Groww, I interviewed 15 people. 12 said they needed someone's go-ahead before starting a SIP, so the design gives them one. → Groww, The Evidence
- **I prototype to learn.** The BookMyShow redesign is a working prototype. I tested it with 3 people across 3 tasks, and the case study says what still needs testing. → BookMyShow, testing
- **I keep what didn't make it.** Groww's case study shows two designs I rejected, and why. → Groww, Rejected Designs

**Before this:** Freelance Product Designer at PrayagrajKumbhMela.com; UI/UX Design Intern at Campaign Studio; B.Des at Lovely Professional University

**Built on my own:** STEP/REPEAT, RepGate, Kept, NameGenius (from the resume)

**Sign-off:** **Say hi.** Tell me what you're building. Then the email, a Copy button, LinkedIn and Resume.
