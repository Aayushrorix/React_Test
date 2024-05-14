import React, { useRef } from 'react';

export default function Ref() {
    const ref = useRef<number>(0);
  
    function handleClick() {
      ref.current = ref.current + 1;
      alert('You clicked ' + ref.current + ' times!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me!
      </button>
    );
}