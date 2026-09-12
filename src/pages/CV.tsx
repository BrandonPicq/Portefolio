// src/pages/CV.tsx
import { Download, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon } from "../components/icons/SocialIcons";
import { cvData } from "../data/cv";
import "./cv.css";

export default function CV() {
  const { identity, skills, projects, experiences, education } = cvData;
  const pdfBase = `${import.meta.env.BASE_URL}CV_Brandon_Picq_Developpeur_Web_Full_Stack`;

  return (
    <div className="cv-page-wrapper">
      {/* Barre supérieure d'actions */}
      <header className="cv-header-bar">
        <div className="cv-header-titles">
          <h1>Curriculum Vitae</h1>
          <p>Deux formats : une page A4 ou les dimensions de la preview web.</p>
        </div>

        <div className="cv-actions-bar">
          {/* Les deux PDF sont générés depuis cette même feuille de CV. */}
          <a
            href={`${pdfBase}.pdf`}
            download="CV_Brandon_Picq_Developpeur_Web_Full_Stack.pdf"
            className="cv-action-btn primary"
            title="Une page A4, avec réduction proportionnelle du CV"
          >
            <Download size={16} aria-hidden="true" />
            <span>Télécharger le PDF A4</span>
          </a>

          <a
            href={`${pdfBase}_Web.pdf`}
            download="CV_Brandon_Picq_Developpeur_Web_Full_Stack_Web.pdf"
            className="cv-action-btn secondary"
            title="Une page aux dimensions de la preview desktop, sans réduction"
          >
            <Download size={16} aria-hidden="true" />
            <span>Télécharger le PDF format web</span>
          </a>
        </div>
      </header>

      {/* Rendu de la feuille de CV Éditoriale */}
      <div className="cv-sheet-container">
        <article className="cv-sheet">
          <div className="cv-editorial-layout">
            {/* En-tête style Journal / Presse */}
            <header className="cv-ed-masthead">
              <div className="cv-ed-top-row">
                <div>
                  <h2>{identity.fullName}</h2>
                  <div className="cv-ed-role">
                    {identity.role}
                  </div>
                </div>

                <div className="cv-ed-status-badge">
                  <span className="primary-role">Recherche d'alternance • Dès que possible</span>
                  <span className="sub-role">{identity.rhythm} • Web@cadémie</span>
                </div>
              </div>

              <div className="cv-ed-meta-bar">
                <span>
                  <Mail size={12} aria-hidden="true" /> {identity.email}
                </span>
                <span>
                  <Phone size={12} aria-hidden="true" /> {identity.phoneDisplay}
                </span>
                <span>
                  <GithubIcon size={13} /> {identity.githubDisplay}
                </span>
                <span>
                  <MapPin size={12} aria-hidden="true" /> {identity.location}
                </span>
              </div>

              <div className="cv-ed-pitch">
                {identity.headline}
              </div>
            </header>

            {/* Grille Asymétrique : 65% Projets & Expériences / 35% Compétences & Formations */}
            <div className="cv-ed-grid">
              {/* Colonne Principale Gauche */}
              <div className="cv-ed-col-main">
                {/* Projets */}
                <section>
                  <h3 className="cv-ed-section-title">
                    <span>Projets Développés</span>
                    <span className="cv-ed-section-sub">Web & Applications</span>
                  </h3>
                  <div className="cv-items-stack">
                    {projects.map((proj) => (
                      <div key={proj.id} className="cv-item">
                        <div className="cv-item-header">
                          <div>
                            <span className="cv-item-title">{proj.title}</span>
                            {" — "}
                            <span className="cv-item-context">{proj.subtitle}</span>
                          </div>
                          <span className="cv-item-date">{proj.period}</span>
                        </div>
                        <p className="cv-item-desc">
                          <em>{proj.context}</em> : {proj.description}
                        </p>
                        <ul className="cv-item-bullets">
                          {proj.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                        <div className="cv-tag-row">
                          {proj.tags.map((t) => (
                            <span key={t} className="cv-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Expériences */}
                <section>
                  <h3 className="cv-ed-section-title">
                    <span>Expériences Professionnelles</span>
                    <span className="cv-ed-section-sub">DevOps & Rigueur</span>
                  </h3>
                  <div className="cv-items-stack">
                    {experiences.map((exp) => (
                      <div key={`${exp.company}-${exp.role}`} className="cv-item">
                        <div className="cv-item-header">
                          <div>
                            <span className="cv-item-title">{exp.company}</span>
                            {" — "}
                            <span className="cv-item-context">{exp.role}</span>
                          </div>
                          <span className="cv-item-date">{exp.period}</span>
                        </div>
                        <ul className="cv-item-bullets">
                          {exp.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                        <div className="cv-tag-row">
                          {exp.tags.map((t) => (
                            <span key={t} className="cv-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Colonne Latérale Droite */}
              <aside className="cv-ed-col-side">
                {/* Stack & Compétences */}
                <div className="cv-ed-side-card">
                  <h4>Stack Technique</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {skills.map((s) => (
                      <div key={s.category} style={{ fontSize: "0.74rem" }}>
                        <strong style={{ color: "var(--folio-ink)", display: "block", marginBottom: "1px" }}>
                          {s.category}
                        </strong>
                        <span style={{ color: "#475569", lineHeight: "1.3" }}>{s.skills.join(", ")}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Formations */}
                <div className="cv-ed-side-card">
                  <h4>Formations</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {education.map((edu) => (
                      <div key={edu.degree} style={{ fontSize: "0.74rem" }}>
                        <strong style={{ color: "var(--folio-ink)", display: "block", lineHeight: "1.25" }}>
                          {edu.degree}
                        </strong>
                        <span style={{ color: "var(--folio-accent)", fontWeight: 600 }}>{edu.institution}</span>
                        <div style={{ color: "#64748b", fontSize: "0.68rem" }}>{edu.period}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications & Atouts */}
                <div className="cv-ed-side-card">
                  <h4>Certifications & Atouts</h4>
                  <div style={{ fontSize: "0.73rem", lineHeight: "1.35" }}>
                    <div style={{ marginBottom: "0.45rem" }}>
                      <strong style={{ display: "block", color: "var(--folio-ink)" }}>Microsoft Certified DP-100</strong>
                      <span style={{ color: "#475569" }}>Azure Data Scientist Associate (2021)</span>
                    </div>
                    <div style={{ marginBottom: "0.45rem" }}>
                      <strong style={{ display: "block", color: "var(--folio-ink)" }}>Anglais professionnel</strong>
                      <span style={{ color: "#475569" }}>TOEIC 875 / 990 (Niveau C1)</span>
                    </div>
                    <div>
                      <strong style={{ display: "block", color: "var(--folio-ink)" }}>Vie Associative</strong>
                      <span style={{ color: "#475569" }}>Epitanime & TNT (Orga conventions & dév)</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
