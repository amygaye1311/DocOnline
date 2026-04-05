import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-green-600 text-white p-4 flex justify-between">
    <h1 className="font-bold">DocOnline</h1>
    <div className="space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md transition ${isActive ? "bg-white text-green-700" : "text-white hover:bg-green-500"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/hopitaux"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md transition ${isActive ? "bg-white text-green-700" : "text-white hover:bg-green-500"}`
        }
      >
        Hôpitaux
      </NavLink>
      <NavLink
        to="/docteurs"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md transition ${isActive ? "bg-white text-green-700" : "text-white hover:bg-green-500"}`
        }
      >
        Docteurs
      </NavLink>
      <NavLink
        to="/pharmacies"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md transition ${isActive ? "bg-white text-green-700" : "text-white hover:bg-green-500"}`
        }
      >
        Pharmacies
      </NavLink>
      <NavLink
        to="/patients"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md transition ${isActive ? "bg-white text-green-700" : "text-white hover:bg-green-500"}`
        }
      >
        Patients
      </NavLink>
      <NavLink
        to="/consultations"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md transition ${isActive ? "bg-white text-green-700" : "text-white hover:bg-green-500"}`
        }
      >
        Consultations
      </NavLink>
    </div>
  </nav>
);

export default Navbar;