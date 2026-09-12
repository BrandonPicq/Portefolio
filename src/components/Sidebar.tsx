import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { galleryLabel, galleryProjects, getGalleryProject } from "../data/gallery";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const selected = pathname === "/"
    ? getGalleryProject(searchParams.get("project")).id
    : pathname.startsWith("/projects/") ? pathname.split("/")[2] : null;
  function closeMenu() {
    setMenuOpen(false);
    if (menuOpen) document.getElementById("main-content")?.focus({ preventScroll: true });
  }

  return (
    <aside className="gallery-sidebar" onKeyDown={(event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("navigation-toggle")?.focus();
      }
    }}>
      <div className="sidebar-masthead">
        <Link className="sidebar-identity" to="/" onClick={closeMenu}>
          <span>Brandon Picq</span>
          <span className="sidebar-role">Développeur full-stack</span>
        </Link>
        <button id="navigation-toggle" className="mobile-menu-button" type="button"
          aria-label={menuOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
          aria-expanded={menuOpen} aria-controls="gallery-navigation"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div id="gallery-navigation" className={`sidebar-navigation${menuOpen ? " is-open" : ""}`}>
        <nav className="sidebar-projects" aria-label="Aperçus des projets">
          {galleryProjects.map((project) => (
            <Link key={project.id} to={`/?project=${project.id}`}
              className={`sidebar-project${selected === project.id ? " is-active" : ""}`}
              aria-current={selected === project.id ? "true" : undefined}
              onClick={closeMenu} preventScrollReset>
              <span>{galleryLabel(project.id, project.title)}</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <nav className="sidebar-secondary" aria-label="Navigation principale">
          <Link to="/projects" onClick={closeMenu} aria-current={pathname === "/projects" ? "page" : undefined}>Tous les projets</Link>
          <Link to="/about" onClick={closeMenu} aria-current={pathname === "/about" ? "page" : undefined}>Parcours</Link>
          <Link to="/cv" onClick={closeMenu} aria-current={pathname === "/cv" ? "page" : undefined}>Curriculum Vitae</Link>
        </nav>
        <div className="sidebar-contact">
          <a href="mailto:brandon@epitech.eu">Contact <ArrowUpRight aria-hidden="true" /></a>
          <a href="https://github.com/BrandonPicq" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </aside>
  );
}
