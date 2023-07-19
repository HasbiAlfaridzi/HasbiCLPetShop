import axios from 'axios';
import Config from 'react-native-config';

const baseConfig = {
  baseURL: Config.BASEURL, // config
  headers: {
    'Content-Type': 'application/json',
  },
  /* other custom settings */
  validateStatus: () => true,
  timeout: 10000,
};

const api = axios.create(baseConfig);

api.interceptors.request.use(async function (config) {
  return config;
});

export default api;
