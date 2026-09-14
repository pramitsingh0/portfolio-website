import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { identity, nav } from "../content";
import Magnetic from "./Magnetic";
import NavGlass from "./NavGlass";
import { useReducedMotion } from "../hooks/useReducedMotion";

gsap.registerPlugin(useGSAP, MorphSVGPlugin, ScrollTrigger);

const sectionIds = ["top", "about", "experience", "projects", "contact"];
const sectionLabels: Record<string, string> = {
  about: "About",
  experience: "Experience",
  projects: "Projects",
  contact: "Contact",
};
const MOON = "M14 9.5A6 6 0 1 1 6.5 2a5.5 5.5 0 0 0 7.5 7.5Z";
const SUN = "M8 4.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z";

function useScrollSpy() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const ratios = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, r] of ratios)
          if (r > bestRatio) [best, bestRatio] = [id, r];
        setActive(best);
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);
  return active;
}

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? "light",
  );
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    localStorage.setItem("theme", next);
    // Crossfade the whole page between themes instead of a hard cut.
    if (document.startViewTransition) document.startViewTransition(apply);
    else apply();
  };
  return [theme, toggle] as const;
}

// One shared pill slides between links on hover; it fades in place, never from a stale spot.
function useHoverPill() {
  const pill = useRef<HTMLSpanElement>(null);
  const onEnter = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const p = pill.current;
    if (!p) return;
    const { offsetLeft, offsetWidth } = e.currentTarget;
    const hidden = p.style.opacity !== "1";
    p.style.transition = hidden ? "opacity 0.18s var(--ease-out)" : "";
    p.style.transform = `translateX(${offsetLeft}px)`;
    p.style.width = `${offsetWidth}px`;
    p.style.opacity = "1";
  };
  const onLeave = () => {
    if (pill.current) pill.current.style.opacity = "0";
  };
  return { pill, onEnter, onLeave };
}

// Wide and transparent at the top of the page; scrolling turns it into the glass pill.
// Hysteresis so it never flickers around the threshold.
function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => {
      if ((ScrollTrigger as { isRefreshing?: boolean }).isRefreshing) return; // refresh jumps to the top and back; not a real scroll
      setScrolled((s) => (s ? scrollY > 16 : scrollY > 64));
    };
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  return scrolled;
}

// Pin the presentation geometry before the delayed phase: data-state changes CSS
// endpoints immediately, including max-width. Text never scales with the material.
function useNavMorph(
  shell: React.RefObject<HTMLElement | null>,
  scrolled: boolean,
) {
  const reduce = useReducedMotion();
  const current = useRef<gsap.core.Timeline | null>(null);
  useLayoutEffect(() => {
    const el = shell.current;
    if (!el) return;
    const initialized = el.style.width !== "";
    current.current?.kill();
    const from = {
      width: el.getBoundingClientRect().width,
      top: parseFloat(getComputedStyle(el).top),
    };
    const measureTarget = () => {
      gsap.set(el, { clearProps: "width,top,maxWidth" });
      return {
        width: el.getBoundingClientRect().width,
        top: parseFloat(getComputedStyle(el).top),
      };
    };
    const to = measureTarget();
    // This must happen now, not inside a delayed fromTo: the wide glass
    // needs its full original width throughout formation and the hold.
    gsap.set(el, {
      ...(initialized && !reduce ? from : to),
      maxWidth: "none",
    });
    const tl = gsap.timeline();
    current.current = tl;
    // CSS owns the glass appearance; keep only responsive geometry in GSAP.
    if (initialized && !reduce) {
      tl.to(
        el,
        { ...to, duration: 0.6, ease: "back.out(0.45)" },
        scrolled ? 0.58 : 0,
      );
    }
    // Own only the live timeline. A persistent GSAP context would retain
    // every completed morph and measurement tween until Nav unmounts.
    // kill() preserves presentation styles for the next direction.
    return () => {
      tl.kill();
      current.current = null;
    };
  }, [shell, scrolled, reduce]);
  useEffect(() => {
    const onResize = () => {
      const el = shell.current;
      if (!el) return;
      current.current?.kill();
      gsap.set(el, { clearProps: "width,top,maxWidth" });
      const width = el.getBoundingClientRect().width;
      const top = parseFloat(getComputedStyle(el).top);
      gsap.set(el, { width, top, maxWidth: "none" });
    };
    addEventListener("resize", onResize);
    return () => removeEventListener("resize", onResize);
  }, [shell, scrolled, reduce]);
}

// The wordmark reads "pramit.space" on the hero and the current section's name below it,
// swapping with a short vertical slide.
function useWordmark(active: string | null) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const label = (active && sectionLabels[active]) || identity.wordmark.join("");
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || el.textContent === label) return;
      if (reduce) return void (el.textContent = label);
      gsap
        .timeline({
          defaults: { duration: 0.22, ease: "power2.out", overwrite: "auto" },
        })
        .to(el, { yPercent: -70, opacity: 0 })
        .call(() => (el.textContent = label))
        .fromTo(el, { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1 });
    },
    { dependencies: [label, reduce] },
  );
  return ref;
}

// Sun <-> moon morph on the theme toggle (MorphSVG), rays scale in behind the sun.
function useThemeIcon(theme: string) {
  const icon = useRef<SVGSVGElement>(null);
  const reduce = useReducedMotion();
  useGSAP(
    () => {
      const dark = theme === "dark";
      const d = reduce ? 0 : 0.5;
      gsap.to(".disc", {
        morphSVG: dark ? SUN : MOON,
        duration: d,
        ease: "power2.inOut",
      });
      gsap.to(".rays", {
        scale: dark ? 1 : 0.4,
        opacity: dark ? 1 : 0,
        rotate: dark ? 0 : -60,
        duration: d,
        ease: "power2.inOut",
        transformOrigin: "50% 50%",
      });
    },
    { scope: icon, dependencies: [theme, reduce] },
  );
  return icon;
}

export default function Nav() {
  const active = useScrollSpy();
  const [theme, toggleTheme] = useTheme();
  const { pill, onEnter, onLeave } = useHoverPill();
  const scrolled = useScrolled();
  const shell = useRef<HTMLElement>(null);
  useNavMorph(shell, scrolled);
  const wordmark = useWordmark(active);
  const icon = useThemeIcon(theme);

  return (
    <nav
      ref={shell}
      className="nav-shell fixed left-1/2 z-50 flex -translate-x-1/2 flex-wrap items-center gap-x-4 rounded-pill pr-2.5 pl-5 lg:pr-3 lg:pl-9"
      data-state={scrolled ? "pill" : "top"}
      aria-label="Main navigation"
    >
      <NavGlass />
      <a
        href="#top"
        className="flex min-h-14 items-center text-[1.2rem] font-bold text-ink"
        aria-label="Back to top"
      >
        <span ref={wordmark} className="inline-block">
          {identity.wordmark.join("")}
        </span>
      </a>

      <ul
        className="hairline relative order-last -mx-1 flex w-full justify-between py-2 pr-1 text-[0.94rem] lg:absolute lg:left-1/2 lg:order-none lg:w-auto lg:-translate-x-1/2 lg:justify-center lg:border-0 lg:py-0 lg:pr-0 lg:text-[1rem]"
        onPointerLeave={onLeave}
      >
        <span ref={pill} aria-hidden="true" className="nav-pill" />
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="nav-link"
              onPointerEnter={onEnter}
              aria-current={active === item.href.slice(1) ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="ml-auto flex items-center gap-2.5">
        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle pill flex size-9 items-center justify-center bg-ink text-ground"
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
        >
          <svg
            ref={icon}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <g className="rays" opacity="0">
              <path d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3.05 3.05l1.13 1.13M11.82 11.82l1.13 1.13M3.05 12.95l1.13-1.13M11.82 4.18l1.13-1.13" />
            </g>
            <path className="disc" d={MOON} fill="currentColor" stroke="none" />
          </svg>
        </button>
        <Magnetic strength={0.25}>
          <a
            href={`mailto:${identity.email}`}
            className="pill pill-ink px-4 py-2 text-[0.9rem]"
          >
            Say Hello
          </a>
        </Magnetic>
      </div>
    </nav>
  );
}
