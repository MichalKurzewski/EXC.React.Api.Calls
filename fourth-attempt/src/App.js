import "./App.css";
import { useSelector } from "react-redux";
import ApiGetter from "./ApiGetter/ApiGetter";

function App() {

  const count = useSelector((state) => state.numberOfUsers.numberOfUsers);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Number of profiles coming from Redux-toolkit: {count} </p>
      <ApiGetter />
    </div>
  );
}

export default App;
