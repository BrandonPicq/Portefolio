import { cvData } from "../data/cv";
import "./cv-ats.css";

export default function CVAts() {
  const { identity, skills, experiences, projects, education, certifications, languages } = cvData;

  return (
    <div className="cv-page-wrapper cv-ats-wrapper">
      <article className="cv-sheet cv-ats">
        <h1>{identity.fullName}</h1>
        <p className="cv-ats-role">{identity.role}</p>
        <p>{identity.subrole}</p>
        <p>{identity.availability} — {identity.rhythm}</p>
        <p>
          <a href={`mailto:${identity.email}`}>{identity.email}</a>
          {" | "}<a href={`tel:${identity.phone}`}>{identity.phoneDisplay}</a>
        </p>
        <p>{identity.age} ans — {identity.location}</p>
        <p>
          Portfolio : <a href={identity.portfolioUrl}>{identity.portfolioUrl}</a>
          {" | "}GitHub : <a href={identity.github}>{identity.githubDisplay}</a>
        </p>

        <section>
          <h2>Profil</h2>
          <p>{identity.headline}</p>
        </section>
        <section>
          <h2>Compétences techniques</h2>
          {skills.map(skill => (
            <p key={skill.category}><strong>{skill.category} : </strong>{skill.skills.join(", ")}</p>
          ))}
        </section>
        <section>
          <h2>Expériences professionnelles</h2>
          {experiences.map(experience => (
            <div className="cv-ats-entry" key={`${experience.company}-${experience.role}`}>
              <h3>{experience.role}</h3>
              <p>{experience.company} — {experience.period} — {experience.location}</p>
              <ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
              <p><strong>Compétences : </strong>{experience.tags.join(", ")}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Projets réalisés</h2>
          {projects.map(project => (
            <div className="cv-ats-entry" key={project.id}>
              <h3>{project.title} — {project.subtitle}</h3>
              <p>{project.context} — {project.period}</p>
              <p>{project.description}</p>
              <ul>{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
              <p><strong>Technologies : </strong>{project.tags.join(", ")}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Formations</h2>
          {education.map(course => (
            <div className="cv-ats-entry" key={course.degree}>
              <h3>{course.degree}</h3>
              <p>{course.institution} — {course.period}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Certifications et langues</h2>
          {certifications.map(certification => (
            <p key={certification.title}>{certification.title} — {certification.date}</p>
          ))}
          {languages.map(language => (
            <p key={language.language}>{language.language} : {language.level}{language.score ? ` — ${language.score}` : ""}</p>
          ))}
        </section>
        <section>
          <h2>Engagement associatif</h2>
          <p>{cvData.interests[0]}</p>
        </section>
      </article>
    </div>
  );
}
