import React, { createContext, useState } from 'react';

// Create a Context for the counter
const CounterContext = createContext();

// Create a provider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };