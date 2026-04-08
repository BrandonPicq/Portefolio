// src/pages/About.tsx
// Page À propos — Bio, Timeline, Passions

import { Award, Briefcase, GraduationCap, Heart, Sparkles, Terminal } from "lucide-react";
import { timeline } from "../data/timeline";
import type { TimelineType } from "../data/timeline";

const timelineIcons: Record<TimelineType, { icon: typeof Award; color: string }> = {
  education: { icon: GraduationCap, color: "text-blue-400" },
  certification: { icon: Award, color: "text-amber-400" },
  work: { icon: Briefcase, color: "text-purple-400" },
};

export default function About() {
  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Header */}
      <section className="py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
          À propos
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto">Parcours, expériences et passions</p>
      </section>

      {/* Bio Section */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-glass-light backdrop-blur-glass-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-glass-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Qui suis-je ?</h2>
          </div>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Curieux depuis toujours, je vis avec la technologie depuis mon enfance — des premiers PCs de l'école jusqu'à l'apprentissage
              du code. Je découvre avec entrain tout ce qui touche à ce domaine.
            </p>
            <p>
              Aujourd'hui en formation à la <span className="text-white/90 font-medium">Web@cadémie by Epitech</span>, je construis des
              applications web modernes et scalables tout en perfectionnant mes compétences full-stack.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Terminal className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white">Parcours</h2>
        </div>

        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-16">
                {/* Icône sur la ligne */}
                <div className="absolute left-0 top-1 w-12 h-12 rounded-xl bg-glass-medium backdrop-blur-glass border border-white/10 flex items-center justify-center shadow-glass z-10">
                  {(() => {
                    const { icon: Icon, color } = timelineIcons[item.type];
                    return <Icon className={`w-5 h-5 ${color}`} />;
                  })()}
                </div>

                {/* Card */}
                <div className="bg-glass-light backdrop-blur-glass-xl border border-white/10 rounded-2xl p-6 shadow-glass-lg hover:bg-glass-medium hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="text-sm text-white/40 whitespace-nowrap">{item.date}</span>
                  </div>
                  <p className="text-white/60 text-sm mb-3">{item.subtitle}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/60">
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
          <div className="p-2 bg-pink-500/20 rounded-lg">
            <Heart className="w-5 h-5 text-pink-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white">En dehors du code</h2>
        </div>

        <div className="bg-glass-light backdrop-blur-glass-xl border border-white/10 rounded-2xl p-8 shadow-glass-lg">
          <p className="text-white/70 leading-relaxed">
            Passionné par la <span className="text-white/90 font-medium">culture japonaise</span>, je suis membre d'
            <span className="text-white/90 font-medium">Epitanime</span>, une association spécialisée dans la création d'événements autour
            de celle-ci. Anime, manga, conventions — c'est un univers qui me nourrit autant que le code.
          </p>
        </div>
      </section>
    </div>
  );
}
