
class App extends React.Component {
		constructor() {
		super();
		this.state = {
			allow: 'yes',
			player: '',
			computer: '',
			turn: 1,
			initialGameState: '',
			gameState: [],
			result: "gameplay"
		};
		this.handleSelect = this.handleSelect.bind(this);
		this.handlePlay = this.handlePlay.bind(this);
		this.computerWin = this.computerWin.bind(this);
		this.stopOpponent = this.stopOpponent.bind(this);
		this.randomPlay = this.randomPlay.bind(this);
		this.computerPlay = this.computerPlay.bind(this);
		this.loseGame = this.loseGame.bind(this);
		this.tieGame = this.tieGame.bind(this);
		this.replay = this.replay.bind(this);
		this.reset = this.reset.bind(this);
	}
	handleSelect(choice) {

		if (choice === "X") {
			this.setState({
				player: "X",
				computer: "O"
			});
			this.reset();
		}
		else if (choice === "O") {
			this.setState({
				player: "O",
				computer: "X"
			})
			this.reset();
		}

	}
	handlePlay(id) {
		var turn = this.state.turn;
		var player = this.state.player;
		var computer = this.state.computer;
		var initialGameState = this.state.initialGameState;
		var status = this.state.gameState.slice();
		
		// Player's selection is modified:

		if ((document.getElementById(id).innerHTML.length === 0) && (this.state.allow === 'yes') && (this.state.result === "gameplay")) {

		document.getElementById(id).innerHTML = player;

		status[id] = player;
		this.setState({ gameState: status, allow: 'no' });

		// Computer algorithm is triggered:
		if (turn === 5) {
			this.tieGame();
		}

		// If player moves in the center, computer plays a corner 1 // Else, computer plays 
		else if (turn === 1) {
			if ((status[1] === player) || (status[3] === player) || (status[7] === player) || (status[9] === player)) {
				this.computerPlay(5, status, computer);
			}
			else if (status[5] === undefined) { this.computerPlay(5, status, computer); }
			else if (status[1] === undefined) { this.computerPlay(1, status, computer); }
			else if (status[9] === undefined) { this.computerPlay(9, status, computer); }
		}

		else { this.computerWin(status, player, computer); }

		this.setState({
			turn: turn + 1
		});

		}
	}
	computerWin(status, player, computer) {
		if ((status[1] === computer) && (status[4] === computer) && (status[7] === undefined)) { this.computerPlay(7, status, computer, false); }
		else if ((status[1] === computer) && (status[2] === computer) && (status[3] === undefined)) { this.computerPlay(3, status, computer, false); } 
		else if ((status[1] === computer) && (status[5] === computer) && (status[9] === undefined)) { this.computerPlay(9, status, computer, false); }
		else if ((status[9] === computer) && (status[5] === computer) && (status[1] === undefined)) { this.computerPlay(1, status, computer, false); }
		else if ((status[1] === computer) && (status[9] === computer) && (status[5] === undefined)) { this.computerPlay(5, status, computer, false); }
		else if ((status[4] === computer) && (status[5] === computer) && (status[6] === undefined)) { this.computerPlay(6, status, computer, false); }
    else if ((status[7] === computer) && (status[5] === computer) && (status[3] === undefined)) { this.computerPlay(3, status, computer, false); }
    else if ((status[3] === computer) && (status[5] === computer) && (status[7] === undefined)) { this.computerPlay(7, status, computer, false); } 
		else if ((status[6] === computer) && (status[5] === computer) && (status[4] === undefined)) { this.computerPlay(4, status, computer, false); } 
		else if ((status[2] === computer) && (status[5] === computer) && (status[8] === undefined)) { this.computerPlay(8, status, computer, false); } 
		else if ((status[5] === computer) && (status[8] === computer) && (status[2] === undefined)) { this.computerPlay(2, status, computer, false); } 
		else if ((status[3] === computer) && (status[6] === computer) && (status[9] === undefined)) { this.computerPlay(9, status, computer, false); }
		else if ((status[1] === computer) && (status[2] === computer) && (status[3] === undefined)) { this.computerPlay(3, status, computer, false); } 
		else if ((status[1] === computer) && (status[3] === computer) && (status[2] === undefined)) { this.computerPlay(2, status, computer, false); }
		else if ((status[1] === computer) && (status[7] === computer) && (status[4] === undefined)) { this.computerPlay(4, status, computer, false); }
		else if ((status[1] === computer) && (status[9] === computer) && (status[5] === undefined)) { this.computerPlay(5, status, computer, false); }
		else if ((status[5] === computer) && (status[6] === computer) && (status[4] === undefined)) { this.computerPlay(4, status, computer, false); }
		else if ((status[1] === computer) && (status[4] === computer) && (status[6] === computer) && (status[5] === undefined)) { this.computerPlay(5, status, computer, false); }
		else if ((status[1] === computer) && (status[7] === computer) && (status[9] === computer) && (status[8] === undefined)) { this.computerPlay(8, status, computer, false); }
		else if ((status[1] === computer) && (status[7] === computer) && (status[8] === computer) && (status[9] === undefined)) { this.computerPlay(9, status, computer, false); }
		else if ((status[1] === computer) && (status[9] === computer) && (status[8] === computer) && (status[7] === undefined)) { this.computerPlay(7, status, computer, false); }
		else if ((status[1] === computer) && (status[2] === computer) && (status[5] === computer) && (status[8] === undefined)) { this.computerPlay(8, status, computer, false); }
		else if ((status[1] === computer) && (status[5] === computer) && (status[8] === computer) && (status[2] === undefined)) { this.computerPlay(2, status, computer, false); }
		else if ((status[1] === computer) && (status[2] === computer) && (status[8] === computer) && (status[5] === undefined)) { this.computerPlay(5, status, computer, false); }	
		else if ((status[1] === computer) && (status[3] === computer) && (status[6] === computer) && (status[9] === undefined)) { this.computerPlay(9, status, computer, false); }
		else if ((status[1] === computer) && (status[6] === computer) && (status[9] === computer) && (status[3] === undefined)) { this.computerPlay(3, status, computer, false); }
		else if ((status[1] === computer) && (status[9] === computer) && (status[3] === computer) && (status[6] === undefined)) { this.computerPlay(6, status, computer, false); }	
		else if ((status[3] === computer) && (status[5] === computer) && (status[6] === undefined)) { this.computerPlay(6, status, computer, false); }	
		else { this.stopOpponent(status, player, computer); }
	}
	stopOpponent(status, player, computer) {
		if ((status[1] === player) && (status[3] === player) && (status[5] === computer) && (status[2] === undefined)) { this.computerPlay(2, status, computer); }
		else if ((status[1] === player) && (status[7] === player) && (status[5] === computer) && (status[4] === undefined)) { this.computerPlay(4, status, computer); }
		else if ((status[7] === player) && (status[9] === player) && (status[5] === computer) && (status[8] === undefined)) { this.computerPlay(8, status, computer); }		
		else if ((status[3] === player) && (status[9] === player) && (status[6] === computer) && (status[6] === undefined)) { this.computerPlay(6, status, computer); }
		else if ((status[1] === player) && (status[9] === player) && (status[5] === computer) && (status[2] === undefined)) { this.computerPlay(2, status, computer); }
 		else if ((status[8] === player) && (status[6] === player) && (status[5] === computer) && (status[7] === undefined)) { this.computerPlay(7, status, computer); }
		else if ((status[7] === player) && (status[3] === player) && (status[5] === computer) && (status[6] === undefined)) { this.computerPlay(6, status, computer); }
		else if ((status[1] === player) && (status[7] === player) && (status[3] === undefined) && (status[4] === computer)) { this.computerPlay(3, status, computer); }
		else if ((status[1] === player) && (status[3] === player) && (status[7] === undefined) && (status[2] === computer)) { this.computerPlay(7, status, computer); }
 		else if ((status[1] === computer) && (status[5] === player) && (status[9] === player) && (status[3] === undefined)) { this.computerPlay(3, status, computer); }
		else if ((status[2] === player) && (status[5] === player) && (status[8] === undefined)) { this.computerPlay(8, status, computer); }
		else if ((status[2] === player) && (status[8] === player) && (status[5] === undefined)) { this.computerPlay(5, status, computer); }
		else if ((status[3] === player) && (status[9] === player) && (status[6] === undefined)) { this.computerPlay(6, status, computer); }
		else if ((status[3] === player) && (status[6] === player) && (status[9] === undefined)) { this.computerPlay(9, status, computer); }
		else if ((status[3] === player) && (status[5] === player) && (status[7] === undefined)) { this.computerPlay(7, status, computer); }
		else if ((status[6] === player) && (status[9] === player) && (status[3] === undefined)) { this.computerPlay(3, status, computer); }
		else if ((status[5] === player) && (status[7] === player) && (status[3] === undefined)) { this.computerPlay(3, status, computer); }
		else if ((status[4] === player) && (status[5] === player) && (status[6] === undefined)) { this.computerPlay(6, status, computer); }
		else if ((status[4] === player) && (status[6] === player) && (status[5] === undefined)) { this.computerPlay(5, status, computer); }							
		else if ((status[5] === player) && (status[6] === player) && (status[4] === undefined)) { this.computerPlay(4, status, computer); }
		else if ((status[7] === player) && (status[8] === player) && (status[9] === undefined)) { this.computerPlay(9, status, computer); }
		else if ((status[8] === player) && (status[9] === player) && (status[7] === undefined)) { this.computerPlay(7, status, computer); }
		else if ((status[7] === player) && (status[9] === player) && (status[8] === undefined)) { this.computerPlay(8, status, computer); }
		else if ((status[3] === player) && (status[7] === player) && (status[5] === undefined)) { this.computerPlay(5, status, computer); }
		else if ((status[1] === player) && (status[2] === player) && (status[3] === undefined)) { this.computerPlay(3, status, computer); }
		else if ((status[1] === player) && (status[3] === player) && (status[2] === undefined)) { this.computerPlay(2, status, computer); }
		else if ((status[1] === player) && (status[3] === player) && (status[2] === undefined)) { this.computerPlay(2, status, computer); }
		else if ((status[1] === player) && (status[7] === player) && (status[4] === undefined)) { this.computerPlay(4, status, computer); }
		else if ((status[1] === player) && (status[4] === player) && (status[7] === undefined)) { this.computerPlay(7, status, computer); }
		else if ((status[1] === player) && (status[5] === player) && (status[9] === undefined)) { this.computerPlay(9, status, computer); }
		else if ((status[1] === player) && (status[9] === player) && (status[5] === undefined)) { this.computerPlay(5, status, computer); }
		else if ((status[1] === player) && (status[7] === player) && (status[4] === undefined)) { this.computerPlay(4, status, computer); }				

		else { this.randomPlay(status, player, computer); }
	}
	randomPlay(status, player, computer) {
		console.log('random play');
		for (var i = 1; i < status.length; i++) {
			if (status[i] === undefined) {
				this.computerPlay(i, status, computer);
				break;
			}
		}
	}
	computerPlay(index, status, computer, winning) {
		var timer = setTimeout(function() {
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
					})
					this.loseGame();
				}
		}.bind(this), 250);
		timer;
	}
	tieGame() {
		var tie = setTimeout(function() {
			console.log("Good job, you tied!");
			this.setState({
				result: "Good job, you tied!"
			})
		}.bind(this), 250);
		tie;
	}
	loseGame() {
		var lose = setTimeout(function() {
			console.log("You lost!");
			this.setState({
				result: "You lost!"
			})
		}.bind(this), 250);
		lose;
	}
	reset() {
		this.setState({
			allow: 'yes',
			turn: 1,
			initialGameState: '',
			gameState: [],
			result: "gameplay"
		});

		document.getElementById("selectMenu").style.display = "none";
		document.getElementById(1).innerHTML  = null;
		document.getElementById(2).innerHTML  = null;
		document.getElementById(3).innerHTML  = null;
		document.getElementById(4).innerHTML  = null;
		document.getElementById(5).innerHTML  = null;
		document.getElementById(6).innerHTML  = null;
		document.getElementById(7).innerHTML  = null;
		document.getElementById(8).innerHTML  = null;
		document.getElementById(9).innerHTML  = null;

	}
	replay() {
		this.reset();
		document.getElementById("selectMenu").style.display = "block";
	}
	render() {
		return (
			<div>
				<SelectPlayer
					handleSelect = {this.handleSelect} />
				<ResultsContainer
					result = {this.state.result}
					replay = {this.replay} />
				<div className = "container">
					<div className = "gameBox" id = "1" onClick = {this.handlePlay.bind(this, 1)}></div>
					<div className = "gameBox" id = "2" onClick = {this.handlePlay.bind(this, 2)}></div>
					<div className = "gameBox" id = "3" onClick = {this.handlePlay.bind(this, 3)}></div>
					<div className = "gameBox" id = "4" onClick = {this.handlePlay.bind(this, 4)}></div>
					<div className = "gameBox" id = "5" onClick = {this.handlePlay.bind(this, 5)}></div>
					<div className = "gameBox" id = "6" onClick = {this.handlePlay.bind(this, 6)}></div>
					<div className = "gameBox" id = "7" onClick = {this.handlePlay.bind(this, 7)}></div>
					<div className = "gameBox" id = "8" onClick = {this.handlePlay.bind(this, 8)}></div>
					<div className = "gameBox" id = "9" onClick = {this.handlePlay.bind(this, 9)}></div>
				</div>
			</div>
		);
	}
};

class SelectPlayer extends React.Component {
	render() {
		return (
				<div className = "selectPlayer" id = "selectMenu">
					<p>Choose your side:</p>
					<div className = "sides">
						<div onClick = {this.props.handleSelect.bind(this, "X")} className = "chooseSide">X</div>
						<div onClick = {this.props.handleSelect.bind(this, "O")} className = "chooseSide">O</div>
					</div>
				</div>
			)
	}
}

class ResultsContainer extends React.Component {
	render() {
		var style = {
			display: "none"
		}
		if (this.props.result !== "gameplay") {
			style = {
				display: "block"
			}
		}
		return (
				<div className = "gameEnd" id = "gameEndMenu" style = {style} >
					<h1>{this.props.result}</h1>
					<button className = "replay" onClick = {this.props.replay}>Play again?</button>
				</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('main'));
