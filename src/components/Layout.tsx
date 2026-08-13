import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative bg-paper dark:bg-surface text-ink dark:text-white transition-colors duration-300">
      {/* Texture de grain subtile */}
      <div className="noise-overlay" />

      <Sidebar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-8 relative z-10 max-w-6xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
