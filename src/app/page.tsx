import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import ExperienceAndSkills from "@/components/ExperienceAndSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      {/* Header, Hero & Stats as direct seamless page sections */}
      <Header />
      <Hero />
      <Stats />

      {/* Main Sections */}
      <About />
      <ExperienceAndSkills />
      <Projects />
      <Contact />
    </main>
  );
}
