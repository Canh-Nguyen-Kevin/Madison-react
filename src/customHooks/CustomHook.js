import React from 'react'
import useCounterHook from './useCounterHook'

const CustomHook = () => {
  const [number,handleIncrease, handleDecrease] = useCounterHook(10,2)
  return (
    <div>CustomHook
Count: {number}
<div>
  <button onClick={ handleIncrease}>
    Increase 2
  </button>
  <button onClick={ handleDecrease}>
    Decrease 2
  </button>
</div>

    </div>
  )
}

export default CustomHook