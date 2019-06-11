import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-backend-w6.herokuapp.com'
});

export default api;
