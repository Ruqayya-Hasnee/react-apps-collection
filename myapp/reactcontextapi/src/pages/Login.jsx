import { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
export default function Login() {
  const [value, setValue] = useState("");
  const { user, dispatch } = useContext(userContext);

  function handleSubmit(e) {
    e.preventDefault();
    //setUser(value);
    dispatch({ type: "login", payload: value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
