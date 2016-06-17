"use strict";

var Main = React.createClass({
  displayName: "Main",

  render: function render() {
    var style = {
      color: "#f26d5b",
      textAlign: "center",
      marginTop: "25px"
    };
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { style: style },
        "Move React with the Arrow Keys"
      ),
      React.createElement(MazeContainer, null)
    );
  }
});

var MazeContainer = React.createClass({
  displayName: "MazeContainer",

  getInitialState: function getInitialState() {
    return {
      speed: 2,
      top: 5,
      left: 5
    };
  },
  componentWillMount: function componentWillMount() {
    document.addEventListener("keydown", this.keypress);
  },
  sliderDefault: function sliderDefault(event) {
    event.preventDefault();
  },
  speed: function speed(event) {
    this.setState({ speed: parseInt(event.target.value) });
  },
  keypress: function keypress(event) {
    var speed = this.state.speed;
    var key = event.keyCode;
    var topPos = this.state.top;
    var leftPos = this.state.left;

    // Left Arrow
    if (key === 37) {
      leftPos -= speed;
      if (leftPos <= speed) {
        this.setState({ left: 5 });
      } else if (leftPos > 5) {
        this.setState({ left: leftPos });
      }
    }
    // Top Arrow
    else if (key === 38) {
        topPos -= speed;
        if (topPos <= speed) {
          this.setState({ top: 5 });
        } else if (topPos > 5) {
          this.setState({ top: topPos });
        }
      }
      // Right Arrow   
      else if (key === 39) {
          leftPos += speed;
          var distanceRight = 450 - leftPos;
          if (speed >= distanceRight) {
            this.setState({ left: 445 });
          } else if (leftPos < 450) {
            this.setState({ left: leftPos });
          }
        }
        // Down Arrow   
        else if (key === 40) {
            topPos += speed;
            var distanceDown = 450 - topPos;
            if (distanceDown <= speed) {
              this.setState({ top: 445 });
            } else if (topPos < 445) {
              this.setState({ top: topPos });
            }
          }
  },
  render: function render() {
    var mazeStyle = {
      width: "500px",
      height: "500px",
      margin: "25px auto",
      background: "rgb(25,25,25)",
      border: "15px solid #f6ea8c",
      borderRadius: "10px"
    };
    var input = {
      position: "absolute",
      top: "-50px"
    };
    var avatar = {
      position: "relative",
      left: this.state.left,
      top: this.state.top,
      width: "50px",
      height: "50px"
    };
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { style: mazeStyle },
        React.createElement("img", {
          src: "https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png",
          style: avatar })
      ),
      React.createElement(
        "div",
        { style: { textAlign: "center" } },
        React.createElement(
          "h2",
          { style: { color: "#f26d5b" } },
          "Control Movement Speed"
        ),
        React.createElement("input", {
          type: "range",
          min: "1",
          max: "50",
          onKeyDown: this.sliderDefault,
          value: this.state.speed,
          onChange: this.speed })
      )
    );
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));