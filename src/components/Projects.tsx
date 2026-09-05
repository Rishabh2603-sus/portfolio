import Reveal from "./Reveal";
import { projects } from "../data/content";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="work" className="section projects">
      <Reveal as="p" className="eyebrow">
        Selected work
      </Reveal>
      <Reveal as="h2" delay={60} className={styles.projectsHeading}>
        A few things I've built
      </Reveal>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <Reveal as="article" key={project.id} delay={index * 80} className={styles.projectCard}>
            <a href={project.url} className={styles.projectLink}>
              <div className={styles.projectTop}>
                <span className={styles.projectYear}>{project.year}</span>
                <span className={styles.projectArrow} aria-hidden="true">↗</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectSummary}>{project.summary}</p>
              <ul className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
