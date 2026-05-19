"use client";
import Container from "../components/layout/Container";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import { useEffect, useState } from "react";
import HomeSection from "../components/sections/HomeSection";

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
        <section id="about">
          <Container>
            <h2>About</h2>
          </Container>
        </section>
        <section id="projects">
          <Container>
            <h2>Projects</h2>
          </Container>
        </section>
        <section id="contact">
          <Container>
            <h2>Contact</h2>
          </Container>
        </section>
      </main>
      <Footer
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
