import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";
import { getProjectById, categoryLabels } from "../data/projects";
import ProjectDemoRenderer from "../components/demos/ProjectDemoRenderer";
import "./pages.css";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="project-empty project-not-found">
        <h1>Projet introuvable.</h1>
        <p>Ce projet n'existe pas ou a été déplacé.</p>
        <Link to="/projects" className="folio-link"><ArrowLeft size={18} aria-hidden="true" /> Retour aux projets</Link>
      </div>
    );
  }

  return (
    <article className="project-detail">
      <Link to="/projects" className="folio-link project-back-link">
        <ArrowLeft size={18} aria-hidden="true" /> Tous les projets
      </Link>

      <header className="page-heading project-detail-heading">
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
        <div className="project-detail-meta">
          <span>{categoryLabels[project.category]}</span>
          <div className="project-external-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="folio-link">
                <GitBranch size={16} aria-hidden="true" /> Code source
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="folio-link">
                Démo externe <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </header>

      {project.demoType && (
        <section className="project-preview" aria-labelledby="project-preview-title">
          <div className="project-preview-heading">
            <h2 id="project-preview-title">À vous d'essayer.</h2>
            <p>Aperçu interactif · Données de démonstration</p>
          </div>
          <ProjectDemoRenderer key={project.id} project={project} />
          <p className="project-preview-note">Explorez l'interface avec des données d'exemple. Cet aperçu fonctionne localement, sans connexion au serveur du projet.</p>
        </section>
      )}

      <section className="project-detail-section content-section">
        <h2>Le projet</h2>
        <div className="project-detail-content">
          <p>{project.longDescription || project.description}</p>
        </div>
      </section>

      {project.architecture && (
        <section className="project-detail-section content-section">
          <h2>Architecture</h2>
          <div className="project-detail-content">
            <p className="project-architecture">{project.architecture}</p>
            {project.endpoints && project.endpoints.length > 0 && (
              <div className="project-endpoints">
                <h3>Routes de l'API</h3>
                <ul>{project.endpoints.map((endpoint) => <li key={endpoint}><code>{endpoint}</code></li>)}</ul>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="project-detail-section content-section">
        <h2>Points clés</h2>
        <div className="project-detail-content">
          <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </div>
      </section>

      <section className="project-detail-section content-section">
        <h2>Technologies</h2>
        <div className="project-detail-content">
          <ul className="project-tech-list project-detail-tech">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          {project.metrics && project.metrics.length > 0 && (
            <div className="project-facts">
              <h3>En bref</h3>
              <ul>{project.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
            </div>
          )}
        </div>
      </section>

      <nav className="project-detail-footer" aria-label="Navigation des projets">
        <Link to="/projects" className="folio-link"><ArrowLeft size={18} aria-hidden="true" /> Continuer à explorer</Link>
      </nav>
    </article>
  );
}
