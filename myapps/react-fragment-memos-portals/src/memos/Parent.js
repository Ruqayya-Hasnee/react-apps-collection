import { useState } from "react";
import Child from "./Child";
export default function Parent() {
  const [parentcount, setParentCount] = useState(0);
  const [childcount, setChildCount] = useState(0);
  const changeParentCount = () => {
    setParentCount(parentcount + 1)
  }
  const changeChildCount = () => {
    setChildCount(childcount + 1)
  }
  return (
    <div>
      <h2>This is a parent component.</h2>
      <h3>Parent count is: {parentcount}</h3>
      <Child count={childcount} />
      <button onClick={changeParentCount}>Increment Parent Count</button>
      <button onClick={changeChildCount}>Increment Child Count</button>
    </div>
  );
}
