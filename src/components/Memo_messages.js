import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';

const Messages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    "NNow this page is importing message component using the react memo",
    "Which means this dialogue box wont re-render again with the parent element",
    "ENNTER THE FOLLOWING CODE",
    "A3BK4XLTUKK894BK",
   
  ];

  const duration = [
    4000,
    4000,
    4000,
    40000,
   
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

export default React.memo(Messages); // Memoize the Messages component
