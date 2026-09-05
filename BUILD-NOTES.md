# Build Notes — Pramit Singh Portfolio

Written 2026-09-05, at the end of a design session that produced a complete working
implementation which was then deliberately removed so Pramit could build it himself.

**This file is the decision log and the implementation brief.** Nothing here needs to be
re-decided. If something contradicts your memory of a conversation, this file wins — it
was written from the artefacts, not from recollection.

## Where everything lives

| File                                  | What it owns                                                                              | Status                                   |
| ------------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------- |
| `PRODUCT.md`                          | Product truth: users, positioning, evidence, brand commitments, accessibility obligations | Authoritative, do not re-interview       |
| `DESIGN.md`                           | The design system: tokens, type ramp, components, named rules, do's and don'ts            | Authoritative, derived from working code |
| `.impeccable/design.json`             | Machine-readable sidecar of DESIGN.md                                                     | Generated                                |
| `.impeccable/surfaces/src-app-tsx.md` | The direction contract (THESIS / OWN-WORLD / STORY / FIRST VIEWPORT / FORM / FINISH)      | Authoritative                            |
| `.impeccable/mocks/comp-3.webp`       | **The approved comp.** The spatial contract for the hero                                  | Approved, signed off                     |
| `.impeccable/mocks/decision/`         | The direction round's rejected hand                                                       | Historical                               |
| `.impeccable/build/spec.json`         | Measured region boxes + sampled palette from the approved comp                            | Reference                                |
| `.impeccable/review/`                 | Captures of the working build: desktop, mobile, 1600, dark                                | Reference — this is what it looked like  |
| `.impeccable/assets/hero-knot.webp`   | The hero image asset, cropped from the approved comp                                      | Ready to use                             |
| `cv.md`                               | The single source of truth for every fact on the site                                     | Authoritative                            |

## The decisions, in the order they were made

1. **Mode is Persuade, not Experience.** The portfolio genre defaults to Experience
   (let the work lead), but that assumes viewable work. Backend systems are invisible.
   The job is making a recruiter act, so Persuade governs.
2. **Audience: recruiters first, engineers second.** Must survive a 30-second recruiter
   scan and hold up when a senior engineer reads properly. Two reading speeds, one page.
3. **Success is getting contacted.** Not memorability, not completeness. Every section
   ends somewhere that leads to a reply.
4. **Positioning is Full-Stack Developer; job titles stay real.** The hero says
   Full-Stack (Pramit's call, supportable from `cv.md`). The Meel role renders as
   **Backend Developer**, its actual title. Retitling a held job is fabrication and a
   recruiter verifies it. `cv.md`'s summary line was updated to Full Stack; the role
   headings were not.
5. **Structure is conventional, craft is not.** A direction round was run and Pramit took
   the standing exit: the familiar portfolio skeleton (hero / about / experience /
   projects / contact), executed at award-winning finish. His words: "keep the portfolio
   generic", "it should be cool looking", and the concept he rejected was "too
   sophisticated".
6. **Never derive the design concept from his work domain.** A direction built out of his
   backend work (a patch-bay routing panel) was rejected on exactly this ground: "no need
   to take my work ex as a reference for creative ideas". Job content supplies the page's
   _content_, never its _metaphor_.
7. **Craft reference is `sayan.dev`**, at Awwwards-tier finish on that same skeleton.
8. **Comp 3 approved** ("go with 3") — the editorial band composition: full-bleed name,
   hairline, metrics row, lede + CTAs left, object panel right, tag pills along the bottom.
9. **No testimonials section.** He has none, none will be invented, the slot is dropped.
10. **Hero object: a rendered still of the glass knot.** See DESIGN.md → Hero Object
    System for the full reasoning and the three rejected live-3D attempts.

## What the page contains

Sections, in order. No kickers/eyebrows above headings — that is a hard ban.

- **Hero** — floating frosted pill nav (wordmark, 4 links, theme toggle, Say Hello);
  `PRAMIT SINGH` full-bleed edge to edge; hairline; three metrics
  (`2+` years / `1,000+` orders per day / `500ms` down from 12s); positioning paragraph;
  `Let's Talk` pill + `Download CV`; glass knot panel right; 8 tech pills.
- **About** — statement line ("I build production-ready systems that stay correct when
  the traffic arrives", with "production-ready" in accent blue), then two blocks:
  Where I work, and Education + Elsewhere.
- **Experience** — Meel, iComply Lifescience Solutions, MoLog Media and Advertising, each
  with real bullets from `cv.md`. Two-column: company/role/period left, bullets right.
- **Projects** — Chingu Rooms, AnimeFreak, DMail, Auctions in a 2×2 grid (single column
  below 900px). Cards carry name, blurb, stack chips, Live + Source links.
- **Contact** — "Let's build something.", the email as a large link, four pill social
  links (Email / GitHub / LinkedIn / WhatsApp), footer line.

## Content rules that are load-bearing

- **Every fact comes from `cv.md`.** No invented metrics, dates, titles or stacks.
- **DMail and Auctions carry invented placeholder copy**, written at Pramit's explicit
  instruction ("Just add some place holder dummy text... Make things up"). They **must**
  render a visible marker — a dashed "Description pending" chip beside the heading — so
  they never read as verified. Do not remove the marker while the copy is unverified.
- **AnimeFreak has no recorded stack.** `cv.md` does not state one. Its chip row stays
  empty until Pramit supplies the real technologies. Do not guess.
- **No testimonials, no press, no certifications** beyond the Chingu certificate.

## Accessibility obligations (not preferences)

These came out of a finish review that computed the ratios. PRODUCT.md makes them hard
requirements because the whole point of the page is that the words get read.

- `--ink-soft: #67605d` on `--ground: #efe7e6` = **5.06:1**. The earlier `#6e7172` was
  **4.04:1** and failed AA on the default theme, across every body paragraph on the page.
- **The Two Blues Rule.** `--accent: #0b5cff` is 4.32:1 — display sizes only.
  `--accent-text: #0a4ad4` is 5.86:1 — anything at body size. Dark theme: `#7ea6ff` at 7.87:1.
- Honour `prefers-reduced-motion` throughout; every animation's resting state is its final state.
- `aria-current` must be driven by a scroll-spy IntersectionObserver, never hard-coded.
  A frozen `aria-current="page"` on Home asserts a location that is wrong for most of the page.
- The hero object is decorative: `alt=""`, no information in it that is not in the DOM.
- Project links must not be eight links named only "Live" and "Source" — give each an
  `aria-label` naming its project.
- `<Reveal>` wrappers must not put a `<div>` inside an `<ol>`; use an `as` prop.
- **Mobile must have navigation.** Hiding the nav links below 1024px with no replacement
  leaves a 7,320px page with no way to jump. The links wrap into a second row inside the pill.

## Layout gotchas that cost real time

- **The hero rail vs the full-bleed band.** Sections are `max-width: 1440px` centred.
  Capping `.hero` the same way is wrong — it steals the name band's full bleed, which is
  the page's signature gesture. Instead give `.hero` a rail variable
  `--rail: max(3.13%, calc((100% - 1440px) / 2 + 45px))` and use it for metrics, lede,
  CTA and tags, while `.band` stays edge to edge at `left: 0.65%`.
- **Size the headline in `cqw`, never `vw`.** Put `container-type: inline-size` on `.band`
  and use `font-size: min(19.35cqw, 30svh)`. Viewport units overflow the moment the
  container is capped, and the `svh` term stops a short laptop viewport eating the crown.
- **Don't stack `transform: scaleX()` on an exhausted width axis.** Archivo's `wdth`
  floor is 62%; squeezing further with a transform thins the vertical stems against the
  horizontals. The comp's lettering is drawn narrow, not squeezed narrow.
- **The stage panel starts at `left: 60%`** (the comp's column) with `right: var(--rail)`.
  Aligning its left edge to the rail crowds the `500ms` metric.
- **Tag pills need `flex-wrap: wrap`.** With `nowrap` inside `.hero { overflow: hidden }`
  the eighth pill clips between roughly 1025 and 1180px.

## Tooling gotchas (will bite again)

- **Screenshots of a page using `100svh`:** never resize the viewport to the full scroll
  height to get a full-page capture. `svh` follows the viewport, so a 3600px-tall window
  makes a `100svh` hero 3600px tall and the capture is meaningless. Use CDP
  `captureBeyondViewport` with the viewport metrics left alone.
- **Scroll-reveal + full-page screenshot:** an IntersectionObserver never fires if the
  page is never scrolled, so every `Reveal` section captures at `opacity: 0` and the
  screenshot looks blank. Walk the page top to bottom with a dwell per step, return to
  the top, then capture. Do **not** emulate `prefers-reduced-motion` to force them
  visible — that also suppresses the motion you are trying to inspect.
- **Chrome on macOS clamps headless windows to ~485px wide.** A `--window-size=390` capture
  is a 390px crop of a 485px layout, which looks broken when nothing is wrong. Use CDP
  `Emulation.setDeviceMetricsOverride` for a true mobile viewport.
- **Headless Chrome falls back to SwiftShader** and renders `transmission` materials
  badly. Any WebGL glass judged from a headless screenshot will look worse than reality.

## Open items — these need Pramit

1. **Resume PDF.** There is no current PDF in the repo. One exists in git history
   (`git show 09c8317^:assets/docs/Pramit_Singh_Resume.pdf`) but it predates `cv.md` and
   contradicts it — do not ship it. Until a real one exists, the `Download CV` affordance
   should not render at all; a CTA that 404s is worse than no CTA.
2. **AnimeFreak's real stack**, to fill its empty chip row.
3. **Correct copy for DMail and Auctions**, to replace the placeholder text and drop the flags.
4. **Decide whether Google Analytics carries over** (the old site had `G-M11CMZ12Q`).
5. **`index.html` head.** The working build used:
   `<title>Pramit Singh — Full-Stack Developer</title>`, a description naming the stack,
   `theme-color #efe7e6`, and OG title/description/`twitter:card`. Worth restoring —
   this URL gets pasted into LinkedIn and job applications.

## Recovered project data

Four real projects, recovered from the old static site's `assets/js/project.js`
(`git show 09c8317^:assets/js/project.js`). Screenshots for all four and the company
logos are also recoverable from that commit under `assets/images/`.

Everything else in that history (flappybird, tic-tac-toe, poker, recipe, deepholi,
doc2pen, movie-recommendation, minesweeper, chess, quiz, music, book, exercise, battery,
autovaidya) is **open-source template sample data and not Pramit's work.** The old site
was a fork of a free portfolio template; its structure, copy and illustrations are an
anti-reference, not heritage.

## Verified numbers from the removed build

For reference when rebuilding — these were real, measured on a production build:

- Total first load: **280KB** (HTML + CSS + JS + hero image).
- Entry JS: 205KB raw / **65.8KB gzipped**. CSS: 13.6KB / 3.9KB gzipped.
- Hero image: **47KB** at 1216×1032.
- For comparison: `sayan.dev`'s hero video alone is **3.99MB**.
- Dependencies needed: `react`, `react-dom`, `tailwindcss`, `@tailwindcss/vite`. Nothing else.
  (Tailwind was installed by the scaffold; the build used hand-written CSS with custom
  properties, not Tailwind utilities.)
