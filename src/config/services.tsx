import React from "react";
import { StaticImageData } from "next/image";

export type Service = {
  name: string;
  skills: string[];
};

export const Services: Service[] = [
  {
    name: "FRAMEWORKS",
    skills: [
      "HTML",
      "CSS",
      "Typescript",
      "Javascript",
      "React",
      "NextJS",
      "TailwindCSS",
      "SQL",
      "Supabase",
      "Sanity CMS",
      "Prisma",
      "NextAuth",
    ],
  },
  {
    name: "HARD SKILLS",
    skills: [
      "Conversion Rate Optimization",
      "Landing Page Optimization",
      "Web Performance Optimization",
      "UI / UX Design",
      "Web Design",
      "Web Development",
      "SEO",
    ],
  },
];
