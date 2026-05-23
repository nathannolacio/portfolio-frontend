import type { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaVial } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, SiExpress, SiPostgresql, SiMongodb, SiFigma, SiWebpack } from "react-icons/si";

type SkillData = {
  name: string;
  icon: IconType;
};

type SkillGroup = {
  title: string;
  skills: SkillData[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vue.js", icon: SiVuedotjs },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Docker", icon: FaDocker },
      { name: "Figma", icon: SiFigma },
      { name: "Webpack", icon: SiWebpack },
      { name: "Testing", icon: FaVial },
    ],
  },
];
