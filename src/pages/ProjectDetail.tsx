// src/pages/ProjectDetail.tsx
// Page détail d'un projet — Route dynamique /projects/:id

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
        <p className="text-white/50 mb-8">Ce projet n'existe pas ou a été supprimé.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-glass-light border border-white/10 rounded-xl text-white/70 hover:text-white transition-colors"
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
        className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors mt-8"
      >
        <ArrowLeft size={16} />
        Tous les projets
      </Link>

      {/* En-tête */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/40">
            {categoryLabels[project.category]}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
        <p className="text-xl text-white/50">{project.subtitle}</p>

        {/* Liens */}
        {(project.github || project.demo) && (
          <div className="flex gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-glass-light border border-white/10 rounded-xl text-white/70 hover:text-white hover:border-white/20 transition-all text-sm"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 border border-white/20 rounded-xl text-white hover:bg-white/25 transition-all text-sm"
              >
                <ExternalLink size={16} />
                Démo live
              </a>
            )}
          </div>
        )}
      </section>

      {/* Description détaillée */}
      <section className="bg-glass-light backdrop-blur-glass-xl border border-white/10 rounded-2xl p-8 shadow-glass-lg">
        <p className="text-white/70 leading-relaxed text-base">
          {project.longDescription || project.description}
        </p>
      </section>

      {/* Architecture */}
      {project.architecture && (
        <section className="bg-glass-light backdrop-blur-glass-xl border border-white/10 rounded-2xl p-8 shadow-glass-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Layers className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-lg font-semibold text-white">Architecture</h2>
          </div>
          <p className="text-white/60 font-mono text-sm bg-white/5 rounded-lg px-4 py-3 border border-white/5">
            {project.architecture}
          </p>
        </section>
      )}

      {/* Points clés + Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Points clés */}
        <section className="bg-glass-light backdrop-blur-glass-xl border border-white/10 rounded-2xl p-8 shadow-glass-lg">
          <h2 className="text-lg font-semibold text-white mb-4">Points clés</h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="text-white/60 text-sm flex items-start gap-3">
                <span className="text-white/30 mt-0.5">▸</span>
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="bg-glass-light backdrop-blur-glass-xl border border-white/10 rounded-2xl p-8 shadow-glass-lg">
          <h2 className="text-lg font-semibold text-white mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Navigation vers projets suivant/précédent */}
      <nav className="border-t border-white/10 pt-8 pb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          Retour à la liste
        </Link>
      </nav>
    </div>
  );
}
