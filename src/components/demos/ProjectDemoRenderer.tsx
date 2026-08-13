import NoticedDemo from "./NoticedDemo";
import CoreLabDemo from "./CoreLabDemo";
import PersonaAiDemo from "./PersonaAiDemo";
import ConnectInDemo from "./ConnectInDemo";
import PopeyeDemo from "./PopeyeDemo";
import CvLaterDemo from "./CvLaterDemo";
import CinemaDemo from "./CinemaDemo";
import type { Project } from "../../data/projects";

interface ProjectDemoRendererProps {
  project: Project;
}

export default function ProjectDemoRenderer({ project }: ProjectDemoRendererProps) {
  switch (project.demoType || project.id) {
    case "noticed":
      return <NoticedDemo />;
    case "corelab":
      return <CoreLabDemo />;
    case "persona-ai":
      return <PersonaAiDemo />;
    case "connectin-v2":
    case "connectin":
      return <ConnectInDemo />;
    case "popeye":
      return <PopeyeDemo />;
    case "my-cinema":
      return <CinemaDemo />;
    case "cv-later":
      return <CvLaterDemo />;
    default:
      return <NoticedDemo />;
  }
}
