import { ReactNode } from "react";

type SkillBadgeProps = {
  icon: ReactNode;
  name: string;
  className?: string;
};

export default function SkillBadge({ icon, name, className }: SkillBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-sm text-slate-700 ${className ?? ""}`}
    >
      <span className="flex h-4 w-4 items-center justify-center text-slate-700">
        {icon}
      </span>
      <span>{name}</span>
    </div>
  );
}
