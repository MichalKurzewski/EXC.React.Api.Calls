import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [fieldValue, setFieldValue] = useState(1);
  const [apiCallResults, setApiCallResults] = useState([]);
  const [numberInputValue, setNumberInputValue] = useState(1);
  const onClickHandleApiCall = async () => {
    await axios
      .get(`https://randomuser.me/api/?results=${numberInputValue}`)
      .then((res) => {
        setApiCallResults([...apiCallResults, ...res.data.results]);
      });
  };
  const getApiCallName = (apiCallResult) => {
    const name = apiCallResult.name;
    return `${name.title} ${name.first} ${name.last}`;
  };
  const onNumberInputChange = (val) => {
    setNumberInputValue(val.target.value);
  };
  return (
    <div className="App">
      <button
        className="value-incrementing-button"
        onClick={() => setFieldValue(fieldValue + 1)}
      >
        {fieldValue}
      </button>
      <input
        className="value-input"
        type="number"
        onChange={onNumberInputChange}
        value={numberInputValue}
      ></input>
      <button onClick={onClickHandleApiCall}>Api Call</button>
      <div className="users">
        {apiCallResults.map((apiCallResult, idx) => (
          <div className="user" key={idx}>
            <p>{getApiCallName(apiCallResult)}</p>
            <img src={apiCallResult.picture.large}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
