import React,{useReducer} from 'react'
import TodoA from './TodoA'
import TodoB from './TodoB'

export const todoContext = React.createContext()
const InitialTodo = {
    todos: [],
    count: 0
}
const todoReducer = (state, action) =>{
    switch(action.type){
        case "increase5": return{...state,count: state.count + action.value}
        case "decrease5": return{...state,count: state.count - action.value}
        case "reset": return{...state,count: 0}
        default: return state;
    }
}
const WithReducer = () => {

    const[state,dispatch] = useReducer(todoReducer,InitialTodo);

  return (
    <todoContext.Provider value={{state,dispatch}}>
        <div>
      <TodoA/>
      <TodoB/>
        </div>
   </todoContext.Provider>
    
  )
}

export default WithReducer