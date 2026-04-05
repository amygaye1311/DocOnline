import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md transition ${isActive ? "bg-white text-green-700" : "text-white hover:bg-green-500"}`;

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="font-bold">DocOnline</h1>

        <button
          type="button"
          className="md:hidden rounded-md border border-white/25 p-2 hover:bg-green-500"
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block h-0.5 w-6 bg-white mb-1"></span>
          <span className="block h-0.5 w-6 bg-white mb-1"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </button>

        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/hopitaux" className={linkClass}>Hôpitaux</NavLink>
          <NavLink to="/docteurs" className={linkClass}>Docteurs</NavLink>
          <NavLink to="/pharmacies" className={linkClass}>Pharmacies</NavLink>
          <NavLink to="/patients" className={linkClass}>Patients</NavLink>
          <NavLink to="/consultations" className={linkClass}>Consultations</NavLink>
        </div>
      </div>

      <div className={`${mobileOpen ? "block" : "hidden"} mt-3 md:hidden`}>
        <div className="space-y-2 rounded-xl border border-white/20 bg-green-700/95 p-3">
          <NavLink to="/" className={linkClass} onClick={() => setMobileOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/hopitaux" className={linkClass} onClick={() => setMobileOpen(false)}>
            Hôpitaux
          </NavLink>
          <NavLink to="/docteurs" className={linkClass} onClick={() => setMobileOpen(false)}>
            Docteurs
          </NavLink>
          <NavLink to="/pharmacies" className={linkClass} onClick={() => setMobileOpen(false)}>
            Pharmacies
          </NavLink>
          <NavLink to="/patients" className={linkClass} onClick={() => setMobileOpen(false)}>
            Patients
          </NavLink>
          <NavLink to="/consultations" className={linkClass} onClick={() => setMobileOpen(false)}>
            Consultations
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;