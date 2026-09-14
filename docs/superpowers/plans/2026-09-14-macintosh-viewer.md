# Local Macintosh viewer

Replace the Spline scene with the supplied local GLB. Preserve the hero layout and intro. Use a dynamically imported Three.js viewer with a fixed camera, drag rotation, simple lighting, and rendering only on load, resize, or interaction. Cap pixel ratio at 1.5 and pause offscreen. Do not auto-rotate. Clean up geometry, materials, textures, observers, and the WebGL context on unmount. Show a loader and a fallback if loading fails. Credit the model author.

Validation: inspect GLB counts and external references; build and lint; inspect the local production viewer; verify render count stays constant at rest and changes on interaction; check mobile framing.

Asset inspection: 879,564 bytes, 16,490 triangles, one mesh/material, two embedded 32x32 PNG textures, no animations or glTF extensions. Gzip estimate 152,354 bytes (actual hosting compression may differ). ZIP contains only the GLB.
