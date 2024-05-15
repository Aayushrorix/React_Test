import React, { useState, useMemo } from 'react';

const ParentComponent1 = () => {
  const [count, setCount] = useState(0);

  // Memoize the result of the expensive calculation
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
    // Simulate an expensive calculation
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  );
};

export default ParentComponent1;