import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string; // Added imageUrl property
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "162th Place - Girl Script Summer of Code",
    type: "competition",
    year: "2024",
    description: "Secured 162th place among 28K+ in the open- event.",
    icon: Trophy,
    imageUrl: "/images/open.png", // Replace with your actual image path
  },
  {
    id: 2,
    title: "Top 5 percentile - Adobe GenSolve Hackathon",
    type: "competition", 
    year: "2024",
    description: "Placed among the top 5 percentile in Adobe GenSolve Hackathon GFG 2024",
    icon: Trophy,
    imageUrl: "/images/gen.png", // Replace with your actual image path
  },
  {
    id: 3,
    title: "Hacktoberfest 2024",
    type: "competition",
    year: "2024",
    description: "Completed hacktoberfest 2024 by achieving level 5 badges.",
    icon: Star,
    imageUrl: "/images/hack.png", // Replace with your actual image path
  },
  {
    id: 4,
    title: "Dean's List",
    type: "academic",
    year: "2023",
    description: "Recognized for academic excellence with placement on the Dean's List.",
    icon: Star,
    imageUrl: "/images/dean.png", // Replace with your actual image path
  }
];