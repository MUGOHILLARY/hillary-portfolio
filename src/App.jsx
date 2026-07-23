import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}

export default App;