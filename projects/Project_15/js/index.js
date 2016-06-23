'use strict';

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
      'div',
      null,
      React.createElement(CalcComponent, null)
    );
  };

  return Root;
}(React.Component);

;

var CalcComponent = function (_React$Component2) {
  _inherits(CalcComponent, _React$Component2);

  function CalcComponent() {
    _classCallCheck(this, CalcComponent);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this2.state = {
      data: ''
    };
    return _this2;
  }

  CalcComponent.prototype.handleChange = function handleChange(event) {
    var currentLength = this.state.data.toString().length;
    var current;
    var update;
    var input = event;

    // Check if calculator is in intial state:
    if (currentLength === 0) {
      current = '';
      update = input;
    }

    // Check if current value is less than length length:
    else if (currentLength > 0 && currentLength < 20) {
        current = this.state.data.toString().slice(0);
        update = current.toString() + input.toString();
      }

      // If input is at length limit, do not allow any additions:
      else if (currentLength === 20) {
          input = '';
          update = this.state.data.toString().slice(0);
        }

    this.setState({
      data: update
    });
  };

  CalcComponent.prototype.delete = function _delete() {
    var deleted = this.state.data.toString().slice(0, this.state.data.toString().length - 1);
    this.setState({
      data: deleted
    });
  };

  CalcComponent.prototype.clearInput = function clearInput() {
    this.setState({
      data: ''
    });
  };

  CalcComponent.prototype.evaluate = function evaluate() {
    var expression = this.state.data.slice(0);
    var answer = '';

    try {
      eval(expression);
    } catch (error) {
      if (error instanceof SyntaxError) {
        answer = "Bad syntax!";
      }
    } finally {
      if (answer.length === 0) {
        answer = eval(expression);
      }
    }

    this.setState({
      data: answer
    });
  };

  CalcComponent.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'calcWrapper' },
      React.createElement(
        'div',
        { className: 'case' },
        React.createElement(
          'p',
          { className: 'title' },
          'Javascript Calculator'
        ),
        React.createElement('input', {
          className: 'inputField',
          type: 'text',
          value: this.state.data }),
        React.createElement(CalcDisplay, {
          input: this.handleChange.bind(this),
          'delete': this.delete.bind(this),
          clear: this.clearInput.bind(this),
          enter: this.evaluate.bind(this) })
      )
    );
  };

  return CalcComponent;
}(React.Component);

;

var CalcDisplay = function (_React$Component3) {
  _inherits(CalcDisplay, _React$Component3);

  function CalcDisplay() {
    _classCallCheck(this, CalcDisplay);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  CalcDisplay.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'calcUI' },
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(this, "7") },
          '7'
        ),
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(null, "8") },
          '8'
        ),
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(null, "9") },
          '9'
        ),
        React.createElement(
          'button',
          { className: 'operationBtn', onClick: this.props.input.bind(null, "/") },
          '/'
        ),
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(null, "4") },
          '4'
        ),
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(null, "5") },
          '5'
        ),
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(null, "6") },
          '6'
        ),
        React.createElement(
          'button',
          { className: 'operationBtn', onClick: this.props.input.bind(null, "*") },
          '*'
        ),
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(null, "1") },
          '1'
        ),
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(null, "2") },
          '2'
        ),
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(null, "3") },
          '3'
        ),
        React.createElement(
          'button',
          { className: 'operationBtn', onClick: this.props.input.bind(null, "+") },
          '+'
        ),
        React.createElement(
          'button',
          { className: 'delBtn', onClick: this.props.delete.bind(this) },
          'del'
        ),
        React.createElement(
          'button',
          { className: 'numberBtn', onClick: this.props.input.bind(null, "0") },
          '0'
        ),
        React.createElement(
          'button',
          { className: 'clearBtn', onClick: this.props.clear.bind(this) },
          'CE'
        ),
        React.createElement(
          'button',
          { className: 'operationBtn', onClick: this.props.input.bind(null, "-") },
          '-'
        )
      ),
      React.createElement(
        'button',
        { onClick: this.props.enter.bind(this), className: 'enterBtn' },
        'ENTER'
      )
    );
  };

  return CalcDisplay;
}(React.Component);

;

ReactDOM.render(React.createElement(Root, null), document.getElementById('main'));