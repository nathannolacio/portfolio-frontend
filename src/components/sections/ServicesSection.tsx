import { useTranslations } from "next-intl";
import Container from "../layout/Container";
import SectionTitle from "../ui/typography/SectionTitle";
import Button from "../ui/Button";

const bulletKeys = ["apis", "webApps", "mvps"] as const;
const stepKeys = ["step1", "step2", "step3"] as const;

export default function ServicesSection() {
    const t = useTranslations("Services");

    return (
        <section
            id="services"
            className="py-12 md:py-16"
        >
            <Container>
                <div className="mb-12">
                    <SectionTitle>
                        {t("title")}
                    </SectionTitle>
                    <p className="text-lg md:text-xl mt-2 text-text-muted max-w-2xl">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                    {bulletKeys.map((key) => (
                        <div
                            key={key}
                            className="rounded-sm border border-border bg-surface p-6"
                        >
                            <p className="text-text leading-7">
                                {t(`bullets.${key}`)}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mb-12">
                    <h3 className="font-mono text-sm font-semibold text-text-muted uppercase tracking-widest mb-6">
                        {t("process.title")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stepKeys.map((key, index) => (
                            <div key={key} className="flex flex-col gap-2">
                                <span className="font-mono text-sm text-accent">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h4 className="font-display font-medium text-lg text-text">
                                    {t(`process.${key}.title`)}
                                </h4>
                                <p className="text-text-muted leading-6">
                                    {t(`process.${key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <Button href="#contact">
                    {t("cta")}
                </Button>
            </Container>
        </section>
    );
}
