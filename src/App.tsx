import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>{count}</div>
     <button onClick = {() => setCount((prevCount) => prevCount + 1)}>Click me to add</button>
     <button onClick = {() => setCount((prevCount) => prevCount - 1)}>Click me to substract</button>
    </div>
  );
}

export default App;
