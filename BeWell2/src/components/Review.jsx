import React from 'react';
import './Review.css'; // Import CSS file for styling

const Review = () => {
  return (
    <div className="review-container">
      {/* Header Section */}
      <header className="review-header">
        <h1>Customer Reviews</h1>
        <p>Hear what our customers have to say!</p>
      </header>

      {/* Reviews Section */}
      <div className="review-content">
        <div className="review-card">
          <p className="review-text">
            "Amazing products! The quality is unmatched, and I feel healthier already."
          </p>
          <p className="review-author">- Jane Doe</p>
        </div>

        <div className="review-card">
          <p className="review-text">
            "Fast delivery and fantastic customer service. Highly recommend!"
          </p>
          <p className="review-author">- John Smith</p>
        </div>

        <div className="review-card">
          <p className="review-text">
            "I've tried so many similar products, but nothing compares to this."
          </p>
          <p className="review-author">- Sarah Lee</p>
        </div>
      </div>


    </div>
  );
};

export default Review;
