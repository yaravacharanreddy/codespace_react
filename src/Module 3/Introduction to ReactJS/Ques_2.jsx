// Embedding JavaScript Expressions in JSX
// Description: Embed a JavaScript expression in JSX to display the current year.
// Use this component in App.js
import React from 'react';

const Ques2 = () => {
  const currentYear = new Date().getFullYear();
  return <h1>Current Year: {currentYear}</h1>;
}

export default Ques2;

