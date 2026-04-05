import { useState } from 'react';

interface Location {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

export const useGeolocation = () => {
  const [position, setPosition] = useState<Location>({
    latitude: null,
    longitude: null,
    error: null,
  });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setPosition(prev => ({ ...prev, error: "Géolocalisation non supportée" }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          error: null,
        });
      },
      (err) => {
        setPosition(prev => ({ ...prev, error: err.message }));
      }
    );
  };

  return { ...position, getLocation };
};