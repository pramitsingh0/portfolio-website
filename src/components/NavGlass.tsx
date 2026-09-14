import { useEffect, useId, useRef, type CSSProperties } from "react";
import {
  createNavGlassMap,
  GLASS_DISPLACEMENT_SCALE,
} from "../lib/navGlassMap";

export default function NavGlass() {
  const id = `nav-glass-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const material = useRef<HTMLSpanElement>(null);
  const filter = useRef<SVGFilterElement>(null);
  const map = useRef<SVGFEImageElement>(null);

  useEffect(() => {
    const el = material.current;
    const filterEl = filter.current;
    const image = map.current;
    // CSS.supports only tests parsing: WebKit/Gecko may accept url() yet
    // not render SVG backdrop displacement. Keep their CSS glass fallback.
    const chromium = /(?:Chrome|Chromium|Edg)\//.test(navigator.userAgent);
    if (!el || !filterEl || !image || !chromium) return;
    const simple = matchMedia(
      "(prefers-reduced-transparency: reduce), (prefers-contrast: more)",
    );
    let timer = 0;
    let lastSize = "";
    let width = 0;
    let height = 0;
    const build = () => {
      if (simple.matches || width < 1 || height < 1) return;
      const size = `${width}:${height}`;
      if (size === lastSize) return;
      const data = createNavGlassMap(width, height);
      if (!data) return;
      image.setAttribute("href", data);
      el.dataset.refraction = "true";
      lastSize = size;
    };
    const resize = (entries: ResizeObserverEntry[]) => {
      const box = entries[0].borderBoxSize[0];
      width = Math.ceil(box.inlineSize);
      height = Math.ceil(box.blockSize);
      // Stretch the existing field during a morph. Rebuild only after the
      // size settles, not on every animation frame or scroll event.
      filterEl.setAttribute("width", String(width));
      filterEl.setAttribute("height", String(height));
      image.setAttribute("width", String(width));
      image.setAttribute("height", String(height));
      window.clearTimeout(timer);
      if (!lastSize) build();
      else timer = window.setTimeout(build, 160);
    };
    const preference = () => {
      window.clearTimeout(timer);
      if (simple.matches) delete el.dataset.refraction;
      else {
        lastSize = "";
        build();
      }
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    simple.addEventListener("change", preference);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      simple.removeEventListener("change", preference);
      delete el.dataset.refraction;
    };
  }, []);

  return (
    <>
      <span
        ref={material}
        aria-hidden="true"
        className="nav-material"
        style={{ "--nav-glass-filter": `url(#${id})` } as CSSProperties}
      />
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            ref={filter}
            id={id}
            x="0"
            y="0"
            width="1"
            height="1"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0.4"
              result="soft"
            />
            <feImage
              ref={map}
              x="0"
              y="0"
              width="1"
              height="1"
              preserveAspectRatio="none"
              result="lens"
            />
            <feDisplacementMap
              in="soft"
              in2="lens"
              scale={GLASS_DISPLACEMENT_SCALE}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
