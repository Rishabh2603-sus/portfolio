import Reveal from "./Reveal";
import { profile } from "../data/content";
import { useLocalTime } from "../hooks/useLocalTime";

export default function Hero() {
  const time = useLocalTime();

  return (
    <section id="intro" className="section hero">
      <Reveal as="p" className="eyebrow">
        {profile.location} · {time} local
      </Reveal>
      <Reveal delay={80}>
        <h1 className="hero-name">{profile.name}</h1>
      </Reveal>
      <Reveal delay={140}>
        <p className="hero-role">{profile.role}</p>
      </Reveal>
      <Reveal delay={200}>
        <p className="hero-tagline">{profile.tagline}</p>
      </Reveal>
      <Reveal delay={260}>
        <div className="hero-actions">
          <a href="#work" className="hero-cta">
            View my work <span aria-hidden="true">→</span>
          </a>
          <a href="/resume.pdf" download target="_blank" rel="noreferrer" className="hero-resume">
            <span aria-hidden="true">↓</span> Download resume
          </a>
        </div>
      </Reveal>

      <style>{`
        .hero {
          min-height: 92vh;
          min-height: 92dvh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.1rem;
          padding-top: 6rem;
        }
        .hero-name {
          font-size: clamp(2.6rem, 7vw, 5rem);
          line-height: 1.02;
          font-weight: 460;
        }
        .hero-role {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--text-secondary);
          letter-spacing: 0.02em;
        }
        .hero-tagline {
          max-width: 34rem;
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.75rem;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.4rem;
          width: fit-content;
          border: 1px solid var(--border-strong);
          border-radius: 999px;
          font-size: 0.95rem;
          color: var(--text-primary);
          transition: border-color 0.25s ease, background 0.25s ease, gap 0.25s ease;
        }
        .hero-cta:hover {
          border-color: var(--accent);
          background: var(--accent-soft);
          gap: 0.75rem;
        }
        .hero-resume {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.4rem;
          width: fit-content;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          color: var(--text-secondary);
          border-bottom: 1px solid transparent;
          transition: color 0.25s ease, border-color 0.25s ease;
        }
        .hero-resume:hover {
          color: var(--accent-brick);
          border-color: var(--accent-brick);
        }
      `}</style>
    </section>
  );
}
