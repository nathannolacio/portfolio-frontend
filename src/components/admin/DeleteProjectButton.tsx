"use client";

type DeleteProjectButtonProps = {
  projectTitle: string;
  action: () => void;
};

export default function DeleteProjectButton({ projectTitle, action }: DeleteProjectButtonProps) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!window.confirm(`Delete "${projectTitle}"? This cannot be undone.`)) {
          e.preventDefault();
        }
      }}
    >
      <button type="submit" className="rounded-sm border border-border px-3 py-1.5 text-sm text-text-muted hover:text-text">
        Delete
      </button>
    </form>
  );
}
