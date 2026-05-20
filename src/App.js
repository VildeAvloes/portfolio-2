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
      </main>
    </>
  );
}

export default App;
