import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";
import * as SimpleIcons from "simple-icons";
import React from "react";

// Helper function to get SimpleIcon component
const getSimpleIcon = (iconName: string): React.FC<{ className?: string }> | null => {
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
        fill: "currentColor"
      })
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
      { name: "JavaScript", icon: getSimpleIcon("Javascript"), color: "#F7DF1E" },
      { name: "Java", icon: getSimpleIcon("Java"), color: "#007396" },
      { name: "Python", icon: getSimpleIcon("Python"), color: "#3776AB" },
      { name: "C++", icon: getSimpleIcon("Cplusplus"), color: "#00599C" },
      { name: "HTML/CSS", icon: getSimpleIcon("Html5"), color: "#E34F26" },
    ],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React", icon: getSimpleIcon("React"), color: "#E23237" },
      { name: "Angular.js", icon: getSimpleIcon("Angularjs"), color: "#E23237" },
      { name: "Tailwind CSS", icon: getSimpleIcon("Tailwindcss"), color: "#06B6D4" },
    ],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: [
      { name: "Node.js", icon: getSimpleIcon("Nodedotjs"), color: "#339933" },
      { name: "Express.js", icon: getSimpleIcon("Express"), color: "#000000" },
      { name: "REST APIs", icon: getSimpleIcon("Postman"), color: "#FF6C37" },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: getSimpleIcon("Mongodb"), color: "#47A248" },
      { name: "MySQL", icon: getSimpleIcon("Mysql"), color: "#4479A1" },
      { name: "PostgreSQL", icon: getSimpleIcon("Postgresql"), color: "#4169E1" },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: [
      { name: "Git", icon: getSimpleIcon("Git"), color: "#F05032" },
      { name: "Agile/Scrum", icon: getSimpleIcon("Jira"), color: "#0052CC" },
      { name: "Vercel", icon: getSimpleIcon("Vercel"), color: "#000000" },
      { name: "Postman", icon: getSimpleIcon("Postman"), color: "#FF6C37" },
    ],
  },
  {
    name: "Design",
    icon: Palette,
    skills: [
      { name: "Figma", icon: getSimpleIcon("Figma"), color: "#F24E1E" },
      { name: "Adobe AI", icon: getSimpleIcon("Adobeillustrator"), color: "#FF9A00" },
      { name: "UI/UX Design", icon: getSimpleIcon("Framer"), color: "#0055FF" },
      { name: "Wireframing", icon: getSimpleIcon("Sketch"), color: "#F7B500" },
      { name: "Prototyping", icon: getSimpleIcon("Protodotio"), color: "#34E27A" },
    ],
  },
];