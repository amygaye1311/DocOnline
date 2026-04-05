import React from "react";
import { Link } from "react-router-dom";


function Accueil() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      {/* Titre animé */}
      <h1 className="text-5xl font-extrabold text-green-700 mb-12 animate-bounce">
        🏥 Gestion des patients(es)
      </h1>
    

      {/* Boutons vers les autres pages */}
      <div className="flex gap-6">
         <Link
          to="/PatientForm"
          className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 text-xl font-semibold shadow-md transition"
        >
         ➕ Ajouter un(e) patient(e)
        </Link>
        <Link
          to="/consultations"
          className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 text-xl font-semibold shadow-md transition"
        >
          👥Consultations
        </Link>
        <Link
          to="/patientList"
          className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 text-xl font-semibold shadow-md transition"
        >
          📋Liste des patients(es)
        </Link>
      </div>
      
    </div>
  );
}

export default Accueil;