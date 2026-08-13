import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { GithubIcon } from "./icons/SocialIcons";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/projects", label: "Projets & Démos" },
  { to: "/about", label: "À propos" },
];

export default function Sidebar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 border-b bg-paper/85 dark:bg-surface/85 border-[#d8d2c2] dark:border-border">
      <nav className="container mx-auto px-6 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo / Nom de marque */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-ink dark:text-white text-base sm:text-lg"
          >
            <span className="w-8 h-8 rounded-lg bg-vermillon text-white dark:bg-gold dark:text-black flex items-center justify-center font-editorial font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
              BP
            </span>
            <div className="flex flex-col">
              <span className="font-editorial dark:font-sans font-bold leading-none">Brandon Picq</span>
              <span className="text-[10px] font-mono text-ink-sepia dark:text-muted mt-0.5 tracking-wider uppercase">
                Full-Stack Dev
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-vermillon/10 text-vermillon border border-vermillon/30 dark:bg-gold/10 dark:text-gold dark:border-gold/30 shadow-sm"
                      : "text-ink-stoned dark:text-muted hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions & Switch de Thème */}
          <div className="flex items-center gap-2.5">
            {/* Bouton GitHub */}
            <a
              href="https://github.com/BrandonPicq"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-ink-stoned dark:text-muted hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              title="Profil GitHub"
            >
              <GithubIcon size={18} />
            </a>

            {/* Switch Thème Clair / Sombre */}
            <button
              onClick={toggleTheme}
              title={theme === "dark" ? "Passer en mode Presse Éditorial (Clair)" : "Passer en mode Sombre Premium"}
              className="p-2 rounded-lg border border-[#d8d2c2] dark:border-border bg-paper-snow dark:bg-surface-elevated text-ink-stoned dark:text-gold hover:scale-105 transition-all shadow-sm cursor-pointer flex items-center gap-1 text-xs"
            >
              {theme === "dark" ? (
                <Sun size={17} className="text-gold" />
              ) : (
                <Moon size={17} className="text-vermillon" />
              )}
            </button>

            {/* Menu burger mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-ink dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Déroulant Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-[#d8d2c2] dark:border-border mt-3 space-y-1.5 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? "bg-vermillon/10 text-vermillon font-bold dark:bg-gold/10 dark:text-gold"
                      : "text-ink-stoned dark:text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
