import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/project.jsx"; // ya projects.jsx jo bhi actual ho
import Contact from "./components/contact.jsx";


function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


