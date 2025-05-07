// Passing Props to Components
// Description: Create a Profile component that receives name and age as props and displays them.

// Step 1: Write your code within the file, by the name of component as Profile
// Step 2: Update App.js to pass props to the Profile componentimport React from 'react';

import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, age }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

Profile.defaultProps = {
  name: 'Unknown',
  age: 'Not specified'
};

export default Profile;