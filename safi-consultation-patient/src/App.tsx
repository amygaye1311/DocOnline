import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./components/Accueil";
import PatientForm from "./components/PatientForm";
import { Patient } from "./Types/Patient";
import Consultation from "./Pages/Consultation";
import PatientList from "./components/PatientList";
import QRCodePage from "./components/QRCodePage";
import Footer from "./components/Footer";


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
          <Route
          path="/" element={<Accueil/>}/>
          <Route
            path="/"
            element={
              <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
                  Gestion des patients(es)
                </h1>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <PatientForm onAddPatient={addPatient} />
              
                </div>
                <div className="mt-8 text-center">
                  <Link
                    to="/patientList"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 text-lg font-semibold shadow-md transition"
                  >
                    Voir la liste des patients(es) ({patients.length})
                  </Link>
                </div>
              </div>
            }
          />
          <Route path="/" element={<Accueil/>} />
          <Route path="/patientForm" element={<PatientForm onAddPatient={addPatient} />} />
          <Route path="/consultations" element={<Consultation patients={patients} />} />
          <Route path="/patientList" element={<PatientList patients={patients} />} />
          <Route path="/qrcode/:id" element={<QRCodePage patients={patients} />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;