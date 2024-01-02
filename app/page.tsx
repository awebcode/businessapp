import Image from "next/image";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Blog from "./components/home/Blog";
import Contact from "./components/home/Contact";
import Projects from "./components/home/Projects";
import ScrollToTop from "./components/extra/SCrollToTop";

export default function Main() {
  return (
    <div className="pt-16">
      <Home />
      <About />
      <Blog />
      <Contact />
      <Projects />
      <ScrollToTop/>
    </div>
  );
}
