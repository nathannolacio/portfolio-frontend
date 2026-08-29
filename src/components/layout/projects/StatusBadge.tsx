import { FaCircle } from "react-icons/fa";
import Badge from "../../ui/Badge";
import { useTranslations } from "next-intl";

type StatusBadgeProps = {
    status: "In Progress" | "Completed" | "MVP";
};

const statusStyles: Record<StatusBadgeProps["status"], string> = {
    "In Progress": "bg-surface text-text-muted border-border",
    "Completed": "bg-surface text-text-muted border-border",
    "MVP": "bg-surface text-text-muted border-border",
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