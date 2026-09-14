import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

// The wrapped element leans toward the cursor while hovered and springs home on leave.
// Fine pointers only; the child keeps its own press/hover transforms untouched.
export default function Magnetic({
  children,
  strength = 0.3,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (
        !el ||
        reduce ||
        !matchMedia("(hover: hover) and (pointer: fine)").matches
      )
        return;
      const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        x((e.clientX - r.left - r.width / 2) * strength);
        y((e.clientY - r.top - r.height / 2) * strength);
      };
      const leave = () => {
        x(0);
        y(0);
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      };
    },
    { scope: ref, dependencies: [reduce, strength] },
  );

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
