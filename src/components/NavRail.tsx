import type { MouseEvent } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";
import styles from "./NavRail.module.css";

interface NavItem {
  id: string;
  label: string;
}

const items: NavItem[] = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "involvement", label: "Involvement" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const sectionIds = items.map((item) => item.id);

export default function NavRail() {
  const active = useScrollSpy(sectionIds);

  const handleClick = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={styles.navRail} aria-label="Section navigation">
      <ol>
        {items.map((item, index) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleClick(item.id)}
                className={isActive ? styles.isActive : ""}
                aria-current={isActive ? "true" : undefined}
              >
                <span className={styles.navIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.navTick} aria-hidden="true" />
                <span className={styles.navLabel}>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
      <ThemeToggle />
    </nav>
  );
}
