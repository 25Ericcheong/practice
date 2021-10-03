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
