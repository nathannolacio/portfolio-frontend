"use client";

import Container from "../Container";
import Logo from "./Logo";
import NavBar from "./NavBar";
import type { Dispatch, SetStateAction } from "react";

type HeaderProps = {
    activeSection: string;
    setActiveSection: Dispatch<SetStateAction<string>>;
};

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
    return(
        <Container className="flex justify-between">
            <Logo 
                clickable
                setActiveSectionAction={setActiveSection}
            />
            <NavBar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
        </Container>
    );
}
