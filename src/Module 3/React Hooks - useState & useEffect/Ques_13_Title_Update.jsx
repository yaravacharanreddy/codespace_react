// Document Title Update

// 1. Goal: Change the document title to reflect the number of button clicks.
// 2. Steps:
//     - Initialize a count state using useState .
//     - Use useEffect to update the document title whenever the count changes.
//     - Create a button to increase the count and see the document title change.
//     - Write your code within the file, by the name of component as Title_Update
import React, { useState, useEffect } from 'react';

const TitleUpdate = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = `Button clicked ${clicks} times`;
  }, [clicks]);

  const handleClick = () => {
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <div>
      <h2>Click the Button</h2>
      <button onClick={handleClick}>Click me</button>
      <p>Button clicked {clicks} times</p>
    </div>
  );
};

export default TitleUpdate;
