import { experience } from "../content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Where I've shipped">
      <ol className="flex flex-col">
        {experience.map((job) => (
          <li
            key={job.company}
            className="hairline grid grid-cols-1 gap-x-12 gap-y-6 py-12 lg:grid-cols-[minmax(220px,26%)_1fr]"
          >
            <Reveal variant="slide">
              <h3 className="text-[1.3rem] font-bold">{job.company}</h3>
              <p className="mt-1 text-[0.95rem]">{job.role}</p>
              <p className="t-label mt-1">{job.period}</p>
            </Reveal>
            <ul className="flex flex-col gap-4">
              {job.bullets.map((b, j) => (
                <Reveal
                  as="li"
                  key={b}
                  variant="rise"
                  delay={80 + j * 70}
                  className="bullet t-body relative max-w-[74ch] pl-6"
                >
                  {b}
                </Reveal>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
