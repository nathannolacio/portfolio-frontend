import { notFound } from "next/navigation";
import ProjectForm from "../../../../../components/admin/ProjectForm";
import { getProjectById } from "../../../../../lib/data/projects";
import { updateProjectAction } from "./actions";

type EditProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  const boundAction = updateProjectAction.bind(null, project.id);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl font-medium text-text">Edit project</h1>
      <ProjectForm initialValues={project} formAction={boundAction} submitLabel="Save changes" />
    </div>
  );
}
