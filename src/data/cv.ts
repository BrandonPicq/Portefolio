// src/data/cv.ts
// Données centralisées et typées pour le Curriculum Vitae de Brandon Picq

export interface CVProject {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  period: string;
  tags: string[];
  description: string;
  bullets: string[];
  metrics?: string;
  github?: string;
  demo?: string;
}

export interface CVExperience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export interface CVEducation {
  degree: string;
  institution: string;
  period: string;
  description: string;
  details?: string;
}

export interface CVCertification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface CVSkillCategory {
  category: string;
  skills: string[];
}

export interface CVData {
  identity: {
    fullName: string;
    role: string;
    subrole: string;
    availability: string;
    rhythm: string;
    location: string;
    email: string;
    phone: string;
    phoneDisplay: string;
    github: string;
    githubDisplay: string;
    portfolioUrl: string;
    headline: string;
  };
  skills: CVSkillCategory[];
  projects: CVProject[];
  experiences: CVExperience[];
  education: CVEducation[];
  certifications: CVCertification[];
  languages: { language: string; level: string; score?: string }[];
  interests: string[];
}

export const cvData: CVData = {
  identity: {
    fullName: "Brandon Picq",
    role: "Développeur Web Full Stack",
    subrole: "Recherche d'alternance — Web@cadémie by Epitech",
    availability: "Dès que possible — 05 Novembre 2027",
    rhythm: "6 semaines entreprise / 2 semaines école",
    location: "Paris (75) & Île-de-France • Télétravail bienvenu",
    email: "brandon.picq@gmail.com",
    phone: "+33763580801",
    phoneDisplay: "07 63 58 08 01",
    github: "https://github.com/BrandonPicq",
    githubDisplay: "github.com/BrandonPicq",
    portfolioUrl: "https://brandonpicq.dev",
    headline:
      "Issu d'un premier parcours en Data / IA (Simplon, certifié Azure DP-100, alternance DevOps chez Avanade) et actuellement en formation intensive par projets à la Web@cadémie by Epitech, je développe des applications web full-stack robustes et ergonomiques, alliant rigueur architecturale (React 19, TypeScript, Spring Boot, Express, Docker) et sensibilité produit.",
  },
  skills: [
    {
      category: "Frontend",
      skills: ["React 19", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS v4", "HTML5 / CSS3", "Electron"],
    },
    {
      category: "Backend & API",
      skills: ["Node.js / Express", "Java (Spring Boot, Spring Security)", "PHP (Laravel, Sanctum)", "Python (FastAPI, Flask)", "RESTful APIs", "JWT"],
    },
    {
      category: "Bases de données",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Mongoose / Prisma"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Docker Compose", "CI/CD (GitHub Actions)", "Linux / Bash", "Azure Cloud", "Git"],
    },
    {
      category: "Data & Automatisation",
      skills: ["Python (Pandas, NumPy)", "Machine Learning", "Workflows n8n", "Microsoft PowerApps"],
    },
    {
      category: "Méthodes & Atouts",
      skills: ["Méthodologies Agiles / Scrum", "Architecture modulaire", "Clean Code & Typage strict", "Autonomie"],
    },
  ],
  projects: [
    {
      id: "noticed",
      title: "NOT:ICED",
      subtitle: "Agrégateur d'emploi & presse moderne",
      context: "Projet Web@cadémie Epitech",
      period: "2026",
      tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Express", "PostgreSQL", "Docker"],
      description: "Plateforme complète d'offres d'emploi et d'articles d'analyse avec design éditorial moderne.",
      bullets: [
        "Architecture SPA React 19 + API REST Express 5 entièrement typée en TypeScript.",
        "Moteur de recherche multicritère et filtres dynamiques (contrat, salaire, localisation, stack).",
        "Base de données relationnelle PostgreSQL hébergée sur Supabase avec modélisation stricte.",
        "Conteneurisation intégrale avec Docker Compose pour les environnements de dev et staging.",
      ],
      metrics: "React 19 • Express 5 TS • Supabase",
      github: "https://github.com/BrandonPicq",
    },
    {
      id: "toyuweb",
      title: "ToyuWeb",
      subtitle: "Suite logicielle de synchronisation karaoké",
      context: "Projet Associatif — Epitanime",
      period: "2026 — En cours",
      tags: ["React", "TypeScript", "FastAPI (Python 3.12)", "Electron", "Canvas HTML5", "Web Audio API"],
      description: "Modernisation et refonte totale du système de gestion et timing karaoké de l'association.",
      bullets: [
        "Migration d'une base de code legacy Python/Qt vers une application React + FastAPI embarquée sous Electron.",
        "Éditeur de timings audio syllabe par syllabe avec spectrogramme interactif (Web Audio & Canvas).",
        "Pipeline de conversion et rétrocompatibilité stricte (.tass, .lyr, .tim) et support Karaoke Mugen.",
        "Suite de tests automatisés (Pytest + Typecheck) garantissant l'intégrité octet par octet.",
      ],
      metrics: "Electron • FastAPI • React • Audio Canvas",
      github: "https://github.com/BrandonPicq",
    },
    {
      id: "corelab",
      title: "CoreLab LMS",
      subtitle: "Système de gestion d'apprentissage (MERN)",
      context: "Projet Web@cadémie Epitech",
      period: "2026",
      tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Docker", "Tailwind CSS"],
      description: "Plateforme e-learning complète avec espaces apprenant/formateur et suivi temps réel.",
      bullets: [
        "Architecture Full-Stack MERN avec schémas Mongoose stricts et contrôle d'accès par rôles (RBAC).",
        "Lecteur de leçons interactif multimédia avec calcul dynamique du taux de complétion.",
        "Authentification sécurisée par tokens JWT et environnement isolé sous Docker.",
      ],
      metrics: "Stack MERN • Auth JWT • Suivi temps réel",
      github: "https://github.com/BrandonPicq",
    },
    {
      id: "connectin",
      title: "Connect'In V2",
      subtitle: "Réseau social pro — Migration Spring Boot",
      context: "Projet Epitech",
      period: "2026",
      tags: ["React", "TypeScript", "Spring Boot", "Java 21", "Spring Security", "MySQL", "Docker"],
      description: "Réseau social d'entreprise migré avec succès de Laravel vers Spring Boot.",
      bullets: [
        "Conception de 30+ endpoints REST sécurisés avec Spring Security et JWT Bearer Tokens.",
        "Système de groupes collaboratifs, gestion fine des publications et persistance MySQL.",
      ],
      metrics: "Java 21 • Spring Boot • 30+ Endpoints",
      github: "https://github.com/BrandonPicq",
    },
  ],
  experiences: [
    {
      role: "Analyst DevOps & Développeur (Alternance)",
      company: "Avanade",
      type: "Alternance",
      period: "2020 — 2021",
      location: "Paris",
      bullets: [
        "Identification des besoins métiers et automatisation de processus internes au sein de l'équipe DevOps.",
        "Conception et déploiement de solutions IoT pour l'optimisation des espaces de travail (Python, Bash, Arduino).",
        "Développement complet d'un système de bienvenue automatisé pour les collaborateurs (C#, PowerApps, Azure).",
      ],
      tags: ["C#", "Python", "Bash", "Microsoft Azure", "PowerApps", "Arduino"],
    },
    {
      role: "Électricien (Stages)",
      company: "Helesse",
      type: "Stages",
      period: "2017 — 2019",
      location: "Île-de-France",
      bullets: [
        "Installation et maintenance d'équipements électriques, lecture de schémas techniques et résolution d'incidents.",
        "Développement d'une rigueur absolue dans l'application des normes de sécurité et de conformité.",
      ],
      tags: ["Rigueur technique", "Résolution de problèmes", "Normes"],
    },
  ],
  education: [
    {
      degree: "Titre RNCP Niveau 5 — Développeur Web",
      institution: "Web@cadémie by Epitech (Paris)",
      period: "Nov 2025 — Nov 2027",
      description:
        "Formation intensive d'excellence par projets (24 mois dont 14 mois d'alternance). Spécialisation développement web moderne, architecture logicielle, pratiques DevOps et travail collaboratif.",
    },
    {
      degree: "Titre RNCP Niveau 5 — Développeur en Intelligence Artificielle",
      institution: "Simplon.co",
      period: "2019 — 2021",
      description:
        "Formation par la pratique aux applications de l'IA : traitement de la donnée, modélisation prédictive, développement d'APIs et intégration cloud.",
    },
    {
      degree: "Formation Développeur Web Full-Stack",
      institution: "Scrimba.com",
      period: "2025",
      description: "Parcours intensif sur l'écosystème frontend et backend JavaScript/React moderne.",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified : Azure Data Scientist Associate (DP-100)",
      issuer: "Microsoft",
      date: "Juillet 2021",
    },
  ],
  languages: [
    {
      language: "Français",
      level: "Langue maternelle",
    },
    {
      language: "Anglais",
      level: "Courant / Professionnel",
      score: "TOEIC 875 / 990 (Niveau C1)",
    },
  ],
  interests: [
    "Culture japonaise & animation : Membre actif et bénévole chez Epitanime et Tri Nitro Tiles (organisation d'événements, régie technique)",
    "Veille technologique : Écosystème React 19, architectures serverless, automatisation IA (n8n, LLM)",
  ],
};
