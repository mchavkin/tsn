import axios from 'axios';
import storage from '../redux/storage';

axios.defaults.baseURL = 'https://playground.tesonet.lt/v1';

export const getToken = (auth) => axios.post('/tokens', auth, {
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getServers = () => axios.get('/servers', {
  headers: {
    Authorization: `Bearer ${storage.getToken()}`,
  },
});
