import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">
        <Link to="/">🐾 Kai Pet Shop</Link>
      </h1>

      <ul className="flex space-x-4 items-center">
        <li>
          <Link to="/" className="hover:underline">Inicio</Link>
        </li>

        {isAuthenticated && (
          <>
            <li>
              <Link to="/productos" className="hover:underline">Productos</Link>
            </li>
            <li>
              <Link to="/carrito" className="hover:underline">
                Carrito ({cart.length})
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:underline">Dashboard</Link>
            </li>
          </>
        )}

        {!isAuthenticated ? (
          <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
        ) : (
          <li>
            <button onClick={handleLogout} className="bg-white text-indigo-600 px-2 py-1 rounded">
              Cerrar sesión
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
