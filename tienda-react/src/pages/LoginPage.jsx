import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar sesión</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuario"
        className="border border-gray-300 p-3 w-full mb-6 rounded focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600 transition duration-300"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-full transition duration-300 shadow-md hover:shadow-lg">Entrar</button>
    </form>
  );
}

export default LoginPage;