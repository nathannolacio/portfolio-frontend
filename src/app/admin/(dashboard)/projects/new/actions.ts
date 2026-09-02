"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createProject, type ProjectInput } from "../../../../../lib/data/projects";

export async function createProjectAction(formData: FormData) {
  const payload = JSON.parse(String(formData.get("payload"))) as ProjectInput;

  await createProject(payload);

  revalidatePath("/admin/projects");
  revalidatePath("/[locale]", "layout");

  redirect("/admin/projects");
}
