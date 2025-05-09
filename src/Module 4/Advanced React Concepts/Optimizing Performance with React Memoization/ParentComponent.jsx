import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick, count }) => {
  console.log('Child rendered');
  return (
    <div data-testid="child">
      <p>Child Count: {count}</p>
      <button onClick={onClick} data-testid="child-button">Increment from Child</button>
    </div>
  );
});

function ParentComponent() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const incrementParent = () => setParentCount(prev => prev + 1);

  const incrementChild = useCallback(() => {
    setChildCount(prev => prev + 1);
  }, []);

  return (
    <div data-testid="parent">
      <h2>Parent Count: {parentCount}</h2>
      <button onClick={incrementParent} data-testid="parent-button">Increment Parent</button>
      <ChildComponent count={childCount} onClick={incrementChild} />
    </div>
  );
}

export default ParentComponent;
