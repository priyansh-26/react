import {useState}from 'react'

function useCustom() {


    const [A,setA]=useState(11);

    function Increment(){
        setA(A+5);
    }
    function Decrement(){
        setA(A-3);
    }

  return (
    [A,Increment,Decrement]
  )
}

export default useCustom
