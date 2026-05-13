"use client";

import Link from "next/link";

type LogoProps = {
    setActiveSection: (section: string) => void;
}

export default function Logo({ setActiveSection }: LogoProps) {
    return(
        <Link
            href="#home"
            className="font-(--font-space-grotesk) font-bold text-3xl tracking-tight transition-colors duration-300 hover:cursor-pointer hover:opacity-90"
            onClick={() => setActiveSection("home")}
        >
            <span>Nathan</span>
            <span className="text-lime-600">.dev</span>
        </Link>
    );
}