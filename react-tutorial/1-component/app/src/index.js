import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/91lk9FG9xQL._AC_UL200_SR200,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81V8R5aqDYL._AC_UL200_SR200,200_.jpg",
    title: "American Marxism",
    author: "Mark R. Levin",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
