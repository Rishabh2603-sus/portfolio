import Reveal from "./Reveal";
import { education } from "../data/content";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <Reveal as="p" className="eyebrow">
        Education
      </Reveal>
      <Reveal as="h2" delay={60} className={styles.educationHeading}>
        Where I've studied
      </Reveal>

      <div className={styles.educationCards}>
        {education.map((item, index) => (
          <Reveal as="article" key={item.id} delay={index * 90} className={styles.educationCard}>
            <div className={styles.educationTop}>
              <span className={styles.educationPeriod}>{item.period}</span>
            </div>
            <h3 className={styles.educationDegree}>{item.degree}</h3>
            <p className={styles.educationOrg}>{item.org}</p>
            <p className={styles.educationDescription}>{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
