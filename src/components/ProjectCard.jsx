import Reveal from "./Reveal";

// Lets the CSS spotlight follow the mouse over the card.
function trackMouse(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export default function ProjectCard({ project, index }) {
  const { title, featured, badge, summary, points, tech, live, github } = project;

  return (
    <Reveal
      as="article"
      delay={index * 80}
      className={`project ${featured ? "project--featured" : ""}`}
    >
      <div className="project__inner" onMouseMove={trackMouse}>
        <div className="project__main">
          {featured && (
            <div className="window" aria-hidden="true"><i /><i /><i /></div>
          )}
          {badge && <span className="badge">{badge}</span>}
          <h3>{title}</h3>
          <p>{summary}</p>
          <div className="chips">
            {tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="project__details">
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="project__links">
            {live && <a href={live} target="_blank" rel="noreferrer">Live demo</a>}
            {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
