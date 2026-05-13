import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({children, className}: ContainerProps) {
    return (
        <div className={`bg-amber-400 mx-auto w-full max-w-6xl ${className || ""}`}>
            {children}
        </div>
    )
}