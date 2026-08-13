// src/data/skills.ts
// Données centralisées pour les compétences et les projets

import { Code2, Palette, Server, Database, Rocket, Cpu } from "lucide-react";

export type SkillCategory = "languages" | "frontend" | "backend" | "databases" | "devops" | "ai_tools";

export interface SkillCategoryData {
  icon: typeof Code2;
  label: string;
  skills: string[];
}

export type SkillsData = Record<SkillCategory, SkillCategoryData>;

export const skillsData: SkillsData = {
  languages: {
    icon: Code2,
    label: "Langages",
    skills: ["TypeScript", "JavaScript", "Java", "PHP", "Python", "SQL", "HTML/CSS"],
  },
  frontend: {
    icon: Palette,
    label: "Frontend",
    skills: ["React 19", "Vite", "Tailwind CSS v4", "React Router", "Design System", "Bootstrap"],
  },
  backend: {
    icon: Server,
    label: "Backend",
    skills: ["Express", "Spring Boot", "Node.js", "Laravel", "APIs RESTful", "JWT", "Spring Security"],
  },
  databases: {
    icon: Database,
    label: "Bases de données",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  },
  devops: {
    icon: Rocket,
    label: "DevOps & Cloud",
    skills: ["Docker", "Docker Compose", "Microservices", "GitHub Actions", "Linux / Bash"],
  },
  ai_tools: {
    icon: Cpu,
    label: "IA & Outils",
    skills: ["n8n (Workflows)", "Agents IA / LLM", "Git", "Maven", "Postman"],
  },
};

export const techToProjects: Record<string, string[]> = {
  // Langages
  TypeScript: ["NOT:ICED", "Connect'In V2", "Connect'In", "Portfolio"],
  JavaScript: ["CoreLab LMS", "My Cinema", "CV-Later", "Popeye (Result)"],
  Java: ["Connect'In V2", "Popeye (Worker)"],
  PHP: ["Connect'In", "My Cinema", "CV-Later"],
  Python: ["Popeye (Poll)", "Persona & AI Agents"],
  SQL: ["NOT:ICED", "Connect'In V2", "Connect'In", "My Cinema", "Popeye"],
  "HTML/CSS": ["NOT:ICED", "CoreLab LMS", "My Cinema", "CV-Later", "Portfolio"],

  // Frontend
  "React 19": ["NOT:ICED"],
  React: ["NOT:ICED", "CoreLab LMS", "Connect'In V2", "Connect'In", "Portfolio"],
  Vite: ["NOT:ICED", "CoreLab LMS", "Connect'In V2", "Portfolio"],
  "Tailwind CSS v4": ["NOT:ICED"],
  "Tailwind CSS": ["NOT:ICED", "CoreLab LMS", "Connect'In V2", "Connect'In", "Portfolio"],
  "React Router": ["NOT:ICED", "CoreLab LMS", "Connect'In V2", "Portfolio"],
  "Design System": ["NOT:ICED", "CoreLab LMS", "Portfolio"],
  Bootstrap: ["CV-Later"],

  // Backend
  Express: ["NOT:ICED", "CoreLab LMS", "Popeye (Result)"],
  "Spring Boot": ["Connect'In V2"],
  "Node.js": ["NOT:ICED", "CoreLab LMS", "Persona & AI Agents", "Popeye (Result)"],
  Laravel: ["Connect'In"],
  "APIs RESTful": ["NOT:ICED", "CoreLab LMS", "Connect'In V2", "My Cinema", "Persona & AI Agents"],
  JWT: ["NOT:ICED", "CoreLab LMS", "Connect'In V2"],
  "Spring Security": ["Connect'In V2"],

  // Databases
  PostgreSQL: ["NOT:ICED", "Popeye"],
  MongoDB: ["CoreLab LMS"],
  MySQL: ["Connect'In V2", "Connect'In", "My Cinema"],
  Redis: ["Popeye"],
  Supabase: ["NOT:ICED"],

  // DevOps
  Docker: ["NOT:ICED", "CoreLab LMS", "Connect'In V2", "Connect'In", "Popeye", "My Cinema"],
  "Docker Compose": ["NOT:ICED", "CoreLab LMS", "Connect'In V2", "Popeye"],
  Microservices: ["Popeye", "Persona & AI Agents"],
  "GitHub Actions": ["Portfolio"],
  "Linux / Bash": ["Tous les projets"],

  // AI & Tools
  "n8n (Workflows)": ["Persona & AI Agents"],
  "Agents IA / LLM": ["Persona & AI Agents"],
  Git: ["Tous les projets"],
  Maven: ["Connect'In V2", "Popeye (Worker)"],
  Postman: ["NOT:ICED", "CoreLab LMS", "Connect'In V2", "My Cinema"],
};

export const tabs: SkillCategory[] = ["languages", "frontend", "backend", "databases", "devops", "ai_tools"];

export const projectNameToId: Record<string, string> = {
  "NOT:ICED": "noticed",
  "CoreLab LMS": "corelab",
  "Persona & AI Agents": "persona-ai",
  "Connect'In V2": "connectin-v2",
  "Connect'In": "connectin",
  "My Cinema": "my-cinema",
  "CV-Later": "cv-later",
  Popeye: "popeye",
  "Popeye (Worker)": "popeye",
  "Popeye (Result)": "popeye",
  "Popeye (Poll)": "popeye",
  Portfolio: "noticed",
};
