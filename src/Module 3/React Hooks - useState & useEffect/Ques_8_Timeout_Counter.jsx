// Timeout Counter using useEffect
// Description: Create a counter that increments by one every second using the useEffect hook.

// Steps to needed:
//     - setInterval : Repeatedly increments the count every 1 second.
//     - clearInterval(timer) : Clears the timer when component unmounts to prevent memory leaks.
//     - Write your code within the file, by the name of component as Timeout_Counter
import React, { useState, useEffect } from 'react';

const TimeoutCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default TimeoutCounter;
