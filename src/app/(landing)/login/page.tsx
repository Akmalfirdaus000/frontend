// pages/login.tsx
'use client'
import { useState } from 'react';
import { login } from '../../../lib/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah refresh halaman
    setError('');

    try {
      const response = await login(email, password);
      console.log('Login berhasil:', response); // Tampilkan respons di console
      // Lakukan tindakan setelah login sukses, misalnya redirect
    } catch (err) {
      setError(err.message); // Menampilkan kesalahan di UI
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Menampilkan error */}
    </form>
  );
};

export default Login;
