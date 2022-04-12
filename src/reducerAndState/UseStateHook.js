import React,{useState} from 'react'

const UseStateHook = () => {
 const [count,setCount] = useState(0);
const handleCount = (value)=>{
    setCount(count =>count + value);
}
  return (
    <div>
        Count: {count}
        <div>
            <button onClick={()=>handleCount(1)}>Increase 1</button>
            <button onClick={()=>handleCount(-1)}>Decrease 1</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default UseStateHook