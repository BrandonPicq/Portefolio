// src/components/Sidebar.tsx
// Navbar sobre — noir avec accents dorés

import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gold tracking-tight hover:text-gold-light transition-colors">
            Portfolio
          </Link>
          <div className="flex gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-gold"
                      : "text-muted hover:text-gold-light"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
}
