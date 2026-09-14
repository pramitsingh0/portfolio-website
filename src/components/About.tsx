import { about } from "../content";
import Reveal from "./Reveal";

export default function About() {
  const s = about.statement;
  return (
    <section
      id="about"
      className="hairline mx-gutter scroll-mt-40 py-section-y lg:scroll-mt-28"
    >
      <Reveal as="h2" variant="lines" className="t-headline mb-stack">
        {s.before}
        <em className="text-accent not-italic">{s.emphasis}</em>
        {s.after}
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-16 gap-y-12">
        <Reveal variant="slide" delay={80} className="flex flex-col gap-5">
          <h3 className="text-[0.95rem] font-semibold">
            {about.blocks[0].heading}
          </h3>
          {about.blocks[0].paragraphs.map((p) => (
            <p key={p} className="t-body max-w-[46ch]">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal variant="slide" delay={160} className="flex flex-col gap-10">
          {about.blocks.slice(1).map((b) => (
            <div key={b.heading} className="flex flex-col gap-5">
              <h3 className="text-[0.95rem] font-semibold">{b.heading}</h3>
              {b.paragraphs.map((p) => (
                <p key={p} className="t-body max-w-[46ch]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
