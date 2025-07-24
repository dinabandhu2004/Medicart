import React, { useState, useEffect } from 'react';
import './Shop.css';
import axios from 'axios';

const Shop = () => {
  const [searchText, setSearchText] = useState('');
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const GetproductData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:3000/getdata");
      console.log("my res", res);
      setProductData(res.data.productData);
      setFilteredData(res.data.productData); // initially show all products
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // live filtering
    const filtered = productData.filter((item) =>
      item.pname.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    GetproductData();
  }, []);

  return (
    <>
      <div className='shopSection'>
        <h2>Shop Health Products</h2>

        <div className='shopflex'>
          <input
            className='shopSearch'
            type="text"
            placeholder='Search for products...'
            value={searchText}
            onChange={handleInputChange}
          />
          <button className='searchbtn' onClick={() => {}}>Search</button>
        </div>

        <div className='productGrid'>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} className='productCard'>
                <img src={`http://127.0.0.1:3000/productuploads/${item.image}`} alt={item.pname} />
                <h3>{item.pname}</h3>
                <p>₹ {item.price}</p>
                <button className='addCartBtn'>Add to Cart</button>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', marginTop: '20px' }}>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
