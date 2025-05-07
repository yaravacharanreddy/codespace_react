// Simple Form Submission
// Description: Create a simple form with a name input field and a submit button. Display an alert with the name when the form is submitted.

// Steps:
//     - onSubmit: Calls handleSubmit , which prevents the default form submission action and shows an alert.
//     - Write your code within the file, by the name of component as Simple_Form
import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
