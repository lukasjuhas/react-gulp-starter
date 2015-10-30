const $test = 'test';
console.log($test);

// const React = window.React = require('react');
// const ReactDOM = require('react-dom');
// const Timer = require('./ui/Timer');
// const TodoList = require('./ui/TodoList');
// const mountNode = document.getElementById('app');
//
// const TodoApp = React.createClass( {
//   getInitialState() {
//     return {items: [], text: ''};
//   },
//   onChange(ev) {
//     this.setState({text: ev.target.value});
//   },
//   handleSubmit(ev) {
//     ev.preventDefault();
//     const nextItems = this.state.items.concat([this.state.text]);
//     const nextText = '';
//     this.setState({items: nextItems, text: nextText});
//   },
//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.onChange} value={this.state.text} />
//           <button>{'Add #' + (this.state.items.length + 1)}</button>
//         </form>
//         <Timer />
//       </div>
//     );
//   },
// });
//
//
// ReactDOM.render(<TodoApp />, mountNode);
