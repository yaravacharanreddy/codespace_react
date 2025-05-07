import React, { useState, useEffect } from 'react';

const WindowWidth = () => {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h2>Window Width</h2>
      <p>Current window width: {width}px</p>
    </div>
  );
};

export default WindowWidth;
