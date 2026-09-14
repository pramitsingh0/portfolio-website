import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = { id: string; title: string; children: ReactNode };

// Hairline-separated section with a line-revealed title and generous leading air. No kickers, ever.
export default function Section({ id, title, children }: Props) {
  return (
    <section
      id={id}
      className="hairline mx-gutter scroll-mt-40 py-section-y lg:scroll-mt-28"
    >
      <Reveal as="h2" variant="lines" className="t-title mb-stack">
        {title}
      </Reveal>
      {children}
    </section>
  );
}
