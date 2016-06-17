'use strict';

var Root = React.createClass({
  displayName: 'Root',

  getInitialState: function getInitialState() {
    return {
      userData: { firstName: '', lastName: '', birthday: '', origin: '' },
      firstName: '',
      lastName: '',
      birthday: '',
      origin: '',
      titleDisplay: '',
      formOneDisplay: '',
      formTwoDisplay: 'none',
      finalDisplay: 'none'
    };
  },
  handleFirstName: function handleFirstName(event) {
    this.setState({ firstName: event.target.value });
  },
  handleLastName: function handleLastName(event) {
    this.setState({ lastName: event.target.value });
  },
  submitFormOne: function submitFormOne(event) {
    event.preventDefault();
    var newDataOne = this.state.userData;
    newDataOne.firstName = this.state.firstName;
    newDataOne.lastName = this.state.lastName;
    this.setState({ userData: newDataOne,
      firstName: '',
      lastName: '',
      formOneDisplay: 'none',
      formTwoDisplay: '' });
  },
  handleBirthday: function handleBirthday(event) {
    this.setState({ birthday: event.target.value });
  },
  handleOrigin: function handleOrigin(event) {
    this.setState({ origin: event.target.value });
  },
  submitFormTwo: function submitFormTwo(event) {
    event.preventDefault();
    var newDataTwo = this.state.userData;
    newDataTwo.birthday = this.state.birthday;
    newDataTwo.origin = this.state.origin;
    this.setState({ userData: newDataTwo,
      birthday: '',
      origin: '',
      formTwoDisplay: 'none',
      titleDisplay: 'none',
      finalDisplay: '' });
  },
  reset: function reset(event) {
    event.preventDefault();
    this.setState({
      userData: { firstName: '', lastName: '', birthday: '', origin: '' },
      firstName: '',
      lastName: '',
      birthday: '',
      origin: '',
      titleDisplay: '',
      formOneDisplay: '',
      formTwoDisplay: 'none',
      finalDisplay: 'none'
    });
    console.log("Form Reset");
  },
  render: function render() {
    var mainStyle = {
      textAlign: "center",
      marginTop: "150px"
    };
    var titleStyle = {
      display: this.state.titleDisplay
    };
    var formOneStyle = {
      display: this.state.formOneDisplay,
      marginTop: "35px",
      fontSize: "25px"
    };
    var formTwoStyle = {
      display: this.state.formTwoDisplay,
      marginTop: "35px",
      fontSize: "25px"
    };
    var inputStyle = {
      marginLeft: "15px"
    };
    var finalStyle = {
      display: this.state.finalDisplay
    };
    return React.createElement(
      'div',
      { style: mainStyle },
      React.createElement(
        'h1',
        { style: titleStyle },
        'This is a simple form service built with React'
      ),
      React.createElement(
        'form',
        {
          onSubmit: this.submitFormOne,
          style: formOneStyle },
        React.createElement(
          'label',
          null,
          'Type your first name:'
        ),
        React.createElement('input', {
          type: 'text',
          style: inputStyle,
          value: this.state.firstName,
          onChange: this.handleFirstName }),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'label',
          null,
          'Type your last name:'
        ),
        React.createElement('input', {
          type: 'text',
          style: inputStyle,
          value: this.state.lastName,
          onChange: this.handleLastName }),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'button',
          {
            style: { marginTop: "5px" },
            className: 'btn btn-lg btn-success' },
          'Proceed'
        )
      ),
      React.createElement(
        'form',
        {
          onSubmit: this.submitFormTwo,
          style: formTwoStyle },
        React.createElement(
          'label',
          null,
          'Type the year of your birthday:'
        ),
        React.createElement('input', {
          type: 'text',
          style: inputStyle,
          value: this.state.birthday,
          onChange: this.handleBirthday }),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'label',
          null,
          'Type where you are from:'
        ),
        React.createElement('input', {
          type: 'text',
          style: inputStyle,
          value: this.state.origin,
          onChange: this.handleOrigin }),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'button',
          {
            style: { marginTop: "5px" },
            className: 'btn btn-lg btn-success' },
          'Proceed'
        )
      ),
      React.createElement(
        'div',
        { style: finalStyle },
        React.createElement(Results, {
          firstName: this.state.userData.firstName,
          lastName: this.state.userData.lastName,
          birthday: this.state.userData.birthday,
          origin: this.state.userData.origin,
          reset: this.reset })
      )
    );
  }
});

var Results = React.createClass({
  displayName: 'Results',

  render: function render() {
    var birth = parseInt(this.props.birthday);
    var age;
    var date = new Date();
    var origin = this.props.origin;

    if (origin.length === 0) {
      origin = React.createElement(
        'h2',
        null,
        'We don\'t know where you are from...'
      );
    } else if (origin.length !== 0) {
      origin = React.createElement(
        'h2',
        null,
        'You are from ',
        origin,
        '.'
      );
    }

    if (isNaN(birth)) {
      age = React.createElement(
        'h2',
        null,
        'We couldn\'t understand your birthday...'
      );
    } else {
      var yearsOld = parseInt(date.toString().substr(10, 5)) - birth;
      age = React.createElement(
        'h2',
        null,
        'You are ',
        yearsOld,
        '.'
      );
    }

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Hello ',
        this.props.firstName,
        ' ',
        this.props.lastName,
        '!'
      ),
      origin,
      age,
      React.createElement(
        'button',
        {
          className: 'btn btn-lg btn-danger',
          style: { marginTop: "25px" },
          onClick: this.props.reset },
        'Reset Form'
      )
    );
  }
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('main'));