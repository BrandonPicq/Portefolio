import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import FeaturedDemos from "../components/home/FeaturedDemos";
import SkillsSection from "../components/home/SkillsSection";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedDemos />
      <SkillsSection />
      <section className="contact-section" aria-labelledby="contact-title">
        <h2 id="contact-title">Vous avez un projet<br />ou une opportunité ?</h2>
        <div>
          <p>Je recherche une alternance en développement full-stack, à commencer dès que possible.</p>
          <a className="folio-link" href="mailto:brandon@epitech.eu">Échangeons par email <ArrowUpRight className="accent-arrow" aria-hidden="true" /></a>
          <Link className="folio-link" to="/about">Découvrir mon parcours <ArrowUpRight className="accent-arrow" aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
}
