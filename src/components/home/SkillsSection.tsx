import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { skillsData, tabs, techToProjects, projectNameToId } from "../../data/skills";
import type { SkillCategory } from "../../data/skills";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");
  const [selectedTech, setSelectedTech] = useState<string | null>("React 19");

  const activeData = skillsData[activeCategory];

  return (
    <section className="py-12 space-y-8">
      {/* En-tête de section */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold font-editorial dark:font-sans text-ink dark:text-white">
          Expertise & Stack Technologique
        </h2>
        <p className="text-sm text-ink-stoned dark:text-muted">
          Une maîtrise éprouvée sur des architectures réelles, du frontend réactif aux microservices conteneurisés.
        </p>
      </div>

      {/* Grille des domaines d'expertise */}
      <div className="max-w-4xl mx-auto">
        {/* Navigation par catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((tab) => {
            const Icon = skillsData[tab].icon;
            const isActive = activeCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveCategory(tab);
                  setSelectedTech(null);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-vermillon text-white border-vermillon dark:bg-gold dark:text-black dark:border-gold shadow-sm scale-105"
                    : "bg-paper-snow dark:bg-surface-card border-[#d8d2c2] dark:border-border text-ink-stoned dark:text-muted hover:border-vermillon/40 dark:hover:border-gold/40"
                }`}
              >
                <Icon size={16} />
                <span>{skillsData[tab].label}</span>
              </button>
            );
          })}
        </div>

        {/* Panneau interactif avec liste de technos et liaison projets */}
        <div className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-6 shadow-sm space-y-6 animate-slideIn">
          <div>
            <div className="text-xs font-mono text-ink-sepia dark:text-muted uppercase tracking-wider mb-3">
              Technologies & Frameworks — {activeData.label} :
            </div>
            <div className="flex flex-wrap gap-2">
              {activeData.skills.map((tech) => {
                const isSelected = selectedTech === tech;
                return (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(isSelected ? null : tech)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? "bg-vermillon/15 border-vermillon text-vermillon dark:bg-gold/15 dark:border-gold dark:text-gold shadow-sm scale-105 font-bold"
                        : "bg-paper-carton/60 dark:bg-surface-elevated border-[#d8d2c2] dark:border-border text-ink dark:text-slate-200 hover:border-vermillon/40 dark:hover:border-gold/40"
                    }`}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Affichage des projets associés à la techno sélectionnée */}
          {selectedTech && techToProjects[selectedTech] && (
            <div className="pt-4 border-t border-[#d8d2c2] dark:border-border animate-fadeIn">
              <div className="text-xs text-ink-stoned dark:text-muted mb-2 font-mono flex items-center justify-between">
                <span>
                  Projets utilisant <strong className="text-vermillon dark:text-gold">{selectedTech}</strong> :
                </span>
                <span className="text-[10px] text-ink-sepia">Cliquez pour voir la démo</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techToProjects[selectedTech].map((projName) => {
                  const projId = projectNameToId[projName];
                  return projId ? (
                    <Link
                      key={projName}
                      to={`/projects/${projId}`}
                      className="px-3 py-1 rounded-md text-xs bg-paper-carton dark:bg-surface-elevated border border-[#d8d2c2] dark:border-border text-ink dark:text-slate-200 hover:text-vermillon dark:hover:text-gold hover:border-vermillon dark:hover:border-gold flex items-center gap-1 transition-all"
                    >
                      <span>{projName}</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  ) : (
                    <span
                      key={projName}
                      className="px-3 py-1 rounded-md text-xs bg-paper-carton dark:bg-surface-elevated border border-[#d8d2c2] dark:border-border text-ink-stoned dark:text-muted"
                    >
                      {projName}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
