import { FaCircle } from "react-icons/fa";
import Badge from "../../ui/Badge";
import { useTranslations } from "next-intl";

type StatusBadgeProps = {
    status: "In Progress" | "Completed" | "MVP";
};

const statusStyles: Record<StatusBadgeProps["status"], string> = {
    "In Progress": "bg-amber-50/70 text-amber-600 border-amber-100",
    "Completed": "bg-emerald-50/70 text-emerald-600 border-emerald-100",
    "MVP": "bg-sky-50/70 text-sky-600 border-sky-100",
};

const statusTranslationKeys: Record<StatusBadgeProps["status"], string> = {
  "In Progress": "status.inProgress",
  "Completed": "status.completed",
  MVP: "status.mvp",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    const t = useTranslations("Projects");

    return (
        <Badge 
            icon={
                <FaCircle 
                    size={8}
                />
            }
            text={t(statusTranslationKeys[status])}
            className={statusStyles[status]}
        />
    );
}