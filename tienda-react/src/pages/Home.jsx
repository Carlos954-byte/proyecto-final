import React from "react";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a Kai Pet Shop 🐾</h1>
      <p className="mb-4">Navega por el menú para ver productos, carrito o iniciar sesión.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="border rounded p-4 shadow">
          <img
            src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80"
            alt="Perro feliz"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">Perros felices</h2>
          <p>Encuentra todo para el cuidado y diversión de tu perro.</p>
        </div>
        <div className="border rounded p-4 shadow">
          <img
            src="https://images.unsplash.com/photo-1504203703039-1a1a1a1a1a1a?auto=format&fit=crop&w=400&q=80"
            alt="Gato curioso"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">Gatos curiosos</h2>
          <p>Accesorios y alimentos para mantener a tu gato feliz y saludable.</p>
        </div>
        <div className="border rounded p-4 shadow">
          <img
            src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
            alt="Pájaros exóticos"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">Pájaros exóticos</h2>
          <p>Todo lo necesario para el cuidado de tus aves favoritas.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
