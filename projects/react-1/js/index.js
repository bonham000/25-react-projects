"use strict";

var ListComp = React.createClass({
  displayName: "ListComp",

  getInitialState: function getInitialState() {
    return {
      search: '',
      data: []
    };
  },
  iterate: function iterate(array) {
    return array.map(function (arrayItem) {
      return React.createElement(
        "li",
        null,
        arrayItem
      );
    });
  },
  handleSearch: function handleSearch(e) {
    this.setState({ search: e.target.value });
  },
  render: function render() {

    var list = this.props.data;
    var searchStr = this.state.search.trim().toLowerCase();

    if (searchStr.length > 0) {
      list = list.filter(function (letter) {
        return letter.toLowerCase().match(searchStr);
      });
    }
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Search:"
      ),
      React.createElement("input", { type: "text", value: this.state.search, onChange: this.handleSearch, placeholder: "Search the list with React" }),
      React.createElement(
        "ul",
        null,
        this.iterate(list)
      )
    );
  }
});

var Content = React.createClass({
  displayName: "Content",

  getInitialState: function getInitialState() {
    return {
      data: []
    };
  },
  componentWillMount: function componentWillMount() {
    $.getJSON('https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json', function (result) {
      console.log('json received');
      this.setState({ data: result.Reggae });
    }.bind(this));
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "header" },
        React.createElement(
          "h1",
          null,
          "React Search!"
        ),
        React.createElement(
          "p",
          { className: "about" },
          "Here is a list of Reggae artists rendered from a JSON object"
        )
      ),
      React.createElement(ListComp, { data: this.state.data })
    );
  }
});

ReactDOM.render(React.createElement(Content, null), document.getElementById('main'));