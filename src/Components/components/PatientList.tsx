import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Patient } from "../../Types/Patient";
import { generateGmailLink } from "../../Types/GmailLink";
import { getRendezVous } from "../../api";
import type { RendezVousBackend } from "../../api";

const PatientList: React.FC = () => {
  const [rendezVous, setRendezVous] = useState<RendezVousBackend[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRendezVous()
      .then(setRendezVous)
      .catch(() => setError("Impossible de charger les rendez-vous."))
      .finally(() => setLoading(false));
  }, []);

  const filteredRendezVous = rendezVous.filter((r) =>
    r.nomPatient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.prenomPatient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toPatient = (r: RendezVousBackend): Patient => ({
    id: String(r.id),
    nom: r.nomPatient,
    prenom: r.prenomPatient,
    age: r.age,
    telephone: r.telephone,
    date: r.dateRendezVous,
    motifConsultation: r.motif,
    notes: r.notes,
    hopital: r.hopital,
    specialiste: r.specialiste,
  });

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto mt-8 p-6 flex justify-center">
        <p className="text-gray-500">Chargement...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-8 p-6 flex justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6">
      {/* Titre + barre de recherche */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Liste des patients(es) ayant un rendez-vous ({rendezVous.length})
        </h2>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Rechercher par nom ou prénom..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        {searchTerm && (
          <p className="text-center mt-2 text-sm text-gray-600">
            {filteredRendezVous.length} résultat(s)
          </p>
        )}
      </div>

      {/* Liste des patients */}
      {rendezVous.length === 0 ? (
        <p className="text-gray-500 text-center">Aucun patient enregistré</p>
      ) : (
        filteredRendezVous.map((r) => {
          const patient = toPatient(r);
          return (
            <div
              key={r.id}
              className="bg-white p-6 mb-4 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-bold text-xl text-green-700 mb-1">
                    {patient.nom} {patient.prenom}
                  </p>
                  <p className="text-gray-600">
                    Âge: <span className="font-semibold">{patient.age}</span>
                  </p>
                  <p className="text-gray-600">
                    Tél: <span className="font-semibold">{patient.telephone}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Motif: {patient.motifConsultation}
                  </p>
                  <p className="text-sm text-gray-500">
                    Hôpital: {patient.hopital}
                  </p>
                  <p className="text-sm text-gray-500">
                    Spécialiste: {patient.specialiste}
                  </p>
                </div>
              </div>

              {/* Notes si présentes */}
              {patient.notes && (
                <p className="text-sm bg-blue-50 p-2 rounded mb-4 italic border-l-4 border-blue-300">
                  Notes: {patient.notes}
                </p>
              )}

              {/* Boutons QR Code + Gmail */}
              <div className="flex gap-2">
                <Link
                  to={`/qrcode/${patient.id}`}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-center font-medium transition"
                >
                  📱 QR Code 
                </Link>
                <a
                  href={generateGmailLink(patient, "medecin@hopital.sn")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-center font-medium transition"
                >
                  📧 Partager via Gmail
                </a>
              </div>
            </div>
          );
        })
      )}
      
    </div>
  );
};

export default PatientList;