// src/data/projects.ts
// Données centralisées pour les projets du portfolio

export type ProjectCategory = "fullstack" | "frontend" | "backend" | "devops";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];
  highlights: string[];
  architecture?: string;
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
    category: "backend",
    tags: ["React", "Spring Boot", "TypeScript", "MySQL", "Docker", "JWT", "Tailwind CSS"],
    highlights: [
      "Migration backend Laravel → Spring Boot",
      "Auth JWT avec Spring Security",
      "30+ endpoints REST",
      "Système d'équipes collaboratif",
    ],
    longDescription:
      "Évolution majeure de Connect'In avec migration complète du backend de Laravel/PHP vers Spring Boot/Java. Le frontend React reste identique, démontrant la séparation propre entre front et back. L'authentification passe par JWT Bearer tokens (expiration 24h) avec Spring Security. Ajout d'un système de teams : création d'équipes, invitation de membres et posts collaboratifs. L'API expose 30+ endpoints pour l'auth, les users, posts, commentaires et teams.",
    architecture: "React + Vite (Frontend) → Spring Boot 4 + JWT (API REST) → MySQL 8.0 | Docker Compose",
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
    longDescription:
      "Première version du réseau social type LinkedIn. Frontend SPA React avec Vite et Tailwind CSS, backend API REST Laravel 8 avec PHP 8.4. Fonctionnalités complètes : inscription, authentification, création/édition/suppression de posts avec upload d'images, système de likes, commentaires avec modération, gestion d'avatars et profils utilisateurs. Entièrement conteneurisé avec Docker Compose.",
    architecture: "React + Vite + Tailwind (Frontend) → Laravel 8 + PHP 8.4 (API) → MySQL 8.0 | Docker Compose",
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
    longDescription:
      "Application complète de gestion de cinéma avec une API RESTful et un frontend SPA. Permet la gestion CRUD de films, salles et séances avec une logique métier avancée : détection automatique des conflits de planification entre séances, suppression douce (soft delete) avec cascade, et validation des données côté serveur. L'API expose 15+ endpoints RESTful bien structurés.",
    architecture: "HTML/CSS/JS (Frontend SPA) → PHP 8.5 + PDO (API REST) → MySQL | Docker",
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
    longDescription:
      "Application web de création de CV professionnel. L'utilisateur remplit un formulaire complet (informations personnelles, expérience, formation, compétences) avec prévisualisation en temps réel du rendu final. Possibilité d'ajouter, modifier et supprimer des entrées dynamiquement. Export en PDF haute qualité grâce à la librairie Dompdf. Interface responsive construite avec Bootstrap 5.",
    architecture: "PHP 8.0 + Dompdf (Backend) → Bootstrap 5 + JavaScript (Frontend)",
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
    longDescription:
      "Application de sondage distribuée en architecture microservices, chaque service étant développé dans un langage différent. Le service Poll (Python/Flask) gère les votes via une interface web, Redis sert de message queue, le Worker (Java/Maven) traite les votes et les persiste dans PostgreSQL, et le service Result (Node.js/Express) affiche les résultats en temps réel. L'ensemble est orchestré avec Docker Compose.",
    architecture: "Poll (Flask/Python) → Redis (Queue) → Worker (Java/Maven) → PostgreSQL ← Result (Node.js/Express)",
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
    longDescription:
      "Version précédente du portfolio construite avec le générateur de sites statiques Jekyll et Ruby. Utilise le thème Minima avec des pages Markdown pour les sections About, Contact et Projects. Optimisé pour le SEO avec Jekyll-SEO-tag. Ce projet est la base qui a été entièrement refactorée vers l'architecture React + Vite + TypeScript actuelle.",
    architecture: "Jekyll 4.3 + Ruby → HTML statique | GitHub Pages",
  },
  {
    id: "portfolio-html",
    title: "Portfolio HTML/CSS & Tailwind",
    subtitle: "Exercice frontend — Deux versions",
    description: "Projet d'apprentissage frontend avec deux versions : HTML/CSS pur et Tailwind CSS. Déployé sur GitHub Pages.",
    category: "frontend",
    tags: ["HTML/CSS", "Tailwind CSS", "JavaScript"],
    highlights: ["Version HTML/CSS pure", "Version Tailwind CSS", "Déployé sur GitHub Pages", "Responsive design"],
    longDescription:
      "Exercice d'apprentissage frontend réalisé en deux versions parallèles : une version HTML/CSS/JS pure et une version utilisant Tailwind CSS. Les deux versions reproduisent le même design pour comparer les approches. Déployé sur GitHub Pages pour démontrer le workflow de déploiement statique.",
    architecture: "HTML/CSS/JS + Tailwind CSS | GitHub Pages",
    demo: "https://brandonpicq.github.io/html_css/",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
