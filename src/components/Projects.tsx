import { projects } from "../content";
import Reveal from "./Reveal";
import Section from "./Section";

const Arrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" />
  </svg>
);

export default function Projects() {
  return (
    <Section id="projects" title="Things I've built">
      <ul className="grid grid-cols-1 gap-[1.4rem] md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            as="li"
            key={p.name}
            variant="rise"
            delay={(i % 2) * 100}
            className="card flex flex-col gap-5 p-7 lg:p-9"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[1.3rem] font-bold">{p.name}</h3>
              {p.placeholder && (
                <span className="flag">Description pending</span>
              )}
            </div>
            <p className="t-body">{p.blurb}</p>
            {p.stack.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto flex gap-6 pt-2 text-[0.95rem] font-semibold">
              <a
                href={p.live}
                className="link-underline inline-flex items-center gap-1.5"
                aria-label={`${p.name} — live site`}
                target="_blank"
                rel="noreferrer"
              >
                Live <Arrow />
              </a>
              <a
                href={p.source}
                className="link-underline inline-flex items-center gap-1.5"
                aria-label={`${p.name} — source code`}
                target="_blank"
                rel="noreferrer"
              >
                Source <Arrow />
              </a>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
