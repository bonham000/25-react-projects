"use strict";

var RootComponent = React.createClass({
  displayName: "RootComponent",

  getInitialState: function getInitialState() {
    return {
      data: [28, 12.2, 11.4, 8.4, 6.9, 5.8, 5.2, 3.0, 2.6, 2.2, 1.9, 1.8, 1.6, 1.5, 1.4, 1.2, 0.1, 0.1],
      occupation: ["Full-Stack Web Developer", "Back-End Web Developer", "Student", "Mobile Developer (Android, iOS, WP, and MultiPlatform)", "Desktop Develop", "Front-End Web Developer", "Other", "Enterprise Level Services Developer", "Embedded Application Developer", "DevOps", "Developer with a Statistics or Mathematics Background", "Executive (VP of Engineering, CTO, CIO, etc.)", "Data Scientist", "System Administrator", "Engineering Manager", "Analyst", "Business Intelligence or Data WWarehousing Expert", "Maching Learning Developer"]
    };
  },
  reverseOrder: function reverseOrder(event) {
    event.preventDefault();
    this.setState({ data: this.state.data.reverse(), occupation: this.state.occupation.reverse() });
  },
  render: function render() {
    var style = {
      color: "#95949D",
      fontFamily: "Avenir",
      fontSize: "35px",
      marginTop: "25px",
      marginBottom: "0"
    };
    var linkStyle = {
      fontFamily: "Avenir",
      fontSize: "15px",
      marginTop: "10px",
      marginBottom: "25px"
    };
    var btnStyle = {
      border: "none",
      fontSize: "18px",
      background: "#0EB0D6",
      padding: "7px",
      borderRadius: "7px",
      marginTop: "25px"
    };
    return React.createElement(
      "div",
      { style: { textAlign: "center" } },
      React.createElement(
        "p",
        {
          style: style },
        React.createElement(
          "a",
          { target: "_blank", href: "http://www.highcharts.com/" },
          "HighCharts"
        ),
        " rendered in a React Environment"
      ),
      React.createElement(HighChart, { data: this.state.data, occupation: this.state.occupation }),
      React.createElement(
        "button",
        {
          style: btnStyle,
          onClick: this.reverseOrder },
        "Click to reverse the data order!"
      ),
      React.createElement(
        "p",
        { style: linkStyle },
        React.createElement(
          "a",
          { target: "_blank",
            href: "http://stackoverflow.com/research/developer-survey-2016" },
          "- view the full survery results -"
        )
      )
    );
  }
});

var HighChart = React.createClass({
  displayName: "HighChart",
  componentDidMount: function componentDidMount() {
    var data = this.props.data;
    var occupation = this.props.occupation;
    $('.container').highcharts({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'StackOverflow 2016 Developer Survey Results for Occupation'
      },
      xAxis: {
        categories: occupation
      },
      yAxis: {
        title: {
          text: 'Percentage of Respondants'
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            formatter: function formatter() {
              return Highcharts.numberFormat(this.y) + '%';
            }
          }
        }
      },
      chart: {
        backgroundColor: "#FCFFC5",
        type: "bar"
      },
      series: [{
        name: 'Developer Occupations',
        data: data
      }]
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    var data = this.props.data;
    var occupation = this.props.occupation;
    $('.container').highcharts({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'StackOverflow 2016 Developer Survey Results for Occupation'
      },
      xAxis: {
        categories: occupation
      },
      yAxis: {
        title: {
          text: 'Percentage of Respondants'
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            formatter: function formatter() {
              return Highcharts.numberFormat(this.y) + '%';
            }
          }
        }
      },
      chart: {
        backgroundColor: "#FCFFC5",
        type: "bar"
      },
      series: [{
        name: 'Developer Occupations',
        data: data
      }]
    });
  },
  render: function render() {
    var style = {
      marginTop: "25px",
      marginBottom: "0px"
    };
    return React.createElement("div", {
      style: style,
      className: "container" });
  }
});

ReactDOM.render(React.createElement(RootComponent, null), document.getElementById("main"));