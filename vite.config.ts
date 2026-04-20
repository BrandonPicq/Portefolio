import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const fallbackRepositoryName = "Portefolio";

// GitHub Pages sert le site sous /<repo>/ pour un dépôt projet.
export default defineConfig(({ command }) => {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? fallbackRepositoryName;

  return {
    plugins: [react()],
    base: command === "build" ? `/${repositoryName}/` : "/",
  };
});
