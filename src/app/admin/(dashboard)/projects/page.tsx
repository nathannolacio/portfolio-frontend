import Link from "next/link";
import { getProjects } from "../../../../lib/data/projects";
import { deleteProjectAction } from "./[id]/actions";
import DeleteProjectButton from "../../../../components/admin/DeleteProjectButton";

export default async function ProjectsListPage() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-medium text-text">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="rounded-sm bg-text px-4 py-2 text-sm font-medium text-bg transition-colors duration-300 ease-in-out hover:bg-accent"
        >
          New project
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-border rounded-sm border border-border">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="font-medium text-text">{project.titleEn}</p>
              <p className="text-sm text-text-muted">
                {project.category} · {project.status}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/admin/projects/${project.id}`}
                className="rounded-sm border border-border px-3 py-1.5 text-sm text-text-muted hover:text-text"
              >
                Edit
              </Link>
              <DeleteProjectButton
                projectTitle={project.titleEn}
                action={deleteProjectAction.bind(null, project.id)}
              />
            </div>
          </div>
        ))}

        {projects.length === 0 ? (
          <p className="p-6 text-center text-text-muted">No projects yet.</p>
        ) : null}
      </div>
    </div>
  );
}
