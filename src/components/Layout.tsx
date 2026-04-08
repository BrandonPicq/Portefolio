// src/components/Layout.tsx
// Layout principal avec Sidebar et Outlet pour les pages enfants

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />
      <main className="flex-1 container mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
