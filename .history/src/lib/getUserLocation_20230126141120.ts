import axios from 'axios'

async function getLocationByIP(ip) {
  try {
    const response = await axios.get(`https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}