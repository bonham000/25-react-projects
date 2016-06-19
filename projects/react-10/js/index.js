'use strict';

var Root = React.createClass({
  displayName: 'Root',

  getInitialState: function getInitialState() {
    return {
      people: [],
      numberPeople: '',
      latitude: '',
      longitude: '',
      coordinates: [],
      timeStamp: '',
      timeNatural: '',
      velocityKilo: '',
      velocityMile: '',
      count: 0,
      table: []
    };
  },
  componentWillMount: function componentWillMount() {
    $.ajax({
      url: "http://api.open-notify.org/iss-now.json",
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        var natural = '';
        function unix() {
          var unix = Number(data.timestamp);
          var date = new Date(unix * 1000);
          var hours = date.getHours();
          var minutes = "0" + date.getMinutes();
          var seconds = "0" + date.getSeconds();
          natural = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        };
        unix();

        this.setState({
          latitude: data.iss_position.latitude,
          longitude: data.iss_position.longitude,
          timeStamp: data.timestamp,
          timeNatural: natural
        });
      }.bind(this),
      error: function error(jqXHR, textStatus, errorThrown) {
        console.log("Error in the iss-now API call");
      }
    });

    $.ajax({
      url: "http://api.open-notify.org/astros.json",
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        this.setState({ numberPeople: data.number, people: data.people });
        console.log(this.state.people);
      }.bind(this),
      error: function error(jqXHR, textStatus, errorThrown) {
        console.log("Error in the astros API call");
      }
    });

    this.call();
  },
  call: function call() {
    var timer = setInterval(function () {
      var currLat = this.state.latitude;
      var currLon = this.state.longitude;
      var position = [];
      position[0] = currLat;
      position[1] = currLon;
      $.ajax({
        url: "http://api.open-notify.org/iss-now.json",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
          var natural = '';
          function unix() {
            var unix = Number(data.timestamp);
            var date = new Date(unix * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();
            natural = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
          };
          unix();
          var newLat = data.iss_position.latitude;
          var newLon = data.iss_position.longitude;
          position[2] = newLat;
          position[3] = newLon;
          var velocity = getDistance(position[0], position[1], position[2], position[3]) / 5 * 3600;

          function getDistance(lat1, lon1, lat2, lon2) {
            var R = 6371;
            var dLat = deg2rad(lat2 - lat1);
            var dLon = deg2rad(lon2 - lon1);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d;
          }

          function deg2rad(deg) {
            return deg * (Math.PI / 180);
          };

          var currTable = this.state.table.slice(0);
          var currCount = this.state.count;
          var newCount = Number(currCount) + 1;

          currTable.push([currCount, data.iss_position.latitude.toFixed(2), data.iss_position.longitude.toFixed(2), data.timestamp, natural.toString().substr(0, 9), velocity.toString().substr(0, 5), (velocity / 1.609344).toString().substr(0, 5)]);

          this.setState({
            latitude: data.iss_position.latitude,
            longitude: data.iss_position.longitude,
            coordinates: position,
            timeStamp: data.timestamp,
            timeNatural: natural,
            velocityKilo: velocity,
            velocityMile: velocity / 1.609344,
            table: currTable,
            count: newCount
          });
        }.bind(this),
        error: function error(jqXHR, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      });
    }.bind(this), 5000);
  },
  render: function render() {
    var style = {
      textAlign: "center",
      color: "#50C9CE",
      fontSize: "35px"
    };
    var tableStyle = {
      margin: "25px auto",
      padding: "10px",
      border: "1px solid rgba(252, 252, 252, 0.25)"
    };
    var columnOne = {
      textAlign: "right",
      padding: "15px",
      paddingLeft: "25px",
      paddingRight: "15px",
      background: "rgba(36, 32, 56, 0.4)",
      color: "#F7ECE1",
      borderCollapse: "collapse",
      borderRight: "1px solid rgba(252, 252, 252, 0.25)"
    };
    var columnTwo = {
      textAlign: "left",
      background: "rgba(80, 201, 206, 0.7)",
      paddingLeft: "10px",
      paddingRight: "25px",
      color: "#242038"
    };
    var tableState = this.state.table.slice(0).reverse();
    var tableData = tableState.map(function (item) {
      return React.createElement(
        'tr',
        { className: 'tableData' },
        React.createElement(
          'td',
          null,
          item[0]
        ),
        React.createElement(
          'td',
          null,
          item[1]
        ),
        React.createElement(
          'td',
          null,
          item[2]
        ),
        React.createElement(
          'td',
          null,
          item[3]
        ),
        React.createElement(
          'td',
          null,
          item[4]
        ),
        React.createElement(
          'td',
          null,
          item[5]
        ),
        React.createElement(
          'td',
          null,
          item[6]
        )
      );
    });

    var spacePeople;

    if (this.state.numberPeople == 0) {
      spacePeople = React.createElement(
        'p',
        null,
        'Currently there are no humans in space!'
      );
    } else if (this.state.numberPeople > 0) {
      var peopleSpace = this.state.people.map(function (person) {
        return React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            person.name,
            ', craft: ',
            person.craft
          )
        );
      });
      spacePeople = React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'At this moment there are ',
          this.state.numberPeople,
          ' humans in space. They are:'
        ),
        peopleSpace
      );
    };
    return React.createElement(
      'div',
      { style: style },
      React.createElement(
        'h3',
        { className: 'title' },
        'Current Information From Space'
      ),
      spacePeople,
      React.createElement(
        'h3',
        { className: 'subtitle' },
        'Current Data on the ISS:'
      ),
      React.createElement(
        'table',
        { style: tableStyle },
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            { style: columnOne },
            'Current Latitude:'
          ),
          React.createElement(
            'td',
            { style: columnTwo },
            this.state.latitude.toString().substr(0, 10)
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            { style: columnOne },
            'Current Longitude:'
          ),
          React.createElement(
            'td',
            { style: columnTwo },
            this.state.longitude.toString().substr(0, 10)
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            { style: columnOne },
            'Current Timestamp (unix):'
          ),
          React.createElement(
            'td',
            { style: columnTwo },
            this.state.timeStamp
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            { style: columnOne },
            'Current Timestamp (natural):'
          ),
          React.createElement(
            'td',
            { style: columnTwo },
            this.state.timeNatural
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            { style: columnOne },
            'Estimated Velocity (km/h):'
          ),
          React.createElement(
            'td',
            { style: columnTwo },
            this.state.velocityKilo.toString().substr(0, 10)
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            { style: columnOne },
            'Estimated Velocity (mph):'
          ),
          React.createElement(
            'td',
            { style: columnTwo },
            this.state.velocityMile.toString().substr(0, 10)
          )
        )
      ),
      React.createElement(
        'table',
        { className: 'dataTable' },
        React.createElement(
          'tr',
          { className: 'tableHead' },
          React.createElement(
            'th',
            null,
            'Count'
          ),
          React.createElement(
            'th',
            null,
            'Latitude'
          ),
          React.createElement(
            'th',
            null,
            'Longitude'
          ),
          React.createElement(
            'th',
            null,
            'Unix Time'
          ),
          React.createElement(
            'th',
            null,
            'Natural Time'
          ),
          React.createElement(
            'th',
            null,
            'Velocity (km/h)'
          ),
          React.createElement(
            'th',
            null,
            'Velocity (mph)'
          )
        ),
        tableData
      ),
      React.createElement(
        'p',
        { className: 'credits' },
        'Data provided courtesy of ',
        React.createElement(
          'a',
          { target: '_blank', href: 'http://open-notify.org/Open-Notify-API/ISS-Location-Now/' },
          'Open Notify'
        ),
        ' and refreshed every 5 seconds'
      )
    );
  }
});

ReactDOM.render(React.createElement(Root, null), document.getElementById("main"));