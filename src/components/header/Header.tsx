"use client";

import Container from "../layout/Container";
import Logo from "./Logo";
import NavBar from "./NavBar";

type HeaderProps = {
    activeSection: string;
    setActiveSection: (section: string) => void;
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
