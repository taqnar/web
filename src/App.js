import React, { useState } from "react";
import Header from "./Header";
import "./style/style.css";

function App() {
  const [count, setCount] = useState(0);

  const resetFunction = () => {
    setCount(prevCount => 0 )
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrement = () => {
    // do not go to -ve , stop at zero
    if(count > 0) setCount(prevCount => prevCount - 1);
    // console.log("decrement Triggered");
  };

  return (
    <div className="App">
      <Header />
      <div className="mid-section">
        <div className="minus-button">
          <span onClick={decrement}>-</span>
        </div>

        <div className="display-section">
          <span>{count}</span>
        </div>

        <div className="plus-button">
          <span onClick={increment}>+</span>
        </div>
      </div>

      <div className="reset-button">
        <span onClick={resetFunction}>Reset</span>
      </div>
    </div>
  );
}

export default App;
