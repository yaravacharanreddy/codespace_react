// Text Input and Display
// Description: Create a React component that allows users to input text in a textbox and displays the input below the textbox.

// Steps:
//     - Write your code within the file, by the name of component as Text_Input
import React, { useState } from 'react';

const TextInputDisplay = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Type something"
      />
      <p>{inputText}</p>
    </div>
  );
}

export default TextInputDisplay;
