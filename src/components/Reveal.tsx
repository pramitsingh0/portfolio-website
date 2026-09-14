import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, type ElementType, type ReactNode } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

type Variant = "rise" | "slide" | "scale" | "lines" | "chars";

type Props = {
  as?: ElementType;
  variant?: Variant;
  delay?: number; // ms, for staggering siblings
  className?: string;
  children: ReactNode;
};

const FROM = {
  rise: { y: 26, opacity: 0 },
  slide: { x: -12, y: 16, opacity: 0 },
  scale: { y: 18, scale: 0.985, opacity: 0 },
};

// Scroll-triggered entrance, once per page load. `lines` mask-reveals each line of text, `chars` rises
// letter by letter; the rest move the whole block. Resting state is the final state, so
// under reduced motion nothing is hidden and nothing runs.
export default function Reveal({
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reduce) return;
      const scrollTrigger = { trigger: el, start: "top 88%", once: true };
      if (variant === "lines") {
        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "line",
        });
        gsap.from(split.lines, {
          yPercent: 105,
          duration: 0.9,
          stagger: 0.09,
          ease: "power4.out",
          delay: delay / 1000,
          scrollTrigger,
        });
        return () => split.revert();
      }
      if (variant === "chars") {
        const split = SplitText.create(el, { type: "chars" });
        gsap.from(split.chars, {
          yPercent: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "power4.out",
          delay: delay / 1000,
          scrollTrigger,
        });
        return () => split.revert();
      }
      gsap.from(el, {
        ...FROM[variant],
        duration: 0.8,
        ease: "power3.out",
        delay: delay / 1000,
        scrollTrigger,
      });
    },
    {
      scope: ref,
      dependencies: [variant, delay, reduce],
      revertOnUpdate: true,
    },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
