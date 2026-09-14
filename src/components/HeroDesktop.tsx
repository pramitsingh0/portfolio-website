import { useState } from "react";
import { identity } from "../content";
import "./HeroDesktop.css";

type WindowName = "welcome" | "about" | "projects";
function DesktopIcon({ kind }: { kind: "about" | "projects" | "cv" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {kind === "about" ? (
        <>
          <path
            fill="var(--desk-paper)"
            d="M8 5h32v30H8zM17 35v6m14-6v6M12 42h24"
          />
          <path d="M14 11h20v17H14zM19 16v3m10-3v3m-10 4h10" />
        </>
      ) : kind === "projects" ? (
        <>
          <path fill="var(--desk-paper)" d="M4 12h17l5 5h18v24H4z" />
          <path d="M4 21h40M9 8h13l5 4h13" />
        </>
      ) : (
        <>
          <path fill="var(--desk-paper)" d="M11 4h19l8 8v32H11z" />
          <path d="M29 4v10h9M17 22h15m-15 6h15m-15 6h10" />
        </>
      )}
    </svg>
  );
}

export default function HeroDesktop() {
  const [active, setActive] = useState<WindowName | null>("welcome");
  return (
    <div className="retro-desktop" aria-label="Interactive miniature desktop">
      <div className="retro-menubar">
        <button
          className="retro-home"
          onClick={() => setActive("welcome")}
          aria-label="Open welcome window"
        >
          ✳
        </button>
        <span className="retro-brand">pramit.os</span>
        <span className="retro-menu-detail">Personal computer</span>
        <span className="retro-version">01.0</span>
      </div>
      <div className="retro-workspace">
        <div className="retro-shortcuts" aria-label="Desktop shortcuts">
          <button
            onClick={() => setActive("about")}
            aria-pressed={active === "about"}
          >
            <DesktopIcon kind="about" />
            <span>About me</span>
          </button>
          <button
            onClick={() => setActive("projects")}
            aria-pressed={active === "projects"}
          >
            <DesktopIcon kind="projects" />
            <span>Projects</span>
          </button>
          <a href={identity.cv}>
            <DesktopIcon kind="cv" />
            <span>Request CV</span>
          </a>
        </div>
        {active && (
          <section className="retro-window" aria-label={`${active} window`}>
            <div className="retro-titlebar">
              <button
                onClick={() => setActive(null)}
                aria-label="Close desktop window"
              >
                <span />
              </button>
              <span className="retro-title-lines" />
              <h2>
                {active === "welcome"
                  ? "A little introduction"
                  : active === "about"
                    ? "About Pramit"
                    : "Selected work"}
              </h2>
              <span className="retro-title-lines" />
            </div>
            <div className="retro-window-body" aria-live="polite">
              {active === "welcome" ? (
                <>
                  <span className="retro-eyebrow">
                    Made of curiosity & code.
                  </span>
                  <p className="retro-hello">
                    hello<span>.</span>
                  </p>
                  <p className="retro-description">
                    I'm Pramit. I build things
                    <br />
                    that work in the real world.
                  </p>
                  <button
                    className="retro-action"
                    onClick={() => setActive("projects")}
                  >
                    Explore my work <span aria-hidden="true">↗</span>
                  </button>
                </>
              ) : active === "about" ? (
                <>
                  <span className="retro-eyebrow">
                    The person behind the pixels
                  </span>
                  <p className="retro-heading">
                    Developer.
                    <br />
                    Problem solver.
                  </p>
                  <p className="retro-description">
                    Full-stack developer in Bangalore.
                    <br />
                    React, TypeScript & systems that scale.
                  </p>
                  <a className="retro-action" href="#about">
                    More about me <span aria-hidden="true">↗</span>
                  </a>
                </>
              ) : (
                <>
                  <span className="retro-eyebrow">Built to be used.</span>
                  <p className="retro-heading">
                    Ideas in.
                    <br />
                    Software out.
                  </p>
                  <p className="retro-description">
                    From interfaces to infrastructure.
                    <br />
                    Take a look under the hood.
                  </p>
                  <a className="retro-action" href="#projects">
                    View projects <span aria-hidden="true">↗</span>
                  </a>
                </>
              )}
            </div>
            <div className="retro-window-footer">
              <span>
                {active === "welcome"
                  ? "Welcome to my corner of the internet."
                  : "Designed with intent. Built with care."}
              </span>
              <span aria-hidden="true">▨</span>
            </div>
          </section>
        )}
        {!active && (
          <button
            className="retro-restore"
            onClick={() => setActive("welcome")}
          >
            Open a little introduction ↗
          </button>
        )}
      </div>
      <div className="retro-status">
        <span>
          <i /> Ready when you are
        </span>
        <span>Click around. Make yourself at home.</span>
      </div>
    </div>
  );
}
