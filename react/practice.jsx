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



// self-closing JSX tags
const JSX5 = (
  <div>
    <h2>Welcome to React!</h2> <br/>
    <p>Be sure to close all tags!</p>
    <hr/>
  </div>
);
ReactDOM.render(JSX5, document.getElementById('self_closing_jsx'));



// creating React component with the use of JavaScript function
const MyComponent = function() {
  return (
    <div>
      My first stateless component
    </div>
  );
}
ReactDOM.render(MyComponent(), document.getElementById('stateless_component_jsx'));



// creating react component with ES6 class syntax
// OtherComponent extends React.Component class, so it has access to many useful React features like local state and lifecycle hooks
class OtherComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>My first es6 component</p>
      </div>
    );
  }
};
let Component = new OtherComponent();
ReactDOM.render(Component.render(), document.getElementById('es6_component_jsx'));



