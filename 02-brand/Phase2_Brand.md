# Phase 2: Brand identity (decided by Claude, owner approves)

**STATUS: LOCKED. Final logo = A+C "Spark Orbit" (`logos/AC-spark-orbit.svg`), with `logos/favicon-simplified.svg` for sizes under 40 px. Phase 2 complete; Phase 3 started.**

## Hero copy (updated)
"Turning your great ideas into innovation. Built well. Governed well."
Rule: the words "certified" and "certificate" are not used in the hero, taglines or headlines.

## Recommended logo: Direction A, "Spark I"
A rounded vertical "I" with a glowing node on top and three small spark marks. It says idea (the spark), innovation (the glow) and structure (the solid bar). It stays readable at favicon size and animates well: the spark can pulse and the bar can draw upward on load.
- B, "Node I": a network that forms the letter I. Strongest AI signal, but busier at small sizes.
- C, "Orbit I": an orbit ring with a gold dot. Elegant, but the ring is lost at 16 px.
Files: `logos/A-spark-i.svg`, `B-node-i.svg`, `C-orbit-i.svg`. These are monogram concepts; the wordmark ("Ideovate" in Sora) comes after you choose.

## Colour
- Dark (hero, AI): Ink #0A0B14, Ink 2 #12142A, text #F4F6FB, muted #A9B0C6.
- Light (ISO, training, trust): Paper #F7F5F0, white cards, text #14151F, muted #555B70.
- Accents: Spark cyan #22D3EE (buttons, glow), Pulse violet #7C5CFF (gradient partner only), Trust gold #C8A24A (marks and details; use #8A6A1F for gold text).
- Contrast checked (WCAG AA needs 4.5 for body text): text on ink 18.1, muted on ink 9.1, cyan on ink 10.9, button text on cyan 10.9, text on paper 16.7, muted on paper 6.2, deep cyan link on paper 5.9, deep gold on paper 4.6.
- Why cyan-to-violet: reads as AI without the cliché of blue, and it is rare in Canadian ISO consultancies, so it stands out. Gold on the light side signals trust.

## Typography
Recommended: **Sora** (headlines, geometric and confident) with **Inter** (body, highly readable).
Alternative: Fraunces serif with Inter, which is more editorial but less "AI".
Note: the preview shows a fallback font because this workspace blocks Google Fonts; Sora will load on the live site.

## Motion principles
- One easing curve everywhere: cubic-bezier(0.22, 1, 0.36, 1), a fast start with a soft landing.
- Three durations: 150 ms (hover), 300 ms (UI), 700 ms (scroll reveals and hero).
- Stagger groups by 60 ms. Reveals move 24 px up and fade in; icons draw their strokes.
- Reduced motion switches all durations to 0 (already in the tokens).
- Hero: cursor-reactive node field in cyan and violet; static image fallback.
- Signature moment: the Spark I forms from nodes on first load.

## Design tokens
`tokens.css` (for the site) and `tokens.json` (for tools). They lock colours, type scale, spacing (8 px base), radii, motion and shadows. Every page uses these values only.

## Preview
Open `preview.html` to see the hero, logos, palette and card style together.

## Decision
Owner chose the combination of A and C. Locked.
