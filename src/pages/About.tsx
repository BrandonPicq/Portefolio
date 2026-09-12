import { timeline } from "../data/timeline";
import "./pages.css";

export default function About() {
  return (
    <div className="about-page">
      <header className="page-heading">
        <h1>Derrière les projets.</h1>
        <p>Développement web, architecture logicielle et curiosité au quotidien.</p>
      </header>

      <section className="about-section content-section">
        <h2>À propos</h2>
        <div className="about-prose">
          <p className="about-intro">
            Curieux et passionné par la technologie depuis mon enfance, j'ai développé au fil des années une forte appétence
            pour la conception d'architectures logicielles modernes, performantes et agréables à utiliser.
          </p>
          <p>
            Actuellement en formation à la <strong>Web@cadémie by Epitech</strong>, je construis des
            applications web complètes (React 19, TypeScript, Spring Boot, Express, Docker) en appliquant des standards
            élevés de qualité de code et d'expérience utilisateur.
          </p>
          <p>
            Mon approche allie rigueur backend (sécurisation JWT, validation stricte, modélisation relationnelle & NoSQL) et
            sensibilité frontend (design systems soignés, fluidité et interactions soignées).
          </p>
        </div>
      </section>

      <section className="about-timeline-section content-section" aria-labelledby="timeline-title">
        <h2 id="timeline-title">Parcours & expériences</h2>
        <ol className="about-timeline">
          {timeline.map((item) => (
            <li key={`${item.date}-${item.title}`} className="about-timeline-entry">
              <p className="about-date">{item.date}</p>
              <div className="about-timeline-content">
                <h3>{item.title}</h3>
                <p className="about-timeline-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
                <ul className="about-tag-list" aria-label="Compétences et outils">
                  {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-section content-section">
        <h2>En dehors du code</h2>
        <div className="about-prose">
          <p>
            Grand passionné par la <strong>culture japonaise</strong> et l'animation, je suis membre actif de l'association{" "}
            <strong>Epitanime</strong>, où je participe à l'organisation de conventions et d'événements culturels.
            Cet univers nourrit ma curiosité et ma créativité au quotidien.
          </p>
        </div>
      </section>
    </div>
  );
}
