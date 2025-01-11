    import React, { useState } from 'react';
    import './SearchBar.css'; // Add your custom styles for the search bar
    import cardData from './CardData';

    const SearchBar = ({ isSearchOpen, setIsSearchOpen }) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Handle the input change in search bar
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter products based on the search query
    const filteredProducts = cardData.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="search-bar-container">
        {/* Conditionally render search bar only if isSearchOpen is true */}
        {isSearchOpen && (
            <div className="search-bar">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="search-input"
            />
            </div>
        )}

        {/* Display the filtered products */}
        <div className="filtered-products">
            {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
                <div key={index} className="product-card">
                <img src={product.defaultImage} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                </div>
            ))
            ) : (
            <p>No products found</p>
            )}
        </div>
        </div>
    );
    };

    export default SearchBar;
