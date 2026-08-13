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
  endpoints?: string[];
  metrics?: string[];
  featured?: boolean;
  demoType?: "noticed" | "corelab" | "persona-ai" | "connectin" | "popeye" | "cv-later" | "my-cinema";
}

export const categoryLabels: Record<ProjectCategory, string> = {
  fullstack: "Full-Stack",
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
};

export const projects: Project[] = [
  {
    id: "noticed",
    title: "NOT:ICED",
    subtitle: "Agrégateur d'emploi au format journal moderne",
    description:
      "Agrégateur d'offres d'emploi au style de presse imprimée (« La petite annonce, version 2026 »). Moteur de recherche d'annonces, volet éditorial, filtres dynamiques et design papier/encre avec accent vermillon.",
    category: "fullstack",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Express", "PostgreSQL", "Supabase", "Docker"],
    highlights: [
      "Design System éditorial unique (Newsreader serif, papier crème, accent vermillon)",
      "Moteur de recherche et filtres multicritères",
      "Volet éditorial d'articles d'analyse du marché de l'emploi",
      "Stack ultra-récente : React 19, Tailwind CSS v4 & Express TypeScript",
    ],
    longDescription:
      "NOT:ICED réinvente la recherche d'emploi sous la forme d'un journal moderne. L'interface reprend tous les codes graphiques de la presse traditionnelle : typographie sérif élégante, découpage en colonnes, filets typographiques et teintes papier crème relevées d'un accent vermillon vif. L'application intègre un moteur de recherche performant, des fiches de postes détaillées, une section éditoriale avec des articles de fond, et une API REST Express connectée à PostgreSQL / Supabase.",
    architecture: "React 19 + Tailwind CSS v4 (Client SPA) → Express 5 + TypeScript (API REST) → PostgreSQL / Supabase | Docker Compose",
    endpoints: [
      "GET /api/jobs — Liste et recherche d'offres (filtres contrat, localisation, stack)",
      "GET /api/jobs/:id — Fiche de poste complète avec compétences requises",
      "GET /api/articles — Flux des articles éditoriaux",
      "GET /health — Vérification de l'état du serveur et de la base",
    ],
    metrics: ["100% Typé TypeScript", "React 19 & Tailwind v4", "Docker Compose Ready", "Design Kiosque Unique"],
    featured: true,
    demoType: "noticed",
  },
  {
    id: "corelab",
    title: "CoreLab LMS",
    subtitle: "Plateforme e-learning & gestion d'apprentissage",
    description:
      "Système de gestion d'apprentissage (LMS) complet en stack MERN. Espaces apprenant & formateur, lecteur de leçons interactif, suivi de progression temps réel et gestion de cours modulaires.",
    category: "fullstack",
    tags: ["MongoDB", "Express", "React", "Node.js", "Docker", "JWT", "Tailwind CSS"],
    highlights: [
      "Architecture MERN robuste avec validation des schémas Mongoose",
      "Lecteur de leçons interactif avec suivi dynamique du statut de complétion",
      "Authentification JWT sécurisée et contrôle d'accès par rôles (Admin / Student)",
      "Environnement conteneurisé avec scripts de seed de données automatisés",
    ],
    longDescription:
      "CoreLab LMS est une plateforme e-learning moderne pensée pour les développeurs et étudiants en informatique. Elle permet de naviguer à travers des parcours pédagogiques structurés en chapitres et leçons multimédias. Le tableau de bord calcule en temps réel le pourcentage d'avancement de chaque élève, valide les étapes franchies et propose des contenus riches (markdown, extraits de code, vidéos intégrées).",
    architecture: "React + Vite + Tailwind (Frontend) → Node.js + Express (API REST) → MongoDB 7.0 (NoSQL) | Docker Compose",
    endpoints: [
      "POST /api/auth/login — Authentification JWT (rôles admin & student)",
      "GET /api/courses — Catalogue des parcours de formation",
      "GET /api/courses/:id/lessons — Sommaire et contenu des leçons",
      "POST /api/progress — Mise à jour de la progression d'un apprenant",
    ],
    metrics: ["Stack MERN complète", "Suivi temps réel", "Seed de démo inclus", "Architecture modulaire"],
    featured: true,
    demoType: "corelab",
  },
  {
    id: "persona-ai",
    title: "Persona & AI Agents",
    subtitle: "Agrégateur d'actualités IA & Pipeline d'agents autonomes",
    description:
      "Pipeline d'automatisation multi-agents : collecte d'actualités technologiques, classification sémantique de dépêches, synthèse par personas et assistant conversationnel spécialisé.",
    category: "backend",
    tags: ["n8n", "LLM", "Python", "Node.js", "Webhooks", "REST API", "Docker"],
    highlights: [
      "Orchestration de workflows avec n8n et webhooks asynchrones",
      "Classification automatique et génération de résumés par LLM",
      "Module Chatbot Core avec mémoire contextuelle et personas",
      "Traitement de flux de données RSS et APIs externes",
    ],
    longDescription:
      "Ce projet explore l'automatisation avancée et les agents conversationnels autonomes. À l'aide de workflows n8n et de scripts Python/Node.js, le système surveille les flux technologiques, extrait les informations clés, applique des analyses de sentiment et génère des synthèses ciblées selon le persona de l'utilisateur (développeur, veilleur technologique, décideur). Une interface de test permet d'interagir en direct avec le moteur d'inférence.",
    architecture: "Flux RSS / Sources Web → Workflows n8n + Webhooks → LLM Agents (Synthèse & Classification) → API REST & Storage",
    endpoints: [
      "POST /webhook/news-ingest — Ingestion automatique des dépêches d'actu",
      "POST /api/agent/chat — Endpoint conversationnel avec persona sélectionné",
      "GET /api/insights/daily — Digest quotidien des actus synthétisées",
    ],
    metrics: ["Pipelines automatisés n8n", "Traitement LLM multi-agents", "Classification sémantique", "Zéro latence webhook"],
    featured: true,
    demoType: "persona-ai",
  },
  {
    id: "connectin-v2",
    title: "Connect'In V2",
    subtitle: "Réseau social — Migration Spring Boot & Java",
    description:
      "Réseau social professionnel inspiré de LinkedIn, migré de Laravel vers Spring Boot. Authentification JWT avec Spring Security, 30+ endpoints REST, gestion d'équipes et posts collaboratifs.",
    category: "backend",
    tags: ["React", "Spring Boot", "TypeScript", "MySQL", "Docker", "JWT", "Tailwind CSS"],
    highlights: [
      "Migration backend complète Laravel → Spring Boot 4",
      "Authentification JWT sécurisée avec Spring Security",
      "30+ endpoints REST documentés",
      "Système d'équipes et de posts collaboratifs",
    ],
    longDescription:
      "Évolution majeure de Connect'In avec migration complète du backend vers Spring Boot et Java 21. Le frontend React reste découplé, validant l'architecture en API REST propre. L'authentification passe par JWT Bearer tokens avec gestion des permissions. Ajout d'un système de teams collaboratives avec invitations et rôles.",
    architecture: "React + Vite + TS (Frontend) → Spring Boot 4 + Spring Security + JWT (API) → MySQL 8.0 | Docker Compose",
    endpoints: [
      "POST /api/auth/token — Génération du token JWT",
      "GET /api/posts — Feed social avec pagination et likes",
      "POST /api/teams — Création d'équipe collaborative",
      "GET /api/users/me — Profil utilisateur connecté",
    ],
    metrics: ["30+ Endpoints REST", "Spring Security 6", "Docker Compose", "JWT Bearer Auth"],
    featured: true,
    demoType: "connectin",
  },
  {
    id: "connectin",
    title: "Connect'In",
    subtitle: "Réseau social — Version Laravel",
    description:
      "Première version du réseau social avec React + Laravel. Inscription, posts avec images, système de likes, commentaires et gestion complète de profils.",
    category: "fullstack",
    tags: ["React", "Laravel", "PHP", "MySQL", "Docker", "Tailwind CSS", "Vite"],
    highlights: [
      "SPA React avec API REST Laravel 8",
      "Upload d'images et gestion d'avatars",
      "CRUD complet posts / commentaires",
      "Conteneurisé avec Docker Compose",
    ],
    longDescription:
      "Première version du réseau social développé avec Laravel 8 et PHP 8.4 pour le backend, et une SPA React + Tailwind CSS pour le frontend. Gestion complète des fonctionnalités sociales indispensables : profils, publications, commentaires et likes.",
    architecture: "React + Vite + Tailwind (Frontend) → Laravel 8 + PHP 8.4 (API) → MySQL 8.0 | Docker Compose",
    demoType: "connectin",
  },
  {
    id: "popeye",
    title: "Popeye",
    subtitle: "Système de vote — Microservices polyglotte",
    description:
      "Architecture distribuée en 3 tiers : interface de vote (Flask/Python), file de messages (Redis), worker de persistance (Java/Maven) et affichage temps réel (Node.js/Express + PostgreSQL).",
    category: "devops",
    tags: ["Docker", "Python", "Node.js", "Java", "Redis", "PostgreSQL", "Docker Compose"],
    highlights: [
      "Architecture distribuée 3-tier polyglotte (Python, Java, Node.js)",
      "File de messages asynchrone Redis",
      "Persistance relationnelle PostgreSQL",
      "Orchestration multi-conteneurs Docker Compose",
    ],
    longDescription:
      "Projet d'architecture microservices illustrant la communication asynchrone entre services développés dans 3 langages distincts. Le service Poll (Flask) reçoit les votes, les envoie dans une file Redis, le service Worker (Java) consomme la file pour enregistrer en base PostgreSQL, et le service Result (Node.js) calcule et affiche les statistiques en temps réel.",
    architecture: "Poll (Flask/Python) → Redis (Queue) → Worker (Java/Maven) → PostgreSQL ← Result (Node.js/Express)",
    metrics: ["3 Langages (Python, Java, Node)", "Queue Redis", "Docker Compose", "Temps réel"],
    demoType: "popeye",
  },
  {
    id: "my-cinema",
    title: "My Cinema",
    subtitle: "Gestion de cinéma — API REST + SPA",
    description:
      "Application de gestion de cinéma avec API RESTful. CRUD films, salles et séances avec détection intelligente de conflits de créneaux et suppression douce en cascade.",
    category: "fullstack",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Docker"],
    highlights: [
      "15+ endpoints RESTful structurés",
      "Détection automatique de conflits de planning",
      "Gestion de suppression douce (soft delete) en cascade",
      "Validation stricte des requêtes côté serveur",
    ],
    longDescription:
      "Application complète de gestion d'un complexe de cinéma : programmation des séances dans différentes salles avec calcul automatique des créneaux horaires pour empêcher les chevauchements, catalogue de films et gestion des places.",
    architecture: "HTML/CSS/JS (Frontend SPA) → PHP 8.5 + PDO (API REST) → MySQL | Docker",
    demoType: "my-cinema",
  },
  {
    id: "cv-later",
    title: "CV-Later",
    subtitle: "Générateur de CV — Export PDF en direct",
    description:
      "Générateur de curriculum vitae professionnel avec formulaire dynamique (expériences, formations, compétences), prévisualisation en temps réel et export PDF haute fidélité.",
    category: "frontend",
    tags: ["PHP", "Bootstrap", "JavaScript", "Dompdf"],
    highlights: [
      "Prévisualisation instantanée des modifications",
      "Export PDF vectoriel avec Dompdf",
      "Formulaire dynamique d'ajouts de sections",
      "Mise en page responsive Bootstrap 5",
    ],
    longDescription:
      "Outil de génération de CV clé-en-main permettant de renseigner son profil, ses compétences et expériences professionnelles, avec un rendu immédiat et la possibilité de générer un PDF prêt pour l'envoi aux recruteurs.",
    architecture: "PHP 8.0 + Dompdf (Backend) → Bootstrap 5 + JavaScript (Frontend)",
    demoType: "cv-later",
  },
  {
    id: "portfolio-jekyll",
    title: "Portfolio Jekyll",
    subtitle: "Site statique — Version historique",
    description:
      "Première itération du portfolio personnel sous Jekyll et Ruby avec thème Minima et optimisation SEO, servant de point de départ avant la refonte React.",
    category: "frontend",
    tags: ["Jekyll", "Ruby", "HTML/CSS", "Markdown"],
    highlights: ["Génération statique Jekyll", "Optimisation SEO Jekyll-SEO-tag", "Templates Liquid"],
    architecture: "Jekyll 4.3 + Ruby → HTML statique | GitHub Pages",
  },
  {
    id: "portfolio-html",
    title: "Portfolio HTML/CSS & Tailwind",
    subtitle: "Exercice frontend comparatif",
    description:
      "Comparaison de deux implémentations du même portfolio : l'une en HTML/CSS pur pour maîtriser les bases du responsive, l'autre avec Tailwind CSS.",
    category: "frontend",
    tags: ["HTML/CSS", "Tailwind CSS", "JavaScript"],
    highlights: ["Version CSS pure vs Tailwind", "Déploiement GitHub Pages", "Responsive design"],
    architecture: "HTML/CSS/JS + Tailwind CSS | GitHub Pages",
    demo: "https://brandonpicq.github.io/html_css/",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
