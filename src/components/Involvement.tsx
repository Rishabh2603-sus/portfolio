import Reveal from "./Reveal";
import { involvement } from "../data/content";
import styles from "./Involvement.module.css";

export default function Involvement() {
  return (
    <section id="involvement" className="section involvement">
      <Reveal as="p" className="eyebrow">
        Involvement
      </Reveal>
      <Reveal as="h2" delay={60} className={styles.involvementHeading}>
        Where I've been active
      </Reveal>

      <ol className={styles.timeline}>
        {involvement.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 100} className={styles.timelineItem}>
            <span className={styles.timelinePeriod}>{item.period}</span>
            <div className={styles.timelineDot} aria-hidden="true" />
            <div>
              <h3 className={styles.timelineRole}>{item.role}</h3>
              <p className={styles.timelineOrg}>{item.org}</p>
              <p className={styles.timelineDescription}>{item.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
