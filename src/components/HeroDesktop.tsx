import { useRef, useState } from "react";
import { identity } from "../content";
import "./HeroDesktop.css";
import "./DesktopExplorer.css";
import TechExplorer from "./TechExplorer";
import ExperienceExplorer from "./ExperienceExplorer";

type WindowName = "welcome" | "about" | "projects" | "experience" | "techstack";
const windowTitles: Record<WindowName, string> = {
  welcome: "A little introduction",
  about: "About Pramit",
  projects: "Selected work",
  experience: "Experience",
  techstack: "Tech Stack",
};
function DesktopIcon({
  kind,
}: {
  kind: "about" | "projects" | "cv" | "experience" | "techstack";
}) {
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
      ) : kind === "experience" ? (
        <>
          <path fill="var(--desk-paper)" d="M5 15h38v27H5zM16 15V7h16v8" />
          <path d="M5 25h38M20 22h8v7h-8zM12 35h24" />
        </>
      ) : kind === "techstack" ? (
        <>
          <path fill="var(--desk-paper)" d="M4 11h15l5 5h20v26H4z" />
          <path d="m18 23-6 6 6 6m12-12 6 6-6 6m-4-14-4 16" />
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
  const lastShortcut = useRef<HTMLButtonElement | null>(null);
  const openWindow = (name: WindowName, button: HTMLButtonElement) => {
    lastShortcut.current = button;
    setActive(name);
  };
  const closeWindow = () => {
    setActive(null);
    lastShortcut.current?.focus({ preventScroll: true });
  };
  const explorerOpen = active === "experience" || active === "techstack";
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
      <div
        className="retro-workspace"
        data-explorer={explorerOpen || undefined}
      >
        <div className="retro-shortcuts" aria-label="Desktop shortcuts">
          {(
            [
              ["techstack", "Tech Stack"],
              ["experience", "Experience"],
              ["about", "About me"],
              ["projects", "Projects"],
            ] as const
          ).map(([name, label]) => (
            <button
              key={name}
              onClick={(event) => openWindow(name, event.currentTarget)}
              aria-pressed={active === name}
            >
              <DesktopIcon kind={name} />
              <span>{label}</span>
            </button>
          ))}
          <a href={identity.cv} download>
            <DesktopIcon kind="cv" />
            <span>Download CV</span>
          </a>
        </div>
        {active && (
          <section
            className={
              explorerOpen
                ? "retro-window retro-window--explorer"
                : "retro-window"
            }
            aria-label={`${active} window`}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.stopPropagation();
                closeWindow();
              }
            }}
          >
            <div className="retro-titlebar">
              <button onClick={closeWindow} aria-label="Close desktop window">
                <span />
              </button>
              <span className="retro-title-lines" />
              <h2>{windowTitles[active]}</h2>
              <span className="retro-title-lines" />
            </div>
            {active === "techstack" ? (
              <TechExplorer />
            ) : active === "experience" ? (
              <ExperienceExplorer />
            ) : (
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
            )}
            {!explorerOpen && (
              <div className="retro-window-footer">
                <span>
                  {active === "welcome"
                    ? "Welcome to my corner of the internet."
                    : "Designed with intent. Built with care."}
                </span>
                <span aria-hidden="true">▨</span>
              </div>
            )}
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
