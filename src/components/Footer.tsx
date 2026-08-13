import { Link } from "react-router-dom";
import { GithubIcon } from "./icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#d8d2c2] dark:border-border bg-paper-carton/40 dark:bg-surface/50 transition-colors">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-stoned dark:text-muted">
          <div className="flex items-center gap-3">
            <span className="font-editorial font-bold text-sm text-ink dark:text-white">Brandon Picq</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              À l'écoute de nouveaux projets
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/projects" className="hover:text-vermillon dark:hover:text-gold transition-colors">
              Projets & Démos
            </Link>
            <Link to="/about" className="hover:text-vermillon dark:hover:text-gold transition-colors">
              Parcours
            </Link>
            <a
              href="https://github.com/BrandonPicq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-ink dark:hover:text-white transition-colors"
            >
              <GithubIcon size={14} /> GitHub
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#d8d2c2]/60 dark:border-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-ink-sepia dark:text-muted-dark">
          <p>© 2026 Brandon Picq. Conçu avec React 19, TypeScript & Tailwind CSS.</p>
          <p className="font-mono text-[10px]">Dual-Theme: Presse Éditoriale ↔ Dark Premium</p>
        </div>
      </div>
    </footer>
  );
}
