import { useState } from "react";
import type { Patient } from "../Types/Patient";
import { hopitaux } from "../Data/Hospital";

interface ConsultationData {
  id: string;
  patientId: string;
  date: string;
  motif: string;
  notes: string;
  hopital: string;
  specialiste: string;
}

function ConsultationPage({ patients }: { patients: Patient[] }) {
  const [consultations, setConsultations] = useState<ConsultationData[]>([]);
  const [form, setForm] = useState({
    patientId: "",
    date: "",
    motif: "",
    notes: "",
    hopital: "",
    specialiste: ""
  });

  const addConsultation = () => {
    if (!form.patientId || !form.date || !form.motif || !form.hopital || !form.specialiste) {
      alert("Veuillez remplir tous les champs obligatoires !");
      return;
    }
    const newConsultation: ConsultationData = {
      id: Date.now().toString(),
      ...form
    };
    setConsultations([...consultations, newConsultation]);
    setForm({ patientId: "", date: "", motif: "", notes: "", hopital: "", specialiste: "" });
  };

  return (
    <div className="min-h-screen bg-sky-50 p-6">
      <h1 className="text-3xl font-bold text-sky-600 text-center mb-6">
        Page de Consultation
      </h1>

      <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-sky-600 mb-4">
          Nouvelle consultation
        </h2>

        <select
          className="w-full border rounded p-2 mb-3"
          value={form.patientId}
          onChange={(e) => setForm({ ...form, patientId: e.target.value })}
        >
          <option value="">-- Sélectionner un patient --</option>
          {patients.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nom} {p.prenom}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="w-full border rounded p-2 mb-3"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="text"
          placeholder="Motif de consultation"
          className="w-full border rounded p-2 mb-3"
          value={form.motif}
          onChange={(e) => setForm({ ...form, motif: e.target.value })}
        />

        <textarea
          placeholder="Notes"
          className="w-full border rounded p-2 mb-3"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />

        <select
          className="w-full border rounded p-2 mb-3"
          value={form.hopital}
          onChange={(e) => setForm({ ...form, hopital: e.target.value })}
        >
          <option value="">-- Choisir un hôpital --</option>
          {hopitaux.map((hopital) => (
            <option key={hopital.id} value={hopital.name}>
              {hopital.name}
            </option>
          ))}
        </select>

        <select
          className="w-full border rounded p-2 mb-3"
          value={form.specialiste}
          onChange={(e) => setForm({ ...form, specialiste: e.target.value })}
        >
          <option value="">-- Choisir un spécialiste --</option>
          <option value="Généraliste">Généraliste</option>
          <option value="Cardiologue">Cardiologue</option>
          <option value="Pédiatre">Pédiatre</option>
          <option value="Chirurgien">Chirurgien</option>
          <option value="Dermatologue">Dermatologue</option>
          <option value="Gynécologue">Gynécologue</option>
          <option value="Neurologue">Neurologue</option>
        </select>

        <button
          onClick={addConsultation}
          className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition"
        >
          Enregistrer
        </button>
      </div>

      <div className="max-w-lg mx-auto mt-8">
        <h2 className="text-xl font-semibold text-sky-600 mb-4 text-center">
          Historique des consultations ({consultations.length})
        </h2>
        {consultations.length === 0 ? (
          <p className="text-gray-500 text-center">Aucune consultation enregistrée</p>
        ) : (
          consultations.map((c) => (
            <div
              key={c.id}
              className="bg-white p-4 mb-3 rounded shadow hover:shadow-lg transition"
            >
              <p className="font-bold text-sky-600">
                Patient :{" "}
                {patients.find((p) => p.id === c.patientId)?.nom}{" "}
                {patients.find((p) => p.id === c.patientId)?.prenom}
              </p>
              <p>Date : {c.date}</p>
              <p>Motif : {c.motif}</p>
              <p>Notes : {c.notes}</p>
              <p className="text-sky-600 font-semibold">
                Orientation : {c.hopital} — {c.specialiste}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ConsultationPage;