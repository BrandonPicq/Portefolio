import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, GitBranch, Search, X } from "lucide-react";
import { projects, categoryLabels } from "../data/projects";
import type { ProjectCategory } from "../data/projects";
import "./pages.css";

const categories: (ProjectCategory | "all")[] = ["all", "fullstack", "frontend", "backend", "devops"];
const technologies = ["React 19", "TypeScript", "Spring Boot", "Docker", "MongoDB", "Express", "PostgreSQL", "n8n"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchTerm = searchQuery.trim().toLocaleLowerCase("fr");

  const filtered = projects.filter((project) => {
    const matchCategory = activeCategory === "all" || project.category === activeCategory;
    const matchTech = !activeTech || project.tags.includes(activeTech);
    const matchSearch = !searchTerm || [project.title, project.subtitle, project.description, ...project.tags]
      .some((value) => value.toLocaleLowerCase("fr").includes(searchTerm));
    return matchCategory && matchTech && matchSearch;
  });
  const hasFilters = activeCategory !== "all" || activeTech !== null || searchQuery.length > 0;

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveTech(null);
    setSearchQuery("");
  };

  return (
    <div className="project-catalogue">
      <header className="page-heading">
        <h1>Tous les projets.</h1>
        <p>{projects.length} projets à découvrir, des premières interfaces aux applications complètes.</p>
      </header>

      <section className="project-filters" aria-label="Rechercher et filtrer les projets">
        <label className="project-search-label" htmlFor="project-search">Rechercher un projet ou une technologie</label>
        <div className="project-search">
          <Search size={20} aria-hidden="true" />
          <input
            id="project-search"
            type="search"
            placeholder="React, Docker, cinéma…"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {searchQuery && (
            <button type="button" onClick={() => setSearchQuery("")} aria-label="Effacer la recherche">
              <X size={18} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="project-filter-group" role="group" aria-labelledby="category-filter-label">
          <span id="category-filter-label" className="project-filter-label">Domaine</span>
          <div className="project-filter-options">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="project-category-filter"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category === "all" ? "Tous" : categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>

        <div className="project-filter-group" role="group" aria-labelledby="tech-filter-label">
          <span id="tech-filter-label" className="project-filter-label">Technologie</span>
          <div className="project-filter-options">
            {technologies.map((tech) => (
              <button
                key={tech}
                type="button"
                className="project-tech-filter"
                aria-pressed={activeTech === tech}
                onClick={() => setActiveTech(activeTech === tech ? null : tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="project-filter-summary">
          <p role="status" aria-live="polite" aria-atomic="true">
            {filtered.length} projet{filtered.length > 1 ? "s" : ""}{hasFilters ? ` trouvé${filtered.length > 1 ? "s" : ""}` : " à explorer"}
          </p>
          {hasFilters && <button type="button" className="folio-link" onClick={clearFilters}>Réinitialiser les filtres</button>}
        </div>
      </section>

      <section className="project-list" aria-label="Projets">
        {filtered.map((project) => (
          <article key={project.id} className="project-row">
            <div className="project-row-heading">
              <h2><Link to={`/projects/${project.id}`}>{project.title}</Link></h2>
              <p className="project-row-subtitle">{project.subtitle}</p>
              <p className="project-row-meta">
                <span>{categoryLabels[project.category]}</span>
                {project.demoType && <span>Aperçu interactif</span>}
              </p>
            </div>
            <div className="project-row-body">
              <p className="project-row-description">{project.description}</p>
              <ul className="project-tech-list" aria-label="Technologies utilisées">
                {project.tags.map((tag) => <li key={tag} className={activeTech === tag ? "is-selected" : undefined}>{tag}</li>)}
              </ul>
              <div className="project-row-actions">
                <Link to={`/projects/${project.id}`} className="folio-link project-open-link">
                  Voir le projet <ArrowUpRight size={22} aria-hidden="true" />
                </Link>
                <div className="project-external-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="folio-link">
                      <GitBranch size={15} aria-hidden="true" /> Code source
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="folio-link">
                      Démo externe <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="project-empty">
            <h2>Aucun projet pour cette recherche.</h2>
            <p>Essayez un autre mot-clé ou retirez les filtres.</p>
            <button type="button" className="folio-button" onClick={clearFilters}>Voir tous les projets</button>
          </div>
        )}
      </section>
    </div>
  );
}
