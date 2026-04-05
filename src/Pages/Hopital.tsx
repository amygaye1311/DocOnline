import React from "react";
import CardContainer from "../Components/CardContainer";
import HopitalCard from "../Components/HopitalCard";
import { hopitaux } from "../Data/Hospital";

const HopitalPage: React.FC = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h1 className="text-2xl font-bold text-sky-600 mb-4">Hôpitaux à Dakar</h1>
    <CardContainer>
      {hopitaux.map((h) => (
        <HopitalCard key={h.id} hopital={h} />
      ))}
    </CardContainer>
  </div>
);

export default HopitalPage;