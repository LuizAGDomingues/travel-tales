import axios from 'axios';
import geolib from 'geolib';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export async function getNearbyPlaces(latitude: string, longitude: string, radius: string, type: string) {
    const location = `${latitude},${longitude}`;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${GOOGLE_MAPS_API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return error;
    }
}

async function getClosestPlace(latitude, longitude, places) {
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
Nessa função, você deve passar as coordenadas de referência (latitude e longitude) e uma lista de locais (places), essa lista deve vir do seu resultado de chamada a API do Google Places, e então o resultado será o local mais próximo a sua coordenada de referência.




