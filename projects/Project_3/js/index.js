"use strict";

var RenderList = React.createClass({
  displayName: "RenderList",

  render: function render() {
    var data = this.props.data;
    var countrySearch = this.props.search.trim().toLowerCase();
    var capitalSearch = this.props.capitalSearch.trim().toLowerCase();
    var regionSearch = this.props.regionSearch.trim().toLowerCase();
    var subregionSearch = this.props.subregionSearch.trim().toLowerCase();

    if (countrySearch.length > 0) {
      data = data.filter(function (item) {
        return item.country.toLowerCase().match(countrySearch);
      });
    };

    if (capitalSearch.length > 0) {
      data = data.filter(function (item) {
        return item.capital.toLowerCase().match(capitalSearch);
      });
    };

    if (regionSearch.length > 0) {
      data = data.filter(function (item) {
        return item.region.toLowerCase().match(regionSearch);
      });
    };

    if (subregionSearch.length > 0) {
      data = data.filter(function (item) {
        return item.subregion.toLowerCase().match(subregionSearch);
      });
    };

    var list = data.map(function (entry, index) {
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          { className: "country" },
          entry.country.substr(0, 30)
        ),
        React.createElement(
          "td",
          { className: "capital" },
          entry.capital
        ),
        React.createElement(
          "td",
          { className: "region" },
          entry.region
        ),
        React.createElement(
          "td",
          { className: "subregion" },
          entry.subregion
        ),
        React.createElement(
          "td",
          { className: "lat" },
          parseFloat(entry.coordinates[0]).toFixed(2)
        ),
        React.createElement(
          "td",
          { className: "lon" },
          parseFloat(entry.coordinates[1]).toFixed(2)
        )
      );
    }, this);
    return React.createElement(
      "table",
      null,
      React.createElement(
        "tr",
        { className: "tableHead" },
        React.createElement(
          "th",
          null,
          "Country"
        ),
        React.createElement(
          "th",
          null,
          "Capital"
        ),
        React.createElement(
          "th",
          null,
          "Region"
        ),
        React.createElement(
          "th",
          null,
          "Subregion"
        ),
        React.createElement(
          "th",
          null,
          "Latitude"
        ),
        React.createElement(
          "th",
          null,
          "Longitude"
        )
      ),
      list
    );
  }

});

var Main = React.createClass({
  displayName: "Main",

  getInitialState: function getInitialState() {
    return {
      data: [],
      countrySearch: '',
      capitalSearch: '',
      regionSearch: '',
      subregionSearch: ''
    };
  },
  componentWillMount: function componentWillMount() {
    return this.parseData();
  },

  parseData: function parseData() {
    $.getJSON('https://raw.githubusercontent.com/mledoze/countries/master/countries.json', function (response) {

      console.log("JSON data received");
      var array = new Array();

      for (var i = 0; i < response.length; i++) {

        var entry = new Object();

        entry.country = response[i].name.official;
        entry.capital = response[i].capital;
        entry.region = response[i].region;
        entry.subregion = response[i].subregion;
        entry.coordinates = response[i].latlng;

        array[i] = entry;
      }
      this.setState({ data: array });
    }.bind(this));
  },
  handleCountrySearch: function handleCountrySearch(event) {
    this.setState({ countrySearch: event.target.value });
  },
  handleCapitalSearch: function handleCapitalSearch(event) {
    this.setState({ capitalSearch: event.target.value });
  },
  handleRegionSearch: function handleRegionSearch(event) {
    this.setState({ regionSearch: event.target.value });
  },
  handleSubregionSearch: function handleSubregionSearch(event) {
    this.setState({ subregionSearch: event.target.value });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { className: "title" },
        "Country/Capital Data Multi-Search Service"
      ),
      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement("input", { type: "text", onChange: this.handleCountrySearch, placeholder: "Filter by Country" }),
        React.createElement("input", { type: "text", onChange: this.handleCapitalSearch, placeholder: "Filter by Capital" }),
        React.createElement("input", { type: "text", onChange: this.handleRegionSearch, placeholder: "Filter by Region" }),
        React.createElement("input", { type: "text", onChange: this.handleSubregionSearch, placeholder: "Filter by Subregion" })
      ),
      React.createElement(RenderList, {
        data: this.state.data,
        search: this.state.countrySearch,
        capitalSearch: this.state.capitalSearch,
        regionSearch: this.state.regionSearch,
        subregionSearch: this.state.subregionSearch })
    );
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));