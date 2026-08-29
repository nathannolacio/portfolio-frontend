import { useTranslations } from "next-intl";
import Heading from "../../ui/typography/Heading";

export default function HeroContent() {
    const t = useTranslations("Hero");

    return (
        <div className="flex flex-col gap-4 items-center">
            <Heading className="text-center">
                {t.rich("title", {
                    highlight: (chunks) => (
                        <span className="text-accent">
                            {chunks}
                        </span>
                    )
                })}
            </Heading>

            <p className="text-center text-md md:text-2xl">
                {t("description")}
            </p>
        </div>
    );
}