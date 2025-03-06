"use client";

import Header from "./components/Navbar/navbar";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
