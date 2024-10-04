import gatsbyBook from './images/gatsbyBook.jpg';
import nineteen from './images/1984.jpg';
import mockingbird from './images/mockingbird.jpg';
// MovingImage.js
import React, { useState, useEffect, useRef } from 'react';

const MovingImage = () => {
  const images = [
    gatsbyBook,nineteen,mockingbird
    // Add more image URLs or paths here
  ];
  let currentIndex = 0

  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [position, setPosition] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const speed = 1; // Adjust speed as needed

  const imageRef = useRef(null);

  // Start the animation once the image width is known
  useEffect(() => {
    let animationFrameId: number;

    const moveImage = () => {
      setPosition(prevPosition => {
        const newPosition = prevPosition;

        if (newPosition > window.innerWidth) {
          return -imageWidth; // Start from left outside of view
        } else {
          return newPosition;
        }
      });

      animationFrameId = requestAnimationFrame(moveImage);
    };

    return () => {
      if (animationFrameId) 
        cancelAnimationFrame(animationFrameId);
    };
  }, [imageWidth, images.length, speed]);




  return (
    <img
      ref={imageRef}
      src={images[currentImageIndex]}
      alt="Moving"
     
      style={{
        position: 'absolute',
        left: position,
        top: '70%',
        transform: 'translateY(-50%)',
        transition: 'none',
      }}
    />
  );
};

export default MovingImage;