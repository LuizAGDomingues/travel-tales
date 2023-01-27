import axios from "axios";

export const getNearbyPlaces = async (latitude: string, longitude: string, type: string) => {
  const data = {
    latitude,
    longitude,
    type
  };
  try {
    const  await axios.post("/api/nearestLocations", data);
  } catch (error) {
    return error;
  }
};
