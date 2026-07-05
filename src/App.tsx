import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DoctorPage from "./Pages/Doctor";
import HopitalPage from "./Pages/Hopital";
import Pharmacies from "./Pages/Pharmacies";
import PatientForm from "./Components/PatientForm";
import PatientList from "./Components/PatientList";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import QRCodePage from "./Components/components/QRCodePage";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docteurs" element={<DoctorPage />} />
        <Route path="/hopitaux" element={<HopitalPage />} />
        <Route path="/pharmacies" element={<Pharmacies />} />
        <Route path="/patients" element={<PatientForm onAddPatient={() => {}} />} />
        <Route path="/patientList" element={<PatientList />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultations" element={<PatientList />} />
        <Route path="/qrcode/:id" element={<QRCodePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
