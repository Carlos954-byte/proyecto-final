import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/productService';

function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      alert('Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async () => {
    const newProduct = {
      title: 'Nuevo Producto',
      price: 100,
      description: 'Descripción del producto',
      image: 'https://via.placeholder.com/60',
      category: 'categoria',
    };
    try {
      const added = await addProduct(newProduct);
      alert(`Producto agregado con ID ${added.id}`);
      fetchProducts();
    } catch (error) {
      alert('Error al agregar producto');
    }
  };

  const handleEditClick = (product) => {
    setEditProductId(product.id);
    setEditFormData({
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    });
  };

  const handleEditFormChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setEditFormData({
      ...editFormData,
      [fieldName]: fieldValue,
    });
  };

  const handleCancelClick = () => {
    setEditProductId(null);
  };

  const handleSaveClick = async (id) => {
    try {
      await updateProduct(id, editFormData);
      alert(`Producto con ID ${id} actualizado`);
      setEditProductId(null);
      fetchProducts();
    } catch (error) {
      alert('Error al actualizar producto');
    }
  };

  const handleDeleteClick = (id) => {
    // Temporarily remove product from UI
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleDeleteConfirm = async (id) => {
    try {
      await deleteProduct(id);
      alert(`Producto con ID ${id} eliminado`);
      fetchProducts();
    } catch (error) {
      alert('Error al eliminar producto');
    }
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>Dashboard de Productos</h2>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={handleAdd}>➕ Agregar Producto</button>
      </div>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>ID</th>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>
                  {editProductId === prod.id ? (
                    <input
                      type="text"
                      name="image"
                      value={editFormData.image}
                      onChange={handleEditFormChange}
                    />
                  ) : (
                    <img src={prod.image} alt={prod.title} width="60" />
                  )}
                </td>
                <td>{prod.id}</td>
                <td>
                  {editProductId === prod.id ? (
                    <input
                      type="text"
                      name="title"
                      value={editFormData.title}
                      onChange={handleEditFormChange}
                    />
                  ) : (
                    prod.title
                  )}
                </td>
                <td>
                  {editProductId === prod.id ? (
                    <input
                      type="text"
                      name="description"
                      value={editFormData.description}
                      onChange={handleEditFormChange}
                    />
                  ) : (
                    prod.description
                  )}
                </td>
                <td>
                  {editProductId === prod.id ? (
                    <input
                      type="text"
                      name="category"
                      value={editFormData.category}
                      onChange={handleEditFormChange}
                    />
                  ) : (
                    prod.category
                  )}
                </td>
                <td>
                  {editProductId === prod.id ? (
                    <input
                      type="number"
                      name="price"
                      value={editFormData.price}
                      onChange={handleEditFormChange}
                    />
                  ) : (
                    `$${prod.price.toLocaleString()}`
                  )}
                </td>
                <td>
                  {editProductId === prod.id ? (
                    <>
                      <button onClick={() => handleSaveClick(prod.id)}>💾</button>{' '}
                      <button onClick={handleCancelClick}>❌</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(prod)}>✏️</button>{' '}
                      <button onClick={() => handleDeleteClick(prod.id)}>🗑️</button>{' '}
                      <button onClick={() => handleDeleteConfirm(prod.id)}>✅</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductDashboard;
