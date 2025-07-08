import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, dispatch } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tu carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-4 flex items-center space-x-4 border-b pb-4">
                <img src={item.image} alt={item.title} className="w-8 h-8 object-cover rounded" />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>${item.price}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      className="bg-gray-300 px-2 rounded"
                      onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-300 px-2 rounded"
                      onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="ml-4 text-red-500"
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 font-bold text-lg">
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
