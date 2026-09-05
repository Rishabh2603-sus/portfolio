import Reveal from "./Reveal";
import { profile } from "../data/content";
import { useLocalTime } from "../hooks/useLocalTime";
import styles from "./Hero.module.css";

export default function Hero() {
  const time = useLocalTime();

  return (
    <section id="intro" className={`section ${styles.hero}`}>
      <Reveal as="p" className="eyebrow">
        {profile.location} · {time} local
      </Reveal>
      <Reveal delay={80}>
        <h1 className={styles.heroName}>{profile.name}</h1>
      </Reveal>
      <Reveal delay={140}>
        <p className={styles.heroRole}>{profile.role}</p>
      </Reveal>
      <Reveal delay={200}>
        <p className={styles.heroTagline}>{profile.tagline}</p>
      </Reveal>
      <Reveal delay={260}>
        <div className={styles.heroActions}>
          <a href="#work" className={styles.heroCta}>
            View my work <span aria-hidden="true">→</span>
          </a>
          <a href="/rishabh-sharma-resume.pdf" download target="_blank" rel="noreferrer" className={styles.heroResume}>
            <span aria-hidden="true">↓</span> Download resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
