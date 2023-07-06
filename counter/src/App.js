import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count-display">
        <p className={count === 0 ? 'zero' : ''}>Count: {count}</p>
      </div>
      <div className="button-container">
        <button className="increment-button" onClick={increment}>
          +
        </button>
        <button className="decrement-button" onClick={decrement}>
          -
        </button>
      </div>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default App;