// src/pages/ProjectDetail.tsx
// Page détail d'un projet — Design noir & or

import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, GitBranch, Layers } from "lucide-react";
import { getProjectById, categoryLabels } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="animate-fadeIn text-center py-32">
        <h1 className="text-4xl font-bold text-white mb-4">Projet introuvable</h1>
        <p className="text-muted mb-8">Ce projet n'existe pas ou a été supprimé.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-surface-card border border-border rounded-xl text-muted hover:text-gold transition-colors"
        >
          <ArrowLeft size={18} />
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn space-y-10 max-w-4xl mx-auto">
      {/* Navigation retour */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-muted-dark hover:text-gold text-sm transition-colors mt-8"
      >
        <ArrowLeft size={16} />
        Tous les projets
      </Link>

      {/* En-tête */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3 py-1 text-xs bg-surface-elevated border border-border rounded-full text-muted-dark">
            {categoryLabels[project.category]}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
        <p className="text-xl text-muted">{project.subtitle}</p>

        {/* Liens */}
        {(project.github || project.demo) && (
          <div className="flex gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-card border border-border rounded-xl text-muted hover:text-gold hover:border-gold/30 transition-all text-sm"
              >
                <GitBranch size={16} />
                Code source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 rounded-xl text-gold hover:bg-gold/20 transition-all text-sm"
              >
                <ExternalLink size={16} />
                Démo live
              </a>
            )}
          </div>
        )}
      </section>

      {/* Description détaillée */}
      <section className="bg-surface-card border border-border rounded-2xl p-8 shadow-card">
        <p className="text-muted-light leading-relaxed text-base">
          {project.longDescription || project.description}
        </p>
      </section>

      {/* Architecture */}
      {project.architecture && (
        <section className="bg-surface-card border border-border rounded-2xl p-8 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gold/10 rounded-lg">
              <Layers className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-lg font-semibold text-white">Architecture</h2>
          </div>
          <p className="text-muted font-mono text-sm bg-surface-elevated rounded-lg px-4 py-3 border border-border">
            {project.architecture}
          </p>
        </section>
      )}

      {/* Points clés + Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Points clés */}
        <section className="bg-surface-card border border-border rounded-2xl p-8 shadow-card">
          <h2 className="text-lg font-semibold text-white mb-4">Points clés</h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="text-muted text-sm flex items-start gap-3">
                <span className="text-gold/50 mt-0.5">▸</span>
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="bg-surface-card border border-border rounded-2xl p-8 shadow-card">
          <h2 className="text-lg font-semibold text-white mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm bg-surface-elevated border border-border rounded-full text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Navigation vers projets */}
      <nav className="border-t border-border pt-8 pb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-dark hover:text-gold text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          Retour à la liste
        </Link>
      </nav>
    </div>
  );
}
