import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CardContainer from "../Components/CardContainer";
import HopitalCard from "../Components/HopitalCard";
import { hopitaux } from "../Data/Hospital";

const HopitalPage: React.FC = () => (
  <>
    <Navbar />
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700">Hôpitaux à Dakar</h1>
      <CardContainer>
        {hopitaux.map((h) => (
          <HopitalCard key={h.id} hopital={h} />
        ))}
      </CardContainer>
    </div>
    <Footer />
  </>
);

export default HopitalPage;