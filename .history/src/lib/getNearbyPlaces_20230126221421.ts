import axios from "axios";

export const sendMail = async () => {
  const data = {
    latitude,
    subject,
    text
  };
  try {
    return await axios.post("/api/nearestLocations", data);
  } catch (error) {
    return error;
  }
};
