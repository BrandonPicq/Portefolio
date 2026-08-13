// src/pages/Home.tsx
// Page d'accueil interactive — Hero, Banc d'essai interactif, Compétences et Contact

import { Mail, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import FeaturedDemos from "../components/home/FeaturedDemos";
import SkillsSection from "../components/home/SkillsSection";

export default function Home() {
  return (
    <div className="space-y-16 animate-fadeIn pb-12">
      {/* 1. Hero Principal */}
      <HeroSection />

      {/* 2. Démos Interactives & Banc d'Essai */}
      <FeaturedDemos />

      {/* 3. Compétences & Stack */}
      <SkillsSection />

      {/* 4. Section Appel à l'Action & Contact */}
      <section className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold border border-vermillon/20 dark:border-gold/30">
          <Sparkles size={13} />
          <span>COLLABORATION</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold font-editorial dark:font-sans text-ink dark:text-white">
          Vous avez un projet ou une opportunité ?
        </h2>

        <p className="text-sm sm:text-base text-ink-stoned dark:text-muted max-w-xl mx-auto leading-relaxed">
          Actuellement en recherche active d'opportunités en développement Full-Stack (Alternance ou CDI).
          N'hésitez pas à me contacter pour échanger sur vos besoins techniques.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="mailto:brandon@epitech.eu"
            className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-vermillon text-white hover:bg-vermillon-titled dark:bg-gold dark:text-black dark:hover:bg-gold-light transition-all duration-300 shadow-md hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <Mail size={16} />
            Me contacter par email
          </a>

          <Link
            to="/about"
            className="px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm border border-[#d8d2c2] dark:border-border bg-paper-carton dark:bg-surface-elevated text-ink dark:text-white hover:border-vermillon dark:hover:border-gold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Découvrir mon parcours
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
