import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h4>This is Eric and this is my first component</h4>
      <p>This is something</p>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
