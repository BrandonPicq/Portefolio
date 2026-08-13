import { useState } from "react";
import { Play, CheckCircle2, Mail, Bot, Activity } from "lucide-react";
import MockupFrame from "./MockupFrame";

interface PersonaConfig {
  id: string;
  name: string;
  role: string;
  interests: string[];
  systemPrompt: string;
}

const personaList: PersonaConfig[] = [
  {
    id: "dev-watch",
    name: "Persona — Veilleur Full-Stack",
    role: "Synthèse d'architectures, frameworks modernes & benchmarks",
    interests: ["React 19 & Tailwind v4", "Spring Boot & Java 21", "Bases NoSQL & Vectorielles"],
    systemPrompt: "Extraire les changements d'architectures et impacts techniques majeurs.",
  },
  {
    id: "devops-cloud",
    name: "Persona — Ingénieur Cloud & DevOps",
    role: "Focus conteneurisation, sécurité des flux & CI/CD",
    interests: ["Docker & Orchestration", "Sécurité JWT / Webhooks", "Microservices Polyglottes"],
    systemPrompt: "Analyser les gains de performance, résilience et protocoles réseau.",
  },
];

export default function PersonaAiDemo() {
  const [selectedPersona, setSelectedPersona] = useState<PersonaConfig>(personaList[0]);
  const [selectedInterest, setSelectedInterest] = useState<string>("React 19 & Tailwind v4");
  const [userEmail, setUserEmail] = useState<string>("brandon@epitech.eu");
  const [frequency, setFrequency] = useState<string>("daily");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executedStep, setExecutedStep] = useState<number>(0);
  const [newsletterOutput, setNewsletterOutput] = useState<{
    subject: string;
    body: string;
    metrics: string;
  } | null>(null);

  const runN8nWorkflow = () => {
    setIsRunning(true);
    setNewsletterOutput(null);
    setExecutedStep(1);

    setTimeout(() => {
      setExecutedStep(2); // Fetch RSS
      setTimeout(() => {
        setExecutedStep(3); // LLM Agent
        setTimeout(() => {
          setExecutedStep(4); // Dispatch
          setIsRunning(false);
          setNewsletterOutput({
            subject: `[Persona Digest] Veille ciblée : ${selectedInterest}`,
            body:
              `Bonjour,\n\nVoici votre digest personnalisé généré par l'agent IA (${selectedPersona.name}) :\n\n` +
              `1. **Synthèse Clé** : L'adoption des serveurs actions et du streaming de composants sous ${selectedInterest} permet un gain de latence de ~35% au premier rendu.\n` +
              `2. **Recommandation Architecture** : Découplage strict des couches de persistance et isolation des workers asynchrones.\n` +
              `3. **Index de Pertinence** : 96/100 (Recommandé pour votre prochain sprint).`,
            metrics: "4 nodes exécutés avec succès • 0 erreur • Latence 280ms",
          });
        }, 700);
      }, 600);
    }, 500);
  };

  const handleReset = () => {
    setSelectedPersona(personaList[0]);
    setSelectedInterest("React 19 & Tailwind v4");
    setUserEmail("brandon@epitech.eu");
    setFrequency("daily");
    setIsRunning(false);
    setExecutedStep(0);
    setNewsletterOutput(null);
  };

  return (
    <MockupFrame
      title="Persona — Orchestration n8n & Agents IA"
      url="https://n8n.workflow.local:5678/workflow/persona-ai-aggregator"
      badge="Workflow n8n + LLM Agents"
      onReset={handleReset}
      themeStyle="dark"
    >
      <div className="bg-[#0f172a] text-slate-100 min-h-[540px] font-sans flex flex-col justify-between selection:bg-[#ff6d5a]/20">
        {/* Navbar n8n authentique */}
        <div className="bg-[#1e293b] border-b border-slate-700/80 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#ff6d5a] flex items-center justify-center font-bold text-white text-xs shadow">
              n8n
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-white leading-none">
                Persona — AI News Aggregator & Chatbot Core
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                Workflow ID: #n8n-wk-persona-complete • Docker Compose
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-950/60 border border-emerald-700 text-emerald-400 flex items-center gap-1">
              <Activity size={11} className="animate-pulse" />
              Webhook Active (:5678)
            </span>
          </div>
        </div>

        {/* Corps principal : Visualiseur de nœuds n8n + Formulaire de déclenchement */}
        <div className="p-4 sm:p-6 flex-1 space-y-4 max-w-4xl mx-auto w-full">
          {/* Canvas des nœuds n8n */}
          <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-4 shadow-inner">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Pipeline n8n (Nodes actifs) :</span>
              <span className="text-[#ff6d5a]">n8n Workflow Engine</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
              <div
                className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                  executedStep >= 1 ? "bg-emerald-950/40 border-emerald-500 text-emerald-300" : "bg-slate-900 border-slate-800 text-slate-400"
                }`}
              >
                {executedStep > 1 ? <CheckCircle2 size={14} className="text-emerald-400" /> : <span>1.</span>}
                <div>
                  <div className="font-bold text-white">Get Users Due</div>
                  <div className="text-[9px] opacity-75">persona_data.json</div>
                </div>
              </div>

              <div
                className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                  executedStep >= 2 ? "bg-emerald-950/40 border-emerald-500 text-emerald-300" : "bg-slate-900 border-slate-800 text-slate-400"
                }`}
              >
                {executedStep > 2 ? <CheckCircle2 size={14} className="text-emerald-400" /> : <span>2.</span>}
                <div>
                  <div className="font-bold text-white">Fetch RSS News</div>
                  <div className="text-[9px] opacity-75">Curation Tech</div>
                </div>
              </div>

              <div
                className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                  executedStep >= 3 ? "bg-purple-950/40 border-purple-500 text-purple-300" : "bg-slate-900 border-slate-800 text-slate-400"
                }`}
              >
                {executedStep > 3 ? <CheckCircle2 size={14} className="text-emerald-400" /> : <span>3.</span>}
                <div>
                  <div className="font-bold text-white">AI Agent LLM</div>
                  <div className="text-[9px] opacity-75">Synthèse Persona</div>
                </div>
              </div>

              <div
                className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                  executedStep >= 4 ? "bg-emerald-950/40 border-emerald-500 text-emerald-300" : "bg-slate-900 border-slate-800 text-slate-400"
                }`}
              >
                {executedStep >= 4 ? <CheckCircle2 size={14} className="text-emerald-400" /> : <span>4.</span>}
                <div>
                  <div className="font-bold text-white">Send Newsletter</div>
                  <div className="text-[9px] opacity-75">Dispatch Email</div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de configuration du profil utilisateur et test n8n */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1e293b] p-4 rounded-2xl border border-slate-700 space-y-3">
              <h4 className="font-bold text-xs text-white border-b border-slate-700 pb-1.5 flex items-center gap-1.5">
                <Bot size={14} className="text-[#ff6d5a]" /> Profil Persona & Préférences
              </h4>

              <div className="space-y-2 text-xs">
                <div>
                  <label className="text-[10px] font-mono text-slate-400">Choisir le Persona :</label>
                  <select
                    value={selectedPersona.id}
                    onChange={(e) => {
                      const p = personaList.find((item) => item.id === e.target.value) || personaList[0];
                      setSelectedPersona(p);
                      setSelectedInterest(p.interests[0]);
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-slate-100 focus:outline-none focus:border-[#ff6d5a]"
                  >
                    {personaList.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-400">Centre d'intérêt (Interests) :</label>
                  <select
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-slate-100 focus:outline-none focus:border-[#ff6d5a]"
                  >
                    {selectedPersona.interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-mono text-slate-400">Email destinataire :</label>
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-slate-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400">Fréquence :</label>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-slate-100 focus:outline-none"
                    >
                      <option value="daily">Quotidien (Daily)</option>
                      <option value="weekly">Hebdomadaire</option>
                      <option value="immediate">Envoi Immédiat</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={runN8nWorkflow}
                disabled={isRunning}
                className="w-full py-2.5 bg-gradient-to-r from-[#ff6d5a] to-[#ff4b4b] hover:opacity-90 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <Play size={13} />
                {isRunning ? "Exécution du pipeline n8n en cours..." : "Déclencher l'automatisation n8n"}
              </button>
            </div>

            {/* Sortie Newsletter & Résultat du workflow */}
            <div className="bg-[#1e293b] p-4 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-1.5">
                  <h4 className="font-bold text-xs text-white flex items-center gap-1.5">
                    <Mail size={14} className="text-emerald-400" /> Sortie Newsletter Générée
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">Destination : {userEmail}</span>
                </div>

                {newsletterOutput ? (
                  <div className="mt-3 space-y-2 animate-fadeIn text-xs">
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-300">
                      Sujet : {newsletterOutput.subject}
                    </div>
                    <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-slate-200 text-xs whitespace-pre-line leading-relaxed max-h-48 overflow-y-auto">
                      {newsletterOutput.body}
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center text-xs text-slate-500 font-mono">
                    En attente d'exécution du workflow n8n...
                    <p className="text-[10px] text-slate-600 mt-1">Cliquez sur « Déclencher l'automatisation » pour tester</p>
                  </div>
                )}
              </div>

              {newsletterOutput && (
                <div className="pt-2 border-t border-slate-700 text-[10px] font-mono text-emerald-400">
                  ✔ {newsletterOutput.metrics}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer n8n */}
        <div className="bg-[#1e293b] border-t border-slate-700/80 px-4 sm:px-6 py-2.5 text-[10px] font-mono text-slate-400 flex items-center justify-between">
          <span>n8n Workflows Automation — Docker Compose</span>
          <span>Webhooks & Multi-Agents LLM</span>
        </div>
      </div>
    </MockupFrame>
  );
}
