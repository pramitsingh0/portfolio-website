# pramitsingh.netlify.app

Personal portfolio for Pramit Singh. React 19 + Vite + Tailwind v4, static build, deployed on Netlify.

- `DESIGN.md` — the design system (authoritative for every visual decision)
- `PRODUCT.md` — who the site is for and what it must not fabricate
- `BUILD-NOTES.md` — decision log, gotchas, open items
- `cv.md` — the single source of truth for every fact; `src/content.ts` mirrors it

```bash
pnpm install
pnpm dev      # local
pnpm build    # tsc + vite build → dist/
pnpm lint
```
