"use strict";

var Root = React.createClass({
  displayName: "Root",

  render: function render() {
    var titleStyle = {
      marginTop: "50px",
      marginBottom: "15px",
      fontSize: "50px",
      textAlign: "center",
      color: "#13293D"
    };
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { style: titleStyle },
        "Trending GIFs courtesy of the ",
        React.createElement(
          "a",
          { target: "_blank", href: "https://github.com/Giphy/GiphyAPI" },
          "Giphy API"
        )
      ),
      React.createElement(ImagesContainer, null)
    );
  }
});

var ControlLogic = React.createClass({
  displayName: "ControlLogic",

  render: function render() {
    var btnStyles = {
      fontSize: "30px",
      border: "none",
      background: "white",
      marginTop: "15px",
      borderRadius: "10px",
      padding: "12px",
      background: "#13293D",
      color: "#FFF159"
    };
    var divStyle = {
      textAlign: "center",
      marginBottom: "20px"
    };
    return React.createElement(
      "div",
      { style: divStyle },
      React.createElement(
        "button",
        { style: btnStyles,
          onClick: this.props.callGiphy.bind(this) },
        "Load (or Reload) Trending GIFs"
      ),
      React.createElement("br", null),
      React.createElement(
        "button",
        { style: btnStyles,
          onClick: this.props.random.bind(this) },
        "Select One at Random"
      ),
      React.createElement("br", null),
      React.createElement(
        "button",
        { style: btnStyles,
          onClick: this.props.randomize.bind(this) },
        "Randomize Order"
      ),
      React.createElement("br", null),
      React.createElement(
        "button",
        { style: btnStyles,
          onClick: this.props.reverse.bind(this) },
        "Reverse Order"
      ),
      React.createElement("br", null),
      React.createElement(
        "button",
        { style: btnStyles,
          onClick: this.props.clear.bind(this) },
        "Clear All"
      )
    );
  }
});

var ImagesContainer = React.createClass({
  displayName: "ImagesContainer",

  getInitialState: function getInitialState() {
    return {
      data: [],
      copy: []
    };
  },

  callGiphy: function callGiphy(event) {
    event.preventDefault();
    $.getJSON('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC', function (response) {
      var data = response.data;
      var array = [];
      for (var i = 0; i < data.length; i++) {
        array[i] = data[i].images.fixed_height.url;
      }
      this.setState({ data: array, copy: array });
    }.bind(this));
  },

  reverse: function reverse(event) {
    event.preventDefault();
    var stateCopy = this.state.data.slice(0);
    this.setState({ data: stateCopy.reverse() });
  },

  randomize: function randomize(event) {
    event.preventDefault();
    var stateCopy = this.state.data.slice(0);
    var originalLength = stateCopy.length;
    var randomArr = [];

    for (var i = 0; i < originalLength; i++) {

      var randomIndex = Math.round(Math.random() * (stateCopy.length - 1));
      randomArr[i] = stateCopy[randomIndex];
      stateCopy.splice(randomIndex, 1);
    }
    this.setState({ data: randomArr });
  },

  random: function random(event) {
    event.preventDefault();
    var stateCopy = this.state.copy.slice(0);
    var random = [stateCopy[Math.round(Math.random() * 24)]];
    this.setState({ data: random });
  },

  clear: function clear(event) {
    event.preventDefault();
    this.setState({ data: [] });
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ControlLogic, {
        callGiphy: this.callGiphy,
        reverse: this.reverse,
        randomize: this.randomize,
        random: this.random,
        clear: this.clear }),
      React.createElement(Images, { data: this.state.data })
    );
  }
});

var Images = React.createClass({
  displayName: "Images",

  render: function render() {
    var images = this.props.data;
    var renderImages = images.map(function (item) {
      return React.createElement(
        "div",
        null,
        React.createElement("img", {
          style: { borderRadius: "15px" },
          src: item,
          alt: "Giphy" }),
        React.createElement("br", null)
      );
    });
    return React.createElement(
      "div",
      { style: { textAlign: "center" } },
      renderImages
    );
  }
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('giphy'));