import { Award, Code, Book, Zap } from "lucide-react";

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl?: string;
  credentialUrl?: string;
  credentialId?: string;
  category: "technical" | "professional" | "academic";
  icon: any;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy",
    date: "Apr 2025",
    description:
      "Full-stack development course covering HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React.",
    imageUrl: "/images/bootcamp.png",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-ea8323d9-1deb-4909-8520-2f64404a59bf/",
    credentialId: "UC-WEBCAMP", // update needed
    category: "technical",
    icon: Code,
  },
  {
    id: 2,
    title: "Matstering Data Structures and Algorithm",
    issuer: "Udemy",
    date: "Jun 2025",
    description:
      "Comprehensive course on fundamental data structures and algorithms with implementation in C/C++",
    imageUrl: "/images/master_dsa.png",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-240b1f78-a7c8-45e7-a505-f57ede01f90e/",
    credentialId: "UC-f1820", //update needed
    category: "technical",
    icon: Code,
  },
  {
  id: 3,
  title: "Developer Program Virtual Experience",
  issuer: "Accenture (Forage)",
  date: "May 2025", // update if needed based on your completion date
  description:
    "Completed Accenture's Developer Virtual Experience Program, gaining practical skills in project planning, application development, and professional communication.",
  imageUrl: "/images/skyscanner.png", // replace with your actual local image path
  credentialUrl:
    "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/p3xGFkpdot5H8NBih_skoQmxqhtgWmKv2pm_PawrcwWAwb3yAoQ8E_1746287301081_completion_certificate.pdf",
  credentialId: "skoQmxqhtgWmKv2pm",
  category: "professional",
  icon: Zap,
}
  // {
  //   id: 4,
  //   title: "Generative AI with Large Language Models",
  //   issuer: "Coursera",
  //   date: "April 2024",
  //   description:
  //     "Gain foundational knowledge, practical skills, and a functional understanding of how generative AI works",
  //   imageUrl: "/images/aws.png",
  //   credentialUrl:
  //     "https://www.coursera.org/account/accomplishments/verify/B9CDKEWCE84F",
  //   credentialId: "B9CDKEWCE84F",
  //   category: "academic",
  //   icon: Book,
  // },
];
