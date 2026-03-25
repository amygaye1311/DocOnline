import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-green-600 text-white p-4 flex justify-between">
    <h1 className="font-bold">DocOnline</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/hopitaux">Hôpitaux</Link>
      <Link to="/docteurs">Docteurs</Link>
      <Link to="/pharmacies">Pharmacies</Link>
      
    </div>
  </nav>
);

export default Navbar;