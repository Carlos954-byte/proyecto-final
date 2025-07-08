import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LandingPage from '../pages/LandingPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import ProductDashboard from '../pages/ProductDashboard';
import Layout from '../components/Layout';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const NotFound = () => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">404 - Página no encontrada</h2>
      <p>La página que buscas no existe.</p>
    </div>
  );
};

const LayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/cart', element: <CartPage /> },
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/product-dashboard',
        element: (
          <ProtectedRoute>
            <ProductDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '*', element: <NotFound /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
