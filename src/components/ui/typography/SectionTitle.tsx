import React from "react"

type SectionTitleProps = {
    children: React.ReactNode;
    className?: string;
}

export default function SectionTitle({ children, className }: SectionTitleProps) {
    return (
        <h2 className={`font-display text-3xl md:text-5xl font-medium tracking-tight ${className || ""}`}>
            {children}
        </h2>
    );
}