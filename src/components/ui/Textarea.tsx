import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export default function Textarea({ label, id, className, ...props }: TextareaProps) {
  const textarea = (
    <textarea
      id={id}
      rows={4}
      className={`w-full rounded-sm border border-border bg-bg px-3 py-2 text-text outline-none focus:border-accent ${className ?? ""}`}
      {...props}
    />
  );

  if (!label) return textarea;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-text-muted">
        {label}
      </label>
      {textarea}
    </div>
  );
}
