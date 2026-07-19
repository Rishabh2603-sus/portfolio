import Reveal from "./Reveal";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt-wrap skills">
      <Reveal as="p" className="eyebrow">
        Skills
      </Reveal>
      <Reveal as="h2" delay={60} className="skills-heading">
        Tools I reach for
      </Reveal>

      <div className="skills-groups">
        {skillGroups.map((group, index) => (
          <Reveal as="div" key={group.label} delay={index * 90} className="skill-group">
            <h3 className="skill-group-label">{group.label}</h3>
            <ul className="skill-tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <style>{`
        .skills-heading {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          margin: 0.5rem 0 2.5rem;
        }
        .skills-groups {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .skill-group {
          display: grid;
          grid-template-columns: 10rem 1fr;
          gap: 1.5rem;
          padding-bottom: 1.75rem;
          border-bottom: 0.5px solid var(--border);
        }
        .skill-group:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .skill-group-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-muted);
          padding-top: 0.3rem;
        }
        .skill-tags {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }
        .skill-tags li {
          font-size: 0.88rem;
          color: var(--text-secondary);
          background: var(--surface);
          border: 0.5px solid var(--border);
          border-radius: 999px;
          padding: 0.4rem 0.9rem;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .skill-tags li:hover {
          border-color: var(--accent);
          color: var(--text-primary);
          transform: translateY(-2px);
        }
        @media (max-width: 700px) {
          .skill-group {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
