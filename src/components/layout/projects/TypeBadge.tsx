import Badge from "../../ui/Badge";
import { useTranslations } from "next-intl";

type TypeProps = {
    type: "Real Project" | "Study Project";
}

const typeTranslationKeys: Record<TypeProps["type"], string> = {
  "Real Project": "type.realProject",
  "Study Project": "type.studyProject",
};

export default function TypeBadge({ type }: TypeProps) {
    const t = useTranslations("Projects");

    return (
        <Badge 
            text={t(typeTranslationKeys[type])}
            className="text-lime-600 border-lime-400 bg-lime-100/70"
        />
    );
}