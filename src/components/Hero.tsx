import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import HeroDesktop from "./HeroDesktop";
import Magnetic from "./Magnetic";
import { hero, identity } from "../content";
import { useReducedMotion } from "../hooks/useReducedMotion";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// Count on first entry and replay when scrolling back up to the metrics.
// Static under reduced motion.
function Metric({
  value,
  suffix,
  label,
  delay,
}: (typeof hero.metrics)[number] & { delay: number }) {
  const reduce = useReducedMotion();
  const num = useRef<HTMLSpanElement>(null);
  const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

  useGSAP(
    () => {
      const el = num.current;
      if (!el) return;
      if (reduce) return void (el.textContent = fmt(value));
      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 1.4,
        delay: delay / 1000,
        ease: "power3.out",
        onUpdate: () => {
          const next = fmt(obj.n);
          if (el.textContent !== next) el.textContent = next;
        },
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "restart none restart none",
        },
      });
    },
    { dependencies: [value, delay, reduce] },
  );

  return (
    <div className="flex flex-col gap-2">
      <span className="t-metric">
        <span ref={num}>{reduce ? fmt(value) : 0}</span>
        {suffix}
      </span>
      <span className="t-label lg:text-[clamp(0.66rem,0.78vw,0.83rem)]">
        {label}
      </span>
    </div>
  );
}

// First-paint intro: the name rises letter by letter, the hairline draws across, then
// metrics, lede, CTA, stage and tags cascade in. One timeline, runs once, nothing under
// reduced motion (everything is already in its resting state).
function useIntro(area: React.RefObject<HTMLElement | null>) {
  const reduce = useReducedMotion();
  useGSAP(
    () => {
      if (reduce) return;
      const split = SplitText.create(".band", { type: "chars" });
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(
        split.chars,
        { yPercent: 55, opacity: 0, duration: 1.1, stagger: 0.035 },
        0.1,
      )
        .from(
          ".hero-rule",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.9,
            ease: "power3.inOut",
          },
          0.45,
        )
        .from(
          ".hero-in",
          { y: 26, opacity: 0, duration: 0.9, stagger: 0.09 },
          0.6,
        )
        .from(".stage", { y: 26, opacity: 0, scale: 0.98, duration: 1 }, 0.7)
        .from(
          ".hero-tag",
          { y: 14, opacity: 0, duration: 0.6, stagger: 0.04 },
          0.95,
        );
      return () => split.revert();
    },
    { scope: area, dependencies: [reduce] },
  );
}

export default function Hero() {
  const area = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  useIntro(area);

  return (
    <section
      id="top"
      ref={area}
      className="flex min-h-svh flex-col justify-between overflow-hidden pt-36 pb-8 lg:min-h-[max(640px,100svh)] lg:pt-[max(4.5rem,6svh)] lg:pb-[min(2rem,2.5svh)]"
      aria-label="Introduction"
    >
      <div className="band-wrap mx-gutter">
        <h1 className="band t-display">{identity.name}</h1>
      </div>

      <div className="hero-rule hairline mx-gutter mt-[2svh]" />

      <div className="mr-gutter ml-gutter grid flex-1 grid-cols-1 gap-x-[1.5%] gap-y-10 pt-[2svh] lg:grid-cols-[1fr_42%]">
        <div className="flex flex-col gap-8 lg:gap-[min(2.5rem,3svh)]">
          <div className="hero-in flex flex-col gap-y-6 sm:flex-row sm:flex-wrap sm:gap-x-[min(2rem,2.2vw)] sm:divide-x sm:divide-rule">
            {hero.metrics.map((m, i) => (
              <div
                key={m.label}
                className="sm:pr-[min(2rem,2.2vw)] sm:last:pr-0"
              >
                <Metric {...m} delay={220 + i * 90} />
              </div>
            ))}
          </div>

          <p className="t-lede hero-in max-w-[30ch] text-ink xl:max-w-[26ch]">
            {hero.lede}
          </p>

          <div className="hero-in mt-auto flex flex-wrap items-center gap-x-8 gap-y-4">
            <Magnetic className="max-sm:w-full">
              <a
                href="#contact"
                className="pill pill-ink px-9 py-5 text-center text-[1.15rem] max-sm:w-full lg:px-[min(3rem,3.4vw)] lg:py-[min(1.5rem,2.2svh)] lg:text-[min(1.35rem,2svh)]"
              >
                Let's Talk
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={identity.cv}
                download
                className="link-underline inline-flex items-center gap-2 text-[1.15rem] font-medium lg:text-[1.32rem]"
              >
                Download CV
              </a>
            </Magnetic>
          </div>
        </div>

        <div
          ref={stage}
          className="stage relative aspect-[4/3] overflow-hidden rounded-stage sm:aspect-square lg:aspect-auto lg:min-h-[320px]"
        >
          <HeroDesktop />
        </div>
      </div>

      <ul className="mx-gutter mt-8 flex flex-wrap gap-3 lg:mt-[min(2.5rem,3svh)]">
        {hero.tags.map((t) => (
          <li
            key={t}
            className="hero-tag pill pill-line px-6 py-3 text-[1rem] lg:px-[min(2.25rem,2.4vw)] lg:py-[min(1rem,1.5svh)] lg:text-[min(1.12rem,1.7svh)]"
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}
