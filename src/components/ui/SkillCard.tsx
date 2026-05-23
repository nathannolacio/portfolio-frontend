import { ReactNode } from "react";

type SkillCardProps = {
  icon: ReactNode;
  name: string;
};

export default function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-zinc-200 bg-white p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex h-8 w-8 items-center justify-center text-zinc-700">
        {icon}
      </div>
      <span className="text-center text-sm font-medium text-zinc-700">{name}</span>
    </div>
  );
}
