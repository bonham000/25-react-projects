"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialText = "This is an h1 header\n============\n\nNow an h2\n---------------\n\nParagraphs are separated by a blank line.\n\n*Italic*, **bold**, and `monospace`, ~~strikethrough~~ are simple\n\n~~~\nvar hello = function() {\n\tconsole.log(\"Hello from a function!\");\n}\n~~~\nHere is a list of items:\n\n* Free Code Camp\n* React\n* Sass\n\n*[Here is a link to Free Code Camp](https://freecodecamp.com)*\n";

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      input: initialText
    };
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  Root.prototype.handleInput = function handleInput(event) {
    this.setState({
      input: event.target.value
    });
    this.renderOutput();
  };

  Root.prototype.renderOutput = function renderOutput() {
    document.getElementById("outputArea").innerHTML = marked(this.state.input);
  };

  Root.prototype.componentDidMount = function componentDidMount() {
    this.renderOutput();
  };

  Root.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { className: "title" },
        "React Markdown Previewer"
      ),
      React.createElement(
        "p",
        { className: "subtitle" },
        "A Free Code Camp project built with ",
        React.createElement(
          "a",
          { href: "" },
          "React"
        ),
        " and ",
        React.createElement(
          "a",
          { href: "https://cdnjs.com/libraries/marked" },
          "Marked"
        )
      ),
      React.createElement(
        "div",
        { className: "flexContainer" },
        React.createElement(TextArea, { handleInput: this.handleInput, input: this.state.input }),
        React.createElement("div", {
          className: "textOutput",
          id: "outputArea" })
      )
    );
  };

  return Root;
}(React.Component);

;

var TextArea = function (_React$Component2) {
  _inherits(TextArea, _React$Component2);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  TextArea.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("textarea", {
        className: "textInput",
        value: this.props.input,
        onChange: this.props.handleInput })
    );
  };

  return TextArea;
}(React.Component);

;

ReactDOM.render(React.createElement(Root, null), document.getElementById('main'));