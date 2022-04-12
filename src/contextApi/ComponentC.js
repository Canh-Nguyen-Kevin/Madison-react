import React, {useContext} from 'react'
import {numberContext} from "./UseContextHook";

const ComponentC = () => {
    const {state,setState} = useContext(numberContext);
  return (
    <div>ComponentC
        {state}
        <div>
            <button onClick={()=>setState(state => state + 1)}>
                Increase
            </button>
            <button onClick={()=>setState(state => state - 1)}>
                Decrease
            </button>
        </div>
    </div>
  )
}

export default ComponentC