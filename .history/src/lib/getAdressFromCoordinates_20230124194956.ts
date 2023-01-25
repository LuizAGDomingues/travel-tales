import axios from 'axios';

const googleMapsAPIKey = process.env.GOOGLE_MAPS_API_KEY;

const getLocationInfo = async (latitude: number, longitude: number) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIKey}`);
    return response.data.results[0].formatted_address;
  } catch (err) {
    console.error(err);
    return 'Não foi possível obter informações de localização';
  }
};