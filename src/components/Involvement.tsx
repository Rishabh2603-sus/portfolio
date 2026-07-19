import Reveal from "./Reveal";
import { involvement } from "../data/content";

export default function Involvement() {
  return (
    <section id="involvement" className="section involvement">
      <Reveal as="p" className="eyebrow">
        Involvement
      </Reveal>
      <Reveal as="h2" delay={60} className="involvement-heading">
        Where I've been active
      </Reveal>

      <ol className="timeline">
        {involvement.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 100} className="timeline-item">
            <span className="timeline-period">{item.period}</span>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-org">{item.org}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <style>{`
        .involvement-heading {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          margin: 0.5rem 0 2.75rem;
        }
        .timeline {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 8.5rem;
          top: 0.4rem;
          bottom: 0.4rem;
          width: 1px;
          background: var(--border);
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 8rem 1.5rem 1fr;
          gap: 0.5rem;
          padding-bottom: 2.5rem;
        }
        .timeline-item:last-child {
          padding-bottom: 0;
        }
        .timeline-period {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          padding-top: 0.2rem;
        }
        .timeline-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent);
          margin-top: 0.35rem;
          justify-self: center;
          position: relative;
          z-index: 1;
        }
        .timeline-role {
          font-size: 1.15rem;
          font-weight: 480;
        }
        .timeline-org {
          font-size: 0.92rem;
          color: var(--accent-brick);
          margin-top: 0.2rem;
        }
        .timeline-description {
          margin-top: 0.6rem;
          color: var(--text-secondary);
          max-width: 34rem;
          line-height: 1.6;
        }
        @media (max-width: 700px) {
          .timeline::before {
            left: 0.4rem;
          }
          .timeline-item {
            grid-template-columns: 1.5rem 1fr;
          }
          .timeline-period {
            grid-column: 1 / -1;
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
