import Reveal from "./Reveal";
import { about, languages } from "../data/content";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section section-alt-wrap about">
      <div className={styles.aboutGrid}>
        <Reveal as="p" className="eyebrow">
          About
        </Reveal>
        <div className={styles.aboutBody}>
          {about.paragraphs.map((paragraph, index) => (
            <Reveal as="p" key={index} delay={index * 90} className={styles.aboutParagraph}>
              {paragraph}
            </Reveal>
          ))}
          <Reveal delay={about.paragraphs.length * 90 + 20} className={styles.aboutLanguages}>
            <span className={styles.aboutLanguagesLabel}>Speaks</span>
            <span>{languages.join(" · ")}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
