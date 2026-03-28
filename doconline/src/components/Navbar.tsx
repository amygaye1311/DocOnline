import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex space-x-4">
      <Link to="/home">Accueil</Link>
      <Link to="/consultation">Consultation</Link>
      <Link to="/hopitaux">Hôpitaux</Link>
      <Link to="/pharmacies">Pharmacies</Link>
      <Link to="/docteurs">Docteurs</Link>
      <Link to="/chat">Chat</Link> {/* nouveau bouton */}
    </nav>
  );
}
