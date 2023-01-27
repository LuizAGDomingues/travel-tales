// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { latitude, longitude, type } = req.body;
  const nearestPlace = await getNearbyPlaces(latitude, longitude, type)
  return nearestPlace
}

async function getNearbyPlaces(latitude: string, longitude: string, type: string) {
  const location = `${latitude},${longitude}`;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=5000&type=${type}&key=${GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const places =  response.data.results;
    return getClosestPlace(parseFloat(latitude), parseFloat(longitude), places);
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function getClosestPlace(latitude: number, longitude: number, places: any) {
    // Inicializa o local mais próximo como o primeiro resultado
    let closestPlace = places[0];
    let closestDistance = Number.MAX_SAFE_INTEGER;

    // Use the Google Maps Distance Matrix API to get distance between user's location and each place
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const origins = `${latitude},${longitude}`;
    const destinations = places.map((place: { geometry: { location: { lat: any; lng: any; }; }; }) => `${place.geometry.location.lat},${place.geometry.location.lng}`).join('|');
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${API_KEY}`;
    const { data } = await axios.get(url);

    // Verifica a distância para cada local
    for (let i = 0; i < places.length; i++) {
        const distance = data.rows[0].elements[i].distance.value;
        // Se a distância for menor, atualiza o local mais próximo
        if (distance < closestDistance) {
            closestPlace = places[i];
            closestDistance = distance;
        }
    }
    return closestPlace;
}
