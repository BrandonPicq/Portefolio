// src/pages/About.tsx
// Page À propos — Bio, Parcours & Univers personnel

import { Award, Briefcase, GraduationCap, Heart, HelpCircle, Terminal } from "lucide-react";
import { timeline } from "../data/timeline";
import type { TimelineType } from "../data/timeline";

const timelineIcons: Record<TimelineType, typeof Award> = {
  education: GraduationCap,
  certification: Award,
  work: Briefcase,
};

export default function About() {
  return (
    <div className="space-y-16 animate-fadeIn max-w-4xl mx-auto pb-16">
      {/* En-tête */}
      <section className="py-8 sm:py-12 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold border border-vermillon/20 dark:border-gold/30">
          <Terminal size={13} />
          <span>PROFIL & EXPÉRIENCE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-editorial dark:font-sans text-ink dark:text-white">
          À propos de moi
        </h1>
        <p className="text-sm sm:text-base text-ink-stoned dark:text-muted max-w-xl mx-auto leading-relaxed">
          Développeur web passionné par l'architecture logicielle, les interfaces soignées et l'écosystème IA.
        </p>
      </section>

      {/* Bio Section */}
      <section className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-6 sm:p-10 shadow-sm space-y-5">
        <div className="flex items-center gap-3 border-b border-[#d8d2c2] dark:border-border pb-3">
          <div className="p-2 bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold rounded-xl">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold font-editorial dark:font-sans text-ink dark:text-white">Qui suis-je ?</h2>
        </div>
        <div className="space-y-4 text-ink-stoned dark:text-muted-light leading-relaxed text-sm sm:text-base">
          <p>
            Curieux et passionné par la technologie depuis mon enfance, j'ai développé au fil des années une forte appétence
            pour la conception d'architectures logicielles modernes, performantes et agréables à utiliser.
          </p>
          <p>
            Actuellement en formation à la{" "}
            <strong className="text-vermillon dark:text-gold font-bold">Web@cadémie by Epitech</strong>, je construis des
            applications web complètes (React 19, TypeScript, Spring Boot, Express, Docker) en appliquant des standards
            élevés de qualité de code et d'expérience utilisateur.
          </p>
          <p>
            Mon approche allie rigueur backend (sécurisation JWT, validation stricte, modélisation relationnelle & NoSQL) et
            sensibilité frontend (design systems soignés, fluidité et interactions soignées).
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[#d8d2c2] dark:border-border pb-3">
          <div className="p-2 bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold rounded-xl">
            <Terminal className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold font-editorial dark:font-sans text-ink dark:text-white">Parcours & Étapes Clés</h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#d8d2c2] dark:border-border space-y-8 ml-3">
          {timeline.map((item, index) => {
            const Icon = timelineIcons[item.type];
            return (
              <div key={index} className="relative group">
                {/* Icône sur la timeline */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-8 h-8 rounded-full bg-paper-snow dark:bg-surface-card border-2 border-vermillon dark:border-gold flex items-center justify-center text-vermillon dark:text-gold shadow-sm group-hover:scale-110 transition-transform">
                  <Icon size={14} />
                </div>

                {/* Card de l'étape */}
                <div className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-6 shadow-sm hover:border-vermillon/40 dark:hover:border-gold/40 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-bold font-editorial dark:font-sans text-ink dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-vermillon dark:text-gold bg-vermillon/10 dark:bg-gold/10 px-2.5 py-0.5 rounded-full w-fit">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-ink-sepia dark:text-muted mb-3">{item.subtitle}</p>
                  <p className="text-xs sm:text-sm text-ink-stoned dark:text-muted-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] font-mono bg-paper-carton/60 dark:bg-surface-elevated border border-[#d8d2c2] dark:border-border rounded-md text-ink-stoned dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Univers associatif & passions */}
      <section className="bg-paper-snow dark:bg-surface-card border border-[#d8d2c2] dark:border-border rounded-2xl p-6 sm:p-10 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-[#d8d2c2] dark:border-border pb-3">
          <div className="p-2 bg-vermillon/10 text-vermillon dark:bg-gold/10 dark:text-gold rounded-xl">
            <Heart className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold font-editorial dark:font-sans text-ink dark:text-white">En dehors du code</h2>
        </div>

        <p className="text-sm sm:text-base text-ink-stoned dark:text-muted-light leading-relaxed">
          Grand passionné par la <strong className="text-vermillon dark:text-gold font-semibold">culture japonaise</strong> et
          l'animation, je suis membre actif de l'association <strong className="text-vermillon dark:text-gold font-semibold">Epitanime</strong>,
          où je participe à l'organisation de conventions et d'événements culturels. Cet univers nourrit ma curiosité et ma créativité au quotidien.
        </p>
      </section>
    </div>
  );
}
