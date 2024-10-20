import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (email: string, password: string) => {
  const response = await fetch('http://localhost:8000/api/csrf-token', {
    credentials: 'include',
  });
  const { csrf_token } = await response.json();

  try {
    const response = await axios.post(`${API_URL}/login`, { email, password }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-TOKEN': csrf_token,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error('Login gagal');
  }
};
