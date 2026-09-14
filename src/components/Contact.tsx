import { identity, socials } from "../content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="hairline mx-gutter scroll-mt-40 py-section-y lg:scroll-mt-28"
    >
      <Reveal as="h2" variant="chars" className="t-statement">
        Let's build something.
      </Reveal>
      <Reveal variant="slide" delay={100} className="mt-stack">
        <a
          href={`mailto:${identity.email}`}
          className="link-underline text-[clamp(1.4rem,3vw,2.4rem)] font-medium tracking-tight break-all"
        >
          {identity.email}
        </a>
      </Reveal>
      <Reveal
        as="ul"
        variant="rise"
        delay={180}
        className="mt-10 flex flex-wrap gap-3"
      >
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className="pill pill-line pill-social inline-block px-8 py-3.5 text-[1rem]"
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {s.label}
            </a>
          </li>
        ))}
      </Reveal>
      <p className="t-label mt-section-y">
        {identity.location} — © {new Date().getFullYear()} {identity.name}
      </p>
    </section>
  );
}
