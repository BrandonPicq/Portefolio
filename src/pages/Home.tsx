// src/pages/Home.tsx
// Page d'accueil avec Hero et Skills (système d'onglets)

import { useState } from "react";
import { skillsData, techToProjects, tabs } from "../data/skills";
import type { SkillCategory } from "../data/skills";

export default function Home() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("languages");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Portfolio</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto drop-shadow-md">
          Développeur Full-Stack passionné par la création d'applications web modernes
        </p>
      </section>

      {/* Skills Section avec Onglets */}
      <section className="py-5">
        <h2 className="text-3xl font-bold text-white mb-12 text-center drop-shadow-lg">Mes Compétences Techniques</h2>

        {/* Système d'onglets */}
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
                        "bg-white/20 backdrop-blur-glass border-2 border-white/40 text-white shadow-glass-lg"
                      : "bg-glass-light backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
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
          <div className="bg-glass-light backdrop-blur-glass-xl border border-glass rounded-2xl p-8 shadow-glass-lg min-h-[200px] animate-slideIn">
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
                      px-4 py-2 backdrop-blur-sm border rounded-full text-sm transition-all duration-200
                      ${
                        isSelected ?
                          "bg-white/25 border-white/40 text-white scale-105 shadow-lg"
                        : "bg-white/10 border-white/20 text-white/90 hover:bg-white/20 hover:scale-105"
                      }
                      ${hasProjects ? "cursor-pointer" : "cursor-default opacity-60"}
                    `}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>

            {/* Affichage des projets pour la techno sélectionnée */}
            {selectedSkill && techToProjects[selectedSkill] && (
              <div className="mt-6 pt-6 border-t border-white/10 animate-slideIn">
                <p className="text-white/70 text-sm mb-3 text-center">
                  Projets utilisant <span className="text-white font-semibold">{selectedSkill}</span> :
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {techToProjects[selectedSkill].map((project) => (
                    <span key={project} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
