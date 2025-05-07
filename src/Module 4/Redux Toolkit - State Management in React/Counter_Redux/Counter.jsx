import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter = memo(() => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
});

export default Counter;
