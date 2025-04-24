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
    title: "Full Stack Web Development",
    issuer: "CipherSchools",
    date: "July 2024",
    description: "Comprehensive course on modern full-stack web development covering React, Node.js, Express, and MongoDB.",
    imageUrl: "/images/cipher.png",
    credentialUrl: "https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65d66",
    credentialId: ":CS2024-11314",
    category: "technical",
    icon: Code
  },
  {
    id: 2,
    title: "Matstering Data Structures and Algorithm",
    issuer: "Udemy",
    date: "Nov 2023",
    description: "Comprehensive course on fundamental data structures and algorithms with implementation in C/C++",
    imageUrl: "/images/udemy.png",
    credentialUrl: "https://www.udemy.com/certificate/UC-f1820cae-5841-4654-bd38-3627171749fe/",
    credentialId: "UC-f1820",
    category: "technical",
    icon: Code
  },
  {
    id: 3,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "23-Oct-2024 ",
    description: "Postman Student Experts are proficient in the essential skills required for consuming APIs in Postman and applications.",
    imageUrl: "/images/postman2.png",
    credentialUrl: "https://badgr.com/public/assertions/PF25_sA-RdSw1m64PqkTmg?identity__email=eshalal888@gmail.com",
    credentialId: "PF25_sA",
    category: "professional",
    icon: Zap
  },
  {
    id: 4,
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    date: "April 2024",
    description: "Gain foundational knowledge, practical skills, and a functional understanding of how generative AI works",
    imageUrl: "/images/aws.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/B9CDKEWCE84F",
    credentialId: "B9CDKEWCE84F",
    category: "academic",
    icon: Book
  },
  
];