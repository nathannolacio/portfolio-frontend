import Image from "next/image";
import { FaRegImage } from "react-icons/fa";
import Button from "../../ui/Button";
import StatusBadge from "./StatusBadge";
import TypeBadge from "./TypeBadge";

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
  return (
    <div className="bg-neutral-50 border border-zinc-300 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 h-full flex flex-col gap-4">

        <div className="flex justify-between items-center">
            <TypeBadge type={type} />
            <StatusBadge status={status} />
        </div>
        
        <div className="relative flex items-center justify-center h-42 bg-zinc-200 rounded-md overflow-hidden">
            {preview ? (
                <Image src={preview} alt={title} fill className="object-cover" />
                ) : (
                <FaRegImage className="text-4xl text-gray-400" />
            )}
        </div>

        <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{shortDescription}</p>
        </div>

        <div className="mt-auto">
            <Button 
                size="sm"
                variant="outline"
                color="lime"
                onClick={onDetailsClick}
            >
                More about
            </Button>
        </div>
    </div>
  );
}