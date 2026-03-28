import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DoctorPage from "./Pages/Doctor";
import HopitalPage from "./Pages/Hopital";
import Pharmacies from "./Pages/Pharmacies";
import Navbar from "./Components/Navbar"; // <-- ajout du Navbar

function App() {
  return (
    <Router>
      {/* Navbar affiché en haut sur toutes les pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docteurs" element={<DoctorPage />} />
        <Route path="/hopitaux" element={<HopitalPage />} />
        <Route path="/pharmacies" element={<Pharmacies />} />
      </Routes>
    </Router>
  );
}

export default App;
