import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { galleryLabel, galleryProjects, getGalleryProject } from "../../data/gallery";
import ProjectDemoRenderer from "../demos/ProjectDemoRenderer";

export default function FeaturedDemos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const project = getGalleryProject(searchParams.get("project"));
  const index = galleryProjects.findIndex((item) => item.id === project.id);
  const previous = galleryProjects[(index + galleryProjects.length - 1) % galleryProjects.length];
  const next = galleryProjects[(index + 1) % galleryProjects.length];
  const suggestions = galleryProjects.filter((item) => item.id !== project.id).slice(0, 2);

  function selectProject(id: string) {
    setSearchParams((params) => {
      params.set("project", id);
      return params;
    }, { preventScrollReset: true });
  }

  return (
    <section id="featured-demos" className="featured-gallery" aria-labelledby="active-project-title">
      <div className="preview-heading">
        <div className="preview-title-group">
          <h2 id="active-project-title">{galleryLabel(project.id, project.title)}</h2>
          <span className="preview-kind">Aperçu interactif</span>
        </div>
        <Link className="folio-link project-detail-link" to={`/projects/${project.id}`}>
          Voir le projet <ArrowUpRight className="accent-arrow" aria-hidden="true" />
        </Link>
      </div>
      <p className="sr-only" role="status" aria-atomic="true">Aperçu de {project.title} affiché.</p>
      <div className="demo-stage">
        <ProjectDemoRenderer key={project.id} project={project} />
        <div className="preview-arrows">
          <button className="folio-icon-button" type="button" onClick={() => selectProject(previous.id)}
            aria-label={`Projet précédent : ${galleryLabel(previous.id, previous.title)}`}>
            <ArrowLeft aria-hidden="true" />
          </button>
          <button className="folio-icon-button" type="button" onClick={() => selectProject(next.id)}
            aria-label={`Projet suivant : ${galleryLabel(next.id, next.title)}`}>
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <nav className="next-projects" aria-label="La suite à explorer">
        <span>La suite à explorer</span>
        <div>
          {suggestions.map((item) => (
            <Link key={item.id} to={`/?project=${item.id}`} preventScrollReset>
              {galleryLabel(item.id, item.title)} <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
