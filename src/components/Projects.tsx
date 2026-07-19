import Reveal from "./Reveal";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="work" className="section projects">
      <Reveal as="p" className="eyebrow">
        Selected work
      </Reveal>
      <Reveal as="h2" delay={60} className="projects-heading">
        A few things I've built
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal as="article" key={project.id} delay={index * 80} className="project-card">
            <a href={project.url} className="project-link">
              <div className="project-top">
                <span className="project-year">{project.year}</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>

      <style>{`
        .projects-heading {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          margin: 0.5rem 0 2.5rem;
          max-width: 30rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .project-card {
          background: var(--surface);
          border: 0.5px solid var(--border);
          border-radius: 14px;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .project-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-3px);
        }
        .project-link {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.6rem;
          height: 100%;
        }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .project-year {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .project-arrow {
          color: var(--text-muted);
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .project-card:hover .project-arrow {
          color: var(--accent);
          transform: translate(2px, -2px);
        }
        .project-title {
          font-size: 1.25rem;
          font-weight: 480;
        }
        .project-summary {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .project-tags {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 0.5rem 0 0;
          padding: 0;
        }
        .project-tags li {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.03em;
          color: var(--text-secondary);
          background: var(--bg-alt);
          border: 0.5px solid var(--border);
          border-radius: 999px;
          padding: 0.25rem 0.65rem;
        }
        @media (max-width: 760px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 761px) {
          .projects-grid:has(.project-card:only-child) {
            grid-template-columns: 1fr;
            max-width: 32rem;
          }
        }
      `}</style>
    </section>
  );
}
