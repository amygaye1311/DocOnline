import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DoctorPage from "./Pages/Doctor";
import HopitalPage from "./Pages/Hopital";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docteurs" element={<DoctorPage />} />
        <Route path="/hopitaux" element={<HopitalPage />} />
      </Routes>
    </Router>
  );
}

export default App;