import React from "react"

type SectionTitleProps = {
    children: React.ReactNode;
    className?: string;
}

export default function SectionTitle({ children, className }: SectionTitleProps) {
    return (
        <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${className || ""}`}>
            {children}
        </h2>
    );
}