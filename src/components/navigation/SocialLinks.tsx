import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type SocialLinksProps = {
    className?: string;
};

const socials = [
    { label: "GitHub", href: "https://github.com/nathannolacio", Icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/nathannolacio/", Icon: FaLinkedinIn },
];

export default function SocialLinks({ className }: SocialLinksProps) {
    return (
        <div className={className}>
            {socials.map(({ label, href, Icon }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-text-muted hover:text-accent transition-colors"
                >
                    <Icon size={18} />
                </a>
            ))}
        </div>
    );
}
