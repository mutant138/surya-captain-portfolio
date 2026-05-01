"use client";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
