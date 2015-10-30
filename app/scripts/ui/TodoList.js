const React = window.React = require('react');

class TodoList extends React.Component {
  propTypes: {
    items: React.PropTypes.string.isRequired,
  }
  render() {
    const createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{createItem}</ul>; // {this.props.items.map(createItem)}
  }
}

module.exports = TodoList;
