import React, { useState, useEffect } from "react";
import { getHospitals } from "../api";
import type { Hopital } from "../Types/Hopital";
import CardContainer from "../Components/CardContainer";
import HopitalCard from "../Components/HopitalCard";

const HopitalPage: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hopital[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHospitals()
      .then(setHospitals)
      .catch(() => setError("Impossible de charger les hôpitaux."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Chargement...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-sky-600 mb-4">Hôpitaux</h1>
      <CardContainer>
        {hospitals.map((h) => (
          <HopitalCard key={h.id} hopital={h} />
        ))}
      </CardContainer>
    </div>
  );
};

export default HopitalPage;
