import { useState, useMemo } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';

import type { Pharmacy } from '../Types/Pharmacy'; 
import PharmacyCard from '../Components/PharmacyCard';

const Pharmacies = () => {
  
  const { latitude, longitude, error, getLocation } = useGeolocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyOpenLate, setOnlyOpenLate] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  const allPharmacies: Pharmacy[] = [
    { id: 1, name: "Pharmacie de la Paix", address: "Dakar Plateau", isOpenLate: true, distance: 0.5, phone: "338210000" },
    { id: 2, name: "Pharmacie Keur Massar", address: "Route de Malika", isOpenLate: false, distance: 12.4, phone: "338751010" },
    { id: 3, name: "Pharmacie du Rail", address: "Place de France, Thiès", isOpenLate: true, distance: 2.1, phone: "339512020" },
    { id: 4, name: "Pharmacie Amitié", address: "Point E, Avenue Bourguiba", isOpenLate: false, distance: 4.8, phone: "338243030" },
    { id: 5, name: "Pharmacie 24/7", address: "Vdn, Dakar", isOpenLate: true, distance: 1.2, phone: "338604040" },
  ];

  const filteredPharmacies = useMemo(() => {
    return allPharmacies
      .filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             p.address.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLate = onlyOpenLate ? p.isOpenLate : true;
        return matchesSearch && matchesLate;
      })
      
      .sort((a, b) => (latitude !== null ? a.distance - b.distance : 0)); 
  }, [searchTerm, onlyOpenLate, latitude]);

  const handleGeolocation = () => {
    setIsLocating(true);
    getLocation();
    
    setTimeout(() => setIsLocating(false), 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black text-slate-900 mb-2">
            Trouver une <span className="text-emerald-600">Pharmacie</span>
          </h1>
          <p className="text-slate-500">Service de proximité et gardes de nuit DocOnline.</p>
        </header>

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="absolute left-4 top-3.5 text-slate-400">🔍</span>
            <input 
              type="text"
              placeholder="Nom ou adresse..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setOnlyOpenLate(!onlyOpenLate)}
              className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-bold transition-all ${
                onlyOpenLate 
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              🌙 {onlyOpenLate ? "Toutes" : "Ouvertes Tard"}
            </button>

            <button 
              onClick={handleGeolocation}
              disabled={isLocating}
              className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-bold border transition-all flex items-center justify-center gap-2 ${
                latitude 
                  ? 'bg-blue-50 border-blue-200 text-blue-600' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {isLocating ? (
                <span className="animate-spin text-xl">🌀</span>
              ) : (
                <>📍 {latitude ? "Position OK" : "Proches de moi"}</>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-sm">
            ⚠️ <strong>Erreur :</strong> {error}. Vérifiez vos permissions.
          </div>
        )}

        {latitude && !isLocating && (
          <div className="mb-6 p-3 bg-blue-50 text-blue-700 rounded-xl text-center text-xs font-medium">
            ✅ Résultats triés par distance ({latitude.toFixed(4)}, {longitude?.toFixed(4)})
          </div>
        )}

        {filteredPharmacies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPharmacies.map((pharmacy) => (
              <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-lg font-medium">Aucune pharmacie trouvée.</p>
            <button 
              onClick={() => {setSearchTerm(''); setOnlyOpenLate(false);}}
              className="mt-4 text-emerald-600 font-bold hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pharmacies