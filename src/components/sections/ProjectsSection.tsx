import { useState } from "react";
import type { Project } from "../../lib/data/projects";
import { pickLocale } from "../../lib/i18n/pickLocale";
import Container from "../layout/Container";
import ProjectCard from "../layout/projects/ProjectCard";
import ProjectModal from "../layout/projects/ProjectModal";
import SectionTitle from "../ui/typography/SectionTitle";
import { useLocale, useTranslations } from "next-intl";

type ProjectsSectionProps = {
    projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const t = useTranslations("Projects");
    const locale = useLocale();

    return (
        <section
            id="projects"
            className="scroll-mt-20 py-12 md:py-16"
        >
            <Container>
                <div className="mb-12">
                    <SectionTitle>
                        {t("title")}
                    </SectionTitle>
                    <p className="text-lg md:text-xl mt-2 text-text-muted">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <ProjectCard
                                title={pickLocale(locale, project.titleEn, project.titlePt)}
                                shortDescription={pickLocale(locale, project.shortDescriptionEn, project.shortDescriptionPt)}
                                preview={project.preview}
                                status={project.status}
                                type={project.type}
                                onDetailsClick={() => setSelectedProject(project)}
                            />
                        </div>
                    ))}
                </div>
            </Container>

            {selectedProject ? (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            ) : null}
        </section>
    );
}
