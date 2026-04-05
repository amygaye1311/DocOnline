import { useState, useMemo } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import type { Pharmacy } from '../Types/Pharmacy'; 
import PharmacyCard from '../Components/PharmacyCard';


const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; 
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

const Pharmacies = () => {
  const { latitude, longitude, getLocation } = useGeolocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyOpenLate, setOnlyOpenLate] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  
  const allPharmacies: (Pharmacy & { lat: number; lng: number })[] = [
    { id: 1, name: "Pharmacie de la Paix", address: "Dakar Plateau", isOpenLate: true, phone: "338210000", lat: 14.667, lng: -17.433, distance: 0 },
    { id: 2, name: "Pharmacie Keur Massar", address: "Route de Malika", isOpenLate: false, phone: "338751010", lat: 14.785, lng: -17.311, distance: 0 },
    { id: 3, name: "Pharmacie du Rail", address: "Place de France, Thiès", isOpenLate: true, phone: "339512020", lat: 14.791, lng: -16.935, distance: 0 },
    { id: 4, name: "Pharmacie Amitié", address: "Point E, Dakar", isOpenLate: false, phone: "338243030", lat: 14.693, lng: -17.451, distance: 0 },
    { id: 5, name: "Pharmacie 24/7", address: "Vdn, Dakar", isOpenLate: true, phone: "338604040", lat: 14.715, lng: -17.462, distance: 0 },
    { id: 6, name: "Pharmacie de l'Aéroport", address: "Yoff, Dakar", isOpenLate: true, phone: "338201122", lat: 14.745, lng: -17.489, distance: 0 },
    { id: 7, name: "Pharmacie Guigon", address: "Avenue Pompidou, Dakar", isOpenLate: false, phone: "338230334", lat: 14.669, lng: -17.435, distance: 0 },
    { id: 8, name: "Pharmacie Saly Portudal", address: "Saly, Mbour", isOpenLate: true, phone: "339571011", lat: 14.441, lng: -17.015, distance: 0 },
    { id: 9, name: "Pharmacie de Saint-Louis", address: "Île Nord, Saint-Louis", isOpenLate: false, phone: "339611516", lat: 16.024, lng: -16.503, distance: 0 },
    { id: 10, name: "Pharmacie Atlantic", address: "Almadies, Dakar", isOpenLate: true, phone: "338203040", lat: 14.748, lng: -17.514, distance: 0 },
    { id: 11, name: "Pharmacie des Parcelles", address: "Parcelles Assainies U20", isOpenLate: false, phone: "338354050", lat: 14.757, lng: -17.437, distance: 0 },
    { id: 12, name: "Pharmacie Mboro", address: "Escale, Mboro", isOpenLate: true, phone: "339556070", lat: 15.144, lng: -16.891, distance: 0 },
    { id: 13, name: "Pharmacie du Front de Terre", address: "Castors, Dakar", isOpenLate: false, phone: "338258090", lat: 14.707, lng: -17.442, distance: 0 },
    { id: 14, name: "Pharmacie Nation", address: "Boulevard République", isOpenLate: true, phone: "338224546", lat: 14.663, lng: -17.431, distance: 0 },
    { id: 15, name: "Pharmacie Gorgui", address: "Sacre-Coeur 3", isOpenLate: false, phone: "338671213", lat: 14.701, lng: -17.465, distance: 0 },
    { id: 16, name: "Pharmacie Sangalkam", address: "Route de Sangalkam", isOpenLate: true, phone: "338367080", lat: 14.781, lng: -17.224, distance: 0 },
    { id: 17, name: "Pharmacie Liberté 6", address: "Liberté 6, Dakar", isOpenLate: false, phone: "338274050", lat: 14.718, lng: -17.448, distance: 0 },
    { id: 18, name: "Pharmacie Fann", address: "Fann Résidence", isOpenLate: true, phone: "338251214", lat: 14.685, lng: -17.469, distance: 0 },
    { id: 19, name: "Pharmacie Médina", address: "Avenue Blaise Diagne", isOpenLate: false, phone: "338215657", lat: 14.678, lng: -17.445, distance: 0 },
    { id: 20, name: "Pharmacie Pikine", address: "Tally Boubess", isOpenLate: true, phone: "338342021", lat: 14.751, lng: -17.393, distance: 0 },
  ];

  const filteredPharmacies = useMemo(() => {
    
    const withDistances = allPharmacies.map(p => {
      if (latitude && longitude) {
        const d = calculateDistance(latitude, longitude, p.lat, p.lng);
        return { ...p, distance: Number(d.toFixed(1)) };
      }
      return p;
    });

    let result = withDistances.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             p.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLate = onlyOpenLate ? p.isOpenLate : true;
      return matchesSearch && matchesLate;
    });

    
    if (latitude !== null) {
      result = result.sort((a, b) => a.distance - b.distance);
    }
    
    return result;
  }, [searchTerm, onlyOpenLate, latitude, longitude]);

  const handleGeolocation = () => {
    setIsLocating(true);
    getLocation();
    setTimeout(() => setIsLocating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black text-slate-900 mb-2">
            Trouver une <span className="text-sky-600">Pharmacie</span>()
          </h1>
          <p className="text-slate-500">Service de proximité dynamique DocOnline.</p>
        </header>

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="absolute left-4 top-3.5 text-slate-400">🔍</span>
            <input 
              type="text"
              placeholder="Nom ou adresse..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setOnlyOpenLate(!onlyOpenLate)}
              className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-bold transition-all ${
                onlyOpenLate ? 'bg-sky-600 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              🌙 {onlyOpenLate ? "Toutes" : "Ouvertes Tard"}
            </button>

            <button 
              onClick={handleGeolocation}
              disabled={isLocating}
              className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-bold border transition-all flex items-center justify-center gap-2 ${
                latitude ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {isLocating ? <span className="animate-spin text-xl">🌀</span> : <>📍 {latitude ? "Position OK" : "Proches de moi"}</>}
            </button>
          </div>
        </div>

        {latitude && (
          <div className="mb-6 p-3 bg-blue-50 text-blue-700 rounded-xl text-center text-xs font-medium border border-blue-100">
            ✅ Les pharmacies sont classées selon VOTRE position réelle.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPharmacies.map((pharmacy) => (
            <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pharmacies;