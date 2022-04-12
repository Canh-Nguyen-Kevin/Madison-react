import React,{useState} from 'react'

const useCounterHook = (count,value) => {
  const[number,setNumber] = useState(count);
  const handleIncrease = ()=>{
    setNumber(count=>count + value);
  }
  const handleDecrease = ()=>{
    setNumber(count=>count - value);
  }
  return [number,handleIncrease,handleDecrease];
}

export default useCounterHook;