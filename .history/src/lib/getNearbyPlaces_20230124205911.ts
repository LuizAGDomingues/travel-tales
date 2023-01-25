import axios from 'axios';

const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY';

export async function getNearbyPlaces(latitude: string, longitude: string, radius: string, type: string) {
    const location = `${latitude},${longitude}`;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${GOOGLE_MAPS_API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return error;
    }
}