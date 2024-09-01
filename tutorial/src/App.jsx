import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(11);
  const [count1, setCount1] = useState(111);

  const calc=useMemo(dec,[])

  function dec(){
    setCount1(count1-5);
  }
  function inc(){
    setCount(count+5);
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={inc}>Inc</button>
        <br />
        <h1>{count1}</h1>
        <button onClick={dec}>Dec</button>
      </div>
    </>
  )
}

export default App
