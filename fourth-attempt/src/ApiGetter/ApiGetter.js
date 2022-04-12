import { useState, useEffect } from "react";
import axios from "axios";
import GenericButton from "../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setNumberOfUsers } from "../app/numberOfUsersSlice";

const ApiGetter = () => {
  const [apiCallResults, setApiCallResults] = useState([]);
  const [busy, setBusy] = useState(false);
  const dispatch = useDispatch();
  const numberOfUsers = useSelector((state) => state.numberOfUsers.numberOfUsers);
  useEffect(() => {
    getApiResults();
  }, []);

  const getApiResults = async () => {
    setBusy(true);
    try {
      const result = await axios.get("https://randomuser.me/api/");
      const dataResults = await result.data.results;
    
      dispatch(setNumberOfUsers(numberOfUsers + 1));
      setApiCallResults([...apiCallResults, ...dataResults]);
    } catch (err) {
      console.log(err);
    } finally {
      setBusy(false);
    }
  };
  const getUsetCredentials = (apiCallResult) => {
    const name = apiCallResult.name;
    return `${name.title} ${name.first} ${name.last}`;
  };
  return (
    <>
      {!busy && <GenericButton onClick={getApiResults} label="clickme" />}
      {busy && <GenericButton disabled label="busy" />}
      {apiCallResults.map((apiCallResult, idx) => (
        <div className="single-result" key={idx}>
          <p>
            {idx + 1} / {numberOfUsers}
          </p>
          <p>{getUsetCredentials(apiCallResult)}</p>
          <img src={apiCallResult.picture.large}></img>
        </div>
      ))}
    </>
  );
};

export default ApiGetter;
