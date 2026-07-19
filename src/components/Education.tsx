import Reveal from "./Reveal";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="section education">
      <Reveal as="p" className="eyebrow">
        Education
      </Reveal>
      <Reveal as="h2" delay={60} className="education-heading">
        Where I've studied
      </Reveal>

      <div className="education-cards">
        {education.map((item, index) => (
          <Reveal as="article" key={item.id} delay={index * 90} className="education-card">
            <div className="education-top">
              <span className="education-period">{item.period}</span>
            </div>
            <h3 className="education-degree">{item.degree}</h3>
            <p className="education-org">{item.org}</p>
            <p className="education-description">{item.description}</p>
          </Reveal>
        ))}
      </div>

      <style>{`
        .education-heading {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          margin: 0.5rem 0 2.5rem;
        }
        .education-cards {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .education-card {
          background: var(--surface);
          border: 0.5px solid var(--border);
          border-radius: 14px;
          padding: 1.75rem;
          max-width: 34rem;
          transition: border-color 0.25s ease;
        }
        .education-card:hover {
          border-color: var(--border-strong);
        }
        .education-top {
          margin-bottom: 0.6rem;
        }
        .education-period {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .education-degree {
          font-size: 1.2rem;
          font-weight: 480;
        }
        .education-org {
          font-size: 0.92rem;
          color: var(--accent-brick);
          margin-top: 0.25rem;
        }
        .education-description {
          margin-top: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
