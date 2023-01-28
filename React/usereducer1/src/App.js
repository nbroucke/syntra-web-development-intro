import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "man":
      return { ...state, sex: "man" }; // we spreaden de huidige state en overschrijven dan de count
    case "vrouw":
      return { ...state, sex: "vrouw" };
    case "x":
      return { ...state, sex: "x" };
    default:
      return state;
  }
};

const initialState = { sex: "" };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "man" })}>Man</button>
      <button onClick={() => dispatch({ type: "vrouw" })}>Vrouw</button>
      <button onClick={() => dispatch({ type: "x" })}>X</button>
      <div>
        Sex : <b>{state.sex}</b>
      </div>
    </div>
  );
}

export default App;
