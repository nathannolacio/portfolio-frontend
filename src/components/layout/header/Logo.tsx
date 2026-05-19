"use client";

import Link from "next/link";

type LogoProps = {
    setActiveSectionAction?: (section: string) => void;
    clickable?: boolean;
}

export default function Logo({ setActiveSectionAction, clickable = false }: LogoProps) {
    const content = (
        <div className="font-(--font-space-grotesk) font-bold text-3xl tracking-tight">
            <span>Nolacio</span>
            <span className="text-lime-600">.dev</span>
        </div>
    )

    if (clickable) {
        return (
            <Link
            href="#home"
            onClick={() => setActiveSectionAction?.("home")}
            className="hover:cursor-pointer hover:opacity-90"
        >
            {content}
        </Link>
        )
    }

    return(content);
}