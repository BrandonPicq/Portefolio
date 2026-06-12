// src/pages/Projects.tsx
// Page Projets — Liste filtrable — Design noir & or

import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Filter, GitBranch } from "lucide-react";
import { projects, categoryLabels } from "../data/projects";
import type { ProjectCategory } from "../data/projects";

const categories: (ProjectCategory | "all")[] = ["all", "fullstack", "frontend", "backend", "devops"];
const categoryFilterLabels: Record<string, string> = {
  all: "Tous",
  ...categoryLabels,
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [activeTech, setActiveTech] = useState<string | null>(null);

  // Toutes les technos uniques pour le filtre
  const allTechs = [...new Set(projects.flatMap((p) => p.tags))].sort();

  // Filtrage des projets
  const filtered = projects.filter((project) => {
    const matchCategory = activeCategory === "all" || project.category === activeCategory;
    const matchTech = !activeTech || project.tags.includes(activeTech);
    return matchCategory && matchTech;
  });

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveTech(null);
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Header */}
      <section className="py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="text-gold-gradient">Projets</span>
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto">{projects.length} projets réalisés au fil de mon parcours</p>
      </section>

      {/* Filtres */}
      <section className="max-w-5xl mx-auto space-y-6">
        {/* Filtre par catégorie */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-muted-dark text-sm">
            <Filter size={16} />
            <span>Catégorie</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat ?
                    "bg-gold/10 border border-gold/40 text-gold shadow-glow"
                  : "bg-surface border border-border text-muted hover:text-gold-light hover:border-border-hover"
                }`}
              >
                {categoryFilterLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Filtre par techno */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="text-muted-dark text-sm min-w-[90px]">Technologie</div>
          <div className="flex flex-wrap gap-2">
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTech(activeTech === tech ? null : tech)}
                className={`px-3 py-1 rounded-full text-xs transition-all duration-200 ${
                  activeTech === tech ?
                    "bg-gold/10 border border-gold/40 text-gold"
                  : "bg-surface border border-border text-muted-dark hover:text-muted-light hover:border-border-hover"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Résultats + clear */}
        {(activeCategory !== "all" || activeTech) && (
          <div className="flex items-center justify-between">
            <p className="text-muted-dark text-sm">
              {filtered.length} projet{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
            </p>
            <button onClick={clearFilters} className="text-muted-dark hover:text-gold text-sm underline transition-colors">
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>

      {/* Grille de projets */}
      <section className="max-w-5xl mx-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="bg-surface-card border border-border rounded-2xl p-6 shadow-card hover:border-border-hover transition-all duration-300 group flex flex-col"
            >
              {/* En-tête — cliquable */}
              <Link to={`/projects/${project.id}`} className="block mb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors">{project.title}</h3>
                    <p className="text-muted-dark text-sm mt-1">{project.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 text-xs bg-surface-elevated border border-border rounded-full text-muted-dark whitespace-nowrap">
                    {categoryLabels[project.category]}
                  </span>
                </div>
              </Link>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Points clés */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {project.highlights.map((h) => (
                  <li key={h} className="text-muted-dark text-xs flex items-start gap-2">
                    <span className="text-gold/40 mt-0.5">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 text-xs rounded-full border transition-colors ${
                      activeTech === tag ? "bg-gold/10 border-gold/30 text-gold" : "bg-surface-elevated border-border text-muted-dark"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Liens */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted-dark hover:text-gold text-xs transition-colors"
                    >
                      <GitBranch size={14} />
                      Code source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted-dark hover:text-gold text-xs transition-colors"
                    >
                      <ExternalLink size={14} />
                      Démo live
                    </a>
                  )}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-muted-dark hover:text-gold text-xs transition-colors"
                >
                  Voir détails →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted text-lg mb-4">Aucun projet ne correspond aux filtres</p>
            <button onClick={clearFilters} className="text-muted hover:text-gold underline transition-colors">
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
