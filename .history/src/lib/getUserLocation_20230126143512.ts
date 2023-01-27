import axios from 'axios'
import os from 'os'

const networkInfo = os.networkInterfaces();
const ip = networkInfo!.lo[0].address


async function getLocationByIP(ip: string) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  try {
    const response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${API_KEY}`, {
      considerIp: ip
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}