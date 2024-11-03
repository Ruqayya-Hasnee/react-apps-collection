import { useReducer, useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy }; // state + action.payload;
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy }; // state - action.payload;
    }
    if (action.type == "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
  }
  return (
    <div>
      {/* {count} */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      {state.count}
      <input
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "setIncrement", payload: Number(e.target.value) })
        }
        type="text"
        name=""
        id=""
      />
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment count
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement Count
      </button>
    </div>
  );
}

export default App;
