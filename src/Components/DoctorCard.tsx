import React from "react";
import type { Doctor } from "../Types/Doctor";

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => (
  <div className="border rounded-lg p-4 shadow bg-white">
    <h2 className="text-lg font-bold">{doctor.firstName} {doctor.lastName}</h2>
    <p>{doctor.specialty}</p>
    <p className="text-sm text-gray-600">Disponibilité: {doctor.availability}</p>
    <img src={doctor.qrCode} alt="QR Code" className="mt-2 w-24 h-24" />
  </div>
);

export default DoctorCard;