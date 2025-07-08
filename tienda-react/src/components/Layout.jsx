import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaServer } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <div className="bg-white text-black min-h-screen transition duration-300">
      <nav className="bg-gray-100 text-black p-4 flex flex-wrap justify-between items-center shadow-md transition duration-300">
        <div className="flex flex-wrap items-center space-x-6 md:space-x-8">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-gray-600 transition"
          >
            <FaServer size={20} />
            <span className="font-semibold text-lg">Inicio</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center space-x-2 hover:text-gray-600 transition"
          >
            <FaShoppingCart size={20} />
            <span className="font-semibold text-lg">Carrito</span>
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-gray-600 transition font-semibold text-lg"
          >
            Dashboard
          </Link>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <Link
            to="/login"
            className="hover:text-gray-600 transition font-semibold text-lg"
          >
            Login
          </Link>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
