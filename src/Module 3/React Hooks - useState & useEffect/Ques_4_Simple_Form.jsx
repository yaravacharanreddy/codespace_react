// Simple Form Submission
// Description: Create a simple form with a name input field and a submit button. Display an alert with the name when the form is submitted.

// Steps:
//     - onSubmit: Calls handleSubmit , which prevents the default form submission action and shows an alert.
//     - Write your code within the file, by the name of component as Simple_Form
import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      alert('Please enter your name!');
    } else {
      alert(`Hello, ${name}!`);
      setSubmitted(true);
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
    setSubmitted(false); // Reset the submitted status when name changes
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thank you for submitting, {name}!</p>}
    </div>
  );
}

export default SimpleForm;
