import axios from "axios";

export const sendMail = async (latitude: string, longitude: string, type: string) => {
  const data = {
    latitude,
    longitude,
    type
  };
  try {
    return await axios.post("/api/nearestLocations", data);
  } catch (error) {
    return error;
  }
};
