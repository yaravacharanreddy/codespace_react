// Local Storage with useEffect and useState
// Description: Create a component where the user's input is saved in local storage and persists after page reload.

// Steps to needed:
//     - useState(() => {...}) : Initializes the input with local storage value.
//     - useEffect([input]) : Updates local storage each time input changes.
//     - Write your code within the file, by the name of component as Local_Storage.
import React, { useState, useEffect } from 'react';

const LocalStorageInput = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const savedText = localStorage.getItem('userInput');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userInput', text);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Persistent Input</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Current Input: {text}</p>
    </div>
  );
};

export default LocalStorageInput;
