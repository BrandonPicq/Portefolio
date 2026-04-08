// src/components/Layout.tsx
// Layout principal avec Sidebar et Outlet pour les pages enfants

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Cercles décoratifs animés en arrière-plan */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob-reverse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-cyan-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <Sidebar />
      <main className="flex-1 container mx-auto px-6 py-8 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
