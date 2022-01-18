import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Eric Cheong</h2>;
const Message = () => {
  return <p>This is a message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
