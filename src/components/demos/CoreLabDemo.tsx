import { useState } from "react";
import { CheckCircle2, Circle, Award, BookOpen } from "lucide-react";
import MockupFrame from "./MockupFrame";

interface Course {
  id: string;
  name: string;
  category: string;
  iconBg: string;
  meta: string;
  progress: number;
  progressColor: string;
  badge: string;
  badgeCls: string;
  lessons: {
    id: string;
    title: string;
    duration: string;
    completed: boolean;
    content: string;
  }[];
}

const initialCourses: Course[] = [
  {
    id: "mern",
    name: "Informatique — Stack MERN & MongoDB",
    category: "Informatique",
    iconBg: "bg-[#092841]",
    meta: "Prochaine activité : Contrôleurs REST · dans 2 jours",
    progress: 75,
    progressColor: "bg-[#092841]",
    badge: "75%",
    badgeCls: "bg-[#092841]/15 text-[#092841]",
    lessons: [
      {
        id: "l1",
        title: "1. Modélisation des Schémas Mongoose & Validation",
        duration: "15 min",
        completed: true,
        content: "Définition des schémas NoSQL sous MongoDB 7 avec Mongoose. Configuration des types stricts, indexation des clés et middlewares pre/post save.",
      },
      {
        id: "l2",
        title: "2. Architecture des Contrôleurs & Routes Express",
        duration: "20 min",
        completed: true,
        content: "Création des routes REST découplées avec gestion centralisée des erreurs et async handlers pour éviter les crashes non interceptés.",
      },
      {
        id: "l3",
        title: "3. Authentification JWT & Sécurisation des Rôles",
        duration: "25 min",
        completed: true,
        content: "Mise en place des tokens d'authentification Bearer JWT (24h) et middleware de contrôle d'accès pour les rôles 'admin' et 'student'.",
      },
      {
        id: "l4",
        title: "4. Déploiement & Conteneurisation Docker Compose",
        duration: "30 min",
        completed: false,
        content: "Orchestration multi-conteneurs : conteneur client React (port 3000), conteneur API Node.js (port 4242) et conteneur MongoDB 7 (port 27017).",
      },
    ],
  },
  {
    id: "math",
    name: "Mathématiques — Équations du 2nd degré",
    category: "Sciences",
    iconBg: "bg-[#44727d]",
    meta: "Activité à valider : Calcul du discriminant Δ",
    progress: 50,
    progressColor: "bg-[#44727d]",
    badge: "En cours",
    badgeCls: "bg-[#44727d]/15 text-[#44727d]",
    lessons: [
      {
        id: "m1",
        title: "1. Forme canonique et discriminant Δ = b² - 4ac",
        duration: "20 min",
        completed: true,
        content: "Résolution pas à pas des équations polynomiales du second degré ax² + bx + c = 0 selon le signe du discriminant.",
      },
      {
        id: "m2",
        title: "2. Factorisation et racines réelles",
        duration: "25 min",
        completed: false,
        content: "Étude du signe et factorisation a(x - x₁)(x - x₂) sur l'ensemble des réels.",
      },
    ],
  },
  {
    id: "phys",
    name: "Physique-Chimie — Quiz Optique & Réfraction",
    category: "Sciences",
    iconBg: "bg-[#483c26]",
    meta: "Quiz à terminer avant vendredi",
    progress: 33,
    progressColor: "bg-[#483c26]",
    badge: "En retard",
    badgeCls: "bg-[#5b0505]/15 text-[#5b0505]",
    lessons: [
      {
        id: "p1",
        title: "1. Lois de Snell-Descartes pour la réfraction",
        duration: "15 min",
        completed: true,
        content: "Calcul de l'angle de réfraction n₁·sin(i₁) = n₂·sin(i₂) et réflexion totale.",
      },
      {
        id: "p2",
        title: "2. Lentilles minces convergentes et divergentes",
        duration: "20 min",
        completed: false,
        content: "Formules de conjugaison et grandissement optique.",
      },
      {
        id: "p3",
        title: "3. Quiz final d'évaluation",
        duration: "15 min",
        completed: false,
        content: "Évaluation de fin de module avec feedback immédiat sur les compétences validées.",
      },
    ],
  },
];

export default function CoreLabDemo() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [activeCourseId, setActiveCourseId] = useState<string>("mern");
  const [activeLessonId, setActiveLessonId] = useState<string>("l4");
  const [userRole, setUserRole] = useState<"student" | "teacher">("student");
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<boolean | null>(null);

  const activeCourse = courses.find((c) => c.id === activeCourseId) || courses[0];
  const activeLesson = activeCourse.lessons.find((l) => l.id === activeLessonId) || activeCourse.lessons[0];

  const toggleLesson = (courseId: string, lessonId: string) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id === courseId) {
          const updatedLessons = c.lessons.map((l) =>
            l.id === lessonId ? { ...l, completed: !l.completed } : l
          );
          const completedCount = updatedLessons.filter((l) => l.completed).length;
          const newProgress = Math.round((completedCount / updatedLessons.length) * 100);
          return {
            ...c,
            lessons: updatedLessons,
            progress: newProgress,
            badge: `${newProgress}%`,
          };
        }
        return c;
      })
    );
  };

  const handleQuizSubmit = (answer: string) => {
    setQuizAnswer(answer);
    const isCorrect = answer === "27017";
    setQuizFeedback(isCorrect);
  };

  const handleReset = () => {
    setCourses(initialCourses);
    setActiveCourseId("mern");
    setActiveLessonId("l4");
    setUserRole("student");
    setQuizAnswer(null);
    setQuizFeedback(null);
  };

  return (
    <MockupFrame
      title="CoreLab LMS — Plateforme d'Apprentissage MERN"
      url="https://corelab.epitech.local/student/courses"
      badge="Design Authentique CoreLab LMS"
      onReset={handleReset}
      themeStyle="dark"
    >
      <div className="bg-[#d5d5d6] text-[#0d0d0d] min-h-[540px] font-sans flex flex-col justify-between selection:bg-[#092841]/20">
        {/* Navbar supérieure CoreLab (bg-nav / #092841) */}
        <div className="bg-[#092841] text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-[#0d0d0d]/40 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#44727d] flex items-center justify-center font-bold text-white text-xs shadow-inner">
              CL
            </div>
            <div>
              <h3 className="font-bold text-sm leading-none font-serif tracking-wide">CoreLab LMS</h3>
              <span className="text-[10px] text-[#cfb2bc] font-mono">Plateforme Éducative MERN</span>
            </div>
          </div>

          {/* Switch Rôle Étudiant / Enseignant */}
          <div className="flex items-center gap-2">
            <div className="bg-black/30 p-0.5 rounded-lg border border-white/10 flex text-[11px] font-medium">
              <button
                onClick={() => setUserRole("student")}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  userRole === "student"
                    ? "bg-[#44727d] text-white font-bold shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Espace Élève (Lina)
              </button>
              <button
                onClick={() => setUserRole("teacher")}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  userRole === "teacher"
                    ? "bg-[#5b0505] text-white font-bold shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Espace Formateur
              </button>
            </div>
          </div>
        </div>

        {/* Corps principal */}
        <div className="p-4 sm:p-6 flex-1 space-y-5">
          {userRole === "student" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Colonne Gauche : Mes Cours & Progression */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#092841]/20 pb-2">
                  <h4 className="text-sm font-bold text-[#092841] font-serif uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen size={16} /> Mes Formations ({courses.length})
                  </h4>
                  <span className="text-[11px] font-mono text-[#483c26]">Session 2026</span>
                </div>

                <div className="space-y-2.5">
                  {courses.map((course) => {
                    const isSelected = course.id === activeCourseId;
                    return (
                      <div
                        key={course.id}
                        onClick={() => {
                          setActiveCourseId(course.id);
                          setActiveLessonId(course.lessons[0].id);
                        }}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer bg-white ${
                          isSelected
                            ? "border-[#092841] ring-2 ring-[#092841]/20 shadow-md"
                            : "border-black/10 hover:border-[#092841]/40 shadow-sm"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${course.iconBg}`} />
                            <h5 className="font-bold text-xs text-[#0d0d0d]">{course.name}</h5>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${course.badgeCls}`}>
                            {course.badge}
                          </span>
                        </div>

                        <p className="text-[11px] text-[#483c26] mb-2">{course.meta}</p>

                        {/* Barre de jauge de progression CoreLab */}
                        <div className="w-full bg-[#d5d5d6] h-2 rounded-full overflow-hidden">
                          <div
                            className={`${course.iconBg} h-full transition-all duration-500 rounded-full`}
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Colonne Droite : Lecteur de leçon / Quiz interactif */}
              <div className="lg:col-span-7 bg-white border border-[#092841]/20 rounded-2xl p-5 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#092841]/15 mb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase bg-[#092841]/10 text-[#092841] px-2 py-0.5 rounded font-bold">
                        {activeCourse.name}
                      </span>
                      <h3 className="text-base font-bold text-[#0d0d0d] mt-1 font-serif">
                        {activeLesson.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#44727d] bg-[#44727d]/10 px-2.5 py-1 rounded-lg">
                      {activeLesson.duration}
                    </span>
                  </div>

                  {/* Sommaire des chapitres de ce cours */}
                  <div className="mb-4">
                    <div className="text-[11px] font-mono text-[#483c26] uppercase font-bold mb-2">
                      Chapitres du module :
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {activeCourse.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLessonId(lesson.id)}
                          className={`p-2 rounded-lg border text-left text-[11px] flex items-center justify-between gap-1.5 transition-all cursor-pointer ${
                            lesson.id === activeLessonId
                              ? "bg-[#092841] text-white border-[#092841]"
                              : "bg-[#f7f8f9] border-black/10 text-[#0d0d0d] hover:bg-slate-100"
                          }`}
                        >
                          <span className="truncate">{lesson.title}</span>
                          {lesson.completed ? (
                            <CheckCircle2 size={13} className={lesson.id === activeLessonId ? "text-emerald-300" : "text-emerald-600"} />
                          ) : (
                            <Circle size={13} className="text-slate-400" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contenu pédagogique de la leçon */}
                  <div className="p-3.5 rounded-xl bg-[#f7f8f9] border border-black/10 text-xs leading-relaxed space-y-2 text-[#0d0d0d]">
                    <p className="font-medium">{activeLesson.content}</p>

                    {/* Quiz interactif de validation */}
                    <div className="mt-3 pt-3 border-t border-black/10">
                      <p className="font-bold text-[11px] text-[#092841] mb-2 flex items-center gap-1">
                        <Award size={13} /> Quiz rapide : Sur quel port MongoDB écoute-t-il par défaut dans Docker ?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["3000", "4242", "27017", "8080"].map((port) => (
                          <button
                            key={port}
                            onClick={() => handleQuizSubmit(port)}
                            className={`px-3 py-1 rounded-md text-xs font-mono border transition-all cursor-pointer ${
                              quizAnswer === port
                                ? port === "27017"
                                  ? "bg-emerald-600 text-white border-emerald-600 font-bold"
                                  : "bg-[#5b0505] text-white border-[#5b0505] font-bold"
                                : "bg-white border-black/15 text-[#0d0d0d] hover:border-[#092841]"
                            }`}
                          >
                            Port {port}
                          </button>
                        ))}
                      </div>

                      {quizFeedback !== null && (
                        <div className="mt-2 text-[11px] font-bold font-mono">
                          {quizFeedback ? (
                            <span className="text-emerald-700">✔ Correct ! MongoDB écoute sur le port 27017.</span>
                          ) : (
                            <span className="text-[#5b0505]">✖ Mauvaise réponse. Indice : c'est le port NoSQL standard.</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Barre d'action de complétion */}
                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#483c26]">
                    Progression du cours : <strong className="text-[#092841]">{activeCourse.progress}%</strong>
                  </span>
                  <button
                    onClick={() => toggleLesson(activeCourse.id, activeLesson.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeLesson.completed
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-[#092841] hover:bg-[#44727d] text-white shadow"
                    }`}
                  >
                    {activeLesson.completed ? (
                      <>
                        <CheckCircle2 size={14} /> Leçon validée
                      </>
                    ) : (
                      <>Valider cette leçon</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Vue Espace Formateur (Teacher dashboard authentique de CoreLab) */
            <div className="bg-white border border-[#092841]/20 rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div>
                  <h4 className="text-base font-bold font-serif text-[#092841]">Tableau de Bord Pédagogique (Enseignant)</h4>
                  <p className="text-xs text-[#483c26]">Suivi de la promotion Web@cadémie & validation des compétences</p>
                </div>
                <span className="px-3 py-1 bg-[#5b0505]/10 text-[#5b0505] font-mono text-xs font-bold rounded-full">
                  24 Élèves Inscrits
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-[#f7f8f9] border border-black/10 space-y-1">
                  <div className="text-[11px] font-mono uppercase text-[#483c26]">Moyenne Promotion</div>
                  <div className="text-2xl font-bold font-serif text-[#092841]">14,2 / 20</div>
                  <div className="text-[10px] text-emerald-700 font-bold">+1,4 pt vs mois dernier</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f7f8f9] border border-black/10 space-y-1">
                  <div className="text-[11px] font-mono uppercase text-[#483c26]">Taux de Rendu TP MERN</div>
                  <div className="text-2xl font-bold font-serif text-[#44727d]">91,6 %</div>
                  <div className="text-[10px] text-[#483c26]">22 / 24 élèves ont rendu</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f7f8f9] border border-black/10 space-y-1">
                  <div className="text-[11px] font-mono uppercase text-[#483c26]">Comptes Démo Test</div>
                  <div className="text-xs font-mono text-[#0d0d0d] font-bold">admincore / linadev</div>
                  <div className="text-[10px] text-[#5b0505]">Auth JWT validée</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CoreLab */}
        <div className="bg-[#092841] text-[#cfb2bc] px-4 sm:px-6 py-2.5 text-center text-[10px] font-mono flex items-center justify-between border-t border-[#0d0d0d]/40">
          <span>CoreLab LMS — Système de Gestion d'Apprentissage MERN</span>
          <span>MongoDB 7.0 • Express • React • Node.js</span>
        </div>
      </div>
    </MockupFrame>
  );
}
