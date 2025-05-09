import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const ChildComponent = React.memo(({ count, onClick }) => {
  return (
    <div data-testid="child">
      <p>Child Count: {count}</p>
      <button onClick={onClick} data-testid="child-button">Increment Child</button>
    </div>
  );
});

ChildComponent.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

function ParentComponent() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const incrementParent = () => {
    setParentCount(prev => (typeof prev === 'number' ? prev + 1 : 0));
  };

  const incrementChild = useCallback(() => {
    setChildCount(prev => (typeof prev === 'number' ? prev + 1 : 0));
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
