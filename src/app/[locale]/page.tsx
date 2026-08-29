"use client";

import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import { useEffect, useState } from "react";
import HomeSection from "../../components/sections/HomeSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import AboutSection from "../../components/sections/AboutSection";
import ServicesSection from "../../components/sections/ServicesSection";
import ContactSection from "../../components/sections/ContactSection";

export default function Home() {
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
      <main className="flex flex-col">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
