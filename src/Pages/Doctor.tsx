import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import CardContainer from "../Components/CardContainer";
import DoctorCard from "../Components/DoctorCard";
import { doctors } from "../Data/Doctor";

const DoctorPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const specialtyFilter = searchParams.get("specialty");

  const filteredDoctors = useMemo(() => {
    if (!specialtyFilter) return doctors;
    return doctors.filter((d) => 
      d.specialty.toLowerCase() === specialtyFilter.toLowerCase()
    );
  }, [specialtyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">
          {specialtyFilter ? `Docteurs - ${specialtyFilter}` : "Liste des Docteurs"}
        </h1>
        {specialtyFilter && (
          <p className="text-gray-600 mb-4">
            {filteredDoctors.length} médecin(s) trouvé(s)
          </p>
        )}
        {filteredDoctors.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">
            Aucun médecin trouvé pour cette spécialité.
          </p>
        ) : (
          <CardContainer>
            {filteredDoctors.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </CardContainer>
        )}
      </div>
    </div>
  );
};

export default DoctorPage;