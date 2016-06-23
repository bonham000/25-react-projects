"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      twitch: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "comster404", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"],
      permanentData: [],
      data: []
    };
    return _this;
  }

  Root.prototype.componentWillMount = function componentWillMount() {
    var users = this.state.twitch;
    users.map(function (user) {
      $.getJSON('https://api.twitch.tv/kraken/streams/' + user + '?callback=?', function (response) {
        var streamData = response;
        $.getJSON('https://api.twitch.tv/kraken/users/' + user, function (data) {
          var userData = data;
          var state = 1;

          if (streamData.status === 422) {
            state = 2;
          } else if (streamData.stream === null) {
            state = 3;
          }

          var currentData = this.state.data.slice(0);
          currentData.push([streamData, userData, state]);
          var dataCopy = currentData.slice(0);
          this.setState({
            permanentData: dataCopy,
            data: currentData
          });
        }.bind(this));
      }.bind(this));
    }.bind(this));
  };

  Root.prototype.showStreaming = function showStreaming() {
    var currentData = this.state.permanentData.slice(0);

    var filterStreaming = function filterStreaming(data) {
      var streamingData = [];
      for (var i = 0; i < currentData.length; i++) {
        if (currentData[i][2] === 1) {
          streamingData.push(currentData[i]);
        }
      }
      return streamingData;
    };

    var filtered = filterStreaming(currentData);

    this.setState({
      data: filtered
    });
  };

  Root.prototype.showAll = function showAll() {
    var originalData = this.state.permanentData.slice(0);
    this.setState({
      data: originalData
    });
  };

  Root.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "titleDiv" },
        React.createElement(
          "p",
          { className: "title" },
          "Twitch TV API Tool"
        )
      ),
      React.createElement(
        "div",
        { className: "btnDiv" },
        React.createElement(
          "button",
          { className: "streamingBtn", onClick: this.showStreaming.bind(this) },
          "Show Streaming"
        ),
        React.createElement(
          "button",
          { className: "allBtn", onClick: this.showAll.bind(this) },
          "Show All"
        )
      ),
      React.createElement(RenderUsers, { users: this.state.data, twitch: this.state.twitch })
    );
  };

  return Root;
}(React.Component);

;

var RenderUsers = function (_React$Component2) {
  _inherits(RenderUsers, _React$Component2);

  function RenderUsers() {
    _classCallCheck(this, RenderUsers);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  RenderUsers.prototype.handleClick = function handleClick(link) {
    window.open(link);
  };

  RenderUsers.prototype.render = function render() {
    var users = this.props.users.slice(0);
    var renderUsers = '';

    if (users.length > 0) {
      renderUsers = users.map(function (user) {

        var url = 'https://www.twitch.tv/' + user[1].name;
        var logo = user[1].logo;
        var streaming = '';
        var closed = '';
        var style = {
          background: "#FFC857",
          color: "#232323"
        };

        if (user[0].stream === null || user[0].stream === undefined) {
          streaming = "User is not currently streaming";
        } else {
          streaming = "User is currently streaming " + user[0].stream.game + " with " + user[0].stream.viewers + " viewers.";
          style = {
            background: "#67D5B5",
            color: "#232323"
          };
        }

        if (user[0].status === 422) {
          closed = "This account is closed or does not exist";
          streaming = '';
          style = {
            background: "#BF3100",
            color: "#FFFFF2"
          };
        }

        if (logo === null) {
          logo = 'http://i1361.photobucket.com/albums/r662/bonham000/Twitch%20API/text4142_zpsyrkxdf4z.png';
        }

        return React.createElement(
          "div",
          { style: style, className: "resultsWrapper", onClick: this.handleClick.bind(null, url) },
          React.createElement(
            "div",
            { className: "imgContainer" },
            React.createElement("img", { src: logo, alt: "player logo" })
          ),
          React.createElement(
            "div",
            { className: "userWrapper" },
            React.createElement(
              "p",
              { className: "username" },
              user[1].display_name
            ),
            React.createElement(
              "p",
              { className: "streaming" },
              streaming
            ),
            React.createElement(
              "p",
              { className: "bio" },
              user[1].bio
            ),
            React.createElement(
              "p",
              null,
              closed
            )
          )
        );
      }.bind(this));
    }
    return React.createElement(
      "div",
      null,
      renderUsers
    );
  };

  return RenderUsers;
}(React.Component);

ReactDOM.render(React.createElement(Root, null), document.getElementById('main'));