// src/pages/ProjectDetail.tsx
// Page détail d'un projet — Playground interactif & Fiche technique approfondie

import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, GitBranch, Layers, Sparkles, CheckCircle2, Server } from "lucide-react";
import { getProjectById, categoryLabels } from "../data/projects";
import ProjectDemoRenderer from "../components/demos/ProjectDemoRenderer";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="animate-fadeIn text-center py-32 space-y-4">
        <h1 className="text-3xl font-bold font-editorial dark:font-sans text-ink dark:text-white">
          Projet introuvable
        </h1>
        <p className="text-sm text-ink-stoned dark:text-muted">Ce projet n'existe pas ou a été déplacé.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-vermillon text-white dark:bg-gold dark:text-black rounded-xl text-xs font-semibold"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>
      </div>
    );
  }

  const hasDemo = Boolean(project.demoType);

  return (
    <div className="animate-fadeIn space-y-10 max-w-5xl mx-auto pb-16">
      {/* Navigation retour */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-ink-stoned dark:text-muted hover:text-vermillon dark:hover:text-gold text-xs sm:text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Retour à la liste des projets</span>
        </Link>
      </div>

      {/* En-tête du projet */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs font-mono bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold border border-vermillon/20 dark:border-gold/30 rounded-full font-semibold">
            {categoryLabels[project.category]}
          </span>
          {project.featured && (
            <span className="px-3 py-1 text-xs font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-full font-semibold">
              ★ Projet Phare
            </span>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold font-editorial dark:font-sans text-ink dark:text-white">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl text-ink-stoned dark:text-muted mt-1">{project.subtitle}</p>
          </div>

          {/* Liens externes */}
          {(project.github || project.demo) && (
            <div className="flex items-center gap-3 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-paper-snow dark:bg-surface-elevated border border-[#d8d2c2] dark:border-border rounded-xl text-xs font-medium text-ink dark:text-white hover:border-vermillon dark:hover:border-gold transition-all shadow-sm"
                >
                  <GitBranch size={15} />
                  Code source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-vermillon text-white dark:bg-gold dark:text-black rounded-xl text-xs font-semibold hover:opacity-90 transition-all shadow-sm"
                >
                  <ExternalLink size={15} />
                  Démo Live Externe
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 1. Banc d'essai / Simulateur Interactif */}
      {hasDemo && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-vermillon dark:text-gold" />
              <h2 className="text-lg font-bold font-editorial dark:font-sans text-ink dark:text-white">
                Simulateur d'Interface Interactif
              </h2>
            </div>
            <span className="text-[11px] font-mono text-ink-sepia dark:text-muted">
              Interagissez directement avec la maquette
            </span>
          </div>

          <ProjectDemoRenderer project={project} />
        </section>
      )}

      {/* 2. Présentation & Rôle */}
      <section className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-lg font-bold font-editorial dark:font-sans text-ink dark:text-white border-b border-[#d8d2c2] dark:border-border pb-2">
          À propos du projet
        </h2>
        <p className="text-ink-stoned dark:text-muted-light leading-relaxed text-sm sm:text-base">
          {project.longDescription || project.description}
        </p>
      </section>

      {/* 3. Architecture Technique */}
      {project.architecture && (
        <section className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 border-b border-[#d8d2c2] dark:border-border pb-2">
            <div className="p-1.5 bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold rounded-lg">
              <Layers size={18} />
            </div>
            <h2 className="text-lg font-bold font-editorial dark:font-sans text-ink dark:text-white">
              Architecture & Flux de Données
            </h2>
          </div>

          <div className="font-mono text-xs sm:text-sm bg-paper-carton/60 dark:bg-surface-elevated p-4 rounded-xl border border-[#d8d2c2] dark:border-border text-ink dark:text-slate-200 overflow-x-auto leading-relaxed">
            {project.architecture}
          </div>

          {/* Endpoints REST si documentés */}
          {project.endpoints && project.endpoints.length > 0 && (
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono uppercase text-ink-sepia dark:text-muted tracking-wider">
                Endpoints REST Clés :
              </h4>
              <div className="space-y-1.5 font-mono text-xs">
                {project.endpoints.map((ep, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded bg-paper-snow dark:bg-surface border border-[#d8d2c2] dark:border-border text-ink-stoned dark:text-slate-300 flex items-center gap-2"
                  >
                    <Server size={13} className="text-vermillon dark:text-gold shrink-0" />
                    <span>{ep}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 4. Points clés & Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Points clés */}
        <section className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="text-base font-bold font-editorial dark:font-sans text-ink dark:text-white border-b border-[#d8d2c2] dark:border-border pb-2">
            Faits Marquants
          </h2>
          <ul className="space-y-2.5">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-ink-stoned dark:text-muted flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-vermillon dark:text-gold shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Stack Technique & Métriques */}
        <section className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="text-base font-bold font-editorial dark:font-sans text-ink dark:text-white border-b border-[#d8d2c2] dark:border-border pb-2">
            Technologies & Environnement
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-mono bg-paper-carton/60 dark:bg-surface-elevated border border-[#d8d2c2] dark:border-border rounded-lg text-ink dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.metrics && (
            <div className="pt-3 border-t border-[#d8d2c2] dark:border-border space-y-2">
              <h4 className="text-[11px] font-mono uppercase text-ink-sepia dark:text-muted">Métriques :</h4>
              <div className="grid grid-cols-2 gap-2">
                {project.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-2 rounded bg-paper-carton/40 dark:bg-surface border border-[#d8d2c2] dark:border-border text-center text-[11px] font-mono text-ink-stoned dark:text-muted"
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Footer Navigation */}
      <nav className="border-t border-[#d8d2c2] dark:border-border pt-8 flex items-center justify-between text-xs">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-ink-stoned dark:text-muted hover:text-vermillon dark:hover:text-gold transition-colors font-medium"
        >
          <ArrowLeft size={16} />
          Retour à tous les projets
        </Link>
      </nav>
    </div>
  );
}
