import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import DoctorPage from "./Pages/Doctor";
import HopitalPage from "./Pages/Hopital";
import Pharmacies from "./Pages/Pharmacies";
import PatientForm from "./Components/PatientForm";
import PatientList from "./Components/PatientList";
import Footer from "./Components/Footer";
import type { Patient } from "./Types/Patient";
import Navbar from "./Components/Navbar";
import QRCodePage from "./Components/components/QRCodePage";
import About from "./Pages/About";

function App() {
  const [patients, setPatients] = useState<Patient[]>([
    { id: "1", nom: "Diop", prenom: "Awa", age: 45, telephone: "+221771234567", date: "2026-04-01", motifConsultation: "Hypertension artérielle", notes: "Suivi tension", hopital: "Hôpital Principal de Dakar", specialiste: "Cardiologie" },
    { id: "2", nom: "Ba", prenom: "Mamadou", age: 32, telephone: "+221781234567", date: "2026-04-02", motifConsultation: "Douleurs articulaires", notes: "Pré-opératoire", hopital: "Hôpital Aristide Le Dantec", specialiste: "Orthopédie" },
    { id: "3", nom: "Sall", prenom: "Fatou", age: 28, telephone: "+221761234567", date: "2026-04-03", motifConsultation: "Suivi grossesse", notes: "3ème mois", hopital: "Maternité de Pikine", specialiste: "Gynécologie" },
    { id: "4", nom: "Ndiaye", prenom: "Cheikh", age: 50, telephone: "+221701234567", date: "2026-04-04", motifConsultation: "Diabète", notes: "Contrôle glycémie", hopital: "Hôpital Dalal Jamm", specialiste: "Endocrinologie" },
    { id: "5", nom: "Sow", prenom: "Aminata", age: 36, telephone: "+221711234567", date: "2026-04-05", motifConsultation: "Asthme", notes: "Traitement inhalateur", hopital: "Hôpital Fann", specialiste: "Pneumologie" }
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

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docteurs" element={<DoctorPage />} />
        <Route path="/hopitaux" element={<HopitalPage />} />
        <Route path="/pharmacies" element={<Pharmacies />} />
        <Route path="/patients" element={<PatientForm onAddPatient={addPatient} />} />
        <Route path="/patientList" element={<PatientList patients={patients} />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultations" element={<PatientList patients={patients} />} />
        <Route path="/qrcode/:id" element={<QRCodePage patients={patients} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
