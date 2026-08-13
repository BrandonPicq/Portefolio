import { ArrowRight, Sparkles, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "../icons/SocialIcons";

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-20 text-center relative max-w-4xl mx-auto space-y-6">
      {/* Badge de statut / disponibilité */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-vermillon/10 text-vermillon border border-vermillon/25 dark:bg-gold/10 dark:text-gold dark:border-gold/30 shadow-sm animate-fadeIn">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Développeur Full-Stack • Web@cadémie by Epitech</span>
      </div>

      {/* Titre Principal Editorial & Tech */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink dark:text-white leading-[1.08]">
          <span className="font-editorial italic font-normal block sm:inline">Créateur d'</span>
          <span className="text-accent-gradient font-black">Applications Web</span>
          <span className="block mt-1 font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl">
            Modernes & Résilientes
          </span>
        </h1>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-ink-stoned dark:text-muted max-w-2xl mx-auto leading-relaxed">
        Je conçois des architectures découplées, des interfaces interactives soignées et des APIs performantes.
        <span className="block mt-1 text-sm font-mono text-ink-sepia dark:text-muted-dark">
          React 19 • TypeScript • Spring Boot • Node.js • Docker • n8n IA
        </span>
      </p>

      {/* Actions principales */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <a
          href="#featured-demos"
          className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-vermillon text-white hover:bg-vermillon-titled dark:bg-gold dark:text-black dark:hover:bg-gold-light transition-all duration-300 shadow-md hover:scale-105 flex items-center gap-2 cursor-pointer"
        >
          <Sparkles size={16} />
          Tester les démos en direct
          <ArrowRight size={16} />
        </a>

        <Link
          to="/projects"
          className="px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm border border-[#d8d2c2] dark:border-border bg-paper-snow dark:bg-surface-elevated text-ink dark:text-white hover:border-vermillon dark:hover:border-gold transition-all duration-300 hover:scale-105 shadow-sm flex items-center gap-2"
        >
          <Layers size={16} />
          Tous les projets (9)
        </Link>

        <a
          href="https://github.com/BrandonPicq"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm border border-[#d8d2c2] dark:border-border bg-paper-snow dark:bg-surface-elevated text-ink-stoned dark:text-muted hover:text-ink dark:hover:text-white transition-all duration-300 hover:scale-105 shadow-sm flex items-center gap-2"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
      </div>

      {/* Mini-statistiques */}
      <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-left">
        <div className="p-3 rounded-xl border border-[#d8d2c2] dark:border-border bg-paper-snow/70 dark:bg-surface-card/60">
          <div className="text-lg font-bold text-vermillon dark:text-gold font-mono">9+</div>
          <div className="text-[11px] text-ink-stoned dark:text-muted">Projets Développés</div>
        </div>
        <div className="p-3 rounded-xl border border-[#d8d2c2] dark:border-border bg-paper-snow/70 dark:bg-surface-card/60">
          <div className="text-lg font-bold text-vermillon dark:text-gold font-mono">30+</div>
          <div className="text-[11px] text-ink-stoned dark:text-muted">Endpoints REST</div>
        </div>
        <div className="p-3 rounded-xl border border-[#d8d2c2] dark:border-border bg-paper-snow/70 dark:bg-surface-card/60">
          <div className="text-lg font-bold text-vermillon dark:text-gold font-mono">100%</div>
          <div className="text-[11px] text-ink-stoned dark:text-muted">TypeScript & Docker</div>
        </div>
        <div className="p-3 rounded-xl border border-[#d8d2c2] dark:border-border bg-paper-snow/70 dark:bg-surface-card/60">
          <div className="text-lg font-bold text-vermillon dark:text-gold font-mono">2026</div>
          <div className="text-[11px] text-ink-stoned dark:text-muted">Stack Récente (React 19)</div>
        </div>
      </div>
    </section>
  );
}
