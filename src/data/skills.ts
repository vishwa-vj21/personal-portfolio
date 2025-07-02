import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";
import * as SimpleIcons from "simple-icons";
import React from "react";

// Helper function to get SimpleIcon component
const getSimpleIcon = (
  iconName: string
): React.FC<{ className?: string }> | null => {
  const iconKey = `si${iconName}`;
  const icon = (SimpleIcons as any)[iconKey];
  if (!icon) return null;

  // Create a component that renders the SVG path
  const IconComponent: React.FC<{ className?: string }> = ({ className }) => {
    return React.createElement("svg", {
      role: "img",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      children: React.createElement("path", {
        d: icon.path,
        fill: "currentColor",
      }),
    });
  };

  return IconComponent;
};

export type Skill = {
  name: string;
  icon: React.FC<{ className?: string }> | null;
  color: string;
};

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: [
      {
        name: "JavaScript",
        icon: getSimpleIcon("Javascript"),
        color: "#F7DF1E",
      },
      { name: "Python", icon: getSimpleIcon("Python"), color: "#3776AB" },
      { name: "C++", icon: getSimpleIcon("Cplusplus"), color: "#00599C" },
      { name: "C", icon: getSimpleIcon("C"), color: "#A8B9CC" },
      { name: "HTML/CSS", icon: getSimpleIcon("Html5"), color: "#E34F26" },
      { name: "TypeScript", icon: getSimpleIcon("Typescript"), color: "#3178C6" },
     
    ],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React", icon: getSimpleIcon("React"), color: "#E23237" },
      { name: "Radix UI", icon: getSimpleIcon("radixui"), color: "#000000" },
      {
        name: "Bootstrap",
        icon: getSimpleIcon("Bootstrap"),
        color: "#7952B3",
      },
      {
        name: "Tailwind CSS",
        icon: getSimpleIcon("Tailwindcss"),
        color: "#06B6D4",
      },
      
    ],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: [
      { name: "Node.js", icon: getSimpleIcon("Nodedotjs"), color: "#5FA04E" },
      { name: "Express.js", icon: getSimpleIcon("Express"), color: "#000000" },
      { name: "REST APIs", icon: getSimpleIcon("Postman"), color: "#FF6C37" },
      { name: "JWT", icon: getSimpleIcon("Jsonwebtokens"), color: "#000000" },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: getSimpleIcon("Mongodb"), color: "#47A248" },
      { name: "MySQL", icon: getSimpleIcon("Mysql"), color: "#4479A1" },
      {
        name: "Prisma ORM",
        icon: getSimpleIcon("Prisma"),
        color: "#4169E1",
      },
      {name: "Redis", icon: getSimpleIcon("Redis"), color: "#DC382D" },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: [
      { name: "Git", icon: getSimpleIcon("Git"), color: "#F05032" },
      { name: "Bash", icon: getSimpleIcon("Bash"), color: "#0052CC" },
      {
        name: "Docker",
        icon: getSimpleIcon("Docker"),
        color: "#2496ED",
      },
      { name: "Postman", icon: getSimpleIcon("Postman"), color: "#FF6C37" },
      { name: "Vercel", icon: getSimpleIcon("Vercel"), color: "#000000" },
      
      { name: "zod", icon: getSimpleIcon("Zod"), color: "#2D3748" },
      { name: "Axios", icon: getSimpleIcon("Axios"), color: "#5A29E4" },
      
    ],
  },
];
