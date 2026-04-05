import React from "react";
import { QRCodeSVG } from "qrcode.react";
import type { Doctor } from "../Types/Doctor";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => (
  <div className="border rounded-lg p-4 shadow bg-white hover:shadow-lg transition-shadow">
    <h2 className="text-lg font-bold text-gray-800">{doctor.firstName} {doctor.lastName}</h2>
    <p className="text-sky-600 font-medium">{doctor.specialty}</p>
    <p className="text-sm text-gray-600 mt-1">Disponibilité: {doctor.availability}</p>
    <div className="mt-3 flex justify-center bg-white p-2 rounded-lg">
      <QRCodeSVG 
        value={doctor.qrCode} 
        size={80}
        level="M"
        bgColor="#ffffff"
        fgColor="#0ea5e9"
      />
    </div>
  </div>
);

export default DoctorCard;