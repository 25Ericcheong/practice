// JSX element creation
const JSX1 = <h1>Hello JSX!</h1>;
ReactDOM.render(JSX1, document.getElementById('simple_jsx_element'));



// complex JSX element creation
// One important thing to know about nested JSX is that it must return a single element.
const JSX2 = <div>
  <h1>Complex JSX</h1>
  <p>Not too complex</p>
  <ul>
    <li>It is ok</li>
    <li>It is ok</li>
    <li>It is ok</li>
  </ul>
</div>;
ReactDOM.render(JSX2, document.getElementById('complex_jsx_element'));



// add comments in JSX
const JSX3 = (
  <div>
  {/* test */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
ReactDOM.render(JSX3, document.getElementById('comment_jsx_element'));



// defining a HTML class in JSX
const JSX4 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
ReactDOM.render(JSX4, document.getElementById('classname_jsx_element'));



