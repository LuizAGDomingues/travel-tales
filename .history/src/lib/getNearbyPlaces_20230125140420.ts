import axios from 'axios';
import geolib from 'geolib';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export async function getNearbyPlaces(latitude: string, longitude: string, type: string) {
  const location = `${latitude},${longitude}`;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=2000&type=${type}&key=${GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await axios.get(url);
    const places =  response.data.results;
    getClosestPlace(parseFloat(latitude), parseFloat(longitude), places);
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function getClosestPlace(latitude: number, longitude: number, places: any) {
  // Inicializa o local mais próximo como o primeiro resultado
  let closestPlace = places[0];
  let closestDistance = geolib.getDistance(
    {latitude: latitude, longitude: longitude},
    {latitude: closestPlace.geometry.location.lat, longitude: closestPlace.geometry.location.lng}
  );

  // Verifica a distância para cada local
  for (let i = 1; i < places.length; i++) {
    const place = places[i];
    const distance = geolib.getDistance(
      {latitude: latitude, longitude: longitude},
      {latitude: place.geometry.location.lat, longitude: place.geometry.location.lng}
    );
    // Se a distância for menor, atualiza o local mais próximo
    if (distance < closestDistance) {
      closestPlace = place;
      closestDistance = distance;
    }
  }
  return closestPlace;
}
