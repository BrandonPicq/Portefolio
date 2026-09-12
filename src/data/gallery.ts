import { getProjectById } from "./projects";

export const galleryProjects = ["noticed", "corelab", "connectin-v2", "persona-ai"]
  .map((id) => getProjectById(id))
  .filter((project) => project !== undefined);

export function getGalleryProject(id: string | null) {
  return galleryProjects.find((project) => project.id === id) ?? galleryProjects[0];
}

export function galleryLabel(id: string, title: string) {
  return id === "persona-ai" ? "Persona" : title.replace("'", "’");
}
