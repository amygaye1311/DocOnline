import { useState } from "react";
import { getWeather } from "../api";
import type { Weather } from "../Types/Weather.ts";

const WeatherPage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const data = await getWeather(city);
      setWeather(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Impossible de récupérer la météo pour cette ville.");
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-2">
            🌤️ Météo <span className="text-sky-600">DocOnline</span>
          </h1>
          <p className="text-slate-500">Entrez une ville pour voir la météo en temps réel.</p>
        </header>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Nom de la ville..."
            className="flex-1 px-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-sky-500 outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 rounded-xl font-bold bg-sky-600 text-white shadow-lg hover:bg-sky-700 transition-all"
          >
            Rechercher
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded-xl mb-6">
            ❌ {error}
          </div>
        )}

        {weather && (
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{weather.city}</h2>
            <p className="text-sky-600 text-xl mb-2">{weather.temperature}°C</p>
            <p className="text-slate-500">{weather.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherPage;
