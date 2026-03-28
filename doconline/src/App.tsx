import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import Hopitaux from "./pages/Hopitaux";
import Pharmacies from "./pages/Pharmacies";
import Docteurs from "./pages/Docteurs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/hopitaux" element={<Hopitaux />} />
        <Route path="/pharmacies" element={<Pharmacies />} />
        <Route path="/docteurs" element={<Docteurs />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
