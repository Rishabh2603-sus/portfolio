import NavRail from "./components/NavRail";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Involvement from "./components/Involvement";
import Education from "./components/Education";
import Contact from "./components/Contact";
import styles from "./components/App.module.css";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <NavRail />
      <main id="main-content" className={styles.appMain}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Involvement />
        <Education />
        <Contact />
      </main>
      <footer className={styles.appFooter}>
        <p>Built with React and TypeScript.</p>
      </footer>
    </>
  );
}
