import { ReactNode } from "react";

type SkillCardProps = {
  icon: ReactNode;
  name: string;
};

export default function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-sm border border-border bg-surface p-6 transition-colors duration-200 hover:border-text/40">
      <div className="flex h-8 w-8 items-center justify-center text-text">
        {icon}
      </div>
      <span className="text-center text-sm font-medium text-text">{name}</span>
    </div>
  );
}
