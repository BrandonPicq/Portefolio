// src/pages/Home.tsx
// Page d'accueil — composition de sections

import HeroSection from "../components/home/HeroSection";
import SkillsTabs from "../components/home/SkillsTabs";

export default function Home() {
  return (
    <div className="space-y-20 animate-fadeIn">
      <HeroSection />
      <SkillsTabs />
    </div>
  );
}
