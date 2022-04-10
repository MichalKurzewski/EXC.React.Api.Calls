import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiGetter from "./Components/ApiGetter";


function App() {
  const [counter, setCounter] = useState(1);
  const onClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <p>
        <button onClick={onClick}>increment-value </button>
        {counter}
      </p>
      <ApiGetter/>
    </div>
  );
}

export default App;
