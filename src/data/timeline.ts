// src/data/timeline.ts
// Données centralisées pour le parcours (formation, expériences, certifications)

export type TimelineType = "education" | "work" | "certification";

export interface TimelineEntry {
  type: TimelineType;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags: string[];
}

export const timeline: TimelineEntry[] = [
  {
    type: "education",
    title: "Web@cadémie by Epitech",
    subtitle: "Formation Développeur Web — 24 mois",
    date: "Sep 2025 — Nov 2027",
    description:
      "Formation intensive par projets au métier de développeur web. Pédagogie unique basée sur l'échange, le travail collaboratif et la proximité avec le monde de l'entreprise. Inclut 14 mois d'alternance.",
    tags: ["React", "TypeScript", "PHP", "Laravel", "MySQL"],
  },
  {
    type: "certification",
    title: "Certification Microsoft DP-100",
    subtitle: "Azure Data Scientist Associate",
    date: "Jul 2021",
    description:
      "Certification validant l'expertise en science des données et Machine Learning sur Azure : entraînement et déploiement de modèles, pipelines ML, et optimisation de modèles de langage pour les applications d'IA.",
    tags: ["Azure ML", "Python", "MLflow", "Machine Learning"],
  },
  {
    type: "work",
    title: "Avanade — Alternance Analyst DevOps",
    subtitle: "Identification des besoins internes & développement de solutions",
    date: "2020 — 2021",
    description:
      "Amélioration du bien-être dans les locaux via des solutions IoT. Création complète d'un système de cartes de bienvenue automatisé, du design à l'envoi aux collaborateurs.",
    tags: ["C#", "Python", "Bash", "Arduino", "PowerApps", "Azure"],
  },
  {
    type: "education",
    title: "Simplon.co — Développeur en Intelligence Artificielle",
    subtitle: "Titre RNCP Niveau 5 — Formation par projets",
    date: "2019 — 2021",
    description:
      "Formation au développement d'applications intégrant l'IA : chatbots, moteurs de recommandations, classification, prédiction. Pédagogie active Simplon avec mises en situation concrètes et projets en équipe.",
    tags: ["Python", "Machine Learning", "Azure AI", "SQL", "API REST"],
  },
];
