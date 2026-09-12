import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <footer className="folio-footer">
      <p>© {new Date().getFullYear()} Brandon Picq</p>
      <button type="button" className="demo-theme-switch" onClick={toggleTheme}
        aria-label={theme === "dark" ? "Passer les démos en thème clair" : "Passer les démos en thème sombre"}>
        {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        Démos en thème {theme === "dark" ? "clair" : "sombre"}
      </button>
    </footer>
  );
}
