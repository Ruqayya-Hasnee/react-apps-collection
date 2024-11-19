import { act, useReducer, useState } from "react";

function App() {
  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if(action.type=="sub"){
      return { ...state, balance:state.balance-action.payload}
    }
  }
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);

  return (
    <div>
      {state.balance}
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        name=""
        id=""
      />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
      >
        Withdraw
      </button>
    </div>
  );
}

export default App;
