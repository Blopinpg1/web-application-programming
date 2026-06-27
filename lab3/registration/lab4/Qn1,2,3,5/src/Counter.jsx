import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>Count is : {counter}</p>
    <div className='counter-wrapper'>
      <button onClick={() => setCounter(counter + 1)}>Increament</button>
      <button onClick={() => setCounter(counter - 1)}>Decreament</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
    </>
  );
};

export default Counter;
