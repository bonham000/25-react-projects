'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
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
    return _this;
  }

  Root.prototype.componentWillMount = function componentWillMount() {
    this.getLocation();
  };

  Root.prototype.getLocation = function getLocation() {
    $.get('http://ip-api.com/json', function (response) {
      console.log("User's location retrieved successfully");
      this.setState({
        city: response.city,
        country: response.country,
        currLat: response.lat,
        currLon: response.lon
      });
      this.getWeather();
    }.bind(this));
  };

  Root.prototype.getWeather = function getWeather() {
    var keyID = 'e75aa9eb22e3e903ba187251f2faa34f';
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + this.state.currLat + '&lon=' + this.state.currLon + '&appid=' + keyID, function (response) {
      console.log('Weather API called successfully');
      var tempK = response.main.temp;
      var tempC = tempK - 273.15;
      var tempF = tempC * 1.8 + 32;
      this.setState({
        currTempK: tempK.toString() + 'K',
        temp: tempK.toString() + 'K',
        currTempF: tempF.toFixed(2).toString() + '°F',
        currTempC: tempC.toFixed(2).toString() + '°C',
        weatherMain: response.weather[0].main,
        weatherDetail: response.weather[0].description,
        display: 'block'
      });
    }.bind(this));
  };

  Root.prototype.handleKelvin = function handleKelvin() {
    this.setState({ temp: this.state.currTempK, tempCategory: "Kelvin" });
  };

  Root.prototype.handleCelsius = function handleCelsius() {
    this.setState({ temp: this.state.currTempC, tempCategory: "Celsius" });
  };

  Root.prototype.handleFaren = function handleFaren() {
    this.setState({ temp: this.state.currTempF, tempCategory: "Faren" });
  };

  Root.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { className: 'title' },
        'Current Weather Service'
      ),
      React.createElement(DisplayWeather, {
        setKelvin: this.handleKelvin.bind(this),
        setFaren: this.handleFaren.bind(this),
        setCelsius: this.handleCelsius.bind(this),
        temp: this.state.temp,
        tempCategory: this.state.tempCategory,
        latitude: this.state.currLat,
        longitude: this.state.currLon,
        city: this.state.city,
        country: this.state.country,
        kelvin: this.state.currTempK,
        celsius: this.state.currTempC,
        faren: this.state.currTempF,
        weather: this.state.weatherMain,
        weatherDetail: this.state.weatherDetail,
        display: this.state.display })
    );
  };

  return Root;
}(React.Component);

;

var DisplayWeather = function (_React$Component2) {
  _inherits(DisplayWeather, _React$Component2);

  function DisplayWeather() {
    _classCallCheck(this, DisplayWeather);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  DisplayWeather.prototype.weatherIcon = function weatherIcon(props) {

    var cond = this.props.weatherDetail;

    if (cond === "clear sky") {
      return React.createElement('img', { src: 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/sun_zps5alfhawb.png' });
    } else if (cond === "few clouds" || cond === "scattered clouds" || cond === "broken clouds") {
      return React.createElement('img', { src: 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clouds_zpsimfgky1h.png' });
    } else if (cond === "shower rain" || cond === "rain") {
      return React.createElement('img', { src: 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/rain_zpsd8iqh9we.png' });
    } else if (cond === "thunderstorm") {
      return React.createElement('img', { src: 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/storm_zpsapxffwwd.png' });
    } else {
      return React.createElement('img', { src: 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clouds_zpsimfgky1h.png' });
    }
  };

  DisplayWeather.prototype.styleKelvin = function styleKelvin() {
    var tempCategory = this.props.tempCategory;
    if (tempCategory === "Kelvin") {
      return {
        color: "#f94e3f"
      };
    } else {
      return {
        color: "#3f4040"
      };
    }
  };

  DisplayWeather.prototype.styleCelsius = function styleCelsius() {
    var tempCategory = this.props.tempCategory;
    if (tempCategory === "Celsius") {
      return {
        color: "#f94e3f"
      };
    } else {
      return {
        color: "#3f4040"
      };
    }
  };

  DisplayWeather.prototype.styleFaren = function styleFaren() {
    var tempCategory = this.props.tempCategory;
    if (tempCategory === "Faren") {
      return {
        color: "#f94e3f"
      };
    } else {
      return {
        color: "#3f4040"
      };
    }
  };

  DisplayWeather.prototype.render = function render() {
    var divDisplay = {
      display: this.props.display
    };
    var lat = Number(this.props.latitude).toFixed(2);
    var lon = Number(this.props.longitude).toFixed(2);
    return React.createElement(
      'div',
      { style: divDisplay },
      React.createElement(
        'p',
        { className: 'conditions' },
        'The current weather conditions are:'
      ),
      React.createElement(
        'p',
        { className: 'weather' },
        this.props.weather,
        ', ',
        this.props.weatherDetail
      ),
      this.weatherIcon(),
      React.createElement(
        'p',
        { className: 'temperature' },
        this.props.temp
      ),
      React.createElement(
        'div',
        { className: 'toggleTemp' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            { style: this.styleKelvin(), onClick: this.props.setKelvin },
            'Kelvin'
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            { style: this.styleCelsius(), onClick: this.props.setCelsius },
            'Celsius'
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            { style: this.styleFaren(), onClick: this.props.setFaren },
            'Farenheit'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'data' },
        React.createElement(
          'p',
          { className: 'coordinates' },
          'Your coordinates are: ',
          lat,
          ', ',
          lon
        ),
        React.createElement(
          'p',
          { className: 'city' },
          'Your location: ',
          this.props.city,
          ', ',
          this.props.country
        )
      ),
      React.createElement(
        'div',
        { className: 'credits' },
        React.createElement(
          'p',
          null,
          'Weather icons courtesy of ',
          React.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/adamwhitcroft' },
            'Adam Whitcroft\'s'
          ),
          ' nice ',
          React.createElement(
            'a',
            { target: '_blank', href: 'http://adamwhitcroft.com/climacons/' },
            'Climacon Set'
          )
        )
      )
    );
  };

  return DisplayWeather;
}(React.Component);

;

ReactDOM.render(React.createElement(Root, null), document.getElementById('main'));