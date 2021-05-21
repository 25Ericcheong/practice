// const e = React.createElement;

// const List = (props) => {
//   { /* Change code below this line */ }
//   return <p>{props.tasks.join(', ')}</p>
//   { /* Change code above this line */ }
// };

// class ToDo extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>To Do Lists</h1>
//         <h2>Today</h2>
//         { /* Change code below this line */ }
//         <List tasks={['walk', 'dog']} />
//         <h2>Tomorrow</h2>
//         <List tasks={['walk', 'workout', 'fun']} />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// ReactDOM.render(e(ToDo), document.getElementById('pass_array_as_props'));


'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
