import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const register = async (name: string, email: string, password: string, passwordConfirmation: string) => {
  const response = await fetch(`${API_URL}/csrf-token`, {
    credentials: 'include',
  });
  const { csrf_token } = await response.json();

  try {
    const response = await axios.post(`${API_URL}/register`, 
      { name, email, password, password_confirmation: passwordConfirmation }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrf_token, // Jika menggunakan CSRF
        },
        withCredentials: true,
      }
    );
    return response.data;
  }catch (error) {
    throw new Error('register gagal');
  }
};
