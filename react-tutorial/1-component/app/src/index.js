import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91lk9FG9xQL._AC_UL200_SR200,200_.jpg",
  title: "Atomic Habits",
  author: "James Clear",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81V8R5aqDYL._AC_UL200_SR200,200_.jpg",
  title: "American Marxism",
  author: "Mark R. Levin",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quae
          quasi eum totam recusandae iure. Ex dicta tempora, tenetur nam illum
          consectetur accusantium inventore at consequuntur et odit consequatur
          debitis?
        </p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
