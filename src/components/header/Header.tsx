"use client";

import { useEffect, useState } from "react";
import Container from "../layout/Container";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
    useEffect(() => {
        const syncFromHash = () => {
            const section = window.location.hash.replace("#", "") || "home";
            setActiveSection(section);
        };

        syncFromHash();
        window.addEventListener("hashchange", syncFromHash);

        return () => {window.removeEventListener("hashchange", syncFromHash);}
    }, []);

    console.log(setActiveSection);

    return(
        <Container className="flex justify-between">
            <Logo 
                setActiveSection={setActiveSection}
            />
            <NavBar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
            />
        </Container>
    );
}
