import { useEffect, useRef, useState } from "react";
import { familiarStack, techStack, type Technology } from "../techStack";

const icons = import.meta.glob<string>("../assets/tech/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

export function FolderIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path fill="var(--desk-paper)" d="M4 10h15l5 5h20v25H4z" />
      <path d="M4 21h40M8 6h13l5 4h14" />
      <path d="M12 28h12m-12 5h18" />
    </svg>
  );
}

function TechnologyFile({ technology }: { technology: Technology }) {
  const src = technology.icon && icons[`../assets/tech/${technology.icon}.svg`];
  return (
    <li className="explorer-file">
      {src ? (
        <img src={src} alt="" width="34" height="34" />
      ) : (
        <span className="explorer-monogram" aria-hidden="true">
          {technology.monogram}
        </span>
      )}
      <span>{technology.name}</span>
    </li>
  );
}

export default function TechExplorer() {
  const [familiar, setFamiliar] = useState(false);
  const folderButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);
  const firstRender = useRef(true);
  const technologies = familiar ? familiarStack : techStack;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    (familiar ? backButton : folderButton).current?.focus({
      preventScroll: true,
    });
  }, [familiar]);

  return (
    <div
      className="explorer"
      onKeyDown={(event) => {
        if (event.key === "Escape" && familiar) {
          event.stopPropagation();
          setFamiliar(false);
        }
      }}
    >
      <nav className="explorer-path" aria-label="Tech stack folders">
        {familiar ? (
          <button
            ref={backButton}
            onClick={() => setFamiliar(false)}
            aria-label="Back to Tech Stack"
          >
            <span aria-hidden="true">←</span> Tech Stack
          </button>
        ) : (
          <span>Tech Stack</span>
        )}
        {familiar && (
          <>
            <span aria-hidden="true">/</span>
            <span aria-current="location">Familiar</span>
          </>
        )}
      </nav>
      <div
        key={familiar ? "familiar" : "stack"}
        className="explorer-scroll"
        tabIndex={0}
        role="region"
        aria-label={familiar ? "Familiar technologies" : "Technology files"}
      >
        <ul
          className="explorer-grid"
          aria-label={familiar ? "Familiar stack" : "Main tech stack"}
        >
          {technologies.map((technology) => (
            <TechnologyFile key={technology.name} technology={technology} />
          ))}
          {!familiar && (
            <li className="explorer-folder">
              <button
                ref={folderButton}
                onClick={() => setFamiliar(true)}
                aria-label="Open Familiar folder"
              >
                <FolderIcon />
                <span>Familiar</span>
                <small>{familiarStack.length} items</small>
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="explorer-footer">
        <span>
          {technologies.length} technologies{!familiar && " · 1 folder"}
        </span>
        <span>{familiar ? "Exploring & learning" : "From my toolkit"}</span>
      </div>
    </div>
  );
}
