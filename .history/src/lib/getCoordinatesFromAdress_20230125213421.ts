import axios from 'axios';

export function getCoordinatesFromAddress(address: string) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;
  
  return axios.get(url)
    .then(response => {
      if(response.data.status === 'OK') {
        const location = response.data.results[0].geometry.location;
        return { lat: location.lat, lng: location.lng };
      } else {
        throw new Error('Unable to retrieve coordinates for the address');
        console.log(response.data.status)
      }
    })
    .catch(error => {
      console.log(error);
    });
}