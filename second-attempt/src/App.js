import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [number, setNumber] = useState(1);
  const [apiCallResults, setApiCallResults] = useState([]);

  const getResults = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setApiCallResults([...res.data.results, ...apiCallResults]);
    });
  };

  const getName = (apiCallResult) => {
    const name = apiCallResult.name;
    return `${name.title} ${name.first} ${name.last}`;
  };

  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>increment number</button>
      <p>{number}</p>
      <button onClick={getResults}>api Results</button>
      <div className="user-list">
        {apiCallResults.map((apiCallResult, idx) => (
          <div className="user" key={idx} >
           <p> {idx}</p>
            <p>{getName(apiCallResult)}</p>
            <img src={apiCallResult.picture.large}></img>
          </div>
        ))}
      </div>
      {/* <pre>{apiCallResults}</pre> */}
    </div>
  );
}

export default App;
