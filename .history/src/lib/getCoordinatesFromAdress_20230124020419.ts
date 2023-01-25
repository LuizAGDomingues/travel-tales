import axios from 'axios';

function getCoordinatesFromAddress(address) {
  const API_KEY = process.env.;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;
  
  return axios.get(url)
    .then(response => {
      if(response.data.status === 'OK') {
        const location = response.data.results[0].geometry.location;
        return { lat: location.lat, lng: location.lng };
      } else {
        throw new Error('Unable to retrieve coordinates for the address');
      }
    })
    .catch(error => {
      console.log(error);
    });
}