import Container from "../layout/Container";
import SectionTitle from "../ui/typography/SectionTitle";
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
                    <p className="text-lg md:text-xl mt-2 text-slate-600">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
                    <div className="flex justify-center items-start md:order-2">
                        <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-md">
                            <Image
                                src="/foto-perfil.jpeg"
                                alt="Profile photo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:order-1">
                        <h3 className="text-lg font-semibold text-zinc-800 mb-2">{t("whoIam.title")}</h3>
                        <p className="text-lg text-zinc-800 leading-7">
                            {t("whoIam.paragraph1")}
                        </p>
                        <p className="text-lg text-zinc-800 leading-7">
                            {t("whoIam.paragraph2")}
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-lg font-semibold text-zinc-800 mb-6">{t("skills.title")}</h3>
                    <div className="flex flex-col gap-8">
                        {skillGroups.map(({ title, skills }) => (
                            <div key={title}>
                                <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">
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