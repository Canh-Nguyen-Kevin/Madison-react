import React, {
    useState,
    useEffect
  } from 'react';
  import ReactDOM from 'react-dom';
  
  const BlinkyRender2 = () => {
    const [value, setValue] = useState(0);
  console.log("first");
    useEffect(() => {
      if (value === 0) {
        setValue(10 + Math.random() * 200);
      }
    }, [value]);
  
    console.log('render', value);
  
    return (
      <div onClick={() => setValue(0)}>
        value: {value}
      </div>
    );
  };
  export default BlinkyRender2;