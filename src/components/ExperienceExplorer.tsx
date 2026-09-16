import { experience } from "../content";

export default function ExperienceExplorer() {
  return (
    <div className="explorer">
      <div className="explorer-path">
        Experience <span aria-hidden="true">/</span> Career history
      </div>
      <div
        className="explorer-scroll experience-scroll"
        tabIndex={0}
        role="region"
        aria-label="Career history"
      >
        <ol className="desktop-experience">
          {experience.map((job, index) => (
            <li key={job.company}>
              <div className="desktop-job-period">
                <span>{job.period}</span>
                {index === 0 && (
                  <span className="desktop-current">Current</span>
                )}
              </div>
              <h3>{job.company}</h3>
              <p className="desktop-job-role">{job.role}</p>
              <p className="desktop-job-summary">{job.bullets[0]}</p>
            </li>
          ))}
        </ol>
        <a className="desktop-experience-link" href="#experience">
          Read full experience <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="explorer-footer">
        <span>{experience.length} roles</span>
        <span>Built. Shipped. Improved.</span>
      </div>
    </div>
  );
}
