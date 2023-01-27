import axios from 'axios'

const getIP = async (req: any) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  return ip;
};

app.get('/', async (req: any, res: any) => {
  const ip = await getIP(req);
  res.send(`O endereço IP do usuário é: ${ip}`);
});

async function getLocationByIP(ip) {
  try {
    const response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY`, {
      considerIp: ip
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}