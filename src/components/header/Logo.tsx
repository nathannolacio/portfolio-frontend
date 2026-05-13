"use client";

import Link from "next/link";

type LogoProps = {
    setActiveSectionAction: (section: string) => void;
}

export default function Logo({ setActiveSectionAction }: LogoProps) {
    return(
        <Link
            href="#home"
            className="font-(--font-space-grotesk) font-bold text-3xl tracking-tight transition-colors duration-300 hover:cursor-pointer hover:opacity-90"
            onClick={() => setActiveSectionAction("home")}
        >
            <span>Nathan</span>
            <span className="text-lime-600">.dev</span>
        </Link>
    );
}