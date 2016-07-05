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
			counter: 0,
			pause: false,
			running: false,
			randomControlValue: 3,
			generationTimer: 5,
			array: []
		};
		_this.renderRandomState = _this.renderRandomState.bind(_this);
		_this.handleCoordinates = _this.handleCoordinates.bind(_this);
		_this.startGame = _this.startGame.bind(_this);
		_this.pauseGame = _this.pauseGame.bind(_this);
		_this.clearAll = _this.clearAll.bind(_this);
		_this.setSlow = _this.setSlow.bind(_this);
		_this.setMedium = _this.setMedium.bind(_this);
		_this.setFast = _this.setFast.bind(_this);
		_this.setFew = _this.setFew.bind(_this);
		_this.setMany = _this.setMany.bind(_this);
		_this.setMost = _this.setMost.bind(_this);
		return _this;
	}

	App.prototype.startGame = function startGame() {

		var speed = this.state.generationTimer;

		this.setState({
			running: true
		});

		if (this.state.pause === true) {
			this.setState({
				pause: false
			});
		}

		function pauseGame() {
			clearInterval(timer);
		};

		var timer = setInterval(function () {
			if (this.state.pause === true) {
				pauseGame();
			} else {
				var a = this.state.array.slice();
				generate(a);
			}
		}.bind(this), speed);

		function generate(a) {

			var nextGen = [];
			var verdict;

			for (var x = 1; x < a.length; x++) {

				// Iterate through current array and generate a verdict count based on the status of neighbor cells:
				if (x === 1) {
					verdict = a[x + 1] + a[x + 49] + a[x + 50] + a[x + 51];
				} else if (x >= 2 && x <= 49) {
					verdict = a[x - 1] + a[x + 1] + a[x + 49] + a[x + 50] + a[x + 51];
				} else if (x === 50) {
					verdict = a[x - 1] + a[x + 49] + a[x + 50];
				} else if (x === 51) {
					verdict = a[x + 1] + a[x - 50] + a[x - 49] + a[x + 50] + a[x + 51];
				} else if (x > 51 && x <= 1449) {
					verdict = a[x - 1] + a[x + 1] + a[x - 49] + a[x - 50] + a[x - 51] + a[x + 49] + a[x + 50] + a[x + 51];
				} else if (x === 1450) {
					verdict = a[x - 1] + a[x + 49] + a[x + 50];
				} else if (x === 1451) {
					verdict = a[x + 1] + a[x - 50] + a[x - 51];
				} else if (x >= 1452 && x <= 1499) {
					verdict = a[x - 1] + a[x + 1] + a[x - 49] + a[x - 50] + a[x - 51];
				} else if (x === 1500) {
					verdict = a[x - 1] + a[x - 49] + a[x - 50];
				}

				// Depending on the current state of each cell and its verdict, render it's fate according to the game rules:
				if (a[x] === 0) {
					if (verdict === 3) {
						nextGen[x] = 1;
					} else {
						nextGen[x] = 0;
					}
				} else if (a[x] === 1) {
					if (verdict === 0 || verdict === 1) {
						nextGen[x] = 0;
					} else if (verdict >= 4) {
						nextGen[x] = 0;
					} else if (verdict === 2 || verdict === 3) {
						nextGen[x] = 1;
					}
				}
			}

			// Submit the next generation array for rendering:
			renderNextGeneration(nextGen);
		};

		var renderNextGeneration = function (array) {
			var count = this.state.counter;
			this.setState({
				array: array,
				counter: count + 1
			});
		}.bind(this);
	};

	App.prototype.pauseGame = function pauseGame() {
		this.setState({
			pause: true
		});
	};

	App.prototype.clearAll = function clearAll() {
		var currentArray = this.state.array.slice();
		var newArray = [];
		for (var a = 1; a < currentArray.length; a++) {
			newArray[a] = 0;
		}
		this.setState({
			counter: 0,
			pause: true,
			array: newArray
		});
	};

	App.prototype.handleCoordinates = function handleCoordinates(index) {
		var currentArray = this.state.array.slice();
		if (currentArray[index] === 1) {
			currentArray[index] = 0;
		} else {
			currentArray[index] = 1;
		}
		this.setState({
			array: currentArray
		});
	};

	App.prototype.renderRandomState = function renderRandomState() {
		var array = [];
		var width = 800;
		var height = 480;
		var side = width / 50 - 1;
		for (var i = 1; i < 30 * 50 + 1; i++) {
			var rand = Math.round(Math.random(1) * this.state.randomControlValue);
			if (rand !== 1) {
				rand = 0;
			};
			array[i] = rand;
		}
		this.setState({
			side: side,
			array: array
		});
	};

	App.prototype.setFast = function setFast() {
		if (this.state.pause === false && this.state.running === true) {
			this.setState({
				pause: true,
				generationTimer: 5
			});
			setTimeout(function () {
				this.startGame();
			}.bind(this), 15);
		} else {
			this.setState({
				generationTimer: 5
			});
		}
	};

	App.prototype.setMedium = function setMedium() {
		if (this.state.pause === false && this.state.running === true) {
			this.setState({
				pause: true,
				generationTimer: 500
			});
			setTimeout(function () {
				this.startGame();
			}.bind(this), 15);
		} else {
			this.setState({
				generationTimer: 500
			});
		}
	};

	App.prototype.setSlow = function setSlow() {
		if (this.state.pause === false && this.state.running === true) {
			this.setState({
				pause: true,
				generationTimer: 1000
			});
			setTimeout(function () {
				this.startGame();
			}.bind(this), 15);
		} else {
			this.setState({
				generationTimer: 1000
			});
		}
	};

	App.prototype.setMost = function setMost() {
		this.setState({
			randomControlValue: 3
		});
	};

	App.prototype.setMany = function setMany() {
		this.setState({
			randomControlValue: 6
		});
	};

	App.prototype.setFew = function setFew() {
		this.setState({
			randomControlValue: 15
		});
	};

	App.prototype.componentWillMount = function componentWillMount() {
		this.renderRandomState();
	};

	App.prototype.render = function render() {
		var red = "#F35887";
		var activeRed = "#FF484D";
		var blue = "#487FFF";
		var blueActive = "#00dffc";

		var fastStyle = { background: red };
		var mediumStyle = { background: red };
		var slowStyle = { background: red };

		if (this.state.generationTimer === 5) {
			fastStyle = { background: activeRed };
		} else if (this.state.generationTimer === 500) {
			mediumStyle = { background: activeRed };
		} else if (this.state.generationTimer === 1000) {
			slowStyle = { background: activeRed };
		}

		var fewStyle = { background: blue };
		var manyStyle = { background: blue };
		var mostStyle = { background: blue };

		if (this.state.randomControlValue === 15) {
			fewStyle = { background: blueActive };
		} else if (this.state.randomControlValue === 6) {
			manyStyle = { background: blueActive };
		} else if (this.state.randomControlValue === 3) {
			mostStyle = { background: blueActive };
		}

		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ className: "infoBox" },
				React.createElement(
					"p",
					{ className: "generationCount" },
					React.createElement(
						"a",
						{ target: "_blank", href: "https://www.freecodecamp.com/challenges/build-the-game-of-life" },
						"Conway's Game of Life"
					),
					" — Current Generation: ",
					this.state.counter
				)
			),
			React.createElement(
				"div",
				{ className: "flexWrapper" },
				React.createElement(
					"div",
					{ className: "controlPanel" },
					React.createElement(
						"div",
						{ className: "controlBtns" },
						React.createElement(
							"button",
							{ className: "startBtn", onClick: this.startGame },
							"Start "
						),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ className: "pauseBtn", onClick: this.pauseGame },
							"Pause "
						),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ className: "clearBtn", onClick: this.clearAll },
							"Clear All "
						),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ className: "randomBtn", onClick: this.renderRandomState },
							"New Grid"
						)
					),
					React.createElement(
						"div",
						{ className: "selectRandom" },
						React.createElement(
							"button",
							{ style: mostStyle, className: "mostBtn", onClick: this.setMost },
							"Most"
						),
						React.createElement(
							"button",
							{ style: manyStyle, className: "manyBtn", onClick: this.setMany },
							"Many "
						),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ style: fewStyle, className: "fewBtn", onClick: this.setFew },
							"Few"
						),
						React.createElement("br", null)
					),
					React.createElement(
						"div",
						{ className: "speedBtns" },
						React.createElement(
							"button",
							{ style: fastStyle, className: "fastBtn", onClick: this.setFast },
							"Fast"
						),
						React.createElement(
							"button",
							{ style: mediumStyle, className: "mediumBtn", onClick: this.setMedium },
							"Medium "
						),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ style: slowStyle, className: "slowBtn", onClick: this.setSlow },
							"Slow"
						),
						React.createElement("br", null)
					)
				),
				React.createElement(GameBoard, {
					array: this.state.array,
					side: this.state.side,
					handleCoordinates: this.handleCoordinates })
			)
		);
	};

	return App;
}(React.Component);

;

var GameBoard = function (_React$Component2) {
	_inherits(GameBoard, _React$Component2);

	function GameBoard() {
		_classCallCheck(this, GameBoard);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	GameBoard.prototype.render = function render() {
		var _this3 = this;

		var boxStyle;
		var arrays = this.props.array.map(function (item, index) {
			// 1 represents alive:
			if (item === 1) {
				boxStyle = {
					width: _this3.props.side,
					height: _this3.props.side,
					marginTop: 1,
					marginRight: 1,
					padding: 0,
					background: '#272932'
				};
			}
			// !== 1 represents dead:
			else if (item !== 1) {
					boxStyle = {
						width: _this3.props.side,
						height: _this3.props.side,
						marginTop: 1,
						marginRight: 1,
						padding: 0,
						background: '#00dffc'
					};
				}
			return React.createElement("div", {
				className: "gameBox",
				onClick: _this3.props.handleCoordinates.bind(_this3, index),
				style: boxStyle,
				key: index });
		});
		return React.createElement(
			"div",
			{ className: "boardWrapper" },
			React.createElement(
				"div",
				{ className: "board" },
				arrays
			)
		);
	};

	return GameBoard;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));