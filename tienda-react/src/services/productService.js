export const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

export const addProduct = async (product) => {
  const res = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
