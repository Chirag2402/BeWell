import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Category.css';

const Category = ({ setCategory }) => {
  return (
    <div className="category-container">
<h1 className="section-title">Shop By Category</h1>

      {/* Category Bar (Shop by Category) */}
      <nav className="category-nav">
      
        <ul className="category-list">
          <li onClick={() => setCategory("Organic Wholefoods")}>
            <span className="category-item">Organic Wholefoods</span>
          </li>
          <li onClick={() => setCategory("Supplements")}>
            <span className="category-item">Supplements</span>
          </li>
          <li onClick={() => setCategory("Ayurvedic Range")}>
            <span className="category-item">Ayurvedic Range</span>
          </li>
          <li onClick={() => setCategory("Natural Tea")}>
            <span className="category-item">Natural Tea</span>
          </li>
          <li onClick={() => setCategory("Herbs")}>
            <span className="category-item">Herbs</span>
          </li>
          <li onClick={() => setCategory("Other Products")}>
            <span className="category-item">Other Products</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Category;
