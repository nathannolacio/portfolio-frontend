import Image from "next/image";
import Button from "../../ui/Button";
import { Project } from "../../../lib/data/projects";
import { pickLocale } from "../../../lib/i18n/pickLocale";
import Badge from "../../ui/Badge";
import TypeBadge from "./TypeBadge";
import StatusBadge from "./StatusBadge";
import { IoIosClose } from "react-icons/io";
import { useLocale, useTranslations } from "next-intl";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const categoryTranslationKeys: Record<Project["category"], string> = {
  System: "category.system",
  CMS: "category.cms",
  "Landing Page": "category.landingPage",
  Portfolio: "category.portfolio",
  Dashboard: "category.dashboard",
  API: "category.api",
  "Mobile App": "category.mobileApp",
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const projectTitle = pickLocale(locale, project.titleEn, project.titlePt);
  const projectShortDescription = pickLocale(locale, project.shortDescriptionEn, project.shortDescriptionPt);
  const projectFullDescription = pickLocale(locale, project.fullDescriptionEn, project.fullDescriptionPt);
  const projectFeatures = project.features.map((feature) => pickLocale(locale, feature.en, feature.pt));
  const projectCategory = t(categoryTranslationKeys[project.category]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-text/80 p-4">
        <div className="relative flex flex-col gap-6 w-full max-w-6xl max-h-[calc(100vh-4rem)] overflow-y-auto rounded-sm bg-bg p-8">

            <Button 
                variant="ghost"
                size="sm"
                className="absolute right-4 top-4 rounded-full"
                onClick={onClose}
                aria-label={t("modal.close")}
            >
                <IoIosClose size={32} />
            </Button>

            <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
                <div className="flex flex-col items-center md:flex-row gap-6">
                    <h2 className="font-display font-medium text-2xl text-text">{projectTitle}</h2>

                    <div className="flex flex-wrap gap-4 justify-center items-center md:justify-end">
                        <TypeBadge type={project.type} />
                        <Badge
                            text={projectCategory}
                            className="border-border bg-surface text-text-muted"
                        />
                        <StatusBadge status={project.status} />
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">

                {/* Overview + Technologies block  */}
                <div className="flex flex-col gap-8 rounded-sm border border-border p-4">

                    <div className="relative h-56 overflow-hidden rounded-sm bg-surface border border-border">
                        {project.preview ? (
                            <Image src={project.preview} alt={projectTitle} fill className="object-cover" />
                        ) : (
                            <div className="flex h-full items-center justify-center text-text-muted">
                                {t("modal.noPreview")}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="font-mono text-sm font-semibold text-text-muted uppercase tracking-[0.18em]">{t("modal.overview")}</p>
                            <p className="mt-2 text-text">{projectShortDescription}</p>
                        </div>
                        <div>
                            <p className="font-mono text-sm font-semibold text-text-muted uppercase tracking-[0.18em]">{t("modal.technologies")}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        text={tech}
                                        className="border-border bg-surface text-text-muted"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description + Features + Images block */}
                <div className="space-y-6">
                    <div className="rounded-sm border border-border bg-surface p-6">
                        <h3 className="text-lg font-semibold text-text">{t("modal.description")}</h3>
                        <p className="mt-3 text-text-muted leading-7">{projectFullDescription}</p>
                    </div>

                    <div className="gap-4">
                        <div className="rounded-sm border border-border bg-surface p-6">
                            <h4 className="font-mono text-sm font-semibold text-text uppercase tracking-[0.18em]">{t("modal.features")}</h4>
                            <ul className="mt-3 space-y-2 text-text-muted">
                                {projectFeatures.map((feature, index) => (
                                    <li key={index} className="flex gap-2">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {project.images.length ? (
                        <div className="rounded-sm border border-border bg-surface p-6">
                            <h4 className="font-mono text-sm font-semibold text-text uppercase tracking-[0.18em]">{t("modal.images")}</h4>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                {project.images.map((image, index) => (
                                    <div key={index} className="relative h-40 overflow-hidden rounded-sm bg-surface">
                                        <Image src={image} alt={t("modal.imageAlt", { title: projectTitle })} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                {project.liveUrl ? (
                    <Button onClick={() => window.open(project.liveUrl!, "_blank", "noopener,noreferrer")}>{t("modal.liveDemo")}</Button>
                ) : null}
                {project.githubUrl ? (
                    <Button variant="outline" onClick={() => window.open(project.githubUrl!, "_blank", "noopener,noreferrer")}>{t("modal.github")}</Button>
                ) : null}
            </div>
        </div>
    </div>
  );
}
