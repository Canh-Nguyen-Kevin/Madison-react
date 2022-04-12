import BlinkyRender from "./effectAndLayoutEffect/Blink";
import BlinkyRender2 from "./effectAndLayoutEffect/Blink2";
import UseContextHook from "./contextApi/UseContextHook";
import WithReducer from "./contextApi/WithReducer";
import ReducerHook from "./reducerAndState/ReducerHook";
import UseStateHook from "./reducerAndState/UseStateHook";
import CustomHook from "./customHooks/CustomHook";


function App() {
  return (
    <div className="App">
      React Test
      {/* <BlinkyRender/> */}
      {/* <BlinkyRender2/> */}
      {/* <ReducerHook/> */}
      {/* {<UseStateHook/>} */}
      {/* {<UseContextHook/>} */}
      {/* {<WithReducer/>} */}
      <CustomHook/>
    </div>
  );
}

export default App;
