import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/count';
import { AppState } from './redux/store';

function App() {

 const dispatch = useDispatch();
 const count = useSelector((state: AppState) => state.count)

  return (
    <div className="App">
      <div>{count}</div>
     <button onClick = {() => dispatch(increment())}>Click me to add</button>
     <button onClick = {() => dispatch(decrement())}>Click me to substract</button>
    </div>
  );
}

export default App;
