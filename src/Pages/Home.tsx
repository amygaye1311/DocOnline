import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.png";
import { doctors } from "../Data/Doctor";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [assistantMessages, setAssistantMessages] = useState([
    { from: "assistant", text: "Bonjour ! Je suis votre assistant virtuel. En quoi puis-je vous aider aujourd'hui ?" },
  ]);
  const [assistantInput, setAssistantInput] = useState("");

  const getAssistantReply = (message: string) => {
    const normalized = message.toLowerCase();

    const matchedDoctors = doctors.filter((doctor) =>
      normalized.includes(doctor.specialty.toLowerCase()) ||
      normalized.includes(doctor.specialty.toLowerCase().replace(/é/g, "e")) ||
      normalized.includes(doctor.specialty.toLowerCase().replace(/ê/g, "e")) ||
      normalized.includes(doctor.specialty.toLowerCase().replace(/é/g, "e").replace(/ê/g, "e"))
    );

    if (matchedDoctors.length > 0) {
      const names = matchedDoctors.slice(0, 2).map((doctor) => `${doctor.firstName} ${doctor.lastName}`).join(" et ");
      return `Voici un médecin correspondant à votre demande : ${names} (${matchedDoctors[0].specialty}). Vous pouvez consulter la page des docteurs pour en voir plus.`;
    }

    if (normalized.includes("rendez") || normalized.includes("rdv")) {
      return "Je peux vous aider à préparer un rendez-vous. Donnez-moi la spécialité ou le nom du médecin que vous cherchez.";
    }

    if (normalized.includes("urgence") || normalized.includes("urgent")) {
      return "En cas d'urgence, appelez immédiatement le numéro d'urgence local ou rendez-vous au service des urgences le plus proche.";
    }

    if (normalized.includes("hopital") || normalized.includes("hôpital") || normalized.includes("clinique")) {
      return "Je peux vous suggérer un hôpital ou une clinique proche. Que recherchez-vous exactement ?";
    }

    if (normalized.includes("pharmacie")) {
      return "Je peux vous donner des informations sur les pharmacies ouvertes ou proposer des itinéraires vers la plus proche.";
    }

    if (normalized.includes("docteur") || normalized.includes("spécialité") || normalized.includes("médecin")) {
      return "Je peux vous aider à trouver un médecin spécialisé. Dites-moi la spécialité souhaitée.";
    }

    return "Je suis désolé, je n'ai pas compris. Pouvez-vous reformuler votre question ou préciser votre demande ?";
  };

  const handleAssistantSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = assistantInput.trim();
    if (!trimmed) return;

    const userMessage = { from: "user", text: trimmed };
    const assistantMessage = { from: "assistant", text: getAssistantReply(trimmed) };

    setAssistantMessages([...assistantMessages, userMessage, assistantMessage]);
    setAssistantInput("");
  };

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-500 to-sky-700 px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trouvez le meilleur soin médical
            </h1>
            <p className="text-sky-100 text-lg">
              le bon soin medical, juste à portée de doigt!
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={image}
              alt="DocOnline illustration"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex justify-center gap-16 py-6 bg-white shadow-md">
        <div className="text-center">
          <span className="text-3xl font-bold text-sky-600">120+</span>
          <p className="text-gray-600 font-medium">Docteurs</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold text-sky-600">30</span>
          <p className="text-gray-600 font-medium">Hopitaux</p>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="px-8 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          <span className="text-sky-600">SPECIALISTES</span>
        </h2>
        <div className="w-16 h-1 bg-sky-600 mb-8"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {specialites.map((spec, index) => (
            <div
              key={index}
              onClick={() => navigate(`/docteurs?specialty=${spec.specialty}`)}
              className="bg-sky-50 rounded-lg p-4 flex flex-col items-center hover:bg-sky-100 transition cursor-pointer border border-sky-100"
            >
              <img 
                src={spec.image} 
                alt={spec.name}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <span className="text-sky-700 font-medium text-sm">{spec.name}</span>
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
            className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition font-medium"
          >
            En voir plus →
          </button>
        </div>

        {/* Assistant virtuel */}
        <div className="mt-10 bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Assistant virtuel</h2>
            <p className="text-slate-500 mt-2">En quoi puis-je vous aider ?</p>
          </div>

          <div className="max-h-96 overflow-y-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-inner">
            {assistantMessages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.from === "assistant" ? "justify-start" : "justify-end"}`}
              >
                <div className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm ${message.from === "assistant" ? "bg-slate-100 text-slate-900" : "bg-sky-600 text-white"}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleAssistantSubmit} className="mt-6 flex gap-3">
            <input
              value={assistantInput}
              onChange={(e) => setAssistantInput(e.target.value)}
              placeholder="Écrivez votre question ici..."
              className="flex-1 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
            <button
              type="submit"
              className="rounded-3xl bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
