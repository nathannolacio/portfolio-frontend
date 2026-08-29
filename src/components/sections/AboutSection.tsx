import Container from "../layout/Container";
import SectionTitle from "../ui/typography/SectionTitle";
import Badge from "../ui/Badge";
import SkillCard from "../ui/SkillCard";
import { skillGroups } from "../../data/skills";
import Image from "next/image";
import { useTranslations } from "use-intl";

export default function AboutSection() {
    const t = useTranslations("About");

    return (
        <section 
            id="about" 
            className="py-12 md:py-16"
        >
            <Container>
                <div className="mb-12">
                    <SectionTitle>
                        {t("title")}
                    </SectionTitle>
                    <p className="text-lg md:text-xl mt-2 text-text-muted">
                        {t("description")}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                        <Badge text={t("highlights.role")} className="border-border bg-surface text-text-muted" />
                        <Badge text={t("highlights.focus")} className="border-border bg-surface text-text-muted" />
                        <Badge text={t("highlights.availability")} className="border-accent/40 bg-accent-soft text-accent" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
                    <div className="flex justify-center items-start md:order-2">
                        <div className="relative w-56 h-56 rounded-full overflow-hidden border border-border">
                            <Image
                                src="/foto-perfil.jpeg"
                                alt="Profile photo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:order-1">
                        <h3 className="text-lg font-semibold text-text mb-2">{t("whoIam.title")}</h3>
                        <p className="text-lg text-text leading-7">
                            {t("whoIam.paragraph1")}
                        </p>
                        <p className="text-lg text-text leading-7">
                            {t("whoIam.paragraph2")}
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-lg font-semibold text-text mb-6">{t("skills.title")}</h3>
                    <div className="flex flex-col gap-8">
                        {skillGroups.map(({ title, skills }) => (
                            <div key={title}>
                                <p className="font-mono text-sm font-semibold text-text-muted uppercase tracking-widest mb-4">
                                    {t(`skills.${title}`)}
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {skills.map(({ name, icon: Icon }) => (
                                        <SkillCard
                                            key={name}
                                            name={name}
                                            icon={<Icon size={20} />}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}