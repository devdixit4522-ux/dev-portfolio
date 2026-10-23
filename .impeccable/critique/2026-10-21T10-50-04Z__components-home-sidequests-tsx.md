---
target: homepage AI section grid
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\91790\\dev-portfolio-shadcn\\components\\home\\SideQuests.tsx"
target_fingerprint: "sha256:4af9ded026ca62b6fb04b96e332fd9e97277fc865820b56cd75deb57a3ce215c"
target_path: "C:\\Users\\91790\\dev-portfolio-shadcn\\components\\home\\SideQuests.tsx"
timestamp: 2026-10-21T10-50-04Z
slug: components-home-sidequests-tsx
---
# Critique: homepage AI section grid (SideQuests)
Score 21/32 (n/a: 7, 10). Specificity: half authored (live DEV tile, glow, rising screens) / half generic (sparkle, title, plain 2x2).
Detector: CLI clean; browser flagged .dk-glow radial-spotlight-glow (deliberate, Dev chose 2026-10-13); other hits outside section or false positives.
## Priority issues
- [P1] LabScreens sizes hint wrong (25vw/50vw vs ~41vw/88vw): NameGenius served 384w at 481px. Fix sizes="(max-width: 809px) 92vw, (max-width: 1199px) 46vw, 600px".
- [P1] STEP/REPEAT tile blank cream until player.js loads; .catch(()=>{}) leaves it blank. Fix: static poster under canvas.
- [P2] Phone tiles dark-on-dark; crops inconsistent (phones bleed, NameGenius floats +42px); RepGate lower half empty; Kept reads as one screen twice. Fix: tighter crops, one Kept screen in tile, same end treatment.
- [P2] Tile link names include long alt text / role=img label. Fix: alt="" in tile mode.
- [P3] Hover nearly invisible under reduced motion. Fix: brighten screen on hover.
## Minor
- :has(nth-child(4)) 2x2 rule fragile for 5+ projects; Say hi louder than section title; arrow sits low.
