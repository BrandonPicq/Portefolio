import React from "react";
import { RefreshCw, Sparkles } from "lucide-react";

interface MockupFrameProps {
  title: string;
  url?: string;
  badge?: string;
  onReset?: () => void;
  children: React.ReactNode;
  aspect?: "auto" | "video" | "wide";
  themeStyle?: "editorial" | "dark" | "auto";
}

export default function MockupFrame({
  title,
  url = "https://demo.local/app",
  badge = "Simulation Interactive",
  onReset,
  children,
  themeStyle = "auto",
}: MockupFrameProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-300 shadow-2xl flex flex-col ${
        themeStyle === "editorial"
          ? "bg-paper-snow border-[#d8d2c2] text-ink shadow-editorial"
          : "bg-surface-card border-border text-white shadow-card"
      }`}
    >
      {/* Barre supérieure style macOS / Browser Frame */}
      <div
        className={`px-4 py-3 border-b flex items-center justify-between gap-3 text-xs select-none ${
          themeStyle === "editorial"
            ? "bg-paper-carton/80 border-[#d8d2c2] text-ink-stoned"
            : "bg-surface-elevated/90 border-border text-muted"
        }`}
      >
        {/* Boutons fenêtre macOS */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 opacity-90 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 opacity-90 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 opacity-90 hover:opacity-100 transition-opacity" />
        </div>

        {/* Barre d'adresse URL simulée */}
        <div
          title={title}
          className={`flex-1 max-w-md mx-auto px-3 py-1 rounded-md border flex items-center justify-between font-mono text-[11px] truncate ${
            themeStyle === "editorial"
              ? "bg-paper-snow border-[#d8d2c2] text-ink-stoned"
              : "bg-surface border-border text-muted-dark"
          }`}
        >
          <span className="truncate flex items-center gap-1.5">
            <span className="text-emerald-500">🔒</span>
            {url}
          </span>
          <span className="text-[10px] opacity-60 font-sans hidden sm:inline">LIVE</span>
        </div>

        {/* Badges et contrôles */}
        <div className="flex items-center gap-2">
          {badge && (
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-vermillon/10 text-vermillon border border-vermillon/20 dark:bg-gold/10 dark:text-gold dark:border-gold/30">
              <Sparkles size={10} />
              {badge}
            </span>
          )}
          {onReset && (
            <button
              onClick={onReset}
              title="Réinitialiser la démo"
              className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-muted hover:text-current transition-colors"
            >
              <RefreshCw size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Contenu interactif */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
