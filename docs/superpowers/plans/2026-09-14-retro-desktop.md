# Implementation
1. Add HeroDesktop.tsx and scoped HeroDesktop.css: semantic buttons, inline SVG icons, welcome/about/projects state, close/restore, existing content links.
2. Switch Hero.tsx from HeroMacintosh to HeroDesktop. Retain old assets/source for reversibility; they must disappear from the production import graph.
3. Run pnpm build and pnpm lint. Inspect desktop/mobile in browser and verify window switching, close/restore and navigation.
