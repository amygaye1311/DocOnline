import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import heroImage from "../assets/hero.png";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const specialites = [
    { name: "Cardiologie", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=100&h=100&fit=crop", specialty: "Cardiologue" },
    { name: "Dermatologie", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&h=100&fit=crop", specialty: "Dermatologue" },
    { name: "Neurologie", image: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=100&h=100&fit=crop", specialty: "Neurologue" },
    { name: "Pédiatrie", image: "https://images.unsplash.com/photo-1632053002928-1919605ee6f7?w=100&h=100&fit=crop", specialty: "Pédiatre" },
    { name: "Oncologie", image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=100&h=100&fit=crop", specialty: "Oncologue" },
    { name: "Orthopédie", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop", specialty: "Orthopédiste" },
    { name: "Ophtalmologie", image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=100&h=100&fit=crop", specialty: "Ophtalmologue" },
    { name: "Gynécologie", image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=100&h=100&fit=crop", specialty: "Gynécologue" },
    { name: "Psychiatrie", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop", specialty: "Psychiatre" },
    { name: "Médecine générale", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop", specialty: "Médecin généraliste" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <img
              src={heroImage}
              alt="DocOnline Logo"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trouvez le meilleur soin médical
            </h1>
            <p className="text-green-100 text-lg">
              Docteurs et hopitaux à portée de main
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex justify-center gap-16 py-6 bg-white shadow-md">
          <div className="text-center">
            <span className="text-3xl font-bold text-green-700">120+</span>
            <p className="text-gray-600 font-medium">Docteurs</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-green-700">30</span>
            <p className="text-gray-600 font-medium">Hopitaux</p>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="px-8 py-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            <span className="text-green-600">SPECIALISTES</span>
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-8"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {specialites.map((spec, index) => (
              <div
                key={index}
                onClick={() => navigate(`/docteurs?specialty=${spec.specialty}`)}
                className="bg-green-50 rounded-lg p-4 flex flex-col items-center hover:bg-green-100 transition cursor-pointer border border-green-100"
              >
                <img 
                  src={spec.image} 
                  alt={spec.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <span className="text-green-700 font-medium text-sm">{spec.name}</span>
              </div>
            ))}
          </div>

          {/* See More Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between border border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Vous ne trouvez pas ce que vous cherchez ?
              </h3>
              <p className="text-gray-500">
                Découvrez notre liste complète de spécialistes
              </p>
            </div>
            <button 
              onClick={() => navigate("/docteurs")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium"
            >
              En voir plus →
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
