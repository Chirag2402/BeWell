import React, { useState } from 'react';
import Card from './Card'; // Import the Card component
import cardData from './CardData'; // Import the product data
import './ProductPage.css';

const ProductPage = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category and search query
  const filteredProducts = cardData.filter((product) => {
    const matchesCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true; // If no category is selected, show all products
    const matchesSearchQuery = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <div className="product-page">
      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Check if there are products available */}
      {filteredProducts.length > 0 ? (
        <div className="product-cards-container">
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              defaultImage={product.defaultImage}
              hoverImage={product.hoverImage}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      ) : (
        <p>No products available matching your search.</p>
      )}
    </div>
  );
};

export default ProductPage;
