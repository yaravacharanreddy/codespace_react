// Favorite Color

// 1. Goal: Allow users to input and display their favorite color.
// 2. Steps:
//     - Create a state variable favoriteColor with an initial value of an empty string.
//     - Implement an input field to update favoriteColor using onChange .
//     - Display the value of favoriteColor below the input field.
//     - Write your code within the file, by the name of component as Timeout_Counter
import React, { useState } from 'react';

const FavoriteColor = () => {
  const [color, setColor] = useState('');
  const [submittedColor, setSubmittedColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedColor(color);
  };

  return (
    <div>
      <h2>Favorite Color</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="Enter your favorite color"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedColor && <p>Your favorite color is: {submittedColor}</p>}
    </div>
  );
};

export default FavoriteColor;
