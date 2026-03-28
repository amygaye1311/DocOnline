import { useState } from "react";

interface Message {
  from: "patient" | "medecin";
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { from: "medecin", text: "Bonjour, décrivez vos symptômes." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // Ajouter le message du patient
    setMessages((prev) => [...prev, { from: "patient", text: input }]);
    setInput("");

    // Simuler une réponse immédiate du médecin
    setTimeout(() => {
      const reponses = [
        "Merci, je vous conseille de consulter un spécialiste.",
        "Vos symptômes nécessitent une visite à l’hôpital.",
        "Je vous recommande de prendre rendez-vous rapidement.",
        "Buvez beaucoup d’eau et reposez-vous."
      ];
      const random = reponses[Math.floor(Math.random() * reponses.length)];

      setMessages((prev) => [...prev, { from: "medecin", text: random }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      {/* Zone des messages */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-xs ${
              msg.from === "patient"
                ? "bg-blue-500 text-white self-end"
                : "bg-green-200 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Zone de saisie */}
      <div className="flex mt-2">
        <input
          className="flex-1 border rounded-l-lg p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Écrivez votre message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-r-lg"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
