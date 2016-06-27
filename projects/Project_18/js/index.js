"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var greenAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    redAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    yellowAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    blueAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			power: 'off',
			strict: 'off',
			player: false,
			replay: null,
			counter: 0,
			turn: 0,
			gameData: []
		};
		_this.powerOn = _this.powerOn.bind(_this);
		_this.strictOn = _this.strictOn.bind(_this);
		_this.startGame = _this.startGame.bind(_this);
		_this.randomClick = _this.randomClick.bind(_this);
		_this.playersTurn = _this.playersTurn.bind(_this);
		_this.greenClickComputer = _this.greenClickComputer.bind(_this);
		_this.redClickComputer = _this.redClickComputer.bind(_this);
		_this.yellowClickComputer = _this.yellowClickComputer.bind(_this);
		_this.blueClickComputer = _this.blueClickComputer.bind(_this);
		_this.greenClick = _this.greenClick.bind(_this);
		_this.redClick = _this.redClick.bind(_this);
		_this.yellowClick = _this.yellowClick.bind(_this);
		_this.blueClick = _this.blueClick.bind(_this);
		_this.resetGame = _this.resetGame.bind(_this);
		return _this;
	}

	App.prototype.resetGame = function resetGame() {
		document.getElementById('winner').style.display = "none";
		this.setState({
			player: false,
			replay: null,
			counter: 0,
			turn: 0,
			gameData: []
		});
		setTimeout(function () {
			this.startGame();
		}.bind(this), 500);
	};

	App.prototype.startGame = function startGame() {
		if (this.state.power === 'on') {
			this.randomClick();
		}
	};

	App.prototype.powerOn = function powerOn() {
		if (this.state.power === 'off') {
			this.setState({
				power: 'on'
			});
		} else {
			this.setState({
				power: 'off',
				strict: 'off',
				player: false,
				replay: null,
				counter: 0,
				turn: 0,
				gameData: []
			});
			setTimeout(function () {
				this.setState({
					power: 'off',
					strict: 'off',
					player: false,
					replay: null,
					counter: 0,
					turn: 0,
					gameData: []
				});
			}.bind(this), 610);
		}
	};

	App.prototype.strictOn = function strictOn() {
		if (this.state.strict === 'off') {
			this.setState({
				strict: 'on'
			});
		} else {
			this.setState({
				strict: 'off'
			});
		}
	};

	App.prototype.replay = function replay() {
		var data = this.state.gameData.slice();
		var counter = this.state.counter;
		if (counter < data.length) {
			if (data[counter] === 1) {
				this.greenClickComputer();this.setState({ counter: counter + 1 });setTimeout(function () {
					this.replay();
				}.bind(this), 600);
			} else if (data[counter] === 2) {
				this.redClickComputer();this.setState({ counter: counter + 1 });setTimeout(function () {
					this.replay();
				}.bind(this), 600);
			} else if (data[counter] === 3) {
				this.yellowClickComputer();this.setState({ counter: counter + 1 });setTimeout(function () {
					this.replay();
				}.bind(this), 600);
			} else if (data[counter] === 4) {
				this.blueClickComputer();this.setState({ counter: counter + 1 });setTimeout(function () {
					this.replay();
				}.bind(this), 600);
			}
		} else if (counter === data.length && !this.state.replay) {
			this.setState({
				counter: 0
			});
			this.randomClick();
		} else if (counter === data.length && this.state.replay) {
			this.setState({
				counter: 0,
				player: true
			});
		}
	};

	App.prototype.randomClick = function randomClick() {
		var rand = Math.round(Math.random() * 3) + 1;

		var turn = this.state.turn;
		var data = this.state.gameData.slice();

		data[turn] = rand;
		turn++;

		this.setState({
			gameData: data,
			turn: turn,
			player: true
		});

		if (rand === 1) {
			this.greenClickComputer();
		} else if (rand === 2) {
			this.redClickComputer();
		} else if (rand === 3) {
			this.yellowClickComputer();
		} else if (rand === 4) {
			this.blueClickComputer();
		}
	};

	App.prototype.playersTurn = function playersTurn(button) {
		var data = this.state.gameData.slice();
		var length = data.length;
		var counter = this.state.counter;

		if (button !== data[counter]) {
			console.log('wrong!');
			document.getElementById('0').style.background = "red";
			setTimeout(function () {
				document.getElementById('0').style.background = "rgb(40,40,40)";
			}, 500);
			if (this.state.strict === 'off') {
				this.setState({
					counter: 0,
					player: false,
					replay: true
				});
				setTimeout(function () {
					this.replay();
				}.bind(this), 1000);
			} else if (this.state.strict === 'on') {
				this.setState({
					power: 'on',
					strict: 'on',
					player: false,
					replay: null,
					counter: 0,
					turn: 0,
					gameData: []
				});
				setTimeout(function () {
					this.startGame();
				}.bind(this), 1000);
			}
		} else if (button == data[counter] && counter < data.length - 1) {
			console.log('correct!');
			this.setState({
				counter: counter + 1
			});
		} else if (button == data[counter] && counter == 4) {
			console.log('You win!!!');
			document.getElementById('winner').style.display = "block";
		} else if (button == data[counter] && counter === data.length - 1) {
			console.log('Correct!!!');
			this.setState({
				counter: 0,
				player: false,
				replay: false
			});
			setTimeout(function () {
				this.replay();
			}.bind(this), 1000);
		}
	};

	App.prototype.greenClickComputer = function greenClickComputer() {
		document.getElementById('1').style.background = "#0A9664";
		setTimeout(function () {
			document.getElementById('1').style.background = "#04724D";
		}, 250);
		greenAudio.play();
	};

	App.prototype.redClickComputer = function redClickComputer() {
		document.getElementById('2').style.background = "#FF283D";
		setTimeout(function () {
			document.getElementById('2').style.background = "#C5283D";
		}, 250);
		redAudio.play();
	};

	App.prototype.yellowClickComputer = function yellowClickComputer() {
		document.getElementById('3').style.background = "#FFE14B";
		setTimeout(function () {
			document.getElementById('3').style.background = "#FFC857";
		}, 250);
		yellowAudio.play();
	};

	App.prototype.blueClickComputer = function blueClickComputer() {
		document.getElementById('4').style.background = "#255FE9";
		setTimeout(function () {
			document.getElementById('4').style.background = "#255F85";
		}, 250);
		blueAudio.play();
	};

	App.prototype.greenClick = function greenClick() {
		if (this.state.player) {
			document.getElementById('1').style.background = "#0A9664";
			setTimeout(function () {
				document.getElementById('1').style.background = "#04724D";
			}, 250);
			greenAudio.play();
			this.playersTurn(1);
		}
	};

	App.prototype.redClick = function redClick() {
		if (this.state.player) {
			document.getElementById('2').style.background = "#FF283D";
			setTimeout(function () {
				document.getElementById('2').style.background = "#C5283D";
			}, 250);
			redAudio.play();
			this.playersTurn(2);
		}
	};

	App.prototype.yellowClick = function yellowClick() {
		if (this.state.player) {
			document.getElementById('3').style.background = "#FFE14B";
			setTimeout(function () {
				document.getElementById('3').style.background = "#FFC857";
			}, 250);
			yellowAudio.play();
			this.playersTurn(3);
		}
	};

	App.prototype.blueClick = function blueClick() {
		if (this.state.player) {
			document.getElementById('4').style.background = "#255FE9";
			setTimeout(function () {
				document.getElementById('4').style.background = "#255F85";
			}, 250);
			blueAudio.play();
			this.playersTurn(4);
		}
	};

	App.prototype.render = function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(GameController, {
				startGame: this.startGame,
				power: this.state.power,
				powerOn: this.powerOn,
				strict: this.state.strict,
				strictOn: this.strictOn,
				turn: this.state.turn }),
			React.createElement(
				"div",
				{ className: "container", id: "0" },
				React.createElement("div", {
					className: "gameBtn green", id: "1",
					onClick: this.greenClick }),
				React.createElement("div", {
					className: "gameBtn red", id: "2",
					onClick: this.redClick }),
				React.createElement("div", {
					className: "gameBtn yellow", id: "3",
					onClick: this.yellowClick }),
				React.createElement("div", {
					className: "gameBtn blue", id: "4",
					onClick: this.blueClick })
			),
			React.createElement(
				"div",
				{ className: "resetScreen", id: "winner" },
				React.createElement(
					"p",
					null,
					"You won!"
				),
				React.createElement(
					"button",
					{ onClick: this.resetGame },
					"Replay?"
				)
			),
			React.createElement(
				"div",
				{ className: "credits" },
				React.createElement(
					"p",
					null,
					React.createElement(
						"a",
						{ href: "https://www.freecodecamp.com/challenges/build-a-simon-game" },
						"Simon Game"
					),
					" made by ",
					React.createElement(
						"a",
						{ href: "http://sean.smith.me" },
						"Sean Smith"
					)
				)
			)
		);
	};

	return App;
}(React.Component);

;

var GameController = function (_React$Component2) {
	_inherits(GameController, _React$Component2);

	function GameController() {
		_classCallCheck(this, GameController);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	GameController.prototype.render = function render() {
		var power = this.props.power;
		var strict = this.props.strict;

		var powerSwitchStyle = {},
		    powerToggleStyle = {},
		    powerToggleText = {},
		    powerStyle = {};

		var strictSwitchStyle = {},
		    strictToggleStyle = {},
		    strictToggleText = {},
		    strictStyle = {};

		powerSwitchStyle = {
			width: "200px",
			height: "50px",
			background: "#272932",
			borderRadius: "25px"
		};

		if (power === 'off') {
			powerToggleStyle = {
				width: "50px",
				height: "50px",
				background: "rgb(150,150,150)",
				borderRadius: "50%",
				float: "right"
			};
			powerToggleText = {
				width: "150px",
				height: "50px",
				float: "left"
			};
			powerStyle = {
				position: "relative",
				bottom: "15px",
				left: "20px",
				color: "rgb(150,150,150)"
			};
		} else if (power === 'on') {
			powerToggleStyle = {
				width: "50px",
				height: "50px",
				background: "#5396F9",
				borderRadius: "50%",
				float: "left"
			};
			powerToggleText = {
				width: "150px",
				height: "50px",
				float: "right"
			};
			powerStyle = {
				position: "relative",
				bottom: "17px",
				right: "-15px",
				color: "#5396F9"
			};
		}

		strictSwitchStyle = {
			width: "200px",
			height: "50px",
			background: "#272932",
			borderRadius: "25px"
		};

		if (strict === 'off') {
			strictToggleStyle = {
				width: "50px",
				height: "50px",
				background: "rgb(150,150,150)",
				borderRadius: "50%",
				float: "right"
			};
			strictToggleText = {
				width: "150px",
				height: "50px",
				float: "left"
			};
			strictStyle = {
				position: "relative",
				bottom: "15px",
				left: "20px",
				color: "rgb(150,150,150)"
			};
		} else if (strict === 'on') {
			strictToggleStyle = {
				width: "50px",
				height: "50px",
				background: "#ff4e50",
				borderRadius: "50%",
				float: "left"
			};
			strictToggleText = {
				width: "150px",
				height: "50px",
				float: "right"
			};
			strictStyle = {
				position: "relative",
				bottom: "17px",
				right: "-15px",
				color: "#ff4e50"
			};
		}
		return React.createElement(
			"div",
			{ className: "controller" },
			React.createElement(
				"div",
				{ className: "switchContainer" },
				React.createElement(
					"div",
					{ className: "switch powerSwitch", style: powerSwitchStyle, onClick: this.props.powerOn },
					React.createElement(
						"div",
						{ style: powerToggleText },
						React.createElement(
							"p",
							{ style: powerStyle },
							"power ",
							this.props.power
						)
					),
					React.createElement("div", { className: "toggleBox", style: powerToggleStyle })
				),
				React.createElement(
					"div",
					{ className: "switch strictSwitch", style: strictSwitchStyle, onClick: this.props.strictOn },
					React.createElement(
						"div",
						{ style: strictToggleText },
						React.createElement(
							"p",
							{ style: strictStyle },
							"strict ",
							this.props.strict
						)
					),
					React.createElement("div", { className: "toggleBox", style: strictToggleStyle })
				),
				React.createElement(
					"button",
					{
						className: "startBtn",
						onClick: this.props.startGame },
					"Start Game"
				),
				React.createElement(
					"div",
					{ className: "turnBox" },
					React.createElement(
						"div",
						null,
						React.createElement(
							"p",
							{ className: "turnText" },
							"Turn:"
						)
					),
					React.createElement(
						"div",
						{ className: "turnCounter" },
						this.props.turn
					)
				)
			)
		);
	};

	return GameController;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));