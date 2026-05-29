import type { IconType } from "react-icons";
import { FaReact, FaDocker, FaGitAlt, FaJava, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiSpringboot, SiMysql, SiJavascript, SiSpringsecurity, SiApachemaven, SiGithubactions } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc"; 

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
    title: "block1",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "block2",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Security", icon: SiSpringsecurity },
      { name: "Maven", icon: SiApachemaven },
      { name: "REST APIs", icon: TbApi },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "block3",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Docker", icon: FaDocker },
      { name: "Azure", icon: VscAzure },
      { name: "AWS", icon: FaAws }
    ],
  },
];
