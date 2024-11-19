import React from "react";
function Child({ count }) {
  return <div>Child count is: {count}</div>;
}
export default React.memo(Child);
