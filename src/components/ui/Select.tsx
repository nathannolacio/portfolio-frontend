import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: readonly string[];
};

export default function Select({ label, id, options, className, ...props }: SelectProps) {
  const select = (
    <select
      id={id}
      className={`w-full rounded-sm border border-border bg-bg px-3 py-2 text-text outline-none focus:border-accent ${className ?? ""}`}
      {...props}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  if (!label) return select;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-text-muted">
        {label}
      </label>
      {select}
    </div>
  );
}
