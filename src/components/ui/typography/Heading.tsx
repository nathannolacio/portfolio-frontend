type HeadingProps = {
    children: React.ReactNode;
    className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
    return (
        <h1
            className={`font-semibold leading-tight text-2xl md:text-6xl ${className || ""}`}
        >
            {children}
        </h1>
    );
}