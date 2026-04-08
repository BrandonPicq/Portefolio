// src/data/projects.ts
// Données centralisées pour les projets du portfolio

export type ProjectCategory = "fullstack" | "frontend" | "backend" | "devops";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  highlights: string[];
  github?: string;
  demo?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  fullstack: "Full-Stack",
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
};

export const projects: Project[] = [
  {
    id: "connectin-v2",
    title: "Connect'In V2",
    subtitle: "Réseau social — Migration Spring Boot",
    description:
      "Réseau social inspiré de LinkedIn, migré de Laravel vers Spring Boot. Authentification JWT, gestion de posts/commentaires/likes, système d'équipes et recherche d'utilisateurs.",
    category: "fullstack",
    tags: ["React", "Spring Boot", "TypeScript", "MySQL", "Docker", "JWT", "Tailwind CSS"],
    highlights: [
      "Migration backend Laravel → Spring Boot",
      "Auth JWT avec Spring Security",
      "30+ endpoints REST",
      "Système d'équipes collaboratif",
    ],
  },
  {
    id: "connectin",
    title: "Connect'In",
    subtitle: "Réseau social — Version Laravel",
    description:
      "Première version du réseau social avec React + Laravel. Inscription, posts avec images, likes, commentaires et gestion de profils.",
    category: "fullstack",
    tags: ["React", "Laravel", "PHP", "MySQL", "Docker", "Tailwind CSS", "Vite"],
    highlights: [
      "SPA React avec API Laravel",
      "Upload d'images et avatars",
      "CRUD complet posts/commentaires",
      "Conteneurisé avec Docker Compose",
    ],
  },
  {
    id: "my-cinema",
    title: "My Cinema",
    subtitle: "Gestion de cinéma — API REST + SPA",
    description:
      "Application de gestion de cinéma avec API RESTful. CRUD films, salles et séances avec détection de conflits de planification et suppression douce en cascade.",
    category: "fullstack",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Docker"],
    highlights: [
      "15+ endpoints RESTful",
      "Détection conflits de planification",
      "Soft delete avec cascade",
      "Validation et gestion d'erreurs",
    ],
  },
  {
    id: "cv-later",
    title: "CV-Later",
    subtitle: "Générateur de CV — Export PDF",
    description:
      "Application web de création de CV avec prévisualisation en temps réel et export PDF. Formulaire complet (infos, expérience, formation, compétences).",
    category: "frontend",
    tags: ["PHP", "Bootstrap", "JavaScript", "Dompdf"],
    highlights: [
      "Prévisualisation live du CV",
      "Export PDF avec Dompdf",
      "Formulaire dynamique add/edit/delete",
      "Design responsive Bootstrap",
    ],
  },
  {
    id: "popeye",
    title: "Popeye",
    subtitle: "Système de vote — Architecture microservices",
    description:
      "Application de sondage distribuée en microservices : poll (Flask), result (Node.js) et worker (Java). Orchestration Docker Compose avec Redis et PostgreSQL.",
    category: "devops",
    tags: ["Docker", "Python", "Node.js", "Java", "Redis", "PostgreSQL", "Docker Compose"],
    highlights: ["Architecture 3-tier microservices", "3 langages différents", "Message queue Redis", "Orchestration Docker Compose"],
  },
  {
    id: "portfolio-jekyll",
    title: "Portfolio Jekyll",
    subtitle: "Site statique — Avant le refactor",
    description:
      "Version précédente du portfolio, construite avec Jekyll. Ce projet est la base qui a été refactorée en React + Vite + TypeScript.",
    category: "frontend",
    tags: ["Jekyll", "Ruby", "HTML/CSS", "Markdown"],
    highlights: ["Génération statique Jekyll", "SEO avec Jekyll-SEO-tag", "Templates Liquid", "Refactoré → Portfolio actuel"],
  },
  {
    id: "portfolio-html",
    title: "Portfolio HTML/CSS & Tailwind",
    subtitle: "Exercice frontend — Deux versions",
    description: "Projet d'apprentissage frontend avec deux versions : HTML/CSS pur et Tailwind CSS. Déployé sur GitHub Pages.",
    category: "frontend",
    tags: ["HTML/CSS", "Tailwind CSS", "JavaScript"],
    highlights: ["Version HTML/CSS pure", "Version Tailwind CSS", "Déployé sur GitHub Pages", "Responsive design"],
    demo: "https://brandonpicq.github.io/html_css/",
  },
];
