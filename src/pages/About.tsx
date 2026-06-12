// src/pages/About.tsx
// Page À propos — Bio, Timeline, Passions — Design noir & or

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
    <div className="space-y-16 animate-fadeIn">
      {/* Header */}
      <section className="py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          À <span className="text-gold-gradient">propos</span>
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto">Parcours, expériences et passions</p>
      </section>

      {/* Bio Section */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-surface-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gold/10 rounded-lg">
              <HelpCircle className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Qui suis-je ?</h2>
          </div>
          <div className="space-y-4 text-muted-light leading-relaxed">
            <p>
              Curieux depuis toujours, je vis avec la technologie depuis mon enfance — des premiers PCs de l'école jusqu'à l'apprentissage
              du code. Je découvre avec entrain tout ce qui touche à ce domaine.
            </p>
            <p>
              Aujourd'hui en formation à la <span className="text-gold font-medium">Web@cadémie by Epitech</span>, je construis des
              applications web modernes et scalables tout en perfectionnant mes compétences full-stack.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-gold/10 rounded-lg">
            <Terminal className="w-5 h-5 text-gold" />
          </div>
          <h2 className="text-2xl font-semibold text-white">Parcours</h2>
        </div>

        <div className="relative">
          {/* Ligne verticale dorée */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-16">
                {/* Icône sur la ligne */}
                <div className="absolute left-0 top-1 w-12 h-12 rounded-xl bg-surface-card border border-border flex items-center justify-center shadow-card z-10">
                  {(() => {
                    const Icon = timelineIcons[item.type];
                    return <Icon className="w-5 h-5 text-gold" />;
                  })()}
                </div>

                {/* Card */}
                <div className="bg-surface-card border border-border rounded-2xl p-6 shadow-card hover:border-border-hover transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="text-sm text-muted-dark whitespace-nowrap">{item.date}</span>
                  </div>
                  <p className="text-muted text-sm mb-3">{item.subtitle}</p>
                  <p className="text-muted-light text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs bg-surface-elevated border border-border rounded-full text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section className="max-w-3xl mx-auto pb-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-gold/10 rounded-lg">
            <Heart className="w-5 h-5 text-gold" />
          </div>
          <h2 className="text-2xl font-semibold text-white">En dehors du code</h2>
        </div>

        <div className="bg-surface-card border border-border rounded-2xl p-8 shadow-card">
          <p className="text-muted-light leading-relaxed">
            Passionné par la <span className="text-gold font-medium">culture japonaise</span>, je suis membre d'
            <span className="text-gold font-medium">Epitanime</span>, une association spécialisée dans la création d'événements autour
            de celle-ci. Anime, manga, conventions — c'est un univers qui me nourrit autant que le code.
          </p>
        </div>
      </section>
    </div>
  );
}
