import React from "react";
import type { Hopital } from "../Types/Hopital";

const HopitalCard: React.FC<{ hopital: Hopital }> = ({ hopital }) => (
  <div className="border rounded-lg p-4 shadow bg-sky-100 text-sky-900">
    <h2 className="text-lg font-bold">{hopital.name}</h2>
    <p className="text-sm">📍 {hopital.address}, {hopital.city} ({hopital.country})</p>
    <p className="text-sm">📞 {hopital.phone}</p>
    <p className="text-sm mt-2">👨‍⚕️ {hopital.doctors.length} médecin(s)</p>
  </div>
);

export default HopitalCard;
