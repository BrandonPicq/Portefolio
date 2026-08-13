import { useState } from "react";
import { CheckCircle2, Activity } from "lucide-react";
import MockupFrame from "./MockupFrame";

interface DevOpsOption {
  id: "a" | "b" | "c" | "d";
  name: string;
  color: string;
  hoverColor: string;
  votes: number;
}

const initialOptions: DevOpsOption[] = [
  { id: "a", name: "Ansible", color: "bg-[#66BB6A]", hoverColor: "hover:bg-[#4CAF50]", votes: 48 },
  { id: "b", name: "Chef", color: "bg-[#26C6DA]", hoverColor: "hover:bg-[#00ACC1]", votes: 24 },
  { id: "c", name: "Puppet", color: "bg-[#42A5F5]", hoverColor: "hover:bg-[#2196F3]", votes: 36 },
  { id: "d", name: "SaltStack", color: "bg-[#7E57C2]", hoverColor: "hover:bg-[#673AB7]", votes: 12 },
];

export default function PopeyeDemo() {
  const [options, setOptions] = useState<DevOpsOption[]>(initialOptions);
  const [selectedVote, setSelectedVote] = useState<"a" | "b" | "c" | "d" | null>("a");
  const [viewMode, setViewMode] = useState<"poll" | "result">("poll");
  const [queuePulse, setQueuePulse] = useState(false);

  const totalVotes = options.reduce((acc, o) => acc + o.votes, 0);

  const handleVote = (optionId: "a" | "b" | "c" | "d") => {
    setQueuePulse(true);
    setOptions((prev) =>
      prev.map((opt) => {
        if (opt.id === optionId) return { ...opt, votes: opt.votes + 1 };
        if (opt.id === selectedVote && selectedVote !== optionId) return { ...opt, votes: Math.max(0, opt.votes - 1) };
        return opt;
      })
    );
    setSelectedVote(optionId);
    setTimeout(() => setQueuePulse(false), 600);
  };

  const handleReset = () => {
    setOptions(initialOptions);
    setSelectedVote("a");
    setViewMode("poll");
  };

  return (
    <MockupFrame
      title="Popeye — Application de Vote Microservices Polyglotte"
      url={viewMode === "poll" ? "https://popeye.epitech.local:5000" : "https://popeye.epitech.local:5001/results"}
      badge="Microservices Polyglotte (Python + Java + Node)"
      onReset={handleReset}
      themeStyle="editorial"
    >
      <div className="bg-[#F7F8F9] text-[#254356] min-h-[540px] font-sans flex flex-col justify-between selection:bg-[#42A5F5]/20">
        {/* Navigation entre service Poll (Flask) et Result (Node) */}
        <div className="bg-white border-b border-[#e2e8f0] px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xs uppercase tracking-wider text-[#254356]">
              Architecture 3-Tier
            </span>
            <div className="flex gap-1.5 bg-[#F7F8F9] p-1 rounded-lg border border-[#e2e8f0] text-xs font-semibold">
              <button
                onClick={() => setViewMode("poll")}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === "poll"
                    ? "bg-[#254356] text-white shadow"
                    : "text-[#8f9ea8] hover:text-[#254356]"
                }`}
              >
                Service Poll (Flask :5000)
              </button>
              <button
                onClick={() => setViewMode("result")}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === "result"
                    ? "bg-[#254356] text-white shadow"
                    : "text-[#8f9ea8] hover:text-[#254356]"
                }`}
              >
                Service Result (Node.js :5001)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span
              className={`px-2 py-0.5 rounded-full border flex items-center gap-1 transition-all ${
                queuePulse
                  ? "bg-amber-100 border-amber-400 text-amber-800 scale-105"
                  : "bg-slate-100 border-slate-300 text-slate-600"
              }`}
            >
              <Activity size={12} className={queuePulse ? "animate-spin text-amber-600" : ""} />
              Redis Queue {queuePulse ? "PUSH/POP..." : "IDLE"}
            </span>
          </div>
        </div>

        {/* Corps principal : Poll ou Results */}
        <div className="p-6 sm:p-10 flex-1 flex flex-col justify-center items-center">
          {viewMode === "poll" ? (
            /* Vue Poll authentique de Popeye */
            <div className="w-full max-w-md mx-auto text-center space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#254356] tracking-tight">
                What's your favorite DevOps tool?
              </h2>

              <div className="space-y-3">
                {options.map((opt) => {
                  const isVoted = selectedVote === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleVote(opt.id)}
                      className={`w-full py-4 px-6 rounded-none text-white font-bold uppercase text-base flex items-center justify-between transition-all cursor-pointer shadow ${opt.color} ${opt.hoverColor} ${
                        selectedVote && !isVoted ? "opacity-50 hover:opacity-80" : "opacity-100 ring-2 ring-black/20"
                      }`}
                    >
                      <span className="tracking-wider">{opt.name}</span>
                      {isVoted && <CheckCircle2 size={20} className="text-white" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 text-xs text-[#c0c9ce] text-left">
                (Tip: you can change your vote)
              </div>

              <div className="text-sm text-[#8f9ea8] font-mono pt-4">
                Processed by container ID <strong>8a93bf4f120e</strong> (Flask / Python 3)
              </div>
            </div>
          ) : (
            /* Vue Result authentique de Popeye */
            <div className="w-full max-w-2xl mx-auto space-y-6">
              <div className="text-center space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#254356]">
                  What's your favorite DevOps tool? — Results
                </h2>
                <p className="text-xs text-[#8f9ea8] font-mono">
                  Persistance PostgreSQL • Calcul temps réel Node.js Socket.IO
                </p>
              </div>

              {/* Grille 4 colonnes de statistiques */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {options.map((opt) => {
                  const percent = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
                  return (
                    <div
                      key={opt.id}
                      className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between items-center text-center h-44"
                    >
                      <span className="font-bold text-sm text-[#254356] uppercase tracking-wide">{opt.name}</span>
                      <div className="w-full bg-[#e2e8f0] h-20 rounded-lg overflow-hidden flex flex-col justify-end p-1">
                        <div
                          className={`w-full rounded-md transition-all duration-700 ${opt.color}`}
                          style={{ height: `${percent}%` }}
                        />
                      </div>
                      <div className="text-xl font-black font-mono text-[#254356]">
                        {percent}%
                        <span className="block text-[10px] font-normal text-[#8f9ea8]">{opt.votes} votes</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#e2e8f0] text-center font-mono text-xs text-[#254356] font-bold shadow-sm">
                Total : {totalVotes} votes comptabilisés en temps réel
              </div>
            </div>
          )}
        </div>

        {/* Footer Popeye */}
        <div className="bg-[#254356] text-white px-4 sm:px-6 py-2.5 text-[10px] font-mono flex items-center justify-between">
          <span>Popeye Microservices — Docker Compose</span>
          <span>Poll (Flask) ➔ Redis (Queue) ➔ Worker (Java) ➔ Postgres ➔ Result (Node)</span>
        </div>
      </div>
    </MockupFrame>
  );
}
