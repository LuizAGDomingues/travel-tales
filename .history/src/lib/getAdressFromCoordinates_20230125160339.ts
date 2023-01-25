import axios from 'axios';

const googleMapsAPIKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const getLocationInfo = async (latitude: string, longitude: string) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIKey}`);
    console.log()
    return response.data.results[0].formatted_address;
  } catch (err) {
    console.error(err);
    return 'Não foi possível obter informações de localização';
  }
};