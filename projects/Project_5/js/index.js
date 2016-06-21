"use strict";

var SliderControl = React.createClass({
  displayName: "SliderControl",

  render: function render() {
    return React.createElement(
      "div",
      { className: "scroll" },
      React.createElement(
        "h2",
        null,
        "Zoom the Chart Range:"
      ),
      React.createElement("input", {
        className: "slider",
        style: { width: "500px" },
        name: "slider",
        type: "range",
        min: "1",
        max: "273",
        value: this.props.slider,
        onChange: this.props.handleRange.bind(this) })
    );
  }
});

var Main = React.createClass({
  displayName: "Main",

  getInitialState: function getInitialState() {
    return {
      data: [],
      array: [],
      slider: 10
    };
  },
  componentDidMount: function componentDidMount() {
    $.getJSON('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', function (res) {
      var array = res.data;
      this.setState({ data: array, array: array });
    }.bind(this));
  },

  handleRange: function handleRange(event) {
    var num = parseInt(event.target.value);
    this.setState({ array: [] });
    this.setState({ slider: num });
    var currData = this.state.data.slice(0);
    var scaledData = currData.splice(num, currData.length);
    this.setState({ array: scaledData });
  },
  render: function render() {
    var width = {
      width: "20%"
    };
    var dates = [];
    var data = this.state.array;
    var renderData = data.map(function (item, index) {
      if (index % 25 === 0) {
        dates[index] = item[0].substr(0, 4);
      };
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            className: "bar",
            id: index,
            style: { height: Math.round(parseFloat(item[1])) / 30, width: 1000 / (data.length - 1) } },
          React.createElement(
            "span",
            { className: "barValue" },
            "Date: " + item[0],
            React.createElement("br", null),
            "GDP: $" + item[1] + " (billions)"
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "span",
            { className: "dates" },
            dates[index]
          )
        )
      );
    });

    return React.createElement(
      "div",
      { className: "outerwrapper" },
      React.createElement(
        "h1",
        null,
        "Modeling US GDP Economic Data with React"
      ),
      React.createElement(
        "p",
        null,
        "— A remix of the ",
        React.createElement(
          "a",
          { target: "blank", href: "https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart" },
          "Free Code Camp D3.js Bar Chart Zipline —"
        )
      ),
      React.createElement(
        "div",
        { className: "chart" },
        renderData
      ),
      React.createElement(SliderControl, {
        handleRange: this.handleRange,
        slider: this.state.slider })
    );
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));