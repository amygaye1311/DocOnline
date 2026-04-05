import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./Components/Accueil";
import PatientForm from "./Components/PatientForm";
import { Patient } from "./Types/Patient";
import ConsultationPage from "./Pages/Consultation";
import PatientList from "./Components/PatientList";
import QRCodePage from "./Components/QRCodePage";
import Footer from "./Components/Footer";


function App() {
  const [patients, setPatients] = useState<Patient[]>([
    { id: "1", nom: "Diop", prenom: "Awa", age: 45, telephone: "+221771234567", motifConsultation: "Hypertension artérielle", notes: "Suivi tension", hopital: "Hôpital Principal de Dakar", specialiste: "Cardiologie" },
    { id: "2", nom: "Ba", prenom: "Mamadou", age: 32, telephone: "+221781234567", motifConsultation: "Douleurs articulaires", notes: "Pré-opératoire", hopital: "Hôpital Aristide Le Dantec", specialiste: "Orthopédie" },
    { id: "3", nom: "Sall", prenom: "Fatou", age: 28, telephone: "+221761234567", motifConsultation: "Suivi grossesse", notes: "3ème mois", hopital: "Maternité de Pikine", specialiste: "Gynécologie" },
    { id: "4", nom: "Ndiaye", prenom: "Cheikh", age: 50, telephone: "+221701234567", motifConsultation: "Diabète", notes: "Contrôle glycémie", hopital: "Hôpital Dalal Jamm", specialiste: "Endocrinologie" },
    { id: "5", nom: "Sow", prenom: "Aminata", age: 36, telephone: "+221711234567", motifConsultation: "Asthme", notes: "Traitement inhalateur", hopital: "Hôpital Fann", specialiste: "Pneumologie" },
    { id: "6", nom: "Gueye", prenom: "Ibrahima", age: 40, telephone: "+221721234567", motifConsultation: "Douleurs thoraciques", notes: "ECG prévu", hopital: "Hôpital Principal de Dakar", specialiste: "Cardiologie" },
    { id: "7", nom: "Kane", prenom: "Mariama", age: 30, telephone: "+221731234567", motifConsultation: "Fièvre persistante", notes: "Analyse sanguine", hopital: "Hôpital Le Dantec", specialiste: "Médecine interne" },
    { id: "8", nom: "Diallo", prenom: "Abdoulaye", age: 55, telephone: "+221741234567", motifConsultation: "Perte de vision", notes: "Examen ophtalmologique", hopital: "Clinique ophtalmologique Dakar", specialiste: "Ophtalmologie" },
    { id: "9", nom: "Camara", prenom: "Khady", age: 22, telephone: "+221751234567", motifConsultation: "Douleurs abdominales", notes: "Échographie prévue", hopital: "Hôpital Pikine", specialiste: "Gastro-entérologie" },
    { id: "10", nom: "Mbaye", prenom: "Ousmane", age: 60, telephone: "+221761234568", motifConsultation: "Accident vasculaire cérébral", notes: "Suivi neurologique", hopital: "Hôpital Fann", specialiste: "Neurologie" }
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("patients");
    if (saved) {
      setPatients(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (patient: Patient) => {
    setPatients([...patients, patient]);
  };
  const updatePatient = (updatedPatient: Patient) => {
    setPatients(patients.map(p => p.id === updatedPatient.id ? updatedPatient : p));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Menu de navigation */}
        <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold"> DocOnline</h1>
          <div className="flex gap-6">
            <Link to="/Accueil"></Link>
            <Link className="hover:text-green-200 transition" to="/patientForm"> ➕ Ajouter un(e) patient(e)</Link>
            <Link className="hover:text-green-200 transition" to="/consultations"> 👥 Consultations</Link>
            <Link className="hover:text-green-200 transition" to="/patientList"> 📋 Liste des patients(es)</Link>
          </div>
        </nav>

{/* Routes */}
        <Routes>
          <Route path="/" element={<PatientForm onAddPatient={addPatient} />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/patientForm" element={<PatientForm onAddPatient={addPatient} />} />
          <Route path="/consultations" element={<ConsultationPage patients={patients} />} />
          <Route path="/patientList" element={<PatientList patients={patients} />} />
          <Route path="/qrcode/:id" element={<QRCodePage patients={patients} />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;