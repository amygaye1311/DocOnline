import { useState, useEffect, useMemo } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import type { Pharmacy } from '../Types/Pharmacy';
import PharmacyCard from '../Components/PharmacyCard';
import { getPharmacies } from '../api';

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const Pharmacies = () => {
  const { latitude, longitude } = useGeolocation();
  const [searchTerm] = useState('');
  const [onlyOpenLate] = useState(false);
  const [allPharmacies, setAllPharmacies] = useState<Pharmacy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPharmacies()
      .then(setAllPharmacies)
      .catch(() => setError("Impossible de charger les pharmacies."))
      .finally(() => setLoading(false));
  }, []);

  const filteredPharmacies = useMemo(() => {
    const withDistances = allPharmacies.map((p) => {
      if (latitude && longitude) {
        const d = calculateDistance(latitude, longitude, p.latitude, p.longitude);
        return { ...p, distance: Number(d.toFixed(1)) };
      }
      return p;
    });

    let result = withDistances.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLate = !onlyOpenLate;
      return matchesSearch && matchesLate;
    });

    if (latitude !== null) {
      result = result.sort((a, b) => (a.distance ?? 0) - (b.distance ?? 0));
    }

    return result;
  }, [searchTerm, onlyOpenLate, latitude, longitude, allPharmacies]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-gray-500">Chargement...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black text-slate-900 mb-2">
            Trouver une <span className="text-sky-600">Pharmacie</span>()
          </h1>
          <p className="text-slate-500">Service de proximité dynamique DocOnline.</p>
        </header>

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
