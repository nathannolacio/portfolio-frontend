import { useTranslations } from "next-intl";

type HeroBadgeProps = {
    name: string;
}

export default function HeroBadge({ name }: HeroBadgeProps) {
    const t = useTranslations("Hero.badge");

    return (
        <div 
            className="w-fit rounded-lg py-1 text-sm/6 bg-zinc-800"
        >
            <p className="px-2">
                <span className="text-lime-600 bg-lime-100 rounded-md ring-1 ring-lime-600/60 mr-1 w-fit px-1 font-medium">
                    {`<${t("word1")}>`}
                </span>
                <span className="text-zinc-200 mr-1">
                    {t("word2")}
                </span>
                <span className="text-neutral-50 font-medium">
                    {name}
                </span>
            </p>
        </div>
    );
}