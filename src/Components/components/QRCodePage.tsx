import React from "react";
import { useParams } from "react-router-dom";
import type { Patient } from "../../Types/Patient";
import PatientQRCode from "./PatientQRCode";


interface Props {
  patients: Patient[];
}

const QRCodePage: React.FC<Props> = ({ patients }) => { 
  const { id } = useParams<{ id: string }>();
  const patient = patients.find((p) => p.id === id);

  if (!patient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Patient introuvable</p>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 text-center border-b">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            QR Code du patient
          </h2>
          <p className="text-lg text-gray-700">{patient.prenom} {patient.nom}</p>
        </div>
        <div className="p-8 text-center">
          <PatientQRCode patient={patient} />

          {/* Boutons Envoyer / Imprimer */}
          <div className="flex gap-4 justify-center mt-6">
            
            <button
              onClick={handlePrint}
              className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
            >
              🖨️ Imprimer
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default QRCodePage;