// src/pages/Projects.tsx
// Page Projets — Galerie interactive avec filtres dynamiques et accès direct aux simulateurs

import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Sparkles, ExternalLink, GitBranch, ArrowRight, Layers } from "lucide-react";
import { projects, categoryLabels } from "../data/projects";
import type { ProjectCategory } from "../data/projects";

const categories: (ProjectCategory | "all")[] = ["all", "fullstack", "frontend", "backend", "devops"];
const categoryFilterLabels: Record<string, string> = {
  all: "Tous les projets",
  ...categoryLabels,
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtrage combiné (catégorie + tag + recherche textuelle)
  const filtered = projects.filter((project) => {
    const matchCategory = activeCategory === "all" || project.category === activeCategory;
    const matchTech = !activeTech || project.tags.includes(activeTech);
    const matchSearch =
      !searchQuery.trim() ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchCategory && matchTech && matchSearch;
  });

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveTech(null);
    setSearchQuery("");
  };

  return (
    <div className="space-y-12 animate-fadeIn pb-12">
      {/* En-tête de la page */}
      <section className="py-8 sm:py-12 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold border border-vermillon/20 dark:border-gold/30">
          <Layers size={13} />
          <span>PORTFOLIO TECHNIQUE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-editorial dark:font-sans text-ink dark:text-white">
          Projets & Réalisations
        </h1>
        <p className="text-sm sm:text-base text-ink-stoned dark:text-muted max-w-xl mx-auto leading-relaxed">
          {projects.length} applications et architectures développées au fil de mon parcours, avec démos d'interfaces interactives embarquées.
        </p>
      </section>

      {/* Barre de recherche & Filtres */}
      <section className="max-w-5xl mx-auto space-y-4 bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-5 sm:p-6 shadow-sm">
        {/* Recherche libre */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-ink-sepia dark:text-muted" />
          <input
            type="text"
            placeholder="Rechercher par mot-clé (React 19, Spring Boot, Docker, MERN, JWT...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-paper dark:bg-surface border border-[#d8d2c2] dark:border-border rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-ink dark:text-white placeholder-ink-sepia dark:placeholder-muted focus:outline-none focus:border-vermillon dark:focus:border-gold transition-colors"
          />
        </div>

        {/* Filtre par catégorie */}
        <div className="flex items-center gap-2 flex-wrap pt-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-ink-sepia dark:text-muted-dark mr-2">
            <Filter size={13} />
            <span>Domaine:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-vermillon text-white border-vermillon dark:bg-gold dark:text-black dark:border-gold shadow-sm font-semibold"
                      : "bg-paper-carton/60 dark:bg-surface-elevated border-[#d8d2c2] dark:border-border text-ink-stoned dark:text-muted hover:border-vermillon/40 dark:hover:border-gold/40"
                  }`}
                >
                  {categoryFilterLabels[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtres par technologies populaires */}
        <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-[#d8d2c2]/60 dark:border-border/60">
          <span className="text-[11px] font-mono text-ink-sepia dark:text-muted-dark mr-1">Technologies clés:</span>
          <div className="flex flex-wrap gap-1">
            {["React 19", "TypeScript", "Spring Boot", "Docker", "MongoDB", "Express", "PostgreSQL", "n8n"].map(
              (tech) => {
                const isSelected = activeTech === tech;
                return (
                  <button
                    key={tech}
                    onClick={() => setActiveTech(isSelected ? null : tech)}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? "bg-vermillon/15 border-vermillon text-vermillon dark:bg-gold/15 dark:border-gold dark:text-gold font-bold"
                        : "bg-paper-snow dark:bg-surface border-[#d8d2c2] dark:border-border text-ink-stoned dark:text-muted hover:border-vermillon/30"
                    }`}
                  >
                    {tech}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Indicateur de résultats & reset */}
        {(activeCategory !== "all" || activeTech || searchQuery) && (
          <div className="flex items-center justify-between pt-2 text-xs font-mono text-ink-sepia dark:text-muted">
            <span>
              {filtered.length} projet{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
            </span>
            <button
              onClick={clearFilters}
              className="text-vermillon dark:text-gold hover:underline cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>

      {/* Grille de cartes projets */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => {
            const hasDemo = Boolean(project.demoType);

            return (
              <article
                key={project.id}
                className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-6 shadow-sm hover:border-vermillon/40 dark:hover:border-gold/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
              >
                <div>
                  {/* En-tête avec badge catégorie et indicateur de démo */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold border border-vermillon/20 dark:border-gold/30 px-2 py-0.5 rounded font-semibold">
                          {categoryLabels[project.category]}
                        </span>
                        {project.featured && (
                          <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-semibold">
                            ★ En vedette
                          </span>
                        )}
                      </div>
                      <Link to={`/projects/${project.id}`} className="group-hover:text-vermillon dark:group-hover:text-gold transition-colors">
                        <h3 className="text-xl font-bold font-editorial dark:font-sans text-ink dark:text-white">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-ink-stoned dark:text-muted mt-0.5 font-medium">{project.subtitle}</p>
                    </div>

                    {hasDemo && (
                      <span className="shrink-0 p-2 rounded-lg bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold" title="Démo interactive disponible">
                        <Sparkles size={16} />
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-ink-stoned dark:text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Points clés & Faits marquants */}
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="text-xs text-ink-stoned dark:text-muted-light flex items-start gap-2">
                        <span className="text-vermillon dark:text-gold font-bold">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags techniques */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[10px] font-mono rounded-md border ${
                          activeTech === tag
                            ? "bg-vermillon/15 border-vermillon text-vermillon dark:bg-gold/15 dark:border-gold dark:text-gold font-bold"
                            : "bg-paper-carton/60 dark:bg-surface-elevated border-[#d8d2c2] dark:border-border text-ink-stoned dark:text-muted"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Liens d'action */}
                <div className="pt-4 border-t border-[#d8d2c2] dark:border-border flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-ink-stoned dark:text-muted hover:text-vermillon dark:hover:text-gold transition-colors"
                      >
                        <GitBranch size={13} /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-ink-stoned dark:text-muted hover:text-vermillon dark:hover:text-gold transition-colors"
                      >
                        <ExternalLink size={13} /> Démo Externe
                      </a>
                    )}
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-paper-carton dark:bg-surface-elevated hover:bg-vermillon hover:text-white dark:hover:bg-gold dark:hover:text-black border border-[#d8d2c2] dark:border-border text-ink dark:text-white flex items-center gap-1.5 transition-all hover:scale-105"
                  >
                    <span>{hasDemo ? "Tester la démo" : "Détails"}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* État vide si aucun projet ne correspond */}
        {filtered.length === 0 && (
          <div className="text-center py-16 bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-8 space-y-3">
            <p className="text-ink-stoned dark:text-muted text-base">Aucun projet ne correspond à vos critères de recherche.</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-vermillon text-white dark:bg-gold dark:text-black cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
