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
// stateless functional component
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
ReactDOM.render(<OtherComponent />, document.getElementById('es6_component_jsx'));



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
ReactDOM.render(<ParentComponent/>, document.getElementById('parent_child_component_jsx'));



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
ReactDOM.render(<TypesOfFood/>, document.getElementById('nested_component_jsx'));



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
ReactDOM.render(<TypesOfFood/>, document.getElementById('bigger_nested_component_jsx'));



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
ReactDOM.render(<Calendar/>, document.getElementById('calendar_props_component_jsx'));



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
ReactDOM.render(<ToDo/>, document.getElementById('todo_props_array_component_jsx'));



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
ReactDOM.render(<ShoppingCarts/>, document.getElementById('override_default_props_component_jsx'));



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
ReactDOM.render(<ShoppingCartsss/>, document.getElementById('set_proptype_jsx'));



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
ReactDOM.render(<ResetPassword/>, document.getElementById('access_password_jsx'));



// creating a stateful component
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
ReactDOM.render(<StatefulComponent/>, document.getElementById('stateful_component_jsx'));



// render state in UI
class MyComponentEg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // since can write JavaScript directly in this part of code, do not need to enclose reference in curly braces
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponentEg/>, document.getElementById('statefuls_component_jsx'));



// changing state of a component with this.setState
class MyComponentButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Initial State'
    };

    // binds function to component
    // ensures defined method will be allowed to access 'this'
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      name: 'React Rocks!'
    })
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponentButton/>, document.getElementById('state_change_component_jsx'));



// use state to toggle an element
// use setState and pass a function that can access previous state and props
class MyVisibibleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }))
  }
  
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>I don't see you?</h1>
        </div>
      );
    }
  }
}
ReactDOM.render(<MyVisibibleComponent/>, document.getElementById('toggle_states_component_jsx'));



// simple counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }))
  }

  reset() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
ReactDOM.render(<Counter/>, document.getElementById('counter_component_jsx'));



// creating controller input that updates as input is being inputted
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // event object that contains string of text from input element
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input 
        value={this.state.input}
        onChange={this.handleChange}
        />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<ControlledInput/>, document.getElementById('controlled_input_component_jsx'));



// creating a controlled form
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input}
        onChange={this.handleChange}/>
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
ReactDOM.render(<MyForm/>, document.getElementById('controlled_form_component_jsx'));



// passing state as props to child components
class SimpleApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
ReactDOM.render(<SimpleApp/>, document.getElementById('pass_state_as_props_component_jsx'));



// pass a callback as props
// allowing child components to interact with parent components
// Once you are finished you will be able to type in the input field in the GetInput component, which then calls the handler method in its parent via props. This updates the input in the state of the parent, which is passed as props to both children. Observe how the data flows between the components and how the single source of truth remains the state of the parent component.
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
       <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue} />
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<Application/>, document.getElementById('pass_callback_as_props_component_jsx'));



// use lifecycle method componentDidMount
// best practice with React is to place API calls or any calls to your server in lifecycle method called componentDidMount()
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: 0
    };
  }

  // mock API, sets state after 1s to stimulate calling a server to retrieve data
  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({
        activeUsers: 1
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
ReactDOM.render(<LifeCycle/>, document.getElementById('lifecycle_component_jsx'));



// adding event listeners
class EventListeners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  // used before component unmounts / destroyed. Used to clean up before component is destroyed.
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }

  render() {
    return (
      <div>
        <h1>Event listener - press enter </h1>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
ReactDOM.render(<EventListeners/>, document.getElementById('event_listener_component_jsx'));



// optimize re-renders with shouldComponentUpdate
// lifecycle method that can be used when child components receive new state or props and declare specifically if components should update or not.
// useful to optimize performance. Default behavior is component re-renders when it receives new props even if props did not change.
// can use shouldComponentUpdate to prevent this by comparing props
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }

  // component will only render when prop is an even value
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    if (nextProps.value % 2 == 0) {
      return true
    }
    return false
  }

  componentDidUpdate() {
    console.log('Component re-rendered.');
  }

  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }

  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
ReactDOM.render(<Controller/>, document.getElementById('optimize_component_jsx'));



// inline styles
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: 'red', fontSize: 72}}>Big Red</div>
    );
  }
};
ReactDOM.render(<Colorful/>, document.getElementById('inline_style_component_jsx'));



// adding a large block of styles
// can code in this format to organize styles neatly
const styles = {
  color: 'purple',
  fontSize: 40,
  border: "2px solid purple",
};

// Change code above this line
class Colorfuls extends React.Component {
  render() {

    return (
      <div style={styles}>Style Me!</div>
    );
  }
};
ReactDOM.render(<Colorfuls/>, document.getElementById('inline_styles_component_jsx'));



// use advanced javascript in React Render method
// You can also write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces.
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {answer}
        </p>
      </div>
    );
  }
}
ReactDOM.render(<MagicEightBall/>, document.getElementById('javascript_in_render_component_jsx'));



// render with an if-else condition
class IfRenderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
};
ReactDOM.render(<IfRenderComponent/>, document.getElementById('if_render_component_jsx'));



// Use && for a More Concise Conditional
// The if/else statements worked in the last challenge, but there's a more concise way to achieve the same result. Imagine that you are tracking several conditions in a component and you want different elements to render depending on each of these conditions. If you write a lot of else if statements to return slightly different UIs, you may repeat code which leaves room for error. Instead, you can use the && logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is true, and if it is, return some markup
class IfRenderComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
       <div>
        {this.state.display == true && <h1>Displayed!</h1>}
        <button onClick={this.toggleDisplay}>Toggle Display</button>
       </div>
    );
  }
};
ReactDOM.render(<IfRenderComponent2/>, document.getElementById('if_render_component2_jsx'));



// using ternary expression for conditional rendering
// for reference
function example() {
  return condition1 ? value1
       : condition2 ? value2
       : condition3 ? value3
       : value4;
}

// Equivalent to:

function example() {
  if (condition1) { return value1; }
  else if (condition2) { return value2; }
  else if (condition3) { return value3; }
  else { return value4; }
}

const inputStylee = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStylee}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge < 18 && this.state.userAge != '' ? buttonThree 
        : this.state.userAge >= 18 ? buttonTwo 
        : buttonOne}
      </div>
    );
  }
}
ReactDOM.render(<CheckUserAge/>, document.getElementById('ternary_render_component_jsx'));



// render conditionally from props
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // will rendering of You Win or You Lose will depend on the value of prop
    return <h1> {this.props.fiftyFifty ? 'You Win!' : 'You Lose!'} </h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    // random number between 0 (inclusive) and 1 (exclusive), so if number is larger than 0.5, expression will be true
    const expression = Math.random() >= .5; 
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty = {expression}/>
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
ReactDOM.render(<GameOfChance/>, document.getElementById('render_conditionally_from_props_component_jsx'));
