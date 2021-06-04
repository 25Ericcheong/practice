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
// statless functional component
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
let component = new OtherComponent();
ReactDOM.render(component.render(), document.getElementById('es6_component_jsx'));



// composing multiple react components together
// have a parent component that renders components as children
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
let parentChild = new ParentComponent();
ReactDOM.render(parentChild.render(), document.getElementById('parent_child_component_jsx'));



// render nested components
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit/>
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
      </div>
    );
  }
};
let Food = new TypesOfFood();
ReactDOM.render(Food.render(), document.getElementById('nested_component_jsx'));



// compose react components
const Citrus = () => {
  return (
    <div>
      <h2>Citrus:</h2>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
      </ul>
    </div>
  );
};

const NonCitrus = () => {
  return (
    <div>
      <h2>Non-Citrus:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Vegetables = () => {
  return (
    <div>
      <h1>Non-Vegetables:</h1>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  );
};

class Fruitss extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <Citrus/>
        <NonCitrus/>
      </div>
    );
  }
};

class TypesOfFoods extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruitss />
        <Vegetables />
      </div>
    );
  }
};
let manyFood = new TypesOfFoods();
ReactDOM.render(manyFood.render(), document.getElementById('bigger_nested_component_jsx'));



// pass props to a stateless functional component
// stateless function
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

// parent class created with es6
class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};
let calendar = new Calendar();
ReactDOM.render(calendar.render(), document.getElementById('calendar_props_component_jsx'));



// passing array as props
const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['Studying', 'Running']}/>
        <h2>Tomorrow</h2>
        <List tasks={['Cooling', 'Playing', 'Sleeping']}/>
      </div>
    );
  }
};
let toDoStuff = new ToDo();
ReactDOM.render(toDoStuff.render(), document.getElementById('todo_props_array_component_jsx'));



// using default props
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>{props.items}</p>
    </div>
  )
};

ShoppingCart.defaultProps = {
  items : 0
}

ReactDOM.render(<ShoppingCart/>, document.getElementById('default_props_component_jsx'));



// override default props
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCarts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10}/>
  }
};
let shopping = new ShoppingCarts();
ReactDOM.render(shopping.render(), document.getElementById('override_default_props_component_jsx'));



// use proptypes to define props you expect
const Itemss = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// probably need to install npm
Itemss.propTypes = {
  quantity: PropTypes.number.isRequired
}

Itemss.defaultProps = {
  quantity: 0
};

class ShoppingCartsss extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Itemss quantity={10}/>
  }
};
let shopCart = new ShoppingCartsss();
ReactDOM.render(shopCart.render(), document.getElementById('set_proptype_jsx'));



// accessing props using this.props
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          <ReturnTempPassword tempPassword={'12345678'}/>
        </div>
    );
  }
};
let password = new ResetPassword();
ReactDOM.render(password.render(), document.getElementById('access_password_jsx'));



class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'eric'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
let stateful = new StatefulComponent();
ReactDOM.render(stateful.render(), document.getElementById('stateful_component_jsx'));



