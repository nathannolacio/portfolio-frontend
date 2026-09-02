import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, id, className, ...props }: InputProps) {
  const input = (
    <input
      id={id}
      className={`w-full rounded-sm border border-border bg-bg px-3 py-2 text-text outline-none focus:border-accent ${className ?? ""}`}
      {...props}
    />
  );

  if (!label) return input;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-text-muted">
        {label}
      </label>
      {input}
    </div>
  );
}
