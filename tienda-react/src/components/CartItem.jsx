import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <li className="mb-4 flex items-center space-x-4 border-b pb-4">
      <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
      <div className="flex-1">
        <h2 className="font-semibold">{item.title}</h2>
        <p>${item.price}</p>
        <div className="flex items-center space-x-2 mt-1">
          <button
            className="bg-gray-300 px-2 rounded"
            onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="bg-gray-300 px-2 rounded"
            onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        <button
          className="ml-4 text-red-500"
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default CartItem;
