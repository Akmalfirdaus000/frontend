import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // URL API backend Laravel
  withCredentials: true,
});

export default api;
