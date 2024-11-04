import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';

const Messages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    "ENNTER THE FOLLOWING CODE",
    "AA3BO4XLTUKZ894BK",
   
  ];

  const duration = [
    4000,
    15000,
   
  ];

  const handleComplete = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length); // Move to the next message
  };

  return (
    <div style={{ fontFamily: 'Pixelify Sans, sans-serif' }}>
      {messages.length > 0 && (
        <Typewriter
          key={currentIndex} // Ensures the component re-renders with new messages
          text={messages[currentIndex]}
          speed={150}
          onComplete={handleComplete}
          pauseDuration={duration[currentIndex]}
        />
      )}
    </div>
  );
};

export default Messages; // Memoize the Messages component
