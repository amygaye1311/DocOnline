import React from "react";
import doctorPhoto from "../assets/photo doctor.jpeg";

const About: React.FC = () => {
  const features = [
    { icon: "🏥", title: "Pharmacies Proches", description: "Trouver des pharmacies proches de votre position" },
    { icon: "🏨", title: "Hôpitaux", description: "Explorer les hôpitaux disponibles et leurs services" },
    { icon: "👩‍⚕️", title: "Docteurs", description: "Choisir un médecin selon votre spécialité et vos besoins" },
    { icon: "🤖", title: "Assistant Virtuel", description: "Interagir avec une assistante virtuelle pour obtenir des informations de santé" },
    { icon: "📅", title: "Prendre Rendez-vous", description: "Prendre rendez-vous avec un professionnel de santé" },
    { icon: "📂", title: "Données Médicales", description: "Consulter les informations médicales disponibles sur la plateforme" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-500 to-sky-700 px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              À propos de DocOnline
            </h1>
            <p className="text-sky-100 text-lg">
              Moderniser l'accès aux services de santé et rendre l'information médicale accessible à tous
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={doctorPhoto}
              alt="photo doctor"
              className="rounded-3xl shadow-2xl w-full max-w-[18rem] h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-12 max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Qui sommes-nous ?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            DocOnline est une application de santé conçue pour faciliter l'accès aux services médicaux et aux informations essentielles de santé.
          </p>
        </div>

        {/* Objectif */}
        <div className="mb-12 bg-sky-50 rounded-2xl p-8 border border-sky-200">
          <h2 className="text-3xl font-bold text-sky-700 mb-4">Notre Objectif</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Notre objectif est de simplifier le parcours des patients en leur offrant des outils pratiques, rapides et accessibles à tout moment. Nous croyons que l'information de santé devrait être accessible à tous, sans complications.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Avec DocOnline, vous pouvez :</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-sky-600"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-sky-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12 bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl p-8 border border-sky-300">
          <h2 className="text-3xl font-bold text-sky-800 mb-6">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-lg font-bold text-sky-700 mb-2">🛡️ Sécurité</h3>
              <p className="text-gray-700">Nous mettons un point d'honneur à garantir une expérience sécurisée pour tous les utilisateurs.</p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-lg font-bold text-sky-700 mb-2">⚡ Rapidité</h3>
              <p className="text-gray-700">Des outils pratiques et rapides pour vous aider à accéder aux services de santé en un clin d'œil.</p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-lg font-bold text-sky-700 mb-2">🎯 Accessibilité</h3>
              <p className="text-gray-700">Une interface intuitive et accessible à tous, à tout moment, depuis n'importe quel appareil.</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Notre Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            DocOnline a été développé dans le but de moderniser l'accès aux services de santé et de rendre l'information médicale plus accessible à tous.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Nous croyons que chacun devrait pouvoir trouver facilement les informations et les services médicaux dont il a besoin, sans barrières technologiques ou administratives.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Rejoignez la communauté DocOnline</h2>
          <p className="text-gray-600 text-lg mb-6">
            Commencez dès maintenant à explorer nos services et à découvrir comment DocOnline peut vous aider.
          </p>
          <a
            href="/"
            className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition font-semibold"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
