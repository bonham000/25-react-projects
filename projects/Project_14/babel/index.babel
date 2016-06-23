
class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      twitch: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "comster404", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"],
      permanentData: [],
      data: []
    };
  }
  componentWillMount() {
    var users = this.state.twitch;
    users.map(function(user) {
      $.getJSON('https://api.twitch.tv/kraken/streams/' + user + '?callback=?', function(response) {
        var streamData = response;
        $.getJSON('https://api.twitch.tv/kraken/users/' + user, function(data) {
          var userData = data;
          var state = 1;

          if (streamData.status === 422) { state = 2 }
          else if(streamData.stream === null) { state = 3}

          var currentData = this.state.data.slice(0);
          currentData.push([streamData, userData, state]);
          var dataCopy = currentData.slice(0);
          this.setState({
            permanentData: dataCopy,
            data: currentData
          })
        }.bind(this));
      }.bind(this));
    }.bind(this))
  }
  showStreaming() {
    var currentData = this.state.permanentData.slice(0);

    var filterStreaming = function(data) {
      var streamingData = [];
      for (var i = 0; i < currentData.length; i++) {
        if (currentData[i][2] === 1) {
          streamingData.push(currentData[i]);
        }
      }
      return streamingData;
    }

    var filtered = filterStreaming(currentData);

    this.setState({
      data: filtered
    });

  }
  showAll() {
    var originalData = this.state.permanentData.slice(0);
    this.setState({
      data: originalData
    });
  }
  render() {
    return (
      <div>
        <div className = "titleDiv">
          <p className = "title">Twitch TV API Tool</p>
        </div>
        <div className = "btnDiv">
          <button className = "streamingBtn" onClick = {this.showStreaming.bind(this)}>Show Streaming</button>
          <button className = "allBtn" onClick = {this.showAll.bind(this)}>Show All</button>
        </div>
        <RenderUsers users = {this.state.data} twitch = {this.state.twitch} />
      </div>
      );
  }
};

class RenderUsers extends React.Component {
  handleClick(link) {
    window.open(link);
  }
  render() {
    var users = this.props.users.slice(0);
    var renderUsers = '';

    if (users.length > 0) {
      renderUsers = users.map(function(user) {

        var url = 'https://www.twitch.tv/' + user[1].name;
        var logo = user[1].logo;
        var streaming = '';
        var closed = '';
        var style = {
          background: "#FFC857",
          color: "#232323"
        }

        if ( (user[0].stream === null) || (user[0].stream === undefined) ) {
          streaming = "User is not currently streaming";
        }
        else {
          streaming = "User is currently streaming " + user[0].stream.game + " with " + user[0].stream.viewers + " viewers."
          style = {
            background: "#67D5B5",
            color: "#232323"
          }
        }

        if (user[0].status === 422) {
          closed = "This account is closed or does not exist";
          streaming = '';
          style = {
            background: "#BF3100",
            color: "#FFFFF2"
          }
        }

        if (logo === null) {
          logo = 'http://i1361.photobucket.com/albums/r662/bonham000/Twitch%20API/text4142_zpsyrkxdf4z.png';
        }

          return (
            <div style = {style} className = "resultsWrapper" onClick = {this.handleClick.bind(null, url)} >
              <div className = "imgContainer">
                <img src = {logo} alt = "player logo" />
              </div>
              <div className = "userWrapper">
                <p className = "username">{user[1].display_name}</p>
                <p className = "streaming">{streaming}</p>
                <p className = "bio">{user[1].bio}</p>
                <p>{closed}</p>
              </div>
            </div>
          )

      }.bind(this));
    }
    return (
      <div>
        {renderUsers}
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('main'));