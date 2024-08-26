import './App.css'
import { useState,useEffect } from 'react';

function App() {
  const [A,setA] = useState(123);
  const [B,setB] = useState(321);


  useEffect(()=>{
    console.log('App Component rendered');
  },[A])

  return (
    <>
    <h1>{A}</h1>
    <button onClick={()=>{setA(A+5)}}>SetA</button>
    <h1>{B}</h1>
    <button onClick={()=>{setB(B+10)}}>SetB</button>
    </>
  )
}

export default App
