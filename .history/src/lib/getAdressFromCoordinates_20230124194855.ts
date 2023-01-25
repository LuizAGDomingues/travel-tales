import {  useGeoCoder } from "@react-google-maps/api"

const geoCoder = useGeoCoder()

const getLocationInfo = async (latitude: number, longitude: number) => {
  try {
    const response = await geoCoder.fromLatLng({lat: latitude, lng: longitude})
    return response[0].formatted_address;
  } catch (err) {
    console.error(err);
    return 'Não foi possível obter informações de localização';
  }
};