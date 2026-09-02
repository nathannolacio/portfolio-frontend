import Image from "next/image";
import { FaRegImage } from "react-icons/fa";
import Button from "../../ui/Button";
import StatusBadge from "./StatusBadge";
import TypeBadge from "./TypeBadge";
import { useTranslations } from "next-intl";

type ProjectCardProps = {
    preview?: string;
    title: string;
    shortDescription: string;
    status: "In Progress" | "Completed" | "MVP";
    type: "Real Project" | "Study Project";
    onDetailsClick?: () => void;
}

export default function ProjectCard({
    preview,
    title,
    shortDescription,
    status,
    type,
    onDetailsClick,
}: ProjectCardProps) {
    const t = useTranslations("Projects");

  return (
    <div className="bg-surface border border-border rounded-sm hover:border-text/40 transition-colors p-4 h-full flex flex-col gap-4">

        <div className="flex justify-between items-center">
            <TypeBadge type={type} />
            <StatusBadge status={status} />
        </div>

        <div className="relative flex items-center justify-center h-42 bg-surface-2 rounded-sm overflow-hidden border border-border">
            {preview ? (
                <Image src={preview} alt={title} fill className="object-cover" />
                ) : (
                <FaRegImage className="text-4xl text-text-muted" />
            )}
        </div>

        <div className="flex-1">
            <h3 className="font-display font-medium text-lg mb-2">{title}</h3>
            <p className="text-text-muted text-sm">{shortDescription}</p>
        </div>

        <div className="mt-auto">
            <Button
                size="sm"
                variant="outline"
                onClick={onDetailsClick}
            >
                {t("moreAbout")}
            </Button>
        </div>
    </div>
  );
}