
import Test from './test'
import './App.css'
import { useState } from 'react';

function App() {

  // var count=11;

  const [count,setCount]=useState(1)
  function Increment1(){
    setCount(count+2);
    console.log(count);
    
  }

  return (
    <>
      <h1>We run our app</h1>
      
      <h1>{count}</h1>

      <button onClick={Increment1}>Increment By 2</button>
      
    </>
  )
}

export default App
