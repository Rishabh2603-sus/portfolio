import Reveal from "./Reveal";
import { skillGroups } from "../data/content";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt-wrap skills">
      <Reveal as="p" className="eyebrow">
        Skills
      </Reveal>
      <Reveal as="h2" delay={60} className={styles.skillsHeading}>
        Tools I reach for
      </Reveal>

      <div className={styles.skillsGroups}>
        {skillGroups.map((group, index) => (
          <Reveal as="div" key={group.label} delay={index * 90} className={styles.skillGroup}>
            <h3 className={styles.skillGroupLabel}>{group.label}</h3>
            <ul className={styles.skillTags}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
