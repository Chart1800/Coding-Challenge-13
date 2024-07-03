//U94741303
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch('https://course-api.com/react-store-products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>React Store</h1>
      <div className="product">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
