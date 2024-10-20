import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,  // Tidak menggunakan kredensial CSRF
    });
    return response.data;
  } catch (error) {
    throw new Error('Login gagal');
  }
};
