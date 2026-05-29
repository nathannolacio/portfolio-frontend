import { useTranslations } from "next-intl";
import Heading from "../../ui/typography/Heading";

export default function HeroContent() {
    const t = useTranslations("Hero");

    return (
        <div className="flex flex-col gap-4">
            <Heading className="text-center md:text-left">
                {/* I build software solutions for{" "}
                <span className="text-lime-600">
                    real problems
                </span>{" "}
                — that&apos;s my purpose. */}
                {t.rich("title", {
                    highlight: (chunks) => (
                        <span className="text-lime-600">
                            {chunks}
                        </span>
                    )
                })}
            </Heading>

            <p className="text-center text-md md:text-left md:text-2xl">
                {t("description")}
            </p>
        </div>
    );
}