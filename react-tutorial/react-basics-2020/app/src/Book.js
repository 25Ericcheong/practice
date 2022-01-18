import React from "react";

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

export default Book;
