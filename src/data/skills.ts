// src/data/skills.ts
// Données centralisées pour les compétences et les projets

import { Code2, Palette, Server, Database, Rocket, Wrench } from "lucide-react";

export type SkillCategory = "languages" | "frontend" | "backend" | "databases" | "devops" | "tools";

export interface SkillCategoryData {
  icon: typeof Code2; // Type d'une icône Lucide
  label: string;
  skills: string[];
}

export type SkillsData = Record<SkillCategory, SkillCategoryData>;

// Données des catégories de compétences
export const skillsData: SkillsData = {
  languages: {
    icon: Code2,
    label: "Langages",
    skills: ["JavaScript", "TypeScript", "PHP", "Java", "Python", "Ruby", "HTML/CSS", "SQL"]
  },
  frontend: {
    icon: Palette,
    label: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "React Router", "Bootstrap", "Jekyll", "Axios"]
  },
  backend: {
    icon: Server,
    label: "Backend",
    skills: ["Laravel", "Spring Boot", "Node.js", "Express", "Flask", "JWT", "Spring Security"]
  },
  databases: {
    icon: Database,
    label: "Databases",
    skills: ["MySQL", "PostgreSQL", "Redis"]
  },
  devops: {
    icon: Rocket,
    label: "DevOps",
    skills: ["Docker", "Docker Compose", "Nginx", "GitHub Actions"]
  },
  tools: {
    icon: Wrench,
    label: "Tools",
    skills: ["Maven", "Composer", "npm", "Git"]
  }
};

// Mapping des technologies vers les projets qui les utilisent
// Pour ajouter une nouvelle technologie, ajoutez simplement une entrée ici
export const techToProjects: Record<string, string[]> = {
  // Langages
  "JavaScript": ["My Cinema", "CV-Later", "Portfolio (HTML/CSS)"],
  "TypeScript": ["Connect'In V2", "Connect'In", "Portfolio Actuel"],
  "PHP": ["Connect'In", "My Cinema", "CV-Later"],
  "Java": ["Connect'In V2", "Popeye (worker service)"],
  "Python": ["Popeye (poll service)"],
  "Ruby": ["Portfolio (Jekyll version)"],
  "HTML/CSS": ["My Cinema", "CV-Later", "Portfolio (versions HTML/CSS & Tailwind)"],
  "SQL": ["Connect'In V2", "Connect'In", "My Cinema", "Popeye"],
  
  // Frontend
  "React": ["Connect'In V2", "Connect'In", "Portfolio Actuel"],
  "Vite": ["Connect'In V2", "Connect'In", "Portfolio Actuel"],
  "Tailwind CSS": ["Connect'In V2", "Connect'In", "Portfolio (multiple versions)"],
  "React Router": ["Connect'In V2", "Connect'In", "Portfolio Actuel"],
  "Bootstrap": ["CV-Later"],
  "Jekyll": ["Portfolio (Jekyll version)"],
  "Axios": ["Connect'In V2", "Connect'In"],
  
  // Backend
  "Laravel": ["Connect'In"],
  "Spring Boot": ["Connect'In V2"],
  "Node.js": ["Popeye (result service)"],
  "Express": ["Popeye (result service)"],
  "Flask": ["Popeye (poll service)"],
  "JWT": ["Connect'In V2"],
  "Spring Security": ["Connect'In V2"],
  
  // Databases
  "MySQL": ["Connect'In V2", "Connect'In", "My Cinema"],
  "PostgreSQL": ["Popeye"],
  "Redis": ["Popeye"],
  
  // DevOps
  "Docker": ["Connect'In V2", "Connect'In", "Popeye"],
  "Docker Compose": ["Connect'In V2", "Connect'In", "Popeye"],
  "Nginx": ["Connect'In"],
  "GitHub Actions": ["Portfolio Actuel", "Projets DevOps"],
  
  // Tools
  "Maven": ["Connect'In V2", "Popeye (worker service)"],
  "Composer": ["Connect'In", "CV-Later"],
  "npm": ["Connect'In V2", "Connect'In", "Popeye", "Portfolio Actuel"],
  "Git": ["Tous les projets"]
};

export const tabs: SkillCategory[] = ["languages", "frontend", "backend", "databases", "devops", "tools"];
