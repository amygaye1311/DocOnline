import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Patient } from "../Types/Patient";

const PatientQRCode: React.FC<{ patient: Patient }> = ({ patient }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">{patient.prenom} {patient.nom}</h3>
      <p className="text-gray-600 mb-4">ID: {patient.id}</p>
      <div className="mb-4">
        <QRCodeCanvas value={patient.id} size={256} />
      </div>
      <div className="text-sm text-gray-500">
        <p>Âge: {patient.age}</p>
        <p>Tél: {patient.telephone}</p>
      </div>
    </div>
  );
};

export default PatientQRCode;
