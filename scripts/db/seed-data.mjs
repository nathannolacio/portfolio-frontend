import en from "../../src/messages/en.json" with { type: "json" };
import pt from "../../src/messages/pt.json" with { type: "json" };
import { projects as legacyProjects } from "../../src/data/projects.ts";

function buildFeatures(key) {
  const enFeatures = en.Projects[key].features;
  const ptFeatures = pt.Projects[key].features;
  return Object.keys(enFeatures).map((featureKey) => ({
    en: enFeatures[featureKey],
    pt: ptFeatures[featureKey],
  }));
}

function localeKeyFromTitleKey(titleKey) {
  return titleKey.split(".")[0];
}

export const seedProjects = legacyProjects.map((project) => {
  const key = localeKeyFromTitleKey(project.title);
  return {
    id: project.id,
    titleEn: en.Projects[key].title,
    titlePt: pt.Projects[key].title,
    shortDescriptionEn: en.Projects[key].shortDescription,
    shortDescriptionPt: pt.Projects[key].shortDescription,
    fullDescriptionEn: en.Projects[key].fullDescription,
    fullDescriptionPt: pt.Projects[key].fullDescription,
    preview: project.preview,
    images: (project.images ?? []).map((img) => img.src),
    type: project.type,
    category: project.category,
    technologies: project.technologies,
    features: buildFeatures(key),
    status: project.status,
    githubUrl: project.githubUrl ?? null,
    liveUrl: project.liveUrl ?? null,
  };
});
