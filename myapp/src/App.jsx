import { useReducer, useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + action.payload }; // state + action.payload;
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - action.payload }; // state - action.payload;
    }
  }
  return (
    <div>
      {/* {count} */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment count
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement Count
      </button>
    </div>
  );
}

export default App;
