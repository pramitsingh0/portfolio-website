// Local visual/performance fixture; not imported by the production app.
import { createRoot } from "react-dom/client";
import Nav from "../src/components/Nav";
import "../src/index.css";

function run(mode: string) {
  document.body.dataset.mode = mode;
  window.scrollTo(0, 160);
  const output = document.getElementById("result")!;
  output.textContent = "Running…";
  let mapUpdates = 0;
  const mapObserver = new MutationObserver((changes) => {
    mapUpdates += changes.length;
  });
  const image = document.querySelector("feImage");
  if (image)
    mapObserver.observe(image, { attributes: true, attributeFilter: ["href"] });
  let previous = 0;
  let frame = 0;
  const deltas: number[] = [];
  const sample = (now: number) => {
    if (previous) deltas.push(now - previous);
    previous = now;
    window.scrollTo({ top: 160 + frame * 3, behavior: "instant" });
    if (++frame < 180) requestAnimationFrame(sample);
    else {
      mapObserver.disconnect();
      const sorted = [...deltas].sort((a, b) => a - b);
      output.textContent = JSON.stringify({
        mode,
        frames: deltas.length,
        mapUpdates,
        mean: +(deltas.reduce((a, b) => a + b, 0) / deltas.length).toFixed(2),
        p95: +sorted[Math.floor(sorted.length * 0.95)].toFixed(2),
        over25ms: deltas.filter((n) => n > 25).length,
      });
    }
  };
  requestAnimationFrame(sample);
}

createRoot(document.getElementById("root")!).render(
  <>
    <style>{`
      html {scroll-behavior: auto !important}
      .test-grid {height:2600px; background:repeating-linear-gradient(0deg,transparent 0 23px,#4475ad 23px 24px),repeating-linear-gradient(90deg,#151515 0 23px,#4475ad 23px 24px); padding:100px 40px; font-size:28px; color:#eee; line-height:96px}
      body[data-mode="fallback"] .nav-material {backdrop-filter:blur(1.5px) saturate(1.25) !important}
      .test-controls {position:fixed;bottom:0;left:0;right:0;z-index:100;background:#fff;color:#111;padding:12px;display:flex;gap:16px;align-items:center;font:14px system-ui}
      .test-controls button {border:1px solid #333;padding:8px;cursor:pointer}
    `}</style>
    <Nav />
    <main id="top" className="test-grid">
      {Array.from({ length: 24 }, (_, i) => (
        <p key={i}>REFRACTION {i} — The grid should bend only at the rim.</p>
      ))}
    </main>
    <div className="test-controls">
      <button onClick={() => run("refractive")}>Test refraction</button>
      <button onClick={() => run("fallback")}>Test CSS fallback</button>
      <output id="result">Ready</output>
    </div>
  </>,
);
