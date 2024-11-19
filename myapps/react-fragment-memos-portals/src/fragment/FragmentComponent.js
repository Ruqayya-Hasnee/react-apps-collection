import React from "react";
export default function FragmentComponent() {
  return (
    // <>< /> works same as fragment
    <React.Fragment>
      <h3>Heading</h3>
      <p>Paragraph</p>
    </React.Fragment>
  );
}
