import { ReactNode } from "react";

type  ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "outline" | "ghost";
    className?: string;
    type?: "button" | "submit" | "reset";
    size?: "sm" | "md" | "lg";
    href?: string;
    target?: string;
    rel?: string;
    onClick?: React.MouseEventHandler<HTMLElement>
};

export default function Button({ children, variant = "primary", className, onClick, type = "button", size = "md", href, target, rel }: ButtonProps) {

    const baseStyles =  "flex items-center justify-center rounded-sm transition-colors duration-300 ease-in-out hover:cursor-pointer font-medium focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:outline-none";

    const sizeStyles = {
        sm: "text-sm py-2 px-4 max-h-8",
        md: "text-base py-3 px-6 max-h-10",
        lg: "text-lg py-4 px-8 max-h-12"
    }

    const variantStyles = {
        primary: "bg-text text-bg hover:bg-accent",
        outline: "border border-text text-text hover:border-accent hover:text-accent",
        ghost: "bg-transparent text-text-muted hover:text-accent"
    }

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
                onClick={onClick}
            >
                {children}
            </a>
        )
    } else {
        return(
            <button
                className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
                onClick={onClick}
                type={type}
                >
                {children}
            </button>
        );
    }
}
