// src/components/home/HeroSection.tsx
// Section Hero avec titre, CTAs et scroll indicator

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(false);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setScrollIndicatorVisible(true);
    }, 1500);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicatorHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(showTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-32 text-center relative">
      {/* Cercle décoratif supplémentaire centré */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Titre principal avec gradient */}
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
          Hey, je suis Brandon
          <span className="block mt-2 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Développeur Full-Stack</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Passionné par la création d'applications web modernes et scalables.
          <span className="block mt-2 text-white/50 text-lg">React • TypeScript • Spring Boot • Laravel</span>
        </p>

        {/* Call-to-Actions */}
        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <a
            href="#projects"
            className="group px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-glass border border-white/30 hover:border-white/50 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 shadow-glass-lg hover:shadow-glass-lg flex items-center gap-2"
          >
            Voir mes projets
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="https://github.com/BrandonPicq"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-glass-light hover:bg-glass-medium backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Cliquable */}
      {!scrollIndicatorHidden && (
        <button
          onClick={() => {
            document.getElementById("skills-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-opacity duration-700 cursor-pointer group ${
            scrollIndicatorVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll to skills section"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/40 group-hover:text-white/60 text-sm transition-colors">Scroll</span>
            <svg
              className="w-6 h-6 text-white/40 group-hover:text-white/60 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      )}
    </section>
  );
}
