'use client'
import React, { useState } from 'react';
import { register } from '@/lib/auth-api/register'; // Ganti dengan path yang sesuai

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // Tipe ditambahkan di sini
    e.preventDefault();
    setError('');

    try {
      const data = await register(name, email, password, passwordConfirmation);
      console.log('Register berhasil:', data);
      // Lakukan sesuatu setelah berhasil, misalnya redirect atau menampilkan pesan
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={passwordConfirmation} 
        onChange={(e) => setPasswordConfirmation(e.target.value)} 
        required 
      />
      <button type="submit">Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default RegisterForm;
