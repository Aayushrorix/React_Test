import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Counter = () => {
  const { count, increment } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;