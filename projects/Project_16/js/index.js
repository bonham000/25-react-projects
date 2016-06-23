"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			condition: 'off',
			speed: 1000,
			counter: 0,
			breakCount: 2,
			initTime: 5,
			initBreakTime: 2,
			timeMin: 5,
			timeSec: 60,
			breakMin: 2,
			breakSec: 60,
			status: "Ready?",
			buttonStatus: "Start Timer"
		};
		_this.startTimer = _this.startTimer.bind(_this);
		_this.addTime = _this.addTime.bind(_this);
		_this.subtractTime = _this.subtractTime.bind(_this);
		_this.addBreakTime = _this.addBreakTime.bind(_this);
		_this.subtractBreakTime = _this.subtractBreakTime.bind(_this);
		_this.checked = _this.checked.bind(_this);
		return _this;
	}

	App.prototype.startTimer = function startTimer() {
		var _this2 = this;

		if (this.state.breakCount === -1) {
			this.setState({
				condition: 'off',
				speed: 1000,
				counter: 0,
				breakCount: 2,
				initTime: 5,
				initBreakTime: 2,
				timeMin: 5,
				timeSec: 60,
				breakMin: 2,
				breakSec: 60,
				status: "Ready?",
				buttonStatus: "Start Timer"
			});
		}

		if (this.state.condition === "off") {
			var timer;

			(function () {
				var clear = function clear() {
					clearInterval(timer);
				};

				_this2.setState({
					condition: "running",
					timeMin: _this2.state.timeMin - 1
				});

				timer = setInterval(function () {

					if (this.state.counter === 0) {
						this.setState({
							status: "Focus!"
						});
					}

					if (this.state.timeMin === 0 && this.state.timeSec === 0) {

						this.setState({
							breakCount: this.state.breakCount - 1
						});

						if (this.state.breakCount === 0) {
							this.setState({
								timeMin: this.state.initTime,
								timeSec: 60,
								breakCount: this.state.breakCount - 1,
								status: "Finished!",
								buttonStatus: "Reset?"
							});
							clear();
						} else {
							this.setState({
								timeMin: this.state.breakMin,
								timeSec: this.state.breakSec,
								condition: "off",
								status: "Break!"
							});

							clear();
							this.startTimer();
						}
					} else if (this.state.counter % 60 === 0 && this.state.counter !== 0 && this.state.timeMin > 0) {
						this.setState({
							timeMin: this.state.timeMin - 1,
							timeSec: 60
						});
					} else {
						this.setState({
							timeSec: this.state.timeSec - 1
						});
					}
					this.setState({
						counter: this.state.counter + 1
					});
				}.bind(_this2), _this2.state.speed);

				timer;
			})();
		}
	};

	App.prototype.addTime = function addTime() {
		if (this.state.condition === "off") {
			if (this.state.initTime < 60) {
				this.setState({
					initTime: this.state.initTime + 1,
					timeMin: this.state.timeMin + 1
				});
			}
		}
	};

	App.prototype.subtractTime = function subtractTime() {
		if (this.state.condition === "off") {
			if (this.state.initTime > 2) {
				this.setState({
					initTime: this.state.initTime - 1,
					timeMin: this.state.timeMin - 1
				});
			}
		}
	};

	App.prototype.addBreakTime = function addBreakTime() {
		if (this.state.condition === "off") {
			if (this.state.breakMin < 60) {
				this.setState({
					initBreakTime: this.state.initBreakTime + 1,
					breakMin: this.state.breakMin + 1
				});
			}
		}
	};

	App.prototype.subtractBreakTime = function subtractBreakTime() {
		if (this.state.condition === "off") {
			if (this.state.breakMin > 2) {
				this.setState({
					initBreakTime: this.state.initBreakTime - 1,
					breakMin: this.state.breakMin - 1
				});
			}
		}
	};

	App.prototype.checked = function checked() {
		if (this.state.condition === "off") {
			if (this.state.speed === 1000) {
				this.setState({
					speed: 25
				});
			} else {
				this.setState({
					speed: 1000
				});
			}
		}
	};

	App.prototype.render = function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				{ className: "title" },
				"Free Code Camp Pomodoro Clock"
			),
			React.createElement("hr", null),
			React.createElement(
				"div",
				{ className: "speedControl" },
				React.createElement(
					"div",
					{ className: "checkInput" },
					React.createElement("input", { type: "checkbox", className: "inputCheck", onChange: this.checked }),
					React.createElement(
						"p",
						null,
						"Speed Mode"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "control" },
				React.createElement(TimerControl, {
					minutes: this.state.initTime,
					addTime: this.addTime,
					subtractTime: this.subtractTime,
					startTimer: this.startTimer }),
				React.createElement(BreakControl, {
					minutes: this.state.initBreakTime,
					addBreakTime: this.addBreakTime,
					subtractBreakTime: this.subtractBreakTime }),
				React.createElement(StartTimer, {
					status: this.state.status,
					buttonStatus: this.state.buttonStatus,
					startTimer: this.startTimer })
			),
			React.createElement(Timer, {
				minutes: this.state.timeMin,
				seconds: this.state.timeSec,
				condition: this.state.condition,
				buttonStatus: this.state.buttonStatus })
		);
	};

	return App;
}(React.Component);

;

var TimerControl = function (_React$Component2) {
	_inherits(TimerControl, _React$Component2);

	function TimerControl() {
		_classCallCheck(this, TimerControl);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	TimerControl.prototype.render = function render() {
		return React.createElement(
			"div",
			{ className: "timerControl" },
			React.createElement(
				"h2",
				null,
				React.createElement(
					"strong",
					null,
					"Time:"
				),
				" ",
				this.props.minutes,
				" minutes"
			),
			React.createElement(
				"button",
				{ className: "timeBtn minus", onClick: this.props.subtractTime },
				"-"
			),
			React.createElement(
				"button",
				{ className: "timeBtn plus", onClick: this.props.addTime },
				"+"
			)
		);
	};

	return TimerControl;
}(React.Component);

;

var BreakControl = function (_React$Component3) {
	_inherits(BreakControl, _React$Component3);

	function BreakControl() {
		_classCallCheck(this, BreakControl);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	BreakControl.prototype.render = function render() {
		return React.createElement(
			"div",
			{ className: "breakControl" },
			React.createElement(
				"h2",
				null,
				React.createElement(
					"strong",
					null,
					"Break:"
				),
				" ",
				this.props.minutes,
				" minutes"
			),
			React.createElement(
				"button",
				{ className: "timeBtn minus", onClick: this.props.subtractBreakTime },
				"-"
			),
			React.createElement(
				"button",
				{ className: "timeBtn plus", onClick: this.props.addBreakTime },
				"+"
			)
		);
	};

	return BreakControl;
}(React.Component);

;

var StartTimer = function (_React$Component4) {
	_inherits(StartTimer, _React$Component4);

	function StartTimer() {
		_classCallCheck(this, StartTimer);

		return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
	}

	StartTimer.prototype.render = function render() {
		return React.createElement(
			"div",
			{ className: "startTimer" },
			React.createElement(
				"h2",
				null,
				this.props.status
			),
			React.createElement(
				"button",
				{ className: "startBtn", onClick: this.props.startTimer },
				this.props.buttonStatus
			)
		);
	};

	return StartTimer;
}(React.Component);

;

var Timer = function (_React$Component5) {
	_inherits(Timer, _React$Component5);

	function Timer() {
		_classCallCheck(this, Timer);

		return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
	}

	Timer.prototype.render = function render() {

		var style = {
			fontSize: "40px"
		};

		if (this.props.condition === "running") {
			style = { fontSize: "300px" };
		}

		var seconds = ('0' + this.props.seconds).slice(-2);

		if (seconds === "60") {
			seconds = "00";
		}

		var timerText = ('0' + this.props.minutes).slice(-2) + ":" + seconds;

		if (this.props.buttonStatus === "Reset?") {
			timerText = "great job! =D";
			style = {
				fontFamily: "Avenir",
				fontSize: "125px"
			};
		}

		return React.createElement(
			"div",
			{ className: "timer" },
			React.createElement(
				"h1",
				{ style: style },
				timerText
			)
		);
	};

	return Timer;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));