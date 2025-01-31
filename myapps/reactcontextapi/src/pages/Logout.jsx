import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Logout() {
  const { dispatch } = useContext(userContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "logout", payloadd: "Guest" })}>
        Logout
      </button>
    </div>
  );
}
