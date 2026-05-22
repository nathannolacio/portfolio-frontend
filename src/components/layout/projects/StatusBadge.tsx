import { FaCircle } from "react-icons/fa";
import Badge from "../../ui/Badge";

type StatusBadgeProps = {
    status: "In Progress" | "Completed" | "MVP";
};

const statusStyles: Record<StatusBadgeProps["status"], string> = {
    "In Progress": "bg-amber-50/70 text-amber-600 border-amber-100",
    "Completed": "bg-emerald-50/70 text-emerald-600 border-emerald-100",
    "MVP": "bg-sky-50/70 text-sky-600 border-sky-100",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <Badge 
            icon={
                <FaCircle 
                    size={8}
                />
            }
            text={status}
            className={statusStyles[status]}
        />
    );
}