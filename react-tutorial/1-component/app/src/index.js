import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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
const Author = () => <h4>James Clear</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
