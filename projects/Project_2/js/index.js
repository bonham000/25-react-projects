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
      return React.createElement('div', { style: randColor(), className: 'box', id: index });
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
      count: 5,
      subtract: false
    };
  },
  handleChange: function handleChange(event) {
    if (!isNaN(event.target.value)) {
      this.setState({ count: event.target.value });
    }
  },
  autoPlay: function autoPlay() {

    var play = setInterval(function () {

      var count = this.state.count;
      var newCount;

      if (count === 75) {
        this.setState({
          subtract: true
        });
      } else if (count === 0) {
        this.setState({
          subtract: false
        });
      }

      if (this.state.subtract) {
        newCount = count - 1;
      } else if (!this.state.subtract) {
        newCount = count + 1;
      }

      this.setState({
        count: newCount
      });
    }.bind(this), 40);
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'mainContainer' },
      React.createElement(Create, { count: this.state.count })
    );
  },
  componentDidMount: function componentDidMount() {
    this.autoPlay();
  }

});

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));