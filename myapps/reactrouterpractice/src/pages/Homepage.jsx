import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
export default function Homepage() {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/profile", { state: { userName } });
  }
  return (
    <div>
      This is a home page
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleClick}>Go to profile page</button>
    </div>
  );
}
