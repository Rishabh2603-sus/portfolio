import NavRail from "./components/NavRail";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Involvement from "./components/Involvement";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <NavRail />
      <main id="main-content" className="app-main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Involvement />
        <Education />
        <Contact />
      </main>
      <footer className="app-footer">
        <p>Built with React and TypeScript.</p>
      </footer>

      <style>{`
        .app-footer {
          max-width: var(--container);
          margin: 0 auto;
          padding: 2rem var(--gutter) 3rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .app-main {
          padding-left: clamp(0px, 8vw, 7rem);
        }
        @media (max-width: 860px) {
          .app-main {
            padding-left: 0;
            padding-top: 3.25rem;
          }
        }
      `}</style>
    </>
  );
}
