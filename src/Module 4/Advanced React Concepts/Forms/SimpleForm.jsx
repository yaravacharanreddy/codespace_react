import React, { useState } from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation (optional)
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);

    // Clear the form
    setFormData({
      name: '',
      email: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Simple Controlled Form</h2>

      <div style={styles.field}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  },
  field: {
    marginBottom: '1rem'
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    marginTop: '0.25rem'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default SimpleForm;
