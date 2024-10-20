'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Perbarui import ini
import { login } from '../../../lib/auth-api/login';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();  // Menggunakan useRouter dari next/navigation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (response.token) {
        // Simpan token ke local storage atau state management
        localStorage.setItem('token', response.token);
        // Arahkan pengguna ke halaman dashboard
        router.push('/dashboard');
      }
    } catch (error: any) {
      setError('Login gagal. Periksa email dan password Anda.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
