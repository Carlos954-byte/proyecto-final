import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productsAPI";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { cart, dispatch } = useCart();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const getQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
  };

  const increaseQuantity = (product) => {
    addToCart(product);
  };

  const decreaseQuantity = (productId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: productId });
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src={product.image} alt={product.title} className="h-16 object-contain mb-4" />
            <h3 className="font-semibold text-base mb-2 text-center">{product.title}</h3>
            <p className="mb-4 text-lg font-medium">${product.price}</p>
            <div className="flex items-center space-x-3 mb-4">
              <button
                onClick={() => decreaseQuantity(product.id)}
                disabled={getQuantity(product.id) === 0}
                className="bg-gray-300 px-4 py-1 rounded disabled:opacity-50"
              >
                -
              </button>
              <span className="text-lg font-semibold">{getQuantity(product.id)}</span>
              <button
                onClick={() => increaseQuantity(product)}
                className="bg-indigo-600 text-white px-4 py-1 rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
