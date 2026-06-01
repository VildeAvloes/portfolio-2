import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Nav />
      <main className="main">
        <About />
        <Projects />
        <Contact />
        <footer className="footer">
          <p>Designed and developed by Vilde Avløs © 2026</p>
        </footer>
      </main>
    </>
  );
}

export default App;
