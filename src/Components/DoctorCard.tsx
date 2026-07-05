import React from "react";
import type { Doctor } from "../Types/Doctor";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => (
  <div className="border rounded-lg p-4 shadow bg-white hover:shadow-lg transition-shadow">
    <h2 className="text-lg font-bold text-gray-800">{doctor.firstName} {doctor.lastName}</h2>
    <p className="text-sky-600 font-medium">{doctor.speciality}</p>
    <p className="text-sm text-gray-600 mt-1">📞 {doctor.phone}</p>
    <p className="text-sm text-gray-600">{doctor.email}</p>
    {doctor.hospital && (
      <p className="text-sm text-gray-500 mt-1">🏥 {doctor.hospital.name} — {doctor.hospital.city}</p>
    )}
  </div>
);

export default DoctorCard;