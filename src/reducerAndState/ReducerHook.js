import React, {useReducer} from 'react'

const initialState={
count: 0
}
const numberReducer = (state,action)=>{
switch (action.type){
    case "increase1": return{...state,count: state.count + action.value};
    case "decrease1": return{...state,count: state.count - action.value};
    case "reset": return{...state,count: 0};
    default: return state; 

}
}

const ReducerHook = () => {
    const [state,dispatch] = useReducer(numberReducer,initialState);
  return (
    <div>
        Count: {state.count}
        <button onClick={()=>dispatch({type: "increase1", value: 1})}>
            Increase 1
        </button>
        <button onClick={()=>dispatch({type: "decrease1", value: 1})}>
            Decrease 1
        </button>
        <button onClick={()=>dispatch({type: "reset"})}>
            Reset
        </button>

    </div>
  )
}

export default ReducerHook