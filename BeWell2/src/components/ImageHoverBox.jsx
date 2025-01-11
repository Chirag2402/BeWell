// ImageHoverBox.jsx
import React, { useState, useEffect } from "react";
import "./ImageHoverBox.css";
import "/image1.jpg";
import "/image2.jpg";
import "/image3.jpg";
import "/image4.jpg";

const ImageHoverBox = () => {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let interval;
    if (hovering) {
      interval = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [hovering, images.length]);

  return (
    <div className="ImgBox">
    <div
      className="image-hover-box"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <img
        src={images[currentImage]}
        alt="Hover effect"
        className="hover-image"
      />
    </div>
    </div>
  );
};

export default ImageHoverBox;
