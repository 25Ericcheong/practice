import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-fe.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL604_SR604,400_.jpg"
    alt=""
  />
);

const Title = () => <h1>Atomic Habits</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75em", marginTop: "0.25rem" }}>
    James Clear
  </h4>
);

ReactDom.render(<BookList />, document.getElementById("root"));
