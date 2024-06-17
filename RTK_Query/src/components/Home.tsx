import{ useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

function Counter() {
  const [count, setCount] = useState(0);

  if (count > 5) {
    throw new Error("I crashed");
  }

  return (
    <div>
      <div>Counter :</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Home() {
  return (
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
  );
}

export default Home;