import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cvPdfPlugin from "./scripts/cv-pdf-plugin.mjs";

const fallbackRepositoryName = "Portefolio";
const configuredBasePath = process.env.VITE_BASE_PATH;

// GitHub Pages sert le site sous /<repo>/ pour un dépôt projet.
// Avec un custom domain, le site doit être servi depuis la racine '/'.
export default defineConfig(({ command }) => {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? fallbackRepositoryName;

  return {
    plugins: [react(), cvPdfPlugin()],
    base: configuredBasePath ?? (command === "build" ? `/${repositoryName}/` : "/"),
  };
});
