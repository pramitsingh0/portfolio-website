# Refractive navigation revision

The user rejects the directional wipe and wants restored animation replays, CSS wherever appropriate, and a convincing liquid-glass surface with no avoidable performance cost. They will supply a separate animation reference later. Proceed autonomously under the existing authorization.

## Decisions

Restore the approved fade / hold / shrink choreography. Move material opacity and visibility transitions to CSS; GSAP continues handling measured responsive geometry and interruption. Restore metric replay on scrolling back into the hero. Other first-load and section reveal behavior stays as it was before our performance pass.

Choose a small SVG displacement filter applied through CSS backdrop-filter. Use a rounded lens displacement field rather than random turbulence. Keep the central reading area neutral and refract a narrow rim; paint tint and specular highlights in CSS. Build the displacement map only on initial sizing and after resizing settles, never every scroll frame. Keep exactly one current map per nav and no permanent animation loop. Filters affect the backdrop only, never link text.

Pure CSS blur cannot spatially refract arbitrary underlying page content; WebGL approaches add a renderer and often require replicating the DOM/background. Chromium gets the displacement enhancement. Other engines keep the clear CSS glass fallback, since parsing a URL filter is not proof of rendering support. Reduced-transparency and high-contrast preferences use a solid surface.

## References

- https://ruri.design/blog/liquid-glass — comparison and linked implementations.
- https://dev.to/kevinbism/recreating-apples-liquid-glass-effect-with-pure-css-3gpl — blur/highlight approximation, explicitly lacks distortion.
- https://kube.io/blog/liquid-glass-css-svg/ — rounded bezel refraction and displacement mapping.
- https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feDisplacementMap — channel formula and sRGB interpolation.
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter — backdrop-root boundaries.
- https://bugs.webkit.org/show_bug.cgi?id=245510 — reference-filter support limitation.

## Verification

Build/lint; verify opacity appearance has no clip-path, counters replay, compare refraction with the fallback over actual content and a high-contrast test grid. Check desktop/mobile geometry, both themes, rapid direction changes, map regeneration frequency, and local frame timings. Do not claim identical native Apple rendering or guaranteed performance on untested browsers/devices.
