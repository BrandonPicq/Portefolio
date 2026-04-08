// src/components/Sidebar.tsx
// Barre latérale avec liens de navigation

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-slate-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            Portfolio
          </div>
          <div className="flex gap-6">
            <Link 
              to="/" 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
}
