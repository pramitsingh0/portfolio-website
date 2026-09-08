---
name: Pramit Singh Portfolio
description: A warm-grey editorial ground, one compressed heavyweight face at extreme scale contrast, and a live chrome object under studio light.
colors:
  ground: "#efe7e6"
  ground-raised: "#f4eeed"
  ink: "#141516"
  ink-soft: "#67605d"
  rule: "#b1b1ad"
  accent: "#0b5cff"
  accent-text: "#0a4ad4"
  pill-border: "#b3aca9"
  ground-dark: "#131314"
  ground-raised-dark: "#1c1c1e"
  ink-dark: "#f2efee"
  ink-soft-dark: "#9b9b9e"
  rule-dark: "#34343a"
  accent-dark: "#5b8dff"
  accent-text-dark: "#7ea6ff"
  pill-border-dark: "#3f3f47"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "min(19.2cqw, 30svh)"
    fontWeight: 900
    lineHeight: 0.78
    letterSpacing: "-0.005em"
    fontVariation: "font-stretch: 62%"
  headline:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(2.6rem, 5.6vw, 5.1rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch: 92%"
  title:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(2.1rem, 4vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.032em"
    fontVariation: "font-stretch: 92%"
  metric:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "5.19vw"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch: 100%"
  lede:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "2.4vw"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.018em"
  body:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.83rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.045em"
rounded:
  pill: "999px"
  card: "20px"
  stage: "22px"
  focus: "4px"
spacing:
  gutter: "3.13%"
  gutter-mobile: "6vw"
  section-y: "clamp(5rem, 11vh, 9rem)"
  block: "clamp(3rem, 6vh, 4.5rem)"
  card-pad: "2.2rem"
  grid-gap: "1.4rem"
  pill-gap: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "1.75rem 3.25rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  button-nav:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
  link-secondary:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  tag-pill:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1.05rem 2.35rem"
  chip-stack:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.32rem 0.8rem"
  card:
    backgroundColor: "{colors.ground-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  social-pill:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 2rem"
  social-pill-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  nav-bar:
    rounded: "{rounded.pill}"
    padding: "0 0.55rem 0 1.9rem"
    height: "7.4%"
---

# Design System: Pramit Singh Portfolio

## Overview

**Creative North Star: "The Lit Studio"**

A warm grey paper ground, a name set so large it touches both edges, and one real object under studio light. The page is the familiar portfolio skeleton — hero, about, experience, projects, contact, in that order — and every gram of ambition goes into finish rather than structure. Nothing here is a metaphor for the work; the work supplies content, never concept.

Density is deliberately uneven. The first viewport is a single loud gesture: a nine-hundred-weight compressed wordmark, a hairline, three numbers, a paragraph, two calls to action, and a rendered chrome object in a rounded inset card. Below the fold the page drops to a quiet editorial rhythm — hairline-separated sections, generous vertical air, body copy in a softened warm grey, and one blue dot as the only ornament. The contrast between those two registers is the design; a recruiter resolves the top in seconds, an engineer is rewarded for scrolling into the calm.

Materially it is flat paper with one exception: things that lift are the things that float. The nav is frosted glass over the ground, cards and the hero stage carry a soft two-part contact shadow, and everything else sits directly on the page with a 1px hairline instead of a border-box. The rejected worlds are on record: the dark-terminal developer default, the concept-metaphor structure, and the template logo grid.

**Key Characteristics:**

- Warm light-grey ground carrying ~73% of the composition
- One family, Archivo Variable, driven across both the weight and the width axis
- Extreme scale contrast: an edge-to-edge display band against 0.83rem tracked captions
- Pill for anything interactive, 20–22px for anything that holds content
- Flat by default; frosted glass for the nav, contact shadow for cards and the stage
- A rendered still, not a live canvas, as the hero anchor
- Full light/dark theming under `:root[data-theme='dark']`

## Colors

A warm neutral paper ground with near-black ink and exactly one electric blue, which appears at display scale and almost nowhere else.

### Primary

- **Signal Blue** (`{colors.accent}`): The single accent. It appears on the emphasised phrase in the about statement, the bullet markers in the experience list, the text selection highlight, the focus ring. It is a display-size colour only.
- **Signal Blue Text** (`{colors.accent-text}`): The body-size counterpart. Used for the active nav item and its dot, and for the hover state of card links and the contact email. Not a stylistic variant — see the Two Blues Rule.

### Neutral

- **Warm Paper** (`{colors.ground}`): The page ground and the text colour of anything sitting on ink (primary button labels, hovered social pills).
- **Raised Paper** (`{colors.ground-raised}`): Card fills and the hero stage's gradient base; the one step up from ground, never a third step.
- **Graphite Ink** (`{colors.ink}`): Headlines, the display band, metric numbers, the lede, button fills, and interactive text at rest.
- **Warm Grey Ink** (`{colors.ink-soft}`): All secondary body copy — about paragraphs, experience bullets, card blurbs, captions, the footer line, and nav links at rest.
- **Hairline Grey** (`{colors.rule}`): The 1px rule under the display band and the dividers between metric blocks.
- **Pill Grey** (`{colors.pill-border}`): The nav's 1px border and the theme toggle's ring.

Dark theme mirrors every token one-for-one under `:root[data-theme='dark']` with `color-scheme: dark`; nothing is theme-only. Section borders, card borders, tag borders and chip fills are not tokens — they are `color-mix` percentages of `--ink` against transparent (12%, 14%, 42%, 7%), so they follow the theme automatically.

### Named Rules

**The Two Blues Rule.** `--accent` is 4.32:1 against the ground: legible as display type, failing WCAG AA at body size. `--accent-text` at 5.6:1 exists solely to carry the blue down to body sizes. Anything under roughly 24px that needs to read blue uses `--accent-text`. This is a contrast rule, not a taste preference, and the two values are never interchanged.

**The One Blue Rule.** Blue never fills a surface. It is an emphasised word, a 6px bullet, a 3px active dot, a selection highlight, a focus ring, and a reflection in the chrome. Every button, pill and card is ink or paper.

**The Softened Body Rule.** Long-form copy is `--ink-soft` (5.03:1), tinted from the ground's own hue rather than a cool grey, so paragraphs recede without going cold. `--ink` is reserved for headings, the lede, and interactive text.

## Typography

**Display Font:** Archivo Variable (Google Fonts, `wght` 100–900 + `wdth` 62–125), with `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`
**Body Font:** the same family; there is no second face
**Label Font:** the same family at 0.83rem with +0.045em tracking

**Character:** One grotesque doing every job, separated by axis rather than by family. The width axis is the primary expressive tool: the display band runs at 62% width so a full name can span the viewport at nine hundred weight without breaking, section headings sit at 92%, and metric numbers snap back to 100% so the figures read as data rather than as poster type. `font-synthesis: none` is set globally — every weight and width shown is a real instance of the variable font.

### Hierarchy

- **Display** (900, `min(19.2cqw, 30svh)`, width 62%, line-height 0.78): the name band only, one undivided full-bleed line, `white-space: nowrap`.
- **Statement** (900, `clamp(2.6rem, 7vw, 6.4rem)`, width 80%): the contact closing line, the only other place the nine-hundred weight appears.
- **Headline** (800, `clamp(2.6rem, 5.6vw, 5.1rem)`, width 92%, max 22ch): the about section's thesis sentence, with one `<em>` reset to normal style and coloured `--accent`.
- **Title** (800, `clamp(2.1rem, 4vw, 3.6rem)`, width 92%): section headings.
- **Metric** (700, `5.19vw`, width 100%, tracking -0.035em): the three hero figures.
- **Lede** (400, `2.4vw`, line-height 1.3): the hero positioning paragraph, `--ink`.
- **Body** (400, 1.04–1.16rem, line-height 1.58–1.62, `--ink-soft`): capped at 46ch in the about grid, 74ch in experience bullets.
- **Label** (400, 0.83rem, +0.045em tracking, uppercase in content not CSS): metric captions.

### Named Rules

**The Width-Axis Rule.** Scale is bought with the `wdth` axis before anything else. The display band reaches edge to edge by compressing to `font-stretch: 62%`, not by shrinking, and it relaxes as the viewport narrows (78% under 1024px, 72% under 640px) because a short measure no longer needs the compression. Never letterspace a heading to fill a line; change the width axis.

**The Container Query Rule.** The display band is sized `min(19.2cqw, 30svh)` against `container-type: inline-size` on `.hero`, not in `vw`. Viewport units broke the moment `.hero` took a 1440px cap: past that width the container stops growing but `vw` does not, and the headline overruns. The `30svh` arm caps the band on short landscape viewports. Any type that must fit a capped container is sized in `cqw`.

**The One Family Rule.** There is no second typeface. Contrast comes from weight (400/700/800/900), width (62/80/92/100%), and scale — a ratio of roughly 30:1 between the display band and a caption.

## Layout

A single-column scroll with a 1440px cap. Both the hero and every `.sec` share `max-width: 1440px; margin-inline: auto`, and the horizontal gutter is `3.13%` — the measured left edge of the approved comp — becoming `6vw` under 640px.

The hero is a fixed composition. Above 1024px it is `height: 100svh` (min 640px) with each region absolutely positioned at its measured fraction: the nav at 10%/80% width, the band at y 9.96% for 27.93% height, the hairline at 38.1%, metrics at 40.6%, the lede at 54.9% for 37.24% width, the CTA at 79.98%, the stage at 60%/40% for 40%×50%, and the tag row at 91.2%. Two intermediate breakpoints (1400px, 1180px) shrink the lede and pill padding to keep that composition honest between 1280 and 1600.

Below 1024px the absolute composition is abandoned wholesale: every hero region returns to `position: static` and stacks in source order inside `padding: 7.5rem 5vw 4rem`, the band wraps, and the stage becomes a 4:3 block (1:1 under 640px). The nav stays fixed but drops its inline links into a full-width second row inside the same pill rather than hiding them.

Below the fold the rhythm is uniform: sections separated by a 1px 12%-ink top border, `clamp(5rem, 11vh, 9rem)` of leading air, `clamp(3rem, 6vh, 4.5rem)` between a heading and its content. Projects are a rigid two-column grid with a 1.4rem gutter collapsing to one column at 900px; about is `auto-fit, minmax(320px, 1fr)`; experience is a `minmax(220px, 26%) 1fr` two-column row per job, collapsing to one column at 1024px.

**Motion.** The hero entrance is a seven-step CSS stagger on `cubic-bezier(0.22, 1, 0.36, 1)`: nav at 0s, band at 0.06s, metrics 0.22s, lede and stage 0.3s, CTA 0.38s, tags 0.46s, with the hairline fading in last at 0.5s. Below the fold, reveals are IntersectionObserver-driven at `rootMargin: 0px 0px -12% 0px` with three variants — `rise` (22px up), `slide` (14px up, 10px left), `scale` (16px up, 0.985) — so consecutive sections do not repeat one identical gesture; siblings are staggered 80–160ms. A global `prefers-reduced-motion` block collapses every animation and transition to 0.01ms, and `Reveal` skips its observer and shows immediately.

**The Reduced-Motion Rule.** Motion is decoration on top of a page that is complete without it. Every animated element has its final state as its resting state; nothing appears only on animation.

## Elevation & Depth

Flat by default. The ground is one flat plane, sections are separated by hairlines rather than by cards, and most surfaces have no shadow at all. Depth appears in exactly three places: the frosted nav floating over the page, the two content surfaces that lift (project cards on hover, the hero stage always). Both shadows are two-part — a 1–2px contact darkening plus a wide, heavily-negative-spread ambient pool — so the object reads as resting on paper rather than as glowing.

### Shadow Vocabulary

- **Card** (`0 1px 2px rgb(20 21 22 / 0.04), 0 12px 32px -12px rgb(20 21 22 / 0.14)`): the hero stage at rest, project cards on hover.
- **Nav** (`0 1px 2px rgb(20 21 22 / 0.05), 0 16px 40px -16px rgb(20 21 22 / 0.22)`): the floating pill nav only. Heavier, because it is the only element that overlaps content.

Both tokens are redefined in dark theme against pure black at 0.4–0.7 alpha.

### Named Rules

**The Earned Lift Rule.** A surface gets a shadow only if it genuinely floats above the page (the nav), is a window into another space (the hero stage), or is responding to the pointer (a hovered card). Static content sits flat on the ground with a hairline.

## Shapes

Two radii and one line weight. Anything interactive or label-like is a full pill (999px): the nav bar, the primary and nav CTAs, tech tag pills, project stack chips, social links, and the placeholder flag. Anything that holds content is softly rounded — 20px for project cards, 22px for the hero stage. Circles appear only at small utility scale: the 2.8rem theme toggle, the 6px experience bullet, the 3px active-nav dot. Focus rings round at 4px.

Borders are always 1px and always low-contrast: `--rule` for structural hairlines, `--pill-border` for the nav, and `color-mix` of `--ink` at 12% (section rules), 14% (cards at rest), 30% (cards hovered) or 42% (tag and social pills) everywhere else. There are no thick borders, no double rules, and no dividers heavier than 1px anywhere in the build.

## Components

### Buttons

- **Shape:** full pill (999px).
- **Primary** (`.cta__primary`): ink fill, paper label, 600 weight, `1.75rem 3.25rem` padding at 1.4rem, tightening to `1.45rem 2.6rem` under 1400px and `1.15rem 2.2rem` under 1024px; full width on mobile.
- **Nav CTA** (`.nav__cta`): the same ink pill at `0.9rem 1.6rem` / 1.02rem.
- **Hover:** `translateY(-1px)` (nav) or `-2px` (primary) with opacity to 0.9–0.92 over 0.18s on `cubic-bezier(0.2, 0.9, 0.3, 1.2)`. No colour change, no shadow.
- **Press:** `scale(0.97)` over 100ms `ease-out`, on `:active` — fires on pointer-down, not on release. Every interactive element gets this; it is the page's only tactile feedback.
- **Secondary** (`.cta__secondary`): an underlined text link at 1.32rem with a 6px underline offset and an inline SVG arrow that slides 3px down on hover.
- **Focus:** every link and button takes a global 2px `--accent` outline at 3px offset.

### Chips

- **Tag pill** (`.tags li`): transparent fill, 42%-ink 1px border, 999px, `1.05rem 2.35rem` at 1.12rem. Hover deepens the border to full `--ink`. The hero stack row.
- **Stack chip** (`.card__stack li`): 7%-ink fill, no border, `0.32rem 0.8rem` at 0.84rem in `--ink-soft`. Inside project cards only.
- **Placeholder flag** (`.card__flag`): a dashed 34%-ink border pill at 0.72rem. It marks unverified copy and is a content-integrity affordance, not decoration; never restyle it into a neutral chip.

### Cards / Containers

- **Corner Style:** 20px.
- **Background:** `--ground-raised` on `--ground`; the one tonal step in the system.
- **Border:** 1px at 14% ink, going to 30% on hover.
- **Shadow Strategy:** none at rest; the card shadow appears on hover with a `translateY(-4px)` lift over 0.3s.
- **Internal Padding:** 2.2rem, with `margin-top: auto` on the link row so every card's links align regardless of blurb length.

### Navigation

A fixed frosted pill centred at 2.6% from the top, 80% wide (max 1230px), 7.4% tall (min 68px): `--ground-raised` at 72% opacity with `backdrop-filter: blur(18px) saturate(1.6)`, a 1px 55%-opacity `--pill-border`, and the nav shadow. The wordmark is 700 at 1.28rem with its suffix in `--ink-soft`; links are 1.06rem `--ink-soft` going to `--ink` on hover. The active link is `--accent-text` with a 3px dot centred 0.55em below it.

**The Honest Current Rule.** `aria-current="page"` is set from a scroll-spy IntersectionObserver (`rootMargin: -45% 0px -50% 0px`) that picks the highest-ratio intersecting section. It is never hard-coded and never set from a click handler; the indicator must describe where the reader actually is.

Under 1024px the pill keeps its links, wrapping them into a full-width justified second row inside the same pill at 0.94rem. A fixed pill with no links is not a navigation bar.

### Hero Object System

The signature element of the page: a single object in the inset panel to the right of the hero copy.

**FINAL DECISION — the object ships as a rendered still, not real-time 3D.**

The approved comp's glass trefoil knot is cropped from `.impeccable/mocks/comp-3.webp` and shipped as `hero-knot.webp` (1216×1032, 47KB). It is placed with `object-fit: cover` at 112% inside the panel so the render's own studio ground fills the card edge to edge, and it is animated only by cursor parallax: a damped `translate3d` + `rotateY/rotateX` on pointer move (about 14px and 9° at the extremes), plus a small scale response to the CTA `mood`. In dark mode it keeps its bright ground and reads as an illuminated lightbox; `filter: brightness(0.9) contrast(1.03)` stops it glaring.

Live 3D was built and rejected — three versions, the best reaching ~80% of the reference render for 260KB of JS plus a 1.6MB HDRI. Caustics and multi-bounce refraction are not real-time features. The still is 47KB. Do not revisit this.

## Do's and Don'ts

### Do:

- **Do** use `--accent-text` (#0a4ad4 / 5.6:1) for any blue at body size and `--accent` (#0b5cff) only at display size. The Two Blues Rule is a contrast requirement.
- **Do** set long-form copy in `--ink-soft` and reserve `--ink` for headings, the lede and interactive text.
- **Do** buy display scale with the `wdth` axis (62–100%) before reaching for tracking or a second face.
- **Do** size type that must fit the 1440px-capped hero in `cqw` against `.hero`'s container query, never in `vw`.
- **Do** give every interactive or label-like element a 999px pill and every content surface a 20–22px radius.
- **Do** keep borders at 1px and low contrast, expressed as a `color-mix` percentage of `--ink` so they follow the theme.
- **Do** define every new colour in both `:root` and `:root[data-theme='dark']` in the same commit.
- **Do** vary the `Reveal` variant between adjacent sections so the page does not repeat one gesture down the scroll.
- **Do** ship every animation with a resting state that is already its final state, and let the global reduced-motion block neutralise it.
- **Do** add a new hero object as a lazy module in `registry.ts` taking `{ mood }`, and change `ACTIVE`.
- **Do** drive `aria-current` from the scroll-spy observer.

### Don't:

- **Don't** put `--accent` on body-size text, or fill a surface with blue. Blue is a word, a dot, a bullet, a ring and a reflection.
- **Don't** introduce a second typeface or a third tonal step above `--ground-raised`.
- **Don't** letterspace a heading to make it fill its line.
- **Don't** attach a shadow to a static surface. Shadows belong to the floating nav, the stage, and hovered cards.
- **Don't** thicken a rule past 1px or replace a hairline with a boxed container.
- **Don't** reach for real-time WebGL to reproduce a rendered still. This was tested and rejected.
- **Don't** ship a multi-megabyte runtime asset (HDRI, `.glb`) for the hero. The whole first load is currently 280KB; the reference site's hero video alone is 3.99MB.
- **Don't** put information in the hero object that is not also in the DOM; it is decorative and carries `alt=""`.
- **Don't** restyle or remove the dashed placeholder flag while the copy it marks is unverified.
- **Don't** hide the nav links on mobile and leave a fixed pill with only a logo and a button.
