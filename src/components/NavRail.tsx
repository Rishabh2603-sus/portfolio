import { useEffect, useRef, useState } from "react";
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
  const listRef = useRef<HTMLOListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({ opacity: 0 });

  useEffect(() => {
    const updateIndicator = () => {
      const list = listRef.current;
      if (!list) return;

      const activeEl = list.querySelector(`a[href="#${active}"]`) as HTMLElement;
      if (!activeEl) {
        setIndicatorStyle({ opacity: 0 });
        return;
      }

      // Calculate relative position within the ol
      setIndicatorStyle({
        left: `${activeEl.offsetLeft}px`,
        top: `${activeEl.offsetTop}px`,
        width: `${activeEl.offsetWidth}px`,
        height: `${activeEl.offsetHeight}px`,
        opacity: 1,
      });

      if (window.innerWidth <= 860) {
        const scrollLeft = activeEl.offsetLeft - list.offsetWidth / 2 + activeEl.offsetWidth / 2;
        list.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  const handleClick = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={styles.navRail} aria-label="Section navigation">
      <ol ref={listRef}>
        <div className={styles.navHighlight} style={indicatorStyle} />
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
