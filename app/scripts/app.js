const React = window.React = require('react');
const ReactDOM = require('react-dom');
const mountNode = document.getElementById('app');

const Thing = require('./ui/Thing');

class Testing extends React.Component {
  render() {
    return (
      <div>
        <h1>React Starter Kit.</h1>
        <Thing />
      </div>
    );
  }
}

ReactDOM.render(<Testing />, mountNode);
