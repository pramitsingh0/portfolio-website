# Refractive Navigation Implementation Plan

**Goal:** Restore approved motion and add actual backdrop refraction without a rendering dependency.
**Architecture:** CSS material transitions and highlights; one isolated SVG lens component with a debounced size-dependent displacement map; existing GSAP responsive geometry.
**Tech Stack:** CSS, SVG, native Canvas2D for one-time map generation, React, GSAP.

- [x] Remove clipping and material GSAP tweens from Nav.tsx; move .4s formation and delayed .35s dissolve to CSS, keep geometry start at .58s down / 0s up.
- [x] Restore Hero.tsx metric toggleActions restart none restart none.
- [x] Add NavGlass.tsx and a focused lens-map helper. Use one current data URL; resize attributes follow size, map builds debounce until dimensions settle. Disconnect observer and timeout on unmount.
- [x] Style a clear center, curved rim and directional specular reflections. Add Chromium enhancement and solid accessibility fallbacks.
- [x] Test optical field symmetry/neutral center, actual browser rendering, replays, breakpoint sizing, performance and production build/lint.

## Results

- Build, lint and three lens-field tests passed.
- CSS clip-path is none. The opacity fade precedes delayed GSAP geometry. Counter reset/replay was observed after returning to the hero.
- Mobile material/map matched at 308 × 110 CSS pixels; checked both themes. Desktop settled filter matched shell width. Viewport override reset after testing.
- Local 179-frame grid scrolling comparisons: refractive mean 10.01ms / p95 10.9ms / 0 frames above 25ms; CSS fallback mean 10ms / p95 11ms / 0 above 25ms. Another run while interacting with the other tab recorded one long frame (mean 10.67ms), so do not claim universal zero jank. Settled scrolling recorded zero map updates.
- Production JS gzip is 127.44KB and CSS gzip 7.21KB, versus 126.44KB and 6.86KB before this revision: about 1.35KB added compressed, no package dependency. Generated map stays local in memory.
- Safari/Firefox fallback was simulated via CSS in Chromium, not tested in native engines. Native Apple parity and cross-device frame rates are not claimed.
