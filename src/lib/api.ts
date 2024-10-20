// api.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
  },
});

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/login', {
      email,
      password,
    });
    return response.data; // Kembalikan data respons
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Login failed'); // Menangani kesalahan
    }
    throw new Error('Login failed. Please try again.'); // Menangani kesalahan umum
  }
};
