import { createContext, useState } from "react";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider>
    </div>
  );
}

export default App;
