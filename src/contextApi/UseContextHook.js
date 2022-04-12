import React,{useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

export const numberContext = React.createContext();

const UseContextHook = () => {
const [count,setCount] = useState(0);
  return (
      <numberContext.Provider value={{state: count,setState: setCount}}>
          <div>
      <ComponentA/>
      <ComponentB/>
      
  </div>
  </numberContext.Provider>
    
  )
}

export default UseContextHook