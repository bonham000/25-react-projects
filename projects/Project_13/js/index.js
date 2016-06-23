'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      count: 3,
      input: '',
      data: [],
      tableDisplay: 'none'
    };
    return _this;
  }

  Root.prototype.adjustRange = function adjustRange(event) {
    console.log(_typeof(parseInt(event.target.value)));
    this.setState({
      count: parseInt(event.target.value)
    });
  };

  Root.prototype.handleInput = function handleInput(event) {
    this.setState({
      input: event.target.value
    });
  };

  Root.prototype.handleSearch = function handleSearch(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + this.state.input + '&limit=50&format=json',
      type: "GET",
      dataType: 'jsonp',
      success: function (response) {
        var titles = response[1];
        var snippets = response[2];
        var urls = response[3];
        var data = [];
        for (var i = 0; i < 50; i++) {
          data[i] = [response[1][i], response[2][i], response[3][i]];
        }
        this.setState({ input: '', data: data, tableDisplay: "block" });
      }.bind(this)
    });
  };

  Root.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { className: 'title' },
        'Wikipedia Viewer'
      ),
      React.createElement(SearchContainer, {
        input: this.state.input,
        handleInput: this.handleInput.bind(this),
        search: this.handleSearch.bind(this) }),
      React.createElement('input', {
        style: { width: "400px" },
        type: 'range',
        min: '3',
        max: '50',
        value: this.state.count,
        onChange: this.adjustRange.bind(this) }),
      React.createElement(
        'span',
        { className: 'counter' },
        'count: ',
        this.state.count
      ),
      React.createElement(ResultsContainer, {
        data: this.state.data,
        count: this.state.count,
        tableDisplay: this.state.tableDisplay })
    );
  };

  return Root;
}(React.Component);

;

var SearchContainer = function (_React$Component2) {
  _inherits(SearchContainer, _React$Component2);

  function SearchContainer() {
    _classCallCheck(this, SearchContainer);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  SearchContainer.prototype.randomArticle = function randomArticle() {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  };

  SearchContainer.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { className: 'subtitle' },
        'Search Wikipedia:'
      ),
      React.createElement(
        'form',
        { onSubmit: this.props.search.bind(this) },
        React.createElement('input', {
          className: 'inputBox',
          type: 'text',
          placeholder: 'Type here...',
          value: this.props.input,
          onChange: this.props.handleInput.bind(this),
          autoFocus: true }),
        React.createElement(
          'button',
          { className: 'submitBtn' },
          'Submit Search'
        )
      ),
      React.createElement(
        'button',
        { className: 'randomBtn', onClick: this.randomArticle },
        'or generate a random article'
      )
    );
  };

  return SearchContainer;
}(React.Component);

;

var ResultsContainer = function (_React$Component3) {
  _inherits(ResultsContainer, _React$Component3);

  function ResultsContainer() {
    _classCallCheck(this, ResultsContainer);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  ResultsContainer.prototype.openLink = function openLink(value) {
    window.open(value);
  };

  ResultsContainer.prototype.render = function render() {
    var data = this.props.data.slice(0, this.props.count);
    var results = '';
    if (data.length > 0) {
      results = data.map(function (result) {
        return React.createElement(
          'tr',
          { className: 'resultBox', onClick: this.openLink.bind(null, result[2]) },
          React.createElement(
            'td',
            { className: 'titleCol' },
            result[0]
          ),
          React.createElement(
            'td',
            { className: 'infoCol' },
            result[1]
          )
        );
      }.bind(this));
    }
    var tableHeadStyle = {
      display: this.props.tableDisplay
    };
    return React.createElement(
      'div',
      { className: 'resultsContainer' },
      React.createElement(
        'table',
        { style: tableHeadStyle },
        React.createElement(
          'tr',
          { className: 'resultHead' },
          React.createElement(
            'th',
            { className: 'titleHead' },
            'Article Title'
          ),
          React.createElement(
            'th',
            { className: 'infoHead' },
            'Snippet (click to view article)'
          )
        )
      ),
      React.createElement(
        'table',
        null,
        results
      )
    );
  };

  return ResultsContainer;
}(React.Component);

;

ReactDOM.render(React.createElement(Root, null), document.getElementById('main'));