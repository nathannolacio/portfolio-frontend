export const PROJECT_TYPES = ["Real Project", "Study Project"] as const;
export const PROJECT_CATEGORIES = [
  "System",
  "CMS",
  "Landing Page",
  "Portfolio",
  "Dashboard",
  "API",
  "Mobile App",
] as const;
export const PROJECT_STATUSES = ["In Progress", "Completed"] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export type ProjectFeature = {
  en: string;
  pt: string;
};

export type Project = {
  id: number;
  titleEn: string;
  titlePt: string;
  shortDescriptionEn: string;
  shortDescriptionPt: string;
  fullDescriptionEn: string;
  fullDescriptionPt: string;
  preview: string;
  images: string[];
  type: ProjectType;
  category: ProjectCategory;
  technologies: string[];
  features: ProjectFeature[];
  status: ProjectStatus;
  githubUrl: string | null;
  liveUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ProjectInput = Omit<Project, "id" | "createdAt" | "updatedAt">;
