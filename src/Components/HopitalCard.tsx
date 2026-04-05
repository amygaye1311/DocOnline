import React from "react";
import type { Hopital } from "../Types/Hopital";

const HopitalCard: React.FC<{ hopital: Hopital }> = ({ hopital }) => (
  <div className="border rounded-lg p-4 shadow bg-sky-100 text-sky-900">
    <h2 className="text-lg font-bold">{hopital.name}</h2>
    <p className="text-sm">📍 {hopital.location}</p>
    <ul className="mt-2">
      {hopital.specialties.map((spec, idx) => (
        <li key={idx} className="text-sm">- {spec}</li>
      ))}
    </ul>
  </div>
);

export default HopitalCard;