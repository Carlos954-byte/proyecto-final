import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartForm from "./components/CartForm";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDashboard from "./pages/ProductDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Navbar />
            <Routes>
              {/* Página de inicio */}
              <Route path="/" element={<Home />} />
              {/* Login público */}
              <Route path="/login" element={<Login />} />
              {/* Rutas protegidas: se requiere sesión */}
              <Route
                path="/productos"
                element={
                  <ProtectedRoute>
                    <ProductList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/carrito"
                element={
                  <ProtectedRoute>
                    <CartForm />
                  </ProtectedRoute>
                }
              />
              {/* RUTA PARA EL DASHBOARD DE PRODUCTOS */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <ProductDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
