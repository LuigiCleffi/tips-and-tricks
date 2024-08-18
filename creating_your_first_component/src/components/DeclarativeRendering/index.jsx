import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>
        <h3>Click me</h3>
      </button>
    </div>
  );
}

export default Counter;
