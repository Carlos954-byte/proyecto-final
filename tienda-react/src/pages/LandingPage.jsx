import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import { useCart } from '../context/CartContext';

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const [quantities, setQuantities] = React.useState({});

  const increaseQuantity = (id) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQuantity = (id) => {
    setQuantities(prev => ({ ...prev, [id]: prev[id] > 0 ? prev[id] - 1 : 0 }));
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: 'repeat(8, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
          gap: '4px',
        }}
      >
        {products.map((p, index) => {
          const getGridSpan = () => {
            if (index % 6 === 0) return { gridColumn: 'span 2', gridRow: 'span 2' };
            if (index % 4 === 0) return { gridColumn: 'span 2' };
            if (index % 2 === 0) return { gridRow: 'span 2' };
            return {};
          };
          return (
            <div
              key={p.id}
              className="border p-4 rounded shadow flex flex-col"
              style={getGridSpan()}
            >
              <img
                src={p.image}
                alt={p.title}
                className="rounded mb-2 flex-shrink-0"
                style={{
                  borderRadius: '0.375rem',
                  width: '15%',
                  height: '15%',
                  objectFit: 'cover',
                  margin: '0 auto',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <h2 className="text-lg font-semibold mt-2">{p.title}</h2>
              <p>${p.price}</p>
              <div className="flex items-center space-x-2 mt-auto">
                <button
                  className="bg-gray-300 px-2 rounded"
                  onClick={() => decreaseQuantity(p.id)}
                >
                  -
                </button>
                <span>{quantities[p.id] || 1}</span>
                <button
                  className="bg-gray-300 px-2 rounded"
                  onClick={() => increaseQuantity(p.id)}
                >
                  +
                </button>
              </div>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
                onClick={() => addToCart(p)}
              >
                Agregar al carrito
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
