# Staged navigation morph

User authorized autonomous design and implementation, waiving review gates.

Use the existing GSAP timeline and separate material layer. Retain the existing hysteresis: compact after 64px, expand when returning within 16px of the top. This is a top-of-page transition, not a direction-sensitive toolbar throughout the page.

Down: form the full-width glass over 400ms from a subtle vertical compression, hold 180ms, contract over 600ms with restrained overshoot. Up: widen over 600ms, hold 180ms, dissolve over 350ms. Only the material scales; labels stay undistorted. Keep the existing responsive dimensions and theme tokens.

Freeze width, maximum width, and top before scheduling any delayed tween. Otherwise React's target state can clamp the shell before the glass formation. On interruption kill the previous sequence and continue from live values. On resize cancel stale pixel targets and settle to responsive CSS dimensions. On reduced motion settle geometry immediately and fade material over 150ms.

Alternatives considered: scroll scrubbing loses a reliable hold; simultaneous CSS transitions lose the requested distinct stages. A GSAP timeline fits existing dependencies and explicit timing.

Validation: build and lint; browser samples during formation, hold, contraction, expansion and dissolution; rapid reversal; resize; narrow layout and reduced motion. Source changes remain in the existing dirty workspace for user review.

## Follow-up: directional reveal and lightweight liquid glass

The user approved the staged timing and requested a top-to-bottom entrance instead of a fade, liquid-glass styling, and investigation of lag. Preserve the existing hold and contraction. Reveal the material with a linear 400ms clip-path sweep at full opacity; retain the dissolve on return. Reduced motion uses only the short opacity change.

Use a single 10px backdrop blur, static gradient highlights and inset rim shading. Remove the nav wrapper's filled opacity animation, which blocked the visible backdrop blur in browser comparison. Reduced transparency and increased contrast use a solid surface. No dependencies or image assets are added.

Performance investigation: the prior GSAP hook deferred context cleanup until unmount and retained successive animation records. The morph now owns and kills one current timeline in a layout effect, retaining presentation styles for reversals. Contain navigation layout, run hero counters once, and scope parallax to the image stage with stable untransformed bounds. Preserve other animations.

Validation: desktop DOM samples showed opacity 1 throughout the reveal while width held at 936px; the clip's lower edge moved downward while its side edges remained fixed. Checked mobile and both themes visually and exercised rapid reversals and resize. A temporary requestAnimationFrame probe did not reproduce sustained lag (baseline and a later scroll sample averaged 10ms with no frames above 25ms; an instrumented DOM-sampling run had one 51ms frame). These are local samples, not a cross-device performance guarantee. Removed probe after measurement. Build and lint are required after final cleanup.
