"use client";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { useEffect, useState } from "react";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import type { Project } from "../lib/data/projects";

type HomeViewProps = {
  projects: Project[];
};

export default function HomeView({ projects }: HomeViewProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
      const syncFromHash = () => {
          const section = window.location.hash.replace("#", "") || "home";
          setActiveSection(section);
      };

      syncFromHash();
      window.addEventListener("hashchange", syncFromHash);

      return () => {window.removeEventListener("hashchange", syncFromHash);}
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex flex-col pt-20">
        <HomeSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      <Footer
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
