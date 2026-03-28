import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CardContainer from "../Components/CardContainer";
import DoctorCard from "../Components/DoctorCard";
import { doctors } from "../Data/Doctor"; // Vérifie que ce fichier exporte bien un tableau "doctors"

const DoctorPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const specialtyFilter = searchParams.get("specialty");

  // Filtrage des docteurs
  const filteredDoctors = useMemo(() => {
    if (!specialtyFilter) return doctors;
    return doctors.filter((d) =>
      d.specialty?.toLowerCase() === specialtyFilter.toLowerCase()
    );
  }, [specialtyFilter]);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          {specialtyFilter
            ? `Docteurs - ${specialtyFilter}`
            : "Liste des Docteurs"}
        </h1>

        {specialtyFilter && (
          <p className="text-gray-600 mb-4">
            {filteredDoctors.length} médecin(s) trouvé(s)
          </p>
        )}

        <CardContainer>
          {filteredDoctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </CardContainer>

        {filteredDoctors.length === 0 && (
          <p className="text-gray-500 text-center mt-8">
            Aucun médecin trouvé pour cette spécialité.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DoctorPage;
