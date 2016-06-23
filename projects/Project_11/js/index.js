"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Root.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "title" },
        React.createElement(
          "h1",
          null,
          React.createElement(
            "a",
            { target: "_blank", href: "http://freecodecamp.com" },
            "Free Code Camp"
          ),
          " Quote Machine"
        )
      ),
      React.createElement(QuoteContainer, null)
    );
  };

  return Root;
}(React.Component);

var QuoteContainer = function (_React$Component2) {
  _inherits(QuoteContainer, _React$Component2);

  function QuoteContainer() {
    _classCallCheck(this, QuoteContainer);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this2.state = {
      quote: '',
      author: ''
    };
    return _this2;
  }

  QuoteContainer.prototype.randomQuote = function randomQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (response) {
      this.setState({ quote: response.quoteText, author: response.quoteAuthor });
    }.bind(this));
  };

  QuoteContainer.prototype.tweetQuote = function tweetQuote() {
    var tweet = '';
    if (this.state.author.length === 0) {
      tweet = this.state.quote;
    } else {
      tweet = this.state.quote.substr(0, 100) + " — " + this.state.author;
    }
    var left = (screen.width - 800) / 2;
    window.open('http://twitter.com/home?status=' + tweet + ' @freecodecamp', '', 'menubar = no, toolbar = no, resizable = yes, scrollbars = yes, height = 250, width = 800, left = ' + left + ', top = 150');
  };

  QuoteContainer.prototype.componentWillMount = function componentWillMount() {
    this.randomQuote();
  };

  QuoteContainer.prototype.render = function render() {
    var _this3 = this;

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this3.randomQuote();
            } },
          "Show me a random quote"
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this3.tweetQuote();
            } },
          "Tweet random quote"
        )
      ),
      React.createElement(QuoteComponent, { quote: this.state.quote, author: this.state.author })
    );
  };

  return QuoteContainer;
}(React.Component);

var QuoteComponent = function (_React$Component3) {
  _inherits(QuoteComponent, _React$Component3);

  function QuoteComponent() {
    _classCallCheck(this, QuoteComponent);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  QuoteComponent.prototype.createQuoteAuthor = function createQuoteAuthor() {
    if (this.props.author.length === 0) {
      return '';
    } else {
      return "— " + this.props.author;
    }
  };

  QuoteComponent.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "quotes" },
      React.createElement(
        "p",
        { className: "quoteText" },
        "\"",
        this.props.quote,
        "\""
      ),
      React.createElement(
        "p",
        { className: "quoteAuthor" },
        this.createQuoteAuthor()
      )
    );
  };

  return QuoteComponent;
}(React.Component);

ReactDOM.render(React.createElement(Root, null), document.getElementById('main'));