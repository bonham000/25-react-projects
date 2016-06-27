var greenAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
		redAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
		yellowAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
		blueAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			power: 'off',
			strict: 'off',
			player: false,
			replay: null,
			counter: 0,
			turn: 0,
			gameData: []
		};
		this.powerOn = this.powerOn.bind(this);
		this.strictOn = this.strictOn.bind(this);
		this.startGame = this.startGame.bind(this);
		this.randomClick = this.randomClick.bind(this);
		this.playersTurn = this.playersTurn.bind(this);
		this.greenClickComputer = this.greenClickComputer.bind(this);
		this.redClickComputer = this.redClickComputer.bind(this);
		this.yellowClickComputer = this.yellowClickComputer.bind(this);
		this.blueClickComputer = this.blueClickComputer.bind(this);
		this.greenClick = this.greenClick.bind(this);
		this.redClick = this.redClick.bind(this);
		this.yellowClick = this.yellowClick.bind(this);
		this.blueClick = this.blueClick.bind(this);
		this.resetGame = this.resetGame.bind(this);
	}
	resetGame() {
		document.getElementById('winner').style.display = "none";
		this.setState({
			player: false,
			replay: null,
			counter: 0,
			turn: 0,
			gameData: []
		});
		setTimeout(function() {
			this.startGame();
		}.bind(this), 500);
	}
	startGame() {
		if (this.state.power === 'on') {
			this.randomClick();
		}
	}
	powerOn() {
		if (this.state.power === 'off') {
			this.setState({
				power: 'on'
			});
		}
		else {
			this.setState({
				power: 'off',
				strict: 'off',
				player: false,
				replay: null,
				counter: 0,
				turn: 0,
				gameData: []
			});
			setTimeout(function() {
				this.setState({
					power: 'off',
					strict: 'off',
					player: false,
					replay: null,
					counter: 0,
					turn: 0,
					gameData: []
				})
			}.bind(this), 610);
		}
	}
	strictOn() {
		if (this.state.strict === 'off') {
			this.setState({
				strict: 'on'
			});
		}
		else {
			this.setState({
				strict: 'off'
			});
		}
	}
	replay() {
		var data = this.state.gameData.slice();
		var counter = this.state.counter;
		if (counter < data.length) {
			if (data[counter] === 1) { this.greenClickComputer(); this.setState({ counter: counter + 1 }); setTimeout(function() { this.replay() }.bind(this), 600) }
			else if (data[counter] === 2) { this.redClickComputer(); this.setState({ counter: counter + 1 }); setTimeout(function() { this.replay() }.bind(this), 600) }
			else if (data[counter] === 3) { this.yellowClickComputer(); this.setState({ counter: counter + 1 }); setTimeout(function() { this.replay() }.bind(this), 600) }
			else if (data[counter] === 4) { this.blueClickComputer(); this.setState({ counter: counter + 1 }); setTimeout(function() { this.replay() }.bind(this), 600) }
		}
		else if (counter === data.length && !this.state.replay) {
			this.setState({
				counter: 0
			});
			this.randomClick();
		}
		else if (counter === data.length && this.state.replay) {
			this.setState({
				counter: 0,
				player: true
			});
		}
	}
	randomClick() {
		var rand = (Math.round(Math.random() * 3) + 1);

		var turn = this.state.turn;
		var data = this.state.gameData.slice();

		data[turn] = rand;
		turn++;

		this.setState({
			gameData: data,
			turn: turn,
			player: true
		});

		if (rand === 1) { this.greenClickComputer(); }
		else if (rand === 2) { this.redClickComputer(); }
		else if (rand === 3) { this.yellowClickComputer(); }
		else if (rand === 4) { this.blueClickComputer(); }

	}
	playersTurn(button) {
		var data = this.state.gameData.slice();
		var length = data.length;
		var counter = this.state.counter;

			if (button !== data[counter]) {
				console.log('wrong!');
				document.getElementById('0').style.background = "red";
				setTimeout(function() {	document.getElementById('0').style.background = "rgb(40,40,40)"; }, 500);
				if (this.state.strict === 'off') {
					this.setState({
						counter: 0,
						player: false,
						replay: true
					});
					setTimeout(function() {
						this.replay();
					}.bind(this), 1000);
				}
				else if (this.state.strict === 'on') {
					this.setState({
						power: 'on',
						strict: 'on',
						player: false,
						replay: null,
						counter: 0,
						turn: 0,
						gameData: []
					});
					setTimeout(function() { this.startGame(); }.bind(this), 1000);
				}
			}
			else if (button == data[counter] && counter < data.length - 1) {
				console.log('correct!');
				this.setState({
					counter: counter + 1
				});
			}
			else if (button == data[counter] && counter == 4) {
				console.log('You win!!!');
				document.getElementById('winner').style.display = "block"
			}
			else if (button == data[counter] && counter === data.length - 1) {
				console.log('Correct!!!');
				this.setState({
					counter: 0,
					player: false,
					replay: false
				});
				setTimeout(function() {
					this.replay();
				}.bind(this), 1000);
			}
	}
	greenClickComputer() {
		document.getElementById('1').style.background = "#0A9664";
		setTimeout(function() {	document.getElementById('1').style.background = "#04724D"; }, 250);
		greenAudio.play();
	}
	redClickComputer() {
		document.getElementById('2').style.background = "#FF283D";
		setTimeout(function() {	document.getElementById('2').style.background = "#C5283D"; }, 250);
		redAudio.play();
	}
	yellowClickComputer() {
		document.getElementById('3').style.background = "#FFE14B";
		setTimeout(function() {	document.getElementById('3').style.background = "#FFC857"; }, 250);
		yellowAudio.play();
	}
	blueClickComputer() {
		document.getElementById('4').style.background = "#255FE9";
		setTimeout(function() {	document.getElementById('4').style.background = "#255F85"; }, 250);
		blueAudio.play();
	}
	greenClick() {
		if (this.state.player) {
			document.getElementById('1').style.background = "#0A9664";
			setTimeout(function() {	document.getElementById('1').style.background = "#04724D"; }, 250);
			greenAudio.play();
			this.playersTurn(1)
		} 
	}
	redClick() {
		if (this.state.player) {
			document.getElementById('2').style.background = "#FF283D";
			setTimeout(function() {	document.getElementById('2').style.background = "#C5283D"; }, 250);
			redAudio.play();
			this.playersTurn(2)
		}
	}
	yellowClick() {
		if (this.state.player) {
			document.getElementById('3').style.background = "#FFE14B";
			setTimeout(function() {	document.getElementById('3').style.background = "#FFC857"; }, 250);
			yellowAudio.play();
			this.playersTurn(3)
		}
	}
	blueClick() {
		if (this.state.player) {
			document.getElementById('4').style.background = "#255FE9";
			setTimeout(function() {	document.getElementById('4').style.background = "#255F85"; }, 250);
			blueAudio.play();
			this.playersTurn(4)
		}
	}
	render() {
		return (
			<div>
				<GameController
					startGame = {this.startGame}
					power = {this.state.power}
					powerOn = {this.powerOn}
					strict = {this.state.strict}
					strictOn = {this.strictOn}
					turn = {this.state.turn} />
				<div className = "container" id = "0">
					<div
						className = "gameBtn green" id = "1"
						onClick ={this.greenClick}>
					</div>
					<div
						className = "gameBtn red" id = "2"
						onClick ={this.redClick}>
					</div>
					<div
						className = "gameBtn yellow" id = "3"
						onClick ={this.yellowClick}>
					</div>
					<div
						className = "gameBtn blue" id = "4"
						onClick ={this.blueClick}>
					</div>
				</div>
				<div className = "resetScreen" id = "winner">
					<p>You won!</p>
					<button onClick = {this.resetGame}>Replay?</button>
				</div>
				<div className = "credits">
					<p><a href = "https://www.freecodecamp.com/challenges/build-a-simon-game">Simon Game</a> made by <a href = "http://sean.smith.me">Sean Smith</a></p>
				</div>
			</div>
		);
	}
};

class GameController extends React.Component {
	render() {
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
		}

		if (power === 'off') {
			powerToggleStyle = {
				width: "50px",
				height: "50px",
				background: "rgb(150,150,150)",
				borderRadius: "50%",
				float: "right"
			}
			powerToggleText = {
				width: "150px",
				height: "50px",
				float: "left"
			}
			powerStyle = {
				position: "relative",
				bottom: "15px",
				left: "20px",
				color: "rgb(150,150,150)"
			}
		}

		else if (power === 'on') {
			powerToggleStyle = {
				width: "50px",
				height: "50px",
				background: "#5396F9",
				borderRadius: "50%",
				float: "left"
			}
			powerToggleText = {
				width: "150px",
				height: "50px",
				float: "right"
			}
			powerStyle = {
				position: "relative",
				bottom: "17px",
				right: "-15px",
				color: "#5396F9"
			}
		}

		strictSwitchStyle = {
				width: "200px",
				height: "50px",
				background: "#272932",
				borderRadius: "25px"
		}

		if (strict === 'off') {
			strictToggleStyle = {
				width: "50px",
				height: "50px",
				background: "rgb(150,150,150)",
				borderRadius: "50%",
				float: "right"
			}
			strictToggleText = {
				width: "150px",
				height: "50px",
				float: "left"
			}
			strictStyle = {
				position: "relative",
				bottom: "15px",
				left: "20px",
				color: "rgb(150,150,150)"
			}
		}

		else if (strict === 'on') {
			strictToggleStyle = {
				width: "50px",
				height: "50px",
				background: "#ff4e50",
				borderRadius: "50%",
				float: "left"
			}
			strictToggleText = {
				width: "150px",
				height: "50px",
				float: "right"
			}
			strictStyle = {
				position: "relative",
				bottom: "17px",
				right: "-15px",
				color: "#ff4e50"
			}
		}
		return (
				<div className = "controller">
					<div className = "switchContainer">
						<div className = "switch powerSwitch" style = {powerSwitchStyle} onClick = {this.props.powerOn}>
							<div style = {powerToggleText}><p style = {powerStyle}>power {this.props.power}</p></div>
							<div className = "toggleBox" style = {powerToggleStyle}></div>
						</div>
						<div className = "switch strictSwitch" style = {strictSwitchStyle} onClick = {this.props.strictOn}>
							<div style = {strictToggleText}><p style = {strictStyle}>strict {this.props.strict}</p></div>
							<div className = "toggleBox" style = {strictToggleStyle}></div>
						</div>
						<button
							className = "startBtn"
							onClick = {this.props.startGame}>Start Game
						</button>
						<div className = "turnBox">
							<div><p className = "turnText">Turn:</p></div>
							<div className = "turnCounter">{this.props.turn}</div>
						</div>
					</div>
				</div>
			);
	}
};

ReactDOM.render(<App />, document.getElementById('main'));