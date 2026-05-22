type StatusProps = {
    icon?: React.ReactNode;
    text: string;
    className?: string;
}

export default function Badge({ icon, text, className }: StatusProps) {
    return (
        <div 
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${className}`}
        >
            {icon}
            <span>
                {text}
            </span>
        </div>
    );
}