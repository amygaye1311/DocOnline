
import type { Pharmacy } from "../Types/Pharmacy";

interface PharmacyCardProps {
  pharmacy: Pharmacy;
}

const PharmacyCard = ({ pharmacy }: PharmacyCardProps) => {
  
  
  const handleNavigation = () => {
    const query = encodeURIComponent(`${pharmacy.name}, ${pharmacy.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
            {pharmacy.name}
          </h3>
          <p className="text-xs text-slate-400 mt-1">📍 {pharmacy.address}</p>
        </div>
        
        {pharmacy.isOpenLate && (
          <span className="bg-sky-100 text-sky-700 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase animate-pulse">
            Ouverte Tard
          </span>
        )}
      </div>

      <div className="space-y-3 pt-4 border-t border-slate-50">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Distance</span>
          <span className="font-semibold text-slate-700">
            {typeof pharmacy.distance === 'number' ? pharmacy.distance.toFixed(1) : pharmacy.distance} km
          </span>
        </div>
      </div>

      <div className="mt-6 flex gap-2">
       
        <a 
          href={`tel:${pharmacy.phone}`}
          className="flex-1 bg-sky-50 text-sky-700 text-center py-2.5 rounded-xl font-bold text-sm hover:bg-sky-600 hover:text-white transition-all flex items-center justify-center"
        >
          📞 Appeler
        </a>
        
        
        <button 
          onClick={handleNavigation}
          className="px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-700 transition-all"
        >
          Itinéraire
        </button>
      </div>
    </div>
  );
};

export default PharmacyCard;