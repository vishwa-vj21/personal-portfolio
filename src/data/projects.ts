export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Threadly – Reddit-Inspired Community Platform",
    description:
      "A full-stack social discussion platform enabling users to create posts with rich content, comment with nested replies, interact within communities and advanced caching for a seamless user experience.",
    image: "/imgs/threadly.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Upstash Redis",
      "NextAuth",
    ],
    links: {
      github: "https://github.com/vishwa-vj21/Threadly",
      live: "https://threadly-one.vercel.app/", //add live URL if hosted
    },
  },
  {
    id: 2,
    title: "Lancify – Freelancing Website",
    description:
      "A full-featured web platform that connects freelancers with clients across various service domains with intuitive UX and real-time interaction.",
    image: "/imgs/lancify.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"],
    links: {
      github: "https://github.com/vishwa-vj21/Lancify",
      live: "https://lancify.vercel.app", // replace with actual live URL if deployed
    },
  },
  {
    id: 3,
    title: "CodexScan – AI-Powered Code Reviewer",
    description:
      "A code review tool using Node.js/Express and Gemini LLM API to provide real-time structured feedback on code quality, security, and performance improvements.",
    image: "/imgs/codexscan.png",
    tags: ["Node.js", "Express.js", "API", "LLM", "AI"],
    links: {
      github: "https://github.com/vishwa-vj21/CodexScan",
      live: "", // add live URL if hosted
    },
  },
  {
    id: 4,
    title: "Memora – AI Markdown Notes SaaS",
    description:
      "A full-stack AI-powered markdown notes SaaS featuring intelligent PDF viewing, streaming AI responses, and infinite memory via LangChain. Built with a modern TypeScript-first stack including tRPC, Stripe, Kinde Auth, Prisma, and Pinecone. Clean UI, real-time UX, and complete SaaS capabilities from auth to billing.",
    image: "/imgs/memora.png",
    tags: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "LangChain",
      "Stripe",
      "Kinde",
      "Pinecone",
      "Prisma",
      "Tailwind CSS",
      "shadcn-ui",
    ],
    links: {
      github: "https://github.com/vishwa-vj21/Memora",
      live: "",
    },
  },
  {
    id: 5,
    title: "ResumeRadar – AI-Powered Resume Analyzer",
    description:
      "An NLP-based resume screening tool that extracts, scores, and recommends skills based on job relevance using PyResparser, spaCy, and LLM insights.",
    image: "/imgs/resumeradar.png",
    tags: ["Python", "NLP", "Streamlit", "spaCy", "AI"],
    links: {
      github: "https://github.com/vishwa-vj21/ResumeRadar",
      live: "", // add live URL if hosted
    },
  },
];
