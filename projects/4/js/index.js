"use strict";

var initialArray = ["Finish Redux Tutorials", "Learn more about Relay", "Build 5 more React apps", "Review React Component Lifecycle", "Obtain Data Visualization Certificate", "Review Algorithms", "Tweet Progress", "Get a coffee!", "Browse Google Fonts", "Learn more about React Native"];

var ControlElement = React.createClass({
  displayName: "ControlElement",

  getInitialState: function getInitialState() {
    return {
      items: initialArray,
      newItem: '',
      search: ''
    };
  },
  clear: function clear() {
    this.setState({ items: new Array() });
  },
  reset: function reset() {
    this.setState({ items: initialArray });
  },
  deleteItem: function deleteItem(number, event) {
    var cloneState = this.state.items.slice();
    cloneState.splice(number, 1);
    this.setState({ items: cloneState });
  },
  searchQuery: function searchQuery(event) {
    this.setState({ search: event.target.value });
  },
  handleSearch: function handleSearch(event) {
    event.preventDefault();
    var searchStr = this.state.search.trim().toLowerCase();
  },
  handleChange: function handleChange(event) {
    this.setState({ newItem: event.target.value });
  },
  handleSubmit: function handleSubmit(event) {
    event.preventDefault();
    if (this.state.newItem.length > 0) {
      this.state.items.push(this.state.newItem);
      this.setState({ newItem: '' });
    }
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement("input", {
          className: "newTask",
          type: "text",
          placeholder: "create new work item",
          onChange: this.handleChange,
          value: this.state.newItem }),
        React.createElement("br", null),
        React.createElement(
          "button",
          { className: "enter" },
          "Enter New Item"
        )
      ),
      React.createElement(
        "form",
        { onSubmit: this.handleSearch },
        React.createElement("input", {
          className: "search",
          type: "text",
          placeholder: "filter list",
          onChange: this.searchQuery,
          value: this.state.search })
      ),
      React.createElement(AppItems, {
        items: this.state.items,
        search: this.state.search,
        deleteItem: this.deleteItem }),
      React.createElement(
        "button",
        { className: "clear", onClick: this.clear },
        "Clear the List"
      ),
      React.createElement(
        "button",
        { className: "reset", onClick: this.reset },
        "Reset the List"
      )
    );
  }
});

var AppItems = React.createClass({
  displayName: "AppItems",

  handleClick: function handleClick() {},
  render: function render(props) {
    var items = this.props.items;
    var search = this.props.search;

    if (search.length > 0) {
      items = items.filter(function (item) {
        return item.toLowerCase().match(search);
      });
    }
    var tableHeader = React.createElement(
      "tr",
      { className: "tableHead" },
      React.createElement(
        "th",
        { className: "taskNumber" },
        "#"
      ),
      React.createElement(
        "th",
        { className: "taskItem" },
        "Task"
      ),
      React.createElement(
        "th",
        null,
        "(X)"
      )
    );

    if (items.length === 0) {
      tableHeader = '';
    }

    var list = items.map(function (item, index) {
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          { className: "taskNumber" },
          "Task ",
          index + 1,
          ":"
        ),
        React.createElement(
          "td",
          { className: "taskItem", key: index },
          item
        ),
        React.createElement(
          "td",
          null,
          React.createElement(
            "button",
            {
              className: "remove",
              onClick: this.props.deleteItem.bind(this, index) },
            "X"
          )
        )
      );
    }.bind(this));
    return React.createElement(
      "table",
      { className: "taskTable" },
      tableHeader,
      list
    );
  }
});

var Component = React.createClass({
  displayName: "Component",

  render: function render() {
    return React.createElement(
      "div",
      { className: "mainContainer" },
      React.createElement(
        "div",
        { className: "titles" },
        React.createElement(
          "h1",
          { className: "title" },
          "React To-Do App"
        ),
        React.createElement(
          "h2",
          { className: "subtitle" },
          "Enhance Your Productivity"
        )
      ),
      React.createElement(ControlElement, null)
    );
  }

});

ReactDOM.render(React.createElement(Component, null), document.getElementById('app'));