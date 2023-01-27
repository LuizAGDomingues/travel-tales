import axios from 'axios';

export const getNearbyPlaces = async (
  latitude: string,
  longitude: string,
  type: string
) => {
  try {
    const closestPlace = await axios.get('/api/nearestLocations', {
      headers: { latitude, longitude, type }
    });
    return closestPlace.data;
  } catch (error) {
    return error;
  }
};
