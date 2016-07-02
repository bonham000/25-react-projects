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
      recent: [],
      alltime: [],
      data: [],
      sortRecent: "recent",
      sortAlltime: "alltime"
    };
    _this.showRecent = _this.showRecent.bind(_this);
    _this.sortRecent = _this.sortRecent.bind(_this);
    _this.showAlltime = _this.showAlltime.bind(_this);
    _this.sortAlltime = _this.sortAlltime.bind(_this);
    _this.openLink = _this.openLink.bind(_this);
    return _this;
  }

  Root.prototype.componentWillMount = function componentWillMount() {
    // Call APIs and retrieve data before component mounts:
    this.summonData();
  };

  Root.prototype.summonData = function summonData() {
    // Get Recent Camper Data:
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          this.setState({
            recent: data,
            data: data
          });
        }.bind(this));
      } else {
        console.log('Network response was not ok.');
      }
    }.bind(this)).catch(function (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
    // Get All Time Camper Data:
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          this.setState({
            alltime: data
          });
        }.bind(this));
      } else {
        console.log('Network response was not ok.');
      }
    }.bind(this)).catch(function (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };

  Root.prototype.showRecent = function showRecent() {
    this.setState({
      data: this.state.recent
    });
    document.getElementById("recentBtn").style.background = "#52DE8E";
    document.getElementById("alltimeBtn").style.background = "#F4F1BB";
    document.getElementById("sortRecent").style.background = "#F4F1BB";
    document.getElementById("sortAlltime").style.background = "#F4F1BB";
    document.getElementById("sortAlltime").innerHTML = "Sort by Alltime";
    document.getElementById("sortRecent").innerHTML = "Sort by Recent";
  };

  Root.prototype.sortRecent = function sortRecent() {
    var recent = this.state.recent.slice();
    var status = this.state.sortRecent;

    if (status === "recent") {
      var sorted = recent.sort(function (a, b) {
        return a.recent - b.recent;
      });
      this.setState({
        data: sorted,
        sortRecent: "recentReversed"
      });
      document.getElementById("sortRecent").innerHTML = "Recent <i class='fa fa-arrow-down' aria-hidden='true'></i>";
    } else if (status === "recentReversed") {
      this.setState({
        data: recent,
        sortRecent: "recent"
      });
      document.getElementById("sortRecent").innerHTML = "Recent <i class='fa fa-arrow-up' aria-hidden='true'></i>";
    }

    document.getElementById("sortRecent").style.background = "#52DE8E";
    document.getElementById("sortAlltime").style.background = "#F4F1BB";
  };

  Root.prototype.showAlltime = function showAlltime() {
    this.setState({
      data: this.state.alltime
    });

    document.getElementById("recentBtn").style.background = "#F4F1BB";
    document.getElementById("alltimeBtn").style.background = "#52DE8E";
    document.getElementById("sortRecent").style.background = "#F4F1BB";
    document.getElementById("sortAlltime").style.background = "#F4F1BB";
    document.getElementById("sortAlltime").innerHTML = "Sort by Alltime";
    document.getElementById("sortRecent").innerHTML = "Sort by Recent";
  };

  Root.prototype.sortAlltime = function sortAlltime() {
    var alltime = this.state.alltime.slice();
    var status = this.state.sortAlltime;

    if (status === "alltime") {
      var sorted = alltime.sort(function (a, b) {
        return a.alltime - b.alltime;
      });
      this.setState({
        data: sorted,
        sortAlltime: "alltimeReversed"
      });
      document.getElementById("sortAlltime").innerHTML = "Alltime <i class='fa fa-arrow-down' aria-hidden='true'></i>";
    } else if (status === "alltimeReversed") {
      this.setState({
        data: alltime,
        sortAlltime: "alltime"
      });
      document.getElementById("sortAlltime").innerHTML = "Alltime <i class='fa fa-arrow-up' aria-hidden='true'></i>";
    }

    document.getElementById("sortRecent").innerHTML = "Sort by Recent";
    document.getElementById("sortRecent").style.background = "#F4F1BB";
    document.getElementById("sortAlltime").style.background = "#52DE8E";
  };

  Root.prototype.openLink = function openLink(target) {
    window.open("http://freecodecamp.com/" + target);
  };

  Root.prototype.render = function render() {
    var _this2 = this;

    var mapData = this.state.data.map(function (user) {
      var lastUpdate = user.lastUpdate.toString();

      var year = lastUpdate.substr(0, 4);
      var month = lastUpdate.substr(5, 2);
      var day = lastUpdate.substr(8, 2);
      var time = lastUpdate.substr(11, 8);

      var parseMonth = function parseMonth(string) {
        var str = string.substr(0, 2);
        if (str === "01") {
          return "January";
        } else if (str === "02") {
          return "February";
        } else if (str === "03") {
          return "March";
        } else if (str === "04") {
          return "April";
        } else if (str === "05") {
          return "May";
        } else if (str === "06") {
          return "June";
        } else if (str === "07") {
          return "July";
        } else if (str === "08") {
          return "August";
        } else if (str === "09") {
          return "Sepetember";
        } else if (str === "10") {
          return "October";
        } else if (str === "11") {
          return "November";
        } else if (str === "12") {
          return "December";
        }
      };

      return React.createElement(
        "tr",
        { onClick: _this2.openLink.bind(_this2, user.username) },
        React.createElement(
          "td",
          { className: "userCol" },
          React.createElement("img", { src: user.img, alt: "User Logo" }),
          user.username
        ),
        React.createElement(
          "td",
          { className: "dataCol" },
          user.recent
        ),
        React.createElement(
          "td",
          { className: "dataCol" },
          user.alltime
        ),
        React.createElement(
          "td",
          { className: "timeCol" },
          time + " " + parseMonth(month) + " " + day + ", " + year
        )
      );
    });
    return React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "p",
        null,
        "Free Code Camp Leaderboard"
      ),
      React.createElement(
        "div",
        { className: "btnWrapper" },
        React.createElement(
          "div",
          { className: "btn", id: "recentBtn", onClick: this.showRecent },
          "Show Recent"
        ),
        React.createElement(
          "div",
          { className: "btn", id: "alltimeBtn", onClick: this.showAlltime },
          "Show Alltime"
        ),
        React.createElement(
          "div",
          { className: "btn", id: "sortRecent", onClick: this.sortRecent },
          "Sort by Recent"
        ),
        React.createElement(
          "div",
          { className: "btn", id: "sortAlltime", onClick: this.sortAlltime },
          "Sort by Alltime"
        )
      ),
      React.createElement(
        "table",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { className: "userCol" },
            "Username"
          ),
          React.createElement(
            "th",
            { className: "dataCol" },
            "Recent"
          ),
          React.createElement(
            "th",
            { className: "dataCol" },
            "Alltime"
          ),
          React.createElement(
            "th",
            { className: "timeCol" },
            "Last Activity"
          )
        ),
        mapData
      )
    );
  };

  Root.prototype.componentDidMount = function componentDidMount() {
    document.getElementById("recentBtn").style.background = "#52DE8E";
  };

  return Root;
}(React.Component);

;

ReactDOM.render(React.createElement(Root, null), document.getElementById('main'));