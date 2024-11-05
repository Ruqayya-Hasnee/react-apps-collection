import { createContext, useState } from "react";
import { useReducer } from "react";

const userContext = createContext();

function UserProvider({ children }) {
  // const [user, setUser] = useState("guest");
  function userReducer(state, action) {
    if (action.type == "login") {
      //
      return action.payload;
    }
    if (action.type == "logout") {
      //
      return "Guest";
    }
  }

  const [user, dispatch] = useReducer(userReducer, "");
  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export { userContext, UserProvider };
