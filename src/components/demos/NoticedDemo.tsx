import { useState } from "react";
import { Search, MapPin, Bookmark, X, Check, ArrowRight } from "lucide-react";
import MockupFrame from "./MockupFrame";

interface JobOffer {
  id: number;
  title: string;
  company: string | null;
  location: string | null;
  contract_type: string | null;
  salary: string | null;
  description: string;
  tags: string[];
  created_at: string;
  source: string;
}

const realSampleJobs: JobOffer[] = [
  {
    id: 1,
    title: "Développeur Full-Stack React & Node.js",
    company: "PressTech Media",
    location: "Paris (75)",
    contract_type: "CDI",
    salary: "55 000 € - 65 000 € / an",
    description:
      "Nous recherchons un développeur Full-Stack expérimenté pour moderniser nos outils de publication et concevoir des applications web hautement résilientes. Vous participerez à la refonte de nos architectures front et back avec React 19, TypeScript et Express.",
    tags: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    created_at: "Aujourd'hui à 08:30",
    source: "NOT:ICED Direct",
  },
  {
    id: 2,
    title: "Ingénieur Frontend TypeScript / Tailwind CSS",
    company: "Gazette Numérique",
    location: "Lyon (69) • Remote",
    contract_type: "CDI",
    salary: "48 000 € - 54 000 € / an",
    description:
      "Au sein de notre pôle design & produit, vous créerez des composants d'interface inspirés de l'éditorial papier avec Tailwind CSS v4. Vous optimiserez la performance de chargement, l'accessibilité et la fluidité des micro-interactions.",
    tags: ["TypeScript", "Tailwind CSS v4", "Vite", "Performance", "UI/UX"],
    created_at: "Hier à 14:15",
    source: "Journal Emploi",
  },
  {
    id: 3,
    title: "Développeur Backend Spring Boot & Java 21",
    company: "CoreData Solutions",
    location: "Nantes (44) • Hybride",
    contract_type: "CDI",
    salary: "58 000 € - 68 000 € / an",
    description:
      "Rejoignez notre équipe d'ingénierie backend pour architecturer des APIs REST sécurisées avec Spring Boot 4 et Spring Security. Vous gérerez les flux de données transactionnels et le monitoring des microservices.",
    tags: ["Java 21", "Spring Boot", "MySQL", "JWT", "Docker Compose"],
    created_at: "12 Août 2026",
    source: "NOT:ICED Direct",
  },
  {
    id: 4,
    title: "Lead DevOps & Orchestration Cloud",
    company: "ScalePress Labs",
    location: "Bordeaux (33)",
    contract_type: "Freelance",
    salary: "550 € / jour",
    description:
      "Mission de conteneurisation et déploiement continu. Mise en place de pipelines GitHub Actions, monitoring Prometheus/Grafana et sécurisation des environnements multi-conteneurs.",
    tags: ["Docker", "Kubernetes", "CI/CD", "Linux", "Terraform"],
    created_at: "10 Août 2026",
    source: "NOT:ICED Direct",
  },
  {
    id: 5,
    title: "Développeur E-learning MERN Stack",
    company: "CoreLab Academy",
    location: "Paris (75) • Hybride",
    contract_type: "Alternance",
    salary: "Selon barème légal",
    description:
      "Participation au développement de la plateforme LMS CoreLab : espaces apprenants, suivi de complétion des cours en temps réel, modélisation MongoDB et API RESTful Express.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Docker"],
    created_at: "08 Août 2026",
    source: "Web@cadémie",
  },
];

export default function NoticedDemo() {
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [selectedContract, setSelectedContract] = useState<string>("all");
  const [favorites, setFavorites] = useState<number[]>([1]);
  const [selectedJob, setSelectedJob] = useState<JobOffer | null>(null);
  const [appliedJobId, setAppliedJobId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"tableau" | "articles">("tableau");

  const todayStr = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const filteredJobs = realSampleJobs.filter((job) => {
    const matchContract = selectedContract === "all" || job.contract_type === selectedContract;
    const matchSearch =
      !searchInput.trim() ||
      job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      (job.company && job.company.toLowerCase().includes(searchInput.toLowerCase())) ||
      job.tags.some((t) => t.toLowerCase().includes(searchInput.toLowerCase()));
    const matchLoc =
      !locationInput.trim() ||
      (job.location && job.location.toLowerCase().includes(locationInput.toLowerCase()));

    return matchContract && matchSearch && matchLoc;
  });

  const toggleFavorite = (jobId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]));
  };

  const handleApply = (jobId: number) => {
    setAppliedJobId(jobId);
    setTimeout(() => setAppliedJobId(null), 3000);
  };

  const handleReset = () => {
    setSearchInput("");
    setLocationInput("");
    setSelectedContract("all");
    setSelectedJob(null);
    setAppliedJobId(null);
    setActiveTab("tableau");
  };

  return (
    <MockupFrame
      title="NOT:ICED — La Petite Annonce Version 2026"
      url="https://noticed.epitech.local/tableau"
      badge="Design Presse Authentique"
      onReset={handleReset}
      themeStyle="editorial"
    >
      <div className="bg-[#f7f4ec] text-[#0d0202] min-h-[540px] font-sans antialiased flex flex-col justify-between selection:bg-[#b23a2c]/20 selection:text-[#b23a2c]">
        {/* Ticker Bar exact de NOT:ICED */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 px-4 sm:px-8 py-2 font-mono text-[10.5px] uppercase tracking-[.14em] text-[#0d0202] bg-[#f7f4ec]">
          <span>Petites annonces — édition numérique</span>
          <span className="capitalize">{todayStr}</span>
          <span>{filteredJobs.length} offres actives</span>
        </div>

        {/* Navbar exacte de NOT:ICED */}
        <div className="border-b border-black/10 px-4 sm:px-8 py-3 bg-[#fffdf6]/90 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button onClick={() => { setSelectedJob(null); setActiveTab("tableau"); }} className="flex items-baseline gap-1.5 cursor-pointer">
              <span className="text-[22px] font-black tracking-[-.02em] text-[#0d0202]">NOT</span>
              <span className="font-mono text-[10.5px] uppercase tracking-[.16em] text-[#b23a2c] font-bold">
                :ICED
              </span>
            </button>
            <span className="h-5 w-px bg-black/20 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-5 text-[13px] uppercase font-semibold">
              <button
                onClick={() => { setSelectedJob(null); setActiveTab("tableau"); }}
                className={`pb-1 transition-colors cursor-pointer ${
                  activeTab === "tableau"
                    ? "border-b-2 border-[#b23a2c] text-[#b23a2c]"
                    : "text-[#0d0202] hover:text-[#8f2c20]"
                }`}
              >
                Toutes les offres
              </button>
              <button
                onClick={() => { setSelectedJob(null); setActiveTab("articles"); }}
                className={`pb-1 transition-colors cursor-pointer ${
                  activeTab === "articles"
                    ? "border-b-2 border-[#b23a2c] text-[#b23a2c]"
                    : "text-[#0d0202] hover:text-[#8f2c20]"
                }`}
              >
                Articles
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[12px] font-mono uppercase text-[#b23a2c] font-bold hidden md:inline">
              Favoris ({favorites.length})
            </span>
            <div className="border-[1.5px] border-[#0d0202] px-3 py-1 text-[11px] font-semibold uppercase text-[#0d0202] bg-[#fffdf6]">
              Espace Candidat
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="px-4 sm:px-8 py-5 flex-1">
          {/* Filets typographiques doubles de NOT:ICED */}
          <div className="text-center mb-6">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[.26em] text-[#0d0202]">
              Le journal de la petite annonce, version 2026
            </p>
            <hr className="mt-2 mb-1 border-t-2 border-[#0d0202]/80" />
            <hr className="mt-1 mb-4 border-t-[0.5px] border-[#0d0202]/80" />
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-wide text-[#0d0202] leading-tight">
              Trouvez votre prochain{" "}
              <span className="font-serif italic text-[#b23a2c] font-medium font-editorial">poste</span>.
            </h2>
            <hr className="mt-4 mb-1 border-t-[0.5px] border-[#0d0202]/80" />
            <hr className="mt-1 mb-4 border-t-2 border-[#0d0202]/80" />
          </div>

          {activeTab === "tableau" ? (
            <div>
              {/* Barre de recherche Searchbar de NOT:ICED */}
              <div className="bg-[#fffdf6] border border-[#0d0202]/15 p-3 rounded-none shadow-sm mb-6 grid grid-cols-1 md:grid-cols-12 gap-2 text-xs">
                <div className="md:col-span-5 relative">
                  <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#8b8472]" />
                  <input
                    type="text"
                    placeholder="Métier, technologie, mot-clé..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-full bg-[#f7f4ec] border border-[#0d0202]/15 pl-8 pr-3 py-1.5 text-xs text-[#0d0202] placeholder-[#8b8472] focus:outline-none focus:border-[#b23a2c]"
                  />
                </div>
                <div className="md:col-span-4 relative">
                  <MapPin className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#8b8472]" />
                  <input
                    type="text"
                    placeholder="Ville, région, Remote..."
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    className="w-full bg-[#f7f4ec] border border-[#0d0202]/15 pl-8 pr-3 py-1.5 text-xs text-[#0d0202] placeholder-[#8b8472] focus:outline-none focus:border-[#b23a2c]"
                  />
                </div>
                <div className="md:col-span-3">
                  <select
                    value={selectedContract}
                    onChange={(e) => setSelectedContract(e.target.value)}
                    className="w-full bg-[#f7f4ec] border border-[#0d0202]/15 px-2.5 py-1.5 text-xs text-[#0d0202] focus:outline-none focus:border-[#b23a2c] uppercase font-mono text-[11px]"
                  >
                    <option value="all">Tous les contrats</option>
                    <option value="CDI">CDI</option>
                    <option value="CDD">CDD</option>
                    <option value="Alternance">Alternance</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>
              </div>

              {/* Titre des résultats */}
              <div className="flex items-baseline justify-between gap-4 font-mono text-[12px] uppercase tracking-[.2em] mb-4 pb-1 border-b border-black/10">
                <span className="text-[#0d0202] font-bold">Annonces Publiées</span>
                <span className="text-[#55503f]">{filteredJobs.length} offre(s)</span>
              </div>

              {/* Grille des offres façon journal NOT:ICED */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredJobs.map((job) => {
                  const isFav = favorites.includes(job.id);
                  const isSelected = selectedJob?.id === job.id;

                  return (
                    <article
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className={`flex flex-col justify-between p-4 bg-[#fffdf6] border transition-all cursor-pointer hover:shadow-xl hover:shadow-[#0d0202]/10 ${
                        isSelected
                          ? "border-[#b23a2c] ring-1 ring-[#b23a2c] shadow-md"
                          : "border-[#0d0202]/10 hover:border-[#0d0202]/30"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <span className="text-[10px] font-mono uppercase bg-[#b23a2c] text-white px-2 py-0.5 font-bold">
                            {job.contract_type}
                          </span>
                          <button
                            onClick={(e) => toggleFavorite(job.id, e)}
                            className="p-1 text-[#8b8472] hover:text-[#b23a2c] transition-colors"
                            title={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
                          >
                            <Bookmark size={14} fill={isFav ? "#b23a2c" : "none"} className={isFav ? "text-[#b23a2c]" : ""} />
                          </button>
                        </div>

                        <h3 className="text-sm font-black text-[#0d0202] leading-snug line-clamp-2">
                          {job.title}
                        </h3>

                        <p className="mt-1 font-serif italic text-xs text-[#55503f]">
                          {job.company}
                        </p>

                        <p className="text-[11px] text-[#8b8472] mt-1 flex items-center gap-1 font-mono">
                          <MapPin size={11} /> {job.location}
                        </p>

                        <p className="text-xs text-[#0d0202]/80 mt-2.5 line-clamp-2 leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-[#0d0202]/10 flex items-center justify-between text-[10px] font-mono text-[#8b8472]">
                        <span>{job.created_at}</span>
                        <span className="text-[#b23a2c] font-bold">Voir l'annonce →</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Volet éditorial Articles de presse */
            <div className="bg-[#fffdf6] border border-[#0d0202]/15 p-6 space-y-4">
              <span className="text-[10px] font-mono uppercase text-[#b23a2c] bg-[#b23a2c]/10 px-2 py-0.5 font-bold">
                Édition Spéciale
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#0d0202] font-editorial">
                Comment le marché de l'ingénierie web redéfinit le profil Full-Stack en 2026
              </h3>
              <p className="text-xs text-[#55503f] leading-relaxed">
                Entre la montée en puissance des agents autonomes et l'exigence de performances brutes côté serveur,
                les développeurs polyvalents capables de maîtriser à la fois des frontends réactifs (React 19, Tailwind v4)
                et des architectures résilientes (Spring Boot, Node, conteneurisation Docker) sont les plus recherchés...
              </p>
              <button
                onClick={() => setActiveTab("tableau")}
                className="inline-flex items-center gap-1.5 bg-[#0d0202] text-white px-4 py-2 text-xs font-bold uppercase transition hover:bg-[#8f2c20] cursor-pointer"
              >
                Retour aux offres d'emploi
              </button>
            </div>
          )}
        </div>

        {/* Tiroir Fiche de Poste (JobDetailPanel de NOT:ICED) */}
        {selectedJob && (
          <div className="border-t-2 border-[#0d0202] bg-[#fffdf6] px-4 sm:px-8 py-5 shadow-2xl animate-slideIn">
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#0d0202]/15">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase bg-[#b23a2c] text-white px-2 py-0.5 font-bold">
                    {selectedJob.contract_type}
                  </span>
                  <span className="text-[11px] font-mono text-[#8b8472]">{selectedJob.created_at}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0d0202]">{selectedJob.title}</h3>
                <p className="text-xs font-serif italic text-[#55503f]">
                  {selectedJob.company} — {selectedJob.location}
                </p>
              </div>

              <button
                onClick={() => setSelectedJob(null)}
                className="p-1 rounded text-[#8b8472] hover:text-[#0d0202] hover:bg-[#f7f4ec] transition-colors"
                title="Fermer la fiche"
              >
                <X size={18} />
              </button>
            </div>

            <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="md:col-span-2 space-y-2">
                <p className="text-[#0d0202] leading-relaxed">{selectedJob.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedJob.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 font-mono text-[10px] bg-[#efe9db] border border-[#0d0202]/10 text-[#0d0202]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#f7f4ec] p-3 border border-[#0d0202]/10 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#8b8472] font-bold mb-1">Rémunération :</div>
                  <div className="font-mono font-bold text-[#b23a2c] text-xs">{selectedJob.salary}</div>
                  <div className="text-[10px] font-mono text-[#55503f] mt-2">Source : {selectedJob.source}</div>
                </div>

                <button
                  onClick={() => handleApply(selectedJob.id)}
                  className={`mt-3 w-full py-2 text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    appliedJobId === selectedJob.id
                      ? "bg-emerald-700 text-white"
                      : "bg-[#b23a2c] hover:bg-[#8f2c20] text-white shadow"
                  }`}
                >
                  {appliedJobId === selectedJob.id ? (
                    <>
                      <Check size={14} /> Candidature envoyée !
                    </>
                  ) : (
                    <>
                      Postuler à cette offre <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer simple de NOT:ICED */}
        <div className="border-t border-black/10 px-4 sm:px-8 py-3 text-center text-[10px] font-mono text-[#8b8472] bg-[#f7f4ec]">
          NOT:ICED © 2026 — La petite annonce, version 2026 • React 19 + Tailwind v4 + Express
        </div>
      </div>
    </MockupFrame>
  );
}
