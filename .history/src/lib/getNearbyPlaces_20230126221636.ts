import axios from "axios";

export const getNearbyPlaces = async (latitude: string, longitude: string, type: string) => {
  const data = {
    latitude,
    longitude,
    type
  };
  try {
    const closestPlace = await axios.post("/api/nearestLocations", data);
    return closesPlace
  } catch (error) {
    return error;
  }
};
