import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bienvenido al Dashboard</h1>
      <p>Hola, {user?.name}</p>
    </div>
  );
};

export default Dashboard;