"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import NavBar from "./NavBar";
import type { Dispatch, SetStateAction } from "react";

type HeaderProps = {
    activeSection: string;
    setActiveSection: Dispatch<SetStateAction<string>>;
};

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 h-20 flex items-center border-b transition-colors duration-300 ${
                scrolled
                    ? "bg-bg/85 backdrop-blur-md border-border"
                    : "bg-transparent border-transparent"
            }`}
        >
            <Container className="flex justify-between items-center w-full">
                <Logo
                    clickable
                    setActiveSectionAction={setActiveSection}
                />
                <NavBar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
            </Container>
        </header>
    );
}
