import { ReactNode } from "react";

type  ButtonProps = {
    children: ReactNode;
    color?: "zinc" | "lime" | "cyan";
    variant?: "primary" | "outline";
    className?: string;
    type?: "button" | "submit" | "reset";
    size?: "sm" | "md" | "lg";
    onClick?: React.MouseEventHandler<HTMLButtonElement>
};

export default function Button({ children, color = "zinc", variant = "primary", className, onClick, type = "button", size = "md" }: ButtonProps) {

    const baseStyles = "flex items-center justify-center rounded-lg transition-colors duration-500 ease-in-out hover:cursor-pointer font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none";

    const sizeStyles = {
        sm: "text-sm py-2 px-4 max-h-8",
        md: "text-base py-3 px-6 max-h-10",
        lg: "text-lg py-4 px-8 max-h-12"
    }   

    const colorStyles = {
        zinc: {
            primary: "bg-zinc-800 hover:bg-zinc-600 text-neutral-50 focus:ring-zinc-800",
            outline: "border border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-neutral-50 focus:ring-zinc-800",
        },
        lime: {
            primary: "bg-lime-600 hover:bg-lime-700 text-neutral-50 focus:ring-lime-600",
            outline: "border border-lime-600 text-lime-600 hover:bg-lime-700 hover:text-neutral-50 focus:ring-lime-600",
        },
        cyan: {
            primary: "bg-cyan-600 hover:bg-cyan-700 text-neutral-50 focus:ring-cyan-600",
            outline: "border border-cyan-600 text-cyan-600 hover:bg-cyan-700 hover:text-neutral-50 focus:ring-cyan-600",
        }
    }

    return(
        <button 
            className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]} ${className}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>   
    );
}