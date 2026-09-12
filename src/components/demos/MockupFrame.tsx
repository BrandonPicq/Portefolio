import { useRef, type ReactNode } from "react";
import { RotateCcw } from "lucide-react";
import "./demo-frame.css";

interface MockupFrameProps {
  title: string;
  url?: string;
  badge?: string;
  onReset?: () => void;
  children: ReactNode;
  footerActions?: ReactNode;
  aspect?: "auto" | "video" | "wide";
  themeStyle?: "editorial" | "dark" | "auto";
}

export default function MockupFrame({
  title,
  onReset,
  children,
  footerActions,
  themeStyle = "auto",
}: MockupFrameProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const resetDemo = () => {
    onReset?.();
    contentRef.current?.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="demo-frame" data-theme={themeStyle}>
      <div
        ref={contentRef}
        className="demo-frame__content"
        role="region"
        aria-label={`Démo interactive : ${title}. Zone défilante.`}
        tabIndex={0}
      >
        {children}
      </div>
      <footer className="demo-frame__footer">
        <span>Données de démonstration</span>
        <div className="demo-frame__actions">
          {footerActions}
          {onReset && (
            <button
              type="button"
              className="demo-frame__reset"
              onClick={resetDemo}
              aria-label={`Réinitialiser la démo ${title}`}
              title="Réinitialiser la démo"
            >
              <RotateCcw size={15} aria-hidden="true" />
              <span>Réinitialiser</span>
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
