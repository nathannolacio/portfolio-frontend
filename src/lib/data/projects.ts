import { sql } from "../db/client";
import type { Project, ProjectFeature, ProjectInput, ProjectStatus, ProjectType, ProjectCategory } from "./project-types";

export * from "./project-types";

type ProjectRow = {
  id: number;
  title_en: string;
  title_pt: string;
  short_description_en: string;
  short_description_pt: string;
  full_description_en: string;
  full_description_pt: string;
  preview: string;
  images: string[];
  type: ProjectType;
  category: ProjectCategory;
  technologies: string[];
  features: ProjectFeature[];
  status: ProjectStatus;
  github_url: string | null;
  live_url: string | null;
  created_at: string;
  updated_at: string;
};

function mapRow(row: ProjectRow): Project {
  return {
    id: row.id,
    titleEn: row.title_en,
    titlePt: row.title_pt,
    shortDescriptionEn: row.short_description_en,
    shortDescriptionPt: row.short_description_pt,
    fullDescriptionEn: row.full_description_en,
    fullDescriptionPt: row.full_description_pt,
    preview: row.preview,
    images: row.images,
    type: row.type,
    category: row.category,
    technologies: row.technologies,
    features: row.features,
    status: row.status,
    githubUrl: row.github_url,
    liveUrl: row.live_url,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getProjects(): Promise<Project[]> {
  const rows = (await sql`
    select * from public.projects order by created_at asc
  `) as ProjectRow[];
  return rows.map(mapRow);
}

export async function getProjectById(id: number): Promise<Project | null> {
  const rows = (await sql`
    select * from public.projects where id = ${id}
  `) as ProjectRow[];
  return rows[0] ? mapRow(rows[0]) : null;
}

export async function createProject(input: ProjectInput): Promise<Project> {
  const rows = (await sql`
    insert into public.projects (
      title_en, title_pt, short_description_en, short_description_pt,
      full_description_en, full_description_pt, preview, images,
      type, category, technologies, features, status, github_url, live_url
    ) values (
      ${input.titleEn}, ${input.titlePt}, ${input.shortDescriptionEn}, ${input.shortDescriptionPt},
      ${input.fullDescriptionEn}, ${input.fullDescriptionPt}, ${input.preview}, ${input.images},
      ${input.type}, ${input.category}, ${input.technologies}, ${JSON.stringify(input.features)}, ${input.status}, ${input.githubUrl}, ${input.liveUrl}
    )
    returning *
  `) as ProjectRow[];
  return mapRow(rows[0]);
}

export async function updateProject(id: number, input: ProjectInput): Promise<Project> {
  const rows = (await sql`
    update public.projects set
      title_en = ${input.titleEn},
      title_pt = ${input.titlePt},
      short_description_en = ${input.shortDescriptionEn},
      short_description_pt = ${input.shortDescriptionPt},
      full_description_en = ${input.fullDescriptionEn},
      full_description_pt = ${input.fullDescriptionPt},
      preview = ${input.preview},
      images = ${input.images},
      type = ${input.type},
      category = ${input.category},
      technologies = ${input.technologies},
      features = ${JSON.stringify(input.features)},
      status = ${input.status},
      github_url = ${input.githubUrl},
      live_url = ${input.liveUrl},
      updated_at = now()
    where id = ${id}
    returning *
  `) as ProjectRow[];
  return mapRow(rows[0]);
}

export async function deleteProject(id: number): Promise<void> {
  await sql`delete from public.projects where id = ${id}`;
}
