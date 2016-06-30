'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			allow: 'yes',
			player: '',
			computer: '',
			turn: 1,
			initialGameState: '',
			gameState: [],
			result: "gameplay"
		};
		_this.handleSelect = _this.handleSelect.bind(_this);
		_this.handlePlay = _this.handlePlay.bind(_this);
		_this.computerWin = _this.computerWin.bind(_this);
		_this.stopOpponent = _this.stopOpponent.bind(_this);
		_this.randomPlay = _this.randomPlay.bind(_this);
		_this.computerPlay = _this.computerPlay.bind(_this);
		_this.loseGame = _this.loseGame.bind(_this);
		_this.tieGame = _this.tieGame.bind(_this);
		_this.replay = _this.replay.bind(_this);
		_this.reset = _this.reset.bind(_this);
		return _this;
	}

	App.prototype.handleSelect = function handleSelect(choice) {

		if (choice === "X") {
			this.setState({
				player: "X",
				computer: "O"
			});
			this.reset();
		} else if (choice === "O") {
			this.setState({
				player: "O",
				computer: "X"
			});
			this.reset();
		}
	};

	App.prototype.handlePlay = function handlePlay(id) {
		var turn = this.state.turn;
		var player = this.state.player;
		var computer = this.state.computer;
		var initialGameState = this.state.initialGameState;
		var status = this.state.gameState.slice();

		// Player's selection is modified:

		if (document.getElementById(id).innerHTML.length === 0 && this.state.allow === 'yes' && this.state.result === "gameplay") {

			document.getElementById(id).innerHTML = player;

			status[id] = player;
			this.setState({ gameState: status, allow: 'no' });

			// Computer algorithm is triggered:
			if (turn === 5) {
				this.tieGame();
			}

			// If player moves in the center, computer plays a corner 1 // Else, computer plays
			else if (turn === 1) {
					if (status[1] === player || status[3] === player || status[7] === player || status[9] === player) {
						this.computerPlay(5, status, computer);
					} else if (status[5] === undefined) {
						this.computerPlay(5, status, computer);
					} else if (status[1] === undefined) {
						this.computerPlay(1, status, computer);
					} else if (status[9] === undefined) {
						this.computerPlay(9, status, computer);
					}
				} else {
					this.computerWin(status, player, computer);
				}

			this.setState({
				turn: turn + 1
			});
		}
	};

	App.prototype.computerWin = function computerWin(status, player, computer) {
		if (status[1] === computer && status[4] === computer && status[7] === undefined) {
			this.computerPlay(7, status, computer, false);
		} else if (status[1] === computer && status[2] === computer && status[3] === undefined) {
			this.computerPlay(3, status, computer, false);
		} else if (status[1] === computer && status[5] === computer && status[9] === undefined) {
			this.computerPlay(9, status, computer, false);
		} else if (status[9] === computer && status[5] === computer && status[1] === undefined) {
			this.computerPlay(1, status, computer, false);
		} else if (status[1] === computer && status[9] === computer && status[5] === undefined) {
			this.computerPlay(5, status, computer, false);
		} else if (status[4] === computer && status[5] === computer && status[6] === undefined) {
			this.computerPlay(6, status, computer, false);
		} else if (status[7] === computer && status[5] === computer && status[3] === undefined) {
			this.computerPlay(3, status, computer, false);
		} else if (status[3] === computer && status[5] === computer && status[7] === undefined) {
			this.computerPlay(7, status, computer, false);
		} else if (status[6] === computer && status[5] === computer && status[4] === undefined) {
			this.computerPlay(4, status, computer, false);
		} else if (status[2] === computer && status[5] === computer && status[8] === undefined) {
			this.computerPlay(8, status, computer, false);
		} else if (status[5] === computer && status[8] === computer && status[2] === undefined) {
			this.computerPlay(2, status, computer, false);
		} else if (status[3] === computer && status[6] === computer && status[9] === undefined) {
			this.computerPlay(9, status, computer, false);
		} else if (status[1] === computer && status[2] === computer && status[3] === undefined) {
			this.computerPlay(3, status, computer, false);
		} else if (status[1] === computer && status[3] === computer && status[2] === undefined) {
			this.computerPlay(2, status, computer, false);
		} else if (status[1] === computer && status[7] === computer && status[4] === undefined) {
			this.computerPlay(4, status, computer, false);
		} else if (status[1] === computer && status[9] === computer && status[5] === undefined) {
			this.computerPlay(5, status, computer, false);
		} else if (status[5] === computer && status[6] === computer && status[4] === undefined) {
			this.computerPlay(4, status, computer, false);
		} else if (status[1] === computer && status[4] === computer && status[6] === computer && status[5] === undefined) {
			this.computerPlay(5, status, computer, false);
		} else if (status[1] === computer && status[7] === computer && status[9] === computer && status[8] === undefined) {
			this.computerPlay(8, status, computer, false);
		} else if (status[1] === computer && status[7] === computer && status[8] === computer && status[9] === undefined) {
			this.computerPlay(9, status, computer, false);
		} else if (status[1] === computer && status[9] === computer && status[8] === computer && status[7] === undefined) {
			this.computerPlay(7, status, computer, false);
		} else if (status[1] === computer && status[2] === computer && status[5] === computer && status[8] === undefined) {
			this.computerPlay(8, status, computer, false);
		} else if (status[1] === computer && status[5] === computer && status[8] === computer && status[2] === undefined) {
			this.computerPlay(2, status, computer, false);
		} else if (status[1] === computer && status[2] === computer && status[8] === computer && status[5] === undefined) {
			this.computerPlay(5, status, computer, false);
		} else if (status[1] === computer && status[3] === computer && status[6] === computer && status[9] === undefined) {
			this.computerPlay(9, status, computer, false);
		} else if (status[1] === computer && status[6] === computer && status[9] === computer && status[3] === undefined) {
			this.computerPlay(3, status, computer, false);
		} else if (status[1] === computer && status[9] === computer && status[3] === computer && status[6] === undefined) {
			this.computerPlay(6, status, computer, false);
		} else if (status[3] === computer && status[5] === computer && status[6] === undefined) {
			this.computerPlay(6, status, computer, false);
		} else {
			this.stopOpponent(status, player, computer);
		}
	};

	App.prototype.stopOpponent = function stopOpponent(status, player, computer) {
		if (status[1] === player && status[3] === player && status[5] === computer && status[2] === undefined) {
			this.computerPlay(2, status, computer);
		} else if (status[1] === player && status[7] === player && status[5] === computer && status[4] === undefined) {
			this.computerPlay(4, status, computer);
		} else if (status[7] === player && status[9] === player && status[5] === computer && status[8] === undefined) {
			this.computerPlay(8, status, computer);
		} else if (status[3] === player && status[9] === player && status[6] === computer && status[6] === undefined) {
			this.computerPlay(6, status, computer);
		} else if (status[1] === player && status[9] === player && status[5] === computer && status[2] === undefined) {
			this.computerPlay(2, status, computer);
		} else if (status[8] === player && status[6] === player && status[5] === computer && status[7] === undefined) {
			this.computerPlay(7, status, computer);
		} else if (status[7] === player && status[3] === player && status[5] === computer && status[6] === undefined) {
			this.computerPlay(6, status, computer);
		} else if (status[1] === player && status[7] === player && status[3] === undefined && status[4] === computer) {
			this.computerPlay(3, status, computer);
		} else if (status[1] === player && status[3] === player && status[7] === undefined && status[2] === computer) {
			this.computerPlay(7, status, computer);
		} else if (status[1] === computer && status[5] === player && status[9] === player && status[3] === undefined) {
			this.computerPlay(3, status, computer);
		} else if (status[2] === player && status[5] === player && status[8] === undefined) {
			this.computerPlay(8, status, computer);
		} else if (status[2] === player && status[8] === player && status[5] === undefined) {
			this.computerPlay(5, status, computer);
		} else if (status[3] === player && status[9] === player && status[6] === undefined) {
			this.computerPlay(6, status, computer);
		} else if (status[3] === player && status[6] === player && status[9] === undefined) {
			this.computerPlay(9, status, computer);
		} else if (status[3] === player && status[5] === player && status[7] === undefined) {
			this.computerPlay(7, status, computer);
		} else if (status[6] === player && status[9] === player && status[3] === undefined) {
			this.computerPlay(3, status, computer);
		} else if (status[5] === player && status[7] === player && status[3] === undefined) {
			this.computerPlay(3, status, computer);
		} else if (status[4] === player && status[5] === player && status[6] === undefined) {
			this.computerPlay(6, status, computer);
		} else if (status[4] === player && status[6] === player && status[5] === undefined) {
			this.computerPlay(5, status, computer);
		} else if (status[5] === player && status[6] === player && status[4] === undefined) {
			this.computerPlay(4, status, computer);
		} else if (status[7] === player && status[8] === player && status[9] === undefined) {
			this.computerPlay(9, status, computer);
		} else if (status[8] === player && status[9] === player && status[7] === undefined) {
			this.computerPlay(7, status, computer);
		} else if (status[7] === player && status[9] === player && status[8] === undefined) {
			this.computerPlay(8, status, computer);
		} else if (status[3] === player && status[7] === player && status[5] === undefined) {
			this.computerPlay(5, status, computer);
		} else if (status[1] === player && status[2] === player && status[3] === undefined) {
			this.computerPlay(3, status, computer);
		} else if (status[1] === player && status[3] === player && status[2] === undefined) {
			this.computerPlay(2, status, computer);
		} else if (status[1] === player && status[3] === player && status[2] === undefined) {
			this.computerPlay(2, status, computer);
		} else if (status[1] === player && status[7] === player && status[4] === undefined) {
			this.computerPlay(4, status, computer);
		} else if (status[1] === player && status[4] === player && status[7] === undefined) {
			this.computerPlay(7, status, computer);
		} else if (status[1] === player && status[5] === player && status[9] === undefined) {
			this.computerPlay(9, status, computer);
		} else if (status[1] === player && status[9] === player && status[5] === undefined) {
			this.computerPlay(5, status, computer);
		} else if (status[1] === player && status[7] === player && status[4] === undefined) {
			this.computerPlay(4, status, computer);
		} else {
			this.randomPlay(status, player, computer);
		}
	};

	App.prototype.randomPlay = function randomPlay(status, player, computer) {
		console.log('random play');
		for (var i = 1; i < status.length; i++) {
			if (status[i] === undefined) {
				this.computerPlay(i, status, computer);
				break;
			}
		}
	};

	App.prototype.computerPlay = function computerPlay(index, status, computer, winning) {
		var timer = setTimeout(function () {
			document.getElementById(index).innerHTML = computer;
			status[index] = computer;
			this.setState({
				allow: 'yes',
				status: status
			});
			if (winning === true) {
				this.winGame();
			}
			if (winning === false) {
				this.setState({
					allow: 'no'
				});
				this.loseGame();
			}
		}.bind(this), 250);
		timer;
	};

	App.prototype.tieGame = function tieGame() {
		var tie = setTimeout(function () {
			console.log("Good job, you tied!");
			this.setState({
				result: "Good job, you tied!"
			});
		}.bind(this), 250);
		tie;
	};

	App.prototype.loseGame = function loseGame() {
		var lose = setTimeout(function () {
			console.log("You lost!");
			this.setState({
				result: "You lost!"
			});
		}.bind(this), 250);
		lose;
	};

	App.prototype.reset = function reset() {
		this.setState({
			allow: 'yes',
			turn: 1,
			initialGameState: '',
			gameState: [],
			result: "gameplay"
		});

		document.getElementById("selectMenu").style.display = "none";
		document.getElementById(1).innerHTML = null;
		document.getElementById(2).innerHTML = null;
		document.getElementById(3).innerHTML = null;
		document.getElementById(4).innerHTML = null;
		document.getElementById(5).innerHTML = null;
		document.getElementById(6).innerHTML = null;
		document.getElementById(7).innerHTML = null;
		document.getElementById(8).innerHTML = null;
		document.getElementById(9).innerHTML = null;
	};

	App.prototype.replay = function replay() {
		this.reset();
		document.getElementById("selectMenu").style.display = "block";
	};

	App.prototype.render = function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(SelectPlayer, {
				handleSelect: this.handleSelect }),
			React.createElement(ResultsContainer, {
				result: this.state.result,
				replay: this.replay }),
			React.createElement(
				'div',
				{ className: 'container' },
				React.createElement('div', { className: 'gameBox', id: '1', onClick: this.handlePlay.bind(this, 1) }),
				React.createElement('div', { className: 'gameBox', id: '2', onClick: this.handlePlay.bind(this, 2) }),
				React.createElement('div', { className: 'gameBox', id: '3', onClick: this.handlePlay.bind(this, 3) }),
				React.createElement('div', { className: 'gameBox', id: '4', onClick: this.handlePlay.bind(this, 4) }),
				React.createElement('div', { className: 'gameBox', id: '5', onClick: this.handlePlay.bind(this, 5) }),
				React.createElement('div', { className: 'gameBox', id: '6', onClick: this.handlePlay.bind(this, 6) }),
				React.createElement('div', { className: 'gameBox', id: '7', onClick: this.handlePlay.bind(this, 7) }),
				React.createElement('div', { className: 'gameBox', id: '8', onClick: this.handlePlay.bind(this, 8) }),
				React.createElement('div', { className: 'gameBox', id: '9', onClick: this.handlePlay.bind(this, 9) })
			)
		);
	};

	return App;
}(React.Component);

;

var SelectPlayer = function (_React$Component2) {
	_inherits(SelectPlayer, _React$Component2);

	function SelectPlayer() {
		_classCallCheck(this, SelectPlayer);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	SelectPlayer.prototype.render = function render() {
		return React.createElement(
			'div',
			{ className: 'selectPlayer', id: 'selectMenu' },
			React.createElement(
				'p',
				null,
				'Choose your side:'
			),
			React.createElement(
				'div',
				{ className: 'sides' },
				React.createElement(
					'div',
					{ onClick: this.props.handleSelect.bind(this, "X"), className: 'chooseSide' },
					'X'
				),
				React.createElement(
					'div',
					{ onClick: this.props.handleSelect.bind(this, "O"), className: 'chooseSide' },
					'O'
				)
			)
		);
	};

	return SelectPlayer;
}(React.Component);

var ResultsContainer = function (_React$Component3) {
	_inherits(ResultsContainer, _React$Component3);

	function ResultsContainer() {
		_classCallCheck(this, ResultsContainer);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	ResultsContainer.prototype.render = function render() {
		var style = {
			display: "none"
		};
		if (this.props.result !== "gameplay") {
			style = {
				display: "block"
			};
		}
		return React.createElement(
			'div',
			{ className: 'gameEnd', id: 'gameEndMenu', style: style },
			React.createElement(
				'h1',
				null,
				this.props.result
			),
			React.createElement(
				'button',
				{ className: 'replay', onClick: this.props.replay },
				'Play again?'
			)
		);
	};

	return ResultsContainer;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));