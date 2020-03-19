import axios from 'axios';

const nominatimAPI = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org/',
});

export default nominatimAPI;
