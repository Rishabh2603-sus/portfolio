import Reveal from "./Reveal";
import { about, languages } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section section-alt-wrap about">
      <div className="about-grid">
        <Reveal as="p" className="eyebrow">
          About
        </Reveal>
        <div className="about-body">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal as="p" key={index} delay={index * 90} className="about-paragraph">
              {paragraph}
            </Reveal>
          ))}
          <Reveal delay={about.paragraphs.length * 90 + 20} className="about-languages">
            <span className="about-languages-label">Speaks</span>
            <span className="about-languages-list">{languages.join(" · ")}</span>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 10rem 1fr;
          gap: 2rem;
        }
        .about-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 42rem;
        }
        .about-paragraph {
          font-size: 1.05rem;
          color: var(--text-secondary);
        }
        .about-languages {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 0.5px solid var(--border);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.03em;
          color: var(--text-muted);
        }
        .about-languages-label {
          color: var(--text-secondary);
        }
        @media (max-width: 700px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
