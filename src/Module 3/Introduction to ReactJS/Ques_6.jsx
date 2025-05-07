import React from 'react';

const ConditionalRendering = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}

export default ConditionalRendering;