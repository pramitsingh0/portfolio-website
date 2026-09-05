# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: recruiters and hiring managers** screening Pramit Singh for a full-stack or backend engineering role. They arrive from a resume link, LinkedIn, or an application, spend well under a minute, and are deciding one thing: is this person worth contacting?

**Secondary: senior engineers and tech leads** doing the technical half of that vetting, often on a second visit or a deeper scroll. They want to see how he thinks about architecture and tradeoffs, not a skills grid.

The site must serve both reading speeds on the same surface: a scan that resolves in seconds, and a deeper read that rewards the engineer who keeps going.

## Product Purpose

A personal portfolio site for Pramit Singh, backend developer (Bangalore, India), replacing an abandoned open-source portfolio template fork. It exists to convert a screening visit into contact — an email, a LinkedIn message, an interview request. Success is inbound contact; everything on the page serves that conversion.

## Positioning

**Pramit presents as a Full Stack Developer, not a Backend Developer.** This is his explicit instruction, made on market-demand grounds, and it is supportable rather than invented: `cv.md` lists React, HTML and CSS under Frontend; Chingu Rooms was a full-stack build with a React front end; the MoLog role was titled Full Stack Developer Intern. The `cv.md` professional summary has been updated to match. Backend remains where the depth and the metrics are — the framing widens, the evidence does not change.

The specific claim: end-to-end ownership of production systems, front to back, with measured latency and reliability impact, at 2+ years of experience.

The site's own craft is part of the argument. A developer presenting through an interface with real design rigor reads as broader capability than the same CV as a PDF.

## Operating Context

- Visitors arrive via a link on a resume, LinkedIn profile, job application, or DM — rarely by search. The link is pasted; the visit is short and often deliberate.
- Frequently opened on a phone (recruiter between screens) and on a desktop (engineer at work).
- Currently deployed at `https://pramitsingh.netlify.app`. The old site was a fork of an open-source portfolio template ("free portfolio template" boilerplate); its generic template copy, sample projects, illustrations, and structure are **anti-reference**, not heritage. Only the factual data extracted from it carries forward.
- Google Analytics (`G-M11CMZ12Q`) was present on the old site. Not confirmed as a requirement.

## Capabilities and Constraints

- Static marketing-style site. No accounts, no backend, no CMS. Content ships in the repo.
- Existing scaffold: React 19, Vite 8, TypeScript, Tailwind CSS v4, pnpm, React Compiler enabled via Babel plugin. `src/` currently holds the untouched Vite starter and is disposable.
- Deploy target is Netlify (static build output). Any dependency or technique chosen must survive a plain static build with no server runtime.
- Must hold up on a phone over a mediocre connection: heavy motion and 3D cannot come at the cost of the recruiter scan failing to load or resolve quickly.
- Image generation runs through `OPENAI_API_KEY` (`gpt-image-2`, ~$0.05–0.25/image) when set; Pramit has said he will add it, which puts the build on the comp-first path.
- **Undecided:** whether Google Analytics carries over; whether the site is single-page scroll or multi-route.

## Brand Commitments

Binding visual constraints stated by Pramit, recorded here as product-level direction and not expanded:

- Apple's design principles as the governing philosophy.
- Liquid glass / glassmorphism as a named material.
- Motion and animation throughout.
- Selective 3D elements "wherever required."
- Explicit instruction: be ambitious. He is a backend engineer who does not consider himself visually creative, has seen portfolio sites he admires, and is delegating the aesthetic judgment. Timid output is a failure against the brief.

Identity facts: name **Pramit Singh**. GitHub handle `pramitsingh0`. No existing logo, wordmark, brand palette, or typeface — nothing inherited to preserve.

### Standing direction preference (binding)

A first direction round was run and Pramit took the standing exit. These are durable preferences, not one-round reactions:

- **Conventional portfolio structure, executed at award-winning craft.** The familiar sections a visitor expects — hero, about, experience, projects, contact — in the familiar order. Craft ceiling is high; structural invention is not wanted. His words: "keep the portfolio generic," "it should be cool looking," and the concept he rejected was "too sophisticated."
- **Never derive the design concept from his work domain.** A direction built out of his backend work (a patch-bay routing panel) was rejected on exactly this ground: "no need to take my work ex as a reference for creative ideas." Job content supplies the page's *content*, never its *metaphor*.
- **Craft bar:** `sayan.dev` is the pinned reference (screenshots reviewed: light warm-grey ground, oversized greeting headline, checkmark capability list, pill CTA plus Download CV, floating social pills, blurred floating pill nav, split-flap milestone board, big-number stats, tag pills). Craft target is Awwwards-tier finish on that same conventional skeleton.
- **Hero anchor is a 3D / animated object, not a photograph.** No portrait is available or wanted; the interactive object carries the hero and delivers the 3D from his original brief.
- **No testimonials section.** He has none, none will be invented, and the slot is dropped rather than filled or faked.

## Evidence on Hand

**Authoritative content source: `cv.md` at the project root.** It is newer than every other record in the repo and supersedes them on conflict. It carries the professional summary, both current roles with metrics, Chingu Rooms, education, and the full skills breakdown.

Verified facts safe to use, all from `cv.md`:
- Meel (Jun 2025–present): 1,000+ daily orders on Cloud Run; ~30% API latency improvement; notification dispatch refactored out of the request path onto a Firestore `onDocumentCreated` collection-group trigger feeding Cloud Tasks with exponential-backoff retries (10 attempts, then one further retry after an hour), idempotent, ~5k notifications/day; Salla / Zid / WooCommerce webhook integrations; Zoho Books OAuth suite; bulk CSV/Excel ingestion; geospatial and AI route optimization; LLM route summaries on the Groq API.
- iComply Lifescience Solutions (Jul 2024–Jun 2025): NCO backend module; PHP/MySQL/Node PDF report generation; JWT auth; Django email microservice at 99% uptime; SQL query optimization from 12s to under 500ms.
- MoLog Media and Advertising, Full Stack Developer Intern (Apr–Jun 2022): led the migration of MoLog's Soham-ngma product to AMP, cutting page load times by ~50%.
- B.Tech EEE, Veer Surendra Sai University of Technology, 2020–2024, 7.55 CGPA.
- Contact: `pramitsingh0@gmail.com`, +91 9937877665, `github.com/pramitsingh0`, `linkedin.com/in/pramit-singh-dev/`.

**Projects — four real ones**, recovered from the old site's `assets/js/project.js` (git: `09c8317^:assets/js/project.js`). All repos are under `pramitsingh0`:
- **Chingu Rooms** — full-stack hotel booking platform. React, Node.js, Express, MongoDB. Led a team of 4 under a University of Helsinki training program; built session, booking, and simulated-payment services. Live: `https://chingu-bt-30.onrender.com/` · Repo: `https://github.com/chingu-voyages/v42-bears-team-30` · Certificate on Google Drive (link in `cv.md`).
- **AnimeFreak** — full-stack social platform for anime fans. Live: `https://animefreak.onrender.com` · Repo: `https://github.com/pramitsingh0/salmon-roe/`
- **DMail** — Django + vanilla JS single-page email client. Live: `http://pramitsingh1.pythonanywhere.com/` · Repo: `https://github.com/pramitsingh0/django-js-mail-app`
  - `PLACEHOLDER COPY, INVENTED:` "A single-page mail client built on Django with a vanilla JavaScript front end. Compose, reply, archive, and read without a page reload — the inbox mutates in place against a JSON API rather than re-rendering server-side templates."
- **Auctions** — Django auction web application. Live: `http://pramitsingh2.pythonanywhere.com/` · Repo: `https://github.com/pramitsingh0/django-auctions`
  - `PLACEHOLDER COPY, INVENTED:` "A Django auction marketplace where users post listings, place competing bids, comment, and keep a watchlist. Bid validation is enforced server-side so concurrent bids on the same listing resolve to one consistent winner."

⚠ **DMail and Auctions ship with invented placeholder copy, at Pramit's explicit instruction.** The recovered source had copy-paste errors (both read "hotel booking"), so the two descriptions marked `PLACEHOLDER COPY, INVENTED` above were written from the project names and stacks alone — nobody has read the repos. Titles, links, repos, and the Django/vanilla-JS stack are real; the feature claims are not verified. Pramit will replace them with accurate text later. Until he does, these two strings are the **only** unverified content on the site, and they must not spread: no metrics, no dates, no scale claims may be attached to either project.

**Assets recoverable from git** (`09c8317^:<path>`), not currently in the working tree:
- `assets/docs/Pramit_Singh_Resume.pdf` — a resume PDF exists in history but predates `cv.md` and is likely stale. Pramit has said he will supply a current one.
- Project screenshots: `assets/images/project-page/{chingurooms,animefreak,dmail,auctions}.png` — real captures of his projects.
- Company logos: `assets/images/experience-page/{meel.jpeg,icomply.jpeg,molog.jpg}`.
- Every other image in that history (flappybird, tic-tac-toe, poker, recipe, deepholi, doc2pen, movie-recommendation, minesweeper, chess, quiz, music, book, exercise, battery, autovaidya) is **template sample data and not Pramit's work**. Do not use.

**Absences that must not be fabricated:** no testimonials (the section is dropped by decision, see Brand Commitments), no references, no press, no open-source contribution record, no certifications beyond the Chingu one, no photo of Pramit confirmed, no case studies. The old site's `research.html`, `education.html`, `techstack.html`, and `references.html` were unmodified template boilerplate containing no real content about him.


## Product Principles

1. **Two reading speeds, one surface.** A recruiter must reach "worth contacting" in seconds without scrolling far; an engineer must find real technical substance if they keep going. Neither audience is served by diluting the page toward the other.
2. **Contact is the conversion.** Every section ends somewhere that leads to a reply. Nothing is a dead end.
3. **The craft of the site is a credential.** He is a backend engineer being judged partly on range; the interface itself carries that argument. Ambition here is on-brief, not decoration.
4. **Never invent a credential.** Metrics, roles, dates, project descriptions, and claims come from `cv.md` or from Pramit directly. A gap is left visible or designed around — never filled with plausible fiction.
5. **The depth is in the systems, not the stack list.** What distinguishes him is the retry semantics, the trigger-to-queue refactor, the 12s→500ms query work — not a grid of technology logos. Logo grids are the template's move, and the template is the anti-reference.

## Accessibility & Inclusion

No formal standard was mandated, but the committed visual direction creates two obligations the build must meet, not choose:

- **`prefers-reduced-motion` must be honored** throughout. A motion-heavy site with no reduced-motion path is unusable for some visitors and reads as careless to any engineer who checks.
- **Text contrast must hold over glass surfaces.** Glassmorphism fails contrast by default; legibility over translucent backgrounds is a hard requirement, not a tradeoff, since the entire point of the page is that the words get read.
- Keyboard reachability for every contact affordance and project link.
