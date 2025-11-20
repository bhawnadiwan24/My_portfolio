import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
