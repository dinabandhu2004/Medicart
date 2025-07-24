import React, { useState } from 'react';
import './admin.css';
import Nav from '../home_componets/Nav';
import axios from 'axios';

function AdminDashboard() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!productName || !productPrice || !productImage) {
      alert('Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('pname', productName);
    formData.append('price', productPrice);
    formData.append('image', productImage);

    try {
      const res = await axios.post(
        'http://127.0.0.1:3000/add',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (res.data && res.data.msg === 'Product added sucessfully') {
        alert('Product added successfully!');
        setProductName('');
        setProductPrice('');
        setProductImage(null);
        document.querySelector('input[type="file"]').value = null;
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (
    <>
      <Nav />
      <div className="admin-container">
        <h2>Admin Dashboard - Add Product</h2>
        <form className="admin-form" onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProductImage(e.target.files[0])}
            required
          />

          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
}

export default AdminDashboard;
