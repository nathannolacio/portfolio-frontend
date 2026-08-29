import { useTranslations } from "next-intl";

type HeroBadgeProps = {
    name: string;
}

export default function HeroBadge({ name }: HeroBadgeProps) {
    const t = useTranslations("Hero.badge");

    return (
        <div
            className="w-fit rounded-sm py-1 text-sm/6 font-mono bg-text"
        >
            <p className="px-2">
                <span className="text-accent bg-accent-soft rounded-sm ring-1 ring-accent/40 mr-1 w-fit px-1 font-medium">
                    {`<${t("word1")}>`}
                </span>
                <span className="text-bg/70 mr-1">
                    {t("word2")}
                </span>
                <span className="text-bg font-medium">
                    {name}
                </span>
            </p>
        </div>
    );
}