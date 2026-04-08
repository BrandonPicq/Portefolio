// src/components/Sidebar.tsx
// Navbar avec effet liquid glass

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 z-50 bg-glass-light backdrop-blur-glass-xl border-b border-glass shadow-glass-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white tracking-tight drop-shadow-lg">
            Portfolio
          </div>
          <div className="flex gap-8">
            <Link 
              to="/" 
              className="text-white/80 hover:text-white transition-all duration-200 text-sm font-medium drop-shadow-md"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white transition-all duration-200 text-sm font-medium drop-shadow-md"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="text-white/80 hover:text-white transition-all duration-200 text-sm font-medium drop-shadow-md"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
}
