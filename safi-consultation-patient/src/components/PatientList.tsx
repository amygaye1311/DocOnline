import React from "react";
import { Link } from "react-router-dom";
import { Patient } from "../Types/Patient";
import { generateGmailLink } from "../Types/GmailLink";


interface Props {
  patients: Patient[];
}

const PatientList: React.FC<Props> = ({ patients }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Filtrage par nom ou prénom
  const filteredPatients = patients.filter((p) =>
    p.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.prenom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6">
      {/* Titre + barre de recherche */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Liste des patients(es) ({patients.length})
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
            {filteredPatients.length} résultat(s)
          </p>
        )}
      </div>

      {/* Liste des patients */}
      {patients.length === 0 ? (
        <p className="text-gray-500 text-center">Aucun patient enregistré</p>
      ) : (
        filteredPatients.map((p) => (
          <div
            key={p.id}
            className="bg-white p-6 mb-4 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-bold text-xl text-green-700 mb-1">
                  {p.nom} {p.prenom}
                </p>
                <p className="text-gray-600">
                  Âge: <span className="font-semibold">{p.age}</span>
                </p>
                <p className="text-gray-600">
                  Tél: <span className="font-semibold">{p.telephone}</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Motif: {p.motifConsultation}
                </p>
                <p className="text-sm text-gray-500">
                  Hôpital: {p.hopital}
                </p>
                <p className="text-sm text-gray-500">
                  Spécialiste: {p.specialiste}
                </p>
              </div>
            </div>

            {/* Notes si présentes */}
            {p.notes && (
              <p className="text-sm bg-blue-50 p-2 rounded mb-4 italic border-l-4 border-blue-300">
                Notes: {p.notes}
              </p>
            )}

            {/* Boutons QR Code + Gmail */}
            <div className="flex gap-2">
              <Link
                to={`/qrcode/${p.id}`}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-center font-medium transition"
              >
                📱 QR Code 
              </Link>
              <a
                href={generateGmailLink(p, "medecin@hopital.sn")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-center font-medium transition"
              >
                📧 Partager via Gmail
              </a>
            </div>
          </div>
        ))
      )}
      
    </div>
  );
};

export default PatientList;