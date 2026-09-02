"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import {
  PROJECT_CATEGORIES,
  PROJECT_STATUSES,
  PROJECT_TYPES,
  type ProjectInput,
} from "../../lib/data/project-types";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";
import LocaleTabs from "./LocaleTabs";
import RepeatableList from "./RepeatableList";

const emptyProject: ProjectInput = {
  titleEn: "",
  titlePt: "",
  shortDescriptionEn: "",
  shortDescriptionPt: "",
  fullDescriptionEn: "",
  fullDescriptionPt: "",
  preview: "",
  images: [],
  type: PROJECT_TYPES[0],
  category: PROJECT_CATEGORIES[0],
  technologies: [],
  features: [],
  status: PROJECT_STATUSES[0],
  githubUrl: "",
  liveUrl: "",
};

type ProjectFormProps = {
  initialValues?: ProjectInput;
  formAction: (formData: FormData) => void;
  submitLabel: string;
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-fit rounded-sm bg-text px-6 py-3 text-sm font-medium text-bg transition-colors duration-300 ease-in-out hover:bg-accent disabled:opacity-60"
    >
      {pending ? "Saving..." : label}
    </button>
  );
}

export default function ProjectForm({ initialValues, formAction, submitLabel }: ProjectFormProps) {
  const [draft, setDraft] = useState<ProjectInput>(initialValues ?? emptyProject);

  function setField<K extends keyof ProjectInput>(key: K, value: ProjectInput[K]) {
    setDraft((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form action={formAction} className="flex max-w-3xl flex-col gap-6">
      <input type="hidden" name="payload" value={JSON.stringify(draft)} />

      <LocaleTabs
        label="Title"
        en={<Input value={draft.titleEn} onChange={(e) => setField("titleEn", e.target.value)} required />}
        pt={<Input value={draft.titlePt} onChange={(e) => setField("titlePt", e.target.value)} required />}
      />

      <LocaleTabs
        label="Short description"
        en={<Textarea rows={2} value={draft.shortDescriptionEn} onChange={(e) => setField("shortDescriptionEn", e.target.value)} required />}
        pt={<Textarea rows={2} value={draft.shortDescriptionPt} onChange={(e) => setField("shortDescriptionPt", e.target.value)} required />}
      />

      <LocaleTabs
        label="Full description"
        en={<Textarea rows={5} value={draft.fullDescriptionEn} onChange={(e) => setField("fullDescriptionEn", e.target.value)} required />}
        pt={<Textarea rows={5} value={draft.fullDescriptionPt} onChange={(e) => setField("fullDescriptionPt", e.target.value)} required />}
      />

      <Input
        label="Preview image URL"
        value={draft.preview}
        onChange={(e) => setField("preview", e.target.value)}
        required
      />

      <RepeatableList
        label="Gallery images (URLs)"
        items={draft.images}
        emptyItem=""
        onChange={(images) => setField("images", images)}
        renderItem={(value, onItemChange) => (
          <Input value={value} onChange={(e) => onItemChange(e.target.value)} />
        )}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Select label="Type" options={PROJECT_TYPES} value={draft.type} onChange={(e) => setField("type", e.target.value as ProjectInput["type"])} />
        <Select label="Category" options={PROJECT_CATEGORIES} value={draft.category} onChange={(e) => setField("category", e.target.value as ProjectInput["category"])} />
        <Select label="Status" options={PROJECT_STATUSES} value={draft.status} onChange={(e) => setField("status", e.target.value as ProjectInput["status"])} />
      </div>

      <RepeatableList
        label="Technologies"
        items={draft.technologies}
        emptyItem=""
        onChange={(technologies) => setField("technologies", technologies)}
        renderItem={(value, onItemChange) => (
          <Input value={value} onChange={(e) => onItemChange(e.target.value)} />
        )}
      />

      <RepeatableList
        label="Features (EN / PT)"
        items={draft.features}
        emptyItem={{ en: "", pt: "" }}
        onChange={(features) => setField("features", features)}
        renderItem={(feature, onItemChange) => (
          <div className="grid grid-cols-2 gap-2">
            <Input
              placeholder="EN"
              value={feature.en}
              onChange={(e) => onItemChange({ ...feature, en: e.target.value })}
            />
            <Input
              placeholder="PT"
              value={feature.pt}
              onChange={(e) => onItemChange({ ...feature, pt: e.target.value })}
            />
          </div>
        )}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="GitHub URL"
          value={draft.githubUrl ?? ""}
          onChange={(e) => setField("githubUrl", e.target.value || null)}
        />
        <Input
          label="Live URL"
          value={draft.liveUrl ?? ""}
          onChange={(e) => setField("liveUrl", e.target.value || null)}
        />
      </div>

      <SubmitButton label={submitLabel} />
    </form>
  );
}
