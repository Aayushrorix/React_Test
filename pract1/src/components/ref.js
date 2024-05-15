import React, { useState, useRef } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const clickCountRef = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    clickCountRef.current += 1;
    console.log(`Button clicked ${clickCountRef.current} times`);
  };

  return (
    <div>
      {/* <p>State count: {count}</p> */}
      <button onClick={handleClick}>Click me</button>
      <p>Ref count: {clickCountRef.current}</p>
    </div>
  );
};

export default ClickCounter;