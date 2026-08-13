import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "../../data/projects";
import ProjectDemoRenderer from "../demos/ProjectDemoRenderer";

export default function FeaturedDemos() {
  const featuredProjects = getFeaturedProjects();
  const [activeProjectId, setActiveProjectId] = useState<string>(featuredProjects[0]?.id || "noticed");

  const activeProject = featuredProjects.find((p) => p.id === activeProjectId) || featuredProjects[0];

  return (
    <section id="featured-demos" className="py-12 space-y-8 scroll-mt-20">
      {/* En-tête de section */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold border border-vermillon/20 dark:border-gold/30">
          <Sparkles size={13} />
          <span>EXPÉRIENCE INTERACTIVE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-editorial dark:font-sans text-ink dark:text-white">
          Démos d'Interface & Simulateurs
        </h2>
        <p className="text-sm text-ink-stoned dark:text-muted">
          Testez directement le fonctionnement de mes derniers projets dans ces micro-environnements interactifs.
        </p>
      </div>

      {/* Onglets de sélection des projets phares */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {featuredProjects.map((p) => {
          const isActive = p.id === activeProjectId;
          return (
            <button
              key={p.id}
              onClick={() => setActiveProjectId(p.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                isActive
                  ? "bg-vermillon text-white border-vermillon dark:bg-gold dark:text-black dark:border-gold shadow-md scale-105"
                  : "bg-paper-snow dark:bg-surface-card border-[#d8d2c2] dark:border-border text-ink-stoned dark:text-muted hover:border-vermillon/50 dark:hover:border-gold/50"
              }`}
            >
              {p.title}
            </button>
          );
        })}
      </div>

      {/* Zone du simulateur actif + Détails */}
      <div className="space-y-6">
        {/* Le Simulateur interactif */}
        <div className="animate-fadeIn">
          <ProjectDemoRenderer project={activeProject} />
        </div>

        {/* Barre d'informations rapides sous la démo */}
        <div className="p-5 rounded-2xl border border-[#d8d2c2] dark:border-border bg-paper-snow/90 dark:bg-surface-card/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base text-ink dark:text-white">{activeProject.title}</h3>
              <span className="text-xs font-mono text-vermillon dark:text-gold bg-vermillon/10 dark:bg-gold/10 px-2 py-0.5 rounded">
                {activeProject.subtitle}
              </span>
            </div>
            <p className="text-xs text-ink-stoned dark:text-muted max-w-2xl">{activeProject.description}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={`/projects/${activeProject.id}`}
              className="px-4 py-2 rounded-xl font-medium text-xs bg-paper-carton dark:bg-surface-elevated text-ink dark:text-white border border-[#d8d2c2] dark:border-border hover:border-vermillon dark:hover:border-gold flex items-center gap-2 transition-all hover:scale-105"
            >
              Fiche technique complète
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
