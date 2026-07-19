import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section section-alt-wrap contact">
      <Reveal as="p" className="eyebrow">
        Contact
      </Reveal>
      <Reveal delay={60}>
        <h2 className="contact-heading">Let's work together</h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="contact-copy">
          Have a project in mind, or just want to say hello? My inbox is always open.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <a href={`mailto:${profile.email}`} className="contact-email">
          {profile.email}
        </a>
      </Reveal>
      <Reveal delay={240}>
        <ul className="contact-socials contact-socials-primary">
          {profile.socials.connect.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={300}>
        <ul className="contact-socials contact-socials-coding">
          {profile.socials.coding.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <style>{`
        .contact {
          text-align: left;
        }
        .contact-heading {
          font-size: clamp(2rem, 5vw, 3rem);
          margin: 0.5rem 0 1rem;
          max-width: 24rem;
        }
        .contact-copy {
          color: var(--text-secondary);
          max-width: 30rem;
          font-size: 1.05rem;
        }
        .contact-email {
          display: inline-block;
          margin-top: 1.5rem;
          font-family: var(--font-mono);
          font-size: 1.15rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-strong);
          padding-bottom: 0.2rem;
          transition: color 0.25s ease, border-color 0.25s ease;
        }
        .contact-email:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        .contact-socials {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          padding: 0;
        }
        .contact-socials-primary {
          margin: 2.5rem 0 0;
        }
        .contact-socials-primary a {
          display: inline-flex;
          align-items: center;
          font-size: 0.92rem;
          color: var(--text-primary);
          font-weight: 480;
          background: var(--surface);
          border: 0.5px solid var(--border);
          border-radius: 999px;
          padding: 0.55rem 1.15rem;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .contact-socials-primary a:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .contact-socials-coding {
          margin: 1rem 0 0;
        }
        .contact-socials-coding a {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }
        .contact-socials-coding a:hover {
          color: var(--accent-brick);
        }
      `}</style>
    </section>
  );
}
