import React from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/Hero/HeroSection";
import StatStrip from "./components/sections/Stats/StatStrip";
import AboutSection from "./components/sections/About/AboutSection";
import ExpertiseSection from "./components/sections/Expertise/ExpertiseSection";
import SkillsSection from "./components/sections/Skills/SkillsSection";
import ExperienceSection from "./components/sections/Experience/ExperienceSection";
import ProjectsSection from "./components/sections/Projects/ProjectsSection";
import ContactSection from "./components/sections/Contact/ContactSection";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text-primary selection:bg-accent selection:text-accent-fg">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatStrip />
        <AboutSection />
        <ExpertiseSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

