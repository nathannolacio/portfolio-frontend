import Container from "../layout/Container";
import SectionTitle from "../ui/typography/SectionTitle";
import SkillCard from "../ui/SkillCard";
import { skillGroups } from "../../data/skills";

export default function AboutSection() {
    return (
        <section 
            id="about" 
            className="py-12 md:py-16"
        >
            <Container>
                <div className="mb-12">
                    <SectionTitle>
                        About Me
                    </SectionTitle>
                    <p className="text-lg md:text-xl mt-2 text-slate-600">
                        A passionate developer focused on building clean, user-centered experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
                    <div className="flex justify-center items-start md:order-2">
                        <div className="w-56 h-56 rounded-full bg-linear-to-br from-zinc-200 to-zinc-300 flex items-center justify-center shadow-md">
                            <div className="text-zinc-400 text-6xl font-light">👤</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:order-1">
                        <h3 className="text-lg font-semibold text-zinc-800 mb-2">Who I am</h3>
                        <p className="text-zinc-600 leading-7">
                            {`I'm a full-stack developer with a passion for creating intuitive, performant web applications.`}
                            {`With experience across modern JavaScript frameworks and design systems, I bridge the gap between 
                            design and engineering to deliver solutions that matter.`}
                        </p>
                        <p className="text-zinc-600 leading-7">
                            {`When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                            or sharing knowledge with the developer community.`}
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-lg font-semibold text-zinc-800 mb-6">Skills</h3>
                    <div className="flex flex-col gap-8">
                        {skillGroups.map(({ title, skills }) => (
                            <div key={title}>
                                <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                                    {title}
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