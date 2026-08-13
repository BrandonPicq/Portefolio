import { useState } from "react";
import { Film, Plus, Clock, AlertTriangle, CheckCircle, Trash2 } from "lucide-react";
import MockupFrame from "./MockupFrame";

interface Movie {
  id: number;
  title: string;
  duration: number; // mins
  genre: string;
  year: number;
}

interface Screening {
  id: number;
  movieTitle: string;
  roomName: string;
  startTime: string;
  endTime: string;
  duration: number;
}

const initialMovies: Movie[] = [
  { id: 1, title: "Inception", duration: 148, genre: "Science-Fiction", year: 2010 },
  { id: 2, title: "Interstellar", duration: 169, genre: "Science-Fiction", year: 2014 },
  { id: 3, title: "The Dark Knight", duration: 152, genre: "Action", year: 2008 },
  { id: 4, title: "Oppenheimer", duration: 180, genre: "Drame / Historique", year: 2023 },
];

const initialScreenings: Screening[] = [
  { id: 1, movieTitle: "Inception", roomName: "Salle 1 (IMAX)", startTime: "14:00", endTime: "16:28", duration: 148 },
  { id: 2, movieTitle: "Interstellar", roomName: "Salle 1 (IMAX)", startTime: "17:00", endTime: "19:49", duration: 169 },
  { id: 3, movieTitle: "The Dark Knight", roomName: "Salle 2 (3D)", startTime: "15:30", endTime: "18:02", duration: 152 },
];

export default function CinemaDemo() {
  const [activeNav, setActiveNav] = useState<"movies" | "screenings" | "rooms">("screenings");
  const [movies] = useState<Movie[]>(initialMovies);
  const [screenings, setScreenings] = useState<Screening[]>(initialScreenings);

  const [selectedMovie, setSelectedMovie] = useState<string>("Oppenheimer");
  const [selectedRoom, setSelectedRoom] = useState<string>("Salle 1 (IMAX)");
  const [inputStartTime, setInputStartTime] = useState<string>("16:00"); // Conflit intentionnel pour tester
  const [notification, setNotification] = useState<{ type: "success" | "error" | "warning"; message: string } | null>(
    null
  );

  const calculateEndTime = (start: string, durationMinutes: number) => {
    const [h, m] = start.split(":").map(Number);
    const totalMinutes = h * 60 + m + durationMinutes;
    const endH = Math.floor(totalMinutes / 60) % 24;
    const endM = totalMinutes % 60;
    return `${String(endH).padStart(2, "0")}:${String(endM).padStart(2, "0")}`;
  };

  const handleCreateScreening = (e: React.FormEvent) => {
    e.preventDefault();
    const movieObj = movies.find((m) => m.title === selectedMovie) || movies[0];
    const duration = movieObj.duration;

    const [newStartH, newStartM] = inputStartTime.split(":").map(Number);
    const newStartMinutes = newStartH * 60 + newStartM;
    const newEndMinutes = newStartMinutes + duration;

    // Détection de conflit exacte de My Cinema
    const conflict = screenings.find((s) => {
      if (s.roomName !== selectedRoom) return false;
      const [sH, sM] = s.startTime.split(":").map(Number);
      const [eH, eM] = s.endTime.split(":").map(Number);
      const sStart = sH * 60 + sM;
      const sEnd = eH * 60 + eM;

      return (
        (newStartMinutes >= sStart && newStartMinutes < sEnd) ||
        (newEndMinutes > sStart && newEndMinutes <= sEnd) ||
        (newStartMinutes <= sStart && newEndMinutes >= sEnd)
      );
    });

    if (conflict) {
      setNotification({
        type: "error",
        message: `Erreur 409 Conflit : La séance chevauche "${conflict.movieTitle}" (${conflict.startTime} - ${conflict.endTime}) dans ${conflict.roomName}.`,
      });
      return;
    }

    const newScreening: Screening = {
      id: Date.now(),
      movieTitle: selectedMovie,
      roomName: selectedRoom,
      startTime: inputStartTime,
      endTime: calculateEndTime(inputStartTime, duration),
      duration,
    };

    setScreenings([...screenings, newScreening]);
    setNotification({
      type: "success",
      message: `Séance de "${selectedMovie}" ajoutée avec succès sans conflit d'horaire !`,
    });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleDeleteScreening = (id: number) => {
    setScreenings((prev) => prev.filter((s) => s.id !== id));
    setNotification({
      type: "warning",
      message: "Séance supprimée (Soft delete avec cascade).",
    });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleReset = () => {
    setScreenings(initialScreenings);
    setSelectedMovie("Oppenheimer");
    setSelectedRoom("Salle 1 (IMAX)");
    setInputStartTime("16:00");
    setNotification(null);
  };

  return (
    <MockupFrame
      title="My Cinema — API REST & Détection de Conflits"
      url="https://cinema.epitech.local/screenings"
      badge="Design Authentique My Cinema"
      onReset={handleReset}
      themeStyle="dark"
    >
      <div className="bg-[#1e293b] text-slate-100 min-h-[540px] font-sans flex flex-col justify-between selection:bg-amber-500/20">
        {/* Notifications flottantes de My Cinema */}
        {notification && (
          <div className="px-4 pt-3">
            <div
              className={`p-3 rounded-lg text-xs font-semibold flex items-center justify-between shadow-lg animate-slideIn ${
                notification.type === "error"
                  ? "bg-[#f56565] text-white border-l-4 border-[#c53030]"
                  : notification.type === "success"
                  ? "bg-[#48bb78] text-white border-l-4 border-[#22543d]"
                  : "bg-[#ed8936] text-white border-l-4 border-[#7c2d12]"
              }`}
            >
              <div className="flex items-center gap-2">
                {notification.type === "error" ? <AlertTriangle size={16} /> : <CheckCircle size={16} />}
                <span>{notification.message}</span>
              </div>
              <button onClick={() => setNotification(null)} className="text-white hover:opacity-75">
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 flex">
          {/* Sidebar authentique de My Cinema */}
          <aside className="w-48 bg-[#0f172a] p-4 border-r border-slate-700/60 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex items-center gap-2 mb-6 text-amber-400 font-bold text-sm">
                <Film size={18} />
                <span>My_Cinema</span>
              </div>

              <nav className="space-y-1.5 text-xs font-medium">
                <button
                  onClick={() => setActiveNav("movies")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeNav === "movies" ? "bg-amber-500 text-black font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Films ({movies.length})
                </button>
                <button
                  onClick={() => setActiveNav("rooms")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeNav === "rooms" ? "bg-amber-500 text-black font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Salles (2)
                </button>
                <button
                  onClick={() => setActiveNav("screenings")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeNav === "screenings" ? "bg-amber-500 text-black font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Séances ({screenings.length})
                </button>
              </nav>
            </div>

            <div className="text-[10px] font-mono text-slate-500">
              API REST PHP / PDO
            </div>
          </aside>

          {/* Zone de contenu principale de My Cinema */}
          <main className="flex-1 p-5 space-y-4 overflow-y-auto max-h-[480px]">
            {activeNav === "screenings" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-700">
                  <div>
                    <h3 className="text-base font-bold text-white">Gestion des Séances & Programmation</h3>
                    <p className="text-xs text-slate-400">Contrôle de chevauchement automatique en base relationnelle</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Formulaire de création de séance */}
                  <form onSubmit={handleCreateScreening} className="lg:col-span-5 bg-[#0f172a] p-4 rounded-xl border border-slate-700 space-y-3">
                    <h4 className="font-bold text-xs text-amber-400 border-b border-slate-700 pb-1.5 flex items-center gap-1.5">
                      <Plus size={14} /> Planifier une séance
                    </h4>

                    <div className="space-y-2">
                      <div>
                        <label className="text-[10px] text-slate-400 font-mono">Film au catalogue :</label>
                        <select
                          value={selectedMovie}
                          onChange={(e) => setSelectedMovie(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                        >
                          {movies.map((m) => (
                            <option key={m.id} value={m.title}>
                              {m.title} ({m.duration} min)
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] text-slate-400 font-mono">Salle de projection :</label>
                        <select
                          value={selectedRoom}
                          onChange={(e) => setSelectedRoom(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                        >
                          <option value="Salle 1 (IMAX)">Salle 1 (IMAX - 300 places)</option>
                          <option value="Salle 2 (3D)">Salle 2 (3D - 180 places)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] text-slate-400 font-mono">Heure de début :</label>
                        <input
                          type="time"
                          value={inputStartTime}
                          onChange={(e) => setInputStartTime(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg text-xs transition-all cursor-pointer shadow flex items-center justify-center gap-1.5"
                    >
                      <Plus size={13} /> Sauvegarder la séance
                    </button>
                  </form>

                  {/* Planning actuel des séances */}
                  <div className="lg:col-span-7 space-y-2">
                    <div className="text-xs font-bold text-slate-300 font-mono flex items-center justify-between">
                      <span>Planning des séances actives ({screenings.length})</span>
                      <span className="text-[10px] text-slate-500">Validation temps réel</span>
                    </div>

                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {screenings.map((s) => (
                        <div
                          key={s.id}
                          className="bg-[#0f172a] p-3 rounded-xl border border-slate-700 flex items-center justify-between gap-3 shadow-sm hover:border-slate-500 transition-colors"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs text-white">{s.movieTitle}</span>
                              <span className="text-[10px] font-mono bg-amber-500/15 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
                                {s.roomName}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-1 font-mono">
                              <Clock size={11} className="text-amber-400" />
                              <span>
                                {s.startTime} ➔ {s.endTime} ({s.duration} min)
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => handleDeleteScreening(s.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Supprimer la séance"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeNav === "movies" && (
              <div className="space-y-3">
                <h3 className="font-bold text-sm text-white">Catalogue des Films</h3>
                <div className="grid grid-cols-2 gap-3">
                  {movies.map((m) => (
                    <div key={m.id} className="p-3 bg-[#0f172a] border border-slate-700 rounded-xl space-y-1">
                      <h4 className="font-bold text-xs text-white">{m.title}</h4>
                      <p className="text-[11px] text-slate-400 font-mono">{m.genre} • {m.year}</p>
                      <span className="text-[10px] text-amber-400 font-mono">{m.duration} minutes</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeNav === "rooms" && (
              <div className="space-y-3">
                <h3 className="font-bold text-sm text-white">Salles de projection</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#0f172a] border border-slate-700 rounded-xl space-y-1">
                    <h4 className="font-bold text-xs text-amber-400">Salle 1 (IMAX)</h4>
                    <p className="text-xs text-slate-300">Capacité : 300 sièges</p>
                    <p className="text-[10px] text-slate-400 font-mono">Format : Laser IMAX & Dolby Atmos</p>
                  </div>
                  <div className="p-3 bg-[#0f172a] border border-slate-700 rounded-xl space-y-1">
                    <h4 className="font-bold text-xs text-amber-400">Salle 2 (3D)</h4>
                    <p className="text-xs text-slate-300">Capacité : 180 sièges</p>
                    <p className="text-[10px] text-slate-400 font-mono">Format : RealD 3D & 7.1 Surround</p>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>

        {/* Footer My Cinema */}
        <div className="bg-[#0f172a] text-slate-400 px-4 sm:px-6 py-2.5 text-[10px] font-mono flex items-center justify-between border-t border-slate-700/60">
          <span>My Cinema — Architecture MVC & API RESTful PHP/PDO</span>
          <span>Détection de conflits & cascade soft delete</span>
        </div>
      </div>
    </MockupFrame>
  );
}
