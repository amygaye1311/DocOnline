import { useState } from "react";
import type { Patient } from "../Types/Patient";
import { hopitaux } from "../Data/Hospital";
import { doctors } from "../Data/Doctor";
import { useNavigate } from "react-router-dom";

type Props = {
  onAddPatient: (patient: Patient) => void;
};

const specialites = Array.from(new Set(doctors.map((d) => d.specialty)));

const PatientForm: React.FC<Props> = ({ onAddPatient }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    telephone: "",
    date: "",
    motifConsultation: "",
    notes: "",
    hopital: "",
    specialiste: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPatient: Patient = {
      id: Date.now().toString(),
      nom: formData.nom,
      prenom: formData.prenom,
      age: Number(formData.age),
      telephone: formData.telephone,
      date: formData.date,
      motifConsultation: formData.motifConsultation,
      notes: formData.notes,
      hopital: formData.hopital,
      specialiste: formData.specialiste,
    };

    onAddPatient(newPatient);
    setMessage("Patient enregistré avec succès ✅");

    setFormData({
      nom: "",
      prenom: "",
      age: "",
      telephone: "",
      date: "",
      motifConsultation: "",
      notes: "",
      hopital: "",
      specialiste: "",
    });
    setTimeout(() => {
      navigate("/consultations");
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-sky-600 text-center mb-4">
        Prendre rendez-vous
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          className="border border-sky-500 p-2 rounded"
          required
        />

        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          className="border border-sky-500 p-2 rounded"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Âge"
          value={formData.age}
          onChange={handleChange}
          className="border border-sky-500 p-2 rounded"
          required
        />

        <input
          type="text"
          name="telephone"
          placeholder="Téléphone"
          value={formData.telephone}
          onChange={handleChange}
          className="border border-sky-500 p-2 rounded"
          required
        />

        <input
          type="date"
          name="date"
          placeholder="Date de consultation"
          value={formData.date}
          onChange={handleChange}
          className="border border-sky-500 p-2 rounded"
          required
        />

        <input
          type="text"
          name="motifConsultation"
          placeholder="Motif de consultation"
          value={formData.motifConsultation}
          onChange={handleChange}
          className="border border-sky-500 p-2 rounded"
          required
        />

        <select
          name="hopital"
          value={formData.hopital}
          onChange={handleChange}
          className="border border-sky-500 p-2 rounded"
          required
        >
          <option value="">-- Choisir un hôpital --</option>
          {hopitaux.map((hopital) => (
            <option key={hopital.id} value={hopital.name}>
              {hopital.name}
            </option>
          ))}
        </select>

        <select
          name="specialiste"
          value={formData.specialiste}
          onChange={handleChange}
          className="border border-sky-500 p-2 rounded"
          required
        >
          <option value="">-- Choisir un spécialiste --</option>
          {specialites.map((specialite) => (
            <option key={specialite} value={specialite}>
              {specialite}
            </option>
          ))}
        </select>

        <textarea
          name="notes"
          placeholder="Notes (optionnel)"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="border border-sky-500 p-2 rounded h-24"
        />

        <button
          type="submit"
          className="bg-sky-600 text-white p-2 rounded hover:bg-sky-700"
        >
          Enregistrer
        </button>
      </form>

      {message && (
        <p className="text-sky-700 font-semibold mt-4 text-center">{message}</p>
      )}
    </div>
  );
};

export default PatientForm;