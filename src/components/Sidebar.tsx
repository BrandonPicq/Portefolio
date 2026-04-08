// src/components/Sidebar.tsx
// Barre latérale avec liens de navigation

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </aside>
  );
}
