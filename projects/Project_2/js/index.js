'use strict';

var Create = React.createClass({
  displayName: 'Create',

  render: function render() {

    var array = new Array(parseFloat(this.props.count));
    for (var i = 0; i < array.length; i++) {
      array[i] = i;
    };

    var rand = function rand() {
      return Math.round(Math.random() * 255);
    };
    var randColor = function randColor() {
      return {
        background: 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')'
      };
    };

    var divs = array.map(function (val, index) {
      return React.createElement(
        'div',
        { style: randColor(), className: 'box', id: index },
        React.createElement(
          'p',
          { className: 'number' },
          index + 1
        )
      );
    }, this);

    return React.createElement(
      'div',
      { className: 'container' },
      divs
    );
  }

});

var Main = React.createClass({
  displayName: 'Main',

  getInitialState: function getInitialState() {
    return {
      count: 5
    };
  },
  handleChange: function handleChange(event) {
    if (!isNaN(event.target.value)) {
      this.setState({ count: event.target.value });
    }
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'mainContainer' },
      React.createElement(
        'h1',
        null,
        'Create Boxes with React!'
      ),
      React.createElement(
        'h2',
        null,
        'Type the number of boxes you would like to generate in the box below'
      ),
      React.createElement(
        'form',
        { onSubmit: this.submitForm },
        React.createElement('input', { type: 'text',
          value: this.state.count,
          onChange: this.handleChange })
      ),
      React.createElement(Create, { count: this.state.count })
    );
  }

});

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));