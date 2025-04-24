
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
    title: "Kissan Bazaar - Online market place for farmers",
    description: " A farmer-buyer marketplace with 2-way posting (farmers listing crops, buyers posting requirements) and integrated dashboards. ",
    image: "/imgs/kisaan.png",
    tags: ["Raect", "Express", "Node.Js", "MongoDB","JWT"],
    links: {
      github: "https://github.com/eshaalal/Kisaan_Bazar",
      live: "https://kisaan-bazar.vercel.app",
    },
  },
  {
    id: 2,
    title: "Summer Safe - Luggage Storage Booking",
    description: "A web platform with 24/7 accessibility, enabling students to book luggage storage facilities and locals to rent out extra space. ",
    image: "/imgs/summer.png",
    tags: ["HTML","CSS", "Node.js", "Express", "MongoDB","HandleBars","BootStrap"],
    links: {
      github: "https://github.com/eshaalal/summersafe-LuggageBookingWebsite",
      live: "https://summersafe.vercel.app/",
    },
  },
  {
    id: 3,
    title: "NotesBuddy - Note taking website",
    description: "NotedBuddy is a web-based note-making application designed to help users create, manage, and organize their notes efficiently.",
    image: "/imgs/notes.png",
    tags: ["React", "Node.Js", "MongoDB", "Express","Authentication"],
    links: {
      github: "https://github.com/eshaalal/notes_app",
      live: "https://notesbuddy.vercel.app/"
    },
  },
  {
    id: 4,
    title: "StudyNotion",
    description: "A seamless and interactive learning experience for students, and a platform for instructors to showcase their expertise and connect with learners across the globe.",
    image: "/imgs/Ed.png",
    tags: ["React", "Tailwind CSS", "Redux", "MongoDB"],
    links: {
      github: "https://github.com/eshaalal/codeplay?tab=readme-ov-file",
      live: "https://codeplay-edtech-project.vercel.app/",
    },
  },
];
