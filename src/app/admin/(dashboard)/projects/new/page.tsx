import ProjectForm from "../../../../../components/admin/ProjectForm";
import { createProjectAction } from "./actions";

export default function NewProjectPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl font-medium text-text">New project</h1>
      <ProjectForm formAction={createProjectAction} submitLabel="Create project" />
    </div>
  );
}
