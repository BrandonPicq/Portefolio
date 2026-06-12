// src/components/home/SkillsTabs.tsx
// Section compétences — onglets noir & blanc avec accents dorés

import { useState } from "react";
import { Link } from "react-router-dom";
import { skillsData, techToProjects, tabs, projectNameToId } from "../../data/skills";
import type { SkillCategory } from "../../data/skills";

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("languages");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills-section" className="py-12">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Mes <span className="text-gold">Compétences</span> Techniques
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => {
            const TabIcon = skillsData[tab].icon;
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex items-center gap-2 px-5 py-3 rounded-xl font-medium
                  transition-all duration-300 transform hover:scale-105
                  ${
                    isActive ?
                      "bg-surface-card border border-gold/40 text-gold shadow-glow"
                    : "bg-surface border border-border text-muted hover:text-gold-light hover:border-border-hover"
                  }
                `}
              >
                <TabIcon size={18} />
                <span>{skillsData[tab].label}</span>
              </button>
            );
          })}
        </div>

        {/* Contenu actif */}
        <div className="bg-surface-card border border-border rounded-2xl p-8 shadow-card min-h-[200px] animate-slideIn">
          <div className="flex flex-wrap gap-3 justify-center">
            {skillsData[activeTab].skills.map((skill) => {
              const isSelected = selectedSkill === skill;
              const hasProjects = techToProjects[skill];

              return (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(isSelected ? null : skill)}
                  disabled={!hasProjects}
                  className={`
                    px-4 py-2 border rounded-full text-sm transition-all duration-200
                    ${
                      isSelected ?
                        "bg-gold/10 border-gold/50 text-gold scale-105 shadow-glow"
                      : "bg-surface-elevated border-border text-muted-light hover:border-gold/30 hover:text-gold-light hover:scale-105"
                    }
                    ${hasProjects ? "cursor-pointer" : "cursor-default opacity-40"}
                  `}
                >
                  {skill}
                </button>
              );
            })}
          </div>

          {/* Affichage des projets pour la techno sélectionnée */}
          {selectedSkill && techToProjects[selectedSkill] && (
            <div className="mt-6 pt-6 border-t border-border animate-slideIn">
              <p className="text-muted text-sm mb-3 text-center">
                Projets utilisant <span className="text-gold font-semibold">{selectedSkill}</span> :
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {techToProjects[selectedSkill].map((project) => {
                  const projectId = projectNameToId[project];
                  return projectId ? (
                    <Link
                      key={project}
                      to={`/projects/${projectId}`}
                      className="px-3 py-1.5 bg-surface-elevated border border-border rounded-lg text-xs text-muted hover:border-gold/30 hover:text-gold-light transition-all"
                    >
                      {project}
                    </Link>
                  ) : (
                    <span key={project} className="px-3 py-1.5 bg-surface-elevated border border-border rounded-lg text-xs text-muted-dark">
                      {project}
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
