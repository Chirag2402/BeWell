import React, { useState } from 'react';
import './Card.css';

const Card = ({ defaultImage, hoverImage, title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? hoverImage : defaultImage}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
