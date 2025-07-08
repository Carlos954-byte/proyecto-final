import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const CartForm = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🧾 Carrito</h2>
      {cart.length === 0 ? <p>No hay productos.</p> :
        cart.map(item => <CartItem key={item.id} item={item} />)}
      <div className="mt-4 font-bold text-right">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default CartForm;
