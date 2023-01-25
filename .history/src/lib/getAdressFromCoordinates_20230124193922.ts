import { reverseGeocode } from 'googlemaps';

const googleMapsAPIKey = process.env.GOOGLE_MAPS_API_KEY;
const client = new reverseGeocode({ key: googleMapsAPIKey });

const getLocationInfo = async (latitude: number, longitude: number) => {
  try {
    const response = await client.reverseGeocode({
      params: {
        latlng: `${latitude}, ${longitude}`,
      },
      timeout: 1000, 
    });
    return response.json.results[0].formatted_address;
  } catch (err) {
    console.error(err);
    return 'Não foi possível obter informações de localização';
  }
};

const locationInfo = await getLocationInfo(userLatitude, userLongitude);
console.log(locationInfo);