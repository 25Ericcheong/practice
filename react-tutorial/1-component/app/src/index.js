import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/91lk9FG9xQL._AC_UL200_SR200,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81V8R5aqDYL._AC_UL200_SR200,200_.jpg",
    title: "American Marxism",
    author: "Mark R. Levin",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute and event handler
  const clickHandler = () => {
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Examples
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
