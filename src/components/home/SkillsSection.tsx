import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { skillsData, tabs, techToProjects, projectNameToId } from "../../data/skills";
import type { SkillCategory } from "../../data/skills";
import "../../pages/pages.css";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");
  const [selectedTech, setSelectedTech] = useState<string | null>("React 19");
  const activeData = skillsData[activeCategory];
  const linkedProjects = selectedTech ? techToProjects[selectedTech] : undefined;

  return (
    <section id="skills-section" className="skills-section content-section" aria-labelledby="skills-title">
      <div className="skills-heading">
        <h2 id="skills-title">Du code aux projets.</h2>
        <p>Choisissez une technologie pour retrouver les projets où je l'utilise.</p>
      </div>

      <div className="skills-layout">
        <div className="skills-categories" role="group" aria-label="Domaines de compétences">
          {tabs.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedTech(null);
              }}
            >
              {skillsData[category].label}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-technologies" role="group" aria-label={`Technologies : ${activeData.label}`}>
            {activeData.skills.map((tech) => (
              <button
                key={tech}
                type="button"
                aria-pressed={selectedTech === tech}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="skills-projects">
            <p className="skills-projects-label" role="status" aria-live="polite" aria-atomic="true">
              {selectedTech && linkedProjects
                ? <>Dans mes projets avec <strong>{selectedTech}</strong></>
                : "Sélectionnez une technologie pour explorer les projets associés."}
            </p>
            {linkedProjects && (
              <ul>
                {linkedProjects.map((projectName) => {
                  const projectId = projectNameToId[projectName];
                  const path = projectName === "Portfolio" || projectName === "Tous les projets"
                    ? "/projects"
                    : projectId ? `/projects/${projectId}` : null;
                  return (
                    <li key={projectName}>
                      {path ? (
                        <Link to={path}>
                          <span>{projectName}</span><ArrowUpRight size={20} aria-hidden="true" />
                        </Link>
                      ) : <span>{projectName}</span>}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
