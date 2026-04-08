// src/components/Layout.tsx
// Layout principal avec Sidebar et Outlet pour les pages enfants

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
