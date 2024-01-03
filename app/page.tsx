import Image from "next/image";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Blog from "./components/home/Blog";
import Contact from "./components/home/Contact";
import Projects from "./components/home/Projects";
import ScrollToTop from "./components/extra/SCrollToTop";
import Practice from "./components/home/Login";
import Featurs from "./components/home/Featurs";

export default function Main() {
  return (
    <div className="pt-16">
      <Home />
      <About />
      <Blog />
      <Contact />
      <Projects />

      <Practice />
      <Featurs/>
    </div>
  );
}
