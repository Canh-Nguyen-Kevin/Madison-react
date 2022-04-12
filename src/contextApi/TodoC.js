import React,{useContext} from 'react'
import { todoContext } from './WithReducer'

const TodoC = () => {
    const{state,dispatch} = useContext(todoContext);
  return (
    <div>TodoC
        Count: {state.count}
        <div>
            <button onClick={()=>dispatch({type: "increase5", value: 5})}>
                Increase 5
            </button>
            <button onClick={()=>dispatch({type: "decrease5", value: 5})}>
                Decrease 5
            </button>
            <button onClick={()=>dispatch({type: "reset"})}>
                Reset
            </button>
        </div>
    </div>
  )
}

export default TodoC