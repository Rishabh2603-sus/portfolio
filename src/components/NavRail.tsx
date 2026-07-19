import type { MouseEvent } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";

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
    <nav className="nav-rail" aria-label="Section navigation">
      <ol>
        {items.map((item, index) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleClick(item.id)}
                className={isActive ? "is-active" : ""}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="nav-tick" aria-hidden="true" />
                <span className="nav-label">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
      <ThemeToggle />
      <style>{`
        .nav-rail {
          position: fixed;
          top: 50%;
          left: clamp(1rem, 3vw, 2.5rem);
          transform: translateY(-50%);
          z-index: 40;
        }
        .nav-rail ol {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .nav-rail a {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.15rem 0;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.04em;
        }
        .nav-index {
          opacity: 0;
          width: 0;
          overflow: hidden;
          transition: opacity 0.2s ease, width 0.2s ease;
        }
        .nav-tick {
          width: 14px;
          height: 1.5px;
          background: var(--border-strong);
          transition: width 0.25s ease, background 0.25s ease;
        }
        .nav-label {
          opacity: 0;
          max-width: 0;
          overflow: hidden;
          white-space: nowrap;
          transition: opacity 0.25s ease, max-width 0.25s ease;
        }
        .nav-rail a:hover .nav-label,
        .nav-rail a:focus-visible .nav-label,
        .nav-rail a:hover .nav-index,
        .nav-rail a:focus-visible .nav-index {
          opacity: 1;
          max-width: 140px;
          width: auto;
        }
        .nav-rail a.is-active {
          color: var(--text-primary);
        }
        .nav-rail a.is-active .nav-tick {
          background: var(--accent);
        }
        .nav-rail a.is-active .nav-label {
          opacity: 1;
          max-width: 140px;
        }
        @media (max-width: 860px) {
          .nav-rail {
            top: 0;
            left: 0;
            transform: none;
            width: 100%;
            padding: 0.85rem var(--gutter);
            background: rgba(236, 227, 213, 0.92);
            backdrop-filter: blur(6px);
            border-bottom: 0.5px solid var(--border);
            -webkit-mask-image: linear-gradient(to right, transparent 0, black var(--gutter), black calc(100% - var(--gutter)), transparent 100%);
            mask-image: linear-gradient(to right, transparent 0, black var(--gutter), black calc(100% - var(--gutter)), transparent 100%);
          }
          .nav-rail ol {
            flex-direction: row;
            gap: 1.1rem;
            overflow-x: auto;
            scrollbar-width: none;
          }
          .nav-rail ol::-webkit-scrollbar {
            display: none;
          }
          .nav-rail a {
            flex-shrink: 0;
          }
          .nav-index,
          .nav-tick {
            display: none;
          }
          .nav-label {
            opacity: 1;
            max-width: none;
          }
          .nav-rail a.is-active {
            color: var(--accent);
          }
        }
      `}</style>
    </nav>
  );
}
