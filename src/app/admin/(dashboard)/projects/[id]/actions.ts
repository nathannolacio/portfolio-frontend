"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { deleteProject, updateProject, type ProjectInput } from "../../../../../lib/data/projects";

export async function updateProjectAction(id: number, formData: FormData) {
  const payload = JSON.parse(String(formData.get("payload"))) as ProjectInput;

  await updateProject(id, payload);

  revalidatePath("/admin/projects");
  revalidatePath("/[locale]", "layout");

  redirect("/admin/projects");
}

export async function deleteProjectAction(id: number) {
  await deleteProject(id);

  revalidatePath("/admin/projects");
  revalidatePath("/[locale]", "layout");
}
