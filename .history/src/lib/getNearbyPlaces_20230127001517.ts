import axios from "axios";

export const getNearbyPlaces = async (latitude: string, longitude: string, type: string) => {
  const data = {
    latitude,
    longitude,
    type
  };
  try {
    const closestPlace = await axios.patch("/api/nearestLocations", {data});
    return closestPlace
  } catch (error) {
    return error;
  }
};
