import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

const initialState = {
  lastchoice: "", // did we choose a value or an operand
  calculation: "0",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "2":
      if (state.lastchoice === "") {
        // do nothing
        return state;
      }

      if (state.lastchoice === "operand" || state.lastchoice === "point") {
        // replace the last operand in the calculation string
        return {
          ...state,
          calculation: state.calculation.slice(0, -1) + action.payload,
        };
      } else {
        // add to the calculation
        return {
          ...state,
          lastchoice: "operand",
          calculation: state.calculation + action.payload,
        };
      }

    case "1":
      // add number
      if (
        (action.payload === "." && !(state.lastchoice === "operand")) ||
        !(action.payload === ".")
      ) {
        return {
          ...state,
          lastchoice: action.payload === "." ? "point" : "number",
          calculation:
            state.calculation === "0" && state.lastchoice === ""
              ? action.payload === "."
                ? state.calculation + action.payload
                : action.payload
              : state.calculation + action.payload,
        };
      } else {
        return state;
      }

    case "3":
      let waarde;
      try {
        waarde = eval(state.calculation).toString();
      } catch (e) {
        waarde = state.calculation;
      }

      return {
        ...state,
        lastchoice: "number",
        calculation: waarde === null ? 0 : waarde,
      };

    case "c":
      return {
        ...state,
        calculation:
          state.calculation.slice(0, -1) === ""
            ? "0"
            : state.calculation.slice(0, -1),
      };

    case "ac":
      return { ...state, lastchoice: "", calculation: "0" };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="calculator">
      <div className="container">
        <div className="display">
          {state.calculation}
          <span className="cursor" />
        </div>
        <button className="btn" onClick={() => dispatch({ type: "ac" })}>
          AC
        </button>
        <button className="btn" onClick={() => dispatch({ type: "c" })}>
          C
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "2", payload: "*" })}
        >
          x
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "2", payload: "/" })}
        >
          /
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "7" })}
        >
          7
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "8" })}
        >
          8
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "9" })}
        >
          9
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "2", payload: "+" })}
        >
          +
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "4" })}
        >
          4
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "5" })}
        >
          5
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "6" })}
        >
          6
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "2", payload: "-" })}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "1" })}
        >
          1
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "2" })}
        >
          2
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "3" })}
        >
          3
        </button>
        <button
          className="btn zero"
          onClick={() => dispatch({ type: "1", payload: "0" })}
        >
          0
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "1", payload: "." })}
        >
          .
        </button>
        <button className="btn eq" onClick={() => dispatch({ type: "3" })}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
