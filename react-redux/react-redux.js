// Getting Started with React Redux
// This series of challenges introduces how to use Redux with React. First, here's a review of some of the key principles of each technology. React is a view library that you provide with data, then it renders the view in an efficient, predictable way. Redux is a state management framework that you can use to simplify the management of your application's state. Typically, in a React Redux app, you create a single Redux store that manages the state of your entire app. Your React components subscribe to only the pieces of data in the store that are relevant to their role. Then, you dispatch actions directly from React components, which then trigger store updates.
class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    }
  }

  // Change code above this line
  render() {
    return <div />
  }
};



// Manage State Locally First
// https://www.freecodecamp.org/learn/front-end-development-libraries/react-and-redux/manage-state-locally-first
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
  }

  submitMessage() {
    this.setState(prevState => ({
      input: "",
      messages: [... prevState.messages, prevState.input]
    }));
  }

  render() {
    const messages = this.state.messages.map((message, index) =>
      <li key={index}>
        {message}
      </li>
    );

    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input 
        value = {this.state.input}
        onChange = {this.handleChange}></input>
        
        <button onClick={this.submitMessage}>Add message</button>
        <ul>{messages}</ul>
      </div>
    );
  }
};



// Extract State Logic to Redux
// https://www.freecodecamp.org/learn/front-end-development-libraries/react-and-redux/extract-state-logic-to-redux
const ADD = 'ADD';
const defaultState = [];

const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

function addMessage(message) {
  return {
    type: 'ADD',
    message
  }
};

const store = Redux.createStore(messageReducer);



// Use Provider to Connect Redux to React
// https://www.freecodecamp.org/learn/front-end-development-libraries/react-and-redux/use-provider-to-connect-redux-to-react
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages/>
      </Provider>
    )
  }
};


