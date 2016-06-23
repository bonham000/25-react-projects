
class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      currLat: '',
      currLon: '',
      city: '',
      country: '',
      temp: '',
      tempCategory: 'Kelvin',
      currTempK: '',
      currTempF: '',
      currTempC: '',
      weatherMain: '',
      weatherDetail: '',
      display: 'none'
    };
  }
  componentWillMount() {
    this.getLocation();
  }
  getLocation() {
    $.get('http://ip-api.com/json', function(response) {
      console.log("User's location retrieved successfully");
      this.setState({
        city: response.city,
        country: response.country,
        currLat: response.lat,
        currLon: response.lon
      });
      this.getWeather();
      
    }.bind(this));
  }
  getWeather() {
    var keyID = 'e75aa9eb22e3e903ba187251f2faa34f';
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + this.state.currLat + '&lon=' + this.state.currLon + '&appid=' + keyID, function(response) {
        console.log('Weather API called successfully');
        var tempK = response.main.temp;
        var tempC = tempK - 273.15;
        var tempF = tempC * 1.8 + 32;
        this.setState({
          currTempK: (tempK).toString() + 'K',
          temp: (tempK).toString() + 'K',
          currTempF: (tempF.toFixed(2)).toString() + '°F',
          currTempC: (tempC.toFixed(2)).toString() + '°C',
          weatherMain: response.weather[0].main,
          weatherDetail: response.weather[0].description,
          display: 'block'
        });
      }.bind(this));
  }
  handleKelvin() {
    this.setState({temp: this.state.currTempK, tempCategory: "Kelvin"});
  }
  handleCelsius() {
    this.setState({temp: this.state.currTempC, tempCategory: "Celsius"});
  }
  handleFaren() {
    this.setState({temp: this.state.currTempF, tempCategory: "Faren"});
  }
  render() {
    return (
      <div>
        <h1 className = "title">Current Weather Service</h1>
        <DisplayWeather
          setKelvin = {this.handleKelvin.bind(this)}
          setFaren = {this.handleFaren.bind(this)}
          setCelsius = {this.handleCelsius.bind(this)}
          temp = {this.state.temp}
          tempCategory = {this.state.tempCategory}
          latitude = {this.state.currLat}
          longitude = {this.state.currLon}
          city = {this.state.city}
          country = {this.state.country}
          kelvin = {this.state.currTempK}
          celsius = {this.state.currTempC}
          faren = {this.state.currTempF}
          weather = {this.state.weatherMain}
          weatherDetail = {this.state.weatherDetail}
          display = {this.state.display} />
      </div>
      );
  }
};

class DisplayWeather extends React.Component {
  weatherIcon(props) {

    var cond = this.props.weatherDetail;

    if (cond === "clear sky") {
      return <img src = "http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/sun_zps5alfhawb.png" />
    }
    else if ((cond === "few clouds") || (cond === "scattered clouds") || (cond === "broken clouds")) {
      return <img src = "http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clouds_zpsimfgky1h.png" />
    }
    else if ((cond === "shower rain") || (cond === "rain")) {
      return <img src = "http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/rain_zpsd8iqh9we.png" />
    }
    else if (cond === "thunderstorm") {
      return <img src = "http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/storm_zpsapxffwwd.png" />
    }
    else {
      return <img src = "http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clouds_zpsimfgky1h.png" />
    }
  
  }
  styleKelvin() {
    var tempCategory = this.props.tempCategory;
    if (tempCategory === "Kelvin") {
      return {
        color: "#f94e3f"
      }
    }
    else {
      return {
        color: "#3f4040"
      }
    }
  }
  styleCelsius() {
    var tempCategory = this.props.tempCategory;
    if (tempCategory === "Celsius") {
      return {
        color: "#f94e3f"
      }
    }
    else {
      return {
        color: "#3f4040"
      }
    }
  }
  styleFaren() {
    var tempCategory = this.props.tempCategory;
    if (tempCategory === "Faren") {
      return {
        color: "#f94e3f"
      }
    }
    else {
      return {
        color: "#3f4040"
      }
    }
  }
  render() {
    var divDisplay = {
      display: this.props.display
    };
    var lat = Number(this.props.latitude).toFixed(2);
    var lon = Number(this.props.longitude).toFixed(2);
    return (
      <div style = {divDisplay} >
        <p className = "conditions">The current weather conditions are:</p>
        <p className = "weather">{this.props.weather}, {this.props.weatherDetail}</p>
        {this.weatherIcon()}
        <p className = "temperature">{this.props.temp}</p>
        <div className = "toggleTemp">
          <div><p style = {this.styleKelvin()} onClick = {this.props.setKelvin}>Kelvin</p></div>
          <div><p style = {this.styleCelsius()} onClick = {this.props.setCelsius}>Celsius</p></div>
          <div><p style = {this.styleFaren()} onClick = {this.props.setFaren}>Farenheit</p></div>
        </div>
        <div className = "data">
          <p className = "coordinates">Your coordinates are: {lat}, {lon}</p>
          <p className = "city">Your location: {this.props.city}, {this.props.country}</p>
        </div>
        <div className = "credits">
          <p>Weather icons courtesy of&nbsp;
          <a target = "_blank" href = "https://twitter.com/adamwhitcroft">Adam Whitcroft's</a>&nbsp;nice&nbsp;
          <a target = "_blank" href = "http://adamwhitcroft.com/climacons/">Climacon Set</a></p>
        </div>
      </div>
      )
  }
};

ReactDOM.render(<Root />, document.getElementById('main'));