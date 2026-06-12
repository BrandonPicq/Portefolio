// src/components/Layout.tsx
// Layout principal — fond noir avec grain subtil

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Grain / Noise overlay */}
      <div className="noise-overlay"></div>

      <Sidebar />
      <main className="flex-1 container mx-auto px-6 py-8 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
